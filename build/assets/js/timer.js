!function u(i,c,a){function m(t,e){if(!c[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=c[t]={exports:{}};i[t][0].call(o.exports,function(e){return m(i[t][1][e]||e)},o,o.exports,u,i,c,a)}return c[t].exports}for(var l="function"==typeof require&&require,e=0;e<a.length;e++)m(a[e]);return m}({1:[function(e,t,n){"use strict";function r(){return document.getElementById("scramble").innerText=(0,m.generateScramble)()}var o,u,i,c,a,m=e("./times.js"),l=0,d=0,f=[];window.prepareSolve=r;function g(){l=1,o=Date.now(),u=setInterval(function(){return h(Date.now()-o)})}function s(){v("black"),d=0}function p(){d=l=0,v("black"),clearInterval(u),y(Date.now()-o),function(){var e=document.getElementById("timer").innerHTML;f.push(e);var t=document.createElement("P");t.innerHTML="<p>Solve "+f.length+": <strong>"+e+"</strong></p>",document.getElementById("times").appendChild(t),document.getElementById("best").innerHTML="Best of "+f.length+": <strong>"+(0,m.getBest)(f)+"</strong>",document.getElementById("average").innerHTML="Average of "+f.length+": <strong>"+(0,m.getAverage)(f)+"</strong>"}(),r()}var v=function(e){return document.getElementById("timer").style.color=e},h=function(e){return document.getElementById("timer").innerHTML=Math.floor(e/1e3)},y=function(e){return document.getElementById("timer").innerHTML=(e/1e3).toFixed(2)};document.onkeydown=function(e){"Space"===e.code&&(1!=l?d||(d=1,document.getElementById("timer").innerHTML="0",c=e.timeStamp,v("red"),i=setTimeout(function(){return v("green")},500)):p())},document.onkeyup=function(e){"Space"===e.code&&d&&(a=(e.timeStamp-c)/1e3,clearTimeout(i),(a<.5?s:g)())},document.getElementById("timer").ontouchstart=function(e){1!=l?d||(d=1,document.getElementById("timer").innerHTML="0",c=e.timeStamp,v("red"),i=setTimeout(function(){return v("green")},500)):p()},document.getElementById("timer").ontouchend=function(e){d&&(a=(e.timeStamp-c)/1e3,clearTimeout(i),(a<.5?s:g)())}},{"./times.js":2}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.generateScramble=n.getBest=n.getAmount=n.getAverage=void 0;n.getAverage=function(e){var t=0;return e.forEach(function(e){return t+=parseFloat(e)}),(t/r(e)).toFixed(2)};var r=function(e){return e.length};n.getAmount=r;n.getBest=function(e){var t=1e5;return e.forEach(function(e){e<t&&(t=e)}),t};n.generateScramble=function(){for(var e=["U","F","R","D","B","L"],t=["","'","2"],n=[],r="",o=0;o<20;o++){for(var u=Math.floor(6*Math.random());n.includes(u);)u=Math.floor(6*Math.random());n.push(u),3==n.length&&n.splice(0,1),2==n.length&&n[0]+3!=n[1]&&n[0]-3!=n[1]&&n.splice(0,1);var i=Math.floor(3*Math.random());r+=" "+e[u]+t[i]+" "}return r}},{}]},{},[1]);
//# sourceMappingURL=timer.js.map
