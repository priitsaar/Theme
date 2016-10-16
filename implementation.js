

function loadTheme()
{
	var cssId = 'ESThemeImplementation';  // you could encode the css path itself to generate id..
	if (!document.getElementById(cssId))
	{
		var head  = document.getElementsByTagName('head')[0];
		var link  = document.createElement('link');
		link.id   = cssId;
		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'https://rawgit.com/Aesir123/Theme/master/theme.css';
		link.media = 'all';
		head.appendChild(link);
	}
}

function getImagesByAlt(alt) {
    var allImages = document.getElementsByTagName("img");
    var images = [];
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].alt == alt) {
            images.push(allImages[i]);
        }
    }
    return images;
}

var emojiList = [
	["nod", "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/nod_80_anim_gif.gif?width=40&height=40"],
	["tauri", "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/dull_tauri_80_anim_gif.gif?width=40&height=40"],
	["morningafter", "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/hungover_40_anim_gif.gif"],
	["hug", "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/hug_80_anim_gif.gif?width=40&height=40"],
	["doh", "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/doh_80_anim_gif.gif?width=40&height=40"],
	["bitch", "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/donttalktome_anim.gif"],
	["fail", "https://az705183.vo.msecnd.net/onlinesupportmedia/onlinesupport/media/skype/screenshots/fa12330/emoticons/facepalm_80_anim_gif.gif?width=40&height=40"]
];

function applyEmoticon(name, url)
{
	
	var emoticons = getImagesByAlt(":" + name + ":");
	
	for(var i = 0; i < emoticons.length; i++)
		emoticons[i].src = url;
}

function applyEmoticons()
{
	for(var i = 0; i < emojiList.length; i++)
	{
		applyEmoticon(emojiList[i][0], emojiList[i][1]);
	}
}

function main()
{
	$(".app").append("<canvas />");
//	loadTheme();
//	alert("i'm working c:");
	applyEmoticons();
}

esIntegration.prototype.onMessage = function() { 
	applyEmoticons();
}