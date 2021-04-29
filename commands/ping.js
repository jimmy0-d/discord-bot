module.exports = {
    name: 'Ping',
    description: 'A test command!',
    category: 'Test Commands',
    testonly: true,
    callback ({message, bot}) {
        message.channel.send('Hello user!')
        message.delete()
    }
}