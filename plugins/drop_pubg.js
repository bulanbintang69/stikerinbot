//@amirul.dev
let handler = async (m, { conn }) => {
const fs = require('fs')
let img = fs.readFileSync('tmp/SAVE_20211115_044443.jpg')
let isi = fs.readFileSync('src/msg/fly3.txt', 'utf8')
let format = fs.readFileSync('src/msg/formatpubg.txt', 'utf8')
m.reply(isi)
m.reply(format)
/*conn.send2Loc(m.chat, img, isi, global.footer, 'BACK MENU', '*menu', 'ADMIN', '*owner', m)*/
}
handler.help = ['fly3']
handler.tags = ['main']
handler.command = /^(pubg|Pubg|PUBG)$/i
module.exports = handler
//@amirul.dev
