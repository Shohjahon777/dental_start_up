import "dotenv/config"
import express from "express"
import {config} from "./config/app.config";
import session from "cookie-session"
import cors from "cors"
import {errorHandler} from "./middleware/error-handler.middleware";
import connectDatabase from "./config/database.config";
import authRoutes from "./routes/auth.route";
import passport from "passport";


import "./config/passport.config"

const app = express()

const BASE_PATH = config.BASE_PATH

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(
	session({
		name: "session",
		keys: [config.SESSION_SECRET],
		maxAge: 24 * 60 * 60 * 1000,
		secure: config.NODE_ENV === "production",
		httpOnly: true,
		sameSite: "lax"
	})
)

app.use(passport.initialize())
app.use(passport.session())

app.use(
	cors({
		origin: config.FRONTEND_ORIGIN,
		credentials: true,
	})
)

app.use(`${BASE_PATH}/auth`, authRoutes);


app.use(errorHandler)

app.listen(config.PORT, async() => {
	console.log(`Server started on port ${config.PORT} in ${config.NODE_ENV} mode...`)
	await connectDatabase()
})
