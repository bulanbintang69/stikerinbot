let os = require('os')
let util = require('util')
let { performance } = require('perf_hooks')
let { sizeFormatter } = require('human-readable')
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn }) => {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  await m.reply('_tunggu, menu akan muncul..._')
  let neww = performance.now()
  let speed = neww - old
  let txt = `
_*MENU*_

*STIKER*
#stiker atau #s
(balas photo/gif dengan #s )
*catatan kalau video mau diubah kestiker
jadikan gif dulu ya biar bisa gerak

*DOWNLOADER*
#ytmp4
(contoh: #ytmp4 spasi linknya)
#ytmp3
(contoh: #ytmp3 spasi linknya)
#ig
(contoh: #ig spasi linknya)
#twitter
(contoh: #twitter spasi linknya)
#tiktok
(contoh: #tiktok spasi linknya)
[youtube short blum bisa]

*TAMBAHAN*
#tomp3
(balas vn dgn #tomp3 agar jd mp3)
#tovn
(balas musik dgn #tovn agar jd vn)

kalau ga muncul silahkan ulangi
`.trim()
  m.reply(txt)
}
handler.help = ['menu']
handler.tags = ['menu']

handler.command = /^menu|help$/i
module.exports = handler
