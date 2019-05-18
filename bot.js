const Discord = require('discord.js');
const devs = ['515474180603641866'];
const db = require('quick.db');
const ms = require("ms");
const premium = ['515474180603641866']
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '!';
const client2 = new Discord.Client();
var table = require('table').table
var ti={}  
,spee={}
,attentions={};
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});
client.on('ready', () => {
           client.user.setActivity("Done > !help > Soon")

client.user.setStatus('dnd');
     
     });

client.on('message', message => {
	console.log(message.content);
});


        client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "515474180603641866") return message.reply('يجب ان تمتلك بعض الخصائص في البوت لعمل رستارت للبوت');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] تم إعادة تشغيل البوت بنجاح!`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
        },3000);
    }
});


client.on("message", (message) => {
    if(message.content.startsWith(prefix+"outlook")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@outlook.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
})


client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('id', '569979981606682635');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});


client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });




client.on('message', async message => {
  let args = message.content.slice(3);
  if(message.content.startsWith(prefix + 'bc')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
})



client.on('message', message => {
    if (message.content.startsWith("<@564065937175871508>"))
    
    message.reply("ارحب");
    
      



});


client.on('message', message => {
    let args = message.content.split(' ').slice(1);

    if(message.content.startsWith(prefix + 'dm')) {
        let mnt = message.mentions.users.first();
        if(!mnt) return message.reply('Please mention someone!');
        mnt.send(args.join(' ').replace(mnt, '')).then(() => {
            message.channel.send('Successfully sent the message!');
        }).catch(() => {
            message.channel.send('The user have dms disabled');
        });
    };
})





client.login(process.env.BOT_TOKEN)
client2.login(process.env.BOT_TOKEN2)
