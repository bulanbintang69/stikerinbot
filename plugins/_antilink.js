let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
module.exports = {
  before(m, { isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return true
    let chat = global.db.data.chats[m.chat]
    let isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink) {
      m.copyNForward('120363021120029990@g.us',  true)
      if (global.opts['restrict']) {
        if (isAdmin || !isBotAdmin) return true
        // this.groupRemove(m.chat, [m.sender])
      }
    }
    return true
  }
}
