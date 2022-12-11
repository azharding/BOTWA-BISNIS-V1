process.on('uncaughtException', console.error) //Safe Log Error
//========================================
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zmans = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')
 
// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));

// UCAPAN WAKTU 
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qris = 'https://telegra.ph/file/78eba1cd6381d6e515f75.jpg'
const faxc = 'https://telegra.ph/file/78eba1cd6381d6e515f75.jpg'
const  hai = 'https://telegra.ph/file/64c7737ee240f398605ea.jpg'
const ppunik = 'https://telegra.ph/file/78eba1cd6381d6e515f75.jpg'
// TANGGAL 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = mans = async (mans, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await mans.decodeJid(mans.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await mans.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
 
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
autoreadsw = true
// Quoted
const content = JSON.stringify(m.message)
const q = args.join(' ')
const isImage = (m.type === 'imageMessage')
        const isVideo = (m.type === 'videoMessage')
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

//Sewa
_sewa.expiredCheck(mans, sewa)

  //Resize
         const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
             

// Auto-group sticker
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await mans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Detec Autosticker`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await mans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await mans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Detec Autosticker`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await mans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + command} [${args.length}]`, 'cyan'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))
}
        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 
        // Leveling Punya Chika 🗿🗿 Di Copas Oleh Fardan
            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
        //function levelingnya
                        if (m.isGroup && isLeveling && isUser && mans.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `*──「 LEVEL UP 」──*\n\n❑ *Name*:  @${m.sender.split("@")[0]}\n❑ *XP*: ${getLevelingXp(m.sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉`
mans.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error(err)
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error(err)
                        }
                }
if (command) {
await mans.sendPresenceUpdate('composing', m.chat)
}
if (autoreadsw) {
		if (from === 'status@broadcast') {
		mans.chatRead(from)
	}
	}
	

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			
async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": fs.readFileSync("./media/fenzo.jpg"), // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
mans.relayMessage(jid, order.message, { messageId: order.key.id})
}

//function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/darah.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/alat_tukar.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/monay.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/buruan.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
   //Fax
let picaks = ['flaming','fluming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

//Add Hit Fax
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/FaxBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/FaxBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 
// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// AntiLink
if (AntiLink) {
linkgce = await mans.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await mans.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
mans.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

// Public & Self
if (!mans.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: mans.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, mans.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
mans.ev.emit('messages.upsert', msg)
}

// Fake Reply
//FAKEREPLY PRODUCT
const ftok = {
key: {
fromMe: true,
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "0@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync("./media/fenzo.jpg"),
 "jpegThumbnail": await reSize(thumb, 100, 100)
},
"title": "𝐂𝐎𝐑𝐄𝐈𝐙𝐄𝐍", //Kasih namalu 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "100000",
"retailerId": "MyMans",
"productImageCount": 1
},
"businessOwnerJid": "0@s.whatsapp.net"
}
}
}
//FAKEREPLY TROLI
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: 'azhar', //Kasih namalu
orderTitle: 'Bang',
thumbnail: log0, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6283127332487.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6283127332487.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Halo bang jagoo", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6283127332487@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"CoreizenBot",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'CoreizenBot',
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const fakey = (teks) => {
            mans.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Join Bot Grup!!`,"body": `Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/fenzo.jpg`),"sourceUrl": "https://chat.whatsapp.com/IZvvp0MxaOREfeFntmzeIQ"}}}, { quoted: m})
        }
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"hallo bang",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}

//Text Centang Hijau
	const ftex = {
	 key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
},
	 message: { 
"extendedTextMessage": {
 "text": `SELAMAT DATANG`,
 "title": `Hallo ${pushname}`,
 'jpegThumbnail': fs.readFileSync("./media/fenzo.jpg"),
 'jpegThumbnail': await reSize(thumb, 100, 100)
}
	  } 
}


const ftoko = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? 
{remoteJid: "status@broadcast" } : {})}, 
message: 
{ "productMessage": 
{ "product": 
{ "productImage":
{ "mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync("./media/core.png")},
"title": `𝘾𝙊𝙍𝙀𝙄𝙕𝙀𝙉 𝘽𝙊𝙏 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋`,
 "description": ``, "currencyCode": "ID",
 "priceAmount1000": "100000000", "retailerId": `${pushname}`, 
"productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 

const ftroli ={
key: {
fromMe: false,
"participant":"0@s.whatsapp.net",
 "remoteJid": "status@broadcast"}, 
"message": {orderMessage: {itemCount: 1000, status: 200, 
thumbnail: await reSize(thumb, 100, 100), 
surface: 200, 
message: `𝘾𝙊𝙍𝙀𝙄𝙕𝙀𝙉 𝘽𝙊𝙏`, 
orderTitle: 'corei', 
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {"forwardingScore":999,"isForwarded":true},
sendEphemeral: true}




//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `62882000383955@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "30",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'
const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const uangku = getBalance(m.sender, balance)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const jumlahUser = pendaftar.length
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
    
//==========kata tambahan========//
const katahi = `𝐇𝐚𝐢 ${pushname} 
𝐈𝐧𝐢 𝐀𝐝𝐚𝐥𝐚𝐡 𝐏𝐞𝐬𝐚𝐧 𝐎𝐭𝐨𝐦𝐚𝐭𝐢𝐬 

</>𝐏𝐄𝐑𝐇𝐀𝐓𝐈𝐀𝐍</> 
• 𝐉𝐚𝐧𝐠𝐚𝐧 𝐒𝐩𝐚𝐦 𝐓𝐞𝐥𝐩𝐨𝐧 𝐁𝐨𝐭
• 𝐉𝐚𝐧𝐠𝐚𝐧 𝐒𝐩𝐚𝐦 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭
• 𝐈𝐧𝐢 𝐀𝐝𝐚𝐥𝐚𝐡 𝐁𝐨𝐭 𝐁𝐮𝐤𝐚𝐧 𝐌𝐚𝐧𝐮𝐬𝐢𝐚

𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗣𝗶𝗹𝗶𝗵 𝗧𝗼𝗺𝗯𝗼𝗹 𝗗𝗶𝗕𝗮𝘄𝗮𝗵 𝗜𝗻𝗶`

const katamenu = `┏━⬣ 𝙃𝙄 *${pushname}*
┗━𝘚𝘦𝘭𝘢𝘮𝘢𝘵 𝘋𝘢𝘵𝘢𝘯𝘨 𝘋𝘪 𝘊𝘰𝘳𝘦𝘪𝘻𝘦𝘯 𝘈𝘪 𝘉𝘰𝘵 𝘐𝘯𝘪 𝘈𝘥𝘢𝘭𝘢𝘩 𝘊𝘩𝘢𝘵 𝘠𝘢𝘯𝘨 𝘛𝘦𝘭𝘢𝘩 𝘋𝘪 𝘗𝘳𝘰𝘨𝘳𝘢𝘮 𝘚𝘦𝘤𝘢𝘳𝘢 𝘖𝘵𝘰𝘮𝘢𝘵𝘪𝘴 𝘜𝘯𝘵𝘶𝘬 𝘔𝘦𝘮𝘶𝘥𝘢𝘩 𝘬𝘢𝘯 𝘒𝘢𝘮𝘪 𝘔𝘦𝘮𝘣𝘢𝘭𝘢𝘴 𝘊𝘩𝘢𝘵 𝘬𝘢𝘮𝘶,
┏━⬣ 𝘽𝙊𝙏 𝙏𝙀𝙇𝘼𝙃 𝘽𝙀𝙍𝙅𝘼𝙇𝘼𝙉
┗━━━━━━━━━━━━━━━━━━━⬣
⬡ ${runtime(process.uptime())}

    𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘛𝘦𝘬𝘢𝘯 𝘛𝘰𝘮𝘣𝘰𝘭 𝘠𝘢𝘯𝘨 𝘈𝘥𝘢 𝘋𝘪 𝘉𝘢𝘸𝘢𝘩 𝘐𝘯𝘪`

const kataadmin = `HAI *${pushname}*
KIRIMKAN FORMAT DI BAWAH INI
CONTOH :
NAMA PRODUK : FF 140 FF
HARGA : 21.000 
UNTUK NOMOR ADMIN TEKAN TOMBOL ADMIN DI BAWAH INI`
const katabayar = `
𝙃𝙄 *${pushname}*
𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐒𝐜𝐚𝐧 𝐐𝐫𝐢𝐬 𝐃𝐢𝐚𝐭𝐚𝐬 𝐃𝐚𝐧 𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫 𝐃𝐞𝐧𝐠𝐚𝐧 𝐉𝐮𝐦𝐥𝐚𝐡 𝐘𝐚𝐧𝐠 𝐓𝐞𝐥𝐚𝐡 𝐝𝐢 𝐓𝐞𝐧𝐭𝐮𝐤𝐚𝐧 𝐃𝐢 𝐋𝐢𝐬𝐭 𝐇𝐚𝐫𝐠𝐚 𝐃𝐚𝐧 𝐒𝐞𝐭𝐞𝐥𝐚𝐡 𝐢𝐭𝐮 𝐊𝐢𝐫𝐢𝐦 𝐁𝐮𝐤𝐭𝐢 𝐓𝐫𝐚𝐧𝐬𝐚𝐤𝐬?? 𝐊𝐞 𝐀𝐝𝐦𝐢𝐧.

𝐏𝐞𝐦𝐛𝐚𝐲𝐚𝐫𝐚𝐧 𝐁𝐢𝐬𝐚 𝐌𝐞𝐧𝐠𝐮𝐧𝐚𝐤𝐚𝐧:
┏━━⬣
┃⬡ 𝙌𝙧𝙞𝙨  ⬡ 𝘿𝙖𝙣𝙖
┃⬡ 𝙊𝙫𝙤  ⬡ 𝘽𝙖𝙣𝙠
┗━━⬣
𝐏𝐞𝐫𝐡𝐚𝐭𝐢𝐚𝐧 : 𝐒𝐞𝐛𝐞𝐥𝐮𝐦 𝐌𝐞𝐧𝐭𝐫𝐚𝐧𝐟𝐞𝐫 𝐀𝐭𝐚𝐮 𝐌𝐞𝐦𝐛𝐚𝐲𝐚𝐫 𝐇𝐚𝐫𝐚𝐩 𝐂𝐡𝐚𝐭 𝐀𝐝𝐦𝐢𝐧 𝐓𝐞𝐫𝐥𝐞𝐛𝐢𝐡 𝐃𝐚𝐡𝐮𝐥𝐮 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡 𝐈𝐧𝐢
`
const kataharga = `𝙃𝙄 *${pushname}*
    𝙎𝙄𝙇𝘼𝙃𝙆𝘼𝙉 𝙋𝙄𝙇𝙄𝙃 𝙇𝙄𝙎𝙏 𝙃𝘼𝙍𝙂𝘼 𝘿𝙄 𝘽𝘼𝙒𝘼𝙃 𝙄𝙉𝙄`
const katastore1 = `𝙃𝙄 *${pushname}*
┏━━⬣𝘿𝘼𝙁𝙏𝘼𝙍 𝙏𝙊𝙋 𝙐𝙋 𝙂𝘼𝙈𝙀
┃⬡ MOBILE LEGENDS
┃⬡ FREE FIRE
┃⬡ PUBG
┃⬡ POINT BLANK
┃⬡ 8 BALL POOL
┃⬡ CALL OF DUTY
┗━━⬣
𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗣𝗜𝗟𝗜𝗛 𝗠𝗘??𝗨 𝗗𝗜𝗕𝗔𝗪𝗔𝗛`

const katastore2 = `𝙃𝙄 *${pushname}*
┏━━⬣𝘿𝘼𝙁𝙏𝘼𝙍 𝙈𝙀𝘿𝙄𝘼 𝙎𝙊𝙎𝙄𝘼𝙇
┃⬡ INSTAGRAM
┃⬡ FACEBOOK
┃⬡ YOUTUBE
┃⬡ TIKTOK
┗━━⬣
𝗦𝗜𝗟𝗔𝗛𝗞𝗔𝗡 𝗣𝗜𝗟𝗜𝗛 𝗠𝗘𝗡𝗨 𝗗𝗜𝗕𝗔𝗪𝗔𝗛`

const kataig = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈`

const katatt = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐓𝐈𝐊𝐓𝐎𝐊 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈`

const katayt = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈`

const katafb = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈`

const kataff = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈`

const kataml = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐌𝐎𝐁𝐈𝐋𝐄 𝐋𝐄𝐆𝐄𝐍𝐃𝐒 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈`

const katapubg = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐏𝐔𝐁𝐆 𝐌𝐎𝐁𝐈𝐋𝐄 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈A`

const kata8ball = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝟖 𝐁𝐀𝐋𝐋 𝐏𝐎𝐎𝐋 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈`

const katapb = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐏𝐎𝐈𝐍𝐓 𝐁𝐋𝐀𝐍𝐊 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈`

const katacod = `𝐇𝐈 ${pushname} 
𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐋𝐈𝐒𝐓 𝐇𝐀𝐑𝐆𝐀 𝐂𝐎𝐃 𝐌𝐎𝐁𝐈𝐋𝐄 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇 𝐈𝐍𝐈 𝐘𝐀𝐍𝐆 𝐈𝐍𝐆𝐈𝐍 𝐊𝐀𝐌𝐔 𝐁𝐄𝐋𝐈`



const katalist = `𝐇𝐢 ${pushname} 𝐒𝐞𝐥𝐚𝐦𝐚𝐭 ${ucap} 👋
𝐈𝐧𝐢 𝐀𝐝𝐚𝐥𝐚𝐡 𝐌𝐞𝐧𝐮 𝐁𝐨𝐭 𝐘𝐚𝐧𝐠 𝐁𝐢𝐬𝐚 𝐤𝐚𝐦𝐮 𝐆𝐮𝐧𝐚𝐤𝐚𝐧
┏━━⬣❏ *Matematika Menu*
┃⬡ ➭ *${prefix}luas-segitiga*
┃⬡ ➭ *${prefix}kel-segitiga*
┃⬡ ➭ *${prefix}luas-persegi*
┃⬡ ➭ *${prefix}pythagoras*
┃⬡ ➭ *${prefix}kel-persegi*
┃⬡ ➭ *${prefix}kubik*
┃⬡ ➭ *${prefix}perkalian*
┃⬡ ➭ *${prefix}kuadrat*
┗━━⬣
┏━━⬣❏ *Cerpen Command*
┃⬡ ➭ *${prefix}cerpen-persahabatan*
┃⬡ ➭ *${prefix}cerpen-islami*
┃⬡ ➭ *${prefix}cerpen-Pengorbanan*
┃⬡ ➭ *${prefix}cerpen-cintasegitiga*
┃⬡ ➭ *${prefix}cerpen-galau*
┗━━⬣
┏━━⬣❏ *Photo Editing*
┃⬡ ➭ *${prefix}imageinvert*
┃⬡ ➭ *${prefix}imagewasted*
┗━━⬣
┏━━⬣❏ *Downloader Menu*
┃⬡ ➭ *${prefix}instagram* <query>
┃⬡ ➭ *${prefix}tiktok* <link>
┃⬡ ➭ *${prefix}tiktoknowm* <link>
┃⬡ ➭ *${prefix}tiktokmusic* <link>
┃⬡ ➭ *${prefix}ytmp3* <link>
┃⬡ ➭ *${prefix}ytmp4* <link>
┃⬡ ➭ *${prefix}twitter* <link>
┃⬡ ➭ *${prefix}facebook* <link>
┃⬡ ➭ *${prefix}youtube* <link>
┃⬡ ➭ *${prefix}igstory* <link>
┃⬡ ➭ *${prefix}jpeg* <link>
┃⬡ ➭ *${prefix}mp4* <link>
┃⬡ ➭ *${prefix}joox* <url>
┗━━⬣
┏━━⬣❏ *Islamic Menu*
┃⬡ ➭ *${prefix}iqra*
┃⬡ ➭ *${prefix}juzamma*
┃⬡ ➭ *${prefix}alquran*
┃⬡ ➭ *${prefix}hadist*
┗━━⬣
┏━━⬣❏ *Text Pro*
┃⬡ ➭ *${prefix}8bit* text|text
┃⬡ ➭ *${prefix}horror* text|text
┃⬡ ➭ *${prefix}retro* text|text
┗━━⬣
┏━━⬣❏ *Maker Menu*
┃⬡ ➭ *${prefix}textmaker* <option>
┃⬡ ➭ *${prefix}rainbow* text
┃⬡ ➭ *${prefix}sci_fi* text
┃⬡ ➭ *${prefix}christmas*
┃⬡ ➭ *${prefix}ancient* text
┃⬡ ➭ *${prefix}toxic* text
┃⬡ ➭ *${prefix}tolol* text
┃⬡ ➭ *${prefix}lava* text
┃⬡ ➭ *${prefix}neonlight* text
┃⬡ ➭ *${prefix}fabric* text
┃⬡ ➭ *${prefix}glue* text
┃⬡ ➭ *${prefix}luxury* text
┃⬡ ➭ *${prefix}underwater*
┃⬡ ➭ *${prefix}harrypotter*
┃⬡ ➭ *${prefix}steel*
┃⬡ ➭ *${prefix}metallic*
┃⬡ ➭ *${prefix}graffiti*
┃⬡ ➭ *${prefix}pencil*
┃⬡ ➭ *${prefix}magma*
┃⬡ ➭ *${prefix}sand*
┃⬡ ➭ *${prefix}sky*
┃⬡ ➭ *${prefix}joker*
┃⬡ ➭ *${prefix}hoorror*
┃⬡ ➭ *${prefix}whitebear*
┃⬡ ➭ *${prefix}thunder*
┃⬡ ➭ *${prefix}matrix*
┃⬡ ➭ *${prefix}blackpink*
┃⬡ ➭ *${prefix}neon*
┃⬡ ➭ *${prefix}juice*
┃⬡ ➭ *${prefix}batman*
┃⬡ ➭ *${prefix}multicolor*
┃⬡ ➭ *${prefix}collwall*
┃⬡ ➭ *${prefix}wonderful*
┃⬡ ➭ *${prefix}cool*
┃⬡ ➭ *${prefix}sketch*
┃⬡ ➭ *${prefix}marvel*
┃⬡ ➭ *${prefix}skeleton*
┃⬡ ➭ *${prefix}foggy*
┃⬡ ➭ *${prefix}writing*
┃⬡ ➭ *${prefix}halloweenfire*
┃⬡ ➭ *${prefix}halloween*
┃⬡ ➭ *${prefix}watercolor*
┃⬡ ➭ *${prefix}classic*
┗━━⬣`

const kataigd = `tq`


//==========penutup kata tambahan====//
const listmn = `Hi ${pushname} 🤗 ${ucap} 👋

			 • Statistic Bot •
📱 Your Device: android
🔮 Library: Baileys-Md
			🌏 Date and Time ⏰
⌚️: ${time}
📅 : ${jangwak}

Memperingati Hari Pancasila
${ultah}

❏ *PROFILE BOT*
⫹⫺ Owner : ${owner.length}
⫹⫺ User Bot : ${jumlahUser}
⫹⫺ Author : CoreizenBot Dev
⫹⫺ Library : @adiwajshing/baileys-md
⫹⫺ User Cmd :${m.sender.split("@")[0]}

❏ *CoreizenBot*
⫹⫺ Runtime : ${runtime(process.uptime())}
⫹⫺ Total Hit : ${jumlahcmd}
⫹⫺ Total Hit Today : ${jumlahharian}

❏ *STATUS USER*
⫹⫺ Level : ${levelMenu}
⫹⫺ Xp : ${xpMenu}\ ${reqXp}
⫹⫺ Role : ${role}
⫹⫺ Uang : $${uangku}

❏ *PETUALANGAN USER*
⫹⫺ ️Besi kamu : ${getBesi(m.sender)}
⫹⫺ Emas Kamu : ${getEmas(m.sender)}
⫹⫺ Emerald Kamu : ${getEmerald(m.sender)}
⫹⫺ Potion Kamu : ${getPotion(m.sender)}

${require('./help/help.js').help(prefix, l, pushname)}`
const qtod = m.quoted? "true":"false"

// Case Nye Sini Ngab
switch(command) {
case 'test2': {
if (isBan) return m.reply(mess.ban)
let message = await prepareWAMessageMedia({ image:{url:hai}, gifPlayback:true, jpegThumbnail:global.log0 }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: katahi,
hydratedFooterText: "𝐂𝐎𝐑𝐄𝐈𝐙𝐄𝐍 𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒︎",
hydratedButtons: [{
urlButton: {
displayText: 'WHATSAPP ADMIN',
url: 'https://wa.me/6285262677553'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}]
}
}
}), { userJid: m.chat, quoted:m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break

case 'owner': {
                mans.sendContact(m.chat, global.owner, ftoko)
            }
            break
//==========menu shop sosial media==========//

case 'ig': {
                let buttons = [
                    {buttonId: `ig1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/ig.jpg'},
                    caption: kataig,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break

case 'fb': {
                let buttons = [
                    {buttonId: `fb1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/fb.jpg'},
                    caption: katafb,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

case 'tt': {
                let buttons = [
                    {buttonId: `tt1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/tt.jpg'},
                    caption: katatt,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

case 'yt': {
                let buttons = [
                    {buttonId: `yt1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/yt.jpg'},
                    caption: katayt,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//=================================top up game========================//
case 'ff': {
                let buttons = [
                    {buttonId: `ff1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/ff.jpg'},
                    caption: kataff,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

case 'ml': {
                let buttons = [
                    {buttonId: `ml1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/ml.jpg'},
                    caption: kataml,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break


case 'pubg': {
                let buttons = [
                    {buttonId: `pubg1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/pubg.jpg'},
                    caption: katapubg,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'pb': {
                let buttons = [
                    {buttonId: `pb1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/pb.jpg'},
                    caption: katapb,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case '8ball': {
                let buttons = [
                    {buttonId: `8ball1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/8ball.jpg'},
                    caption: kata8ball,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'cod': {
                let buttons = [
                    {buttonId: `cod1`, buttonText: {displayText: 'LIST HARGA'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/cod.jpg'},
                    caption: katacod,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
//==============================menu list top up game====================      
        
case 'ff1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `💎 50 Diamond`,
description: `Harga 8.000`,
rowId: `${prefix}bayar`
   },{
 title: `💎 70 Diamond`,
description: `Harga 11.000`,
rowId: `${prefix}bayar`
  },{
 title: `💎 140 Diamond`,
description: `Harga 21.000`,
rowId: `${prefix}bayar`
  },{
 title: `💎 355 Diamond`,
description: `Harga 46.000`,
rowId: `${prefix}bayar`
  },{
 title: `💎 720 Diamond`,
description: `Harga 98.000`,
rowId: `${prefix}bayar`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,
       footer: "𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : m }
    )  
}
break
case 'ml1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `💎 36 Diamond`,
description: `Harga 10.000`,
rowId: `${prefix}bayar`
   },{
 title: `💎 74 Diamond`,
description: `Harga 20.000`,
rowId: `${prefix}bayar`
  },{
 title: `💎 170 Diamond`,
description: `Harga 40.000`,
rowId: `${prefix}bayar`
  },{
 title: `💎 222 Diamond`,
description: `Harga 59.000`,
rowId: `${prefix}bayar`
  },{
 title: `💎 370 Diamond`,
description: `Harga 97.000`,
rowId: `${prefix}bayar`
  },{
 title: `💎 966 Diamond`,
description: `Harga 240.000`,
rowId: `${prefix}bayar`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,        
       footer: "𝐌𝐎𝐁𝐈𝐋𝐄 𝐋𝐄𝐆𝐄𝐍𝐃𝐒",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : m }
    )  
}
break
case 'pubg1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `💵 60 Uc`,
description: `Harga 17.000`,
rowId: `${prefix}bayar`
   },{
 title: `💵 100 Uc`,
description: `Harga 20.000`,
rowId: `${prefix}bayar`
  },{
 title: `💵 150 Uc`,
description: `Harga 33.000`,
rowId: `${prefix}bayar`
  },{
 title: `💵 250 Uc`,
description: `Harga 48.000`,
rowId: `${prefix}bayar`
  },{
 title: `💵 325 Uc`,
description: `Harga 82.000`,
rowId: `${prefix}bayar`
  },{
 title: `💵 660 Uc`,
description: `Harga 160.000`,
rowId: `${prefix}bayar`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,        
       footer: "𝐏𝐔𝐁𝐆 𝐌𝐎𝐁𝐈𝐋𝐄",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : m }
    )  
}
break
case '8ball1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `20 Cash`,
description: `Harga 15.000`,
rowId: `${prefix}bayar`
   },{
 title: `50 Cash`,
description: `Harga 36.000`,
rowId: `${prefix}bayar`
  },{
 title: `110 Cash`,
description: `Harga 72.000`,
rowId: `${prefix}bayar`
  },{
 title: `250 Cash`,
description: `Harga 142.000`,
rowId: `${prefix}bayar`
  },{
 title: `20000 Coins`,
description: `Harga 15.000`,
rowId: `${prefix}bayar`
  },{
 title: `52000 Coins`,
description: `Harga 36.000`,
rowId: `${prefix}bayar`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,        
       footer: "𝟖 𝐁𝐀𝐋𝐋 𝐏𝐎𝐎𝐋",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : m }
    )  
}
break
case 'cod1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `🪙 31 Cp`,
description: `Harga 5.000`,
rowId: `${prefix}bayar`
   },{
 title: `🪙 62 Cp`,
description: `Harga 11.000`,
rowId: `${prefix}bayarl`
  },{
 title: `🪙 127 Cp`,
description: `Harga 22.000`,
rowId: `${prefix}bayar`
  },{
 title: `🪙 317 Cp`,
description: `Harga 52.000`,
rowId: `${prefix}bayar`
  },{
 title: `🪙 634 Cp`,
description: `Harga 120.000`,
rowId: `${prefix}bayar`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,        
       footer: "𝐂𝐀𝐋𝐋 𝐎𝐅 𝐃𝐔𝐓𝐘",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : m }
    )  
}
break
case 'pb1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `💵 1.200 Cash`,
description: `Harga 11.000`,
rowId: `${prefix}bayar`
   },{
 title: `💵 2.400 Cash`,
description: `Harga 20.000`,
rowId: `${prefix}bayar`
  },{
 title: `💵 6.000 Cash`,
description: `Harga 48.000`,
rowId: `${prefix}bayar`
  },{
 title: `💵 12.000 Cash`,
description: `Harga 95.000`,
rowId: `${prefix}bayar`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,        
       footer: "𝐏𝐎𝐈𝐍𝐓 𝐁𝐋𝐀𝐍𝐊",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : m }
    )  
}
break
//==============================menu list sosial media====================
case 'ig1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `100 Followers`,
description: `Harga 1000`,
rowId: `${prefix}bayar`
   },{
 title: `500 Followers`,
description: `Harga 3000`,
rowId: `${prefix}bayar`
  },{
 title: `1000 Followers`,
description: `Harga 8000`,
rowId: `${prefix}bayar`
  },{
 title: `1000 Likes`,
description: `Harga 2000`,
rowId: `${prefix}bayar`
  },{
 title: `1000 Views`,
description: `Harga 2000`,
rowId: `${prefix}bayar`
  },{
 title: `1000 views Live`,
description: `Harga 8000`,
rowId: `${prefix}bayar`
  },{
 title: `100 Views Reel`,
description: `Harga 2000`,
rowId: `${prefix}bayar`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,        
       footer: "𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : ftoko }
    )  
}
break
case 'fb1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `500 Post Likes`,
description: `Harga 4000`,
rowId: `${prefix}bayar`
   },{
title: `1000 Post Likes`,
description: `Harga 8000`,
rowId: `${prefix}bayar`
   },{
 title: `1000 page Likes`,
description: `Harga 18000`,
rowId: `${prefix}bayar`
  },{
 title: `1000 Vidio views`,
description: `Harga 15000`,
rowId: `${prefix}bayar`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,        
       footer: "𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : ftoko }
    )  
}
break
case 'yt1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `1000 Likes`,
description: `Harga 8000`,
rowId: `${prefix}bayar`
   },{
 title: `100 Subcriber`,
description: `Harga 6000`,
rowId: `${prefix}bayar`
  },{
 title: `300 Subcriber`,
description: `Harga 15000`,
rowId: `${prefix}bayar`
  },{
 title: `500 Subcriber`,
description: `Harga 23000`,
rowId: `${prefix}bayar`
  },{
 title: `1000 Subcriber`,
description: `Harga 45000`,
rowId: `${prefix}bayar`
  },{
 title: `600 Views`,
description: `Harga 8000`,
rowId: `${prefix}bayar`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,        
       footer: "𝐘𝐎𝐔𝐓𝐔𝐁𝐄",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : ftoko }
    )  
}
break
case 'tt1': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `100 Followers`,
description: `Harga 1000`,
rowId: `${prefix}bayar`
   },{
 title: `300 Followers`,
description: `Harga 3000`,
rowId: `${prefix}bayar`
  },{
 title: `500 Followers`,
description: `Harga 5000`,
rowId: `${prefix}bayar`
  },{
 title: `1000 Followers`,
description: `Harga 9000`,
rowId: `${prefix}bayar`
  },{
 title: `500 Likes`,
description: `Harga 4000`,
rowId: `${prefix}cod`
  },{
 title: `1000 Likes`,
description: `Harga 8000`,
rowId: `${prefix}pubg`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: kataharga,        
       footer: "𝐓𝐈𝐊𝐓𝐎𝐊",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : ftoko }
    )  
}
break
           
       
//==========================penutup==========================//         

case 'admin': {
let message = await prepareWAMessageMedia({ gifPlayback:true, jpegThumbnail:global.log0 }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: './media/image/wamenu.jpg',
hydratedContentText: kataadmin,
hydratedFooterText: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓",
hydratedButtons: [{
urlButton: {
displayText: 'WHATSAPP ADMIN',
url: 'https://wa.me/6283127332487'
}
}, {
quickReplyButton: {
displayText: 'MENU',
id: `hai`
}
}]
}
}
}), { userJid: m.chat, quoted:m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
//============penutup===========//
//============menu case bot============//
case 'hai12': {
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/wamenu.jpg'},
                    caption: katahi,
                    footer: `𝐂𝐎𝐑𝐄𝐈𝐙𝐄𝐍 𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒︎`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'menu99': {
                let buttons = [
                    {buttonId: `fitur`, buttonText: {displayText: 'FITUR'}, type: 1}, {buttonId: `menu`, buttonText: {displayText: 'STORE'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/hai.jpg'},
                    caption: katamenu,
                    footer: `𝐂𝐎𝐑𝐄𝐈𝐙𝐄𝐍 𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒︎`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'fitur': {
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/hai.jpg'},
                    caption: katalist,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'Hai': case 'Hi': case 'hai': case 'hi': case 'Haii': case 'p': case 'haii': case 'Halo': case 'halo':  {
                let buttons = [
                    {buttonId: `store1`, buttonText: {displayText: 'TOP UP GAME'}, type: 1}, {buttonId: `store2`, buttonText: {displayText: 'MEDIA SOSIAL'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/hai.jpg'},
                    caption: katahi,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
            }
            break
case 'bayar': {
                let buttons = [
                    {buttonId: `owner`, buttonText: {displayText: 'PEMBAYARAN'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'./media/image/payment.jpg'},
                    caption: katabayar,
                    footer: `𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
            }
            break
//==========================================menu cmd================================//
case 'store1': {
sections = []
   const yy = {title: `SILAHKAN PILIH`,
rows: [
   {
title: `FREE FIRE`,
description: ``,
rowId: `${prefix}ff`
   },{
 title: `MOBILE LEGENDS`,
description: ``,
rowId: `${prefix}ml`
  },{
 title: `POINT BLANK`,
description: ``,
rowId: `${prefix}pb`
  },{
 title: `8 BALL POOL`,
description: ``,
rowId: `${prefix}8ball`
  },{
 title: `CALL OF DUTY`,
description: ``,
rowId: `${prefix}cod`
  },{
 title: `PUBG MOBILE`,
description: ``,
rowId: `${prefix}pubg`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: katastore1,        
       footer: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : ftoko }
    )  
}
break
case 'store2': {
sections = []
   const yy = {title: `menu ke`,
rows: [
   {
title: `INSTAGRAM`,
description: `Followers,Likes,Views,Comments`,
rowId: `${prefix}ig`
   },{
 title: `FACEBOOK`,
description: `Followers,Likes,Views,Comments`,
rowId: `${prefix}fb`
  },{
 title: `TIKTOK`,
description: `Followers,Likes,Views,Comments`,
rowId: `${prefix}tt`
  },{
 title: `YOUTUBE`,
description: `Subscriber,Likes,Views,Comments`,
rowId: `${prefix}yt`
  }
]
   }
sections.push(yy)
const sendm =  mans.sendMessage(
      from, 
      {
       text: katastore2,        
       footer: "𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓",
       title: "",
       buttonText: "PILIH DISINI",
       sections
      }, { quoted : ftoko }
    )  
}
break
//==========penutup=========================//
case 'menu1': {
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/fenzo.jpg'), gifPlayback:true, jpegThumbnail:global.log0 }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: listmn,
hydratedFooterText: "𝐂𝐎𝐑𝐄𝐈𝐙𝐄𝐍 𝐁𝐔𝐒𝐈𝐍𝐄𝐒𝐒︎",
hydratedButtons: [{
urlButton: {
displayText: 'Group Whatsapp',
url: 'https://chat.whatsapp.com/C9t9klLMGzg2dC84ii4fqY'
}
}, {
urlButton: {
displayText: 'Contact Me',
url: '+7 977 471-46-72'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
// Anti Tag 
const listTag = ["6283127332487@s.whatsapp.net"]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply 
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = 'https://uploader.caliph.my.id/file/Hxf936tvPc.webp'
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendImageAsSticker(m.chat, `https://uploader.caliph.my.id/file/Hxf936tvPc.webp`, m, {packname: packname, author: author})
}
		
case 'sticker': case 's': {
if (isBan) return m.reply(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: global.packname})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname})
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
		
// Antitag Via Tag
if (budy.includes("@6283127332487")) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendImageAsSticker(m.chat, `https://uploader.caliph.my.id/file/Hxf936tvPc.webp`, m, {packname: packname, author: author})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
mans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
mans.sendMessage("0@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
