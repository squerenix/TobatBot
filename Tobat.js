/*
==THANKS TO==
DILAN
ARIFIRAZZAQ
ARASHI
MUHAMMAD ALWI
MrG {108p}
AGUNG
=============
*/

//YANG DIATAS JAN DIUBAH AJG NGOTAK BABI

//gw mencium bau bau Nyolong case 

//Modal dikit napa woi

//Kasi credit gw Mr.A43G 

//dan juga Subscribe Mr.A43G jgn cuma ganti nama bot

//Jangan kek kontol Njir 

//anak Babi Asw

//PLIS JANGAN GANTI NAMA OWNER SAMA UBAH TQTO

//KLO KETAWAN SAMA TEMEN GW GW GK BAKAL UP SC LAGI:)
const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { animesaran } = require('./src/animesaran')
const { animesaran2 } = require('./src/animesaran2')
const { help } = require('./lib/help')
const { rules } = require('./src/rules')
const { listsurah } = require('./src/listsurah')
const { donasi } = require('./lib/donasi')
const { asupan } = require('./src/asupan')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { vip } = require('./database/premium')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const toMs = require('ms')
const kagApi = require('@kagchi/kag-api')
const imgbb = require('imgbb-uploader')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const { to } = require("mathjs")
const { type } = require("node:os")
const apivhtear = '0' //ADA DI CHANEL TEMEN
const ZeksApi = 'apivinz'
const BarBarKey = '0' //BELI SENDIRI GOBLOK MODAL DOKIT AJG
const shizukaapi = 'onlyonedeveloper'
const TobzApi = 'BotWeA'
const PeQkeY = '0'
const XteamKey = 'KINGLEO07' //BELI SENDIRI GOBLOK MODAL DIKIT AJG
const TobzKey = 'BotWeA'
const apiKey = 'RiuApikey' //APIKEY GW JAN DISEBAR TANPA IZIN AJG
const vcard = 'BEGIN:VCARD\n'  // Jangan di ubah biar ga error
            + 'VERSION:3.0\n'  // Jangan di ubah biar ga error
            + 'FN:RBOT\n'  // Ganti jadi namamu
            + 'ORG: Pengembang RBOT;\n'  // Ganti jadi namamu/Botmu
            + 'TEL;type=CELL;type=VOICE;waid=62814622392081:+62814622392081\n'  // Ganti jadi nomormu, tapi jangan ubah polanya
            + 'END:VCARD' // jangan di ubah
prefix = '#'
blocked = []   
limitawal = '30' //terserah ganti atau engga
cr = '*🍁YT:Mr.A43G*\n*🍁IG:dokidokinime*\n*🍁OW:RIU*'
vr = '*🍁ANIMESARAN🍁*'
/******** OWNER NUMBER**********/
const ownerNumber = ["62814622392081@s.whatsapp.net"]  //ganti menjadi nomormu
/************************************/


/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
        const getLimit = (sender) => {
        let position = false
            Object.keys(limit).forEach ((i) => {
            if (limit[position].id === sender) {
            position = i
                }
            })
            if (position !== false) {
                return limit[position].limit
            }
        }
        
        const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }


        
function kyun(seconds){
function pad(s){
    return (s < 10 ? '0' : '') + s;
}
    var hours = Math.floor(seconds / (60*60));
    var minutes = Math.floor(seconds % (60*60) / 60);
    var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
    return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const tobat = new WAConnection()
tobat.logger.level = 'warn'
console.log(banner.string)
tobat.on('qr', qr => {
    qrcode.generate(qr, { small: true })
	console.log(color('(+)','white'), color('MrA43G','red'), color('(+)','white'), color(' SQAN CODENYA','aqua'), color('SUBREK YT MR.A43G','yellow'))
})

	tobat.on('credentials-updated', () => {
		fs.writeFileSync('./MrA43G.json', JSON.stringify(tobat.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'info!')
	})
	fs.existsSync('./MrA43G.json') && tobat.loadAuthInfo('./MrA43G.json')
	tobat.on('connecting', () => {
		start('2', color('[ ! ]Cepat Sqan','aqua'))
	})
	tobat.on('open', () => {
		success('2', color('[ ! ]Tersambung','red'))
	})
	tobat.connect({timeoutMs: 30*1000})


tobat.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await tobat.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await tobat.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\Selamat datang di group *${mdata.subject}* yang betah ya di sini`
				let buff = await getBuffer(ppimg)
				tobat.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await tobat.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara @${num.split('@')[0]}👋🍁`
				let buff = await getBuffer(ppimg)
				tobat.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	tobat.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	tobat.on('premium', json => {
		if (prem.length > 2) return
	    for (let i of json[1].premiumlist) {
	    	prem.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	tobat.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.prem
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = tobat.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = tobat.contacts[sender] != undefined ? tobat.contacts[sender].vname || tobat.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await tobat.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isRevoke = dataRevoke.includes(from)
			const isBanned = ban.includes(sender)
			const isCtRevoke = dataCtRevoke.data
			const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
			const isPrem = premium.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
                    const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				tobat.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				tobat.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? tobat.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tobat.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    tobat.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			tobat.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    tobat.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/

			var premi = '*X[NO]*'
			if (isPrem) {
				premi = '*✓[YES]*'
			} 
			if (isOwner) {
				premi = '*[owner]*'
			}
			
			var bani = '*[NO]*'
			if (isBanned) {
				bani = '*[YES]*'
			} 
			if (isOwner) {
				bani = '*owner_*'
			}
			
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
        const checkLimit = (sender) => {
        let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return tobat.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            tobat.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        tobat.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
        const isLimit = (sender) =>{ 
		    let position = false
            for (let i of _limit) {
            if (i.id === sender) {
            let limits = i.limit
            if (limits >= limitawal ) {
              	  position = true
                    tobat.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
            } else {
            _limit
                position = true
                return false
                }
            }
        }
        if (position === false) {
        const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
        return false
        }
    }
    
        
    
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        

           		  //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//chat message
		if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && !isCmd) console.log(color([time], "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
            if (!isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"))
            if (isGroup && isCmd) console.log(color([time], "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "red"), "in", color(groupName, "white"))
			
			switch(command) {
	
	
	
	
				
	
				default:
				if (budy.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        tobat.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("Iya kak jangan spam ya")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        tobat.groupRemove(from, [kic]).catch((e)=>{reply(`*NICO HARUS JADI ADMINâ—*`)})
		        }, 3000)
		        setTimeout( () => {
			        tobat.updatePresence(from, Presence.composing)
			        reply("Hedsot....")
		        }, 2000)
		        setTimeout( () => {
			        tobat.updatePresence(from, Presence.composing)
			        reply("Bismillah...")
		        }, 1000)
		        setTimeout( () => {
			        tobat.updatePresence(from, Presence.composing)
			        reply("Ready?...")
		        }, 0)
		}
		
		if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (isGroupAdmins) return reply(`*${pushname}* ᴀᴅᴀʟᴀʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴅɪ ᴋɪᴄᴋ`)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*sᴀʏᴏɴᴀʀᴀ ʙᴇʙᴀɴ ɢʀᴜᴘ*`)
		}, 100)
		setTimeout( () => {
		tobat.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
		}, 10)
		setTimeout( () => {
		reply(`*_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_*\nᴍᴀᴀғ *${pushname}* ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
		
		if (budy.includes(`assalamualaikum`)) {
                reply(`Waalaikumsalam`)
                }

		if (budy.includes(`Assalamualaikum`)) {
                reply(`Waalaikumsalam`)
                }

		if (budy.includes(`Ngentod`)) {
                reply(`Jaga Omongan😡`)
                }

		if (budy.includes(`Thanks`)) {
                reply(`Sama Sama Kak😁`)
                }

		if (budy.includes(`Makasih`)) {
                reply(`Sama Sama Kak😁`)
                }

		if (budy.includes(`sendsticker`)) {
                const darkbot = fs.readFileSync('./sticker/darkbot');
                tobat.sendMessage(from, darkbot, MessageType.sticker, {quoted: mek})
                }

		if (budy.includes(`Nico`)) {
                const nico = fs.readFileSync('./sticker/nico');
                tobat.sendMessage(from, nico, MessageType.sticker, {quoted: mek})
                }

		if (budy.includes(`Riu`)) {
                const Riu = fs.readFileSync('./sticker/Riu');
                tobat.sendMessage(from, Riu, MessageType.sticker, {quoted: mek})
                }

		if (budy.includes(`riu`)) {
                const Riu = fs.readFileSync('./sticker/Riu');
                tobat.sendMessage(from, Riu, MessageType.sticker, {quoted: mek})
                }

		if (budy.includes(`nico`)) {
                const nico = fs.readFileSync('./sticker/nico');
                tobat.sendMessage(from, nico, MessageType.sticker, {quoted: mek})
                }

		if (budy.includes(`bot`)) {
                reply(`Iya RBOT disini ketik ,help ya kak`)
                }
                
		if (budy.includes(`Bot`)) {
                const bot = fs.readFileSync('./assets/bot');
                tobat.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                }
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`*${pushname}*, Command *${prefix}${command}* Tidak Ada Di Dalam *${prefix}menu Bot Nico!*`)
		const none = fs.readFileSync('./assets/none');
		tobat.sendMessage(from, none, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})

			}
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[RIUBOT]','aqua'), ('Command Tidak Ditemukan!!','red'), color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
    switch (command) {
        case 'help': //Dilan Rangga S.
        case 'menu': //Dilan Rangga S.
        case 'h': //Dilan Rangga S.
            if (isBanned) return reply(ind.baned())
            if (isRegistered) return reply(ind.noregis())
            await tobat.reply(from, `
            ┏━━━━《 ${botName} 》━━━━
            ┃
            ┃ ❏ NAMA : ${ownerName}
            ┃ ❏ Prefix: 「 ${prefix} 」
            ┃ ❏ UANG : ${uangku}
            ┃ ❏ Total: ${total}
            ┃
            ┣ ❏ ABOUT BOT 」
            ┃
            ┣ ❏ ${prefix}info
            ┣ ❏ ${prefix}ping
            ┣ ❏ ${prefix}donasi
            ┣ ❏ ${prefix}owner 
            ┃
            ┣ ❏ ANIME MENU 」
            ┣ 
            ┣ ❏ DOMPET 」
            ┃
            ┣ ❏ ${prefix}limit
            ┣ ❏ ${prefix}atm
            ┣ ❏ ${prefix}transfer
            ┣ ❏ ${prefix}buylimit
            ┣ 
            ┣ ❏ DOWNLOADER 」
            ┣ 
            ┣ ❏ GABUT 」
            ┣ 
            ┣ ❏ GROUP MENU 」
            ┣ 
            ┣ ❏ MAKER MENU 」
            ┣ 
            ┣ ◪ SERTI MENU 」
            ┣ 
            ┣ ❏ NSFW MENU 」
            ┃
            ┣ ❏ OTHER MENU 」
            ┃
            ┣ ❏ DEFACER MENU 」
            ┃
            ┣ ❏ OWNER MENU 」
            ┣ 
            ┣ ❏ PREMIUM MENU 」
            ┃
            ┣ ❏ RANDOM MENU 」
            ┃
            ┣ ❏ SIMPLE MENU 」
            ┃
            ┣ ❏ SOUND MENU 」
            ┣ 
            ┣ ❏ THANKS TO 」
            ┃
            ┣ ❏ 
            ┣ ❏ 
            ┣ ❏ 
            ┣ ❏ 
            ┣ ❏ 
            ┣ ❏ 
            ┣ ❏ 
            ┣ ❏ *Dilan Rangga* (Comp.)
            ┃
            ┗━━━━《 ${botName} 》━━━━
            `, MessageType.text(), id)
        break

    //===============[ MENU MAKER ]===============
        case 'narutobanner'://UPDATE MR.108P
            if (isVerified) return reply(from, ind.notVerified(), id)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner ArnandoGanz`)
                nar = body.slice(14)
                reply(ind.wait())
                narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
                blue.sendMessage(from, narba, image, {quoted: mek})
            await limitAdd(sender)
        break
        case 'glowneon'://UPDATE MR.108P
            if (isVerified) return reply(from, ind.notVerified(), id)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply(`Contoh: ${prefix}glowneon Mr.108P`)
                tekas = body.slice(10)
                reply(ind.wait())
                glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
                blue.sendMessage(from, glown, image, {quoted: mek})
            await limitAdd(sender)
        break
        case 'gsuggest'://UPDATE MR.108P
            if (isVerified) return reply(from, ind.notVerified(), id)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply(`Contoh: ${prefix}gsuggest Mr.108P/rem/bot`)
                du = `${body.slice(10)}`
                ted1 = du.split("/")[0];
                ted2 = du.split("/")[1];
                ted3 = du.split("/")[2];
            reply(ind.wait())
                sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
                blue.sendMessage(from, sugetg, image, {quoted: mek})
            await limitAdd(sender)
        break
        case 'candlemug'://UPDATE MR.108P
            if (isVerified) return reply(from, ind.notVerified(), id)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply(`Contoh: ${prefix}candlemug ArnandoGanz`)
                ddu = body.slice(11)
                reply(ind.wait())
                clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
                blue.sendMessage(from, clmug, image, {quoted: mek})
            await limitAdd(sender)
        break
        case 'lovemss'://UPDATE MR.108P
            if (isVerified) return reply(from, ind.notVerified(), id)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply(`Contoh: ${prefix}lovemss ArnandoGanz`)
                lop = body.slice(9)
                reply(ind.wait())
                lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
                blue.sendMessage(from, lepms, image, {quoted: mek})
            await limitAdd(sender)
        break
        case 'mugflower'://UPDATE MR.108P
            if (isVerified) return reply(from, ind.notVerified(), id)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply(`Contoh: ${prefix}mugflower ArnandoGanz`)
                mug = body.slice(11)
                reply(ind.wait())
                mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
                blue.sendMessage(from, mflowg, image, {quoted: mek})
            await limitAdd(sender)
        break
    
    //===============[ MENU OWNER ]===============
        case 'listonline': //Anonymous
            if (isVerified) return reply(from, ind.notVerified(), id)
            if (!isOwner) return reply(ind.ownerb())
            let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
            let online = [...Object.keys(tobat.chats.get(ido).presences), tobat.user.jid]
                tobat.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }
            })
        break 
    
    //===============[ OTHER MENU ]============
        case 'battelfiel2'://UPDATE MR108P
            if (isVerified) return reply(from, ind.notVerified(), id)
            if (isLimit(sender)) return reply(ind.limitend(pusname))
            if (args.length < 1) return reply(`Contoh: ${prefix}battelfiel ArnandoGanz`)
                du = `${body.slice(13)}`
                ted1 = du.split("/")[0];
                ted2 = du.split("/")[1];
            reply(ind.wait())
                batte = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${ted1}&text2=${ted2}`)
                blue.sendMessage(from, batte, image, {quoted: mek})
            await limitAdd(sender)
        break       
    }
})
