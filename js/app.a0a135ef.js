(function(){"use strict";var e={4162:function(e,t,n){var s=n(5130),i=n(6768);const r={class:"app-container"};function o(e,t,n,s,o,a){const l=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(l)])}var a={name:"App"},l=n(1241);const u=(0,l.A)(a,[["render",o],["__scopeId","data-v-a8bb5c56"]]);var c=u,d=n(1387),m=n(554),h=n(3813),f=n(6756),p=n(5526),y=n(6453);function w(e,t,n,s,r,o){return(0,i.uX)(),(0,i.Wv)(h.I,{fluid:"",class:"home-container"},{default:(0,i.k6)((()=>[(0,i.bF)(f.L,{justify:"center",class:"mb-4"},{default:(0,i.k6)((()=>[(0,i.bF)(p.B,{cols:"12",md:"6",class:"text-center"},{default:(0,i.k6)((()=>t[1]||(t[1]=[(0,i.Lk)("h2",{class:"title animated fadeIn"},"Welcome to the Emoji Quiz!",-1)]))),_:1})])),_:1}),(0,i.bF)(f.L,{justify:"center",class:"mb-6"},{default:(0,i.k6)((()=>[(0,i.bF)(p.B,{cols:"12",md:"6",class:"d-flex flex-column align-center"},{default:(0,i.k6)((()=>[(0,i.bF)(y.d4,{modelValue:r.selectedCategory,"onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedCategory=e),items:r.categories,label:"Select a category",outlined:"",class:"category-select mb-4"},null,8,["modelValue","items"]),(0,i.bF)(m.D,{disabled:!r.selectedCategory,onClick:o.startGame,color:"primary",class:"start-btn animated fadeInUp"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.eW)(" Start Game ")]))),_:1},8,["disabled","onClick"])])),_:1})])),_:1})])),_:1})}n(4114);var b={name:"HomeView",data(){return{categories:["TV","Movies","Anime","Games"],selectedCategory:""}},methods:{startGame(){this.$router.push({name:"Game",params:{category:this.selectedCategory}})}}};const g=(0,l.A)(b,[["render",w],["__scopeId","data-v-3434c084"]]);var v=g,k=n(4232),j=n(266),C=n(2729),_=n(1606),F=n(697),S=n(3745),A=n(1772),G=n(5126),x=n(4750);const O={class:"mt-3"},B={key:0},Q={key:0};function T(e,t,n,r,o,a){return(0,i.uX)(),(0,i.Wv)(h.I,{fluid:""},{default:(0,i.k6)((()=>[(0,i.bF)(f.L,{class:"mb-4"},{default:(0,i.k6)((()=>[(0,i.bF)(p.B,{cols:"12",md:"3"},{default:(0,i.k6)((()=>[(0,i.bF)(m.D,{color:"primary",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},{default:(0,i.k6)((()=>t[3]||(t[3]=[(0,i.eW)(" Go Back to Home ")]))),_:1})])),_:1})])),_:1}),(0,i.bF)(f.L,{justify:"end",class:"mb-4"},{default:(0,i.k6)((()=>[(0,i.bF)(p.B,{cols:"12",md:"3",class:"text-right"},{default:(0,i.k6)((()=>[(0,i.bF)(m.D,{outlined:"",color:"primary",class:"score-btn"},{default:(0,i.k6)((()=>[(0,i.eW)(" Score: "+(0,k.v_)(o.score),1)])),_:1})])),_:1})])),_:1}),o.isGameStarted&&!o.isGameOver&&o.currentQuestion?((0,i.uX)(),(0,i.Wv)(f.L,{key:0,justify:"center"},{default:(0,i.k6)((()=>[(0,i.bF)(p.B,{cols:"12",class:"text-center"},{default:(0,i.k6)((()=>[(0,i.bF)(G.y,{src:o.currentQuestion.emojiImage,alt:"Emoji",class:"emoji-image"},null,8,["src"]),(0,i.Lk)("h3",O,(0,k.v_)(o.currentQuestion.emoji),1)])),_:1})])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(s.eB,{name:"slide-fade",onBeforeEnter:a.beforeEnter,onEnter:a.enter,onLeave:a.leave},{default:(0,i.k6)((()=>[o.isGameStarted&&!o.isGameOver?((0,i.uX)(),(0,i.CE)("div",B,[(0,i.bF)(f.L,{justify:"center"},{default:(0,i.k6)((()=>[(0,i.bF)(p.B,{cols:"12",md:"8",class:"text-center"},{default:(0,i.k6)((()=>[(0,i.bF)(x.W,{modelValue:o.userGuess,"onUpdate:modelValue":t[1]||(t[1]=e=>o.userGuess=e),label:"Enter your answer",outlined:"",dense:"",onKeyup:(0,s.jR)(a.checkAnswer,["enter"]),autofocus:"",class:"mb-2"},null,8,["modelValue","onKeyup"]),(0,i.bF)(m.D,{onClick:a.checkAnswer,color:"primary",class:"mt-2"},{default:(0,i.k6)((()=>t[4]||(t[4]=[(0,i.eW)("Submit Answer")]))),_:1},8,["onClick"])])),_:1})])),_:1})])):(0,i.Q3)("",!0)])),_:1},8,["onBeforeEnter","onEnter","onLeave"]),o.isGameStarted&&!o.isGameOver&&o.hintsAvailable?((0,i.uX)(),(0,i.Wv)(f.L,{key:1,justify:"center"},{default:(0,i.k6)((()=>[(0,i.bF)(p.B,{cols:"12",class:"text-center"},{default:(0,i.k6)((()=>[(0,i.bF)(m.D,{onClick:a.showHint,color:"secondary",class:"mt-2"},{default:(0,i.k6)((()=>t[5]||(t[5]=[(0,i.eW)("Get Hint")]))),_:1},8,["onClick"]),o.displayedHint?((0,i.uX)(),(0,i.CE)("p",Q,(0,k.v_)(o.displayedHint),1)):(0,i.Q3)("",!0)])),_:1})])),_:1})):(0,i.Q3)("",!0),o.isAnswerIncorrect?((0,i.uX)(),(0,i.Wv)(f.L,{key:2,justify:"center"},{default:(0,i.k6)((()=>[(0,i.bF)(p.B,{cols:"12",class:"text-center"},{default:(0,i.k6)((()=>[(0,i.bF)(j.l,{type:"error",class:"mt-3"},{default:(0,i.k6)((()=>[(0,i.eW)(" Incorrect! The correct answer is: "+(0,k.v_)(o.currentQuestion.answer),1)])),_:1}),(0,i.bF)(m.D,{onClick:a.getNextQuestion,color:"primary"},{default:(0,i.k6)((()=>t[6]||(t[6]=[(0,i.eW)("Next Question")]))),_:1},8,["onClick"])])),_:1})])),_:1})):(0,i.Q3)("",!0),o.isGameOver&&o.allQuestionsAnswered?((0,i.uX)(),(0,i.Wv)(f.L,{key:3,justify:"center"},{default:(0,i.k6)((()=>[(0,i.bF)(p.B,{cols:"12",class:"text-center"},{default:(0,i.k6)((()=>[(0,i.bF)(m.D,{onClick:a.startNewGame,color:"secondary"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("Play Again")]))),_:1},8,["onClick"])])),_:1})])),_:1})):(0,i.Q3)("",!0),(0,i.bF)(A.p,{modelValue:o.showCongratulations,"onUpdate:modelValue":t[2]||(t[2]=e=>o.showCongratulations=e),"max-width":"500",transition:"dialog-bottom-transition"},{default:(0,i.k6)((()=>[(0,i.bF)(C.J,null,{default:(0,i.k6)((()=>[(0,i.bF)(_.r,{class:"text-h5 text-center"},{default:(0,i.k6)((()=>t[8]||(t[8]=[(0,i.eW)("Congratulations!")]))),_:1}),(0,i.bF)(F.O,{class:"text-center"},{default:(0,i.k6)((()=>[(0,i.bF)(G.y,{src:"congratulations-image.png","max-width":"100",class:"mb-2"}),(0,i.eW)(" You have completed all questions with success! Your final score is: "+(0,k.v_)(o.score),1)])),_:1}),(0,i.bF)(S.S,{class:"justify-center"},{default:(0,i.k6)((()=>[(0,i.bF)(m.D,{color:"primary",onClick:a.startNewGame},{default:(0,i.k6)((()=>t[9]||(t[9]=[(0,i.eW)("Play Again")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var E={name:"GameView",data(){return{questions:{TV:[{emojis:"👨‍👩‍👦🏠",answer:"Modern Family",hints:["Mockumentary style","Family dynamics","Diverse families"]},{emoji:"👽🎤",answer:"The Voice",hints:["Singing competition","Famous judges","Blind auditions"]},{emoji:"👑🎭",answer:"The Crown",hints:["Historical drama","Queen Elizabeth II","British monarchy"]},{emoji:"🐉⚔️",answer:"Game of Thrones",hints:["Dragons","Political intrigue","Based on a novel"]},{emoji:"🕵️‍♂️🔍",answer:"Sherlock Holmes",hints:["Detective","London","Based on Arthur Conan Doyle"]},{emoji:"⚡👦",answer:"The Flash",hints:["Super speed","DC Comics","Central City"]},{emoji:"👽🪐",answer:"Stranger Things",hints:["1980s","Parallel universe","Kids fighting monsters"]},{emoji:"🔫🕵️‍♀️",answer:"Killing Eve",hints:["Spy thriller","Female leads","Cat and mouse"]},{emoji:"👨‍🔬👽",answer:"Breaking Bad",hints:["Chemistry teacher","Drug trade","Transformation"]}],Movies:[{emojis:"👑👸🐉",answer:"Game of Thrones",hints:["Fantasy series","Based on a book","Dragons involved"]},{emoji:"🦁👑",answer:"Lion King",hints:["Animation","King of the jungle","Circle of Life"]},{emoji:"🦕🦖",answer:"Jurassic Park",hints:["Dinosaurs","Theme park","Based on a novel"]},{emoji:"🤠🌵",answer:"The Good, The Bad and The Ugly",hints:["Western film","Clint Eastwood","Triad of characters"]},{emoji:"🌪️🏠",answer:"Wizard of Oz",hints:["Yellow brick road","Tornado","Follow the yellow brick road"]},{emoji:"👨‍🚀🌌",answer:"Interstellar",hints:["Space exploration","Time dilation","Love transcends time"]},{emoji:"👨‍🎤🎤",answer:"A Star is Born",hints:["Music career","Famous singer","Romantic drama"]},{emoji:"💔📝",answer:"Love Actually",hints:["Christmas movie","Multiple love stories","Set in London"]},{emoji:"🦇🦸‍♂️",answer:"Batman",hints:["Superhero","Gotham City","Dark Knight"]},{emoji:"🕷️ 🕸️",answer:"Spider-Man",hints:["Web-slinger","New York City","With great power..."]}],Anime:[{emojis:"⚔️👹🌊🔥",answer:"Demon Slayer",hints:["Demon hunting","Sword fighting","Family bonds"]},{emoji:"👒🍖🏴‍☠️",answer:"One Piece",hints:["Pirates","Treasure hunt","Straw Hat Crew"]},{emoji:"1️⃣👊👨‍🦲",answer:"One Punch Man",hints:["Hero for fun","Overpowered protagonist","Monsters"]},{emoji:"📓✍",answer:"Death Note",hints:["Notebook","Justice","Shinigami"]},{emoji:"👧🐈",answer:"My Neighbor Totoro",hints:["Studio Ghibli","Forest spirits","Sisters"]},{emoji:"👦👻",answer:"Yu Yu Hakusho",hints:["Spirit detective","Fights","Supernatural"]},{emoji:"🌌🎇",answer:"Your Name",hints:["Body swap","Romance","Time travel"]},{emoji:"👑⚔️",answer:"Attack on Titan",hints:["Giants","Post-apocalyptic","Walls"]},{emoji:"🦊🍜🍥",answer:"Naruto",hints:["Ninja","Friendship","Nine-tailed fox"]},{emoji:"🔮🐉",answer:"Dragon Ball",hints:["Fighting","Power-ups","Seven mystical items"]},{emoji:"👒🌸",answer:"Fruits Basket",hints:["Zodiac curse","Family secrets","Romance"]},{emoji:"🚀🌠",answer:"Cowboy Bebop",hints:["Space bounty hunters","Jazz music","Dystopian"]},{emoji:"👹🦸",answer:"My Hero Academia",hints:["Superheroes","Quirks","Hero school"]},{emoji:"👹🎭",answer:"Blue Exorcist",hints:["Exorcism","Demonic powers","School life"]},{emoji:"🌊👦",answer:"Spirited Away",hints:["Magic","Bathhouse","Studio Ghibli"]}],Games:[{emoji:"🍄👨‍🔧",answer:"Super Mario",hints:["Platformer","Rescuing princess","Mushrooms"]},{emoji:"🔫💣",answer:"Call of Duty",hints:["First-person shooter","Military","Multiplayer"]},{emoji:"🧟🔫",answer:"Resident Evil",hints:["Zombies","Horror","Umbrella Corporation"]},{emoji:"🐉⚔️",answer:"The Elder Scrolls: Skyrim",hints:["Fantasy","Open world","Dragonborn"]},{emoji:"🏝️🔨",answer:"Minecraft",hints:["Building","Survival","Blocks"]},{emoji:"👑⚔️",answer:"The Legend of Zelda",hints:["Adventure","Hyrule","Rescue the princess"]},{emoji:"🎸🧛",answer:"Castlevania",hints:["Vampires","Platformer","Gothic setting"]},{emoji:"🚗🏁",answer:"Mario Kart",hints:["Racing","Power-ups","Nintendo characters"]},{emoji:"👨‍🚀🌌",answer:"Mass Effect",hints:["Space adventure","Aliens","Commander Shepard"]},{emoji:"👾🛸",answer:"Space Invaders",hints:["Arcade classic","Aliens","Retro"]},{emoji:"🔮🎭",answer:"Final Fantasy",hints:["RPG","Fantasy","Turn-based combat"]},{emoji:"🌍🪓",answer:"God of War",hints:["Mythology","Action","Kratos"]},{emoji:"🔫🐍",answer:"Metal Gear Solid",hints:["Stealth","Espionage","Snake"]},{emoji:"🧙‍♂️⚔️",answer:"World of Warcraft",hints:["MMORPG","Fantasy","Azeroth"]},{emoji:"👻👑",answer:"Dark Souls",hints:["Difficult","Dark fantasy","Boss battles"]}]},selectedCategory:"",currentQuestion:null,userGuess:"",score:0,isGameStarted:!1,isGameOver:!1,hintsAvailable:!0,displayedHint:"",hintIndex:0,usedQuestions:[],allQuestionsAnswered:!1,showCongratulations:!1,isAnswerIncorrect:!1}},mounted(){this.selectedCategory=this.$route.params.category,this.questions[this.selectedCategory]?this.startNewGame():console.error("Invalid category selected")},methods:{startNewGame(){this.isGameStarted=!0,this.isGameOver=!1,this.score=0,this.usedQuestions=[],this.allQuestionsAnswered=!1,this.isAnswerIncorrect=!1,this.showCongratulations=!1,this.getNextQuestion()},getNextQuestion(){const e=this.questions[this.selectedCategory];if(this.usedQuestions.length>=e.length)return this.isGameOver=!0,this.allQuestionsAnswered=!0,void(this.showCongratulations=!0);let t;do{t=e[Math.floor(Math.random()*e.length)]}while(this.usedQuestions.includes(t));this.usedQuestions.push(t),this.currentQuestion=t,this.userGuess="",this.hintsAvailable=!0,this.displayedHint="",this.hintIndex=0,this.isAnswerIncorrect=!1},checkAnswer(){this.userGuess.trim().toLowerCase()===this.currentQuestion.answer.toLowerCase()?(this.score++,this.getNextQuestion()):this.isAnswerIncorrect=!0},retryCurrentQuestion(){this.isAnswerIncorrect=!1,this.userGuess="",this.displayedHint="",this.hintIndex=0,this.hintsAvailable=!0},showHint(){this.hintIndex<this.currentQuestion.hints.length?(this.displayedHint=this.currentQuestion.hints[this.hintIndex],this.hintIndex++):this.hintsAvailable=!1},beforeEnter(e){e.style.transform="translateY(50px)",e.style.opacity=0},enter(e,t){e.offsetHeight,e.style.transition="transform 0.3s ease-out, opacity 0.3s ease-out",e.style.transform="translateY(0)",e.style.opacity=1,t()},leave(e,t){e.style.transition="transform 0.3s ease-in, opacity 0.3s ease-in",e.style.transform="translateY(50px)",e.style.opacity=0,t()}}};const M=(0,l.A)(E,[["render",T],["__scopeId","data-v-c8516858"]]);var D=M;const W=[{path:"/",name:"Home",component:v},{path:"/game/:category",name:"Game",component:D,props:!0}],I=(0,d.aE)({history:(0,d.LA)("/"),routes:W});var L=I,P=n(782),N=(0,P.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),H=(n(5524),n(5790)),V=(0,H.$N)();async function R(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}R(),(0,s.Ef)(c).use(L).use(N).use(V).mount("#app")}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,r){if(!s){var o=1/0;for(c=0;c<e.length;c++){s=e[c][0],i=e[c][1],r=e[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(a=!1,r<o&&(o=r));if(a){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[s,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(s,i){if(1&i&&(s=this(s)),8&i)return s;if("object"===typeof s&&s){if(4&i&&s.__esModule)return s;if(16&i&&"function"===typeof s.then)return s}var r=Object.create(null);n.r(r);var o={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&s;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){o[e]=function(){return s[e]}}));return o["default"]=function(){return s},n.d(r,o),r}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,s){return n.f[s](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.098abadf.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="emoji-pictionary:";n.l=function(s,i,r,o){if(e[s])e[s].push(i);else{var a,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+r){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=s),e[s]=[i];var m=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var i=e[s];if(delete e[s],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,s){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)s.push(i[2]);else{var r=new Promise((function(n,s){i=e[t]=[n,s]}));s.push(i[2]=r);var o=n.p+n.u(t),a=new Error,l=function(s){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=s&&("load"===s.type?"missing":s.type),o=s&&s.target&&s.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,i[1](a)}};n.l(o,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,r,o=s[0],a=s[1],l=s[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(t&&t(s);u<o.length;u++)r=o[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},s=self["webpackChunkemoji_pictionary"]=self["webpackChunkemoji_pictionary"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[504],(function(){return n(4162)}));s=n.O(s)})();
//# sourceMappingURL=app.a0a135ef.js.map