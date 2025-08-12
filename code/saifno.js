module.exports = {
    execute(client) {
        const sendm = require("../exports/send_message");
        client.on("message", (message) => {
            let words = [];
            words = ["mom", "mum"];
            if (message.author.id !== "717i264879530278932") {
                return;
            }

            words.forEach((word) => {
                if (
                    message.content.toLowerCase().includes(word.toLowerCase())
                ) {
                    console.log("Tomato ur mom");
                    sendm("ur mom L <@717264879530278932>", message.channel, 5);
                    message.delete();
                }
            });
        });
    },
};
