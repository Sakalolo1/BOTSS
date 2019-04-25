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
const prefix = 'R';
const client2 = new Discord.Client();
var table = require('table').table
var ti={}  
,spee={}
,attentions={};

client.on('ready', () => {
           
client.user.setStatus('idle');
     
      });

client.on('guildCreate', msg => {
    if(!vipfile[msg.id]) return;
if(!msg.id === vipfile[msg.id].guild) return client.guild.leave()
})

const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const p = {}
const devs = ['515474180603641866']
client.on('message', message => {
    if(message.channel.type === "dm") return;
if(message.author.bot) return;
if(!p[message.guild.id]) p[message.guild.id] = {
    prefix:"#"
}
const prefix = p[message.guild.id].prefix
if (message.content.startsWith(prefix + "setprefix")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newPrefix = message.content.split(' ').slice(1).join(" ")
    if(!newPrefix) return message.reply(`**${prefix}setprefix <prefix>**`)
    p[message.guild.id].prefix = newPrefix
    message.channel.send(`**${message.guild.name}'تم تغيير البرفكس ${newPrefix}**`);
}


});
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
    var mentionned = message.mentions.users.first();
    var x5bzm;
    if(mentionned){
        var x5bzm = mentionned;
    } else {
        var x5bzm = message.author;

    }
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
}
});

client.on('message',async message => {
    function timeCon(time) {
        let days = Math.floor(time % 31536000 / 86400);
        let hours = Math.floor(time % 31536000 % 86400 / 3600);
        let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
        let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
        days = days > 9 ? days : '0' + days;
        hours = hours > 9 ? hours : '0' + hours;
        minutes = minutes > 9 ? minutes : '0' + minutes;
        seconds = seconds > 9 ? seconds : '0' + seconds;
        return `${days > 0 ? `${days} Days ` : ''}${(hours || days) > 0 ? `${hours} Hours ` : ''}${minutes} Mins ${seconds} Secs`;
    }

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + "bot")) {
        let ramUsage = (process.memoryUsage().rss / 1048576).toFixed();
        let upTime = timeCon(process.uptime());
        let createdAt = moment(client.user.createdAt).fromNow();

        let m = await message.channel.send(`\`\`\`asciidoc\n= Normal Information =
Creator :: ${client.users.get("515474180603641866").username} - ${createdAt}
Ping :: ${client.pings[0]} ms
UpTime :: ${upTime}

= Servers Information =
Servers :: ${client.guilds.size}
Users :: ${client.users.size}
Channels :: ${client.channels.size}

= Developer Information =
NodeJS :: ${process.version}
DiscordJS :: ${Discord.version}
Arch :: ${process.arch}
Platform :: ${process.platform}

= Host Information =
UsedHeap :: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB
Heap :: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB
Ram :: ${ramUsage} MB
Rss :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB
\`\`\``);
    }
});

client.on('message', function(message) {
    if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        let command = message.content.split(" ")[0];
        if(message.content.includes('discord.gg')){
            message.reply (' ')
            if(!message.channel.guild) return message.reply('** This command only for servers**');
            message.member.addRole(message.guild.roles.find('name', 'Muted'));
            const embed500 = new Discord.RichEmbed()
                .setTitle(":x: | تمت معاقبتك")
                .addField(`** لقد قمت بمخالفة قوانين السيرفر من خلال نشر سيرفرات اخرى  **` , `**ملاحظة  : إن كآن هذآ الميوت عن طريق الخطأ تكلم مع الادآرة**`)
                .addField(`by`,`Kpop Arabic `)
                .setColor("c91616")
                .setThumbnail(`${message.author.avatarURL}`)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setFooter(`${message.guild.name} Server`)
            message.channel.send(embed500)


        }
    }
})

client.on("message", msg => {
if(msg.content.startsWith (prefix + "user")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
    const embed = new Discord.RichEmbed();
    embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
        .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
        .setColor("RANDOM")
        .setFooter(msg.author.username , msg.author.avatarURL)
        .setThumbnail(`${msg.author.avatarURL}`)
        .setTimestamp()
        .setURL(`${msg.author.avatarURL}`)
        .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
        .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
        .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
        .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
    msg.channel.send({embed: embed})
}
});


client.on('message', message => {
    if(message.channel.type === 'dm') {
    var guildID = '570710223375958036'; // <=============== ايدي السيرفر حقك
    if(message.content.includes('discord.gg/')) {
        var member = client.guilds.find(g => g.id === guildID).members.find(m => m.id === message.author.id);
        member.ban({ reason: 'ADS In Private.' }).catch();
    }
}
client.on('message', msg => {
    if (msg.author.bot) return;
if (!msg.content.startsWith(prefix)) return;
let command = msg.content.split(" ")[0];
command = command.slice(prefix.length);
let args = msg.content.split(" ").slice(1);

if(command === "clear") {
    const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
        if (textxt == "") {
            msg.delete().then
            msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
        } else {
            msg.delete().then
            msg.delete().then
            msg.channel.bulkDelete(textxt);
            msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }
    }
}
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix + 'server')) {
        if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
        let embed = new Discord.RichEmbed()
            .setColor('#000000')
            .setThumbnail(msg.guild.iconURL)
            .setTitle(`${msg.guild.name}`,true)
            .addField(':id: **Server ID:**',`${msg.guild.id}`,true)
            .addField('📅** Created On**',msg.guild.createdAt.toLocaleString())
            .addField('👑** Owned By** ' ,`${msg.guild.owner}` + '   [ ' + `${msg.guild.ownerID}` + ' ]' ,true)
            .addField(':busts_in_silhouette:  **Members **' + `[ ${msg.guild.memberCount} ]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}**` + ' Online')
            .addField(':speech_balloon: Channels ' + `[ ${msg.guild.channels.size} ]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}**` + ' Text | ' + `**${msg.guild.channels.filter(m => m.type === 'voice').size}**` + ' Voice')//tt
            .addField(':earth_africa: Others','**Region: **' + `${msg.guild.region}` + ' **Verification Level:** ' + `${msg.guild.verificationLevel}`)
            .addField(':closed_lock_with_key:** Rules **' + `[ ${msg.guild.roles.size} ]`,'To see a list with all roles use **#roles**');
        msg.channel.send({embed:embed});
    }
});


client.on('message', message => {
    if (message.author.x5bz) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "kick") {
    if(!message.channel.guild) return message.reply('** This command only for servers**');

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    /*let b5bzlog = client.channels.find("name", "logs");

    if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if(!reason) return message.reply ("**اكتب سبب الطرد**");
    if (!message.guild.member(user)
        .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
        .setAuthor(`KICKED!`, user.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()
        .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
        .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
        .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
    message.channel.send({
        embed : kickembed
    })
}
});

client.on('message', message => {
    if (message.author.x5bz) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "ban") {
    if(!message.channel.guild) return message.reply('** This command only for servers**');

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content.split(" ").slice(2).join(" ");
    /*let b5bzlog = client.channels.find("name", "logs");

    if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
    if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
    if(!reason) return message.reply ("**اكتب سبب الطرد**");
    if (!message.guild.member(user)
        .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

    message.guild.member(user).ban(7, user);

    const banembed = new Discord.RichEmbed()
        .setAuthor(`BANNED!`, user.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()
        .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
        .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
        .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
    message.channel.send({
        embed : banembed
    })
}
});

client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'ping')) {
    if(!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`
    var api = `${Math.round(client.ping)}`
    if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .setColor('RANDOM')
        .addField('**Time Taken:**',msg + " ms 📶 ")
        .addField('**WebSocket:**',api + " ms 📶 ")
    message.channel.send({embed:embed});
}
});

client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'setStreaming')) {
      if (!devs.includes(message.author.id)) return message.channel.send("<@515474180603641866> only this guy can do restart the bot so don't try again :wink:.");
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/korean-arabic');

    } else if(message.content.startsWith(prefix + 'setWatching')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});

      } else if(message.content.startsWith(prefix + 'setListening')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(prefix + 'setPlaying')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});

      } else if(message.content.startsWith(prefix + 'setName')) {
        client.user.setUsername(argresult);

      } else if(message.content.startsWith(prefix + 'setAvatar')) {
        client.user.setAvatar(argresult);


      } else if(message.content.startsWith(prefix + 'setStatus')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
        client.user.setStatus(argresult);


    }

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



client.on('message', message => {
    if (message.content.startsWith("قران")) {
	let pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
	let page = 1;
	
	message.delete();
	
	let embed = new Discord.RichEmbed()
	.setColor('#264d00')
	.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128')
	.setImage(pages[page-1])
	
// ${page}
// ${pages.length}
	message.channel.sendEmbed(embed).then(msg => {
		
		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('⏹'))
		.then(() => msg.react('➡'))
		.then(() => msg.react('⏭'))
			
			let backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			let forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
			
			let sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			let sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;
			
			let cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
			
			let backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });
			
			let sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			let sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });
			
			let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
			
			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 200; // إذا تبي تكمل ل 600 صفحة غير الرقم للصفحة الي وصلت لها
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
				msg.edit(embed)
			})
			cancel.on('collect', r => {
				embed.setDescription(`**سوف يتم إغلاق القائمة**`);
				embed.setImage('');
				embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
				msg.edit(embed).then(msg.delete(3000));
			})
		})
	})
}
});

client.on("message", (message) => {
    if(message.content.startsWith(prefix+"gmail")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
})


client.on('guildMemberAdd', member => {
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    const days = createdAt.toFixed(0);
    if(!days) return;
    if( days < 30 ) { member.ban() };    
});


client.on('message' , message => {//mrx
    if (message.content.startsWith(prefix + "support")) {
        if(!message.channel.guild) return message.reply('This Command is Only For Servers');
     let mrxsupport = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setAuthor(message.author.username, message.author.avatarURL)
 .setTitle(`Support Server`)
 .setURL('https://discord.gg/GY6RHrP')
  message.author.sendEmbed(mrxsupport).then(c => {
    c.react('🔼')
  })
    }
});//mrx









































client2.on('message', vipgen => {
    if (vipgen.content == "#team vip") {  
        var x = ["287590903680335875",
"",
"",
"",
"",
"",
"",
"",
"",
"",
];
        var x2 = ['.',
        ".",
                ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
        ".",
       
       
       
       
        ];
       
        var x3 = Math.floor(Math.random()*x.length)
        vipgen.author.send(`**تم صنع الكود بنجاح**  __**${x[x3]}**__
**هذا هو الكود**`).then(msg1=> {
            var r = vipgen.author.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 1,
                errors : ['time']
            })
        r.catch(() => {
            return vipgen.author.send(`لم يتم الصنع!
            `)
        })
       
        r.then((collected)=> {
            vipgen.author.send(`تم الصنع`);
        })
        })
    }
})
 

 
 

 
client2.on("message", message => {
 
    if (message.content.startsWith('#team')) {
        let args = message.content.split(' ').slice(1);
       
if (287590903680335875==args){
    message.reply('تمت العملية بنجاح!')  
    message.member.addRole(message.guild.roles.find(c => c.name == "Gelecek"));
    }
    if (287590903680335875!=args){
}
 
}});
 
client2.on("message", message => {
    var prefix = "#";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "team admins")) {
        var msg;
        msg = parseInt();
     
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done!",
        color: 0x06DF00,
        description: "بالتوفيق ",
        footer: {
          text: "© VIP SAMH GROUP"
        }
      }}).then(msg => {msg.delete(2)});
                          }
 
     
});



client.login(process.env.BOT_TOKEN)
client2.login(process.env.BOT_TOKEN2)

