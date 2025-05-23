// import WebSocket from "ws";
// require("dotenv").config();

// const apiKey = process.env.API_KEY;
// const apiSecret = process.env.API_SECRET;
// const request = {
//   id: new Date().getTime(),
//   method: "order.place",
//   params: {
//     symbol: "BTCUSDT",
//     side: "BUY",
//     type: "LIMIT",
//     price: "0.1",
//     quantity: "10",
//     timeInForce: "GTC",
//     timestamp: new Date().getTime(),
//     apiKey: apiKey,
//     signature: apiSecret,
//   },
// };

// const socket = new WebSocket("wss://testnet.binance.vision/ws-api/v3");

// socket.onopen = (e: WebSocket.Event) => {
//   socket.send(JSON.stringify(request));
// };

// socket.onmessage = (e: WebSocket.MessageEvent) => {
//   console.log("Message from server ", e.data);
// };

// socket.onclose = (e: WebSocket.CloseEvent) => {
//   console.log(e);
// };

// socket.onerror = (e: WebSocket.ErrorEvent) => {
//   console.log(e);
// };

// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database(":memory:");

// db.serialize(() => {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", (_err: any, row: any) => {
//     console.log(row.id + ": " + row.info);
//   });
// });

// db.close();

setInterval(() => {
    console.log("Hello ")
}, 1000);
