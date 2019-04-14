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


client.on('message', message => {
    if (message.content == "$اسائلة دينية") {
        var x = ["اكبر سوره في قران",
"اصغر سوره في قران",
"اول سوره نزلت على محمد (ص)؟",
"ثاني اطول سوره في القران من ناحيت المساحه",
"ثاني اطول سوره في القران من ناحيت ايات",
"هل ذكر اسم نبي محمد في انجيل او تورات ؟؟",
"من الذي هاجر مع نبي محمد الى  يثرب",
"من نام في فراش النبي محمد",
"متى نزل القران على محمد",
"نحن كم سنه هجريه",
"كم عدد ايام عيد الفطر",
"ما هي الصلاة التي يركع فيها المصلي أربع مرات ويسجد أربع مرات؟",
"ما هي السورة التي كانت سببا في إسلام عمر بن الخطاب رضي الله عنه ؟",
"ماهي السورة التي يطلق عليها عروس القرآن ؟",
"من أول من فتق لسانه بالعربية ؟",
"من أول من استلم الحجر الأسود من الأئمة ؟",

];
        var x2 = ['سورة البقرة',
        "سورة الكوثر",
        "صورة القلم",
        "سورة النساء",
"سورة الشعراء",
"نعم ذكر",
"ابو بكر الصديق",
"علي بن ابي طالب",
"في عمر الربعين سنة",
"نحن 1440",
"ثلاث ايام",
"صلاة الكسوف",
"سورة طه",
"سورة الرحمن",
"النبي اسماعيل",
"ابن الزبير",

        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اسائلة ديني :__**${x[x3]}**__
لديك 30 ثانيه لاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 30000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب في الوقت المناسب `);
        })
        })
    }
        


client.login(process.env.BOT_TOKEN)
