import { Events, GatewayIntentBits } from "discord.js";
import { Constants, Client } from "./utils";


const Intents = { intents: [GatewayIntentBits.Guilds] }
const client: Client = new Client(Intents);

client.once(Events.ClientReady, c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

function Init() {
  client.login(Constants.TOKEN);
}

try {
  Init();
} catch (error) {
  console.log(error)
}
