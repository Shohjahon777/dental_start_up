import mongoose from "mongoose";
import UserModel from "../models/user.model";
import AccountModel from "../models/account.model";
import {
	BadRequestException,
	NotFoundException,
	UnauthorizedException,
} from "../utils/app-error";
import { ProviderEnum } from "../enums/account-provider.enum";

export const loginOrCreateAccountService = async (data: {
	provider: string;
	displayName: string;
	providerId: string;
	picture?: string;
	email?: string;
}) => {
	const { providerId, provider, displayName, email, picture } = data;

	const session = await mongoose.startSession();

	try {
		session.startTransaction();
		console.log("Started Session...");

		let user = await UserModel.findOne({ email }).session(session);

		if (!user) {
			// Create a new user if it doesn't exist
			user = new UserModel({
				email,
				name: displayName,
				profilePicture: picture || null,
			});
			await user.save({ session });

			const account = new AccountModel({
				userId: user._id,
				provider: provider,
				providerId: providerId,
			});
			await account.save({ session });






			await user.save({ session });
		}
		await session.commitTransaction();
		await session.endSession();
		console.log("End Session...");

		return { user };
	} catch (error) {
		await session.abortTransaction();
		await session.endSession();
		throw error;
	} finally {
		await session.endSession();
	}
};

export const registerUserService = async (body: {
	email: string;
	name: string;
	password: string;
}) => {
	const { email, name, password } = body;
	const session = await mongoose.startSession();

	try {
		session.startTransaction();

		const existingUser = await UserModel.findOne({ email }).session(session);
		if (existingUser) {
			throw new BadRequestException("Email already exists");
		}

		const user = new UserModel({
			email,
			name,
			password,
		});
		await user.save({ session });

		const account = new AccountModel({
			userId: user._id,
			provider: ProviderEnum.EMAIL,
			providerId: email,
		});
		await account.save({ session });


		await session.commitTransaction();
		await session.endSession();
		console.log("End Session...");

		return {
			userId: user._id
		};
	} catch (error) {
		await session.abortTransaction();
		await session.endSession();

		throw error;
	}
};

export const verifyUserService = async ({
	                                        email,
	                                        password,
	                                        provider = ProviderEnum.EMAIL,
                                        }: {
	email: string;
	password: string;
	provider?: string;
}) => {
	const account = await AccountModel.findOne({ provider, providerId: email });
	if (!account) {
		throw new NotFoundException("Invalid email or password");
	}

	const user = await UserModel.findById(account.userId);

	if (!user) {
		throw new NotFoundException("User not found for the given account");
	}

	const isMatch = await user.comparePassword(password);
	if (!isMatch) {
		throw new UnauthorizedException("Invalid email or password");
	}

	return user.omitPassword();
};