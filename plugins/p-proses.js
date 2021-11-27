//@amirul.dev
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn }) => {
let img = fs.readFileSync('tmp/l3.jpg')
let moment = require('moment-timezone')
let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
let isi = fs.readFileSync('src/msg/fly7.txt', 'utf8')

let psn = isi.replace('%waktu', time).replace('%tanggal', date)
m.reply(psn)
/*conn.send2Loc(m.chat, img, psn, global.footer, 'BACK MENU', '#menu', 'ADMIN', '#owner', m)*/

}

//handler.help = ['script']

//handler.tags = ['main']
handler.command = /^(p)$/i
handler.owner = true
module.exports = handler
//@amirul.dev
