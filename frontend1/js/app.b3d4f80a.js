(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02b1":function(t,e,n){"use strict";n("7f46")},"034f":function(t,e,n){"use strict";n("85ec")},1083:function(t,e,n){},"176f":function(t,e,n){},1784:function(t,e,n){"use strict";n("d099")},"1d14":function(t,e,n){"use strict";n("e325")},2435:function(t,e,n){},"27ee":function(t,e,n){"use strict";n("2435")},"463e":function(t,e,n){},"46ed":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[this.$store.state.setup.room?n("div",{staticClass:"maxSize"},["buero"==this.$store.state.setup.room.type?n("div",{staticClass:"maxSize"},[0==this.$store.state.screen?n("div",{staticClass:"maxSize"},[n("Header"),n("div",{staticClass:"top"},[n("Roomnumber"),n("Roominfo")],1),n("div",{staticClass:"bottom"},[n("PersonsAll"),n("Navigation")],1)],1):1==this.$store.state.screen?n("div",{staticClass:"maxSize"},[n("Header"),n("div",{staticClass:"top"},[n("PersonSwitch")],1),n("div",{staticClass:"bottom"},[n("Calendar",{attrs:{meetings:this.$store.state.persons[this.$store.state.person_index_calendar].meetings}}),n("Navigation")],1)],1):2==this.$store.state.screen?n("div",{staticClass:"maxSize"},[n("Header"),n("div",{staticClass:"top"},[n("Roomnumber"),n("Roominfo")],1),n("div",{staticClass:"bottom"},[n("div",{staticStyle:{width:"85%"}},[n("div",{staticClass:"notifications"},[n("Announcements")],1),n("button",{on:{click:function(e){return t.openModal()}}},[t._v("Login")])]),n("Navigation")],1)],1):t._e()]):t._e(),"vl"==this.$store.state.setup.room.type?n("div",{staticClass:"maxSize"},[0==this.$store.state.screen?n("div",{staticClass:"maxSize"},[n("Header"),n("div",{staticStyle:{display:"flex",height:"20%"}},[n("Roomnumber"),n("Roominfo")],1),n("div",{staticClass:"bottom"},[n("div",{staticStyle:{width:"85%"}},[n("Events")],1),n("Navigation")],1)],1):1==this.$store.state.screen?n("div",{staticClass:"maxSize"},[n("Header"),n("div",{staticClass:"top"},[n("CalendarSwitch")],1),n("div",{staticClass:"bottom"},[n("div",{staticStyle:{width:"85%"}},[n("Calendar",{attrs:{meetings:this.$store.state.meetings}})],1),n("Navigation")],1)],1):2==this.$store.state.screen?n("div",{staticClass:"maxSize"},[n("Header"),n("div",{staticClass:"top"},[n("Roomnumber"),n("Roominfo")],1),n("div",{staticClass:"bottom"},[n("div",{staticStyle:{width:"85%"}},[n("div",{staticClass:"notifications"},[n("Announcements")],1),n("button",{on:{click:function(e){return t.openModal()}}},[t._v("Login")])]),n("Navigation")],1)],1):t._e()]):t._e()]):t._e()])},i=[],o=n("1da1"),r=(n("96cf"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("img",{staticStyle:{margin:"3px"},attrs:{id:"logo",src:this.$store.state.setup.base64Code,alt:"Logo..."}}),n("span",{staticClass:"evenSpacing"},[n("span",{staticClass:"headertext"},[t._v("FB: "),this.$store.state.setup.studienbereich?n("span",{attrs:{id:"fachbereich"}},[t._v(t._s(this.$store.state.setup.studienbereich))]):n("span",{attrs:{id:"fachbereich"}},[t._v("Fachbereich")])]),n("span",{staticClass:"headertext"},[t._v("SB: "),this.$store.state.setup.fachbereich?n("span",{attrs:{id:"studienbereich"}},[t._v(" "+t._s(this.$store.state.setup.fachbereich))]):n("span",{attrs:{id:"studienbereich"}},[t._v(" Studienbereich")])]),n("span",{staticClass:"headertext"},[t._v(t._s(this.time)),n("br"),t._v(t._s(this.date))])])])}),c=[],l=(n("99af"),{data:function(){return{year:"",month:"",day:"",hour:"",minute:"",second:""}},computed:{time:function(){return"".concat(this.hour,":").concat(this.minute,":").concat(this.second)},date:function(){return"".concat(this.day,".").concat(this.month,".").concat(this.year)}},methods:{refreshTime:function(){var t=new Date;this.year=t.getFullYear(),this.month=t.getMonth()+1,this.day=t.getDate(),this.hour=t.getHours(),this.minute=t.getMinutes(),this.second=t.getSeconds(),this.month=this.fillUpTens(this.month),this.day=this.fillUpTens(this.day),this.minute=this.fillUpTens(this.minute),this.second=this.fillUpTens(this.second),this.$store.state.calendar.today.hour=this.hour,this.$store.state.calendar.today.minute=this.minute},fillUpTens:function(t){return t<10&&(t="0"+t),t}},created:function(){var t=this;setInterval((function(){t.refreshTime()}),1e3)}}),d=l,u=(n("c43c"),n("2877")),h=Object(u["a"])(d,r,c,!1,null,"24404426",null),p=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navigation"}},[n("Button",{attrs:{activatedcolor:"rgb(75, 190, 225)",imgName:"home.png",screen:"0",name:"HOME"}}),n("Button",{attrs:{activatedcolor:"rgb(130, 20, 80)",imgName:"calendar.png",screen:"1",name:"PLAN"}}),n("Button",{attrs:{activatedcolor:"rgb(155, 195, 40)",imgName:"info.png",screen:"2",name:"INFO"}}),this.$store.state.timer_running>0?n("div",{staticClass:"ring-container",staticStyle:{}},[n("div",{staticClass:"ringring"})]):t._e()],1)},f=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btnNavigation",style:t.buttonStyle,attrs:{id:"navButton"+t.screen},on:{click:function(e){return t.setScreen()}}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",height:"100%",width:"100%"}},[t._v(" "+t._s(this.name)+" ")])])},g=[],_={data:function(){return{}},props:{imgName:String,screen:String,name:String,basiccolor:{type:String,default:"rgb(255, 255, 255)"},activatedcolor:{type:String,default:"rgb(163, 163, 163)"}},computed:{buttonStyle:function(){return this.$store.state.screen==this.screen?{"background-color":this.activatedcolor,border:"5px solid","border-color":this.activatedcolor,color:"white"}:{"background-color":this.basiccolor,border:"5px solid","border-color":this.activatedcolor}}},methods:{setScreen:function(){this.$store.state.screen=this.screen}}},y=_,b=(n("8274"),Object(u["a"])(y,v,g,!1,null,null,null)),C=b.exports,$={components:{Button:C}},w=$,D=(n("f592"),Object(u["a"])(w,m,f,!1,null,"657fbc5d",null)),S=D.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"announcement"}},t._l(this.$store.state.announcements,(function(t,e){return n("Post",{key:e,attrs:{postContent:t,index:e}})})),1)},x=[],E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.dateChecked?n("div",{attrs:{id:"post"},on:{click:function(e){return t.openModal()}}},[n("div",{staticClass:"lfpost",class:[this.postContent.pinned||!0===this.postContent.timerActive?"pinned":"notpinned"]},[n("span",{staticClass:"textline"},[this.postContent.title?n("span",[t._v(t._s(this.postContent.title))]):t._e(),this.postContent.timerActive?n("span",{staticClass:"timer",attrs:{id:this.index+"timer"}},[t._v(t._s(this.postContent.timerCountdown))]):t._e()])])]):t._e()},O=[],M=(n("a9e3"),n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"announcementsPopup",class:[!0===t.postContent.pinned?"green":"blue"]},[n("header",[t._v(" "+t._s(t.postContent.title)+" ")]),t._v(" "+t._s(t.postContent.content)+" "),n("br"),t._v(" Erstellt am: "+t._s(t.postContent.date)+" um "+t._s(t.postContent.time)+" Uhr "),n("br"),t._v(" Erstellt von: "+t._s(t.postContent.creator)+" "),n("br")])}),T=[],j={props:{postContent:Object}},N=j,U=(n("ded6"),Object(u["a"])(N,M,T,!1,null,"b3171b7c",null)),P=U.exports,A={data:function(){return{timer_started:!1,timer_end:!1,dateChecked:!1}},props:{postContent:Object,index:Number},computed:{tomorrow:function(){var t=new Date(this.$store.state.calendar.today.year,this.$store.state.calendar.today.month,this.$store.state.calendar.today.day,0,0,0,0);return t.setDate(t.getDate()+1),t},postDate:function(){var t=new Date(this.postContent.date),e=this.postContent.time;e=e.slice(0,2);var n=this.postContent.time;return n=n.slice(3,5),e=Number(e),n=Number(n),t.setHours(e,n,0,0),t},postEndDate:function(){var t=new Date(this.postContent.countDownDate);return t}},methods:{checkDate:function(){var t=new Date;return!this.postContent.pinned||this.postContent.pinned&&!this.postContent.timerActive||this.postContent.pinned&&this.postContent.timerActive&&this.postDate<t&&this.postEndDate>t?(console.log("Wird angezeigt:"),console.log(this.postContent.title),this.dateChecked=!0,!0):(console.log(this.postContent.title),console.log("stop"),this.dateChecked=!1,!1)},openModal:function(){try{this.$modal.show(P,{postContent:this.postContent},{height:"auto"})}catch(t){}},setTimer:function(){var t=this.postEndDate.getTime()-new Date,e=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),s=Math.floor(t%36e5/6e4),a=Math.floor(t%6e4/1e3);n=this.$parent.$parent.fillUpTens(n),s=this.$parent.$parent.fillUpTens(s),a=this.$parent.$parent.fillUpTens(a);var i="";e>0&&(i+=e+"d "),i+=n+"h "+s+"m "+a+"s ",this.postContent.timerCountdown=i;try{document.getElementById(this.index+"timer").innerHTML=i}catch(o){}t<0&&(this.postContent.timer_ended=!0,this.checkDate())}},mounted:function(){var t=this;if(this.checkDate(),this.postContent.pinned&&this.postEndDate>new Date&&this.dateChecked&&!this.postContent.timer_started){this.$store.state.timer_running++,this.postContent.timer_started=!0,this.postContent.timer_ended=!1,console.log(this.$store.state.timer_running),console.log("Hurra");var e=setInterval((function(){console.log(t.postContent.timer_ended),t.postContent.timer_started&&!t.postContent.timer_ended?t.setTimer():t.postContent.timer_ended&&(clearInterval(e),console.log("End Timer"),t.$store.state.timer_running--)}),1e3)}}},W=A,I=(n("02b1"),Object(u["a"])(W,E,O,!1,null,null,null)),R=I.exports,H={data:function(){return{}},components:{Post:R},beforeMount:function(){this.$store.state.timer_running=0,console.log("beforeMount Announcements.vue")}},z=H,B=(n("9dfe"),Object(u["a"])(z,k,x,!1,null,"724ce2b6",null)),F=B.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"events"}},t._l(this.$store.state.meetings,(function(e,s){return n("div",{key:s},[t.sameWeekDay(e,s)?n("Evpost",{attrs:{termin:e,time:t.$store.state.timings}}):t._e()],1)})),0)},J=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[1==t.termin.pinned?"pinned":"notpinned"],attrs:{id:"evpost"},on:{click:function(e){return t.openModal()}}},[n("span",{staticClass:"textline"},[t._v(t._s(t.termin.num)+" | "+t._s(t.termin.name))]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.termin.pinned,expression:"termin.pinned"}],staticStyle:{float:"right"}},[t._v("ANGEPINNT")]),n("br"),t._v(" Von "+t._s(t.time[t.termin.std_start-1].tStart)+" bis "+t._s(t.time[t.termin.std_start+t.termin.duration-1-1].tEnd)+" Uhr "),n("br"),t._v(" Studiengänge: "+t._s(t.termin.studigang)+" ")])},q=[],V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"calendarPopup",class:[!0===this.termin.pinned?"pinnedTermin":""]},[n("header",[t._v(t._s(t.termin.num)+" | "+t._s(t.termin.name))]),n("div",{attrs:{id:"body"}},[n("div",{staticClass:"description"},[t._v("Beginn:")]),n("div",{staticClass:"content"},[t._v(" "+t._s(t.times[t.termin.std_start-1].tStart)+" ")]),n("div",{staticClass:"description"},[t._v("Ende:")]),n("div",{staticClass:"content"},[t._v(" "+t._s(t.times[t.termin.std_start+t.termin.duration-1-1].tEnd)+" ")]),n("div",{staticClass:"description"},[t._v("Raum:")]),n("div",{staticClass:"content"},[t._v(t._s(t.termin.roomnumber))]),n("div",{staticClass:"description"},[t._v("Wdh.:")]),0==t.termin.date.repeatedly?n("div",{staticClass:"content"},[t._v("einmalig")]):1==t.termin.date.repeatedly?n("div",{staticClass:"content"},[t._v(" wöchentlich ")]):n("div",{staticClass:"content"},[t._v("alle "+t._s(t.termin.date.repeatedly)+" Wochen")]),n("div",{staticClass:"description"},[t._v("Studiengänge:")]),n("div",{staticClass:"content"},[t._v(t._s(t.termin.studigang))]),n("div",{staticClass:"description"},[t._v("Semester:")]),n("div",{staticClass:"content"},[t._v(t._s(t.termin.semester))]),n("div",{staticClass:"description"},[t._v("Dozent:")]),n("div",{staticClass:"content"},[t._v(t._s(t.termin.dozent))])])])},G=[],Q={props:{termin:Object,times:Array}},K=Q,X=(n("a4f6"),Object(u["a"])(K,V,G,!1,null,"48fdeea7",null)),Z=X.exports,tt={components:{},props:{termin:Object,time:Array},methods:{openModal:function(){try{this.$modal.show(Z,{termin:this.termin,times:this.$store.state.timings})}catch(t){console.log("Error in Evpost running Popup.")}}},mounted:function(){console.log(this.termin)}},et=tt,nt=(n("80a3"),Object(u["a"])(et,L,q,!1,null,null,null)),st=nt.exports,at={components:{Evpost:st},data:function(){return{todayDate:"",show_meeting:!1}},computed:{today:function(){var t=new Date(this.$store.state.calendar.today.year,this.$store.state.calendar.today.month,this.$store.state.calendar.today.day,0,0,0,0);return t}},methods:{sameWeekDay:function(t,e){var n=new Date(t.date.start),s=new Date(t.date.end);n.setHours(0,0,0,0),s.setHours(23,59,59,999);var a,i=this.ISOweek(n),o=this.ISOweek(this.today);a=t.date.repeatedly>0?(o-i)%t.date.repeatedly:o-i;var r,c=this.$store.state.timings[t.std_start+t.duration-1-1].tEnd,l=c.substr(0,2),d=c.substr(3,2);r=l==this.$store.state.calendar.today.hour?d>=this.$store.state.calendar.today.minute:l>this.$store.state.calendar.today.hour;var u=this.today.getDay()==n.getDay()&&0==a&&(this.today<s||t.date.infinity)&&r;return u?(this.show_meeting=!0,this.$store.state.upcomming_Meeting=!0,!0):(e!=this.$store.state.meetings.length-1||this.show_meeting||(this.$store.state.upcomming_Meeting=!1),!1)},ISOweek:function(t){var e=new Date(t.valueOf()),n=(t.getDay()+6)%7;e.setDate(e.getDate()-n+3);var s=e.valueOf();return e.setMonth(0,1),4!==e.getDay()&&e.setMonth(0,1+(4-e.getDay()+7)%7),1+Math.ceil((s-e)/6048e5)}},beforeUpdate:function(){this.$store.state.upcomming_Meeting=!1},updated:function(){console.log("Update"),this.todayDate=new Date(this.$store.state.calendar.today.year,this.$store.state.calendar.today.month,this.$store.state.calendar.today.day,0,0,0,0)}},it=at,ot=(n("1d14"),Object(u["a"])(it,Y,J,!1,null,"0d31bfc4",null)),rt=ot.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:[1==this.$store.state.upcomming_Meeting&&"vl"==this.$store.state.setup.room.type?"marked":""],attrs:{id:"roomnumberComp"}},[n("span",{staticClass:"textline",attrs:{id:"roomnumber"}},[t._v(t._s(this.$store.state.setup.room.num))])])},lt=[],dt=(n("cdcc"),{}),ut=Object(u["a"])(dt,ct,lt,!1,null,"66a7da22",null),ht=ut.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"roominfo"}},["buero"==this.$store.state.setup.room.type?n("span",{staticClass:"textline"},[n("span",{attrs:{id:"roomtype"}},[t._v("Büro")]),""!=this.$store.state.setup.room.desc?n("span",[n("br"),t._v(" "+t._s(this.$store.state.setup.room.desc)+" ")]):t._e()]):"vl"==this.$store.state.setup.room.type?n("span",{staticClass:"textline"},[n("span",{attrs:{id:"roomtype"}},[t._v("Vorlesungsraum")]),""!=this.$store.state.setup.room.desc?n("span",[n("br"),t._v(" "+t._s(this.$store.state.setup.room.desc)+" ")]):t._e()]):t._e()])},mt=[],ft=(n("b201"),{}),vt=Object(u["a"])(ft,pt,mt,!1,null,"4026383d",null),gt=vt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{overflow:"scroll",width:"100%"}},[n("table",{staticStyle:{width:"100%","table-layout":"fixed"},attrs:{id:"table1"}},[t._m(0),t._l(this.$store.state.timings,(function(e,s){return n("tr",{key:s},[n("td",[n("div",{staticStyle:{display:"inline-flex","flex-grow":"3",float:"left","padding-left":"5px"}},[t._v(" "+t._s(s+1)+". ")]),n("div",{staticStyle:{display:"inline-flex","flex-grow":"1",float:"right","padding-right":"5px"}},[t._v(" "+t._s(e.tStart)+"-"+t._s(e.tEnd)+" ")])]),t._l(6,(function(e,a){return n("td",{key:a,attrs:{id:10*(s+1)+a+1},on:{click:function(e){t.openModal(10*(s+1)+a+1)}}})}))],2)}))],2)])},yt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",{staticStyle:{width:"20%"}},[t._v("Std")]),n("th",[t._v("Mo")]),n("th",[t._v("Di")]),n("th",[t._v("Mi")]),n("th",[t._v("Do")]),n("th",[t._v("Fr")]),n("th",[t._v("Sa")])])}],bt=(n("c740"),n("caad"),n("2532"),{components:{},data:function(){return{button_db_connect:[]}},props:{meetings:Array},methods:{writeCalendar:function(){console.log("Write calendar"),this.resetCalendar();var t=[],e=new Date(this.$store.state.calendar.weekStart.year,this.$store.state.calendar.weekStart.month-1,this.$store.state.calendar.weekStart.day),n=this.$store.state.calendar.weekEnd.day,s=this.$store.state.calendar.weekEnd.month,a=this.$store.state.calendar.weekEnd.year,i=new Date(a,s-1,n);for(var o in i.setHours(23,59,59,999),this.meetings){var r=this.meetings[o],c=new Date(r.date.start),l=new Date(r.date.end),d=this.ISOweek(c),u=this.ISOweek(e),h=void 0;if(h=0==r.date.repeatedly?0:(u-d)%r.date.repeatedly,console.log(r),(1==r.date.infinity||e<=l)&&i>c&&0==h){var p=new Date(r.date.start).getDay(),m=10*r.std_start+p,f=r.name_short,v=document.getElementById(m);v.innerText=f,r.pinned?v.style.background="rgb(155, 195, 40)":v.style.background="rgb(75, 190, 225)",v.style.color="black";var g=r.duration;if(g>1){v.rowSpan=g;for(var _=1;_<g;_++){var y=m+10*_;document.getElementById(y).style.display="none"}}var b=[m,o];t.push(b)}}this.button_db_connect=t},resetCalendar:function(){console.log("Reset Calendar");for(var t=0;t<this.$store.state.timings.length;t++)for(var e=0;e<6;e++){var n=10*(t+1)+e+1,s=document.getElementById(n);s.innerText=n,s.style.background="white",s.style.color="white",s.rowSpan="1",s.style.display="table-cell"}},openModal:function(t){try{var e=this.button_db_connect.findIndex((function(e){return e.includes(t)})),n=this.button_db_connect[e][1];this.$modal.show(Z,{termin:this.meetings[n],times:this.$store.state.timings})}catch(s){console.log("Clicked on Non-Event cell in calendar.")}},ISOweek:function(t){var e=new Date(t.valueOf()),n=(t.getDay()+6)%7;e.setDate(e.getDate()-n+3);var s=e.valueOf();return e.setMonth(0,1),4!==e.getDay()&&e.setMonth(0,1+(4-e.getDay()+7)%7),1+Math.ceil((s-e)/6048e5)},setWeek:function(t){this.startOfWeek(t),this.endOfWeek(t)},startOfWeek:function(t){var e=t.getDate()-t.getDay()+(0===t.getDay()?-6:1),n=new Date(t.setDate(e));return this.$store.commit("changeWeekStart",{day:this.fillUpTens(n.getDate()),month:this.fillUpTens(n.getMonth()+1),year:this.fillUpTens(n.getFullYear())}),this.shortDate(n)},endOfWeek:function(t){var e=t.getDate()-t.getDay()+(0===t.getDay()?-6:1)+5,n=new Date(t.setDate(e));return this.$store.commit("changeWeekEnd",{day:this.fillUpTens(n.getDate()),month:this.fillUpTens(n.getMonth()+1),year:this.fillUpTens(n.getFullYear())}),this.shortDate(n)},shortDate:function(t){var e=t.getDate();e<10&&(e="0"+e);var n=t.getMonth()+1;n<10&&(n="0"+n);var s=t.getFullYear();return"".concat(e,".").concat(n,".").concat(s)},fillUpTens:function(t){return t=t<10?"0"+t:String(t),t}},watch:{"$store.state.calendar.weekStart.day":{handler:function(){this.writeCalendar()}},"$store.state.person_index_calendar":{handler:function(){this.writeCalendar()}}},mounted:function(){this.setWeek(new Date),this.writeCalendar()},beforeUpdate:function(){console.log("Before Update"),this.writeCalendar()},updated:function(){this.writeCalendar()}}),Ct=bt,$t=(n("97bb"),Object(u["a"])(Ct,_t,yt,!1,null,"76e2af64",null)),wt=$t.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"calendarswitch"}},[n("button",{staticClass:"switchbutton",on:{click:function(e){return t.setDateAdjust(-7)}}},[t._v("<")]),n("span",{staticClass:"textline"},[t._v(t._s(t.weekStart)+" - "+t._s(t.weekEnd))]),n("button",{staticClass:"switchbutton",on:{click:function(e){return t.setDateAdjust(7)}}},[t._v(">")])])},St=[],kt={components:{},data:function(){return{dateAdjust:0}},computed:{weekStart:function(){return"".concat(this.$store.state.calendar.weekStart.day,".").concat(this.$store.state.calendar.weekStart.month,".").concat(this.$store.state.calendar.weekStart.year)},weekEnd:function(){return"".concat(this.$store.state.calendar.weekEnd.day,".").concat(this.$store.state.calendar.weekEnd.month,".").concat(this.$store.state.calendar.weekEnd.year)}},methods:{setDateAdjust:function(t){this.dateAdjust+=t;var e=new Date;e.setDate(e.getDate()+this.dateAdjust),this.setWeek(e)},setWeek:function(t){this.startOfWeek(t),this.endOfWeek(t)},startOfWeek:function(t){var e=t.getDate()-t.getDay()+(0===t.getDay()?-6:1),n=new Date(t.setDate(e));return this.$store.commit("changeWeekStart",{day:this.fillUpTens(n.getDate()),month:this.fillUpTens(n.getMonth()+1),year:this.fillUpTens(n.getFullYear())}),this.shortDate(n)},endOfWeek:function(t){var e=t.getDate()-t.getDay()+(0===t.getDay()?-6:1)+5,n=new Date(t.setDate(e));return this.$store.commit("changeWeekEnd",{day:this.fillUpTens(n.getDate()),month:this.fillUpTens(n.getMonth()+1),year:this.fillUpTens(n.getFullYear())}),this.shortDate(n)},shortDate:function(t){var e=t.getDate();e<10&&(e="0"+e);var n=t.getMonth()+1;n<10&&(n="0"+n);var s=t.getFullYear();return"".concat(e,".").concat(n,".").concat(s)},fillUpTens:function(t){return t=t<10?"0"+t:String(t),t}},mounted:function(){this.setWeek(new Date)},created:function(){}},xt=kt,Et=(n("b920"),Object(u["a"])(xt,Dt,St,!1,null,"76d97f72",null)),Ot=Et.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PersonsAll"},t._l(this.$store.state.persons,(function(t,e){return n("PersonSingle",{key:e,attrs:{num:e+1,person:t}})})),1)},Tt=[],jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personSingle",on:{click:function(e){return t.openModal()}}},[n("div",{staticClass:"picture"},[n("img",{staticClass:"profilePic",attrs:{src:this.person.base64Code,alt:"Profilbild..."}})]),n("div",{staticClass:"personName"},[n("span",[t._v(" "+t._s(this.person.name)),this.person.titel?n("span",[t._v(", "+t._s(this.person.titel))]):t._e()])])])},Nt=[],Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personPopup"},[n("div",{staticClass:"picture"},[n("img",{attrs:{src:this.person.base64Code,alt:"profile picture"}})]),n("div",{staticClass:"content"},[n("h3",[t._v(" "+t._s(this.person.name)+" "),this.person.title?n("span",[t._v(", "+t._s(this.person.titel))]):t._e()]),t._v(" E-Mail: "+t._s(this.person.email)+" "),n("br"),t._v(" Telefon: "+t._s(this.person.telefon)+" "),n("br"),t._v(" Sprechzeiten: "+t._s(this.person.visitTime)+" "),n("br")]),this.person.homepage?n("div",{staticClass:"QRcode"},[t._v(" Homepage: "),n("qr-code",{attrs:{size:128,text:this.person.homepage}})],1):t._e()])},Pt=[],At={props:{num:Number,person:Object}},Wt=At,It=(n("d75a"),Object(u["a"])(Wt,Ut,Pt,!1,null,"171d7815",null)),Rt=It.exports,Ht={props:{num:Number,person:Object},methods:{openModal:function(){try{this.$modal.show(Rt,{num:this.num,person:this.person},{width:"700px"})}catch(t){console.log("Error on person.")}}}},zt=Ht,Bt=(n("1784"),Object(u["a"])(zt,jt,Nt,!1,null,"13dec4d5",null)),Ft=Bt.exports,Yt={components:{PersonSingle:Ft}},Jt=Yt,Lt=(n("27ee"),Object(u["a"])(Jt,Mt,Tt,!1,null,"485ace74",null)),qt=Lt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"personswitch"}},[n("button",{staticClass:"switchbutton",on:{click:function(e){return t.switchPerson("-")}}},[n("span",[t._v(" <")])]),n("span",{staticClass:"textline"},[t._v(t._s(this.$store.state.persons[this.$store.state.person_index_calendar].name)+" ")]),n("button",{staticClass:"switchbutton",on:{click:function(e){return t.switchPerson("+")}}},[t._v(">")])])},Gt=[],Qt={methods:{switchPerson:function(t){"+"==t?(console.log(t),this.$store.state.person_index_calendar<this.$store.state.persons.length-1?this.$store.state.person_index_calendar++:this.$store.state.person_index_calendar=0):"-"==t&&(console.log(t),this.$store.state.person_index_calendar>0?this.$store.state.person_index_calendar--:this.$store.state.person_index_calendar=this.$store.state.persons.length-1),console.log(this.$store.state.person_index_calendar)}}},Kt=Qt,Xt=(n("6c3b"),Object(u["a"])(Kt,Vt,Gt,!1,null,"f00b3df0",null)),Zt=Xt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",display:"block",overflow:"scroll"}},[n("iframe",{staticClass:"maxSize",attrs:{src:"http://localhost:3001"}}),n("br"),n("button",{attrs:{id:"closeButton"},on:{click:function(e){return t.closeModal()}}},[t._v("Schließen")])])},ee=[],ne={methods:{closeModal:function(){console.log("Close InputModal"),this.$modal.hide("InputModal")}}},se=ne,ae=(n("b8c1"),Object(u["a"])(se,te,ee,!1,null,"19262951",null)),ie=ae.exports,oe={name:"App",components:{Header:p,Navigation:S,Announcements:F,Events:rt,Roomnumber:ht,Roominfo:gt,Calendar:wt,CalendarSwitch:Ot,PersonsAll:qt,PersonSwitch:Zt},methods:{recieveData:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Recieve all Data"),n={method:"POST",headers:{"Content-Type":"application/json"}},s={type:""},a=[],s.type="timings",n.body=JSON.stringify(s),t.next=8,fetch("/recieve",n);case 8:return e=t.sent,t.next=11,e.json();case 11:return a.timings=t.sent,s.type="meetings",n.body=JSON.stringify(s),t.next=16,fetch("/recieve",n);case 16:return e=t.sent,t.next=19,e.json();case 19:return a.meetings=t.sent,s.type="persons",n.body=JSON.stringify(s),t.next=24,fetch("/recieve",n);case 24:return e=t.sent,t.next=27,e.json();case 27:return a.persons=t.sent,s.type="announcements",n.body=JSON.stringify(s),t.next=32,fetch("/recieve",n);case 32:return e=t.sent,t.next=35,e.json();case 35:return a.announcements=t.sent,s.type="setup",n.body=JSON.stringify(s),t.next=40,fetch("/recieve",n);case 40:return e=t.sent,t.next=43,e.json();case 43:a.setup=t.sent,this.$store.commit("importTimings",{data:a.timings}),this.$store.commit("importMeetings",{data:a.meetings}),this.$store.commit("importPersons",{data:a.persons}),this.$store.commit("importAnnouncements",{data:a.announcements}),this.$store.commit("importSetup",{data:a.setup[0]}),console.log(this.$store.state.setup),console.log("Response:"),console.log(a),console.log(this.$store.state);case 53:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),openModal:function(){var t=this;try{this.$modal.show(ie,{},{adaptive:!1,clickToClose:!1,width:"800",height:"400",name:"InputModal"},{"before-close":function(){t.recieveData()}})}catch(e){console.log("Error on Login Popup.")}},setToday:function(){var t=new Date;this.$store.commit("setToday",{day:this.fillUpTens(t.getDate()),month:this.fillUpTens(t.getMonth()),year:this.fillUpTens(t.getFullYear())})},fillUpTens:function(t){return t=t<10?"0"+t:String(t),t}},created:function(){this.setToday()},mounted:function(){this.recieveData()}},re=oe,ce=(n("034f"),Object(u["a"])(re,a,i,!1,null,null,null)),le=ce.exports,de=n("dfcf"),ue=n("5f5b");n("f9e3"),n("2dd8"),n("ab8b");s["default"].use(ue["a"]);var he=n("2f62");s["default"].use(he["a"]);var pe=new he["a"].Store({state:{timings:[],meetings:[],persons:[],announcements:[],setup:{},calendar:{today:{day:"",month:"",year:"",testDate:"2021-03-15",hour:"",minute:""},weekStart:{day:"",month:"",year:""},weekEnd:{day:"",month:"",year:""}},screen:0,timer_running:0,room_bussy:!1,upcomming_Meeting:!1,person_index_calendar:0,logged_in:!1},getters:{},mutations:{changeWeekStart:function(t,e){t.calendar.weekStart.day=e.day,t.calendar.weekStart.month=e.month,t.calendar.weekStart.year=e.year},changeWeekEnd:function(t,e){t.calendar.weekEnd.day=e.day,t.calendar.weekEnd.month=e.month,t.calendar.weekEnd.year=e.year},setToday:function(t,e){t.calendar.today.day=e.day,t.calendar.today.month=e.month,t.calendar.today.year=e.year},setScreen:function(t,e){switch(e){case"HOME":t.screen=0;break;case"CALENDAR":t.screen=1;break;case"INFO":t.screen=2;break;default:t.screen=0;break}},importTimings:function(t,e){t.timings=e.data},importMeetings:function(t,e){t.meetings=e.data},importPersons:function(t,e){t.persons=e.data},importAnnouncements:function(t,e){t.announcements=e.data},importSetup:function(t,e){t.setup=e.data}},actions:{}}),me=n("1881"),fe=n.n(me);s["default"].use(fe.a,{dynamicDefaults:{adaptive:!0,height:"auto"}}),s["default"].component("qr-code",de["a"]),s["default"].use(ue["a"]),s["default"].config.productionTip=!1,new s["default"]({store:pe,render:function(t){return t(le)}}).$mount("#app")},"5c48":function(t,e,n){},"5e54":function(t,e,n){},"6c3b":function(t,e,n){"use strict";n("5e54")},"786a":function(t,e,n){},"7acf":function(t,e,n){},"7f46":function(t,e,n){},"80a3":function(t,e,n){"use strict";n("463e")},8274:function(t,e,n){"use strict";n("d277")},"831a":function(t,e,n){},"85ec":function(t,e,n){},"97b3":function(t,e,n){},"97bb":function(t,e,n){"use strict";n("ed30")},"9dfe":function(t,e,n){"use strict";n("46ed")},a4f6:function(t,e,n){"use strict";n("5c48")},b090:function(t,e,n){},b201:function(t,e,n){"use strict";n("b090")},b8c1:function(t,e,n){"use strict";n("831a")},b920:function(t,e,n){"use strict";n("7acf")},c43c:function(t,e,n){"use strict";n("786a")},cc01:function(t,e,n){},cdcc:function(t,e,n){"use strict";n("cc01")},d099:function(t,e,n){},d277:function(t,e,n){},d75a:function(t,e,n){"use strict";n("176f")},ded6:function(t,e,n){"use strict";n("1083")},e325:function(t,e,n){},ed30:function(t,e,n){},f592:function(t,e,n){"use strict";n("97b3")}});
//# sourceMappingURL=app.b3d4f80a.js.map