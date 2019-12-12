/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2019 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var FireShotAddon={FSSelector:function(r){function u(a){return a&&("scroll"==a.getPropertyValue("overflow")||"auto"==a.getPropertyValue("overflow")||"scroll"==a.getPropertyValue("overflow-y")||"auto"==a.getPropertyValue("overflow-y")||"scroll"==a.getPropertyValue("overflow-x")||"auto"==a.getPropertyValue("overflow-x"))&&"none"!=a.getPropertyValue("display")&&"hidden"!=a.getPropertyValue("visibility")}function k(a,c){a=a.getBoundingClientRect();return{top:Math.round(a.top+(x.pageYOffset||g.scrollTop)-
0),left:Math.round(a.left+(x.pageXOffset||g.scrollLeft)-0),width:a.width,height:a.height}}function y(a){if(H){var d=0,b;z.forEach(function(v){var N="divFireShotHightlightElement-"+d++;a?(b=c.createElement("div"),b.id=N,b.style.cssText="position: absolute; left: "+(v.rect.left-3)+"px; top: "+(v.rect.top-3)+"px; width: "+v.rect.width+"px; height: "+v.rect.height+"px; z-index: 2147483640; border:#fd0 solid 3px;",v=c.createElement("div"),v.style.cssText="font-family: Tahoma; font-size:10px; line-height:1.3em; color: #fff; margin:5px; width:auto; height:auto; padding: 2px; background: #000; opacity: 0.9; position:absolute; border:#333 solid 1px;",
v.innerHTML="<img src='data:image/gif;base64,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' width='16' height='16'/>&nbsp;Hold the CTRL key and click this area to capture the scrolling content",
b.appendChild(v),c.body.appendChild(b)):(b=c.getElementById(N))&&c.body.removeChild(b)})}}function S(a,c){for(var b=0;b<z.length;++b){var d=z[b];if(a>=d.rect.left&&a<d.rect.left+d.rect.width&&c>=d.rect.top&&c<=d.rect.top+d.rect.height)return d.e}}function I(a){E||!a.type||J||A===a.pageX&&B===a.pageY||(A=a.pageX,B=a.pageY,K&&clearTimeout(K),K=setTimeout(function(){if(!J||a.touchEvent){var d=[m,h,e[0],e[1],e[2],e[3]];d.forEach(function(a){a.style.setProperty("display","none","important")});f=S(a.pageX,
a.pageY)||c.elementFromPoint(a.pageX-g.scrollLeft,a.pageY-g.scrollTop);d.forEach(function(a){a.style.setProperty("display","block","important")});f&&(d=k(f,c),t=d.left,n=d.top,q=d.left+d.width,p=d.top+d.height,D())}},15))}function L(){G&&(clearTimeout(G),G=void 0)}function F(a){function d(a){var b={dx:g.scrollLeft,dy:g.scrollTop};L();100>a.clientX&&A>a.pageX&&(g.scrollLeft-=(100-a.clientX)/2);100>a.clientY&&B>a.pageY&&(g.scrollTop-=(100-a.clientY)/2);var c=x.innerWidth-a.clientX;100>c&&A<a.pageX&&
(g.scrollLeft+=(100-c)/2);c=x.innerHeight-a.clientY;100>c&&B<a.pageY&&(g.scrollTop+=(100-c)/2);A=a.pageX;B=a.pageY;b.dx=g.scrollLeft-b.dx;b.dy=g.scrollTop-b.dy;return b}function b(a){if(!E&&a.type){"TouchEvent"===a.constructor.name&&1===a.touches.length&&(a=a.touches[0],a.pageX===a.clientX&&0<g.scrollLeft&&(a={pageX:a.pageX,pageY:a.pageY,clientX:a.pageX-g.scrollLeft,clientY:a.pageY-g.scrollTop}));if(f)if(3<Math.abs(A-a.pageX)&&3<Math.abs(B-a.pageY))f=void 0;else return;var c=d(a);q=c.dx+a.pageX;p=
c.dy+a.pageY;D();G=setTimeout(function(){w||b({type:"autoscroll",clientX:a.clientX,clientY:a.clientY,pageX:a.pageX+c.dx,pageY:a.pageY+c.dy})},25)}}function e(a){L();h.removeEventListener("mousemove",b,!1);h.removeEventListener("touchmove",b,!1);c.removeEventListener("mouseup",e,!1);c.removeEventListener("touchend",e,!1);c.removeEventListener("touchcancel",e,!1);!f||H&&w||(f=void 0,t=q=n=p=0);D();O()}"TouchEvent"===a.constructor.name&&1===a.touches.length&&(a.pageX=a.touches[0].pageX,a.pageY=a.touches[0].pageY,
a.touchEvent=!0,a.button=0,w&&I(a));0===a.button&&(J=!0,h.removeEventListener("mousedown",F,!0),h.removeEventListener("touchstart",F,!0),h.removeEventListener("mousemove",I,!0),t=q=a.pageX,n=p=a.pageY,A=a.pageX,B=a.pageY,y(!1),h.addEventListener("mousemove",b,!1),h.addEventListener("touchmove",b,{passive:!0}),c.addEventListener("mouseup",e,!1),c.addEventListener("touchend",e,{passive:!0}),c.addEventListener("touchcancel",e,{passive:!0}));"TouchEvent"!==a.constructor.name&&a.preventDefault();return!0}
function P(a){27==a.keyCode&&(p=q=n=t=0,f=void 0,L(),O());!w&&a.ctrlKey&&(w=!0,D())}function Q(a){w=a.ctrlKey;D()}function R(){var a=Math.min(t,q),c=Math.min(n,p),b=Math.abs(q-t),e=Math.abs(p-n);!f&&w&&(e=b,p<n&&(c=n-e));return{left:a,top:c,width:b,height:e}}function D(){if(!E){var a=Math.max(c.documentElement.scrollWidth,c.body.scrollWidth),d=Math.max(c.documentElement.scrollHeight,c.body.scrollHeight),b=R();!f||H&&w||(b.left=b.top=b.width=b.height=0);m.style.left=b.left+"px";m.style.top=b.top+"px";
m.style.width=b.width+"px";m.style.height=b.height+"px";h.style.width=a+"px";h.style.height=d+"px";e[0].style.left="0px";e[0].style.top="0px";e[0].style.width=a+"px";e[0].style.height=m.style.top;e[1].style.left="0px";e[1].style.top=b.top+b.height+"px";e[1].style.width=a+"px";e[1].style.height=d-(b.top+b.height)+"px";e[2].style.left="0px";e[2].style.top=b.top+"px";e[2].style.width=b.left+"px";e[2].style.height=b.height+"px";e[3].style.left=b.left+b.width+"px";e[3].style.top=b.top+"px";e[3].style.width=
a-(b.left+b.width)+"px";e[3].style.height=b.height+"px";for(a=0;4>a;a++)C[a].style.left="0px",C[a].style.top="0px",C[a].style.right="0px",C[a].style.bottom="0px";l.style.top=p<=n?"10px":"";l.style.bottom=p>n?"10px":"";l.style.left=q<=t?"10px":"";l.style.right=q>t?"10px":"";if(a=f)a:{for(a=0;a<z.length;++a)if(z[a].e===f){a=!0;break a}a=!1}if(a){if(l.innerHTML="<img src='data:image/gif;base64,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' width='16' height='16'/> Scroll and capture: "+
(Math.round(f.scrollWidth)+" x "+Math.round(f.scrollHeight)),l.scrollWidth+11>b.width||l.scrollHeight+11>b.height)l.innerHTML="<img src='data:image/gif;base64,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' width='16' height='16'/>"}else l.innerHTML=
Math.round(b.width)+" x "+Math.round(b.height);l.style.visibility=l.scrollWidth+11<b.width&&l.scrollHeight+11<b.height?"visible":"hidden"}}function O(){if(!E){E=!0;h.removeEventListener("mousedown",F,!0);c.removeEventListener("keydown",P,!1);c.removeEventListener("keyup",Q,!1);c.body.removeChild(m);c.body.removeChild(h);y(!1);for(var a=0;4>a;a++)c.body.removeChild(e[a]);f&&(a=k(f,c),t=a.left,n=a.top,q=a.left+a.width,p=a.top+a.height);a=R();M&&M({selectedElement:f,isScrollable:f?u(c.defaultView.getComputedStyle(f,
"")):!1,left:a.left,top:a.top,right:a.left+a.width,bottom:a.top+a.height})}}var m,h,l,M,f,C=[],e=[],z=[],t=0,q=0,n=0,p=0,A=0,B=0,K=0,w=!1,E=!1,J=!1,H=r.extendedMode||!1,c=r.doc,T=r.browser||"chrome",x,g=c.scrollingElement||c.body,G;return{makeSelection:function(a){M=a;"undefined"!=typeof window&&(x=window);"firefox"===T&&(x=content.window);c.activeElement&&"IFRAME"===c.activeElement.tagName&&c.activeElement.blur();a=c.createNodeIterator(c.body,x.NodeFilter.SHOW_ELEMENT,null,!1);var d;for(z=[];null!==
(d=a.nextNode());)if("BODY"!==d.tagName&&0<d.scrollWidth&&0<d.scrollHeight&&(d.scrollWidth>d.clientWidth||d.scrollHeight>d.clientHeight)){var b=c.defaultView.getComputedStyle(d,"");if(b=u(b)){a:{for(b=d;b&&b!=c;){var g=c.defaultView.getComputedStyle(b,"");if("hidden"===g.visibility||"none"===g.display||"0"===g.opacity){b=!0;break a}b=b.parentNode}b=!1}b=!b}b&&z.push({e:d,rect:k(d,c)})}y(!0);m=c.createElement("div");m.style.cssText="position: absolute; left: 0px; top: 0px; width: 0px; height: 0px; z-index: 2147483640; cursor: crosshair;";
l=c.createElement("div");l.style.cssText="font-family: Tahoma; font-size:14px; color: #fff; bottom: 10px; right: 10px; width:auto; height:auto; padding: 3px; background: #000; opacity: 0.9; position:absolute; border:#333 solid 1px; cursor: crosshair;";h=c.createElement("div");h.style.cssText="position: absolute; left: 0px; top: 0px; opacity: 0; cursor: crosshair; z-index: 2147483641;";c.body.appendChild(h);for(a=0;4>a;a++){C.push(c.createElement("div"));switch(a){case 0:var f="background: url('data:image/gif;base64,R0lGODlhAQAGAKEAAP///wAAADY2Nv///yH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQACgD/ACwAAAAAAQAGAAACAxQuUgAh+QQBCgADACwAAAAAAQAGAAACA5SAUgAh+QQBCgADACwAAAAAAQAGAAACA5SBBQAh+QQBCgADACwAAAAAAQAGAAACA4QOUAAh+QQBCgADACwAAAAAAQAGAAACAwSEUAAh+QQBCgADACwAAAAAAQAGAAACA4SFBQA7') repeat-y left top;";
break;case 1:f="background: url('data:image/gif;base64,R0lGODlhBgABAKEAAP///wAAADY2Nv///yH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQACgD/ACwAAAAABgABAAACAxQuUgAh+QQBCgADACwAAAAABgABAAACA5SAUgAh+QQBCgADACwAAAAABgABAAACA5SBBQAh+QQBCgADACwAAAAABgABAAACA4QOUAAh+QQBCgADACwAAAAABgABAAACAwSEUAAh+QQBCgADACwAAAAABgABAAACA4SFBQA7') repeat-x left top;";break;case 2:f="background: url('data:image/gif;base64,R0lGODlhAQAGAKEAAP///wAAADY2Nv///yH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQACgD/ACwAAAAAAQAGAAACAxQuUgAh+QQBCgADACwAAAAAAQAGAAACA5SAUgAh+QQBCgADACwAAAAAAQAGAAACA5SBBQAh+QQBCgADACwAAAAAAQAGAAACA4QOUAAh+QQBCgADACwAAAAAAQAGAAACAwSEUAAh+QQBCgADACwAAAAAAQAGAAACA4SFBQA7') repeat-y right top;";
break;case 3:f="background: url('data:image/gif;base64,R0lGODlhBgABAKEAAP///wAAADY2Nv///yH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQACgD/ACwAAAAABgABAAACAxQuUgAh+QQBCgADACwAAAAABgABAAACA5SAUgAh+QQBCgADACwAAAAABgABAAACA5SBBQAh+QQBCgADACwAAAAABgABAAACA4QOUAAh+QQBCgADACwAAAAABgABAAACAwSEUAAh+QQBCgADACwAAAAABgABAAACA4SFBQA7') repeat-x left bottom;"}C[a].style.cssText=f+" opacity: 0.5; position: absolute; cursor: crosshair;";m.appendChild(C[a]);e.push(c.createElement("div"));
e[a].style.cssText="position: absolute; background: #000; opacity: 0.3; z-index: 2147483640; cursor: crosshair;";c.body.appendChild(e[a])}m.appendChild(l);c.body.appendChild(m);D();h.addEventListener("mousedown",F,!0);h.addEventListener("mousemove",I,!0);h.addEventListener("touchstart",F,{passive:!0});c.addEventListener("keydown",P,!1);c.addEventListener("keyup",Q,!1)}}},FSSelectionHint:function(r){return{show:function(){function u(){y+=.1;k.style.opacity=y;1>y&&setTimeout(u,30)}var k=r.createElement("div");
k.id="FireShot.topMessageHolder";k.style.cssText="display:block; opacity:0; border:1px solid #666; background:#fff; z-index:2147483647; font-family: Tahoma; text-align: left; font-size:20px; color: #000; margin:0; padding:10px; width:100%;  left:0px; right:0px; top:0px; position:fixed";k.innerHTML="<strong>HINT:</strong> Hold the CTRL key to capture specific HTML element or scrolling area. &#160;";k.innerHTML+="<a target='_blank' style='color:#08c' href='https://getfireshot.com/demos/selection.php'>View demo</a>";
k.innerHTML+=" | ";k.innerHTML+="<a id='fsSelectionLnkClose' style='color:#08c' href='#'>Close</a>";r.body.appendChild(k);document.getElementById("fsSelectionLnkClose").addEventListener("click",function(){document.body.removeChild(document.getElementById("FireShot.topMessageHolder"));return!1},!1);var y=0;setTimeout(u,300)},hide:function(){var u=r.getElementById("FireShot.topMessageHolder");u&&r.body.removeChild(u)},isShown:function(){return null!==r.getElementById("FireShot.topMessageHolder")}}}};
