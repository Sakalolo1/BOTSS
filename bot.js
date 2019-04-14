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
const prefix = 'G.';
var table = require('table').table
var ti={}  
,spee={}
,attentions={};

client.on('ready', () => {
           
client.user.setStatus('idle');
     
      });

client.on('message', message => {
        
    if(message.content.startsWith(prefix + 'وقت')) {
          let args = message.content.split(' ').slice(1);
   let Timer = args[0]; 
 
   if(!args[0]){
     return message.channel.send("من فضلك , قم بكتابتة بـ s,m,h "); 
   }
 
   if(message[0] <= 0){ 
     return message.channel.send("من فضلك , قم بكتابتة بـ s,m,h ");  
   }
 
   message.channel.send(`**✅ | بدأ العدد الزمني : \`${ms(ms(Timer), {long: true})}\`.**`)  
   setTimeout(function(){
     message.channel.send(`** ${message.author} الوقت الزمني انتهى من :\`${ms(ms(Timer), {long: true})}\`.**`) 
   }, ms(Timer)); 
 
     } 
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


client.on("message", async (message) => {
    if (!prefix) {
        var prefix = "!";
    }
    var args = message.content.slice(prefix.length).split(" ");
    var cmd = args[0];
    switch(cmd) {
        case "timer":
        if (!args[1]) {
            message.reply(`من فضلك أكتب الوقت .. مثال : ${prefix}timer 5`);
            return undefined;
        }
        if (isNaN(args[1])) {
            message.reply(`هذا ليس رقم صالح`);
            return undefined;
        }
        function endTimer() {
            message.channel.send("إنتهى الوقت" + args[1]);
        }
        setInterval(endTimer, parseInt(args[1])*1000);
        break;
    }
});

client.login(process.env.BOT_TOKEN)
