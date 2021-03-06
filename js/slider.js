if(!jQuery.easing.easeInQuad){jQuery.extend(jQuery.easing,{easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return-h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}
return-h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}
return h/2*((f-=2)*f*f+2)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}
return h/2*((f-=2)*f*f*f*f+2)+a},easeInExpo:function(e,f,a,h,g){return(f===0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f===0){return a}
if(f==g){return a+h}
if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}
return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h===0){return e}
if((h/=k)==1){return e+l}
if(!j){j=k*0.3}
if(g<Math.abs(l)){g=l;i=j/4}else{i=j/(2*Math.PI)*Math.asin(l/g)}
return-(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h===0){return e}
if((h/=k)==1){return e+l}
if(!j){j=k*0.3}
if(g<Math.abs(l)){g=l;i=j/4}else{i=j/(2*Math.PI)*Math.asin(l/g)}
return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h===0){return e}
if((h/=k/2)==2){return e+l}
if(!j){j=k*(0.3*1.5)}
if(g<Math.abs(l)){g=l;i=j/4}else{i=j/(2*Math.PI)*Math.asin(l/g)}
if(h<1){return-0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}
return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g===undefined){g=1.70158}
return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g===undefined){g=1.70158}
return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g===undefined){g=1.70158}
if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}
return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}
return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}})};(function(a){a.whateverthis=a.whateverthis||{version:"6.2.0"};a.whateverthis.Geom={getScaler:function(o,j,k,n,g,i,c){var e={};var d=n/i;var m=g/c;var b;if(typeof o=="string"){switch(o){case"fill":case"fillmax":b=d>m?d:m;if(o=="fill"){b=Math.min(1,b)}
break;case"fit":case"fitmax":b=d<m?d:m;if(o=="fit"){b=Math.min(1,b)}
break;case"none":b=1;break}}else{b=o}
e.ratio=b;e.diff={};e.offset={};e.align={w:j,h:k};var l=e.diff;var f=e.offset;l.w=f.w=n-i*b;l.h=f.h=g-c*b;switch(j){case"center":f.w=l.w/2;break;case"left":f.w=0;break}
switch(k){case"center":f.h=l.h/2;break;case"top":f.h=0;break}
return e},splitProps:function(b,d){var c=b.split(/,/);return d?{h:parseFloat(c[0]),w:parseFloat(c[1])}:{h:c[0],w:c[1]}}}}(jQuery));(function(c){c.whateverthis=c.whateverthis||{version:"6.2.0"};if(c.whateverthis.ticker){return}
var i=[];var b=0;function a(){return(new Date()).getTime()}
var h,f,d;var g=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||false;function e(){var m,l;if(b>0){m=a();for(var k in i){l=i[k];if(l.paused){continue}
if(m-l.last>=l.each){l.callback(l.last,m);l.last=m}}
if(g){g(e)}}}
var j=c.whateverthis.ticker={register:function(l,k){b++;k=(typeof k=="undefined")?33:k;if(k>0){k=parseInt(1000/k,10)}else{if(c.browser.mozilla){k=parseInt(1000/50,10)}}
i.push({callback:l,last:a(),each:k,delay:0});if(b==1){if(g){g(e)}else{h=setInterval(e,16);f=setInterval(e,20);d=setInterval(e,30)}}},pause:function(l){for(var k in i){if(i[k].callback==l){i[k].paused=true}}},resume:function(l){for(var k in i){if(i[k].callback==l){i[k].paused=false}}},unregister:function(l){for(var k in i){if(i[k].callback==l){delete i[k];b--}}
if(b<=0){clearInterval(h);clearInterval(f);clearInterval(d)}}}}(jQuery));(function(e){e.whateverthis=e.whateverthis||{version:"6.2.0"};if(e.whateverthis.youtube){return}
var f=false;var a=window.YT&&window.YT.Player;var d=[];function b(){for(var g=0;g<d.length;g++){d[g](a)}}
function c(){if(f){return}
f=true;var g=document.createElement("script");g.src="http://www.youtube.com/player_api";var h=document.getElementsByTagName("script")[0];h.parentNode.insertBefore(g,h);window.onYouTubePlayerAPIReady=function(){a=YT.Player;b()}}
e.whateverthis.youtube=function(g){if(a){g(a)}else{d.push(g);c()}}}(jQuery));(function(c){c.whateverthis=c.whateverthis||{version:"6.2.0"};if(c.whateverthis.vimeo){return}
var a=0;function b(h,e){var d=this;var f;function j(){a++;var k=c('<iframe id="pe_vimeo_player'+a+'" src="http://player.vimeo.com/video/'+e.videoId+"?autoplay="+(e.playerVars.autoplay?1:0)+"&loop="+(e.playerVars.loop?1:0)+"&api=1&player_id=pe_vimeo_player"+a+"&origin="+location.href.match(/:\/\/(.[^\/]+)/)[1]+'" width="'+e.width+'" height="'+e.height+'" frameborder="0"></iframe>')[0];c(h).append(k);f=new Froogaloop(k);f.addEvent("ready",g);setTimeout(g,4000)}
function g(){if(f){f.removeEvent("ready",g);c(d).trigger("video_ready.whateverthis");f.addEvent("finish",i)}}
function i(){c(d).trigger("video_ended.whateverthis")}
c.extend(d,{destroy:function(){if(f){f.removeEvent("ready",g);f.removeEvent("finish",i);c(f.element).remove();delete f.element;f=undefined}
d=undefined}});j()}
c.whateverthis.vimeo=function(d){d(b)}}(jQuery));(function(f){var l="0px 0px";var k="bilinear";var d=function(ad,ac,ab){function C(o,m){for(var p in o){if(U[o[p]]!==ab){return m=="pfx"?o[p]:!0}}
return!1}
function D(o,m){return!!~(""+o).indexOf(m)}
function E(o,m){return typeof o===m}
function F(o,m){return G(R.join(o+";")+(m||""))}
function G(m){U.cssText=m}
var aa="2.0.6",Z={},Y=ac.documentElement,X=ac.head||ac.getElementsByTagName("head")[0],W="modernizr",V=ac.createElement(W),U=V.style,T,S=Object.prototype.toString,R=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),Q={},P={},O={},M=[],K=function(m,u,t,s){var r,q,p,o=ac.createElement("div");if(parseInt(t,10)){while(t--){p=ac.createElement("div"),p.id=s?s[t]:W+(t+1),o.appendChild(p)}}
r=["&shy;","<style>",m,"</style>"].join(""),o.id=W,o.innerHTML+=r,Y.appendChild(o),q=u(o,m),o.parentNode.removeChild(o);return!!q},J,I={}.hasOwnProperty,H;!E(I,ab)&&!E(I.call,ab)?H=function(o,m){return I.call(o,m)}:H=function(o,m){return m in o&&E(o.constructor.prototype[m],ab)};var N=function(m,q){var p=m.join(""),o=q.length;K(p,function(r,w){var v=ac.styleSheets[ac.styleSheets.length-1],u=v.cssRules&&v.cssRules[0]?v.cssRules[0].cssText:v.cssText||"",t=r.childNodes,s={};while(o--){s[t[o].id]=t[o]}
Z.csstransforms3d=s.csstransforms3d.offsetLeft===9},o,q)}([,["@media (",R.join("transform-3d),("),W,")","{#csstransforms3d{left:9px;position:absolute}}"].join("")],[,"csstransforms3d"]);Q.csstransforms3d=function(){var m=!!C(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);m&&"webkitPerspective"in Y.style&&(m=Z.csstransforms3d);return m};for(var L in Q){H(Q,L)&&(J=L.toLowerCase(),Z[J]=Q[L](),M.push((Z[J]?"":"no-")+J))}
G(""),V=T=null,Z._version=aa,Z._prefixes=R,Z.testProp=function(m){return C([m])},Z.testStyles=K;return Z}(this,this.document);var g=/progid:DXImageTransform\.Microsoft\.Matrix\(.*?\)/;var c=document.createElement("modernizr"),e=c.style;function j(){var m={transformProperty:"",MozTransform:"-moz-",WebkitTransform:"-webkit-",OTransform:"-o-",msTransform:"-ms-"};for(var o in m){if(typeof e[o]!="undefined"){return m[o]}}
return null}
function n(){var o=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"];for(var m in o){if(e[o[m]]!==undefined){return true}}
return false}
var a=j(),h=a!==null?a+"transform":false,i=a!==null?a+"transform-origin":false;f.support.csstransforms=n();f.support.hw3dTransform=(d.csstransforms3d&&f.browser.webkit);if(a=="-ms-"){h="msTransform";i="msTransformOrigin"}
function b(p,s,y,x,v,q){if(f.support.csstransforms){var t;var u="px";if(v&&q&&(parseInt(y)!=y||parseInt(x)!=x)){y=100*y/v;x=100*x/q;u="%"}
if(f.support.hw3dTransform){t=(y!==undefined)?"translate3d("+y+u+","+x+u+",0) ":"translateZ(0) "}else{t=(y!==undefined)?"translate("+y+u+","+x+u+") ":""}
f(p).css(i,l).css(h,t+"scale("+s+")")}else{if(f.browser.msie){var m=p.style;var r='progid:DXImageTransform.Microsoft.Matrix(FilterType="'+k+'",M11='+s+",M12=0,M21=0,M22="+s+",Dx="+y+",Dy="+x+")";var o=m.filter||f.curCSS(p,"filter")||"";m.filter=g.test(o)?o.replace(g,r):o?o+" "+r:r}}}
f.fn.transform=function(r,p,o,m,q){this.each(function(){b(this,r,p,o,m,q)});return this}})(jQuery);var Froogaloop=(function(){function c(m){return new c.fn.init(m)}
var l={},e=false,k=Array.prototype.slice;c.fn=c.prototype={playerDomain:"",element:null,init:function(m){if(typeof m==="string"){m=document.getElementById(m)}
this.element=m;return this},api:function(s,p){if(!this.element||!s){return false}
var m=this,o=m.element,n=o.id!=""?o.id:null,q=!d(p)?p:null,r=d(p)?p:null;if(r){i(s,r,n)}
j(s,q,o);return m},addEvent:function(n,q){if(!this.element){return false}
var m=this,p=m.element,o=p.id!=""?p.id:null;i(n,q,o);if(n!="ready"){j("addEventListener",n,p)}
if(e){return m}
playerDomain=a(p.getAttribute("src"));if(window.addEventListener){window.addEventListener("message",b,false)}else{window.attachEvent("onmessage",b,false)}
e=true;return m},removeEvent:function(n){if(!this.element){return false}
var m=this,p=m.element,o=p.id!=""?p.id:null,q=f(n,o);if(n!="ready"&&q){j("removeEventListener",n,p)}}};function j(q,p,o){if(!o.contentWindow.postMessage){return false}
var m=o.getAttribute("src").split("?")[0],n=JSON.stringify({method:q,value:p});o.contentWindow.postMessage(n,m)}
function b(o){if(o.origin!=playerDomain){return false}
var q=JSON.parse(o.data),p=q.value,t=q.event||q.method,n=q.data,m=m==""?null:q.player_id,s=g(t,m),r=[];if(!s){return false}
if(p!==undefined){r.push(p)}
if(n){r.push(n)}
if(m){r.push(m)}
return r.length>0?s.apply(null,r):s.call()}
function i(m,o,n){if(n){if(!l[n]){l[n]={}}
l[n][m]=o}else{l[m]=o}}
function g(m,n){if(n){return l[n][m]}else{return l[m]}}
function f(m,n){if(n&&l[n]){if(!l[n][m]){return false}
l[n][m]=null}else{if(!l[m]){return false}
l[m]=null}
return true}
function a(n){}
function d(m){return!!(m&&m.constructor&&m.call&&m.apply)}
function h(m){return toString.call(m)==="[object Array]"}
c.fn.init.prototype=c.fn;return(window.Froogaloop=c)})();(function(c){c.whateverthis=c.whateverthis||{version:"6.2.0"};c.whateverthis.video={conf:{},getType:function(e){return"video/"+e.match(/(\w+)$/)[1].replace("ogv","ogg")}};var a=navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/);var d=0;function b(s,l){var j=c(this);var k=s;var p;var q;var n=false;function f(){switch(l.type){case"youtube":c.whateverthis.youtube(i);break;case"vimeo":c.whateverthis.vimeo(e);break;case"vidly":g(["http://vid.ly/"+l.videoId+"?content=video&format=mp4","http://vid.ly/"+l.videoId+"?content=video&format=webm","http://vid.ly/"+l.videoId+"?content=video&format=ogv"],l.poster);break;case"local":g(l.videoId,l.poster);break}}
function g(w,y){d++;var x="pe_local_player_"+(d);var t=c('<div id="'+(x)+'"/>').css({"background-color":"black",width:l.width,height:l.height});k.html(t[0]);var v={};for(var u=0;u<w.length;u++){v[u]={src:w[0],type:c.whateverthis.video.getType(w[0])}}
p=new projekktor("#"+x,{controls:true,volume:0.9,_width:l.width,_height:l.height,_autoplay:true,enableFullscreen:false,imageScaling:"fill",videoScaling:"aspectratio",_plugins:["Display","Controlbar"],poster:y,playerFlashMP4:"js/template/video/jarisplayer.swf",playerFlashMP3:"js/template/video/jarisplayer.swf",playlist:[v]});p.addListener(a?"ready":"buffer",h)}
function h(t){if(a){setTimeout(o,100);p.removeListener("ready",h)}else{if(t=="FULL"){p.removeListener("buffer",h);o()}}}
function i(t){var u=c("<div/>");k.append(u);p=new t(u[0],{height:l.height,width:l.width,videoId:l.videoId,playerVars:{theme:"dark",wmode:"opaque",autohide:0,enablejsapi:1,origin:location.href.match(/:\/\/(.[^\/]+)/)[1],loop:l.loop?1:0,hd:l.hd?1:0,autoplay:l.autoPlay?1:0,showinfo:0,iv_load_policy:3,modestbranding:1,showsearch:0,fs:0},events:{onStateChange:r,onReady:o}});q=setInterval(r,250);if(c.browser.msie&&c.browser.version<8){setTimeout(o,1000)}}
function o(){if(!n){j.trigger("video_ready.whateverthis");n=true}}
function e(t){p=new t(k[0],{height:l.height,width:l.width,videoId:l.videoId,playerVars:{autohide:0,origin:location.href.match(/:\/\/(.[^\/]+)/)[1],loop:l.loop?1:0,autoplay:l.autoPlay?1:0}});c(p).one("video_ready.whateverthis",o).one("video_ended.whateverthis",m)}
function m(){j.trigger("video_ended.whateverthis")}
function r(){if(!p){return}
if(typeof p.getPlayerState==="function"){switch(p.getPlayerState()){case YT.PlayerState.ENDED:j.trigger("video_ended.whateverthis");break;case YT.PlayerState.PLAYING:if((p.getDuration()-p.getCurrentTime())<0.4){j.trigger("video_ended.whateverthis")}
break}}}
c.extend(this,{bind:function(u,t){j.bind(u,t)},one:function(u,t){j.one(u,t)},destroy:function(){clearInterval(q);if(j){j.remove()}
j=undefined;if(p){c(p).unbind("video_ended.whateverthis");switch(l.type){case"vidly":case"local":p.removeListener(a?"ready":"buffer",h);if(p.selfDestruct){p.selfDestruct()}
break;default:if(p.destroy){p.destroy()}}}
p=undefined;k.data("peVideo",null);k=undefined}});f()}
c.fn.peVideo=function(e){var f=this.data("peVideo");if(f){return f}
e=c.extend(true,{},c.whateverthis.video.conf,e);this.each(function(){f=new b(c(this),e);c(this).data("peVideo",f)});return e.api?f:this}}(jQuery));(function(h){h.whateverthis=h.whateverthis||{version:"6.2.0"};h.whateverthis.mslideImg={conf:{zoom:"random",align:"random",pan:"random",duration:"15",paused:false}};var c={width:0,height:0,"margin-left":0,"margin-top":0};var k=["top","center","bottom"];var i=["left","center","right"];var j=false;var a=false;var f=false;var e=h.browser.msie&&h.browser.version>8;if(h.browser.msie){j=true;f=h.browser.msie}
if(!j&&!!document.createElement("canvas").getContext){a=true}
var b=navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/);if(b){j=true;a=false}
function d(s,n,m,r,q,p,o){if(a){if(n){try{n.clearRect(0,0,n.canvas.width,n.canvas.height)}catch(l){}
n.drawImage(s[0],p,o,m*q,r*q)}}else{if(j){if(s){s.transform(q,p,o,m,r)}}else{c.width=Math.round(m*q);c.height=Math.round(r*q);c["margin-left"]=p;c["margin-top"]=o;if(s){s.css(c)}}}}
function g(D,z){var E=this;var O=D;if(a){D.hide()}
var N,v,B,J,p,K,P,G,F,r,M,C,A,m=500,y=0,q,l;var n,H,I;var L=false;function o(){var t;if(y>0){P=G;F=r;p=K}else{t=h.whateverthis.Geom.getScaler(n=="out"?"fill":"none",I.w,I.h,B,J,N,v);P=t.offset.w;F=t.offset.h;p=t.ratio}
t=h.whateverthis.Geom.getScaler(n=="in"?"fill":"none",H.w,H.h,B,J,N,v);G=t.offset.w;r=t.offset.h;K=t.ratio;M=0;C=0;m=parseFloat(z.duration)*33;A=e?20:0;y++}
function u(){return k[parseInt(Math.random()*2+0.5,10)]+","+i[parseInt(Math.random()*2+0.5,10)]}
function x(){n=z.zoom=="random"?(Math.random()>0.5?"out":"in"):z.zoom;I=h.whateverthis.Geom.splitProps(z.align=="random"?u():z.align);H=h.whateverthis.Geom.splitProps(z.pan=="random"?u():z.pan)}
function s(){if(L){return}
var t=A/m;var R=p+(K-p)*t;var Q=P+(G-P)*t;var w=F+(r-F)*t;d(O,q,N,v,R,Q,w);A++;if((A+(e?20:0))>m){E.pause()}}
h.extend(E,{init:function(w){N=D.width()||D[0].width;v=D.height()||D[0].height;var t=D.parent();while(t&&!t.width()){t=t.parent()}
B=t?t.width():800;J=t?t.height():600;O.css("image-rendering","optimizeQuality").css("-ms-interpolation-mode","bicubic");if(f){O.parent().css("background-color","black")}
E.start()},start:function(){y=0;x();o();L=false;if(a){if(!q){l=h('<canvas width="'+B+'" height="'+J+'"></canvas>');q=l[0];O.hide().after(l);q=q.getContext("2d");q.fillStyle="rgb(255,255,255)"}}
if(z.paused){s();L=true}
h.whateverthis.ticker.register(s)},stop:function(){h.whateverthis.ticker.unregister(s)},reset:function(){L=true;y=0;x();o();L=false},getTarget:function(){if(l){return l}
return O},pause:function(){L=true},resume:function(){L=false},destroy:function(){E.paused=true;E.stop();if(a&&l){l.remove();l=undefined;q=undefined}
E=undefined;O.data("mSlideImg",null);O=undefined}});if((!D.width())&&(!D[0].width)){D.one("load",E.init)}else{E.init()}}
h.fn.mSlideImg=function(l){var m=this.data("mSlideImg");if(m){m.start();return m}
l=h.extend(true,{},h.whateverthis.mslideImg.conf,l);this.each(function(){m=new g(h(this),l);h(this).data("mSlideImg",m)});return l.api?m:this}})(jQuery);(function(c){c.whateverthis=c.whateverthis||{version:"6.2.0"};c.whateverthis.mslideSlider={conf:{externalFont:false}};var e=["id","class","data-src"];var d=c.browser.msie&&c.browser.version>7&&c.browser.version<9;function a(i,k,j,f){var h=(1<<24)|(parseInt(k,10)<<16)|(parseInt(j,10)<<8)|parseInt(f,10);return"#"+h.toString(16).substr(1)}
function b(ak,aU){var a2=this;var aI=ak.addClass("mSlide").removeClass("peNoJs");var aE=false;var o=true;var aK;if(aI.is("img")){var A=false;if(ak.parent().is("a")){A=true}
var bh='<img src="'+ak.attr("src")+'" data-src="'+(ak.attr("data-src")||"")+'"/>';var k=c('<div class="mSlide" data-autopause="none" data-controls="disabled" data-shadow="'+(ak.attr("data-shadow")||"disabled")+'" data-logo="disabled"><div class="ms_slides" ><div class="ms_active" data-delay="'+(ak.attr("data-delay")||"3")+'" data-duration="'+(ak.attr("data-duration")||"10")+'">'+bh+(ak.attr("alt")?"<h1>"+ak.attr("alt")+"</h1>":"")+'</div><div data-delay="'+(ak.attr("data-delay")||"3")+'" data-duration="'+(ak.attr("data-duration")||"15")+'">'+bh+"</div></div></div>");ak.replaceWith(k);aI=ak=k;ak.data("mSlideSlider",this);if(A){ak.css("cursor","pointer")}
aE=true}else{ak.css({"background-color":"transparent","-moz-border-radius":"0px","-webkit-border-radius":"0px","border-radius":"0px",padding:"0px"})}
aI.addClass("peActiveWidget").bind("enable.whateverthis ",al).bind("disable.whateverthis ",W);var aJ=c.whateverthis&&c.whateverthis.mslideImg&&(ak.attr("data-mode")!="swipe");var I=false;var a8=true;(function(){var h=ak.attr("data-autopause");if(h){I=h.match(/controls/)!==null;a8=h.match(/image/)!==null}})();var aB=c('<div class="ms_spinner"></div>');var D=c('<div class="ms_videooverlay"></div>');var aH="";if(ak.attr("data-captions")!="disabled"){aH=c('<div class="ms_caption"></div>')}
var bp=false;if(ak.attr("data-thumb")!="disabled"){bp=c('<div class="ms_Thumb"><div>');var n=bp.find("div");var af=bp.find("img");var aM=false}
var am=c('<div class="ms_timer"><div class="ms_overlay"></div></div>');var K;var an;var ba;var U;var O;var R=0;var aP=0;var j=0;var X=800;var ad=0;var v;var aQ;var s=-1;var ae;var H=[];var N=false;var ay=false;var ai=ak.width();var aq=ak.height();var V=!(c.browser.msie&&c.browser.version>=7&&c.browser.version<9);var y=false;var E;var F=0;var bf=-1;var aX=false;var f=false;var bi=false;var Y=false;var bj=0;var T=false;var q=false;var Z=false;var aR=(ak.attr("data-shadow")!="disabled");var ap=(ak.attr("data-controls")!="disabled");var B=(ak.attr("data-controls")=="inner");var l=(ak.attr("data-logo")=="enabled");var aL=navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/);var bk=ak.attr("data-caption-align")||false;if(bk){bk=c.whateverthis.Geom.splitProps(bk)}
var ar=ak.attr("data-fade")||0;ar=parseInt(ar*1000,10);if(l){ak.css("overflow","visible")}
if(aE&&aR){aq-=36}
if(!aE&&aR&&!ap){aq-=50}
if(!aE&&!aR&&B){aq+=50}
var bb=ak.find("div.ms_slides");if(bb.length===0){ak.wrapInner('<div class="ms_slides"></div>');bb=ak.find("div.ms_slides")}
var M=parseInt(bb.css("padding-left").replace(/px/,""),10)||0;var bm="";if(ap){bm+='<div class="ms_controls"><div class="ms_holder"><div class="ms_mainPanel"><div class="ms_iebg"><ul class="ms_slideBtns"><li><a href="#" class="ms_currentSlide">1</a></li></ul><div class="ms_arrows"><a class="ms_prev" href="#">p</a><a class="ms_next" href="#">n</a></div><span class="ms_iebgRight"></span></div></div><div class="ms_videoClose"><a href="#">close</a></div></div></div>'}
if(l){bm+='<div class="ms_logoLabel"><a href="'+(ak.attr("data-logo-link")||"#")+'" target="'+(ak.attr("data-logo-target")||"_self")+'" >logo</a></div>'}
if(aR){bm+='<div class="ms_shadow"><div class="ms_left"></div><div class="ms_middle"></div><div class="ms_right"></div></div>'}
var p=bm?c(bm):false;var bl=0;if(p){if(c.browser.msie){var bq="";if(c.browser.version<10){ak.wrap('<div class="ie'+Math.floor(c.browser.version)+'"></div>')}}
bb.after(p);if(B){var at=p.filter(".ms_controls");p.addClass("ms_controlsInner");bl=p.height();at.css("margin-top",-bl-M+10+(aL?1:0))}else{if(M!=15){p.filter(".ms_controls").css("margin-top",-(M+1))}}
if(aR){var a5=p.filter(".ms_shadow").css("z-index","0");bb.before(a5)}}
function ao(h){a4=c(h.currentTarget).hasClass("ms_next")?"next":"prev";Q(J(ad,a4));return false}
function ah(){x();return false}
if(ap){bb.before(am.hide());U=am.css("color").replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g,a);var a1=am.find(".ms_overlay");ba=(a1.width()||22);if(document.createElement("canvas").getContext){K=c('<canvas width="'+ba+'" height="'+ba+'"></canvas>');a1.after(K);K=K[0].getContext("2d")}else{an=c('<div class="ms_sprite"></div>');am.find(".ms_overlay").after(an)}
p.find(".ms_prev, .ms_next").click(ao).end();bl=p.height();var G=p.find("ul.ms_slideBtns").empty();var aj=p.find(".ms_videoClose");var bd=p.find(".ms_mainPanel");var aD=(c.browser.msie&&c.browser.version>=8&&c.browser.version<9)?"top":"margin-top";aj.find("a").click(ah).end();if(B){aj.fadeOut(0)}else{aj.css(aD,-bl)}}
var be=ai-2*M;var bn=aq-2*M-bl;if(aR){var r=ak.find(".ms_shadow");r.width(ai).find(".ms_middle").width(ai-r.find(".ms_left").width()-r.find(".ms_right").width())}
ak.append(bp);if(bp){var aC=ak.offset();aC.top=aC.top+bn+M-bp.height()+13;if(B){aC.top-=bl-10}
bp.data("top",aC.top);bp.offset(aC);bp.hide()}
aK=true;var S={width:be,height:bn,left:0,overflow:"hidden",visible:true,display:"block",opacity:0};var a4="next";var aG=bb.width(be).height(bn).find(" > div");var au=c('<div class="ms_frame"></div>').width(be).height(bn);function aT(h){Y=false;if(bj){clearTimeout(bj)}
if(h.currentTarget==ak[0]){switch(h.type){case"mouseenter":if(I){aX=true}
u();break;case"mouseleave":if(!y&&I){aX=false}
aW();break}}else{switch(h.type){case"mouseenter":if(aE){aX=false;az().resume();C(0)}else{if(a8){aX=true}}
f=true;break;case"mouseleave":if(aE){aX=true;az().pause();C(1)}else{if(!y&&a8){aX=false}}
f=false;break}}}
ak.find("div.ms_slides").append(aB).append(D).append(aH).bind("mouseenter",aT).bind("mouseleave",aT).end();var a3=0;var a7=0;if(aH){a3=parseInt(aH.css("margin-bottom").replace(/px/),10);a7=parseInt(aH.css("margin-left").replace(/px/),10)}
if(!aJ){bb.wrapInner('<div class="ms_slides"></div>');var aS=bb.find("> div");aS.width(be).height(bn).css({position:"absolute","border-width":0,"border-radius":0,"background-image":"none","background-color":au.css("background-color"),"z-index":1,top:M,left:M,padding:"0px",margin:"0px"}).show();if(aH){aH.width(be).height(bn)}}else{aG.css("margin-left",M);if(aH){aH.width(be).height(bn).css("margin-top",M).css("margin-left",M)}}
bb.prepend(au);var bc=au.css("background-color").replace(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/g,a);function ax(bv,bw,by){by=bv?by:"fade";X=ar||(by=="swipe"?700:1000);v=bw;function bu(){L();if(bv){bv.fadeOut(0);bv.find("img:eq(0)").css("margin-left",0)}}
if(bv){var bt=bv.find("img:eq(0)").data("mSlideImg");if(bt){bt.stop()}}
var bx;if(bw.find("a.video").length>0){D.empty().removeClass("ms_noBack").fadeIn(0);if(!aK){bx=c("<a>");bx.attr("href",bw.find("a.video").attr("href")).attr("target","_blank");bx.width(D.width()).height(D.height()).css("position","absolute").show();D.empty().append(bx)}else{if(bw.find("a.video").hasClass("autostart")){if(y){setTimeout(function(){D.triggerHandler("click")},500)}else{D.triggerHandler("click")}}}}else{if(bw.find("a").length>0){D.fadeIn(0);bx=c("<a>");c.each(bw.find("a").data("events"),function(bz,bA){c.each(bA,function(bB,bC){bx.bind(bz,bC.handler)})});bx.attr("href",bw.find("a").attr("href")).attr("target",bw.find("a").attr("target"));bx.width(D.width()).height(D.height()).css("position","absolute").show();D.empty().addClass("ms_noBack").append(bx)}else{D.empty().removeClass("ms_noBack").fadeOut(0)}}
switch(by){case"fade":if(bv){bv.css(S).css("opacity",1).fadeTo(X,0)}
bw.css(S).css("opacity",0).fadeTo(X,1,L);break;case"whitefade":bw.css(S).css("opacity",0);bv.css(S).css("opacity",1).fadeTo(X/2,0,"easeOutQuad",function(){bw.fadeTo(X/2,1,"easeInQuad",L)});break;case"flyBy":if(a4=="next"){if(bv){bv.css(S).css("opacity",1)}
bw.css(S).css("left",50);if(bv){bv.animate({left:-100,opacity:0},X,"easeOutCubic")}
bw.animate({left:0,opacity:1},X,"easeOutCubic",L)}else{if(bv){bv.css(S).css("opacity",1)}
bw.css(S).css("left",-50);if(bv){bv.animate({left:100,opacity:0},X,"easeOutCubic")}
bw.animate({left:0,opacity:1},X,"easeOutCubic",L)}
break;case"swipe":var bs;var h=100;bw.css(S);if(bv){bv.css(S).css("opacity",1)}
bs=(a4=="next")?bw.find("img:eq(0)"):bv?bv.find("img:eq(0)"):null;function t(bz,bB){var bA=Math.round(bz*be);var bC=Math.round(h*(1-bz));bw.css("left",-bC).width(bA+h);if(bs){bs.css("margin-left",-bA)}
if(bv){bv.css("opacity",0.5+0.5*(1-bz)).css("left",bA+h-bC).width(be-bA)}}
function w(bz,bB){var bA=Math.round(bz*be);var bC=Math.round(h*(1-bz));bw.css("left",be-bA+bC).width(bA);if(bs){bs.css("margin-left",bA-be)}
if(bv){bv.css("opacity",0.5+0.5*(1-bz)).css("left",bC-h).width(be-bA+h)}}
bw.animate({opacity:1},{duration:X,easing:"easeOutCubic",complete:bu,step:a4=="next"?w:t});break}}
function bg(h){N=false;Q(parseInt(h.target.id,10),true)}
function L(){N=false}
function aZ(t,h){var w=H[t].resource;if(!w){return true}
var bs=c(w).attr("src")?"":c(w).attr("data-src");if(bs){c(w).attr("src",bs)}
if(!w.complete){if(h){c(w).one("error",h).one("load",h)}}
return w.complete}
function aV(){if(!bi&&aQ&&!ay){am.show().offset(aQ.offset())}}
function aw(){ay=false;aV()}
function av(h){if(G){aQ=G.find("a").removeClass("ms_currentSlide").eq(h).addClass("ms_currentSlide");aO(0);aV()}}
function C(h){if(!T){return}
var t=H[h].caption;var bs;var w;if(t){bs=t.find(".ms_real");w=t.find(".ms_background");bs.css("margin-left",10).css("opacity",0).width(0).show();w.css("margin-left",100).css("opacity",0).width(0).show();bs.stop(true).delay(aE?500:500).animate({"margin-left":0,opacity:1,width:w.data("width")},1000,"easeOutCubic");w.stop(true).delay(aE?0:200).animate({"margin-left":0,opacity:0.5,width:w.data("width")},1000,"easeOutCubic")}
if(ae){bs=ae.find(".ms_real");w=ae.find(".ms_background");bs.stop(true).fadeTo(aE?0:500,0);w.stop(true).fadeTo(aE?0:500,0)}
ae=t}
function Q(h,bs){if(s!=h&&!N){N=true;if(!bs&&!aZ(h,bg)){aB.fadeIn(500);return}
aI.trigger("change.whateverthis",{slideIdx:h+1});var bu=aG.eq(h).find("a.video.autostart").length>0;x(bu);aZ(J(h,"next"));if(!aE){av(h);C(h)}
ad=s=h;if(!bu){aB.fadeOut(100)}
var bw=aG.filter(".ms_active").removeClass("ms_active");var bv=aG.eq(h).addClass("ms_active");var bt=bv.attr("data-transition")||"swipe";var t;if(aJ){t=bv.find("img");if(t){bt="fade"}}
var w=bv.attr("data-delay");if(w){R=parseFloat(w)*1000;j=c.now();aP=0}else{aP=-1;aO(360)}
bv.show().fadeOut(0);if(t){t=t.mSlideImg({zoom:bv.attr("data-zoom"),align:bv.attr("data-align"),pan:bv.attr("data-pan"),duration:bv.attr("data-duration"),paused:aE,api:true});if(aE&&f){t.resume()}}
ax(bw[0]?bw:null,bv,bt);if(Y){Y=false;bj=setTimeout(aW,1000)}}}
function aO(w){if(!G){return}
if(K){var t=ba-1;var h=ba/2;var bs=h+1;K.clearRect(0,0,ba,ba);if(w>0){K.beginPath();K.moveTo(h,bs);K.arc(h,bs,t/2,(270/360)*2*Math.PI,((w+270)/360)*2*Math.PI,false);K.lineTo(h,bs);K.closePath();K.fillStyle=U;K.fill()}}else{an.css("background-position-y","-"+Math.round(12-(12*(w/360)))*ba+"px")}}
function ac(){if(aP<0){return}
var t=c.now();var h=c.now()-j;j=t;if(aX){return}
aP+=h;if(aP>R){aP=R}
aO(360*aP/R);if(aP>=R){aP=-1;Q(J(ad,"next"))}}
function J(w,h){var t=w;t+=(h=="prev"?-1:1);t%=H.length;if(t<0){t+=H.length}
return t}
function m(t){var h=parseInt(t.currentTarget.id,10);a4=h>=ad?"next":"prev";Q(h);return false}
function aY(){var bx;var t;if(q){clearTimeout(q)}
for(var bs=0;bs<H.length;bs++){bx=H[bs].caption;if(bx){bx.width(be);t=false;var bv=bx.find(".ms_real");var bt=bx.find(".ms_background");if(bx==ae){bv.stop().css("margin-left",0).css("opacity",1);bt.stop().css("margin-left",0).css("opacity",0.5);t=true}
var w;var h;if(aE){w=be-2*a3}else{bv.width("auto");bt.width("auto");w=bv.outerWidth()}
h=bv.outerHeight();bt.width(w).height(h).data("width",w);bx.width(w).height(h);if(bk){var bw=a3;if(bk.h=="top"){bw=-bw}else{if(bk.h=="center"){bw=0}}
var bu=c.whateverthis.Geom.getScaler("none",bk.w,bk.h,be,bn,bt.width(),bt.height()+(B?(bl-10):0));bx.css("margin-left",bu.offset.w);bx.css("margin-top",bu.offset.h-bw)}else{bx.css("margin-left",(be-bt.width())/2);bx.css("margin-top",(bn-bt.height()-a3-(B?(bl-10):0)))}
if(!t){bv.fadeOut(0);bt.fadeOut(0)}}}
T=true}
function P(h,bs){var bu=c(bs).attr("id",h);var w=bu.find("> h1,> h2,> h3,> h4,> p").detach();if(aH&&w.length>0){w.wrap('<div class="ms_real" />');w=w.parent();w.wrap('<div class="ms_holder" />');w=w.parent();w.append('<div class="ms_background" />');aH.append(w);w.find(".ms_real").fadeOut(0);w.find(".ms_background").fadeOut(0)}else{w=false}
var bt=bu.find("img").attr({id:h})[0];var t=bu.attr("data-thumb");H[h]={caption:w,resource:bt,thumb:t};if(G){G.append('<li><a href="#" '+(h===0?'class="ms_currentSlide"':"")+' id="'+h+'">1</a></li>')}}
function g(){aB.empty();y=false;if(!f){aX=false}}
function br(h){if(!aj){return}
if(B){if(c.browser.msie){aj[h?"show":"hide"]()}else{aj.stop().fadeTo(300,h?1:0,"easeOutCubic")}
aF(!h)}else{var t={};t[aD]=(h?0:-bl);aj.stop().animate(t,300,"easeOutCubic")}}
function aF(h,t){if(!bd){return}
bi=!h;if(!h){a9(false)}
t=t===null?300:t;bd.stop();if(!B&&y){br(h)}
am.hide();ay=true;if(B){bi=false;if(!(c.browser.msie&&c.browser.version<8)){p.css("z-index",h?209:0);if(h&&aR){bb.before(p.filter(".ms_shadow").css("z-index","0"))}}
if(h){p.find(".ms_holder").show();aw()}else{p.find(".ms_holder").hide()}}else{bd.animate({"margin-top":(h?0:-bl)},{duration:t,easing:"easeOutCubic",complete:aw})}}
function i(){br(true)}
function ab(){br(false)}
function u(h){aF(true,h)}
function aW(h){aF(false,h)}
function x(t){if(y){if(E){E.destroy();E=undefined}
if(t){aB.empty();y=false}else{aB.css("background-color","none");aB.fadeOut(500,g);D.fadeIn(0);ab()}
if(!(I||a8)){aX=false}
var h=aG.filter(".ms_active").find("img:eq(0)").data("mSlideImg");if(h){h.resume()}}
return false}
function bo(t){var h=c(t.currentTarget);if(h.hasClass("video")){z(h[0].href,h.hasClass("hd"),h.hasClass("autoplay"),h.hasClass("loop"),h.hasClass("skiptonext"));return false}
return true}
function z(t,bv,w,h,bu){if(y){return false}
var bw,bt;if((bw=t.match(/http:\/\/www.youtube.com\/watch\?v=([\w|\-]+)/))){bt="youtube"}else{if((bw=t.match(/http:\/\/vimeo.com\/(\w+)/))){bt="vimeo"}}
if(bt){x();y=true;aX=true;var bs=aG.filter(".ms_active").find("img:eq(0)").data("mSlideImg");if(bs){bs.pause()}
aB.css("background-color",bc);aB.fadeIn(500);i();D.fadeOut(0);E=aB.peVideo({api:true,width:be,height:bn,type:bt,videoId:bw[1],hd:bv,autoPlay:w,loop:h});if(bu){c(E).bind("video_ended.whateverthis",ag)}}}
function ag(){c(E).bind("video_ended.whateverthis",ag);Q(J(ad,"next"))}
function a6(){var h=v.find("a.video");if(h.length>0){h.trigger("click")}}
function aN(){aM=false;bp.hide()}
function a9(h,t){if(!Z||!bp){return}
if(h){bp.stop(true);if(V){bp.fadeTo(500,1,"easeOutQuad")}else{bp.show()}}else{if(parseInt(t,10)>0){bp.delay(t)}else{bp.stop(true)}
if(V){bp.fadeTo(300,0,"easeOutQuad",aN)}else{bp.queue(aN)}}}
function aA(h){if(h.type=="error"){aN();return}
n.html(af);if(ak.attr("data-thumb")!="fixed"){af.mSlideImg({zoom:"in",align:"top,center",pan:"center,center",duration:"10"})}
n.stop(true).fadeTo(0,0).fadeTo(300,1,"easeInQuad")}
function aa(h){if(aQ){aQ.triggerHandler(h.type)}}
function a0(bt){var h=bt.currentTarget.id;switch(bt.type){case"mouseenter":var w=H[h].thumb;if(!w){return}
Z=true;a9(true);var t=c(bt.currentTarget).width();var bs=c(bt.currentTarget).offset();bs.top=ak.offset().top+bn+M-bp.height()+13;if(B){bs.top-=bl-10}
bs.left=bs.left-(bp.width()-t)/2;if(aM!=w){if(af.data("mSlideImg")){af.data("mSlideImg").destroy()}
af=c("<img>");n.html("");af.one("error",aA).one("load",aA);af.attr("src",w)}
bp.offset(bs);aM=w;break;case"mouseleave":a9(false,200);break}}
function az(){var h;if(v){h=v.find("img:eq(0)");if(h){h=h.data("mSlideImg")}}
return h||false}
function al(){if(!o){o=true;var h=az();h&&h.resume();aX=false}}
function W(){if(o){o=false;var h=az();h&&h.pause();aX=true}}
c.extend(a2,{init:function(w){if(c.browser.msie){aG.find("img[src*='blank.png']").replaceWith(function(){var bu=c("<img>");var bt=c(this);var bv=bt.width();if(bv>0){bu.attr("width",bv)}
bv=bt.height();if(bv>0){bu.attr("height",bv)}
c.each(e,function(bw,bx){bv=bt.attr(bx);if(bv){bu.attr(bx,bv)}});return bu[0]}).end()}
if(c.browser.msie&&c.browser.version>8){aG.find("img").each(function(){var bt=c(this);if(!bt.attr("data-src")){bt.attr("data-src",bt.attr("src"));bt.removeAttr("src")}}).end()}
aB.width(be).height(bn);D.width(be).height(bn);aG.width(be).height(bn).show().fadeOut(0).removeClass("ms_active").find("img[src*='blank.png']").removeAttr("src").end().find("a").click(bo).end().each(P).end();if(ap&&bd){bd.css("margin-left",(ai-bd.width())/2);if(B){if(c.browser.msie&&c.browser.version<8){p.filter(".ms_shadow").css("z-index","-1")}
aj.css("z-index",204);aj.css("position","absolute");aj.css("margin-left",0);aj.css("margin-top",-aq+aj.height()+M);aj.css("margin-left",M);aj.detach();aI.append(aj);aj=aI.find(".ms_videoClose");aj.addClass("ms_videoCloseInner")}}
if(aU.externalFont){q=setTimeout(aY,10000)}else{aY()}
if(G){var h=G.find("a");h.click(m);if(bp){h.bind("mouseenter",a0).bind("mouseleave",a0);am.bind("mouseenter",aa).bind("mouseleave",aa)}}
if(aK){D.hide().click(a6)}
var t=true;var bs=ak.attr("data-controls");if(aL){bs=(bs=="over"||bs=="hideOnFirst")?"always":bs}
switch(bs){case"over":aW(0);break;case"hideOnFirst":Y=true;break;case"disabled":aW(0);t=false;break;default:t=false;break}
if(t){ak.bind("mouseenter",aT).bind("mouseleave",aT)}
aX=true;O=setInterval(ac,50);a2.start()},start:function(){aX=aE;Q(0)},fontsLoaded:function(){aY();C(ad)},pauseTimer:function(){aX=true},resumeTimer:function(){aX=false},pause:function(){var h=az();h&&h.pause();a2.pauseTimer()},resume:function(){var h=az();h&&h.resume();a2.resumeTimer()},prev:function(){a2.resumeTimer();Q(J(ad,"prev"))},next:function(){a2.resumeTimer();Q(J(ad,"next"))},show:function(h){a2.resumeTimer();h=parseInt(h,10)-1;if(h>=0&&h<H.length){Q(h)}},length:function(){return(H&&H.length)||0},bind:function(){return aI.bind.apply(aI,arguments)},destroy:function(){var h;x();aI.unbind("enable.whateverthis ",al).unbind("disable.whateverthis ",W);aG.each(function(){h=c(this).find("img:eq(0)");if((h=h.data("mSlideImg"))){h.destroy()}});h=undefined;clearInterval(O);a2=undefined;if(E){E.destroy();E=undefined}
aI.data("mSlideSlider",null);aI.remove();aI=undefined}});if((!ak.width())&&(!ak[0].width)){ak.one("load",a2.init)}else{a2.init()}}
c.fn.mSlideSlider=function(f){var g=this.data("mSlideSlider");if(g){g.start();return g}
f=c.extend(true,{},c.whateverthis.mslideSlider.conf,f);this.each(function(){g=new b(c(this),f);c(this).data("mSlideSlider",g)});return f.api?g:this}})(jQuery);