(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{153:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),s=n.n(r),i=n(85),o=n(47),j=n.n(o),l=n(67),u=n(28),d=n(187),b=n(190),h=n(189),O=n(191),x=n(195),m=n(193),p=n(192),f=n(194),g=n(37),v=n(2),y=Object(d.a)((function(e){return{root:{flexGrow:1},media:{height:200},content:{height:150},nav:{textDecoration:"None"}}})),C=function(e){var t=y();return Object(v.jsx)("div",{className:t.root,children:Object(v.jsx)(h.a,{container:!0,spacing:2,direction:"row",justify:"flex-start",alignItems:"flex-start",children:e.countries.map((function(e){var n=e.numericCode,a=e.flag,c=e.name,r=e.population,s=e.region,i=e.capital,o=e.alpha3Code;return Object(v.jsx)(h.a,{item:!0,xs:12,sm:6,md:3,children:Object(v.jsx)(g.b,{className:t.nav,to:{pathname:"/rest-countries/"+o},children:Object(v.jsxs)(b.a,{children:[Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{className:t.media,image:a}),Object(v.jsxs)(m.a,{className:t.content,children:[Object(v.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h2",className:t.title,children:c}),Object(v.jsxs)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:["Population: ",r]}),Object(v.jsxs)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:["Region: ",s]}),Object(v.jsxs)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:["Capital: ",i]})]})]}),Object(v.jsx)(x.a,{})]})})},n)}))})})},N=n(203),w=n(204),S=n(196),B=n(202),k=Object(d.a)((function(e){return{formControl:{minWidth:230,minHeight:50,marginBottom:20},selectEmpty:{marginTop:e.spacing(2)}}}));function A(e){var t=k();return Object(v.jsx)("div",{children:Object(v.jsxs)(S.a,{variant:"outlined",className:t.formControl,children:[Object(v.jsx)(N.a,{id:"demo-simple-select-outlined-label",children:"Filter By Region"}),Object(v.jsxs)(B.a,{onChange:function(t){e.filterCountries(t.target.value)},children:[Object(v.jsx)(w.a,{value:"",children:Object(v.jsx)("em",{children:"All"})}),Object(v.jsx)(w.a,{value:"Africa",children:"Africa"}),Object(v.jsx)(w.a,{value:"Americas",children:"Americas"}),Object(v.jsx)(w.a,{value:"Asia",children:"Asia"}),Object(v.jsx)(w.a,{value:"Europe",children:"Europe"}),Object(v.jsx)(w.a,{value:"Oceania",children:"Oceania"})]})]})})}var E=n(101),L=n.n(E),D=Object(d.a)((function(e){return{root:{maxWidth:320,padding:2}}}));var I=function(e){return D(),Object(v.jsx)("div",{className:"classes.root",variant:"body1",children:Object(v.jsx)(L.a,{placeholder:"Search by Country Name",onChange:function(t){e.searchCountries(t)}})})},W=n(197),M=Object(d.a)((function(e){return{root:{padding:30},paper:{marginBottom:30},flex:{display:"flex",justifyContent:"space-between"},toolbar:{justifyContent:"space-between"}}}));var R=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(u.a)(r,2),o=s[0],d=s[1],b=Object(a.useState)([]),h=Object(u.a)(b,2),O=(h[0],h[1]),x=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),d(n),O(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){x()}),[]);var m=M();return Object(v.jsx)("div",{className:m.root,children:Object(v.jsxs)(W.a,{children:[Object(v.jsxs)("div",{className:m.flex,children:[Object(v.jsx)(I,{searchCountries:function(e){var t=Object(i.a)(n);t=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})),d(t)}}),Object(v.jsx)(A,{filterCountries:function(e){var t=Object(i.a)(n);t=t.filter((function(t){return t.region.includes(e)})),d(t)}})]}),Object(v.jsx)(C,{countries:o})]})})},T=n(198),J=n(102),P=n.n(J),z=Object(d.a)((function(e){return{root:{overflow:"hidden",padding:e.spacing(5)},buttonStyle:{marginBottom:50},img:{marginBottom:"30%",maxWidth:350,minWidth:"100%",height:"auto"},nav:{textDecoration:"None"}}})),F="https://restcountries.eu/rest/v2/alpha/";var G=n(199),H=n(105),q=n(200),K=n(201),Q=n(82),U=n(103),V=n.n(U),X=Object(d.a)((function(e){return{root:{padding:30},paper:{marginBottom:30},toolbar:{justifyContent:"space-between"}}}));var Y=function(){var e=Object(G.a)("(prefers-color-scheme: dark)"),t=c.a.useState(e),n=Object(u.a)(t,2),r=n[0],s=n[1],i=c.a.useMemo((function(){return Object(H.a)({palette:{type:r?"dark":"light"}})}));Object(a.useEffect)((function(){s(e)}),[e]);var o=X();return Object(v.jsx)("div",{className:o.root,children:Object(v.jsxs)(W.a,{theme:i,children:[Object(v.jsx)(q.a,{}),Object(v.jsx)(Q.a,{position:"static",className:o.paper,children:Object(v.jsxs)(K.a,{className:o.toolbar,children:[Object(v.jsx)(f.a,{variant:"h5",children:"Where in the world?"}),Object(v.jsxs)(T.a,{onClick:function(){s(!r)},children:[Object(v.jsx)(V.a,{}),"Dark Mode"]})]})})]})})},Z=n(104),$=n.n(Z),_=Object(d.a)((function(e){return{paper:{textAlign:"center",height:60,paddingTop:20}}})),ee=function(){var e=_();return Object(v.jsx)("div",{children:Object(v.jsxs)(Q.a,{className:e.paper,children:[Object(v.jsx)($.a,{style:{fontSize:"small"}})," Copyright 2021. Challenge by frontend Mentor. Coded by Maksuda Islam Lima."]})})},te=n(11);s.a.render(Object(v.jsxs)(g.a,{children:[Object(v.jsx)(Y,{}),Object(v.jsxs)(W.a,{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(te.a,{path:"/rest-countries",exact:!0,component:R}),Object(v.jsx)(te.a,{path:"/rest-countries/:alpha3Code",exact:!0,component:function(e){var t=z(),n=Object(a.useState)(F+window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1)),c=Object(u.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)([]),o=Object(u.a)(i,2),d=o[0],b=o[1],O=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F+window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O()}),[r]),Object(v.jsx)("div",{className:t.root,children:Object(v.jsxs)(h.a,{lg:12,item:!0,container:!0,spacing:3,children:[Object(v.jsx)(h.a,{item:!0,lg:12,xs:12,children:Object(v.jsxs)(g.b,{className:t.nav,to:{pathname:"/rest-countries"},children:[Object(v.jsxs)(T.a,{variant:"outlined",className:t.buttonStyle,children:[" ",Object(v.jsx)(P.a,{})," Back"]})," "]})}),Object(v.jsx)(h.a,{item:!0,lg:4,xs:12,children:Object(v.jsx)("img",{className:t.img,alt:"complex",src:d.flag})}),Object(v.jsxs)(h.a,{item:!0,lg:4,xs:12,children:[Object(v.jsx)(f.a,{gutterBottom:!0,variant:"h4",children:Object(v.jsx)("strong",{children:d.name})}),Object(v.jsxs)(f.a,{variant:"body2",gutterBottom:!0,children:[Object(v.jsxs)(f.a,{children:[" ",Object(v.jsx)("strong",{children:"Native Name : "}),d.nativeName," "]}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)("strong",{children:"Population : "}),d.population," "]}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)("strong",{children:"Region : "}),d.region," "]}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)("strong",{children:"Sub Region : "}),d.subregion," "]}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)("strong",{children:"Capital : "}),d.capital," "]})]}),Object(v.jsxs)(f.a,{variant:"body3",style:{cursor:"pointer"},children:[Object(v.jsx)("strong",{children:"Border Countries : "}),void 0==d.borders?"":d.borders.map((function(e){return Object(v.jsx)(g.b,{className:t.nav,to:{pathname:"/rest-countries/"+e},onClick:function(){s(F+"/rest-countries/"+e)},children:Object(v.jsx)(T.a,{variant:"outlined",style:{margin:3},children:e})})}))]})]}),Object(v.jsx)(h.a,{item:!0,lg:4,xs:12,children:Object(v.jsxs)(f.a,{variant:"body2",style:{marginTop:40},gutterBottom:!0,children:[Object(v.jsxs)(f.a,{children:[Object(v.jsx)("strong",{children:"Top Level Domain : "}),void 0==d.topLevelDomain?"":d.topLevelDomain.join(", ")]}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)("strong",{children:"Currencies : "}),void 0==d.currencies?"":d.currencies.map((function(e){return e.name})).join(", ")]}),Object(v.jsxs)(f.a,{children:[Object(v.jsx)("strong",{children:"Languages : "}),void 0==d.languages?"":d.languages.map((function(e){return e.name})).join(", ")]})]})})]})})}})]}),Object(v.jsx)(ee,{})]})]}),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.ed53a51f.chunk.js.map