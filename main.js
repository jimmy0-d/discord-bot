const Discord = require('discord.js')
const bot = new Discord.Client()
const WOKComannds = require('wokcommands')
require('dotenv').config();

bot.login(process.env.Token)

const disabledDefaultCommands = [
    'command',
    'language',
    'requiredrole',
    //'prefix',
    //'help'
]

bot.on('ready', () => {
    console.log('The Bot is online!')
    bot.user.setActivity('Youtube', {type: 'WATCHING'})

    new WOKComannds(bot ,{
        commandsDir: 'commands',
        featureDir: 'events',

        testServers: ['829791674803683348'],
        disabledDefaultCommands
    })
    .setBotOwner(['418132022851010571'])
    .setCategorySettings([
        {
            name: 'Test Commands',
            emoji: '🦺'
        },
    ])
    .setDefaultPrefix('!')
})