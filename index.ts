import { WebsocketAPI } from "@binance/connector-typescript";
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;

// const callbacks = {
//   open: (client: WebsocketAPI) => client.account(),
//   close: () => console.debug("Disconnected from WebSocket server"),
//   message: (data: string) => console.log(JSON.parse(data).result.balances),
// };

// const websocketAPIClient = () =>
//   new WebsocketAPI(API_KEY, API_SECRET, { callbacks }).account;

// websocketAPIClient();

// setInterval(() => {
//   websocketAPIClient();
// }, 3000);
