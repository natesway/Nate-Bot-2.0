const a81_0x393f=['../../models/Case','DiscordError','../../utils/numbers','messages','errors','Command','caseNotFound','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','clamp','test','messageId','value','Moderator\x20ID','getString','default','It\x20allows\x20you\x20to\x20update\x20the\x20reason\x20of\x20a\x20moderation\x20case.\x20Forgot\x20to\x20set\x20a\x20reason?\x20Did\x20a\x20typo?\x20Here\x27s\x20your\x20second\x20chance.','size','Reason','edit','reason','document','type','join','NewsChannel','roles','number','text','moderationLogChannelId','TextChannel','language','ownerID','floor','find','exports','MAX_SAFE_INTEGER','permissions','author','name','../../utils/errors','constructor','BASTION_ERROR_TYPE','MANAGE_GUILD','guild','fields','exec','member','locale','has','cache','fetch','news'];(function(_0x4c0eaf,_0x393f9c){const _0x348045=function(_0x389d46){while(--_0x389d46){_0x4c0eaf['push'](_0x4c0eaf['shift']());}},_0x2ca3d6=function(){const _0x1c91a7={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x50f31e,_0x713c89,_0x22074c,_0x44f314){_0x44f314=_0x44f314||{};let _0x4d443f=_0x713c89+'='+_0x22074c,_0x387348=0x0;for(let _0x5574f9=0x0,_0x4b7973=_0x50f31e['length'];_0x5574f9<_0x4b7973;_0x5574f9++){const _0x1b8f90=_0x50f31e[_0x5574f9];_0x4d443f+=';\x20'+_0x1b8f90;const _0x1e4977=_0x50f31e[_0x1b8f90];_0x50f31e['push'](_0x1e4977),_0x4b7973=_0x50f31e['length'],_0x1e4977!==!![]&&(_0x4d443f+='='+_0x1e4977);}_0x44f314['cookie']=_0x4d443f;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4a3e1d,_0x557803){_0x4a3e1d=_0x4a3e1d||function(_0x4733dd){return _0x4733dd;};const _0x29ca71=_0x4a3e1d(new RegExp('(?:^|;\x20)'+_0x557803['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x14ed77=function(_0x392503,_0x467193){_0x392503(++_0x467193);};return _0x14ed77(_0x348045,_0x393f9c),_0x29ca71?decodeURIComponent(_0x29ca71[0x1]):undefined;}},_0x5c23fe=function(){const _0x469809=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x469809['test'](_0x1c91a7['removeCookie']['toString']());};_0x1c91a7['updateCookie']=_0x5c23fe;let _0x293306='';const _0x467c41=_0x1c91a7['updateCookie']();if(!_0x467c41)_0x1c91a7['setCookie'](['*'],'counter',0x1);else _0x467c41?_0x293306=_0x1c91a7['getCookie'](null,'counter'):_0x1c91a7['removeCookie']();};_0x2ca3d6();}(a81_0x393f,0x1a3));const a81_0x3480=function(_0x4c0eaf,_0x393f9c){_0x4c0eaf=_0x4c0eaf-0x0;let _0x348045=a81_0x393f[_0x4c0eaf];return _0x348045;};const a81_0x22074c=function(){let _0xd88c2d=!![];return function(_0xeaebcc,_0x244891){const _0x17e91e=_0xd88c2d?function(){if(_0x244891){const _0x56bbd5=_0x244891['apply'](_0xeaebcc,arguments);return _0x244891=null,_0x56bbd5;}}:function(){};return _0xd88c2d=![],_0x17e91e;};}(),a81_0x713c89=a81_0x22074c(this,function(){const _0x501d4d=function(){const _0x109cb3=_0x501d4d[a81_0x3480('0x1c')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()['constructor'](a81_0x3480('0x2f'));return!_0x109cb3[a81_0x3480('0x31')](a81_0x713c89);};return _0x501d4d();});a81_0x713c89();'use strict';const tesseract_1=require('@bastion/tesseract'),discord_js_1=require('discord.js'),Case_1=require(a81_0x3480('0x28')),numbers=require(a81_0x3480('0x2a')),errors=require(a81_0x3480('0x1b'));module[a81_0x3480('0x16')]=class ReasonCommand extends tesseract_1[a81_0x3480('0x2d')]{constructor(){super(a81_0x3480('0x8'),{'description':a81_0x3480('0x4'),'triggers':[],'arguments':{'alias':{'case':'n'},'number':['case'],'coerce':{'case':_0x2d8bb4=>Math[a81_0x3480('0x14')](numbers[a81_0x3480('0x30')](_0x2d8bb4,0x1,Number[a81_0x3480('0x17')]))}},'scope':a81_0x3480('0x1f'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':['reason\x20--case\x20NUMBER\x20--\x20REASON']}),this[a81_0x3480('0x21')]=async(_0x2e1c93,_0x55b95d)=>{if(_0x2e1c93[a81_0x3480('0x19')]['id']!==_0x2e1c93[a81_0x3480('0x1f')][a81_0x3480('0x13')]||_0x2e1c93[a81_0x3480('0x22')][a81_0x3480('0xd')][a81_0x3480('0x25')][a81_0x3480('0x5')]<0x2)return;if(!_0x55b95d[a81_0x3480('0xe')]||!_0x55b95d['_']['length'])throw new errors[(a81_0x3480('0x29'))](errors[a81_0x3480('0x1d')]['INVALID_COMMAND_SYNTAX'],this[a81_0x3480('0x1a')]);const _0x557f8c=await Case_1[a81_0x3480('0x3')]['findOne']({'guild':_0x2e1c93[a81_0x3480('0x1f')]['id'],'number':_0x55b95d[a81_0x3480('0xe')]});if(!_0x557f8c)throw new Error(this['client'][a81_0x3480('0x23')][a81_0x3480('0x2')](_0x2e1c93[a81_0x3480('0x1f')][a81_0x3480('0x9')][a81_0x3480('0x12')],a81_0x3480('0x2c'),a81_0x3480('0x2e')));const _0x2931ae=_0x2e1c93[a81_0x3480('0x1f')]['channels'][a81_0x3480('0x25')]['filter'](_0x54de54=>_0x54de54[a81_0x3480('0xa')]===a81_0x3480('0xf')||_0x54de54[a81_0x3480('0xa')]===a81_0x3480('0x27'));if(_0x2e1c93[a81_0x3480('0x1f')][a81_0x3480('0x9')]['moderationLogChannelId']&&_0x2931ae[a81_0x3480('0x24')](_0x2e1c93[a81_0x3480('0x1f')]['document'][a81_0x3480('0x10')])){const _0x4831df=_0x2931ae['get'](_0x2e1c93[a81_0x3480('0x1f')][a81_0x3480('0x9')][a81_0x3480('0x10')]);if(_0x4831df instanceof discord_js_1[a81_0x3480('0xc')]||_0x4831df instanceof discord_js_1[a81_0x3480('0x11')]){const _0xae6b7=await _0x4831df[a81_0x3480('0x2b')][a81_0x3480('0x26')](_0x557f8c[a81_0x3480('0x32')]),_0x2e3f7f=_0xae6b7['embeds'][0x0];if(!_0x2e1c93[a81_0x3480('0x22')][a81_0x3480('0x18')]['has'](a81_0x3480('0x1e'))||_0x2e3f7f[a81_0x3480('0x20')][a81_0x3480('0x15')](_0x34c4d5=>_0x34c4d5[a81_0x3480('0x1a')]===a81_0x3480('0x1'))[a81_0x3480('0x0')]!==_0x2e1c93['author']['id'])return;_0x2e3f7f[a81_0x3480('0x20')][a81_0x3480('0x15')](_0x358e07=>_0x358e07[a81_0x3480('0x1a')]===a81_0x3480('0x6'))['value']=_0x55b95d['_'][a81_0x3480('0xb')]('\x20'),await _0xae6b7[a81_0x3480('0x7')]({'embed':_0x2e3f7f});}}};}};