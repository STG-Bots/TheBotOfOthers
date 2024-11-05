const { ActivityType } = require('discord.js');
const mongoose = require('mongoose');

const { mongouri } = require('../config.json');

module.exports = {
    name: "ready",
    async execute(bot) {
        console.log("----------------------------------------")
        console.log("----------------------------------------")
        console.log(bot.user.username + " --> ONLINE")
        console.log("----------------------------------------")
        console.log("----------------------------------------")

        await mongoose.connect(mongouri);

        var ac = [
            { name: 'Community', type: ActivityType.Watching },
        ];
        let i = 0;
        client.user.setPresence({ activities: [ac[i]] });
        setInterval(async () => {
            client.user.setPresence({ activities: [ac[i % ac.length]] });
            i++;
        }, 60 * 1000);

        console.log(client.guilds.cache.map(guild => guild.name))
    }
}