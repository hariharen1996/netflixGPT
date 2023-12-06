"use strict";(self.webpackChunknetflixgpt=self.webpackChunknetflixgpt||[]).push([[315],{676:(e,s,t)=>{t.d(s,{Z:()=>p});var a=t(791),i=t(631),l=t(689),o=t(659),n=t(434),r=t(496),c=t(585),d=t(596),m=t(955),h=t(184);const p=()=>{const e=(0,l.s0)(),s=(0,n.I0)(),t=(0,n.v9)((e=>e.authuser)),p=(0,n.v9)((e=>e.search.showSearch));(0,a.useEffect)((()=>{const t=(0,i.Aj)(o.auth,(t=>{if(t){const{uid:a,email:i,displayName:l}=t;s((0,r.cn)({uid:a,email:i,displayName:l})),e("/browse")}else s((0,r.kX)()),e("/")}));return()=>t()}),[]);return(0,h.jsx)("div",{className:"absolute w-full sm:px-8 sm:py-2 bg-gradient-to-b from-black z-30",children:(0,h.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center mx-2 my-2",children:[(0,h.jsx)("img",{className:"w-36 md:w-44",src:c.us,alt:"logo"}),t&&(0,h.jsxs)("div",{className:"flex items-center",children:[p&&(0,h.jsx)("select",{className:"p-2 bg-gray-900 text-white text-xs sm:text-sm",onChange:e=>{s((0,m.D)(e.target.value))},children:c.E7.map((e=>(0,h.jsx)("option",{value:e.identifier,children:e.name},e.identifier)))}),(0,h.jsx)("button",{className:"bg-gray-900 p-2 hover:bg-[#e50914] hover:bg-opacity-70 m-2 text-white rounded-md text-xs sm:text-sm",onClick:()=>{s((0,d.p$)())},children:p?"HomePage":"SearchMovies"}),(0,h.jsx)("button",{onClick:()=>{(0,i.w7)(o.auth).then((()=>{e("/")})).catch((s=>{e("/error")}))},className:"bg-gray-900 p-2 text-xs sm:text-sm  hover:bg-[#e50914] hover:bg-opacity-70 text-white rounded-md",children:"Sign Out"})]})]})})}},315:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var a=t(791),i=t(434),l=t(585),o=t(828);const n=()=>{const e=(0,i.I0)(),s=(0,i.v9)((e=>e.movies.nowPlayingMovies));(0,a.useEffect)((()=>{!s&&(async()=>{const s=await fetch(l.Qv,l.St),t=await s.json();e((0,o.yk)(t.results))})()}),[])};var r=t(676);const c=e=>{const s=(0,i.I0)(),t=(0,i.v9)((e=>e.movies.trailerVideo));(0,a.useEffect)((()=>{!t&&(async()=>{const t=await fetch("https://api.themoviedb.org/3/movie/".concat(e,"/videos?language=en-US"),l.St),a=await t.json(),i=a.results.filter((e=>e.type="Trailer")),n=i.length?i[0]:a.results[0];s((0,o.In)(n))})()}),[])},d=()=>{const e=(0,i.I0)(),s=(0,i.v9)((e=>e.movies.popularMovies));(0,a.useEffect)((()=>{!s&&(async()=>{const s=await fetch(l.kv,l.St),t=await s.json();e((0,o.fh)(t.results))})()}),[])},m=()=>{const e=(0,i.I0)(),s=(0,i.v9)((e=>e.movies.topRatedmovies));(0,a.useEffect)((()=>{!s&&(async()=>{const s=await fetch(l.zF,l.St),t=await s.json();e((0,o.x7)(t.results))})()}),[])},h=()=>{const e=(0,i.I0)(),s=(0,i.v9)((e=>e.movies.upComingMovies));(0,a.useEffect)((()=>{!s&&(async()=>{const s=await fetch(l.xf,l.St),t=await s.json();e((0,o.CJ)(t.results))})()}),[])};var p=t(699),x=t(184);const v=e=>{let{movieId:s}=e;const t=(0,i.v9)((e=>{var s;return null===(s=e.movies)||void 0===s?void 0:s.trailerVideo}));return c(s),d(),m(),h(),t?(0,x.jsxs)("div",{className:"w-screen h-full",children:[(0,x.jsx)("img",{className:"h-full w-screen bg-cover block sm:hidden",src:l.A_,alt:"landing page"}),(0,x.jsx)("iframe",{className:"w-screen h-screen object-cover aspect-video hidden sm:block",src:"https://www.youtube.com/embed/"+(null===t||void 0===t?void 0:t.key)+"?autoplay=1&mute=1&loop=1",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]}):(0,x.jsx)(p.Z,{})},u=e=>{let{title:s,overview:t}=e;return(0,x.jsxs)("div",{className:"pt-32 sm:pt-48 px-12 absolute text-white bg-gradient-to-r from-black w-screen h-screen",children:[s?(0,x.jsx)("h1",{className:"sm:text-start sm:text-left text-xl xl:text-4xl px-26 font-bold",children:s}):(0,x.jsx)("div",{className:"bg-[#171721] animate-pulse rounded-md p-2 w-32"}),t?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("p",{className:"py-2 lg:py-6 lg:px-26 lg:w-6/12 text-sm md:text-md sm:block hidden",children:t}),(0,x.jsx)("p",{className:"py-2 lg:py-6 lg:px-26 lg:w-6/12 text-sm md:text-md sm:hidden block",children:t.length>300&&t.slice(0,286)})]}):(0,x.jsx)("div",{className:"bg-[#171721] animate-pulse rounded-md p-2 w-32 h-32 mt-3"}),(0,x.jsxs)("div",{className:"my-4 flex",children:[(0,x.jsx)("button",{className:"rounded-md px-4 py-2 sm:px-10 py-2 text-xs sm:text-sm  bg-white bg-opacity-90 hover:bg-opacity-80 text-black cursor-pointer font-medium",children:"Play"}),(0,x.jsx)("button",{className:"rounded-md px-4 py-2 sm:px-10 py-2 text-xs sm:text-sm  bg-gray-500 bg-opacity-60 hover:bg-opacity-80 mx-2 text-white cursor-pointer font-medium",children:"More Info"})]})]})},g=()=>{const e=(0,i.v9)((e=>{var s;return null===(s=e.movies)||void 0===s?void 0:s.nowPlayingMovies}));if(null===e)return(0,x.jsx)(p.Z,{});const s=e[0],{overview:t,original_title:a,id:l,poster_path:o}=s;return(0,x.jsxs)("div",{className:"w-screen h-screen",children:[(0,x.jsx)(u,{title:a,overview:t}),(0,x.jsx)(v,{movieId:l,poster:o})]})};var w=t(87);const f=e=>{let{posterPath:s,movieId:t}=e;const a=s?l.Tb+s:l.UF;return t?(0,x.jsx)("div",{className:"w-36 md:w-48 text-white",children:(0,x.jsxs)(w.rU,{to:"/videos/"+t,children:[" ",(0,x.jsx)("img",{src:a,alt:"movie"})]})}):null},j=e=>{let{movies:s}=e;return(0,x.jsx)("div",{className:"p-2",children:(0,x.jsx)("div",{className:"flex mx-2 p-2 overflow-x-scroll scroll-smooth cursor-pointer",children:(0,x.jsx)("div",{className:"flex gap-2",children:null===s||void 0===s?void 0:s.map((e=>(0,x.jsx)(f,{posterPath:null===e||void 0===e?void 0:e.poster_path,movieId:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.id)))})})})},b=()=>(0,x.jsx)("div",{className:"flex pt-10 mx-2 p-2 overflow-hidden cursor-pointer",children:(0,x.jsxs)("div",{className:"flex gap-2 w-48 h-64",children:[(0,x.jsx)("div",{className:"bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"}),(0,x.jsx)("div",{className:"bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"}),(0,x.jsx)("div",{className:"bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"}),(0,x.jsx)("div",{className:"bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"}),(0,x.jsx)("div",{className:"bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"}),(0,x.jsx)("div",{className:"bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"}),(0,x.jsx)("div",{className:"bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"}),(0,x.jsx)("div",{className:"bg-[#171721] w-full grow-0 shrink-0 md:w-48 animate-pulse"})]})}),y=()=>{const e=(0,i.v9)((e=>null===e||void 0===e?void 0:e.movies));return e?(0,x.jsx)("div",{className:"bg-black",children:(0,x.jsxs)("div",{className:"z-50 relative mr-10",children:[(0,x.jsx)("h1",{className:"text-xl text-white mx-4 p-2",children:"Now Playing"}),e.nowPlayingMovies?(0,x.jsx)(j,{movies:e.nowPlayingMovies,showMovies:e}):(0,x.jsx)(b,{}),(0,x.jsx)("h1",{className:"text-xl text-white mx-4 p-2",children:"Popular Movies"}),e.popularMovies?(0,x.jsx)(j,{title:"Popular Movies",movies:e.popularMovies,showMovies:e}):(0,x.jsx)(b,{}),(0,x.jsx)("h1",{className:"text-xl text-white mx-4 p-2",children:"Top Rated Movies"}),e.topRatedmovies?(0,x.jsx)(j,{title:"Top Rated Movies",movies:e.topRatedmovies,showMovies:e}):(0,x.jsx)(b,{}),(0,x.jsx)("h1",{className:"text-xl text-white mx-4 p-2",children:"Up Coming Movies"}),e.upComingMovies?(0,x.jsx)(j,{showMovies:e,title:"Upcoming Movies",movies:null===e||void 0===e?void 0:e.upComingMovies}):(0,x.jsx)(b,{})]})}):(0,x.jsx)(p.Z,{})},N={en:{search:"Search",getSearchPlaceholder:"What would you like to watch today?",searchResults:"Search to display your favorite movies here...",isMovies:"No Movies Found"},tamil:{search:"\u0ba4\u0bc7\u0b9f\u0bc1",getSearchPlaceholder:"\u0b87\u0ba9\u0bcd\u0bb1\u0bc1 \u0ba8\u0bc0\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0ba4\u0bc8\u0baa\u0bcd \u0baa\u0bbe\u0bb0\u0bcd\u0b95\u0bcd\u0b95 \u0bb5\u0bbf\u0bb0\u0bc1\u0bae\u0bcd\u0baa\u0bc1\u0b95\u0bbf\u0bb1\u0bc0\u0bb0\u0bcd\u0b95\u0bb3\u0bcd?",searchResults:"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1\u0baa\u0bcd \u0baa\u0bbf\u0b9f\u0bbf\u0ba4\u0bcd\u0ba4 \u0ba4\u0bbf\u0bb0\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0b95\u0bcd \u0b95\u0bbe\u0b9f\u0bcd\u0b9f \u0b87\u0b99\u0bcd\u0b95\u0bc7 \u0ba4\u0bc7\u0b9f\u0bb5\u0bc1\u0bae\u0bcd...",isMovies:"\u0ba4\u0bbf\u0bb0\u0bc8\u0baa\u0bcd\u0baa\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0ba4\u0bc1\u0bb5\u0bc1\u0bae\u0bcd \u0b95\u0bbf\u0b9f\u0bc8\u0b95\u0bcd\u0b95\u0bb5\u0bbf\u0bb2\u0bcd\u0bb2\u0bc8"},hindi:{search:"\u0916\u094b\u091c",getSearchPlaceholder:"\u0906\u091c \u0906\u092a \u0915\u094d\u092f\u093e \u0926\u0947\u0916\u0928\u093e \u091a\u093e\u0939\u0947\u0902\u0917\u0947?",searchResults:"\u0905\u092a\u0928\u0940 \u092a\u0938\u0902\u0926\u0940\u0926\u093e \u092b\u093f\u0932\u094d\u092e\u0947\u0902 \u092f\u0939\u093e\u0902 \u092a\u094d\u0930\u0926\u0930\u094d\u0936\u093f\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0916\u094b\u091c\u0947\u0902...",isMovies:"\u0915\u094b\u0908 \u092e\u0942\u0935\u0940 \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u0940"},kannada:{search:"\u0cb9\u0cc1\u0ca1\u0cc1\u0c95\u0cbf Kannada",getSearchPlaceholder:"\u0ca8\u0cc0\u0cb5\u0cc1 \u0c87\u0c82\u0ca6\u0cc1 \u0c8f\u0ca8\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb5\u0cc0\u0c95\u0ccd\u0cb7\u0cbf\u0cb8\u0cb2\u0cc1 \u0cac\u0caf\u0cb8\u0cc1\u0ca4\u0ccd\u0ca4\u0cc0\u0cb0\u0cbf?",searchResults:"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cae\u0cc6\u0c9a\u0ccd\u0c9a\u0cbf\u0ca8 \u0c9a\u0cb2\u0ca8\u0c9a\u0cbf\u0ca4\u0ccd\u0cb0\u0c97\u0cb3\u0ca8\u0ccd\u0ca8\u0cc1 \u0c87\u0cb2\u0ccd\u0cb2\u0cbf \u0caa\u0ccd\u0cb0\u0ca6\u0cb0\u0ccd\u0cb6\u0cbf\u0cb8\u0cb2\u0cc1 \u0cb9\u0cc1\u0ca1\u0cc1\u0c95\u0cbf...",isMovies:"\u0caf\u0cbe\u0cb5\u0cc1\u0ca6\u0cc7 \u0c9a\u0cb2\u0ca8\u0c9a\u0cbf\u0ca4\u0ccd\u0cb0\u0c97\u0cb3\u0cc1 \u0c95\u0c82\u0ca1\u0cc1\u0cac\u0c82\u0ca6\u0cbf\u0cb2\u0ccd\u0cb2"}};var k=t(596);const M=()=>{const e=(0,i.v9)((e=>e.config.lang)),s=(0,a.useRef)(),t=(0,i.I0)(),o=async e=>{const t=await fetch("https://api.themoviedb.org/3/search/movie?query=".concat(s.current.value,"&include_adult=false&language=en-US&page=1"),l.St);return(await t.json()).results};return(0,x.jsx)("div",{className:"pt-48 w-full",children:(0,x.jsxs)("form",{onSubmit:e=>e.preventDefault(),className:"text-center mx-5",children:[(0,x.jsx)("input",{ref:s,className:"w-full rounded-md my-2 p-2 md:px-2 md:py-4 w-64 md:w-96 bg-gray-700 text-xs md:text-md text-white",type:"search",placeholder:N[e].getSearchPlaceholder,onChange:o}),(0,x.jsx)("button",{onClick:async()=>{const e=await o();t((0,k.C)(e)),s.current.value=""},className:"bg-[#e50914] px-4 py-2 md:px-6 md:py-4 text-xs md:text-md text-white font-bold rounded-md hover:bg-opacity-80",children:N[e].search})]})})},I=()=>{const e=(0,i.v9)((e=>e.config.lang)),s=(0,i.v9)((e=>{var s;return null===(s=e.search)||void 0===s?void 0:s.searchResult}));if(s)return(0,x.jsxs)("div",{className:"p-5 flex flex-wrap justify-center items-center pt-10 pb-10 gap-2 bg-black bg-opacity-70",children:[0===s.length&&(0,x.jsx)("h1",{className:"text-white text-md md:text-3xl",children:N[e].searchResults}),s.map((e=>(0,x.jsx)(f,{posterPath:null===e||void 0===e?void 0:e.poster_path,movie:e,movieId:null===e||void 0===e?void 0:e.id},e.id)))]})},S=()=>(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"fixed -z-[10] min-h-screen h-full",children:(0,x.jsx)("img",{className:"w-screen h-full object-cover",src:l.bC,alt:"Netflix banner"})}),(0,x.jsx)(M,{}),(0,x.jsx)("div",{className:"pt-6 w-full",children:(0,x.jsx)(I,{})})]}),C=()=>{const e=(0,i.v9)((e=>e.search.showSearch));return n(),(0,x.jsxs)("div",{children:[(0,x.jsx)(r.Z,{}),e?(0,x.jsx)(S,{}):(0,x.jsxs)("div",{className:"w-full",children:[(0,x.jsx)(g,{}),(0,x.jsx)("div",{className:"w-screen",children:(0,x.jsx)(y,{})})]})]})}},585:(e,s,t)=>{t.d(s,{A_:()=>l,E7:()=>h,Qv:()=>n,St:()=>o,Tb:()=>r,UF:()=>p,bC:()=>a,fo:()=>x,kv:()=>c,us:()=>i,xf:()=>m,zF:()=>d});const a="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_medium.jpg",i="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",l="https://juksun.com/wp-content/uploads/2023/02/Leo-Film-2023.jpg",o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWI5MmE3MGMwNmUyNzE5YTRjM2ExN2JkMjExNTIxMSIsInN1YiI6IjYxNzY1ZTUxNjVlMGEyMDA2Mjc5YWM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fTU_iKGJWKLDdmjSxe2ekJO0NjupBVn_VeFOtbt6XWc"}},n="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",r="https://image.tmdb.org/t/p/w500/",c="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",d="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",m="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",h=[{identifier:"en",name:"English"},{identifier:"tamil",name:"Tamil"},{identifier:"hindi",name:"Hindi"},{identifier:"kannada",name:"Kannada"}],p="https://wallpaperbat.com/img/365042-fondos-de-pantalla-animated-movies-animation.jpg",x="https://res.cloudinary.com/dhr74n4vu/image/upload/v1667905093/instashare_pagenotfound_rhhy4q.png"},659:(e,s,t)=>{t.d(s,{auth:()=>o});var a=t(702),i=t(631);const l=(0,a.ZF)({apiKey:"AIzaSyBk5S8dz97unzo1byCeAKGlcrkmHtJ5GKg",authDomain:"netflixgpt-9a43b.firebaseapp.com",projectId:"netflixgpt-9a43b",storageBucket:"netflixgpt-9a43b.appspot.com",messagingSenderId:"651979942801",appId:"1:651979942801:web:97b91100cbb4b610ce4830"}),o=(0,i.v0)(l)}}]);
//# sourceMappingURL=315.a9617d79.chunk.js.map