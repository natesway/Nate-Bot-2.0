const a163_0x2e84=['inviteCreate','LISTENER_MODE','between','constructor','Listener','createdTimestamp','humanize','Expires','tag','maxAge','Invite\x20Channel','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','push','maxUses','../utils/durations','apply','Invite\x20Code','toString','inviter','channel','createLog','Constants','code','@bastion/tesseract'];(function(_0x1806e5,_0x2e8458){const _0x51c533=function(_0x49486a){while(--_0x49486a){_0x1806e5['push'](_0x1806e5['shift']());}},_0x198419=function(){const _0x400820={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2cd364,_0x2da45c,_0xef5329,_0x17108b){_0x17108b=_0x17108b||{};let _0x1d4a22=_0x2da45c+'='+_0xef5329,_0x3b0723=0x0;for(let _0x502b56=0x0,_0x476e90=_0x2cd364['length'];_0x502b56<_0x476e90;_0x502b56++){const _0x775642=_0x2cd364[_0x502b56];_0x1d4a22+=';\x20'+_0x775642;const _0x543e22=_0x2cd364[_0x775642];_0x2cd364['push'](_0x543e22),_0x476e90=_0x2cd364['length'],_0x543e22!==!![]&&(_0x1d4a22+='='+_0x543e22);}_0x17108b['cookie']=_0x1d4a22;},'removeCookie':function(){return'dev';},'getCookie':function(_0x3e676c,_0x2e46b9){_0x3e676c=_0x3e676c||function(_0x169991){return _0x169991;};const _0x4903c5=_0x3e676c(new RegExp('(?:^|;\x20)'+_0x2e46b9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x31feed=function(_0x1b6c7f,_0x9f82a9){_0x1b6c7f(++_0x9f82a9);};return _0x31feed(_0x51c533,_0x2e8458),_0x4903c5?decodeURIComponent(_0x4903c5[0x1]):undefined;}},_0x585a9c=function(){const _0x4b78a7=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x4b78a7['test'](_0x400820['removeCookie']['toString']());};_0x400820['updateCookie']=_0x585a9c;let _0x25a031='';const _0x14740a=_0x400820['updateCookie']();if(!_0x14740a)_0x400820['setCookie'](['*'],'counter',0x1);else _0x14740a?_0x25a031=_0x400820['getCookie'](null,'counter'):_0x400820['removeCookie']();};_0x198419();}(a163_0x2e84,0xc8));const a163_0x51c5=function(_0x1806e5,_0x2e8458){_0x1806e5=_0x1806e5-0x0;let _0x51c533=a163_0x2e84[_0x1806e5];return _0x51c533;};const a163_0xef5329=function(){let _0x2b691e=!![];return function(_0x4328fe,_0x5b279f){const _0x5e9640=_0x2b691e?function(){if(_0x5b279f){const _0x2c182c=_0x5b279f[a163_0x51c5('0x7')](_0x4328fe,arguments);return _0x5b279f=null,_0x2c182c;}}:function(){};return _0x2b691e=![],_0x5e9640;};}(),a163_0x2da45c=a163_0xef5329(this,function(){const _0xa479c6=function(){const _0x137d63=_0xa479c6[a163_0x51c5('0x13')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a163_0x51c5('0x13')](a163_0x51c5('0x3'));return!_0x137d63['test'](a163_0x2da45c);};return _0xa479c6();});a163_0x2da45c();'use strict';const tesseract_1=require(a163_0x51c5('0xf')),durations=require(a163_0x51c5('0x6'));module['exports']=class InviteCreateListener extends tesseract_1[a163_0x51c5('0x14')]{constructor(){super(a163_0x51c5('0x10'),{'mode':tesseract_1[a163_0x51c5('0xd')][a163_0x51c5('0x11')]['ON']}),this['exec']=async _0x6a0527=>{const _0x2088ed=_0x6a0527['guild'],_0xc2bd01=[{'name':a163_0x51c5('0x8'),'value':_0x6a0527[a163_0x51c5('0xe')],'inline':!![]},{'name':a163_0x51c5('0x2'),'value':_0x6a0527[a163_0x51c5('0xb')],'inline':!![]}];_0x6a0527[a163_0x51c5('0xa')]&&_0xc2bd01[a163_0x51c5('0x4')]({'name':'Inviter','value':_0x6a0527[a163_0x51c5('0xa')][a163_0x51c5('0x0')],'inline':!![]}),_0x6a0527[a163_0x51c5('0x5')]&&_0xc2bd01[a163_0x51c5('0x4')]({'name':'Max\x20Uses','value':_0x6a0527[a163_0x51c5('0x5')][a163_0x51c5('0x9')](),'inline':!![]}),_0x6a0527[a163_0x51c5('0x1')]&&_0xc2bd01[a163_0x51c5('0x4')]({'name':a163_0x51c5('0x17'),'value':durations[a163_0x51c5('0x16')](durations[a163_0x51c5('0x12')](_0x6a0527[a163_0x51c5('0x1')]*0x3e8)),'inline':!![]}),_0x2088ed[a163_0x51c5('0xc')]({'event':'inviteCreate','fields':_0xc2bd01,'footer':_0x6a0527['temporary']?'Temporary\x20Membership':undefined,'timestamp':_0x6a0527[a163_0x51c5('0x15')]});};}};