const fs = require('fs');

var messages_collector = {};
if(fs.existsSync('messages.json')) {
    messages_collector = jsonfile.readFileSync('messages.json');  // The messages file.
}

const message_stats = stats[user.ip.id];
    if (user.id in message_stats === false) { // The messages (stats).
        message_stats[user.id] = {
            username: "",
            last_message: "",
            message: ""
        };
    }