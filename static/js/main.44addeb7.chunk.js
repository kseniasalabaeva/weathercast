(this.webpackJsonpweathercast=this.webpackJsonpweathercast||[]).push([[0],{41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c,n,s=a(1),r=a.n(s),i=a(17),o=a.n(i),l=a(5),d=a.n(l),j=a(7),u=a(3),h=a(8),b=a.n(h),m=a(4);!function(e){e.None="Select city",e.Samara="Samara",e.Togliatty="Togliatty",e.Saratov="Saratov",e.Kazan="Kazan",e.Krasnodar="Krasnodar"}(n||(n={}));var p=(c={},Object(m.a)(c,n.None,{lat:void 0,lon:void 0}),Object(m.a)(c,n.Samara,{lat:53.19,lon:50.1}),Object(m.a)(c,n.Togliatty,{lat:53.5,lon:49.42}),Object(m.a)(c,n.Saratov,{lat:51.53,lon:46.03}),Object(m.a)(c,n.Kazan,{lat:55.79,lon:49.1}),Object(m.a)(c,n.Krasnodar,{lat:45.03,lon:38.97}),c),O=(a(41),a(0)),v=function(e){var t=e.onChange,a=Object(s.useState)(n.None),c=Object(u.a)(a,2),r=c[0],i=c[1];return Object(O.jsx)("select",{onChange:function(e){var a=e.target.value;i(a),t&&t(a)},value:r,className:"city-select",children:Object.values(n).map((function(e,t){return Object(O.jsx)("option",{className:"city-select__option",disabled:!t,children:e},e)}))})},f=(a(43),function(e){var t=e.item,a=e.width;return Object(O.jsx)("div",{className:"weather-card",style:{width:a},children:Object(O.jsxs)("div",{className:"weather-card__container",children:[Object(O.jsx)("span",{className:"weather-card__date",children:(null===t||void 0===t?void 0:t.dt)?new Date(1e3*t.dt).toLocaleDateString():""}),Object(O.jsx)("img",{src:function(){var e;return(null===t||void 0===t||null===(e=t.weather)||void 0===e?void 0:e.length)?"".concat("http://openweathermap.org/img/wn","/").concat(t.weather[0].icon,"@2x.png"):""}(),className:"weather-card__icon"}),Object(O.jsx)("span",{className:"weather-card__temp",children:function(){var e;return t.temp.day?(null===t||void 0===t||null===(e=t.temp)||void 0===e?void 0:e.day)?"".concat((t.temp.day-273.15).toFixed(),"\xb0"):"":(null===t||void 0===t?void 0:t.temp)?"".concat((t.temp-273.15).toFixed(),"\xb0"):""}()})]})})}),x=a.p+"static/media/weatherbg.1a743710.svg",w=(a(44),function(){return Object(O.jsxs)("div",{className:"bg-content",children:[Object(O.jsx)("img",{className:"bg-content__img",src:x}),Object(O.jsx)("span",{className:"bg-content__desc",children:"Fill in all the fields and the weather will be displayed"})]})}),g=(a(45),a.p+"static/media/chevronLeft.668da982.svg"),_=a.p+"static/media/chevronRight.d8b7c444.svg",N=function(){var e=Object(s.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(),i=Object(u.a)(r,2),o=i[0],l=i[1],h=Object(s.useState)(0),m=Object(u.a)(h,2),x=m[0],N=m[1],y=Object(s.useState)(window.innerWidth<=460),S=Object(u.a)(y,2),k=S[0],C=S[1],E=Object(s.useState)(0),K=Object(u.a)(E,2),z=K[0],D=K[1],F=Object(s.useState)(n.None),L=Object(u.a)(F,2),T=L[0],W=L[1],J="7384a8fb7699cee18fbfa10906161e96",B="https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly,alerts&appid=".concat(J),H="https://api.openweathermap.org/data/2.5/onecall/timemachine?&appid=".concat(J);function I(){return(I=Object(j.a)(d.a.mark((function e(t,a){var n,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(B,"&lat=").concat(t,"&lon=").concat(a),e.next=4,b.a.get(n);case 4:s=e.sent,r=s.data,c(r.daily),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(0),new Error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function M(){return(M=Object(j.a)(d.a.mark((function e(t,a,c){var n,s,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n="".concat(H,"&lat=").concat(t,"&lon=").concat(a,"&dt=").concat(c),e.next=4,b.a.get(n);case 4:s=e.sent,r=s.data,l(r.current),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u0430\u044f \u0434\u0430\u0442\u0430 \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0435 :)");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var P=function(){return C(window.innerWidth<=460)};return Object(s.useEffect)((function(){window.addEventListener("resize",P)}),[]),Object(s.useEffect)((function(){var e=p[T];(e.lat||e.lon)&&z&&function(e,t,a){M.apply(this,arguments)}(e.lat,e.lon,z)}),[z,T]),Object(s.useEffect)((function(){return function(){window.removeEventListener("resize",P)}}),[]),Object(O.jsxs)("div",{className:"homepage",children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("span",{className:"header__item",children:"Weather"}),Object(O.jsx)("span",{className:"header__item",children:"forecast"})]}),Object(O.jsxs)("div",{className:"cards",children:[Object(O.jsxs)("div",{className:"cards__item",children:[Object(O.jsx)("span",{className:"cards__item__title",children:"7 Days Forecast"}),Object(O.jsx)(v,{onChange:function(e){if(p[e].lat||p[e].lon){var t=p[e];!function(e,t){I.apply(this,arguments)}(t.lat,t.lon)}}}),a.length?Object(O.jsxs)("div",{className:"weather-cards",children:[Object(O.jsx)("button",{className:"weather-cards__button-arrow",onClick:function(){x>0&&N(x-1)},children:Object(O.jsx)("img",{src:g})}),Object(O.jsx)("div",{className:"weather-cards__container",children:function(){var e=a.length-3,t=!k&&e>0&&x>e,c=t?e:x;return t&&N(e),a.slice(c,c+(k?1:3))}().map((function(e){return Object(O.jsx)(f,{width:"174px",item:e},e.dt)}))}),Object(O.jsx)("button",{className:"weather-cards__button-arrow",onClick:function(){x<a.length-(k?1:3)&&N(x+1)},children:Object(O.jsx)("img",{src:_})})]}):Object(O.jsx)(w,{})]}),Object(O.jsxs)("div",{className:"cards__item",children:[Object(O.jsx)("span",{className:"cards__item__title",children:"Forecast for a Date in the Past"}),Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)(v,{onChange:function(e){return W(e)}}),Object(O.jsx)("input",{type:"date",className:"date-input",onChange:function(e){var t=new Date(e.target.value);t.setHours(12),D(+t/1e3)}})]}),o?Object(O.jsx)("div",{className:"weather-cards",children:Object(O.jsx)("div",{className:"weather-cards__container",children:Object(O.jsx)(f,{width:"100%",item:o})})}):Object(O.jsx)(w,{})]})]})]})},y=function(){return Object(O.jsx)("div",{className:"app",children:Object(O.jsx)(N,{})})};a(46),a(47);o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.44addeb7.chunk.js.map