// // Create a new client instance
// const client = new Client({
//   authStrategy: new LocalAuth(),
//   puppeteer: {
//     executablePath:
//       "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
//   },
// });

// // When the client is ready, run this code (only once)
// client.once("ready", () => {
//   console.log("Client is ready!");

//   // Execute the task immediately
//   BulksendMessage();

//   // Set a timer to run every 20 seconds after the first execution
//   setTimeout(function () {
//     setInterval(BulksendMessage, 200000);
//   }, 100000);
// });

// // When the client received QR-Code
// client.on("qr", (qr) => {
//   console.log("QR RECEIVED", qr);
//   qrcode.generate(qr, { small: true });
// });



// const junaid_message =
//   "പ്രിയപ്പെട്ട  ജുനൈദ് അസ്സലാമു അലൈകും  എന്താ വർത്താനം?  സുഖമല്ലേ !! നിന്നെ കുറെ മെസ്സേജ് ചെയ്തിരുന്നു . നിനക്ക് കുറെ മെസ്സേജ് വരുന്നത്  കൊണ്ടാകും എന്റെ മെസ്സേജ് കാണുന്നില്ല എന്ന്  കരുതുന്നു .അത് കൊണ്ടാണ് അറ്റകൈ പ്രയോഗം നടത്തുന്നത്  .മെസ്സേജ് കാണുന്നത് വരെ അയക്കാൻ എന്റെ പ്ലാൻ. മെസ്സേജ് റീപ്ലേ തന്നാൽ അപ്പൊ നിർത്തും ഇൻഷാഅല്ലാഹ് .ഞാൻ ഇപ്പൊ ചെറിയ ഒരു ടിഫിക്കൽറ്റി ആണ്  .പൈസ തിരിച്ചുതന്നാൽ വളരെ നന്നായിരുന്നു .പൈസ വേഗം തിരിച്ചു തരാൻ അല്ലാഹു  തൗഫീഖ്  നൽകട്ടെ  ആമീൻ ....................... എന്ന്  പ്രിയ സുഹുര്ത് ";
// const replay_messge = "MashaAllah .ജുനൈദ് മെസ്സേജ് കണ്ടു വൗ വൗ .";
// const final_messge =
//   "Aന്റെ UAE  നമ്പർ എന്റെ കയ്യിൽ ഇല്ല .പ്ളീസ് ദയവായി അത് ഒന്ന് ഷെയർ ചെയ്യൂ .കടം തന്നത് ചോദിക്കാനാണ് ചിലപ്പോൾ അബുദാബി വരുമ്പോൾ കാണാല്ലോ ";
// var is_stop_needed = false;
// client.on("message_create", (message) => {
//   if (message.from.includes(junaid_number)) {
//     // reply back "pong" directly to the message
//     // message.reply("pong");
//     console.log(message);
//     client.sendMessage(chatid_myslef, replay_messge);
//     is_stop_needed = true;
//   }
// });

// async function BulksendMessage() {
//   console.log("Client is ready!");
//   for (let index = 0; index < 50; index++) {
//     if (is_stop_needed) break;
//     try {
//       await client.sendMessage(chatid_myslef, junaid_message);

//       await client.sendMessage(
//         chatid_myslef,
//         MessageMedia.fromFilePath(
//           "E:\\work\\whatsbot\\wwebjs-bot\\junaidfile\\salimkumar.mp4"
//         )
//       );
//       await client.sendMessage(chatid_myslef, "മാതൃക ");
//       await client.sendMessage(
//         chatid_myslef,
//         MessageMedia.fromFilePath(
//           "E:\\work\\whatsbot\\wwebjs-bot\\junaidfile\\TransferReceipt_20240310224034.pdf"
//         )
//       );
//       await client.sendMessage(chatid_myslef, "സമയം ");
//       await client.sendMessage(
//         chatid_myslef,
//         MessageMedia.fromFilePath(
//           "E:\\work\\whatsbot\\wwebjs-bot\\junaidfile\\avastha_kadam.mp4"
//         )
//       );
//       await client.sendMessage(chatid_myslef, "അവസ്ഥ  ");
//       await client.sendMessage(
//         chatid_myslef,
//         MessageMedia.fromFilePath(
//           "E:\\work\\whatsbot\\wwebjs-bot\\junaidfile\\audio.opus"
//         )
//       );
//       await client.sendMessage(chatid_myslef, "വാക്ക് പാലിക്കൽ  ");
//       await client.sendMessage(chatid_myslef, final_messge);
//     } catch (e) {
//       console.log(e);
//     }
//     await delay(1000);
//   }
// }
// // Helper function to add delay
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// // Start your client
// client.initialize();
