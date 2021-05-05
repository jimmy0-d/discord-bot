module.exports = {
    name: 'slowmode',
    description: 'Set\'s slowmode in the channel!',
    category: 'Test Commands',
    permission: ['MANAGE_CHANNELS'],
    async callback ({message, args}) {
        const { channel } = message

        let duration = args[0]

        if (isNaN(duration)) {message.reply('Please provide a number!')
            return
          }

        channel.setRateLimitPerUser(duration)
        message.channel.send(`This channel has now slowmode! Duration: ${duration}`)
        message.delete()
    }
}