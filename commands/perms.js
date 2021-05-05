module.exports = {
    name: 'perms',
    description: 'Channel permmissions!',
    permissions: ['MANAGE_CHANNELS'],
    async callback ({message, args}) {
        if(!args[0]) return message.delete(), message.channel.send('Please tell me what to do in this channel!')

        if(args[0] === 'lock'){
            if(!args[1]) return message.delete(), message.channel.send('Please tell me to lock or unlock!\nTo lock you need to type: `!perms lock false`\nTo unlock you need to type: `!perns lock true`')

            if(args[1] === 'false') {
                message.channel.updateOverwrite(message.guild.id, {
                    SEND_MESSAGES: false
                })
                message.channel.send(`This channel has been lock by <@${message.author.id}>`)
                message.delete()
                return
            } 
            if(args[1] === 'true') {
                message.channel.updateOverwrite(message.guild.id, {
                    SEND_MESSAGES: true
                })
                message.channel.send(`This channel has been unlock by <@${message.author.id}>`)
                message.delete()
                return
            }
        }
    }
}