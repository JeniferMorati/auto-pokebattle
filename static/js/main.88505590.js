(()=>{"use strict";var e={3492:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(885),o=n(9526),i=n(1133),a=n(5693),l=n(2982),s=n(5861),u=function(){var e=(0,s.default)((function*(e){var t=e.setPage,n=e.setList,r=e.setLoading;r(!0),yield fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then((function(e){return e.json()})).then((function(e){n(e.results),(null==e?void 0:e.next)&&t(null==e?void 0:e.next)})).catch((function(e){return console.error(e)})),r(!1)}));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,s.default)((function*(e){var t=e.setList,n=e.setPage,r=e.pageUrl,o=e.setLoading;o(!0),yield fetch(r).then((function(e){return e.json()})).then((function(e){t((function(t){return[].concat((0,l.default)(t),(0,l.default)(e.results))})),(null==e?void 0:e.next)&&n(null==e?void 0:e.next)})).catch((function(e){return console.error(e)})),o(!1)}));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.pokemon,n=e.setSearch,r=e.setDuel,o=e.pokeDuel;fetch("https://pokeapi.co/api/v2/pokemon/"+t.toLowerCase()).then((function(e){return e.json()})).then((function(e){e.name?n?n(e):2===o.length||(o.length?r((function(t){return[].concat((0,l.default)(t),[e])})):r([e])):n(void 0)})).catch((function(e){return console.error(e)}))},g=n(4333).default.create({battleContainer:{width:"100%",zIndex:3,position:"fixed",justifyContent:"center",alignItems:"center",flexDirection:"Col",bottom:0,left:0},pokemonArenaContainer:{width:"90%",flexDirection:"row",maxHeight:"500px",overflow:"auto",alignItems:"center"},pokemonBattleLog:{fontSize:"1em",margin:10,borderRadius:5,backgroundColor:"#e4b5d5",color:"#632c3b",textTransform:"capitalize",padding:5},pokemonBattleIcon:{postion:"relative",margin:10},pokemonBattleRemove:{elevation:8,alignItems:"center",justifyContent:"center",backgroundColor:"#DC2626",borderRadius:10,paddingVertical:10,paddingHorizontal:12,width:"70px",height:30,margin:10},pokemonOnBattle:{width:"50px",height:"50px",width:50,height:50,marginRight:0,borderRadius:5,backgroundColor:"#e96d7b"},row:{flexDirection:"row",alignItems:"center",marginBottom:10,width:"90%"},container:{flex:1,justifyContent:"center",alignItems:"center",width:"90%",paddingTop:130,paddingBottom:100,backgroundColor:"#f0d6e8"},pokemon:{flexDirection:"row",alignItems:"start",marginBottom:10,width:"100%",backgroundColor:"#e4b5d5",textTransform:"capitalize",borderRadius:5,padding:10,gap:15},image:{width:50,height:50},coverBoxImage:{marginRight:0,alignItems:"center",justifyContent:"center",width:70,height:70,borderRadius:5,backgroundColor:"#e96d7b",paddding:25},name:{fontSize:20,fontWeight:"bold",width:"100%",color:"#632c3b"},input:{width:"90%",padding:10,borderWidth:1,borderRadius:5,borderWidth:0,backgroundColor:"#d997c5",color:"#6e3648",fontSize:"1.1em"},search:{width:"100%",flex:1,flexDirection:"column",gap:10,justifyContent:"center",alignItems:"center",zIndex:3,position:"fixed",top:0,paddingTop:10,paddingBottom:10},title:{fontSize:"1.2em",fontWeight:700,color:"#6e3648"}}),f=n(4474),h=n(6834),p=n(9233),m=n(3497),y=n(7557);const v=function(e){var t=e.handleTextChange,n=e.handleSearch,r=e.pokemonSearch,o=e.searchText,a=e.handleSelectedToDuel;return(0,y.jsxs)(f.default,{intensity:60,tint:"light",style:g.search,children:[(0,y.jsx)(p.default,{style:g.title,children:"PokeBattle"}),(0,y.jsx)(m.default,{style:g.input,placeholder:"Digite o nome de um Pokemon",onChange:t,onSubmitEditing:n,value:o}),r&&o&&(0,y.jsx)(i.default,{style:g.row,onStartShouldSetResponder:function(){return a(r)},children:(0,y.jsxs)(i.default,{style:g.pokemon,children:[(0,y.jsx)(i.default,{style:g.coverBoxImage,children:(0,y.jsx)(h.default,{style:g.image,source:{uri:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+(null==r?void 0:r.id)+".gif"}})}),(0,y.jsx)(p.default,{style:g.name,children:null==r?void 0:r.name})]})})]})};var k=n(7008);const b=function(e){var t=e.pokemonList,n=e.isLoading,r=e.handleSelectedToDuel;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(i.default,{style:g.row,children:(0,y.jsx)(k.default,{data:t,keyExtractor:function(e){return e.name},renderItem:function(e){var t=e.item,n=t.name,o=t.url,a=t.id,l="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+((null==o?void 0:o.split("/").slice(-2,-1)[0])||a)+".gif";return(0,y.jsxs)(i.default,{style:g.pokemon,onStartShouldSetResponder:function(){return r(t)},children:[(0,y.jsx)(i.default,{style:g.coverBoxImage,children:(0,y.jsx)(h.default,{style:g.image,source:{uri:l}})}),(0,y.jsx)(p.default,{style:g.name,children:n})]})}})}),n&&(0,y.jsx)(i.default,{style:g.row,children:(0,y.jsx)(p.default,{style:g.name,children:"Carregando..."})})]})};var x=n(3026),w=n(477),j={normal:{normal:1,fire:1,water:1,electric:1,grass:1,ice:1,fighting:1,poison:1,ground:1,flying:1,psychic:1,bug:1,rock:.5,ghost:0,dragon:1,dark:1,steel:.5},fire:{normal:1,fire:.5,water:.5,electric:1,grass:2,ice:2,fighting:1,poison:1,ground:1,flying:1,psychic:1,bug:2,rock:.5,ghost:1,dragon:.5,dark:1,steel:2},water:{normal:1,fire:2,water:.5,electric:1,grass:.5,ice:1,fighting:1,poison:1,ground:2,flying:1,psychic:1,bug:1,rock:2,ghost:1,dragon:.5,dark:1,steel:1},electric:{normal:1,fire:1,water:2,electric:.5,grass:.5,ice:1,fighting:1,poison:1,ground:0,flying:2,psychic:1,bug:1,rock:1,ghost:1,dragon:.5,dark:1,steel:1},grass:{normal:1,fire:.5,water:2,electric:1,grass:.5,ice:1,fighting:1,poison:.5,ground:2,flying:.5,psychic:1,bug:.5,rock:2,ghost:1,dragon:.5,dark:1,steel:.5},ice:{normal:1,fire:.5,water:.5,electric:1,grass:2,ice:.5,fighting:1,poison:1,ground:2,flying:2,psychic:1,bug:1,rock:1,ghost:1,dragon:2,dark:1,steel:.5},fighting:{normal:2,fire:1,water:1,electric:1,grass:1,ice:2,fighting:1,poison:.5,ground:1,flying:.5,psychic:.5,bug:.5,rock:2,ghost:0,dragon:1,dark:2,steel:2},poison:{normal:1,fire:1,water:1,electric:1,grass:2,ice:1,fighting:1,poison:.5,ground:.5,flying:1,psychic:1,bug:1,rock:.5,ghost:.5,dragon:1,dark:1,steel:0},ground:{normal:1,fire:2,water:1,electric:2,grass:.5,ice:1,fighting:1,poison:2,ground:1,flying:0,psychic:1,bug:.5,rock:2,ghost:1,dragon:1,dark:1,steel:2},flying:{normal:1,fire:1,water:1,electric:.5,grass:2,ice:1,fighting:2,poison:1,ground:1,flying:1,psychic:1,bug:2,rock:.5,ghost:1,dragon:1,dark:1,steel:.5},psychic:{normal:1,fire:1,water:1,electric:1,grass:1,ice:1,fighting:2,poison:2,ground:1,flying:1,psychic:.5,bug:1,rock:1,ghost:1,dragon:1,dark:0,steel:.5},bug:{normal:1,fire:.5,water:1,electric:1,grass:2,ice:1,fighting:.5,poison:.5,ground:1,flying:.5,psychic:2,bug:1,rock:1,ghost:.5,dragon:1,dark:2,steel:.5},rock:{normal:1,fire:2,water:1,electric:1,grass:1,ice:2,fighting:.5,poison:1,ground:.5,flying:2,psychic:1,bug:2,rock:1,ghost:1,dragon:1,dark:1,steel:.5},ghost:{normal:0,fire:1,water:1,electric:1,grass:1,ice:1,fighting:1,poison:1,ground:1,flying:1,psychic:2,bug:1,rock:1,ghost:2,dragon:1,dark:.5,steel:.5},dragon:{normal:1,fire:1,water:1,electric:1,grass:1,ice:1,fighting:1,poison:1,ground:1,flying:1,psychic:1,bug:1,rock:1,ghost:1,dragon:2,dark:1,steel:.5},dark:{normal:1,fire:1,water:1,electric:1,grass:1,ice:1,fighting:.5,poison:1,ground:1,flying:1,psychic:2,bug:1,rock:1,ghost:2,dragon:1,dark:.5,steel:.5},steel:{normal:1,fire:.5,water:.5,electric:.5,grass:1,ice:2,fighting:1,poison:1,ground:1,flying:1,psychic:1,bug:1,rock:2,ghost:1,dragon:1,dark:1,steel:.5}};function S(){return S=(0,s.default)((function*(e,t){var n={pokemon1:e,pokemon2:t,log:[],winner:""},r=0,o=e.stats[0].base_stat,i=t.stats[0].base_stat;function a(e,t){return l.apply(this,arguments)}function l(){return(l=(0,s.default)((function*(e,t){var r,o,i=Math.floor(Math.random()*e.moves.length),a=yield fetch(e.moves[i].move.url),l=yield a.json();n.log.push(e.name+" usou "+(null==l?void 0:l.name)+"!");var s=t.types.map((function(e){var t;return null==e||null==(t=e.type)?void 0:t.name})),u=e.stats.find((function(e){var t;return"attack"===(null==e||null==(t=e.stat)?void 0:t.name)})).base_stat,c=t.stats.find((function(e){var t;return"defense"===(null==e||null==(t=e.stat)?void 0:t.name)})).base_stat,d=l.power,g=(null==j?void 0:j[null==l||null==(r=l.type)?void 0:r.name][s[0]])*(s[1]?null==j?void 0:j[null==l||null==(o=l.type)?void 0:o.name][null==s?void 0:s[1]]:1),f=Math.random()*(1-.85)+.85,h=Math.floor((22*d*(u/c)/50+2)*g*f)+1;t.stats[0].base_stat-=h,n.log.push(t.name+" recebeu "+h+" de dano!")}))).apply(this,arguments)}for(;o>0&&i>0;){if(r++,yield a(e,t),t.stats[0].base_stat<=0)return n.log.push(t.name+" desmaiou!"),n.log.push(e.name+" venceu a batalha em "+r+" turnos!"),n.winner=e.name,n;if(yield a(t,e),e.stats[0].base_stat<=0)return n.log.push(e.name+" desmaiou!"),n.log.push(t.name+" venceu a batalha em "+r+" turnos!"),n.winner=t.name,n}return n.log.push("A batalha terminou em empate ap\xf3s "+r+" turnos!"),n})),S.apply(this,arguments)}const C=function(e){var t,n=e.pokemons,l=e.setDuel,s=(0,o.useState)(),u=(0,r.default)(s,2),c=u[0],d=u[1];if(0===n.length)return null;var m=function(e){var t=e.item;return(0,y.jsx)(p.default,{style:g.pokemonBattleLog,children:t})};return(0,y.jsxs)(f.default,{intensity:60,tint:"light",style:g.battleContainer,children:[(0,y.jsx)(i.default,{style:g.pokemonArenaContainer,children:c&&(0,y.jsx)(w.default,{children:(0,y.jsx)(x.default,{scrollEnabled:!0,children:null==c||null==(t=c.log)?void 0:t.map((function(e,t){return(0,y.jsx)(m,{item:e},e+"-"+t)}))})})}),(0,y.jsxs)(i.default,{style:g.pokemonArenaContainer,children:[(0,y.jsx)(a.default,{color:"#f43f5e",title:"Fechar",onPress:function(){l([]),d(void 0)}}),(0,y.jsx)(k.default,{horizontal:!0,data:n,keyExtractor:function(e){return e.id},renderItem:function(e){var t=e.item;return(0,y.jsx)(i.default,{onStartShouldSetResponder:function(){return function(e){var t=n.filter((function(t){return t.id!==e.id}));d(void 0),l(t)}(t)},style:g.pokemonBattleIcon,children:(0,y.jsx)(i.default,{style:g.coverBoxImage,children:(0,y.jsx)(h.default,{style:g.pokemonOnBattle,source:{uri:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+(null==t?void 0:t.id)+".gif"}})})})}}),(0,y.jsx)(a.default,{color:"#f43f5e",disabled:n.length<2,title:"Lutar",onPress:function(){d(void 0),function(e,t){return S.apply(this,arguments)}(null==n?void 0:n[0],null==n?void 0:n[1]).then((function(e){d(e),l(n.filter((function(t){return t.name===e.winner})))}))}})]})]})};function I(){var e=(0,o.useState)(""),t=(0,r.default)(e,2),n=t[0],l=t[1],s=(0,o.useState)([]),f=(0,r.default)(s,2),h=f[0],p=f[1],m=(0,o.useState)(!1),k=(0,r.default)(m,2),x=k[0],w=k[1],j=(0,o.useState)(""),S=(0,r.default)(j,2),I=S[0],P=S[1],D=(0,o.useState)(void 0),B=(0,r.default)(D,2),L=B[0],T=B[1],O=(0,o.useState)([]),R=(0,r.default)(O,2),_=R[0],z=R[1];(0,o.useEffect)((function(){M()}),[]);var A=function(e){var t=!(null==h||!h.find((function(t){return t.name===e.name})));!h<=2&&!t&&d({pokeDuel:h,pokemon:e.name,setDuel:p})},M=function(){n?c({setList:z,setPage:l,pageUrl:n,setLoading:w}):u({setList:z,setPage:l,setLoading:w})};return(0,y.jsxs)(i.default,{style:g.container,children:[(0,y.jsx)(v,{handleSearch:function(){I&&d({pokemon:I,setSearch:T})},handleTextChange:function(e){P(e.target.value)},pokemonSearch:L,searchText:I,handleSelectedToDuel:A}),(0,y.jsx)(b,{isLoading:x,pokemonList:_,handleSelectedToDuel:A}),(0,y.jsx)(a.default,{color:"#f43f5e",disabled:x,title:"Carregar mais",onPress:function(){return M()}}),(0,y.jsx)(C,{pokemons:h,setDuel:p})]})}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,o,i]=e[c],l=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[a,l,s]=r,u=0;if(a.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[523],(()=>n(9484)));r=n.O(r)})();
//# sourceMappingURL=main.88505590.js.map