(function(e){function t(t){for(var s,o,r=t[0],l=t[1],c=t[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},a=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},2873:function(e,t,n){},"2add":function(e,t,n){},"4a1f":function(e,t,n){"use strict";n("2add")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center",width:"100%",height:"10%"}},[this.$store.state.logged_in?n("img",{staticStyle:{"margin-right":"20px"},attrs:{src:this.$store.state.setup.base64Code,alt:"",id:"logo"}}):e._e(),n("br"),n("h2",[e._v("Roomacle Dateneingabe")])]),0==this.$store.state.logged_in?n("div",[n("Login")],1):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.logged_in,expression:"this.$store.state.logged_in"}]},[n("div",{staticClass:"buttonrow"},[n("ImportExport"),n("Logout",{staticClass:"spaceLeftRight",staticStyle:{"margin-top":"4px"}})],1),n("hr"),n("DeviceSetup"),n("br"),n("DatabaseCheck")],1)])},a=[],o=n("1da1"),r=(n("96cf"),n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("fieldset",[n("legend",[e._v("Datenbank-Check")]),n("div",{staticClass:"horizontal"},[n("span",{staticClass:"horizontal"},[n("span",{staticClass:"dot",class:[this.countMeetings>0?"green":"red"]}),n("h2",{staticClass:"spaceLeftRight"},[e._v("Veranstaltungen")]),n("button",{attrs:{id:"meetingsAdd"},on:{click:function(t){return e.openModal("meetings")}}},[e._v("+")])]),n("span",{staticClass:"horizontal"},[n("span",{staticClass:"dot",class:[this.countPersons>0?"green":"red"]}),n("h2",{staticClass:"spaceLeftRight"},[e._v("Personen")]),n("button",{attrs:{id:"personsAdd"},on:{click:function(t){return e.openModal("persons")}}},[e._v("+")])])]),n("hr"),n("div",{staticClass:"horizontal"},[n("span",{staticClass:"horizontal"},[n("span",{staticClass:"dot",class:[this.countAnnouncements>0?"green":"red"]}),n("h2",{staticClass:"spaceLeftRight"},[e._v("Benachrichtigungen")]),n("button",{attrs:{id:"announcementsAdd"},on:{click:function(t){return e.openModal("announcements")}}},[e._v(" + ")])]),n("span",{staticClass:"horizontal"},[n("span",{staticClass:"dot",class:[this.countTimings>0?"green":"red"]}),n("h2",{staticClass:"spaceLeftRight"},[e._v("Zeiten")]),n("button",{attrs:{id:"timingsAdd"},on:{click:function(t){return e.openModal("timings")}}},[e._v("+")])])])])])}),l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"AddTimingsPopup"}},[n("h3",[e._v("Zeiten bearbeiten")]),e._l(this.$store.state.timings,(function(t,s){return n("span",{key:s},[n("span",{staticClass:"small"},[e._v(e._s(s+1)+". Std:")]),n("input",{staticClass:"spaceLeftRight",attrs:{id:s+"tStart",type:"time"}}),e._v(" - "),n("input",{staticClass:"spaceLeftRight",attrs:{id:s+"tEnd",type:"time"}}),n("button",{staticClass:"spaceLeftRight",on:{click:function(t){return e.makeAction("Delete",s)}}},[e._v(" Löschen ")]),n("br")])})),n("span",[n("br"),n("button",{staticClass:"btnAddDelete",on:{click:function(t){return e.makeAction("+")}}},[e._v("+")]),n("button",{staticClass:"btnAddDelete",staticStyle:{width:"80px"},on:{click:function(t){return e.makeAction("Save")}}},[e._v(" Speichern ")]),n("button",{staticClass:"btnAddDelete",on:{click:function(t){return e.makeAction("Reset")}}},[e._v("Reset")])])],2)},d=[],u={methods:{makeAction:function(e,t){if("+"==e){console.log(e),this.makeAction("Save");var n={tStart:"",tEnd:""};this.$store.state.timings.push(n)}else if("-"==e)console.log(e),this.$store.state.timings.pop();else if("Save"==e){console.log(e);for(var s=[],i=0;i<this.$store.state.timings.length;i++){var a={tStart:document.getElementById(i+"tStart").value,tEnd:document.getElementById(i+"tEnd").value};s.push(a)}this.$store.commit("importTimings",{data:s})}else if("Reset"==e){console.log(e);for(var o=this.$store.state.timings,r=0;r<o.length;r++)document.getElementById(r+"tStart").value=o[r].tStart,document.getElementById(r+"tEnd").value=o[r].tEnd}else if("Show"==e){console.log(e);var l=this.$store.state.timings;console.log(l)}else if("Delete"==e){console.log(e);for(var c=this.$store.state.timings,d=t;d<c.length-1;d++)console.log("N: "+d),this.moveInArray(d+1,d,c);this.makeAction("-")}else console.log("Error: On AddTimingsPopup makeAction")},moveInArray:function(e,t,n){var s=n[e];n[e]=n[t],n[t]=s}},mounted:function(){this.makeAction("Reset")},updated:function(){this.makeAction("Reset")}},m=u,p=(n("e620"),n("2877")),g=Object(p["a"])(m,c,d,!1,null,"92d44cd8",null),h=g.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"AddMeetingPopup"}},[n("h3",[e._v("Veranstaltungen bearbeiten")]),n("select",{attrs:{name:"meeting",id:"meeting"},on:{change:function(t){return e.makeAction("Reset")}}},e._l(this.meetings,(function(t,s){return n("option",{key:s,domProps:{value:s}},[e._v(" "+e._s(t.num)+" | "+e._s(t.name_short)+" ")])})),0),n("button",{staticClass:"spaceLeftRight",on:{click:function(t){return e.makeAction("Delete")}}},[e._v(" Löschen ")]),n("hr"),n("fieldset",{staticStyle:{"text-align":"left"}},[n("span",{staticClass:"small"},[e._v("Nummer:")]),n("input",{staticStyle:{width:"60px"},attrs:{id:"num",type:"number"}}),n("span",{staticClass:"small",staticStyle:{"padding-left":"10px"}},[e._v("Abk. Name:")]),n("input",{staticStyle:{width:"102px"},attrs:{id:"name_short",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Name:")]),n("input",{staticClass:"wide",attrs:{id:"meetings_name",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("DozentIn:")]),n("input",{staticClass:"wide",attrs:{id:"dozent",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Studiengänge:")]),n("input",{staticClass:"wide",attrs:{id:"studigang",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Semester:")]),n("input",{staticClass:"wide",attrs:{id:"semester",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Raumnummer:")]),n("input",{staticClass:"wide",attrs:{id:"roomnumber",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Wdhl.:")]),n("span",{staticClass:"spaceLeftRight",staticStyle:{"margin-left":"0"}},[e._v("Alle")]),n("input",{staticStyle:{width:"60px"},attrs:{id:"repeatedly",type:"number"}}),n("span",{staticStyle:{padding:"0 10px"}},[e._v("Woche(n), ")]),n("input",{attrs:{id:"infinity",type:"checkbox"},on:{click:function(t){return e.inputDisabler(["infinity"],["dateEnd","repeatedly"])}}}),e._v(" Dauerhaft "),n("br"),n("span",{staticClass:"small"},[e._v("Datum von:")]),n("input",{staticClass:"date",attrs:{id:"dateStart",type:"date"}}),n("br"),n("span",{staticClass:"small"},[e._v("Datum bis:")]),n("input",{attrs:{id:"dateEnd",type:"date"}}),n("br"),n("span",{staticClass:"small"},[e._v("Zeit:")]),n("select",{attrs:{name:"tStart",id:"tStart"}},e._l(e.$store.state.timings,(function(t,s){return n("option",{key:s,domProps:{value:s+1}},[e._v(" "+e._s(s+1)+".Std. "+e._s(t.tStart)+" ")])})),0),e._v(" - "),n("select",{attrs:{name:"tEnd",id:"tEnd"}},e._l(e.$store.state.timings,(function(t,s){return n("option",{key:s,domProps:{value:s+1}},[e._v(" "+e._s(s+1)+".Std. "+e._s(t.tEnd)+" ")])})),0),n("br"),n("span",{staticClass:"small"},[e._v("Angepinnt:")]),n("input",{attrs:{id:"pinned",type:"checkbox"}})]),n("span",[n("br"),n("button",{staticClass:"btnAddDelete",on:{click:function(t){return e.makeAction("+")}}},[e._v("+")]),n("button",{staticClass:"btnAddDelete",staticStyle:{width:"80px"},on:{click:function(t){return e.makeAction("Save")}}},[e._v(" Speichern ")]),n("button",{staticClass:"btnAddDelete",on:{click:function(t){return e.makeAction("Reset")}}},[e._v("Reset")])])])},f=[],y=(n("a9e3"),n("159b"),n("b0c0"),{props:{meetings:Array,type:String,person_index:Number},components:{},data:function(){return{selectedMeeting:""}},methods:{inputDisabler:function(e,t,n){"undefined"!=typeof t&&t.forEach((function(t){document.getElementById(t).disabled=document.getElementById(e).checked})),"undefined"!=typeof n&&n.forEach((function(t){document.getElementById(t).disabled=!document.getElementById(e).checked}))},makeAction:function(e){if("+"==e){console.log(e);var t=this.meetings.length;0!=t&&this.makeAction("Save");var n={num:"",name:"",name_short:"",std_start:Number("1"),duration:Number("2"),roomnumber:"",date:{start:"",repeatedly:"",end:"",infinity:!0},semester:"",studigang:"",dozent:"",pinned:!1};"calendar"==this.type?this.$store.state.meetings.push(n):"persons"==this.type&&this.$store.state.persons[this.person_index].meetings.push(n),0!=t&&this.makeAction("Reset")}else if("-"==e)console.log(e),this.meetings.pop();else if("Save"==e){console.log(e);var s=document.getElementById("meeting").value;s||(s=0);var i={num:document.getElementById("num").value,name:document.getElementById("meetings_name").value,name_short:document.getElementById("name_short").value,std_start:Number(document.getElementById("tStart").value),duration:Number(document.getElementById("tEnd").value-document.getElementById("tStart").value+1),roomnumber:document.getElementById("roomnumber").value,date:{start:document.getElementById("dateStart").value,repeatedly:Number(document.getElementById("repeatedly").value),end:document.getElementById("dateEnd").value,infinity:document.getElementById("infinity").checked},semester:document.getElementById("semester").value,studigang:document.getElementById("studigang").value,dozent:document.getElementById("dozent").value,pinned:document.getElementById("pinned").checked};"calendar"==this.type?this.$store.commit("importMeetings",{data:i,index:s}):"persons"==this.type&&(console.log(i),console.log(s),console.log(this.person_index),this.$store.commit("importMeetingsPerson",{data:i,index:s,person_index:this.person_index}))}else if("Reset"==e)if(console.log(e),0==this.meetings.length)this.makeAction("+"),document.getElementById("meeting").value=0;else{var a=document.getElementById("meeting").value,o=this.meetings[a];document.getElementById("num").value=o.num,document.getElementById("meetings_name").value=o.name,document.getElementById("name_short").value=o.name_short,document.getElementById("dateStart").value=o.date.start,document.getElementById("dateEnd").value=o.date.end,document.getElementById("repeatedly").value=o.date.repeatedly,document.getElementById("infinity").checked=o.date.infinity,document.getElementById("roomnumber").value=o.roomnumber,document.getElementById("tStart").value=o.std_start,document.getElementById("tEnd").value=o.std_start+o.duration-1,document.getElementById("semester").value=o.semester,document.getElementById("studigang").value=o.studigang,document.getElementById("dozent").value=o.dozent,document.getElementById("pinned").checked=o.pinned,o.date.infinity?(document.getElementById("dateEnd").disabled=!0,document.getElementById("repeatedly").disabled=!0):(document.getElementById("dateEnd").disabled=!1,document.getElementById("repeatedly").disabled=!1)}else if("Show"==e){console.log(e);var r=this.meetings;console.log(r)}else if("Delete"==e){console.log(e),this.makeAction("Reset");for(var l=Number(document.getElementById("meeting").value),c=this.meetings,d=l;d<c.length-1;d++)this.moveInArray(d+1,d,c);this.makeAction("-")}else console.log("Error: On makeAction")},moveInArray:function(e,t,n){var s=n[e];n[e]=n[t],n[t]=s}},mounted:function(){this.makeAction("Reset")},updated:function(){this.makeAction("Reset")}}),b=y,_=(n("c42b"),Object(p["a"])(b,v,f,!1,null,"1bbd09ff",null)),E=_.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"AddPersonsPopup"}},[n("h3",[e._v("Personen bearbeiten")]),n("select",{attrs:{name:"person",id:"person"},on:{change:function(t){return e.makeAction("Reset")}}},e._l(e.$store.state.persons,(function(t,s){return n("option",{key:s,domProps:{value:s}},[e._v(" "+e._s(t.name)+", "+e._s(t.titel)+" ")])})),0),n("button",{staticClass:"spaceLeftRight",on:{click:function(t){return e.makeAction("Delete",e.index)}}},[e._v(" Löschen ")]),n("hr"),n("fieldset",{staticStyle:{"text-align":"left"}},[n("img",{staticStyle:{border:"2px solid lightgrey",float:"right","max-width":"200px"},attrs:{src:"",height:"160",alt:"Vorschaubild ...",id:"imagePerson"}}),n("div",[n("span",{staticClass:"small"},[e._v("Name, Titel:")]),n("input",{staticClass:"name",attrs:{id:"name",type:"text"}}),e._v(" , "),n("input",{staticClass:"titel",attrs:{id:"titel",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("E-Mail:")]),n("input",{staticClass:"wide",attrs:{id:"email",type:"mail"}}),n("br"),n("span",{staticClass:"small"},[e._v("Homepage:")]),n("input",{staticClass:"wide",attrs:{id:"homepage",type:"url"}}),n("br"),n("span",{staticClass:"small"},[e._v("Tel.:")]),n("input",{staticClass:"wide",attrs:{id:"telefon",type:"tel"}}),n("br"),n("span",{staticClass:"small"},[e._v("Büroraum:")]),n("input",{staticClass:"wide",attrs:{id:"room",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Sprechzeiten:")]),n("input",{staticClass:"wide",attrs:{id:"visitTime",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Terminkalender:")]),n("button",{staticClass:"wide",staticStyle:{margin:"0 4px"},on:{click:function(t){return e.openModal()}}},[e._v(" Termine bearbeiten ")])]),n("label",{staticClass:"small",attrs:{for:"imgInputPerson"}},[e._v("Profilbild:")]),n("input",{attrs:{type:"file",id:"imgInputPerson",name:"imgInputPerson"}}),n("button",{on:{click:function(t){return e.deleteImage()}}},[e._v("Löschen")])]),n("span",[n("br"),n("button",{staticClass:"btnAddDelete",on:{click:function(t){return e.makeAction("+")}}},[e._v("+")]),n("button",{staticClass:"btnAddDelete",staticStyle:{width:"80px"},on:{click:function(t){return e.makeAction("Save")}}},[e._v(" Speichern ")]),n("button",{staticClass:"btnAddDelete",on:{click:function(t){return e.makeAction("Reset")}}},[e._v("Reset")]),n("button",{staticClass:"btnAddDelete",on:{click:function(t){return e.makeAction("Show")}}},[e._v("Show")])])])},k=[],B=n("2f62");s["a"].use(B["a"]);var x=s["a"].observable({database:"This is empty"}),C=s["a"].observable({data:"This is base64File"}),A=new B["a"].Store({state:{timings:[],meetings:[],persons:[],announcements:[],setup:{},logged_in:!1},getters:{},mutations:{importTimings:function(e,t){e.timings=t.data},importMeetings:function(e,t){e.meetings[t.index]=t.data},importMeetingsPerson:function(e,t){e.persons[t.person_index].meetings[t.index]=t.data},importPersons:function(e,t){e.persons[t.index]=t.data},importAnnouncements:function(e,t){e.announcements[t.index]=t.data},importSetup:function(e,t){e.setup=t.data}},actions:{}}),w={props:{persons:Array},data:function(){return{}},methods:{openModal:function(){try{this.$modal.show(E,{meetings:this.$store.state.persons[document.getElementById("person").value].meetings,type:"persons",person_index:Number(document.getElementById("person").value)},{height:"auto"})}catch(e){console.log("Error on AddMeetingPopup."),console.log(e)}},deleteImage:function(){document.getElementById("imagePerson").src=""},makeAction:function(e){if("+"==e){console.log(e);var t=this.persons.length;0!=t&&this.makeAction("Save");var n={name:"",titel:"",email:"",homepage:"",telefon:"",room:"",visitTime:"",meetings:[{num:"",name:"",name_short:"",std_start:Number("1"),duration:Number("2"),roomnumber:"",date:{start:"",repeatedly:"",end:"",infinity:!0},semester:"",studigang:"",dozent:"",pinned:!1}],base64Code:""};this.$store.state.persons.push(n)}else if("-"==e)console.log(e),this.persons.pop();else if("Save"==e){console.log(e);var s=document.getElementById("person").value,i=this.persons[s].meetings,a={name:document.getElementById("name").value,titel:document.getElementById("titel").value,email:document.getElementById("email").value,homepage:document.getElementById("homepage").value,telefon:document.getElementById("telefon").value,room:document.getElementById("room").value,visitTime:document.getElementById("visitTime").value,base64Code:document.getElementById("imagePerson").src,meetings:i};this.$store.commit("importPersons",{data:a,index:s})}else if("Reset"==e)if(console.log(e),0==this.persons.length)this.makeAction("+"),document.getElementById("person").value=0;else{var o=document.getElementById("person").value,r=this.$store.state.persons[o];document.getElementById("name").value=r.name,document.getElementById("titel").value=r.titel,document.getElementById("email").value=r.email,document.getElementById("homepage").value=r.homepage,document.getElementById("telefon").value=r.telefon,document.getElementById("room").value=r.room,document.getElementById("visitTime").value=r.visitTime,document.getElementById("imagePerson").src=r.base64Code}else if("Show"==e){console.log(e);var l=this.persons;console.log(l)}else if("Delete"==e){console.log(e),this.makeAction("Reset");for(var c=Number(document.getElementById("person").value),d=this.persons,u=c;u<d.length-1;u++)this.moveInArray(u+1,u,d);this.makeAction("-")}else console.log("Error: On AddPersonsPopup makeAction")},moveInArray:function(e,t,n){var s=n[e];n[e]=n[t],n[t]=s}},mounted:function(){this.makeAction("Reset"),document.getElementById("imgInputPerson").addEventListener("change",(function(){var e=new FileReader;e.onload=function(){C.data=e.result,document.getElementById("imagePerson").src=e.result,console.log(C.data)},e.readAsDataURL(this.files[0])}))},updated:function(){this.makeAction("Reset")}},S=w,$=(n("4a1f"),Object(p["a"])(S,I,k,!1,null,"53af0491",null)),R=$.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"AddAnnouncementsPopup"}},[n("h3",[e._v("Benachrichtigungen bearbeiten")]),n("select",{attrs:{name:"announcement",id:"announcement"},on:{change:function(t){return e.makeAction("Reset")}}},e._l(this.announcements,(function(t,s){return n("option",{key:s,domProps:{value:s}},[e._v(" "+e._s(t.date)+" | "+e._s(t.title)+" ")])})),0),n("button",{staticClass:"spaceLeftRight",on:{click:function(t){return e.makeAction("Delete")}}},[e._v(" Löschen ")]),n("hr"),n("fieldset",[n("span",{staticClass:"small"},[e._v("Datum:")]),n("input",{staticClass:"wide",attrs:{id:"date",type:"date"}}),n("br"),n("span",{staticClass:"small"},[e._v("Uhrzeit:")]),n("input",{staticClass:"wide",attrs:{id:"time",type:"time"}}),n("br"),n("span",{staticClass:"small"},[e._v("Titel:")]),n("input",{staticClass:"wide",attrs:{id:"title",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Beschreibung:")]),n("input",{staticClass:"wide",attrs:{id:"content",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Ersteller:")]),n("input",{staticClass:"wide",attrs:{id:"creator",type:"text"}}),n("br"),n("span",{staticClass:"small"},[e._v("Anpinnen:")]),n("input",{staticClass:"wide",attrs:{id:"pinned",type:"checkbox"},on:{click:function(t){return e.inputDisabler("pinned",[],["timerActive"])}}}),n("br"),n("span",{staticClass:"small"},[e._v("Timer:")]),n("input",{staticClass:"wide",attrs:{id:"timerActive",type:"checkbox"},on:{click:function(t){return e.inputDisabler("timerActive",[],["timerDateTime"])}}}),n("br"),n("span",{staticClass:"small"}),n("input",{staticClass:"wide",attrs:{id:"timerDateTime",type:"datetime-local"}}),n("br")]),n("span",[n("br"),n("button",{staticClass:"btnAddDelete",on:{click:function(t){return e.makeAction("+")}}},[e._v("+")]),n("button",{staticClass:"btnAddDelete",staticStyle:{width:"80px"},on:{click:function(t){return e.makeAction("Save")}}},[e._v(" Speichern ")]),n("button",{staticClass:"btnAddDelete",on:{click:function(t){return e.makeAction("Reset")}}},[e._v("Reset")])])])},P=[],L={props:{announcements:Array},methods:{inputDisabler:function(e,t,n){"undefined"!=typeof t&&t.forEach((function(t){document.getElementById(t).disabled=document.getElementById(e).checked})),"undefined"!=typeof n&&n.forEach((function(t){document.getElementById(t).disabled=!document.getElementById(e).checked}))},makeAction:function(e){if("+"==e){console.log(e);var t=this.announcements.length;0!=t&&this.makeAction("Save");var n={date:"",time:"",content:"",creator:"",title:"",pinned:"",countDownDate:""};this.$store.state.announcements.push(n)}else if("-"==e)console.log(e),this.announcements.pop();else if("Save"==e){console.log(e);var s=document.getElementById("announcement").value,i={date:document.getElementById("date").value,time:document.getElementById("time").value,content:document.getElementById("content").value,creator:document.getElementById("creator").value,title:document.getElementById("title").value,pinned:document.getElementById("pinned").checked,timerActive:document.getElementById("timerActive").checked&&document.getElementById("pinned").checked,countDownDate:document.getElementById("timerDateTime").value};this.$store.commit("importAnnouncements",{data:i,index:s})}else if("Reset"==e)if(console.log(e),0==this.announcements.length)this.makeAction("+"),document.getElementById("announcement").value=0;else{var a=document.getElementById("announcement").value,o=this.announcements[a];document.getElementById("date").value=o.date,document.getElementById("time").value=o.time,document.getElementById("content").value=o.content,document.getElementById("creator").value=o.creator,document.getElementById("title").value=o.title,document.getElementById("pinned").checked=o.pinned,document.getElementById("timerActive").checked=o.timerActive,o.pinned?(document.getElementById("timerDateTime").disabled=!1,document.getElementById("timerActive").disabled=!1,o.timerActive?document.getElementById("timerDateTime").value=o.countDownDate:(document.getElementById("timerDateTime").value="",document.getElementById("timerDateTime").disabled=!0)):(document.getElementById("timerDateTime").value="",document.getElementById("timerActive").checked=!1,document.getElementById("timerDateTime").disabled=!0,document.getElementById("timerActive").disabled=!0)}else if("Show"==e){console.log(e);var r=this.announcements;console.log(r)}else if("Delete"==e){console.log(e),this.makeAction("Reset");for(var l=Number(document.getElementById("announcement").value),c=this.announcements,d=l;d<c.length-1;d++)this.moveInArray(d+1,d,c);this.makeAction("-")}else console.log("Error: On makeAction")},moveInArray:function(e,t,n){var s=n[e];n[e]=n[t],n[t]=s,console.log("Moved "+e+" to "+t+"on Array "+n)}},mounted:function(){this.makeAction("Reset")},updated:function(){this.makeAction("Reset")}},T=L,O=(n("a360"),Object(p["a"])(T,D,P,!1,null,"dadbe05e",null)),j=O.exports,N={components:{},data:function(){return{countTimings:this.$store.state.timings.length,countMeetings:this.$store.state.meetings.length,countPersons:this.$store.state.persons.length,countAnnouncements:this.$store.state.announcements.length}},methods:{checkStore:function(){this.countTimings=this.$store.state.timings.length,this.countMeetings=this.$store.state.meetings.length,this.countPersons=this.$store.state.persons.length,this.countAnnouncements=this.$store.state.announcements.length},openModal:function(e){if("timings"==e)try{this.$modal.show(h,{},{height:"auto"})}catch(t){console.log("Error open AddTimingsPopup."),console.log(t)}else if("meetings"==e)try{this.$modal.show(E,{meetings:this.$store.state.meetings,type:"calendar"},{height:"auto"})}catch(t){console.log("Error open AddMeetingPopup."),console.log(t)}else if("persons"==e)try{this.$modal.show(R,{persons:this.$store.state.persons},{height:"auto",width:"700px"})}catch(t){console.log("Error open AddPersonsPopup."),console.log(t)}else if("announcements"==e)try{this.$modal.show(j,{announcements:this.$store.state.announcements},{height:"auto"})}catch(t){console.log("Error open AddAnnouncementsPopup."),console.log(t)}}},mounted:function(){var e=this;setInterval((function(){e.checkStore()}),1e3)}},M=N,z=(n("e3d1"),Object(p["a"])(M,r,l,!1,null,"3368a5d8",null)),J=z.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("fieldset",[n("legend",[e._v("Geräte-Setup")]),n("div",{staticClass:"horizontal",staticStyle:{display:"flex"}},[n("div",{staticClass:"spaceLeftRight",staticStyle:{display:"flex","justify-content":"space-evenly"}},[e._m(0),e._m(1),n("div",{staticClass:"spaceLeftRight"},[n("button",{on:{click:function(t){return e.openModal()}}},[e._v("Logo ändern")])])])]),n("br"),e._m(2)])])},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spaceLeftRight",staticStyle:{display:"flex","justify-content":"center"}},[n("div",[n("input",{attrs:{type:"radio",name:"roomtype",id:"buero",value:"nameA"}}),n("br"),n("input",{attrs:{type:"radio",name:"roomtype",id:"vl",value:"nameB"}})]),n("div",{staticStyle:{"text-align":"left"}},[n("label",{staticClass:"spaceLeftRight",attrs:{for:"buero"}},[e._v("Büroraum")]),n("br"),n("label",{staticClass:"spaceLeftRight",attrs:{for:"vl"}},[e._v("Vorlesungsraum")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"border-left":"1px solid black","padding-left":"5px"}},[n("label",{staticClass:"small",attrs:{for:"desc"}},[e._v("Beschreibung:")]),n("br"),n("input",{staticStyle:{width:"200px"},attrs:{id:"desc",name:"desc",type:"text"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"horizontal",staticStyle:{display:"flex","justify-content":"center"}},[n("div",{staticStyle:{display:"flex","justify-content":"center"}},[n("div",{staticClass:"spaceLeftRight"},[n("label",{staticClass:"spaceLeftRight",attrs:{for:"raumnummer"}},[e._v("Raumnummer:")]),n("br"),n("input",{attrs:{type:"text",name:"raumnummer",id:"raumnummer"}})]),n("div",{staticClass:"spaceLeftRight"},[n("label",{staticClass:"spaceLeftRight",attrs:{for:"fachbereich"}},[e._v("Fachbereich:")]),n("br"),n("input",{attrs:{type:"text",id:"fachbereich"}})]),n("div",{staticClass:"spaceLeftRight"},[n("label",{staticClass:"spaceLeftRight",attrs:{for:"studienbereich"}},[e._v("Studienbereich:")]),n("br"),n("input",{attrs:{type:"text",name:"studienbereich",id:"studienbereich"}})])])])}],U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"uploadLogo"}},[n("h2",{staticStyle:{"text-align":"center"}},[e._v("Logo ändern")]),n("div",[n("input",{attrs:{type:"file",id:"imgLogoInput"}}),n("br"),n("img",{staticStyle:{border:"1px solid black","max-height":"100px","max-width":"550px",padding:"2px"},attrs:{src:"",alt:"Image preview...",id:"imageLogo"}}),n("br"),n("button",{on:{click:function(t){return e.saveLogo()}}},[e._v("Save")])])])},V=[],Z={methods:{saveLogo:function(){this.$store.state.setup.base64Code=document.getElementById("imageLogo").src,document.getElementById("logo").src=document.getElementById("imageLogo").src}},mounted:function(){document.getElementById("imgLogoInput").addEventListener("change",(function(){var e=new FileReader;e.onload=function(){C.data=e.result,document.getElementById("imageLogo").src=e.result,console.log(C.data)},e.readAsDataURL(this.files[0])}))}},G=Z,H=(n("8c80"),Object(p["a"])(G,U,V,!1,null,"b0573ae2",null)),K=H.exports,q={components:{},methods:{openModal:function(){try{this.$modal.show(K,{},{height:"auto",width:"610px"})}catch(e){console.log("Error on LogoChanger."),console.log(e)}},writeSetup:function(){var e=this.$store.state.setup;document.getElementById("raumnummer").value=e.room.num,document.getElementById("fachbereich").value=e.fachbereich,document.getElementById("studienbereich").value=e.studienbereich,document.getElementById("desc").value=e.room.desc,"buero"==e.room.type?document.getElementById("buero").checked=!0:"vl"==e.room.type&&(document.getElementById("vl").checked=!0)}},watch:{"$store.state.setup":{handler:function(){console.log("Setup updated!"),this.writeSetup()}}}},Q=q,X=Object(p["a"])(Q,W,F,!1,null,null,null),Y=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{directives:[{name:"show",rawName:"v-show",value:0==this.$store.state.logged_in,expression:"this.$store.state.logged_in == false"}],attrs:{for:"pw"}},[e._v("Passwort:")]),n("input",{directives:[{name:"show",rawName:"v-show",value:0==this.$store.state.logged_in,expression:"this.$store.state.logged_in == false"}],staticStyle:{margin:"0 5px"},attrs:{type:"text",id:"pw",name:"pw"}}),n("button",{directives:[{name:"show",rawName:"v-show",value:0==this.$store.state.logged_in,expression:"this.$store.state.logged_in == false"}],attrs:{id:"bt_login"},on:{click:function(t){return e.checkPW()}}},[e._v(" Login ")])])},te=[],ne={methods:{checkPW:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Login"),t={},t.input=document.getElementById("pw").value,console.log("Check PW"),console.log("Input: "),console.log(t),n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=9,fetch("/pw",n);case 9:return s=e.sent,e.next=12,s.json();case 12:i=e.sent,console.log("Response:"),"correct password"==i?(console.log("Correct Password"),this.$store.state.logged_in=!0):(console.log("Wrong Password"),document.getElementById("pw").value="",this.$store.state.logged_in=!1);case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},se=ne,ie=Object(p["a"])(se,ee,te,!1,null,"7816ccf3",null),ae=ie.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{directives:[{name:"show",rawName:"v-show",value:1==this.$store.state.logged_in,expression:"this.$store.state.logged_in == true"}],attrs:{id:"bt_logout"},on:{click:function(t){return e.logout()}}},[e._v(" Logout ")])])},re=[],le={methods:{logout:function(){this.$parent.sendData(),console.log("Logout"),this.$store.state.logged_in=!1}}},ce=le,de=Object(p["a"])(ce,oe,re,!1,null,null,null),ue=de.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{border:"2px solid black",padding:"2px"}},[n("input",{attrs:{id:"fileupload",type:"file",accept:".json"}}),n("span",{attrs:{id:"output"}}),n("button",{staticClass:"spaceLeftRight",attrs:{id:"uploadButton"},on:{click:function(t){return e.uploadData()}}},[e._v(" Upload ")]),n("button",{staticClass:"spaceLeftRight",attrs:{id:"downloadButton"},on:{click:function(t){return e.downloadData()}}},[e._v(" Download ")])])},pe=[],ge={methods:{uploadData:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(document.getElementById("uploadButton").style.backgroundColor="lightgrey","This is empty"!=x.database){t.next=5;break}console.log("Keine Datei ausgewählt."),t.next=15;break;case 5:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(x.database)},t.next=8,fetch("/send",n);case 8:return s=t.sent,t.next=11,s.json();case 11:i=t.sent,console.log("Response:"),console.log(i),e.$parent.recieveData();case 15:case"end":return t.stop()}}),t)})))()},downloadData:function(){var e=this.$store.state,t={};t.timings=e.timings,t.persons=e.persons,t.meetings=e.meetings,t.announcements=e.announcements,t.setup=e.setup;var n="roomacle_data.json",s=JSON.stringify(t),i=document.createElement("a");i.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(s)),i.setAttribute("download",n),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)}},mounted:function(){document.getElementById("fileupload").addEventListener("change",(function(){var e=new FileReader;e.onload=function(){x.database=JSON.parse(e.result),document.getElementById("uploadButton").style.backgroundColor="green"},e.readAsText(this.files[0])}))}},he=ge,ve=Object(p["a"])(he,me,pe,!1,null,null,null),fe=ve.exports,ye={name:"App",components:{DatabaseCheck:J,DeviceSetup:Y,Login:ae,Logout:ue,ImportExport:fe},methods:{saveSetup:function(){var e,t=document.getElementById("buero").checked,n=document.getElementById("vl").checked;t?e="buero":n&&(e="vl");var s={base64Code:document.getElementById("logo").src,room:{num:document.getElementById("raumnummer").value,type:e,desc:document.getElementById("desc").value},fachbereich:document.getElementById("fachbereich").value,studienbereich:document.getElementById("studienbereich").value};this.$store.state.setup=s},sendData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.saveSetup(),t={},t.timings=this.$store.state.timings,t.meetings=this.$store.state.meetings,t.persons=this.$store.state.persons,t.setup=this.$store.state.setup,t.announcements=this.$store.state.announcements,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=10,fetch("/send",n);case 10:return s=e.sent,e.next=13,s.json();case 13:i=e.sent,console.log("Response:"),console.log(i);case 16:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),recieveData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,s,i,a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Recieve all Data"),n={method:"POST",headers:{"Content-Type":"application/json"}},s={type:""},i=[],s.type="timings",n.body=JSON.stringify(s),e.next=8,fetch("/recieve",n);case 8:return t=e.sent,e.next=11,t.json();case 11:return i.timings=e.sent,s.type="meetings",n.body=JSON.stringify(s),e.next=16,fetch("/recieve",n);case 16:return t=e.sent,e.next=19,t.json();case 19:return i.meetings=e.sent,s.type="persons",n.body=JSON.stringify(s),e.next=24,fetch("/recieve",n);case 24:return t=e.sent,e.next=27,t.json();case 27:return i.persons=e.sent,s.type="announcements",n.body=JSON.stringify(s),e.next=32,fetch("/recieve",n);case 32:return t=e.sent,e.next=35,t.json();case 35:return i.announcements=e.sent,s.type="setup",n.body=JSON.stringify(s),e.next=40,fetch("/recieve",n);case 40:return t=e.sent,e.next=43,t.json();case 43:for(i.setup=e.sent,this.$store.commit("importTimings",{data:i.timings}),a=0;a<i.meetings.length;a++)this.$store.commit("importMeetings",{data:i.meetings[a],index:a});for(o=0;o<i.persons.length;o++)this.$store.commit("importPersons",{data:i.persons[o],index:o});for(r=0;r<i.announcements.length;r++)this.$store.commit("importAnnouncements",{data:i.announcements[r],index:r});this.$store.commit("importSetup",{data:i.setup[0]});case 49:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},watch:{"$store.state.logged_in":{handler:function(){this.recieveData()}}}},be=ye,_e=(n("034f"),Object(p["a"])(be,i,a,!1,null,null,null)),Ee=_e.exports,Ie=n("1881"),ke=n.n(Ie);s["a"].use(ke.a,{dynamicDefaults:{scrollable:!0}}),s["a"].config.productionTip=!1,new s["a"]({store:A,render:function(e){return e(Ee)}}).$mount("#app")},"5a27":function(e,t,n){},"85ec":function(e,t,n){},"8c80":function(e,t,n){"use strict";n("5a27")},a360:function(e,t,n){"use strict";n("c512")},c42b:function(e,t,n){"use strict";n("2873")},c512:function(e,t,n){},dfd3:function(e,t,n){},e365:function(e,t,n){},e3d1:function(e,t,n){"use strict";n("e365")},e620:function(e,t,n){"use strict";n("dfd3")}});
//# sourceMappingURL=app.79893e7a.js.map