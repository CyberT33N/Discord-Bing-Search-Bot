'use strict'
/*
███████████████████████████████████████████████████████████████████████████████
██******************** PRESENTED BY t33n Software ***************************██
██                                                                           ██
██                  ████████╗██████╗ ██████╗ ███╗   ██╗                      ██
██                  ╚══██╔══╝╚════██╗╚════██╗████╗  ██║                      ██
██                     ██║    █████╔╝ █████╔╝██╔██╗ ██║                      ██
██                     ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║                      ██
██                     ██║   ██████╔╝██████╔╝██║ ╚████║                      ██
██                     ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝                      ██
██                                                                           ██
███████████████████████████████████████████████████████████████████████████████

*/






















/*
▄██████▄  ▀█████████▄       ▄█    ▄████████  ▄████████     ███        ▄████████
███    ███   ███    ███     ███   ███    ███ ███    ███ ▀█████████▄   ███    ███
███    ███   ███    ███     ███   ███    █▀  ███    █▀     ▀███▀▀██   ███    █▀
███    ███  ▄███▄▄▄██▀      ███  ▄███▄▄▄     ███            ███   ▀   ███
███    ███ ▀▀███▀▀▀██▄      ███ ▀▀███▀▀▀     ███            ███     ▀███████████
███    ███   ███    ██▄     ███   ███    █▄  ███    █▄      ███              ███
███    ███   ███    ███     ███   ███    ███ ███    ███     ███        ▄█    ███
▀██████▀  ▄█████████▀  █▄ ▄███   ██████████ ████████▀     ▄████▀    ▄████████▀
                      ▀▀▀▀▀▀
Here you can add all Objects/Arrays
*/


                           var t33n = {}




















                           /*
                           ████████████████████████████████████████████████████████████████████████████████
                           .__                              __           .__               .__
                           |__| _____ ______   ____________/  |_  ______ |  |  __ __  ____ |__| ____   ______
                           |  |/     \\____ \ /  _ \_  __ \   __\ \____ \|  | |  |  \/ ___\|  |/    \ /  ___/
                           |  |  Y Y  \  |_> >  <_> )  | \/|  |   |  |_> >  |_|  |  / /_/  >  |   |  \\___ \
                           |__|__|_|  /   __/ \____/|__|   |__|   |   __/|____/____/\___  /|__|___|  /____  >
                                    \/|__|                        |__|             /_____/         \/     \/
                           Here you can add all your plugins.
                           */


                           const  log = require('fancy-log'),
                                         fs = require('fs-extra'),
                               request = require('request'),
                              cheerio = require('cheerio'),
                                        os = require( 'os' ),
                  os_HOMEpath = os.homedir(),
               os_Architecture = os.arch(),

               // #########  YOU MUST IMPORT YOUR CREDITS HERE #################
               json_configFile = fs.readFileSync(os_HOMEpath + '/.discord/admin/config.json', 'utf8'),
                     json_config = JSON.parse(json_configFile),
                               token = json_config.token,
                       channelID = json_config.channelID,


                           Discord = require('discord.js'),
                                   bot = new Discord.Client(),
                               chalk = require('chalk'),
            chalkAnimation = require( 'chalk-animation' ),
                         gradient = require( 'gradient-string' );






var ads = gradient('red', 'white').multiline([
                           '',
                           'Presented by',
                           '████████╗██████╗ ██████╗ ███╗   ██╗',
                           '╚══██╔══╝╚════██╗╚════██╗████╗  ██║',
                           '   ██║    █████╔╝ █████╔╝██╔██╗ ██║',
                           '   ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║',
                           '   ██║   ██████╔╝██████╔╝██║ ╚████║',
                           '   ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ Software'
].join('\n'));
console.log(ads);
console.log( '\nCheck my Upwork Profile: ' + chalk.white.bgGreen.bold(' upwork.com/fl/dennisdemand ')  + '\n\n');
console.log( gradient('white', 'black')('=======================================\n\n') );



































var channel;
bot.login(token);
bot.on('ready', ()  => {
log(`Logged in as: ${bot.user.tag}`);

   channel = bot.channels.get(channelID);
   channel.send('ᗷOT OᑎᒪIᑎE!\n\nThis Bot will scrap the first results of Bing Search Engine and display the results at your Discord Channel.\n\nPlease use /𝙗𝙞𝙣𝙜 𝙒𝙝𝙖𝙩 𝙮𝙤𝙪 𝙬𝙖𝙣𝙩 𝙩𝙤 𝙨𝙚𝙖𝙧𝙘𝙝 𝙝𝙚𝙧𝙚');

   log('This is the user for this Bot: ' + bot.user + '\n\n');

}); // bot.on('ready', ()  => {























bot.on("message", msg => {




if ( msg.content.match( /\/bing (.*?)$/gmi ) && msg.author !== bot.user ) {
var searchQUERY = msg.toString().replace( /\/bing /gmi, '' );

log(`Message was entered by user: ${ msg.author }
Search Query: ${ searchQUERY }

`);



var url = 'https://www.bing.com/search?q=' + encodeURIComponent( searchQUERY );
log('We will start now the search request with this url:\n' + url + '\n\n');

request(url, function (e, r, b) {

//log('statusCode:', r && r.statusCode); // Print the response status code if a response was received
//log('body:', b); // Print the HTML for the Google homepage.

if (!e && r.statusCode == 200) {
log('statusCode:' + r.statusCode + '\n\n');

var $ = cheerio.load(b);

var headline = [];
var resultURL = [];
var description = [];
var ranking = [];
var together = [];

var rankingVAL = 0;
$('li.b_algo').each(function() {
rankingVAL = rankingVAL + 1;


headline.push( $(this).find('h2').text().trim() );

var rURL = $(this).find('cite').text().trim();
if(!rURL.match(/http(.*?)\:/gmi)) rURL = 'http://' + rURL;
resultURL.push( rURL );

description.push( $(this).find('div.b_caption > p').text().trim() );
ranking.push( rankingVAL );

together.push( {name: '\u200B',value: '\u200B'} );
together.push( {name: "Result #" + rankingVAL,value: $(this).find('h2').text().trim() + '\n' +  rURL + '\n' + $(this).find('div.b_caption > p').text().trim()} );


log(`Headline: ${ headline.reverse()[0] }
Result URL: ${ resultURL.reverse()[0] }
Description: ${ description.reverse()[0] }
Result Ranking: ${ ranking.reverse()[0] }

`);


}) // $('li.b_algo').each(function() {

log('\n\nScrap done.. We will send now the results to your Discord Channel!\n\n');



















  channel.send({embed: {
      color: 3447003,
      author: {
        name: bot.user.username,
        icon_url: bot.user.avatarURL
      },
      title: '𝐓𝐨𝐩 𝟏𝟎 𝐒𝐞𝐚𝐫𝐜𝐡 𝐑𝐞𝐬𝐮𝐥𝐭𝐬 𝐟𝐫𝐨𝐦 𝐰𝐰𝐰.𝐛𝐢𝐧𝐠.𝐜𝐨𝐦',
      url: url,
      description: 'You used those Keywords: ' + searchQUERY,
      fields: together,
      timestamp: new Date(),
      footer: {
        icon_url: bot.user.avatarURL,
        text: "© T33ᑎ"
      }
    }
  }); // channel.send({embed: {

  log('Message was send..\n\n');








} // if (!e && r.statusCode == 200) {
else {
  log( chalk.red.bold('❌ ERROR') + ' There was an error at the request.. ' + chalk.white.bold('error:\n') + e );
  return;
}; //   if ( e ) {

}); // request('https://www.bing.com/search?q=' + entities.encode(t33n.m), function (e, r, b) {


}; // if ( m && msg.author !== t33n.BotUSER ) {





}); // bot.on('message', msg => {
