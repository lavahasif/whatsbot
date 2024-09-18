const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

class AbstractWhatsappBot {
  constructor() {
    this.client = new Client({
      authStrategy: new LocalAuth(),
      puppeteer: {
        executablePath:
          "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
      },
    });

    this.isStopNeeded = false;
    this.delayMs = 1000; // Default delay (1 second)

    // Event Handlers
    this.client.once("ready", () => this.onClientReady());
    this.client.on("qr", (qr) => this.onQrReceived(qr));
    this.client.on("message_create", (message) =>
      this.onMessageReceived(message)
    );
  }
  onClientReady() {
    throw new Error("onClientReady() must be implemented by subclass.");
  }
  onQrReceived() {
    throw new Error("onQrReceived() must be implemented by subclass.");
  }
  onMessageReceived() {
    throw new Error("onMessageReceived() must be implemented by subclass.");
  }
  initialize() {
    this.client.initialize();
  }

  // Helper method to delay execution
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

class JunaidBot extends AbstractWhatsappBot {
  constructor() {
    super();

    this.junaid_number = "877825746056";
    this.chatId = "62877825746056@c.us";
    this.junaidMessage = `
      പ്രിയപ്പെട്ട  ജുനൈദ് അസ്സലാമു അലൈകും  എന്താ വർത്താനം?  സുഖമല്ലേ !! 
      നിന്നെ കുറെ മെസ്സേജ് ചെയ്തിരുന്നു. 
      നിനക്ക് കുറെ മെസ്സേജ് വരുന്നത് കൊണ്ടാകും എന്റെ മെസ്സേജ് കാണുന്നില്ല എന്ന് കരുതുന്നു. 
      മെസ്സേജ് റീപ്ലേ ചെയ്താൽ അപ്പൊ നിർത്തും ഇൻഷാഅല്ലാഹ്. 
      പൈസ തിരിച്ചു തരാൻ അല്ലാഹു തൗഫീഖ് നൽകട്ടെ ആമീൻ.
    `;
    this.replayMessage = "MashaAllah. ജുനൈദ് മെസ്സേജ് കണ്ടു വൗ വൗ.";
    this.finalMessage =
      "Aന്റെ UAE  നമ്പർ എന്റെ കയ്യിൽ ഇല്ല. ദയവായി അത് ഒന്ന് ഷെയർ ചെയ്യൂ.";
  }

  // Implementation of abstract method
  onClientReady() {
    console.log("Client is ready!");

    // Execute the bulk message function immediately
    this.sendBulkMessages();

    // Set an interval to run the function every 20 seconds (no need for setTimeout)
    setTimeout(() => {
      setInterval(() => this.sendBulkMessages(), 200000); // 20 seconds
    }, 100000);
  }

  // Implementation of abstract method
  onQrReceived(qr) {
    console.log("QR RECEIVED", qr);
    qrcode.generate(qr, { small: true });
  }

  // Implementation of abstract method
  onMessageReceived(message) {
    console.log(message);
    if (message.from.includes(this.junaid_number)) {
      // Example number to match Junaid
      console.log("Message from Junaid:", message.body);
      this.client.sendMessage(this.chatId, this.replayMessage);
      this.isStopNeeded = true; // Stop sending messages when Junaid replies
    }
  }

  // Send bulk messages in a loop
  async sendBulkMessages() {
    console.log("Sending bulk messages...");

    for (let i = 0; i < 4; i++) {
      if (this.isStopNeeded) break;

      try {
        await this.sendMessageSequence();
      } catch (error) {
        console.error("Error sending messages:", error);
      }

      // Delay before the next iteration
      await this.delay(this.delayMs);
    }
  }

  // Send a sequence of messages (media + text)
  async sendMessageSequence() {
    await this.client.sendMessage(this.chatId, this.junaidMessage);

    await this.client.sendMessage(
      this.chatId,
      MessageMedia.fromFilePath(
        "E:\\work\\whatsbot\\wwebjs-bot\\junaidfile\\salimkumar.mp4"
      )
    );

    await this.client.sendMessage(this.chatId, "മാതൃക");

    // Uncomment and send PDF if needed
    // await this.client.sendMessage(
    //   this.chatId,
    //   MessageMedia.fromFilePath(
    //     "E:\\work\\whatsbot\\wwebjs-bot\\junaidfile\\TransferReceipt_20240310224034.pdf"
    //   )
    // );

    await this.client.sendMessage(this.chatId, "സമയം");

    await this.client.sendMessage(
      this.chatId,
      MessageMedia.fromFilePath(
        "E:\\work\\whatsbot\\wwebjs-bot\\junaidfile\\avastha_kadam.mp4"
      )
    );

    await this.client.sendMessage(this.chatId, "അവസ്ഥ");

    await this.client.sendMessage(
      this.chatId,
      MessageMedia.fromFilePath(
        "E:\\work\\whatsbot\\wwebjs-bot\\junaidfile\\audio.opus"
      )
    );

    await this.client.sendMessage(this.chatId, "വാക്ക് പാലിക്കൽ");
    await this.client.sendMessage(this.chatId, this.finalMessage);
  }
}
const bot = new JunaidBot();
bot.initialize();
