const a126_0x7cd3=['^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','../../utils/errors','url','INVALID_COMMAND_SYNTAX','author','[Click\x20here\x20to\x20Jump\x20to\x20the\x20Message.](','messages','cite\x20MESSAGE_ID\x20--channel\x20CHANNEL_ID','cache','join','exports','fetch','Command','IRIS','CHANNEL_NOT_FOUND','test','constructor','NO_MESSAGE_CONTENT','COLORS','cite','It\x20allows\x20you\x20to\x20cite\x20a\x20message\x20from\x20any\x20channel\x20in\x20the\x20server.','displayAvatarURL','length','cite\x20MESSAGE_ID','exec','MESSAGE_NOT_FOUND','Constants','name','@bastion/tesseract','content','channel','guild','apply'];(function(_0x257fa3,_0x7cd3c4){const _0x2565d2=function(_0x15f6d8){while(--_0x15f6d8){_0x257fa3['push'](_0x257fa3['shift']());}},_0x2d15fa=function(){const _0x3d4730={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2f6028,_0x2bce1f,_0x1e8522,_0x2aef05){_0x2aef05=_0x2aef05||{};let _0x2c2c4c=_0x2bce1f+'='+_0x1e8522,_0xa52b0=0x0;for(let _0x5c3607=0x0,_0x32215f=_0x2f6028['length'];_0x5c3607<_0x32215f;_0x5c3607++){const _0x132348=_0x2f6028[_0x5c3607];_0x2c2c4c+=';\x20'+_0x132348;const _0xcc0a74=_0x2f6028[_0x132348];_0x2f6028['push'](_0xcc0a74),_0x32215f=_0x2f6028['length'],_0xcc0a74!==!![]&&(_0x2c2c4c+='='+_0xcc0a74);}_0x2aef05['cookie']=_0x2c2c4c;},'removeCookie':function(){return'dev';},'getCookie':function(_0xfd289d,_0x3b8ced){_0xfd289d=_0xfd289d||function(_0x45d5ca){return _0x45d5ca;};const _0x24c5f4=_0xfd289d(new RegExp('(?:^|;\x20)'+_0x3b8ced['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3f2587=function(_0x235e12,_0x5d30e6){_0x235e12(++_0x5d30e6);};return _0x3f2587(_0x2565d2,_0x7cd3c4),_0x24c5f4?decodeURIComponent(_0x24c5f4[0x1]):undefined;}},_0x3779df=function(){const _0x10a3a5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x10a3a5['test'](_0x3d4730['removeCookie']['toString']());};_0x3d4730['updateCookie']=_0x3779df;let _0x3e0a9c='';const _0x16641f=_0x3d4730['updateCookie']();if(!_0x16641f)_0x3d4730['setCookie'](['*'],'counter',0x1);else _0x16641f?_0x3e0a9c=_0x3d4730['getCookie'](null,'counter'):_0x3d4730['removeCookie']();};_0x2d15fa();}(a126_0x7cd3,0x101));const a126_0x2565=function(_0x257fa3,_0x7cd3c4){_0x257fa3=_0x257fa3-0x0;let _0x2565d2=a126_0x7cd3[_0x257fa3];return _0x2565d2;};const a126_0x1e8522=function(){let _0x40ad2e=!![];return function(_0x1ecd67,_0x578b29){const _0x49a07c=_0x40ad2e?function(){if(_0x578b29){const _0x992b40=_0x578b29[a126_0x2565('0x6')](_0x1ecd67,arguments);return _0x578b29=null,_0x992b40;}}:function(){};return _0x40ad2e=![],_0x49a07c;};}(),a126_0x2bce1f=a126_0x1e8522(this,function(){const _0x1cb96f=function(){const _0x3106ae=_0x1cb96f[a126_0x2565('0x17')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a126_0x2565('0x17')](a126_0x2565('0x7'));return!_0x3106ae[a126_0x2565('0x16')](a126_0x2bce1f);};return _0x1cb96f();});a126_0x2bce1f();'use strict';const tesseract_1=require(a126_0x2565('0x2')),errors=require(a126_0x2565('0x8'));module[a126_0x2565('0x11')]=class CiteCommand extends tesseract_1[a126_0x2565('0x13')]{constructor(){super(a126_0x2565('0x1a'),{'description':a126_0x2565('0x1b'),'triggers':[],'arguments':{},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':[],'userPermissions':[],'syntax':[a126_0x2565('0x1e'),a126_0x2565('0xe')]}),this[a126_0x2565('0x1f')]=async(_0x1be0a5,_0x4900b9)=>{if(!_0x4900b9['_'][a126_0x2565('0x1d')])throw new errors['DiscordError'](errors['BASTION_ERROR_TYPE'][a126_0x2565('0xa')],this[a126_0x2565('0x1')]);const _0x30f6d3=_0x4900b9[a126_0x2565('0x4')]?_0x1be0a5[a126_0x2565('0x5')]['channels'][a126_0x2565('0xf')]['get'](_0x4900b9['channel']):_0x1be0a5[a126_0x2565('0x4')];if(!_0x30f6d3||!('messages'in _0x30f6d3))throw new Error(a126_0x2565('0x15'));const _0x49a3b8=await _0x30f6d3[a126_0x2565('0xd')][a126_0x2565('0x12')](_0x4900b9['_'][a126_0x2565('0x10')](''));if(!_0x49a3b8)throw new Error(a126_0x2565('0x20'));if(!_0x49a3b8[a126_0x2565('0x3')])throw new Error(a126_0x2565('0x18'));await _0x1be0a5[a126_0x2565('0x4')]['send']({'embed':{'color':tesseract_1[a126_0x2565('0x0')][a126_0x2565('0x19')][a126_0x2565('0x14')],'author':{'name':_0x49a3b8[a126_0x2565('0xb')]['tag'],'iconURL':_0x49a3b8[a126_0x2565('0xb')][a126_0x2565('0x1c')]({'dynamic':!![],'size':0x40})},'title':'#'+_0x30f6d3['name'],'description':_0x49a3b8['content'],'fields':[{'name':'Source','value':a126_0x2565('0xc')+_0x49a3b8[a126_0x2565('0x9')]+')','inline':!![]}],'footer':{'text':_0x49a3b8['id']}}});};}};