(this["webpackJsonptik-tok-clone"]=this["webpackJsonptik-tok-clone"]||[]).push([[0],{23:function(e,s,c){},24:function(e,s,c){},25:function(e,s,c){},26:function(e,s,c){},32:function(e,s,c){},34:function(e,s,c){"use strict";c.r(s);var t=c(1),i=c(0),a=c.n(i),o=c(7),r=c.n(o),n=(c(23),c(24),c(8)),d=(c(25),c(26),c(11)),l=c.n(d),b=c(10);var v=function(e){var s=e.channel,c=e.description,i=e.song;return Object(t.jsxs)("div",{className:"videoFooter",children:[Object(t.jsxs)("div",{className:"videoFooter__text",children:[Object(t.jsxs)("h3",{children:["@",s]}),Object(t.jsx)("p",{children:c}),Object(t.jsxs)("div",{className:"videoFooter__ticker",children:[Object(t.jsx)(l.a,{className:"videoFooter__icon"}),Object(t.jsx)(b.a,{mode:"smooth",className:"ticker",children:function(e){e.index;return Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("p",{children:[" ",i]})})}})]})]}),Object(t.jsx)("img",{className:"videoFooter__record",src:"https://static.thenounproject.com/png/934821-200.png",alt:"Recod"})]})},j=(c(32),c(13)),m=c.n(j),p=c(14),z=c.n(p),h=c(15),k=c.n(h),u=c(16),f=c.n(u);var g=function(e){var s=e.likes,c=e.shares,a=e.messages,o=Object(i.useState)(!1),r=Object(n.a)(o,2),d=r[0],l=r[1];return Object(t.jsxs)("div",{className:"videoSidebar",children:[Object(t.jsxs)("div",{className:"videoSidebar__button",children:[d?Object(t.jsx)(m.a,{onClick:function(e){l(!1)}}):Object(t.jsx)(z.a,{onClick:function(){l(!0)}}),Object(t.jsx)("p",{children:d?s+=1:s})]}),Object(t.jsxs)("div",{className:"videoSidebar__button",children:[Object(t.jsx)(k.a,{}),Object(t.jsx)("p",{children:a})]}),Object(t.jsxs)("div",{className:"videoSidebar__button",children:[Object(t.jsx)(f.a,{}),Object(t.jsx)("p",{children:c})]})]})};var O=function(e){var s=e.url,c=e.channel,a=e.description,o=e.song,r=e.likes,d=e.messages,l=e.shares,b=Object(i.useState)(!1),j=Object(n.a)(b,2),m=j[0],p=j[1],z=Object(i.useRef)(null);return Object(t.jsxs)("div",{className:"video",children:[Object(t.jsx)("video",{className:"video__player",loop:!0,onClick:function(){m?(z.current.pause(),p(!1)):(z.current.play(),p(!0))},ref:z,src:s}),Object(t.jsx)(v,{channel:c,description:a,song:o}),Object(t.jsx)(g,{likes:r,messages:d,shares:l})]})};var _=function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("h1",{children:"Hello Tik-Tok Clone"}),Object(t.jsxs)("div",{className:"app__videos",children:[Object(t.jsx)(O,{url:"https://v16m.tiktokcdn.com/25b950d395c80e4eb7c905579c1bdbe6/5fff58dc/video/tos/alisg/tos-alisg-pve-0037c001/4883f1cad13d4652ac0e656b56148633/?a=1233&br=2652&bt=1326&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202101131432170101891940680D0FE842&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2lxdWdydTg6eTMzZzczM0ApNGlnZzlkN2QzNzpnZjo4ZWc0NWZzYzA0aTJfLS1jMTRzczU1MWAzYy4vXzEtNWMxNV46Yw%3D%3D&vl=&vr=",channel:"azontv_rasmiy",description:"Allohu Akbar",song:"Original azonTv sound",likes:123,messages:400,shares:200}),Object(t.jsx)(O,{url:"https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/913f795baccd432b91809c28fc56cd66/?a=1988&br=376&bt=188&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568492&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=Mzdtb3Jpd21keTMzNDczM0ApaDc5NWhnNjw2N2U3OjU4N2diMWFkYWFzNGdfLS0yMTRzcy5fLzFfNi8vMDE1YWI2NjE6Yw%3D%3D&signature=b92197addbd0a57c85e02a761c75a2bc&tk=tt_webid_v2&vl=&vr=",channel:"azontv_rasmiy",description:"Allohu Akbar",song:"Original azonTv sound",likes:123,messages:400,shares:200}),Object(t.jsx)(O,{url:"https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/1848cfc1a3fd4082bef79acdb92fc9e8/?a=1988&br=426&bt=213&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568494&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=Mzp2bmtlZWxkeTMzNjczM0ApNjo8aGhlZTw4N2g6Nmc6M2draTFwazJlMmdfLS00MTRzczIzLzY1MDExMDY1M15iYjQ6Yw%3D%3D&signature=34aec44f92a825a57fff9e677400a5df&tk=tt_webid_v2&vl=&vr=",channel:"azontv_rasmiy",description:"Allohu Akbar",song:"Original azonTv sound",likes:123,messages:400,shares:200}),Object(t.jsx)(O,{url:"https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/4591315b19874fbabb195ad19e81a243/?a=1988&br=424&bt=212&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568494&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=MzRsZW5rbHA3eTMzNTczM0ApPDozNWU7Z2RmN2c8NmZnZWdzMDBuMzRlX2VfLS1gMTRzcy1hYjYzYTIzNmEvLi5eMzM6Yw%3D%3D&signature=048003224bb52dfb74461a9cff17bb52&tk=tt_webid_v2&vl=&vr=",channel:"azontv_rasmiy",description:"Allohu Akbar",song:"Original azonTv sound",likes:123,messages:400,shares:200}),Object(t.jsx)(O,{url:"https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/84d9ce5f17bb4445a1771f286180c79d/?a=1988&br=458&bt=229&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568489&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=M2p5aXRzOm43eTMzOjczM0ApOmhpOjxlOztnN2k5Zzk7NmcwLy1uX24uNmVfLS0vMTRzcy0zMl8yXjJeXzItNF9gM186Yw%3D%3D&signature=e13ced83c49f905216177d4c5f91bec6&tk=tt_webid_v2&vl=&vr=",channel:"azontv_rasmiy",description:"Allohu Akbar",song:"Original azonTv sound",likes:123,messages:400,shares:200}),Object(t.jsx)(O,{url:"https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/2265b9fdfa0a42f4acb066960c0c899c/?a=1988&br=388&bt=194&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1610568477&l=202101131407150101890491561B0F5A35&lr=tiktok_m&mime_type=video_mp4&policy=2&qs=0&rc=M3FvcG93aXE3eTMzZDczM0ApOzc3PDM8aDw6NzxmNDZoPGdoc21fMGNyM2VfLS0tMTRzc2FgNi8wYC9gLWMwXzJhL186Yw%3D%3D&signature=69c9f804afaec9621796cc7b5867e739&tk=tt_webid_v2&vl=&vr=",channel:"azontv_rasmiy",description:"Allohu Akbar",song:"Original azonTv sound",likes:123,messages:400,shares:200}),Object(t.jsx)(O,{url:"https://v77.tiktokcdn.com/c0b7e8c52ada5c849b91c9ef301d16d1/5fff6f37/video/tos/useast2a/tos-useast2a-pve-0068/035d47d085324c9ca37d52634c3f035b/?a=1180&br=4112&bt=2056&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202101131607240101901880170614430A&lr=tiktok&mime_type=video_mp4&qs=0&rc=ajk2O3ZqM2t3eTMzZzczM0ApZDVoaTs3PGRpNzs3NDg6NGdvNWVqX3ItMWlfLS1fMTZzczIzYjEzMmFhLTRgLzE2LTY6Yw%3D%3D&vl=&vr=",channel:"azontv_rasmiy",description:"Allohu Akbar",song:"Original azonTv sound",likes:123,messages:400,shares:200})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(s){var c=s.getCLS,t=s.getFID,i=s.getFCP,a=s.getLCP,o=s.getTTFB;c(e),t(e),i(e),a(e),o(e)}))};r.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(_,{})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.ba01a2ea.chunk.js.map