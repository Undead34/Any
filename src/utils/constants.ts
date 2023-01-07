import { config } from "dotenv"

// Init bot
config();

export const Constants = {
  TOKEN: process.env.DISCORD_TOKEN
}