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
const prefix = 'A';
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
 .setAuthor(message.author.username)
 .setTitle(`Support Server`)
 .setURL('https://discord.gg/gSk7Bw2')
  message.author.sendEmbed(mrxsupport).then(c => {
    c.react(':heart_eyes:, :hearts:')
  })
    }
});//mrx

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command === "say") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
          message.delete()
    message.channel.sendMessage(args.join(" "))
  }
});



client.on("guildCreate" , guild => {
    const embed = new Discord.RichEmbed()
        .setTimestamp()
        .setAuthor(`${guild.name} (${guild.id})`)
        .addField(`Owner`, `${guild.owner.user.tag} (${guild.ownerID})`)
        .addField(`Channels`, `${guild.channels.size}`)
        .addField(`Members`, `${guild.memberCount}`)
        .addField(`Servers`, `${client.guilds.size}`)
        .setColor('GREEN')
        .setFooter('JOINED DISCORD SERVER');
    client.channels.get('573084977730682890').send({
        embed: embed
    });
})

client.on('message', msg => {
  if(msg.author.bot) return
  if(msg.content.startsWith(prefix + 'role')) {
  let params = msg.content.slice(prefix.length).trim().split(/ +/g);
  if(!params[0]) return msg.channel.send(`**syntax: ${prefix}role <all/humans/bots/@user> <name role/@role>`);
if(params[0] === 'all') {
 if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role all <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
   if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
 msg.guild.members.forEach(m => {
if(m.roles.some(r => r.id == role.id)) return
     m.addRole(role)
 })
 msg.channel.send(`**done give all role @${role.name}**`);
} else if(params[0] === 'bots') {
 if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role bots <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
   if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
 let bots = msg.guild.members.filter(m => m.user.bot)
 bots.forEach(bot => {
   if(bot.roles.some(r => r.id == role.id)) return
   bot.addRole(role)
 })
 msg.channel.send(`**done give all bots role @${role.name}**`);
} else if(params[0] === 'humans') {
 if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role humans <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
   if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
   let humans = msg.guild.members.filter(m => !m.user.bot)
   humans.forEach(h => {
     if(h.roles.some(r => r.id == role.id)) return
     h.addRole(role)
   })
   msg.channel.send(`**done give all humans role @${role.name}**`);
}else {
     if(!params[1]) return msg.channel.send(`**منشن الرتبة او اكتب اسمها \n syntax: ${prefix}role @user <@role / name role>**`)
     let role = msg.mentions.roles.first() || msg.guild.roles.find(r =>  r.name.toLowerCase().startsWith(params[1].toLowerCase()))
     if(!role) return msg.channel.send(`**لم استطع ايجاد هذه الرتبة**`)
     let userID = params[0].slice(2 , -1)
     let user = msg.guild.members.get(userID)
     if(!user) return
     user.addRole(role)
     msg.channel.send(`**Done give ${user} @${role.name}**`)
 
   }
 
 
 }
 
 
})


client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.id != "515474180603641866") return;
    if(message.author.bot) return;
    if (command == "leave") {
        if(!args[0] || args[1]) return message.reply(`**${prefix}leave <guild_id>**`);
        let GuildId = client.guilds.get(args[0])
        if(!GuildId) return message.reply(`** Guild ID is not Detected**`);
        GuildId.leave().then(m => message.channel.send("**I have Left "+GuildId.name+" ✅**"))
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

client.on("guildMemberAdd", member => {
  client.channels.find('id', '569979981606682635').send(`**Welcome to alanaqah :wave:  ${member} **`)
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


const voiceChannel = '573104098379956234'; 

const membersSize = (client) => {
 return client.channels.filter(c => c.type === "voice").map(c => c.members.size).reduce((a,b) => {return a + b}, 0);
}


client.on('ready', () => {
client.channels.get(voiceChannel).setName(`Voice Online: [${membersSize(client)}]`)
}); 

client.on('voiceStateUpdate', () => {
client.channels.get(voiceChannel).setName(`Voice Online: [${membersSize(client)}]`)
})



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

client.on('message', message => {
       if (message.content.startsWith(prefix + 'botserver')) {
  let msg =  client.guilds.map(guild => `**${guild.name} عدد الاعضاء:          ${guild.memberCount}**`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size} **سيرفرات   **`)
  .setDescription(`**${msg}   **`)
  .setColor("#ebf442");
  message.channel.send(embed);
}
});

client.on("message", message => {
    let prefix= 'A'
let args = message.content.split(' ');
  if(args[0].toLowerCase() === (prefix + "server")) {
        let embed = new Discord.RichEmbed()
        .addField(`:id: Server ID:`, `${message.guild.id}`, true)
        .addField(`:calendar: Created on:`, `${moment(message.guild.createdAt).format(`D/M/YYYY h:mm`)} \n ${moment(message.guild.createdAt).locale("AR-eg").fromNow()}`,true)
        .addField(`:crown: Owned by`, `${message.guild.owner.user.tag} [${message.guild.owner.user.id}]`,true) 
        .addField(`:busts_in_silhouette: Members [${message.guild.members.size}]`, `**${message.guild.members.filter(c => c.presence.status !== "offline").size}** Online`, true)
        .addField(`:speech_balloon: Channels [${message.guild.channels.size}]`,`**${message.guild.channels.filter(f => f.type === "text").size}** Text | **${message.guild.channels.filter(f => f.type === "voice").size}** Voice`,true)
        .addField(`:earth_africa: Others`, `**Region:** ${message.guild.region} \n **Verification level:** ${message.guild.verificationLevel}`, true)  
        .addField(`:closed_lock_with_key: Roles [${message.guild.roles.size}]`, `To see the whole list with all roles use **${prefix}roles**`, true) 
        .setThumbnail(`${message.guild.iconURL}`)
        .setColor(`black`)
        .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`);
       
    message.channel.sendEmbed(embed);
    }

});


client.on('message', msg =>{
        let args = msg.content.slice(4);
  if (msg.author.id !== '515474180603641866') return;
  if (msg.content.startsWith('Sweet')) {
   msg.channel.send(args)   
  }
})


client.on('message', message => {
  if(message.content.includes('discord.gg/')){                                       
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** Not allowed to advertising Here :angry: ! **`)
  }
}
});



client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setColor(0x5500ff)
    .setTitle(`AL ANAQAH`)
    .addField(`:id: Server ID:`, `${message.guild.id}`, true)
    .setDescription(`**ا شكراً لك لإضافه البوت الى سيرفرك**`)
    .addField(`سيرفرات`, `${client.guilds.size}`, `: تمت اضافة البوت في`)
    .setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`);
    
        guild.owner.send(embed)
  });

client.on('message', message => {
  if(message.content === prefix + "user"){
    var embed = new Discord.RichEmbed()
    .setTitle(message.author.tag, message.author.avatarURL)
    .addField(`User`, message.author.username)
    .addField(`Discrim`,`#`+ message.author.discriminator)
    .addField(`Name Color Role`, message.member.colorRole)
    .addField(`Game`,message.author.presence.game ||"Idel.")
    .addField(`Status`,message.author.presence.status)
    message.channel.send(embed);
  }
});


client.on('guildCreate', guild => {
  let support = client.guilds.get('569579700133953547') // حط هنا ايدي سيرفر السبورت
  if(support === undefined) return
  let role = support.roles.find(r => r.name == 'Tester.') // بدلها بأسم الرتبة يلي تبيها للمستخدمين
  let member = support.members.get(guild.owner.user.id) 
  if(member) {
    member.addRole(role)
  } else {
    console.log(`this user not in support server`)
  }
})







client.on("message", message => {
    if(message.content.startsWith(prefix + "server")){
        if(message.author.bot || message.channel.type == "dm") return;
        let onlineM = message.guild.members.filter(m => m.presence.status !== "offline");
        let verifyL = ["None", "Low", "Medium", "Hard", "Extreme"];
        let region = {
            'brazil': "`Brazil`",
            'eu-central': "`Central Europe`",
            'singapore': "`Singapore`",
            'us-central': "`US Central`",
            'sydney': "`Sydney`",
            'us-east': "`US East`",
            'us-south': "`US South`",
            'us-west': "`US West`",
            'eu-west': "`Western Europe`",
            'london': "`London`",
            'amsterdam': "`Amsterdam`",
            'hongkong': "`Hong Kong`",
            'russia': "`Russia`"
        };
        let serverEmbed = new Discord.RichEmbed()
        .setColor("#36393e")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name}, Server Info`)
        .setDescription(`- Server Name \`${message.guild.name}\`\n- Created At \`${moment(message.guild.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Total Members \`${message.guild.memberCount} [Online: ${onlineM.size}]\`\n- Server Owner \`${message.guild.owner.user.tag}\`\n- Channels \`${message.guild.channels.filter(m => m.type == 'text').size} Text || ${message.guild.channels.filter(m => m.type == 'voice').size} Voice\`\n- Categories \`${message.guild.channels.filter(m => m.type == 'category').size}\`\n- Roles \`${message.guild.roles.size}\`\n- Region \`${region[message.guild.region]}\`\n- Verification Level \`${verifyL[message.guild.verificationLevel]}\`\n- Server ID \`${message.guild.id}\``)
        .setFooter(message.client.user.username,message.client.user.avatarURL);
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:no_entry: You dont have permission!`).then(mm => mm.delete(5000));  message.channel.send(serverEmbed).catch(console.error);
    } else if(message.content.startsWith(prefix + "user")){
        if(message.author.bot || message.channel.type == "dm") return;
        let mnt = message.mentions.users.first();
        let user = mnt || message.author;
        let userEmbed = new Discord.RichEmbed()
        .setColor("#36393e")
        .setThumbnail(user.avatarURL)
        .setAuthor(`${user.username}, User Info`)
        .setDescription(`- Name \`${user.tag}\`\n- Created At \`${moment(user.createdAt).format('D/MM/YYYY h:mm a')}\`\n- Joined At \`${moment(user.joinedAt).format('D/MM/YYYY h:mm a')}\`\n- ID \`${user.id}\``)
        .setFooter(message.client.user.username,message.client.user.avatarURL);
        message.channel.send(userEmbed).catch(console.error);
       
    }
});



client.on('guildCreate', guild => {
    client.channels.get("573084977730682890").send(`✅ **${client.user.tag} دخل سيرفر جديد
  
    Server name: __${guild.name}__
    
    Server owner: __${guild.owner}__
   
    Server id: __${guild.id}__ 
    
    Server Count: __${guild.memberCount}__**`)

    });
   
    client.on('guildDelete', guild => {
      client.channels.get("573861293983793182").send(`❎ **${client.user.tag} طلع من سيرفر
      
    Server name: __${guild.name}__

    Server owner: __${guild.owner}__

    Server id: __${guild.id}__ 

    Server Count: __${guild.memberCount}__**`)

    });


client.login(process.env.BOT_TOKEN)
client2.login(process.env.BOT_TOKEN2)
