const a79_0x62dd=['language','KICK_MEMBERS','Constants','INVALID_COMMAND_SYNTAX','Reason','user','getString','unauthorized','canManage','tag','document','catch','resolveGuildMember','DiscordError','COLORS','RED','Command','client','exports','join','return\x20/\x22\x20+\x20this\x20+\x20\x22/','errors','memberKick','../../utils/errors','channel','constructor','guild','name','locale','ORANGE','resolver','rolePosition','apply','exec','author','test','kick','send'];(function(_0x3fb8c9,_0x62dd65){const _0x1baf18=function(_0x1632dd){while(--_0x1632dd){_0x3fb8c9['push'](_0x3fb8c9['shift']());}},_0xe5393c=function(){const _0x34d058={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2f2df8,_0x4ce9bb,_0x507f49,_0x3511e4){_0x3511e4=_0x3511e4||{};let _0x29a28d=_0x4ce9bb+'='+_0x507f49,_0x34c841=0x0;for(let _0x69712f=0x0,_0x281721=_0x2f2df8['length'];_0x69712f<_0x281721;_0x69712f++){const _0x5a9e24=_0x2f2df8[_0x69712f];_0x29a28d+=';\x20'+_0x5a9e24;const _0x2fcf04=_0x2f2df8[_0x5a9e24];_0x2f2df8['push'](_0x2fcf04),_0x281721=_0x2f2df8['length'],_0x2fcf04!==!![]&&(_0x29a28d+='='+_0x2fcf04);}_0x3511e4['cookie']=_0x29a28d;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4e1d15,_0xb4eb08){_0x4e1d15=_0x4e1d15||function(_0x23649d){return _0x23649d;};const _0x1fbf12=_0x4e1d15(new RegExp('(?:^|;\x20)'+_0xb4eb08['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x1568fd=function(_0x5d529c,_0x2158ff){_0x5d529c(++_0x2158ff);};return _0x1568fd(_0x1baf18,_0x62dd65),_0x1fbf12?decodeURIComponent(_0x1fbf12[0x1]):undefined;}},_0x58e526=function(){const _0x334e49=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x334e49['test'](_0x34d058['removeCookie']['toString']());};_0x34d058['updateCookie']=_0x58e526;let _0x4e901d='';const _0x33ad05=_0x34d058['updateCookie']();if(!_0x33ad05)_0x34d058['setCookie'](['*'],'counter',0x1);else _0x33ad05?_0x4e901d=_0x34d058['getCookie'](null,'counter'):_0x34d058['removeCookie']();};_0xe5393c();}(a79_0x62dd,0x16f));const a79_0x1baf=function(_0x3fb8c9,_0x62dd65){_0x3fb8c9=_0x3fb8c9-0x0;let _0x1baf18=a79_0x62dd[_0x3fb8c9];return _0x1baf18;};const a79_0x507f49=function(){let _0x333ccd=!![];return function(_0x31b461,_0x3649b9){const _0x579398=_0x333ccd?function(){if(_0x3649b9){const _0x2c6532=_0x3649b9[a79_0x1baf('0x7')](_0x31b461,arguments);return _0x3649b9=null,_0x2c6532;}}:function(){};return _0x333ccd=![],_0x579398;};}(),a79_0x4ce9bb=a79_0x507f49(this,function(){const _0x65c2b4=function(){const _0x32a5aa=_0x65c2b4[a79_0x1baf('0x0')](a79_0x1baf('0x21'))()[a79_0x1baf('0x0')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x32a5aa[a79_0x1baf('0xa')](a79_0x4ce9bb);};return _0x65c2b4();});a79_0x4ce9bb();'use strict';const tesseract_1=require('@bastion/tesseract'),errors=require(a79_0x1baf('0x24'));module[a79_0x1baf('0x1f')]=class Kick extends tesseract_1[a79_0x1baf('0x1d')]{constructor(){super(a79_0x1baf('0xb'),{'description':'It\x20allows\x20you\x20to\x20kick\x20users\x20from\x20the\x20server.','triggers':[],'arguments':{'alias':{'user':'u'},'string':[a79_0x1baf('0x12')]},'scope':a79_0x1baf('0x1'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['KICK_MEMBERS'],'userPermissions':[a79_0x1baf('0xe')],'syntax':['kick\x20--user\x20USER_ID\x20--\x20REASON']}),this[a79_0x1baf('0x8')]=async(_0x587770,_0x5f4d2c)=>{const _0x36aac6=this[a79_0x1baf('0x1e')][a79_0x1baf('0x5')][a79_0x1baf('0x19')](_0x587770[a79_0x1baf('0x1')],_0x5f4d2c[a79_0x1baf('0x12')]);if(!_0x36aac6)throw new errors[(a79_0x1baf('0x1a'))](errors['BASTION_ERROR_TYPE'][a79_0x1baf('0x10')],this[a79_0x1baf('0x2')]);if(_0x587770['author']['id']!==_0x587770[a79_0x1baf('0x1')]['ownerID']&&!_0x587770['member'][a79_0x1baf('0x15')](_0x36aac6))return await _0x587770['channel']['send']({'embed':{'color':tesseract_1[a79_0x1baf('0xf')]['COLORS'][a79_0x1baf('0x1c')],'title':this[a79_0x1baf('0x1e')][a79_0x1baf('0x3')][a79_0x1baf('0x13')](_0x587770['guild'][a79_0x1baf('0x17')][a79_0x1baf('0xd')],a79_0x1baf('0x22'),a79_0x1baf('0x14')),'description':this['client']['locale'][a79_0x1baf('0x13')](_0x587770[a79_0x1baf('0x1')]['document'][a79_0x1baf('0xd')],a79_0x1baf('0x22'),a79_0x1baf('0x6'),_0x587770[a79_0x1baf('0x9')][a79_0x1baf('0x16')],_0x36aac6[a79_0x1baf('0x12')][a79_0x1baf('0x16')])}})['catch'](()=>{});const _0x165452=_0x5f4d2c['_'][a79_0x1baf('0x20')]('\x20')||'-';await _0x36aac6[a79_0x1baf('0xb')](_0x165452),await _0x587770[a79_0x1baf('0x25')][a79_0x1baf('0xc')]({'embed':{'color':tesseract_1[a79_0x1baf('0xf')][a79_0x1baf('0x1b')][a79_0x1baf('0x4')],'description':this[a79_0x1baf('0x1e')][a79_0x1baf('0x3')][a79_0x1baf('0x13')](_0x587770['guild'][a79_0x1baf('0x17')][a79_0x1baf('0xd')],'info',a79_0x1baf('0x23'),_0x587770[a79_0x1baf('0x9')][a79_0x1baf('0x16')],_0x36aac6[a79_0x1baf('0x12')]['tag']),'fields':[{'name':a79_0x1baf('0x11'),'value':_0x165452}],'footer':{'text':_0x36aac6['id']}}})[a79_0x1baf('0x18')](()=>{});};}};