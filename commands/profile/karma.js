const a109_0x1fa8=['Command','resolver','tag','karma\x20USER','karma','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','COLORS','memberNotFound','exports','INVALID_COMMAND_SYNTAX','return\x20/\x22\x20+\x20this\x20+\x20\x22/','../../models/Member','errors','constructor','guild','info','author','apply','NO_SELF_KARMA','DiscordError','join','exec','@bastion/tesseract','length','document','user','test','locale','../../utils/errors','language','send','name','getString','profileNotFound','catch','client'];(function(_0x2cc8fd,_0x1fa8f8){const _0x2f4307=function(_0x180e3f){while(--_0x180e3f){_0x2cc8fd['push'](_0x2cc8fd['shift']());}},_0x25ace8=function(){const _0x25cd0e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x568d94,_0x1db59c,_0x1ba616,_0x1d1cc5){_0x1d1cc5=_0x1d1cc5||{};let _0x371781=_0x1db59c+'='+_0x1ba616,_0x3d1b1c=0x0;for(let _0x340352=0x0,_0x2e2f88=_0x568d94['length'];_0x340352<_0x2e2f88;_0x340352++){const _0x3f7540=_0x568d94[_0x340352];_0x371781+=';\x20'+_0x3f7540;const _0x1241dd=_0x568d94[_0x3f7540];_0x568d94['push'](_0x1241dd),_0x2e2f88=_0x568d94['length'],_0x1241dd!==!![]&&(_0x371781+='='+_0x1241dd);}_0x1d1cc5['cookie']=_0x371781;},'removeCookie':function(){return'dev';},'getCookie':function(_0x312565,_0x34383e){_0x312565=_0x312565||function(_0x4b3745){return _0x4b3745;};const _0x930bfd=_0x312565(new RegExp('(?:^|;\x20)'+_0x34383e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2a9001=function(_0x5bcc12,_0x4debfa){_0x5bcc12(++_0x4debfa);};return _0x2a9001(_0x2f4307,_0x1fa8f8),_0x930bfd?decodeURIComponent(_0x930bfd[0x1]):undefined;}},_0x598f97=function(){const _0x499824=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x499824['test'](_0x25cd0e['removeCookie']['toString']());};_0x25cd0e['updateCookie']=_0x598f97;let _0x326ab8='';const _0xf9e3d=_0x25cd0e['updateCookie']();if(!_0xf9e3d)_0x25cd0e['setCookie'](['*'],'counter',0x1);else _0xf9e3d?_0x326ab8=_0x25cd0e['getCookie'](null,'counter'):_0x25cd0e['removeCookie']();};_0x25ace8();}(a109_0x1fa8,0x6f));const a109_0x2f43=function(_0x2cc8fd,_0x1fa8f8){_0x2cc8fd=_0x2cc8fd-0x0;let _0x2f4307=a109_0x1fa8[_0x2cc8fd];return _0x2f4307;};const a109_0x1ba616=function(){let _0x5067f5=!![];return function(_0x4286bb,_0x15e3e1){const _0x5a4b58=_0x5067f5?function(){if(_0x15e3e1){const _0x5c2e22=_0x15e3e1[a109_0x2f43('0xe')](_0x4286bb,arguments);return _0x15e3e1=null,_0x5c2e22;}}:function(){};return _0x5067f5=![],_0x5a4b58;};}(),a109_0x1db59c=a109_0x1ba616(this,function(){const _0xb62ef9=function(){const _0x25c6a9=_0xb62ef9[a109_0x2f43('0xa')](a109_0x2f43('0x7'))()[a109_0x2f43('0xa')](a109_0x2f43('0x2'));return!_0x25c6a9[a109_0x2f43('0x17')](a109_0x1db59c);};return _0xb62ef9();});a109_0x1db59c();'use strict';const tesseract_1=require(a109_0x2f43('0x13')),Member_1=require(a109_0x2f43('0x8')),errors=require(a109_0x2f43('0x19'));module[a109_0x2f43('0x5')]=class KarmaCommand extends tesseract_1[a109_0x2f43('0x21')]{constructor(){super('karma',{'description':'It\x20allows\x20you\x20to\x20give\x20someone\x20the\x20sweet\x20little\x20internet\x20points,\x20we\x20call\x20karma,\x20if\x20you\x20think\x20they\x27re\x20worth\x20it.\x20You\x20can\x20give\x20up\x20to\x203\x20karmas\x20every\x206\x20hours,\x20so\x20spend\x20it\x20wisely.','triggers':['rep'],'arguments':{},'scope':a109_0x2f43('0xb'),'owner':![],'cooldown':0x5460,'ratelimit':0x3,'clientPermissions':[],'userPermissions':[],'syntax':[a109_0x2f43('0x0')]}),this[a109_0x2f43('0x12')]=async(_0x467b06,_0x2a0344)=>{if(!_0x2a0344['_'][a109_0x2f43('0x14')])throw new errors[(a109_0x2f43('0x10'))](errors['BASTION_ERROR_TYPE'][a109_0x2f43('0x6')],this[a109_0x2f43('0x1c')]);const _0x1fe6c6=this[a109_0x2f43('0x20')][a109_0x2f43('0x22')]['resolveGuildMember'](_0x467b06[a109_0x2f43('0xb')],_0x2a0344['_'][a109_0x2f43('0x11')]('\x20'));if(!_0x1fe6c6)throw new Error(this[a109_0x2f43('0x20')][a109_0x2f43('0x18')]['getString'](_0x467b06[a109_0x2f43('0xb')][a109_0x2f43('0x15')][a109_0x2f43('0x1a')],a109_0x2f43('0x9'),a109_0x2f43('0x4')));if(_0x467b06[a109_0x2f43('0xd')]['id']===_0x1fe6c6['id'])throw new Error(a109_0x2f43('0xf'));const _0x3448ce=await Member_1['default']['findOne']({'user':_0x1fe6c6['id'],'guild':_0x467b06[a109_0x2f43('0xb')]['id']});if(!_0x3448ce)throw new Error(this['client']['locale'][a109_0x2f43('0x1d')](_0x467b06['guild'][a109_0x2f43('0x15')]['language'],a109_0x2f43('0x9'),a109_0x2f43('0x1e'),_0x1fe6c6[a109_0x2f43('0x16')][a109_0x2f43('0x23')]));_0x3448ce[a109_0x2f43('0x1')]+=0x1,await _0x3448ce['save'](),await _0x467b06['channel'][a109_0x2f43('0x1b')]({'embed':{'color':tesseract_1['Constants'][a109_0x2f43('0x3')]['IRIS'],'description':this[a109_0x2f43('0x20')][a109_0x2f43('0x18')]['getString'](_0x467b06[a109_0x2f43('0xb')][a109_0x2f43('0x15')][a109_0x2f43('0x1a')],a109_0x2f43('0xc'),a109_0x2f43('0x1'),_0x467b06['author']['tag'],_0x1fe6c6[a109_0x2f43('0x16')][a109_0x2f43('0x23')])}})[a109_0x2f43('0x1f')](()=>{});};}};