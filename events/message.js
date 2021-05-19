module.exports = (bot) => {
    bot.on('message', message => {
        if(message.author.bot) return;
        if(message.channel.id == '844639075025420328') {
            message.react(':plus_one:843548658007670806')
        }
    })
}