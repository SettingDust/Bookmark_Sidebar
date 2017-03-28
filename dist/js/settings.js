/*! (c) Philipp König under GPL-3.0 */
"use strict";function a(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a,c){function d(a){return"undefined"!=typeof a}function e(a){return"string"==typeof a}function f(a){return"object"==("undefined"==typeof a?"undefined":b(a))}function g(a){return Object.keys(a).length}function h(a,b,c){return b>a?b:a>c?c:a}function i(a,b){return parseInt(a,b||10)}function j(a){return Math.round(a)}function k(a){var b,c,d,e,f,g,h,i,k=+a[0],l=+a[1],m=+a[2];switch(e=Math.floor(6*k),f=6*k-e,g=m*(1-l),h=m*(1-f*l),i=m*(1-(1-f)*l),e=e||0,h=h||0,i=i||0,e%6){case 0:b=m,c=i,d=g;break;case 1:b=h,c=m,d=g;break;case 2:b=g,c=m,d=i;break;case 3:b=g,c=h,d=m;break;case 4:b=i,c=g,d=m;break;case 5:b=m,c=g,d=h}return[j(255*b),j(255*c),j(255*d)]}function l(a){return n(k(a))}function m(a){var b,c=+a[0],d=+a[1],e=+a[2],f=Math.max(c,d,e),g=Math.min(c,d,e),h=f-g,i=0===f?0:h/f,j=f/255;switch(f){case g:b=0;break;case c:b=d-e+h*(e>d?6:0),b/=6*h;break;case d:b=e-c+2*h,b/=6*h;break;case e:b=c-d+4*h,b/=6*h}return[b,i,j]}function n(a){var b=+a[2]|+a[1]<<8|+a[0]<<16;return b="000000"+b.toString(16),b.slice(-6)}function o(a){return m(p(a))}function p(a){return 3===a.length&&(a=a.replace(/./g,"$&$&")),[i(a[0]+a[1],16),i(a[2]+a[3],16),i(a[4]+a[5],16)]}function q(a){return[+a[0]/360,+a[1]/100,+a[2]/100]}function r(a){return[j(360*+a[0]),j(100*+a[1]),j(100*+a[2])]}function s(a){return[+a[0]/255,+a[1]/255,+a[2]/255]}function t(a){if(f(a))return a;var b=/\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(a),c=/\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(a),d="#"===a[0]&&a.match(/^#([\da-f]{3}|[\da-f]{6})$/i);return d?o(a.slice(1)):c?q([+c[1],+c[2],+c[3]]):b?m([+b[1],+b[2],+b[3]]):[0,1,1]}var u="__instance__",v="firstChild",w="scrollLeft",x="scrollTop",y="offsetLeft",z="offsetTop",A=setTimeout;!function(a){a.version="1.3.3",a[u]={},a.each=function(b,c){return A(function(){var c,d=a[u];for(c in d)b(d[c],c,d)},0===c?0:c||1),a},a.parse=t,a._HSV2RGB=k,a._HSV2HEX=l,a._RGB2HSV=m,a._HEX2HSV=o,a._HEX2RGB=function(a){return s(p(a))},a.HSV2RGB=function(a){return k(q(a))},a.HSV2HEX=function(a){return l(q(a))},a.RGB2HSV=function(a){return r(m(a))},a.RGB2HEX=n,a.HEX2HSV=function(a){return r(o(a))},a.HEX2RGB=p}(a.CP=function(b,i){function j(a,b,c){a=a.split(/\s+/);for(var d=0,e=a.length;e>d;++d)b.addEventListener(a[d],c,!1)}function m(a,b,c){a=a.split(/\s+/);for(var d=0,e=a.length;e>d;++d)b.removeEventListener(a[d],c)}function n(a,b){var c=b.touches?b.touches[0].pageX:b.pageX,d=b.touches?b.touches[0].pageY:b.pageY,e=o(a);return{x:c-e.l,y:d-e.t}}function o(b){if(b===a)var c=a.pageXOffset||J[w],d=a.pageYOffset||J[x];else for(var c=b[y],d=b[z];b=b.offsetParent;)c+=b[y],d+=b[z];return{l:c,t:d}}function p(a,b){for(;(a=a.parentElement)&&a!==b;);return a}function q(a){a&&a.preventDefault()}function r(b){return b===a?{w:a.innerWidth,h:a.innerHeight}:{w:b.offsetWidth,h:b.offsetHeight}}function s(a){return L||!!d(a)&&a}function t(a){L=a}function B(a,b,c){return d(a)?d(b)?(d(M[a])||(M[a]={}),d(c)||(c=g(M[a])),M[a][c]=b,K):M[a]:M}function C(a,b){return d(a)?d(b)?(delete M[a][b],K):(M[a]={},K):(M={},K)}function D(a,b,c){if(!d(M[a]))return K;if(d(c))d(M[a][c])&&M[a][c].apply(K,b);else for(var e in M[a])M[a][e].apply(K,b);return K}function E(a,b){a&&"h"!==a||D("change:h",b),a&&"sv"!==a||D("change:sv",b),D("change",b)}function F(){return N.parentNode}function G(d,e){function f(a){var c=a.target,d=c===b||p(c,b)===b;d?G():K.exit(),D(d?"enter":"exit",[K])}function g(a){var b=(k(U),k([U[0],1,1]));W.style.backgroundColor="rgb("+b.join(",")+")",t(U),q(a)}function o(a){var b=h(n(V,a).y,0,B);U[0]=(B-b)/B,X.style.top=b-L/2+"px",g(a)}function u(a){var b=n(W,a),c=h(b.x,0,C),d=h(b.y,0,J);U[1]=1-(C-c)/C,U[2]=(J-d)/J,Y.style.right=C-c-M/2+"px",Y.style.top=d-T/2+"px",g(a)}function v(a){_&&(o(a),fa=l(U),Z||(D("drag:h",[fa,K]),D("drag",[fa,K]),E("h",[fa,K]))),aa&&(u(a),fa=l(U),$||(D("drag:sv",[fa,K]),D("drag",[fa,K]),E("sv",[fa,K]))),Z=0,$=0}function w(a){var c=a.target,d=_?"h":"sv",e=[l(U),K],f=c===b||p(c,b)===b,g=c===N||p(c,N)===N;f||g?g&&(D("stop:"+d,e),D("stop",e),E(d,e)):F()&&i!==!1&&(K.exit(),D("exit",[K]),E(0,e)),_=0,aa=0}function x(a){Z=1,_=1,v(a),q(a),D("start:h",[fa,K]),D("start",[fa,K]),E("h",[fa,K])}function y(a){$=1,aa=1,v(a),q(a),D("start:sv",[fa,K]),D("start",[fa,K]),E("sv",[fa,K])}d||((e||I).appendChild(N),K.visible=!0),da=r(N).w,ea=r(N).h;var z=r(W),A=r(Y),B=r(V).h,C=z.w,J=z.h,L=r(X).h,M=A.w,T=A.h;d?(N.style.left=N.style.top="-9999px",i!==!1&&j(i,b,f),K.create=function(){return G(1),D("create",[K]),K},K.destroy=function(){return i!==!1&&m(i,b,f),K.exit(),t(!1),D("destroy",[K]),K}):H(),S=function(){U=s(U),g(),X.style.top=B-L/2-B*+U[0]+"px",Y.style.right=C-M/2-C*+U[1]+"px",Y.style.top=J-T/2-J*+U[2]+"px"},K.exit=function(b){return F()&&(F().removeChild(N),K.visible=!1),m(O,V,x),m(O,W,y),m(P,c,v),m(Q,c,w),m(R,a,H),K},S(),d||(j(O,V,x),j(O,W,y),j(P,c,v),j(Q,c,w),j(R,a,H))}function H(){return K.fit()}var I=c.body,J=c.documentElement,K=this,L=!1,M={},N=c.createElement("div"),O="touchstart mousedown",P="touchmove mousemove",Q="touchend mouseup",R="orientationchange resize";if(!(K instanceof CP))return new CP(b,i);CP[u][b.id||b.name||g(CP[u])]=K,d(i)||(i=O),t(CP.parse(b.getAttribute("data-color")||b.value||[0,1,1])),N.className="color-picker",N.innerHTML='<div class="color-picker-control"><span class="color-picker-h"><i></i></span><span class="color-picker-sv"><i></i></span></div>';var S,T=N[v].children,U=s([0,1,1]),V=T[0],W=T[1],X=V[v],Y=W[v],Z=0,$=0,_=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=l(U);return G(1),A(function(){var a=[l(U),K];D("create",a),E(0,a)},0),K.fit=function(c){var e=r(a),g=r(J),h=g.h>e.h,i=o(a),j=(o(J),h?g.w:e.w+i.l),k=h?e.h+i.t:Math.max(g.h,e.h),l=o(b);return ba=l.l,ca=l.t+r(b).h,f(c)?(d(c[0])&&(ba=c[0]),d(c[1])&&(ca=c[1])):(ba+da>j&&(ba=j-da),ca+ea>k&&(ca=k-ea)),N.style.left=ba+"px",N.style.top=ca+"px",D("fit",[K]),K},K.set=function(a){return d(a)?(e(a)&&(a=CP.parse(a)),t(a),S(),K):s()},K.target=b,K.picker=N,K.visible=!1,K.on=B,K.off=C,K.trigger=D,K.hooks=M,K.enter=function(a){return G(0,a)},K})}(window,document),function(b){window.ModelHelper=function(){var a=this,b={u:{openStates:{},scrollPos:{},entriesLocked:!0},b:{pxTolerance:{windowed:20,maximized:1},scrollSensitivity:{mouse:1,trackpad:1},openAction:"mousedown",newTab:"foreground",rememberScroll:!0,rememberSearch:!0,hideEmptyDirs:!0,closeTimeout:1},a:{sidebarPosition:"left",showIndicator:!0,showBookmarkIcons:!0,styles:{colorScheme:"rgb(0,137,123)",indicatorWidth:"50px",indicatorIconSize:"50px",indicatorColor:"rgba(0,0,0,0.5)",sidebarWidth:"350px",sidebarMaskColor:"rgba(255,255,255,0.8)",bookmarksFontSize:"14px",bookmarksIconSize:"16px",bookmarksLineHeight:"40px",bookmarksDirIndentation:"25px",bookmarksHorizontalPadding:"16px"}}},c={};this.init=function(a){var b=["utility","behaviour","appearance"];chrome.storage.sync.get(b,function(d){c=d,b.forEach(function(a){"undefined"==typeof c[a]&&(c[a]={})}),"function"==typeof a&&a()})},this.getData=function(a){var d=a;"string"==typeof d&&(d=[d]);var e={};if(d.forEach(function(a){var d=a.split("/")[0],f=a.split("/")[1],g=null,h=null;switch(d){case"u":h=c.utility;break;case"b":h=c.behaviour;break;case"a":h=c.appearance}null!==h&&("undefined"==typeof h[f]?"undefined"!=typeof b[d]&&"undefined"!=typeof b[d][f]&&(g=b[d][f]):g=h[f]),"a/showIndicator"===a&&g===!0&&"undefined"!=typeof c.behaviour.openAction&&"mousemove"===c.behaviour.openAction&&(g=!1),e[f]=g}),"string"==typeof a){var f=a.split("/")[1];e=e[f]}return e},this.setData=function(b){a.init(function(){Object.keys(b).forEach(function(a){var d=a.split("/")[0],e=a.split("/")[1],f=b[a],g=null;switch(d){case"u":c.utility[e]=f,g=c.utility;break;case"b":c.behaviour[e]=f;break;case"a":c.appearance[e]=f}}),chrome.storage.sync.set(c)})},this.call=function(a,b,c){b.type=a,chrome.extension.sendMessage(b,function(a){"function"==typeof c&&c(a)})}},window.CheckboxHelper=function(a){var c=this,d=null;this.get=function(d,f){var g=b("<div />").data("contextBody",d).html("<input type='checkbox' />").addClass(a.opts.classes.checkbox.box);return"undefined"!=typeof f&&g.children("input[type='checkbox']").attr(f),c.isChecked(g)&&g.addClass(a.opts.classes.checkbox.active),e(g),g},this.isChecked=function(a){return a.find("input[type='checkbox']")[0].checked};var e=function(c){c.on("mousedown",function(c){c.preventDefault(),c.stopPropagation(),b(c.currentTarget).addClass(a.opts.classes.checkbox.focus)}).on("click",function(c){c.preventDefault(),c.stopPropagation();var e=b(c.currentTarget);e.addClass(a.opts.classes.checkbox.clicked),e.removeClass(a.opts.classes.checkbox.focus),e.toggleClass(a.opts.classes.checkbox.active);var f=e.hasClass(a.opts.classes.checkbox.active);e.children("input[type='checkbox']").attr("checked",f).trigger("change"),d&&clearTimeout(d),d=setTimeout(function(){e.removeClass(a.opts.classes.checkbox.clicked)},300)}),c.data("contextBody").on("click",function(b){c.removeClass(a.opts.classes.checkbox.focus)})}};var c=null,d=null,e={classes:{tabs:{list:"tabBar",active:"active",hidden:"hidden"},color:{field:"color"},checkbox:{box:"checkbox",active:"active",clicked:"clicked",focus:"focus"},success:"success",error:"error",loading:"loading"},attr:{type:"data-type",appearance:"data-appearance",name:"data-name",i18n:"data-i18n",value:"data-value",tab:"data-tab",success:"data-successtext",range:{min:"data-min",max:"data-max",step:"data-step",unit:"data-unit"},color:{alpha:"data-alpha"},field:{placeholder:"data-placeholder"}},elm:{body:b("body"),title:b("head > title"),header:b("body > header"),tab:b("section#content > div.tab"),appearanceLabels:b("ul.appearanceLabels > li"),appearanceSections:b("div[data-appearance]"),copyrightDate:b("a#copyright > span"),formElement:b("div.formElement"),feedback:{textarea:b("textarea#feedback"),email:b("input#feedbackEmail")},button:{save:b("div.tab > header > button.save"),restore:b("div.tab > header > button.restore")},checkbox:{},range:{},select:{},color:{},textarea:{},field:{}}},f=function(){var a=+e.elm.copyrightDate.text(),b=(new Date).getFullYear();b>a&&e.elm.copyrightDate.text(a+" - "+b)},g=function(){b("["+e.attr.i18n+"]").forEach(function(a){var c=b(a).attr(e.attr.i18n),d=0===c.search(/^share_userdata/)?c:"settings_"+c,f=chrome.i18n.getMessage(d);f?b(a).html(f.replace(/\[u\](.*)\[\/u\]/,"<span>$1</span>")):b(a).remove()});var a=chrome.runtime.getManifest();e.elm.title.text(e.elm.title.text()+" - "+a.short_name)},h=function(){var a=b("<ul />").addClass(e.classes.tabs.list).prependTo(e.elm.header);e.elm.tab.forEach(function(c){var d=b(c).attr(e.attr.name);b("<li />").attr(e.attr.name,d).html("<a href='#'>"+chrome.i18n.getMessage("settings_tab_"+d)+"</a>").appendTo(a)}),a.find("> li > a").on("click",function(c){c.preventDefault(),a.children("li").removeClass(e.classes.tabs.active);var d=b(c.currentTarget).parent("li"),f=d.attr(e.attr.name);d.addClass(e.classes.tabs.active),e.elm.tab.forEach(function(a){var c=b(a).attr(e.attr.name);c===f?b(a).removeClass(e.classes.tabs.hidden):b(a).addClass(e.classes.tabs.hidden)}),location.hash=f,e.elm.body.attr(e.attr.tab,f)});var c=location.hash?location.hash.substr(1):null;a.find("> li > a").eq(0).trigger("click"),c&&a.find("> li["+e.attr.name+"='"+c+"'] > a").trigger("click")},i=function(){chrome.storage.sync.get(["model"],function(a){"undefined"==typeof a.model&&(a.model={}),a.model.shareUserdata&&a.model.shareUserdata===!0&&e.elm.checkbox.shareUserdata.trigger("click"),e.elm.checkbox.shareUserdata.children("input[type='checkbox']").on("change",function(){a.model.shareUserdata=d.isChecked(e.elm.checkbox.shareUserdata),a.model.lastShareDate=0,chrome.storage.sync.set({model:a.model},function(){o("saved_share_userdata")})})})},j=function(){var a='<div class="loading"> <div>  <div class="circle-clipper left">   <div></div>  </div>  <div class="gap-patch">   <div></div>  </div>  <div class="circle-clipper right">   <div></div>  </div> </div></div>';return b(a)},k=function(){var a=e.elm.textarea.feedbackMsg[0].value,c=e.elm.field.feedbackEmail[0].value,d=c.length>0&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c),f=a.length>0;d&&f?!function(){var b=+new Date,d=j().appendTo(e.elm.body);e.elm.body.addClass(e.classes.loading);var f=chrome.runtime.getManifest(),g=new XMLHttpRequest;g.open("POST","https://moonware.de/ajax/extensions/feedback",!0),g.onload=function(){setTimeout(function(){e.elm.textarea.feedbackMsg[0].value="",e.elm.field.feedbackEmail[0].value="",e.elm.body.removeClass(e.classes.loading),d.remove(),o("feedback_sent_message")},Math.max(0,1e3-(+new Date-b)))};var h=new FormData;h.append("email",c),h.append("msg",a),h.append("extension",JSON.stringify({name:f.name,version:f.version})),g.send(h)}():d?f||e.elm.textarea.feedbackMsg.addClass(e.classes.error):e.elm.field.feedbackEmail.addClass(e.classes.error),setTimeout(function(){b("."+e.classes.error).removeClass(e.classes.error)},700)},l=function(){["rememberScroll","rememberSearch","hideEmptyDirs"].forEach(function(a){c.getData("b/"+a)===!0&&e.elm.checkbox[a].trigger("click")});var a=c.getData("b/pxTolerance");e.elm.range.pxToleranceMaximized[0].value=a.maximized,e.elm.range.pxToleranceWindowed[0].value=a.windowed;var b=c.getData("b/scrollSensitivity");e.elm.range.mouseScrollSensitivity[0].value=b.mouse,e.elm.range.trackpadScrollSensitivity[0].value=b.trackpad,e.elm.range.closeTimeout[0].value=c.getData("b/closeTimeout"),e.elm.select.openAction[0].value=c.getData("b/openAction"),e.elm.select.newTab[0].value=c.getData("b/newTab"),e.elm.range.pxToleranceMaximized.trigger("change"),e.elm.range.pxToleranceWindowed.trigger("change"),e.elm.range.mouseScrollSensitivity.trigger("change"),e.elm.range.trackpadScrollSensitivity.trigger("change"),e.elm.range.closeTimeout.trigger("change")},m=function(){var a={pxTolerance:{maximized:e.elm.range.pxToleranceMaximized[0].value,windowed:e.elm.range.pxToleranceWindowed[0].value},scrollSensitivity:{mouse:e.elm.range.mouseScrollSensitivity[0].value,trackpad:e.elm.range.trackpadScrollSensitivity[0].value},closeTimeout:e.elm.range.closeTimeout[0].value,openAction:e.elm.select.openAction[0].value,newTab:e.elm.select.newTab[0].value};["rememberScroll","rememberSearch","hideEmptyDirs"].forEach(function(b){a[b]=d.isChecked(e.elm.checkbox[b])}),chrome.storage.sync.set({behaviour:a},function(){o("saved_message")})},n=function(){e.elm.button.save.on("click",function(a){switch(a.preventDefault(),e.elm.body.attr(e.attr.tab)){case"behaviour":m();break;case"feedback":k()}})},o=function(a){e.elm.body.attr(e.attr.success,chrome.i18n.getMessage("settings_"+a)),e.elm.body.addClass(e.classes.success),setTimeout(function(){e.elm.body.removeClass(e.classes.success)},1500)},p=function(){e.elm.formElement.forEach(function(c){var f=b(c).attr(e.attr.type),g=b(c).attr(e.attr.name),h=b(c).attr(e.attr.i18n)||"";b("<br />").insertAfter(c);var i=b("<label />").attr(e.attr.i18n,h).insertAfter(c);switch(b("<p />").attr(e.attr.i18n,h+"_desc").insertAfter(i),f){case"checkbox":e.elm.checkbox[g]=d.get(e.elm.body).insertAfter(i);break;case"text":case"email":e.elm.field[g]=b("<input type='"+f+"' />").insertAfter(i),["placeholder"].forEach(function(a){var d=b(c).attr(e.attr.field[a]);d&&e.elm.field[g].attr(a,d)});break;case"textarea":e.elm.textarea[g]=b("<textarea />").insertAfter(i);break;case"color":var j=function(){e.elm.color[g]=b("<input type='text' />").addClass(e.classes.color.field).insertAfter(i);var a=b("<span />").insertAfter(e.elm.color[g]),d=new CP(e.elm.color[g][0]);return b(c).attr(e.attr.color.alpha)&&(d.alpha=b("<input type='range' />").attr({min:0,max:1,step:.01,value:1}).appendTo(d.picker),d.alpha.on("change input",function(){return d.trigger("change")})),d.on("change",function(b){var c=CP._HSV2RGB(d.set());b&&(c=CP.HEX2RGB(b)),d.alpha&&+d.alpha[0].value<1?(d.alpha.css("background-image","linear-gradient(to right, transparent 0%, rgb("+c.join(",")+") 100%),url("+chrome.extension.getURL("img/settings/alpha.png")+")"),c="rgba("+c.join(",")+","+d.alpha[0].value.replace(/^0\./,".")+")"):c="rgb("+c.join(",")+")",e.elm.color[g][0].value=c,a.css("background-color",c)}),e.elm.color[g].data("picker",d),"break"}();if("break"===j)break;case"range":var k=function(){e.elm.range[g]=b("<input type='range' />").insertAfter(i),["min","max","step"].forEach(function(a){var d=b(c).attr(e.attr.range[a]);d&&e.elm.range[g].attr(a,d)}),e.elm.range[g].attr("value",b(c).attr(e.attr.value)||"");var a=b(c).attr(e.attr.range.unit)||"",d=b("<span />").insertAfter(e.elm.range[g]);return e.elm.range[g].on("input change",function(b){var c=b.currentTarget,f=c.max||100,h=c.min||0,i=Math.round(100*(c.value-h)/(f-h)),j=e.elm.range[g].css("background-size").replace(/^.*\s/,i+"% ");e.elm.range[g].css("background-size",j),d.text(c.value+a)}),e.elm.range[g].trigger("input"),"break"}();if("break"===k)break;case"select":e.elm.select[g]=b("<select />").insertAfter(i),b(c).children("span").forEach(function(c){b("<option />").attr(a({value:b(c).attr(e.attr.value)},e.attr.i18n,b(c).attr(e.attr.i18n))).appendTo(e.elm.select[g])})}c.remove()})};!function(){c=new window.ModelHelper,d=new window.CheckboxHelper({opts:e}),p(),g(),f(),h(),c.init(function(){l(),i(),n()})}()}(jsu);