import fetch from 'node-fetch'

export async function before(m, { conn }) {
//let img = await (await fetch(`https://files.catbox.moe/ntyp5r.jpg`)).buffer()
let img = catalogo
 global.fake = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363402177795471@newsletter",
      serverMessageId: 100,
      newsletterName: '𝐀𝐍𝐆𝐄𝐋 𝐁𝐎𝐓 🧨',
    },
	    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: 'Hola',
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: '120363402177795471@newsletter',
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: false
	    },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}

global.rcanal = {
contextInfo: {
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363402177795471@newsletter",
serverMessageId: 100,
newsletterName: '𝐀𝐍𝐆𝐄𝐋 𝐁𝐎𝐓 🧨',
},
externalAdReply: { 
showAdAttribution: true,
title: '𝐀𝐍𝐆𝐄𝐋 - 𝐁𝐎𝐓 🧨',
body: '𝐀𝐍𝐆𝐄𝐋 𝐁𝐎𝐓 🧨',
previewType: "PHOTO",
thumbnailUrl: 'https://files.catbox.moe/ntyp5r.jpg',
sourceUrl: 'https://files.catbox.moe/ntyp5r.jpg',
mediaType: 1,
renderLargerThumbnail: false
},},}
	
}
