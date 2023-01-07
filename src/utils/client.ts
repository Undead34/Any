import fs from "fs"
import path from "path"
import { Client as DiscordClient, ClientOptions, Collection } from "discord.js";


export default class Client extends DiscordClient {
  public commands: Collection<String, any>;

  constructor(options: ClientOptions) {
    super(options);
    this.commands = new Collection();
    this.loadCommads();
  }

  private loadCommads(): void {
    const commandFiles = fs.readdirSync(`${__dirname}/commands`).filter((file) => file.endsWith('.js') || file.endsWith('.ts'));
    commandFiles.forEach((file) => {
      const command = require(`${__dirname}/commands/${file}`);
      this.commands.set(command.default.name, (command.default as any));
    });
  }
}