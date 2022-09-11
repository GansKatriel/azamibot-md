let handler =  m => m.reply(`
╭─「 🧚🏻‍♂️ *DONASI* 」
│
├ PULSA ONLY✓ :
├ • *083813417529* { AXIS }
│
├ SAWERIA
├ _https://saweria.co/Khurushi
│
├ Ownerku gamteng skli ni🗿🐤
├ _wa.me/6282146218274
│
╰───「 ${packname} 」
`.trim()) // Tambah sendiri kalo mau

handler.menugroup = ['donasi']
handler.tagsgroup = ['group']
handler.command = /^(dona(te|si))$/i

export default handler
