'use strict';let L=localStorage, o={}, v, b=document.lastChild,st0=document.createElement('style'),st1=document.createElement('style'),st2=document.createElement('style'),cpw=document.createElement('div'),
j=e=>{let s=document.createElement('script');s.textContent=e;b.append(s);s.remove()}, r=(p,h,x)=>{x=new XMLHttpRequest();x.onreadystatechange=()=>x.readyState==4&&h(x.response);x.open('get',p,!0);x.send()},
a=e=>{(e?(a=0,document.body):b).append(cpw);b.append(st0,st1,st2);if(v)for(let e of document.querySelectorAll('audio'))e.remove()},mf=chrome.runtime.getManifest(),
l=l=>{
	let e = Object.assign({},l); Object.assign(o,l);
	v = e.e||e.vp>0;
	e.m = location.host=='vk.com';
	e.l = chrome.runtime.getURL('');
	e.n = mf.short_name;
	e.url = mf.homepage_url;
	e.lang = +chrome.i18n.getMessage('lang');
	e.s = ['38.2,9.4,18.8,100|41.7,60,55,50','=Lobster, =Pacifico, =Marck+Script, =Bad+Script, =Caveat, =Lora, =Cormorant+Infant, =El+Messiri, =Neucha, =Kelly+Slab, =Gabriela, =PT+Mono, =Bellota, =Play, =Nunito, =Jost, =Didact+Gothic, =Rubik:wght@300, =Tenor+Sans, =Exo+2:wght@300, =Poiret+One, =Montserrat+Alternates, =Jura, =Open+Sans, =Montserrat, =Comfortaa','vk.com/video-168874636_456243146&thumb=Pc852124/v852124734/b4e17/_IXXYXYzUPY.jpg, vk.com/video-168874636_456239041&thumb=Pc847120/v847120686/ea6c3/4yIWbSc68J0.jpg, vk.com/video-168874636_456241281&thumb=Pc850528/v850528193/ae168/CujaozzK99w.jpg, vk.com/video-168874636_456239528&thumb=Pc846524/v846524980/14394b/BRCd7b3FIfM.jpg, vk.com/video-168874636_456239028&thumb=Pc850228/v850228207/1120b/y1HaK_xmsrM.jpg, vk.com/video-168874636_456241335','nosjphpoedivemarfilave'];
	e.hsl = e.hsl||e.s[0];
	e.fa = e.fa!=undefined?e.fa:e.s[1];
	e.ia = e.ia!=undefined?e.ia:e.s[2];
	L.st_C = e.C||0;
	L.st_S = e.S||0;
	let s='('+JSON.stringify(e)+')';a&&a();
	if(L._st||!L.st_cache||L.st_cache.split('/*')[1]!=e.v+'*/')r(e.l+'2.js',x=>{L.st_C=L.st_C>0?1:0;L.st_cache=x.replace(/\t\/\/[^\n]+\n/g,'').replace(/\t/g,'').replace(/\n/g,'').replace(/'\+ '/g,'').replace(/\}if/g,'};if')+'/*'+e.v+'*/';j(L.st_cache+s)});else j(L.st_cache+s);
	if(L._st||!L.st_style||!L.st_icons||L.st_style.split('/*')[1]!=e.v){
		r(e.l+(e.m?'css':'mcss'),x=>{
			x=x.split('**');L.st_S=L.st_S>0?1:0;L.st_icons=x[0].replace(/\n\/\/[^\n]+/g,'').replace(/[^\S ]/g,'');j('st.t()');
			L.st_style=st2.textContent=(typeof InstallTrigger=='undefined'?x[1]:x[1].replace(/-webkit-mask/g,'mask').replace(/-webkit-slider-thumb/g,'-moz-range-thumb').replace(/-webkit-/g,'-moz-').replace(/(overflow-?\w?:)overlay/g,'$1auto')).replace(/[^\S ]/g,'')+'/*'+e.v
		})
	}else st2.textContent=L.st_style
},
db={
	o:h=>new Promise(r=>{let i=indexedDB.open('st');i.onsuccess=()=>r(i.result);i.onupgradeneeded=()=>i.result.createObjectStore('db',{keyPath:'key'})}).then(h),
	t:o=>o.transaction('db','readwrite').objectStore('db'),
	g:(k,h)=>db.o(o=>new Promise(r=>{let t=db.t(o).get(k);t.onsuccess=()=>r(t.result&&t.result.val)}).then(h)),
	s:(k,v)=>db.o(o=>db.t(o).put({key:k,val:v}))
},
sync=e=>{
	e=e||JSON.parse(L.st_||'{}');
	try{
		db.s('sync',Object.assign(o,e));
		chrome.storage.local.set(e);
		if(e.ia && new TextEncoder().encode(e.ia).length>8188)e.ia=new TextDecoder().decode(new TextEncoder().encode(e.ia).slice(-8188)).split(', ').slice(1).join(', ');
		//chrome.storage.sync.QUOTA_BYTES_PER_ITEM-4
		chrome.storage.sync.set(e);
	}catch(a){L.st_reload=1;location.reload()}
};
cpw.id='cpw';st0.id='st0';st1.id='st1';st2.id='st2';document.readyState=='complete'?a(1):document.addEventListener('DOMContentLoaded',a);cpw.addEventListener('sync',()=>sync());
chrome.storage.local.get(null,(a={})=>a.z?l(a):chrome.storage.sync.get(null,(b={})=>Object.assign(b,a).z?l(b):db.g('sync',(c={})=>{l(Object.assign(c,b));sync(c)})))