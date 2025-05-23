import * as mongoose from "mongoose";
import {config} from "./app.config";

const connectDatabase = async() => {
	try {
		await mongoose.connect(config.MONGO_URI)
		console.log("MongoDB Connected")
	}catch(error) {
		console.log("Error: MongoDB Connected: ", error);
		process.exit(1);
	}
}

export default connectDatabase