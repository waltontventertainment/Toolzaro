import{r as s,j as e,R as L}from"./vendor-framework-C8eLFsOz.js";import{t as j}from"./main-BRE-rhmn.js";import{bA as U,B as $,T as B,bX as F,V as _,D as V,aX as P,aH as X}from"./vendor-icons-D8LJYAJ5.js";const S=L.memo(({html:l})=>e.jsx("div",{className:"wiki-styled-content prose prose-sm dark:prose-invert max-w-none leading-relaxed",dangerouslySetInnerHTML:{__html:l}}));S.displayName="WikiHtmlContent";const K=({title:l,isOpen:k,lang:c,onClose:R})=>{const[C,u]=s.useState(""),[A,N]=s.useState(!1),[w,f]=s.useState([]),[x,y]=s.useState(""),[o,a]=s.useState("base"),[b,g]=s.useState(!1),d=s.useRef(null),p=s.useRef(null),T=s.useRef(null);s.useEffect(()=>(typeof window<"u"&&(p.current=window.speechSynthesis),()=>{h()}),[]),s.useEffect(()=>{k&&l?(y(l),f([l]),v(l)):(h(),u(""),a("base"),f([]))},[k,l]);const v=async n=>{N(!0),u(""),h();try{const r=await fetch(`https://${c}.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(n)}&prop=text|sections&format=json&origin=*`);if(r.ok){const i=await r.json();if(i.parse?.text?.["*"]){let t=i.parse.text["*"];t=t.replace(/src="\/\//g,'src="https://'),t=t.replace(/srcset="\/\//g,'srcset="https://'),u(t),d.current&&(d.current.scrollTop=0)}else throw i.error?.info?new Error(i.error.info):new Error("Article content could not be parsed.")}else throw new Error("Wikipedia network response was not successful.")}catch(r){console.error(r),u(`<div class="p-6 text-center text-muted-foreground">
          <p class="font-bold text-red-500 flex items-center justify-center gap-2 mb-2">
            ⚠️ Content Loading Failed
          </p>
          <p class="text-xs">${r.message||"The full text of this article is currently unavailable."}</p>
        </div>`)}finally{N(!1)}},h=()=>{p.current&&p.current.cancel(),g(!1)},E=()=>{if(!p.current)return;if(b){h();return}if(!d.current)return;const n=d.current.innerText.replace(/\[\d+\]/g,"").substring(0,3e3);if(!n.trim()){j.error("No readable text to speak.");return}const r=new SpeechSynthesisUtterance(n);r.lang=c==="bn"?"bn-BD":"en-US";const t=p.current.getVoices().find(m=>m.lang.startsWith(c));t&&(r.voice=t),r.onend=()=>{g(!1)},r.onerror=()=>{g(!1)},T.current=r,g(!0),p.current.speak(r),j.success(c==="bn"?"আর্টিকেলটি পড়ে শুনানো হচ্ছে...":"Reading article aloud...")},z=()=>{if(w.length>1){const n=[...w];n.pop();const r=n[n.length-1];f(n),y(r),v(r)}},W=n=>{const i=n.target.closest("a");if(i){const t=i.getAttribute("href");if(t&&t.startsWith("/wiki/")&&!t.includes(":")){n.preventDefault();const m=decodeURIComponent(t.substring(6)).replace(/_/g," ");f(I=>[...I,m]),y(m),v(m)}else i.setAttribute("target","_blank"),i.setAttribute("rel","noopener noreferrer")}},H=()=>{if(!d.current)return;const n=`Wikipedia Article: ${x}
Language: ${c==="bn"?"Bengali":"English"}

`+d.current.innerText,r=new Blob([n],{type:"text/plain;charset=utf-8"}),i=URL.createObjectURL(r),t=document.createElement("a");t.href=i,t.download=`${x.replace(/\s+/g,"_")}_Article.txt`,document.body.appendChild(t),t.click(),document.body.removeChild(t),j.success("Downloaded article plain text successfully!")},D=()=>o==="xs"?"11px":o==="sm"?"13px":o==="base"?"15px":o==="lg"?"18px":o==="xl"?"22px":o==="2xl"?"26px":"15px";return k?e.jsxs("div",{className:"fixed inset-0 bg-neutral-950/70 backdrop-blur-md flex justify-end z-50 animate-in fade-in duration-200",children:[e.jsxs("div",{className:"w-full max-w-4xl bg-background border-l border-border h-full flex flex-col shadow-2xl relative animate-in slide-in-from-right duration-300",children:[e.jsxs("div",{className:"p-4 sm:p-5 border-b border-border flex items-center justify-between gap-4 bg-muted/30 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[w.length>1&&e.jsx("button",{onClick:z,className:"w-8 h-8 rounded-lg bg-card hover:bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer transition-colors",title:"Go back to previous article",children:e.jsx(U,{className:"w-4 h-4"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[e.jsx($,{className:"w-3.5 h-3.5 text-blue-500"}),e.jsx("span",{className:"text-[10px] font-bold text-muted-foreground tracking-wider uppercase",children:c==="bn"?"উইকিপিডিয়া ফুল রিডার":"Wikipedia Native Reader"})]}),e.jsx("h3",{className:"text-sm sm:text-base font-black text-foreground truncate max-w-xs sm:max-w-md",children:x})]})]}),e.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[e.jsxs("div",{className:"flex items-center bg-card rounded-lg border border-border/80 px-1.5 py-1",children:[e.jsx("button",{onClick:()=>{o==="2xl"?a("xl"):o==="xl"?a("lg"):o==="lg"?a("base"):o==="base"?a("sm"):o==="sm"&&a("xs")},className:"p-1 text-xs hover:text-blue-500 font-bold cursor-pointer",title:"Decrease font size",children:"A-"}),e.jsx(B,{className:"w-3.5 h-3.5 text-muted-foreground mx-1"}),e.jsx("button",{onClick:()=>{o==="xs"?a("sm"):o==="sm"?a("base"):o==="base"?a("lg"):o==="lg"?a("xl"):o==="xl"&&a("2xl")},className:"p-1 text-xs hover:text-blue-500 font-bold cursor-pointer",title:"Increase font size",children:"A+"})]}),e.jsx("button",{onClick:E,className:`p-2 rounded-lg border flex items-center justify-center transition-colors cursor-pointer ${b?"bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400":"bg-card border-border hover:bg-muted text-muted-foreground hover:text-foreground"}`,title:b?"Stop Speech Synthesis":"Read Article Aloud (TTS)",children:b?e.jsx(F,{className:"w-4 h-4"}):e.jsx(_,{className:"w-4 h-4"})}),e.jsx("button",{onClick:H,className:"p-2 rounded-lg bg-card border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer",title:"Download Plain Text Article",children:e.jsx(V,{className:"w-4 h-4"})}),e.jsx("a",{href:`https://${c}.wikipedia.org/wiki/${encodeURIComponent(x)}`,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg bg-card border border-border hover:bg-muted text-muted-foreground hover:text-foreground flex items-center justify-center transition-colors",title:"View original on Wikipedia",children:e.jsx(P,{className:"w-4 h-4"})}),e.jsx("button",{onClick:R,className:"p-2 rounded-lg bg-muted hover:bg-muted-foreground/15 text-muted-foreground hover:text-foreground cursor-pointer transition-colors",children:e.jsx(X,{className:"w-4 h-4"})})]})]}),e.jsx("div",{ref:d,onClick:W,className:"flex-1 overflow-y-auto p-5 sm:p-8 space-y-6",children:A?e.jsxs("div",{className:"h-full flex flex-col items-center justify-center gap-3 text-muted-foreground text-xs py-24",children:[e.jsx("span",{className:"w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin"}),e.jsx("span",{children:"Fetching parsed full content from Wikipedia API..."})]}):e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{style:{"--wiki-font-size":D()},children:e.jsx(S,{html:C})}),e.jsxs("div",{className:"pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-muted-foreground tracking-tight",children:[e.jsx("span",{children:"Article Reader • Interactive Browser Engine v2.0"}),e.jsx("span",{className:"italic",children:"Source: Wikipedia (CC BY-SA 3.0)"})]})]})})]}),e.jsx("style",{children:`
        .wiki-styled-content .mw-empty-elt {
          display: none !important;
        }
        
        /* ---------------------------------------------------- */
        /* LIGHT & DARK UNIVERSAL RESET RULES FOR HIGH CONTRAST */
        /* ---------------------------------------------------- */
        
        /* Force pixel-perfect font resizing via custom CSS variable */
        .wiki-styled-content,
        .wiki-styled-content p,
        .wiki-styled-content span,
        .wiki-styled-content li,
        .wiki-styled-content td,
        .wiki-styled-content th,
        .wiki-styled-content a {
          font-size: var(--wiki-font-size, 14.5px) !important;
        }

        /* Default light mode high contrast text */
        .wiki-styled-content {
          color: #171717 !important; /* neutral-900 */
        }
        
        /* High contrast tables & infoboxes in light mode */
        .wiki-styled-content .infobox, 
        .wiki-styled-content table,
        .wiki-styled-content table.ambox, 
        .wiki-styled-content table.metadata {
          background-color: #f8fafc !important; /* solid slate-50 */
          background: #f8fafc !important;
          color: #171717 !important;
          border: 1px solid #cbd5e1 !important; /* slate-300 */
          border-collapse: collapse !important;
          border-radius: 12px !important;
          padding: 12px !important;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        
        /* Force transparent backgrounds on rows and cells in light mode so they inherit the solid table bg, preventing patchy alternating rows! */
        .wiki-styled-content td,
        .wiki-styled-content tr {
          background-color: transparent !important;
          background: transparent !important;
          color: #171717 !important;
          border-color: #e2e8f0 !important; /* slate-200 dividers */
        }
        
        .wiki-styled-content th {
          background-color: #f1f5f9 !important; /* slate-100 header */
          background: #f1f5f9 !important;
          color: #0f172a !important; /* slate-900 */
          font-weight: 800 !important;
          border-color: #cbd5e1 !important;
        }

        /* Dark Mode Overrides (when body/html has .dark class) */
        .dark .wiki-styled-content {
          color: #f3f4f6 !important; /* gray-100 */
        }
        
        /* Reset inline hardcoded color styles from Wikipedia in dark mode to ensure high readability */
        .dark .wiki-styled-content *:not(a):not(th):not(.reference) {
          color: #e5e7eb !important; /* gray-200 */
        }
        
        /* Force single, solid neutral-900 background for tables and infoboxes in dark mode */
        .dark .wiki-styled-content table,
        .dark .wiki-styled-content .infobox,
        .dark .wiki-styled-content table.ambox,
        .dark .wiki-styled-content table.metadata {
          background-color: #171717 !important; /* solid neutral-900 */
          background: #171717 !important;
          color: #e5e7eb !important; /* gray-200 */
          border: 1px solid #2e2e2e !important; /* neutral-800 */
          border-radius: 12px !important;
          padding: 12px !important;
        }
        
        /* Force transparent backgrounds on rows and cells in dark mode so they inherit the solid table bg, completely eliminating patchy zebra strips! */
        .dark .wiki-styled-content td,
        .dark .wiki-styled-content tr,
        .dark .wiki-styled-content div,
        .dark .wiki-styled-content li,
        .dark .wiki-styled-content caption {
          background-color: transparent !important;
          background: transparent !important;
          color: #e5e7eb !important; /* gray-200 */
          border-color: #262626 !important; /* neutral-850 dividers */
        }
        
        .dark .wiki-styled-content th {
          background-color: #262626 !important; /* neutral-800 header */
          background: #262626 !important;
          color: #ffffff !important;
          border-color: #1a1a1a !important;
        }
        
        .dark .wiki-styled-content a {
          color: #60a5fa !important; /* light blue */
          text-shadow: none !important;
        }
        
        .dark .wiki-styled-content a:hover {
          color: #93c5fd !important;
        }

        .wiki-styled-content table {
          display: block;
          width: 100% !important;
          overflow-x: auto !important;
          border-collapse: collapse;
          margin: 15px 0;
        }
        
        .wiki-styled-content a {
          color: rgb(59, 130, 246) !important;
          text-decoration: none !important;
          font-weight: 700 !important;
        }
        
        .wiki-styled-content a:hover {
          text-decoration: underline !important;
        }
        
        .wiki-styled-content .thumb {
          margin: 15px 0 !important;
          float: none !important;
          text-align: center !important;
        }
        
        .wiki-styled-content .thumbinner {
          display: inline-block !important;
          max-width: 100% !important;
          background-color: var(--color-card) !important;
          border: 1px solid var(--color-border) !important;
          border-radius: 12px !important;
          padding: 8px !important;
        }
        
        .wiki-styled-content img {
          border-radius: 8px !important;
          margin: 0 auto !important;
          max-width: 100% !important;
          height: auto !important;
        }
        
        .wiki-styled-content h1, 
        .wiki-styled-content h2, 
        .wiki-styled-content h3 {
          font-family: var(--font-display) !important;
          font-weight: 900 !important;
          letter-spacing: -0.025em !important;
          color: var(--color-foreground) !important;
          margin-top: 1.5em !important;
          margin-bottom: 0.5em !important;
          border-bottom: 1px solid var(--color-border) !important;
          padding-bottom: 4px !important;
        }
        
        .wiki-styled-content h2 {
          font-size: 1.35em !important;
        }
        
        .wiki-styled-content h3 {
          font-size: 1.15em !important;
        }
        
        .wiki-styled-content ul, .wiki-styled-content ol {
          margin-left: 20px !important;
          margin-bottom: 15px !important;
          list-style-type: disc !important;
        }
        
        .wiki-styled-content li {
          margin-bottom: 4px !important;
        }
        
        .wiki-styled-content p {
          margin-bottom: 12px !important;
          line-height: 1.625 !important;
        }
        
        .wiki-styled-content .reference {
          font-size: 9px !important;
          vertical-align: super !important;
          font-weight: bold !important;
          margin-left: 2px !important;
        }
        
        .wiki-styled-content .navbox, 
        .wiki-styled-content .hatnote, 
        .wiki-styled-content .printfooter {
          display: none !important;
        }
      `})]}):null};export{K as W};
