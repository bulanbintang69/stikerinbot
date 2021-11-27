//@amirul.dev
let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let bname = global.name
let foot = global.footer
let logo = global.logo
let dev = global.dev
let ft = gs(logo)
let pict2 = fs.readFileSync(`tmp/${ft}.jpg`)

const defaultMenu = {
  before: `┌━━━━━━kosong

`.trimStart(),
 header: '─ 「 %category 」 ─',
  body: '⬡ %cmd %islimit %isPremium',
  footer: '',
  after: ``,
  
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'main', 'xp', 'stiker']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  
if (teks == 'main') tags = {
'main': 'Main Menu'
}
if (teks == 'xp') tags = {
'xp': 'XP & Limit'
}
if (teks == 'stiker') tags = {
'stiker': 'Sticker Maker'
}
 
 
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
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
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })

// BAHASA INDONESIA
let user = db.data.users[m.sender]


if (user.bahasa == ''){

if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "description": `Silahkan Klik List Menu`,
          "buttonText": "LIST MENU",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
            "title": `${bname} Made by ${dev}`,
             "rows": [
               /* {
                  "title": "Produk Arminadaily",
                  "description": "",
                  "rowId": "*arminadaily"
		},*/
		{
                  "title":  `DM MLBB FAST`,
                  "description": "",
                  "rowId": "?ml"
                },
		/*{
                  "title":  `Reseller Mobile Legends`,
                  "description": "harga khusus reseller",
                  "rowId": "?resml"
                },*/
                {
                  "title":  `DM FREE FIRE`,
                  "description": "",
                  "rowId": "?ff"
                },
	        /*{
                  "title":  `Reseller Diamond Free Fire`,
                  "description": "harga khusus reseller",
                  "rowId": "?resff"
                },*/
                {
                  "title":  `UC PUBG REGION/WILAYAH INDO`,
                  "description": "",
                  "rowId": "?pubg"
                },
                /*{
                  "title":  `Reseller Uc Pubgm Id Indo`,
                  "description": "harga khusus reseller",
                  "rowId": "?respubg"
                },*/
	        {
                  "title":  `PRE ORDER MLBB`,
                  "description": "",
                  "rowId": "?preorder"
                },
		{
                  "title":  `GIFT SKIN MLBB`,
                  "description": "",
                  "rowId": "?giftml"
                },
 /*   		{
                  "title": "Top Up Ovo/Gopay/Dana",
                  "description": "",
                  "rowId": "?fly4"
		},
		{
                  "title": "Pulsa",
                  "description": "",
                  "rowId": "?pulsa"
		},
		{
                  "title": "Kuota Internet & Voucher",
                  "description": "",
                  "rowId": "?kuota"
		},
		{
                  "title": "Token Listrik",
                  "description": "",
                  "rowId": "*token"
		},
		{
                  "title": "Beli Followers Instagram",
                  "description": "",
                  "rowId": "*folig"
		},
		{
                  "title": "Beli Like Post Instagram",
                  "description": "",
                  "rowId": "*likeig"
		},
		{
                  "title": "Beli Comment Post Instagram",
                  "description": "",
                  "rowId": "*comig"
		},
	        {
                  "title": "Beli Followers Facebook",
                  "description": "",
                  "rowId": "*folfb"
		},
		{
                  "title": "Beli Like Post Facebook",
                  "description": "",
                  "rowId": "*likefb"
		},
		{
                  "title": "Beli Comment Post Facebook",
                  "description": "",
                  "rowId": "*comfb"
		},
		{
                  "title": "Beli Subcribe Channel Telegram",
                  "description": "",
                  "rowId": "*subtele"
		},
		{
                  "title": "Beli Anggota Group Telegram",
                  "description": "",
                  "rowId": "*angtele"
		},*/
		{
                  "title": "Syarat & Ketentuan",
                  "description": "",
                  "rowId": "?syarat"
		},
		{
                  "title": "Pembayaran Atau List Payment",
                  "description": "",
                  "rowId": "?fly5"
		}					
                                          
 
              ]
            }
          ], "contextInfo": {
previewType: 0,
            "mentionedJid": [`6285155333010@s.whatsapp.net`],
            "remoteJid": 'status@broadcast',
            "participant": '0@s.whatsapp.net',
            "quotedMessage": {
             "imageMessage": {
             "mimeType": "image/jpeg",
			    "caption": `Bot Hageuy Store`,
             "jpegThumbnail": await (await fetch("https://telegra.ph/file/230ab9a20cc36d3133549.jpg")).buffer()
    }
			}
          }
        }
      }, {}), { waitForAck: true })
    }
}
    


    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? ' ♨️' : '')
                .replace(/%isPremium/g, menu.premium ? ' 🔥' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    await conn.send2Loc(m.chat, pict2, text.trim(), foot, 'ADMIN', '#owner', 'SCRIPT', '#sc', m)
  } catch (e) {
 //   conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  
}
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
 
handler.fail = null
handler.exp = 3
 
module.exports = handler
 
const more = String.fromCharCode(1)
const readMore = more.repeat(1)
 
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat Dini Hari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time > 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function ucapan2() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Good Evening"
  if (time >= 4) {
    res = "Good Morning"
  }
  if (time > 10) {
    res = "Good Afternoon"
  }
  if (time >= 15) {
    res = "Good Afternoon"
  }
  if (time >= 18) {
    res = "Good Night"
  }
  return res
}
 
function gs(list) {
  return list[Math.floor(Math.random() * list.length)]
}
//@amirul.dev
