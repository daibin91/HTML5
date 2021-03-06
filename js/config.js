
var Config = function(){
};
Config.prototype = {
	pages:[
	{
		Id:[{id:'page1',class:'show'}],
		dom:[
			{type:'img',src:'touxiang.png',x:27,y:52,w:121,h:127},
			{type:'img',src:'page-1-1.png',x:170,y:71,w:194,h:91},
			{type:'img',src:'jieting.png',x:74,y:812,w:116,h:163,click:'hide'},
			{type:'img',src:'page-1-2.png',x:424,y:677,w:125,h:85},
			{type:'img',src:'jujue.png',x:429,y:811,w:116,h:163,click:'video'},
			{type:'div',src:'',x:0,y:0,w:640,h:1008}
		]
	},{
		Id:[{id:'page2',class:'hide',move:['next']}],
		dom:[
			{type:'img',src:'page-2-logo.png',x:507,y:25,w:103,h:75},
			{type:'img',src:'page-2-1.png',x:47,y:44,w:500,h:243},
			{type:'div',x:210,y:554,w:204,h:204,click:'p2',id:'p2_play'},
			{type:'img',src:'page-2-3.png',x:172,y:818,w:290,h:38},
			{type:'img',src:'page-2-4.png',x:116,y:872,w:409,h:54},
			{type:'img',src:'page-2-s2-1.png',x:0,y:0,w:640,h:504},
			{type:'img',src:'page-2-s2-2.png',x:0,y:504,w:640,h:504},
			{type:'div',x:0,y:504,w:640,h:0,html:'hello world',id:'p2_video'},
			{type:'div',x:210,y:772,w:204,h:204,id:'p2_btn'},
			{type:'img',src:'page-3-arrow-bg.png',x:203,y:849,w:229,h:159,class:'twoArr'},
			{type:'img',src:'page-3-arrow.png',x:289,y:937,w:63,h:48,class:'arrow twoArr'},
			{type:'img',src:'r.png',x:210,y:452,w:204,h:204,class:'p2Last'}
		]
	},{
		Id:[{id:'page3',class:'hide',move:['next']}],
		dom:[
			{type:'img',src:'page-3-logo-bg.png',x:24,y:31,w:132,h:100},
			{type:'img',src:'page-3-logo.png',x:33,y:40,w:108,h:77},
			{type:'img',src:'page-3-music-bg.png',x:494,y:0,w:147,h:146},
			{type:'img',src:'page-3-7.png',x:180,y:192,w:236,h:496},
			{type:'img',src:'page-3-years.png',x:263,y:581,w:318,h:113},
			{type:'img',src:'page-3-title.png',x:9,y:699,w:615,h:101},
			{type:'img',src:'page-3-arrow-bg.png',x:203,y:849,w:229,h:159},
			{type:'img',src:'page-3-arrow.png',x:289,y:937,w:63,h:48,class:'arrow'},
			{type:'img',src:'ymq.png',x:-77,y:192,w:77,h:99,id:'ymq3'}
		]
	},{
		Id:[{id:'page4',class:'hide',move:['next']}],
		dom:[
			{type:'img',src:'page-4-logo-bg.png',x:25,y:33,w:130,h:97},
			{type:'img',src:'page-3-logo.png',x:33,y:40,w:108,h:77},
			{type:'img',src:'page-4-music-bg.png',x:494,y:0,w:147,h:146},
			{type:'img',src:'page-4-67.png',x:79,y:203,w:446,h:472},
			{type:'img',src:'page-4-cities.png',x:283,y:584,w:318,h:107},
			{type:'img',src:'page-4-title.png',x:9,y:701,w:615,h:91},
			{type:'img',src:'page-4-arrow-bg.png',x:193,y:834,w:241,h:174},
			{type:'img',src:'page-3-arrow.png',x:289,y:937,w:63,h:48,class:'arrow'},
			{type:'img',src:'ymq.png',x:255,y:1008,w:77,h:99,id:'ymq4'},
			{type:'img',src:'ymq.png',x:88,y:228,w:77,h:99,id:'ymq4_1'}
		]
	},{
		Id:[{id:'page5',class:'hide',move:['next']}],
		dom:[
			{type:'img',src:'page-5-logo-bg.png',x:24,y:31,w:132,h:100},
			{type:'img',src:'page-3-logo.png',x:33,y:40,w:108,h:77},
			{type:'img',src:'page-5-music-bg.png',x:494,y:0,w:147,h:146},
			{type:'img',src:'page-5-346.png',x:74,y:214,w:492,h:335},
			{type:'img',src:'page-5-matches.png',x:60,y:583,w:471,h:107},
			{type:'img',src:'page-5-title.png',x:9,y:698,w:615,h:95},
			{type:'img',src:'page-5-arrow-bg.png',x:197,y:843,w:241,h:165},
			{type:'img',src:'page-3-arrow.png',x:289,y:937,w:63,h:48,class:'arrow'},
			{type:'img',src:'ymq.png',x:74,y:319,w:77,h:99,id:'ymq5'},
			{type:'img',src:'ymq.png',x:640,y:274,w:77,h:99,id:'ymq5_1'},
			{type:'img',src:'ymq.png',x:640,y:400,w:77,h:99,id:'ymq5_2'}
		]
	},{
		Id:[{id:'page6',class:'hide',move:['next']}],
		dom:[
			{type:'img',src:'page-6-logo-bg.png',x:24,y:31,w:132,h:100},
			{type:'img',src:'page-3-logo.png',x:33,y:40,w:108,h:77},
			{type:'img',src:'page-6-music-bg.png',x:494,y:0,w:147,h:146},
			{type:'img',src:'page-6-4000.png',x:106,y:167,w:457,h:474},
			{type:'img',src:'page-6-athlethes.png',x:169,y:599,w:432,h:97},
			{type:'img',src:'page-6-title.png',x:9,y:703,w:615,h:87},
			{type:'img',src:'page-6-arrow-bg.png',x:207,y:837,w:229,h:171},
			{type:'img',src:'page-3-arrow.png',x:289,y:937,w:63,h:48,class:'arrow'},
			{type:'img',src:'ymq.png',x:640,y:80,w:77,h:99,id:'ymq6'},
			{type:'img',src:'ymq.png',x:-77,y:160,w:77,h:99,id:'ymq6_1'},
			{type:'img',src:'ymq.png',x:-77,y:285,w:77,h:99,id:'ymq6_2'}
		]
	},{
		Id:[{id:'page7',class:'hide'}],
		dom:[
			{type:'img',src:'page-7-logo-bg.png',x:24,y:31,w:132,h:100},
			{type:'img',src:'page-3-logo.png',x:33,y:40,w:108,h:77},
			{type:'img',src:'page-7-music-bg.png',x:494,y:0,w:147,h:146},
			{type:'img',src:'page-7-round-1.png',x:66,y:45,w:293,h:293,class:'round'},
			{type:'img',src:'page-7-btn-1.png',x:141,y:119,w:151,h:151,click:'layer1'},
			{type:'img',src:'page-7-round-2.png',x:240,y:233,w:368,h:368,class:'round'},
			{type:'img',src:'page-7-btn-2.png',x:325,y:314,w:203,h:203,click:'layer2'},
			{type:'img',src:'page-7-round-3.png',x:64,y:596,w:337,h:337,class:'round'},
			{type:'img',src:'page-7-btn-3.png',x:138,y:662,w:185,h:195,click:'layer3'}
		]
	},{
		Id:[{id:'layer1'}],
		dom:[
			{type:'img',src:'layer-1-logo.png',x:240,y:70,w:161,h:117},
			{type:'img',src:'layer-1-logo-bg.png',x:167,y:51,w:307,h:186},
			{type:'img',src:'layer-1-btn.png',x:135,y:682,w:372,h:109},
			{type:'img',src:'layer-1-border.png',x:52,y:49,w:542,h:766},
			{type:'img',src:'layer-1-text.png',x:104,y:206,w:435,h:460},
			{type:'img',src:'layer-1-back.png',x:40,y:846,w:265,h:109,click:'layer1Hide'},
			{type:'img',src:'layer-1-share.png',x:335,y:856,w:265,h:109,click:'share'}
		]
	},{
		Id:[{id:'layer2'}],
		dom:[
			{type:'img',src:'layer-3-left.png',x:0,y:428,w:113,h:152,click:'arrLeft'},
			{type:'img',src:'layer-3-right.png',x:524,y:426,w:116,h:158,click:'arrRight'},
			{type:'img',src:'layer-1-back.png',x:40,y:846,w:265,h:109,click:'layer2Hide'},
			{type:'img',src:'layer-1-share.png',x:335,y:856,w:265,h:109,click:'share'},
			{type:'div',x:0,y:0,w:640,h:1008,id:'changeDiv'}
		]
	},{
		Id:[{id:'layer3'}],
		dom:[
			{type:'img',src:'layer-2-box.png',x:33,y:33,w:575,h:509},
			{type:'img',src:'layer-2-layer.png',x:57,y:88,w:506,h:412},
			{type:'div',x:57,y:88,w:506,h:412,move:'move',id:'layerText',html:'strategy'},
			{type:'img',src:'layer-2-care.png',x:33,y:576,w:575,h:283},
			{type:'img',src:'layer-2-back.png',x:58,y:902,w:195,h:84,click:'layer3Hide'},
			{type:'img',src:'layer-2-share.png',x:365,y:902,w:195,h:84,click:'share'},
			{type:'img',src:'layer-2-slide.png',x:581,y:92,w:10,h:35,id:"slide"}
		]
	}
	]
};

