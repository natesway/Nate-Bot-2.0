const a58_0x2103=['humanize','\x20Status','ids','this.guilds.cache.map(g\x20=>\x20g.memberCount).reduce((acc,\x20val)\x20=>\x20acc\x20+\x20val,\x200)','[Get\x20**Bastion\x20Premium\x20Membership**\x20for\x20an\x20enhanced\x20Bastion\x20experience.](','/status','exec','env','It\x20allows\x20you\x20to\x20see\x20Bastion\x27s\x20status,\x20at\x20a\x20glance.\x20It\x20also\x20allows\x20you\x20to\x20see\x20status\x20of\x20the\x20current\x20shard.','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','size','constructor','toFixed','test','then','locale','author.url','BASTION_BOOT_TIME','apply','bastion.website','catch','reduce','emoji','../../utils/durations','Constants','Default\x20Prefixes','client','parseInt','configurations','COLORS','status\x20--shard','toString','Developer','guild','Bastion\x20v','map','badgeValue','\x20•\x20','\x20Users','displayAvatarURL','fetchBadges','Node\x20','ping','cache','guilds','process.memoryUsage().rss','\x20on\x20','@bastion/tesseract','join','concat','stats','Memory\x20Usage','\x20Servers\x0a','Bot\x20ID','Connected\x20via\x20Starlink.','memoryUsage','getConstant','count','Shard\x20','color','owners','name','status','channel','shard','version','Bot\x20Owners','Environment','user','getMembership','/premium)','\x20/\x20','arch','between','Uptime','broadcastEval'];(function(_0x99a672,_0x210376){const _0x2b9948=function(_0x519b79){while(--_0x519b79){_0x99a672['push'](_0x99a672['shift']());}},_0x2324c7=function(){const _0x51e7c2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x43cf39,_0x3c85b,_0x2fb64c,_0x3c65e8){_0x3c65e8=_0x3c65e8||{};let _0xd9a357=_0x3c85b+'='+_0x2fb64c,_0x32b662=0x0;for(let _0x50d6c8=0x0,_0x1cb66=_0x43cf39['length'];_0x50d6c8<_0x1cb66;_0x50d6c8++){const _0x2914ea=_0x43cf39[_0x50d6c8];_0xd9a357+=';\x20'+_0x2914ea;const _0x1bc83d=_0x43cf39[_0x2914ea];_0x43cf39['push'](_0x1bc83d),_0x1cb66=_0x43cf39['length'],_0x1bc83d!==!![]&&(_0xd9a357+='='+_0x1bc83d);}_0x3c65e8['cookie']=_0xd9a357;},'removeCookie':function(){return'dev';},'getCookie':function(_0xe4d4a0,_0x5e3c97){_0xe4d4a0=_0xe4d4a0||function(_0x565f56){return _0x565f56;};const _0x3cc117=_0xe4d4a0(new RegExp('(?:^|;\x20)'+_0x5e3c97['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5012a5=function(_0x51935b,_0x4ba3bc){_0x51935b(++_0x4ba3bc);};return _0x5012a5(_0x2b9948,_0x210376),_0x3cc117?decodeURIComponent(_0x3cc117[0x1]):undefined;}},_0x219bb2=function(){const _0x6c62a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x6c62a['test'](_0x51e7c2['removeCookie']['toString']());};_0x51e7c2['updateCookie']=_0x219bb2;let _0x50e4ff='';const _0x204f8d=_0x51e7c2['updateCookie']();if(!_0x204f8d)_0x51e7c2['setCookie'](['*'],'counter',0x1);else _0x204f8d?_0x50e4ff=_0x51e7c2['getCookie'](null,'counter'):_0x51e7c2['removeCookie']();};_0x2324c7();}(a58_0x2103,0x8c));const a58_0x2b99=function(_0x99a672,_0x210376){_0x99a672=_0x99a672-0x0;let _0x2b9948=a58_0x2103[_0x99a672];return _0x2b9948;};const a58_0x2fb64c=function(){let _0x36b808=!![];return function(_0x33d428,_0x288594){const _0x56c401=_0x36b808?function(){if(_0x288594){const _0x27530f=_0x288594[a58_0x2b99('0x1e')](_0x33d428,arguments);return _0x288594=null,_0x27530f;}}:function(){};return _0x36b808=![],_0x56c401;};}(),a58_0x3c85b=a58_0x2fb64c(this,function(){const _0x3e7bda=function(){const _0xa64789=_0x3e7bda[a58_0x2b99('0x17')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a58_0x2b99('0x17')](a58_0x2b99('0x15'));return!_0xa64789[a58_0x2b99('0x19')](a58_0x3c85b);};return _0x3e7bda();});a58_0x3c85b();'use strict';const tesseract_1=require(a58_0x2b99('0x3b')),constants=require('../../utils/constants'),duration=require(a58_0x2b99('0x23')),badges=require('../../utils/badges'),package_json_1=require('../../package.json');module['exports']=class StatusCommand extends tesseract_1['Command']{constructor(){super(a58_0x2b99('0x4a'),{'description':a58_0x2b99('0x14'),'triggers':[a58_0x2b99('0x3e'),'info'],'arguments':{'boolean':['shard']},'scope':a58_0x2b99('0x2d'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a58_0x2b99('0x4a'),a58_0x2b99('0x2a')]}),this[a58_0x2b99('0x12')]=async(_0x579c44,_0xf1a45f)=>{const _0x40adb3=constants['isPublicBastion'](this['client'][a58_0x2b99('0x4')])&&await badges[a58_0x2b99('0x34')](_0x579c44['guild']['ownerID'],_0x579c44[a58_0x2b99('0x2d')]['id'])[a58_0x2b99('0x1a')](_0x3b04eb=>_0x3b04eb['json']())[a58_0x2b99('0x20')](()=>{}),_0xa6a3=badges[a58_0x2b99('0x5')](_0x40adb3?_0x40adb3[a58_0x2b99('0x30')]:0x0),_0xd7bd02=await this[a58_0x2b99('0x26')]['shard'][a58_0x2b99('0xb')]('this.guilds.cache.size'),_0x41027e=_0xf1a45f[a58_0x2b99('0x0')]?this[a58_0x2b99('0x26')][a58_0x2b99('0x38')][a58_0x2b99('0x37')][a58_0x2b99('0x16')]:_0xd7bd02[a58_0x2b99('0x21')]((_0x2d4234,_0x324add)=>_0x2d4234+_0x324add,0x0),_0xdf3a6c=_0xf1a45f[a58_0x2b99('0x0')]?this[a58_0x2b99('0x26')][a58_0x2b99('0x38')][a58_0x2b99('0x37')][a58_0x2b99('0x2f')](_0x133c15=>_0x133c15['memberCount']):await this[a58_0x2b99('0x26')][a58_0x2b99('0x0')]['broadcastEval'](a58_0x2b99('0xf')),_0x5bd5c6=_0xdf3a6c[a58_0x2b99('0x21')]((_0xba4fbb,_0x1d39f9)=>_0xba4fbb+_0x1d39f9,0x0),_0x3f8ac8=await this[a58_0x2b99('0x26')][a58_0x2b99('0x0')]['broadcastEval'](a58_0x2b99('0x39')),_0x4bc507=_0xf1a45f[a58_0x2b99('0x0')]?process[a58_0x2b99('0x43')]()['rss']:_0x3f8ac8[a58_0x2b99('0x21')]((_0x190642,_0x434891)=>_0x190642+_0x434891,0x0),_0x5814f7=[{'name':a58_0x2b99('0x2c'),'value':'['+this[a58_0x2b99('0x26')][a58_0x2b99('0x1b')][a58_0x2b99('0x44')]('author.username')+']('+this['client'][a58_0x2b99('0x1b')]['getConstant'](a58_0x2b99('0x1c'))+')','inline':!![]},{'name':a58_0x2b99('0x41'),'value':this[a58_0x2b99('0x26')]['user']['id'],'inline':!![]},{'name':a58_0x2b99('0x2'),'value':this[a58_0x2b99('0x26')]['credentials'][a58_0x2b99('0x48')][a58_0x2b99('0x3c')]('\x0a')||'-','inline':!![]},{'name':a58_0x2b99('0x25'),'value':this[a58_0x2b99('0x26')][a58_0x2b99('0x28')]['prefixes'][a58_0x2b99('0x3c')]('\x20'),'inline':!![]},{'name':'Shards','value':this[a58_0x2b99('0x26')][a58_0x2b99('0x0')][a58_0x2b99('0x45')][a58_0x2b99('0x2b')](),'inline':!![]}],_0x1dbda6=[{'name':'Presence','value':_0x41027e+a58_0x2b99('0x40')+_0x5bd5c6+a58_0x2b99('0x32'),'inline':!![]},{'name':a58_0x2b99('0xa'),'value':duration[a58_0x2b99('0xc')](duration[a58_0x2b99('0x9')](Date['now'](),Number[a58_0x2b99('0x27')](process[a58_0x2b99('0x13')][a58_0x2b99('0x1d')]))),'inline':!![]},{'name':a58_0x2b99('0x3f'),'value':(_0x4bc507/0x400/0x400)[a58_0x2b99('0x18')](0x2)+'MB','inline':!![]},{'name':a58_0x2b99('0x3'),'value':a58_0x2b99('0x35')+process[a58_0x2b99('0x1')]+a58_0x2b99('0x3a')+process['platform']+'\x20'+process[a58_0x2b99('0x8')]+'.\x20'+(constants['isPublicBastion'](this[a58_0x2b99('0x26')][a58_0x2b99('0x4')])?a58_0x2b99('0x42'):''),'inline':!![]}];await _0x579c44[a58_0x2b99('0x4b')]['send']({'embed':{'color':_0xa6a3?_0xa6a3[a58_0x2b99('0x47')]:tesseract_1[a58_0x2b99('0x24')][a58_0x2b99('0x29')]['IRIS'],'author':{'name':a58_0x2b99('0x2e')+package_json_1[a58_0x2b99('0x1')],'url':this['client']['locale'][a58_0x2b99('0x44')](a58_0x2b99('0x1f'))},'title':(_0xf1a45f['shard']?a58_0x2b99('0x46')+this[a58_0x2b99('0x26')][a58_0x2b99('0x0')][a58_0x2b99('0xe')][a58_0x2b99('0x3c')](a58_0x2b99('0x7')):'')+a58_0x2b99('0xd'),'description':_0xa6a3?_0xa6a3[a58_0x2b99('0x22')]+'\x20'+_0xa6a3[a58_0x2b99('0x49')]:a58_0x2b99('0x10')+this['client'][a58_0x2b99('0x1b')][a58_0x2b99('0x44')](a58_0x2b99('0x1f'))+a58_0x2b99('0x6'),'url':this[a58_0x2b99('0x26')]['locale'][a58_0x2b99('0x44')](a58_0x2b99('0x1f'))+a58_0x2b99('0x11'),'thumbnail':{'url':this[a58_0x2b99('0x26')][a58_0x2b99('0x4')][a58_0x2b99('0x33')]({'dynamic':!![],'size':0x200})},'fields':_0xf1a45f[a58_0x2b99('0x0')]?_0x1dbda6:_0x5814f7[a58_0x2b99('0x3d')](_0x1dbda6),'footer':{'text':(_0xf1a45f[a58_0x2b99('0x0')]?'':a58_0x2b99('0x46')+this[a58_0x2b99('0x26')]['shard'][a58_0x2b99('0xe')]['join'](a58_0x2b99('0x7'))+a58_0x2b99('0x31'))+this[a58_0x2b99('0x26')]['ws'][a58_0x2b99('0x36')]+'ms'},'timestamp':new Date()}})['catch'](()=>{});};}};