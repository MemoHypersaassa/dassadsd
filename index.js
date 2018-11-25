const discord = require('discord.js')
, fs = require("fs")
, tokens = fs.readFileSync('./tokens.txt', 'utf-8').split("\r\n");
const request = require("request");

function clientRun() {
var newClient = new discord.Client()
, user=tokens.shift().split(":")
, prefix=user[1]
, token=user[0]
if(!token||!prefix||!user){
  return new Error(`i can't find any token bro.`)
}
console.log(user,prefix);


newClient.on('ready', ()=>{
  console.log(`i'm ready!!`, newClient.user.username);
  console.log(`Connected to DISCORD.JS as like as ${newClient.user.bot==true? "bot":"user"}`);
  newClient.user.bot = true;
  newClient.user.setGame('Venom Is Back');

});

newClient.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type ==="dm") return;
  if (!message.guild) return;
        if(message.author.id !=='377871082767515648') return;
  if (message.content === 'see') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {})
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  });

  newClient.login(token)
}


for(let i = 0; i < tokens.length; i++){
    setTimeout(() => clientRun(), 150000000000000000000000000000000000000000000000000000000000000000000000000000);
}
