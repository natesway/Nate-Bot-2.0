const a16_0x222a=['autoAssignable','DiscordError','find','client','../../models/Role','autoRolesRemove','../../utils/errors','It\x20allows\x20you\x20to\x20set\x20up\x20Auto\x20Roles\x20in\x20the\x20server.\x20Auto\x20Roles\x20are\x20the\x20roles\x20which\x20are\x20assigned\x20to\x20users\x20automatically\x20when\x20they\x20join\x20the\x20server.\x20You\x20can\x20optionally\x20set\x20up\x20Auto\x20Roles\x20for\x20either\x20bots\x20or\x20humans.','PremiumTier','name','PREMIUM_MEMBERSHIP_REQUIRED','bot','send','getString','test','GREEN','document','cache','LIMITED_PREMIUM_MEMBERSHIP','AUTO_ROLES','fetchPremiumTier','autoRoles\x20--add\x20ROLE\x20--bot','remove','info','catch','findByIdAndUpdate','user','ROLE_NOT_FOUND','resolveRole','autoRoles','IRIS','isPublicBastion','apply','BASTION_ERROR_TYPE','COLORS','For\x20Bots','toString','forUsers','has','autoRoles\x20--add\x20ROLE\x20--user','MANAGE_ROLES','../../utils/omnic','push','author','toUpperCase','join','errors','guild','membershipLimitAutoRoles','Command','autoRoles\x20--remove\x20ROLE','GOLD','add','channel','\x20/\x20BOTS','autoRolesAdd','constructor','length','premiumAutoRoles','default','locale','Constants','exec','forBots','tag','language','@bastion/tesseract','LIMITS','PLATINUM','roleNotFound','noAutoRoles','roles','resolver','Auto\x20Roles','_id'];(function(_0x4cf142,_0x222a6f){const _0x18a4af=function(_0x94936d){while(--_0x94936d){_0x4cf142['push'](_0x4cf142['shift']());}},_0x2f4987=function(){const _0xb7720e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x22d7b6,_0x5c720f,_0x5b26f5,_0x130f95){_0x130f95=_0x130f95||{};let _0x465116=_0x5c720f+'='+_0x5b26f5,_0x2cd36d=0x0;for(let _0x4fbd0f=0x0,_0x3a9b50=_0x22d7b6['length'];_0x4fbd0f<_0x3a9b50;_0x4fbd0f++){const _0x5f1dbd=_0x22d7b6[_0x4fbd0f];_0x465116+=';\x20'+_0x5f1dbd;const _0x4164be=_0x22d7b6[_0x5f1dbd];_0x22d7b6['push'](_0x4164be),_0x3a9b50=_0x22d7b6['length'],_0x4164be!==!![]&&(_0x465116+='='+_0x4164be);}_0x130f95['cookie']=_0x465116;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2af9f2,_0x1f188b){_0x2af9f2=_0x2af9f2||function(_0x3f4262){return _0x3f4262;};const _0x5a1a52=_0x2af9f2(new RegExp('(?:^|;\x20)'+_0x1f188b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2fb269=function(_0x541246,_0x3636f4){_0x541246(++_0x3636f4);};return _0x2fb269(_0x18a4af,_0x222a6f),_0x5a1a52?decodeURIComponent(_0x5a1a52[0x1]):undefined;}},_0x1cdc01=function(){const _0x49d2f4=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x49d2f4['test'](_0xb7720e['removeCookie']['toString']());};_0xb7720e['updateCookie']=_0x1cdc01;let _0x401175='';const _0x4072aa=_0xb7720e['updateCookie']();if(!_0x4072aa)_0xb7720e['setCookie'](['*'],'counter',0x1);else _0x4072aa?_0x401175=_0xb7720e['getCookie'](null,'counter'):_0xb7720e['removeCookie']();};_0x2f4987();}(a16_0x222a,0x1a7));const a16_0x18a4=function(_0x4cf142,_0x222a6f){_0x4cf142=_0x4cf142-0x0;let _0x18a4af=a16_0x222a[_0x4cf142];return _0x18a4af;};const a16_0x5b26f5=function(){let _0x45c812=!![];return function(_0x41ad92,_0x189876){const _0x2f1bde=_0x45c812?function(){if(_0x189876){const _0x5d570b=_0x189876[a16_0x18a4('0x3b')](_0x41ad92,arguments);return _0x189876=null,_0x5d570b;}}:function(){};return _0x45c812=![],_0x2f1bde;};}(),a16_0x5c720f=a16_0x5b26f5(this,function(){const _0x3616b0=function(){const _0x1d4b0b=_0x3616b0[a16_0x18a4('0x8')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[a16_0x18a4('0x8')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x1d4b0b[a16_0x18a4('0x29')](a16_0x5c720f);};return _0x3616b0();});a16_0x5c720f();'use strict';const tesseract_1=require(a16_0x18a4('0x12')),Role_1=require(a16_0x18a4('0x1f')),constants=require('../../utils/constants'),errors=require(a16_0x18a4('0x21')),omnic=require(a16_0x18a4('0x44'));module['exports']=class AutoRoles extends tesseract_1[a16_0x18a4('0x1')]{constructor(){super('autoRoles',{'description':a16_0x18a4('0x22'),'triggers':[],'arguments':{'alias':{'add':['a'],'remove':['r'],'bot':['b'],'user':['u']},'array':['add',a16_0x18a4('0x31')],'boolean':[a16_0x18a4('0x26'),a16_0x18a4('0x35')],'string':[a16_0x18a4('0x4'),a16_0x18a4('0x31')]},'scope':a16_0x18a4('0x4a'),'owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_ROLES'],'userPermissions':[a16_0x18a4('0x43')],'syntax':[a16_0x18a4('0x38'),'autoRoles\x20--add\x20ROLE',a16_0x18a4('0x30'),a16_0x18a4('0x42'),a16_0x18a4('0x2')]}),this[a16_0x18a4('0xe')]=async(_0x2081c5,_0x5332d7)=>{if(_0x5332d7[a16_0x18a4('0x4')]){if(constants[a16_0x18a4('0x3a')](this[a16_0x18a4('0x1e')][a16_0x18a4('0x35')])){const _0x48907a=await Role_1[a16_0x18a4('0xb')]['countDocuments']({'guild':_0x2081c5[a16_0x18a4('0x4a')]['id'],'autoAssignable':{'$exists':!![],'$ne':null}});if(_0x48907a>=constants[a16_0x18a4('0x13')][a16_0x18a4('0x2e')]){const _0x25614f=await omnic[a16_0x18a4('0x2f')](_0x2081c5[a16_0x18a4('0x4a')])[a16_0x18a4('0x33')](()=>{});if(_0x25614f){if(_0x25614f===omnic['PremiumTier'][a16_0x18a4('0x3')]&&_0x48907a>=constants['LIMITS'][a16_0x18a4('0x3')]['AUTO_ROLES'])throw new errors[(a16_0x18a4('0x1c'))](errors[a16_0x18a4('0x3c')][a16_0x18a4('0x2d')],this[a16_0x18a4('0x1e')]['locale'][a16_0x18a4('0x28')](_0x2081c5[a16_0x18a4('0x4a')]['document'][a16_0x18a4('0x11')],a16_0x18a4('0x49'),'membershipLimitAutoRoles',constants[a16_0x18a4('0x13')][a16_0x18a4('0x3')]['AUTO_ROLES']));else{if(_0x25614f===omnic[a16_0x18a4('0x23')][a16_0x18a4('0x14')]&&_0x48907a>=constants[a16_0x18a4('0x13')][a16_0x18a4('0x14')][a16_0x18a4('0x2e')])throw new errors['DiscordError'](errors[a16_0x18a4('0x3c')]['LIMITED_PREMIUM_MEMBERSHIP'],this[a16_0x18a4('0x1e')][a16_0x18a4('0xc')][a16_0x18a4('0x28')](_0x2081c5[a16_0x18a4('0x4a')][a16_0x18a4('0x2b')][a16_0x18a4('0x11')],a16_0x18a4('0x49'),a16_0x18a4('0x0'),constants[a16_0x18a4('0x13')][a16_0x18a4('0x14')]['AUTO_ROLES']));}}else throw new errors['DiscordError'](errors[a16_0x18a4('0x3c')][a16_0x18a4('0x25')],this[a16_0x18a4('0x1e')][a16_0x18a4('0xc')][a16_0x18a4('0x28')](_0x2081c5[a16_0x18a4('0x4a')]['document'][a16_0x18a4('0x11')],'errors',a16_0x18a4('0xa'),constants['LIMITS']['AUTO_ROLES']));}}const _0x1642b3=this[a16_0x18a4('0x1e')][a16_0x18a4('0x18')]['resolveRole'](_0x2081c5[a16_0x18a4('0x4a')],_0x5332d7['add']['join']('\x20'));if(!_0x1642b3)throw new errors['DiscordError'](errors[a16_0x18a4('0x3c')][a16_0x18a4('0x36')],this[a16_0x18a4('0x1e')][a16_0x18a4('0xc')]['getString'](_0x2081c5['guild']['document']['language'],a16_0x18a4('0x49'),a16_0x18a4('0x15')));const _0x8abbf5=!(Number(_0x5332d7[a16_0x18a4('0x26')])^Number(_0x5332d7[a16_0x18a4('0x35')]))||_0x5332d7[a16_0x18a4('0x26')]||![],_0x4971a4=!(Number(_0x5332d7[a16_0x18a4('0x26')])^Number(_0x5332d7[a16_0x18a4('0x35')]))||_0x5332d7['user']||![];await Role_1[a16_0x18a4('0xb')][a16_0x18a4('0x34')](_0x1642b3['id'],{'_id':_0x1642b3['id'],'guild':_0x2081c5[a16_0x18a4('0x4a')]['id'],'autoAssignable':{'forBots':_0x8abbf5,'forUsers':_0x4971a4}},{'upsert':!![]}),await _0x2081c5[a16_0x18a4('0x5')]['send']({'embed':{'color':tesseract_1[a16_0x18a4('0xd')][a16_0x18a4('0x3d')][a16_0x18a4('0x2a')],'description':this[a16_0x18a4('0x1e')][a16_0x18a4('0xc')][a16_0x18a4('0x28')](_0x2081c5['guild'][a16_0x18a4('0x2b')]['language'],a16_0x18a4('0x32'),a16_0x18a4('0x7'),_0x2081c5[a16_0x18a4('0x46')]['tag'],_0x1642b3[a16_0x18a4('0x24')]),'fields':[{'name':a16_0x18a4('0x3e'),'value':_0x8abbf5['toString']()[a16_0x18a4('0x47')](),'inline':!![]},{'name':'For\x20Humans','value':_0x4971a4[a16_0x18a4('0x3f')]()[a16_0x18a4('0x47')](),'inline':!![]}],'footer':{'text':_0x1642b3['id']}}})[a16_0x18a4('0x33')](()=>{});}else{if(_0x5332d7[a16_0x18a4('0x31')]){const _0x16e3e2=this['client']['resolver'][a16_0x18a4('0x37')](_0x2081c5[a16_0x18a4('0x4a')],_0x5332d7[a16_0x18a4('0x31')][a16_0x18a4('0x48')]('\x20'));if(!_0x16e3e2)throw new errors[(a16_0x18a4('0x1c'))](errors[a16_0x18a4('0x3c')][a16_0x18a4('0x36')],this['client']['locale'][a16_0x18a4('0x28')](_0x2081c5[a16_0x18a4('0x4a')][a16_0x18a4('0x2b')][a16_0x18a4('0x11')],a16_0x18a4('0x49'),'roleNotFound'));await Role_1[a16_0x18a4('0xb')][a16_0x18a4('0x34')](_0x16e3e2['id'],{'$unset':{'autoAssignable':0x1}}),await _0x2081c5[a16_0x18a4('0x5')][a16_0x18a4('0x27')]({'embed':{'color':tesseract_1['Constants'][a16_0x18a4('0x3d')]['RED'],'description':this[a16_0x18a4('0x1e')][a16_0x18a4('0xc')][a16_0x18a4('0x28')](_0x2081c5['guild'][a16_0x18a4('0x2b')][a16_0x18a4('0x11')],'info',a16_0x18a4('0x20'),_0x2081c5['author'][a16_0x18a4('0x10')],_0x16e3e2['name']),'footer':{'text':_0x16e3e2['id']}}})[a16_0x18a4('0x33')](()=>{});}else{const _0x72bd40=await Role_1[a16_0x18a4('0xb')][a16_0x18a4('0x1d')]({'guild':_0x2081c5[a16_0x18a4('0x4a')]['id'],'autoAssignable':{'$exists':!![]}});if(!_0x72bd40[a16_0x18a4('0x9')])throw new Error(this[a16_0x18a4('0x1e')][a16_0x18a4('0xc')]['getString'](_0x2081c5['guild'][a16_0x18a4('0x2b')][a16_0x18a4('0x11')],a16_0x18a4('0x49'),a16_0x18a4('0x16')));const _0x577734=[];for(const _0x1499ac of _0x72bd40){!_0x2081c5[a16_0x18a4('0x4a')]['roles'][a16_0x18a4('0x2c')][a16_0x18a4('0x41')](_0x1499ac[a16_0x18a4('0x1a')])&&await _0x1499ac[a16_0x18a4('0x31')]()[a16_0x18a4('0x33')](()=>{}),_0x577734[a16_0x18a4('0x45')]({'name':_0x2081c5[a16_0x18a4('0x4a')][a16_0x18a4('0x17')][a16_0x18a4('0x2c')]['get'](_0x1499ac[a16_0x18a4('0x1a')])[a16_0x18a4('0x24')]||'-','value':_0x1499ac[a16_0x18a4('0x1a')]+(Number(_0x1499ac[a16_0x18a4('0x1b')][a16_0x18a4('0xf')])^Number(_0x1499ac[a16_0x18a4('0x1b')]['forUsers'])&&_0x1499ac[a16_0x18a4('0x1b')][a16_0x18a4('0xf')]?a16_0x18a4('0x6'):'')+(Number(_0x1499ac['autoAssignable'][a16_0x18a4('0xf')])^Number(_0x1499ac[a16_0x18a4('0x1b')][a16_0x18a4('0x40')])&&_0x1499ac[a16_0x18a4('0x1b')][a16_0x18a4('0x40')]?'\x20/\x20HUMANS':'')});}await _0x2081c5[a16_0x18a4('0x5')][a16_0x18a4('0x27')]({'embed':{'color':tesseract_1[a16_0x18a4('0xd')][a16_0x18a4('0x3d')][a16_0x18a4('0x39')],'title':a16_0x18a4('0x19'),'description':this[a16_0x18a4('0x1e')][a16_0x18a4('0xc')][a16_0x18a4('0x28')](_0x2081c5[a16_0x18a4('0x4a')]['document'][a16_0x18a4('0x11')],a16_0x18a4('0x32'),'autoRolesList'),'fields':_0x577734}})[a16_0x18a4('0x33')](()=>{});}}};}};