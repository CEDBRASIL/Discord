# Discord Bot

This is a simple Discord bot built with TypeScript. It serves as a template for creating your own Discord bots with basic command and event handling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Events](#events)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd discord-bot
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your Discord bot token:
   ```
   DISCORD_TOKEN=your_bot_token_here
   ```

## Usage

To start the bot, run the following command:
```
npm start
```

## Commands

- **ping**: Responds with a message indicating the bot is alive.

## Events

- **ready**: Logs a message to the console when the bot is online.
- **messageCreate**: Listens for new messages and processes commands.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.