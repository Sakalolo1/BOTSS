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


        


client.login(process.env.BOT_TOKEN)
