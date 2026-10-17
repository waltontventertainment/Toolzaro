import{r as a,j as e}from"./vendor-framework-C8eLFsOz.js";import{t as y}from"./main-BRE-rhmn.js";import{bB as T,D as N,r as D,bI as R,c7 as _,ac as P,Y as k,aG as B,b3 as H}from"./vendor-icons-D8LJYAJ5.js";import"./vendor-firebase-Q6Qz5xyr.js";const I=`# Welcome to Markdown Studio 📝
A clean, privacy-first markdown editor and documentation studio running 100% locally in your browser.

## Key Capabilities
- **Real-Time Split Preview**: Instant side-by-side rendering as you type.
- **100% Private**: Zero cloud sync, auto-saved safely to your browser's \`localStorage\`.
- **Export Ready**: Download formatted documents as \`.md\` or standalone \`.html\`.

### Formatting Cheat Sheet
You can format text with **bold**, *italics*, ~~strikethrough~~, or \`inline code\`.

#### Code Block Example
\`\`\`javascript
function calculateScore(items) {
  return items.reduce((acc, curr) => acc + curr.rating, 0);
}
console.log("Ready to ship!");
\`\`\`

#### Task List
- [x] Complete PDF Editor fix
- [x] Design mobile App Launcher grid
- [ ] Write documentation in Markdown Studio

> "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra

Feel free to start typing or click **Clear** to start from scratch!
`,O=()=>{const[o,t]=a.useState(()=>{if(typeof window<"u"){const s=localStorage.getItem("tz_app_markdown_studio");if(s)return s}return I}),[r,m]=a.useState("split"),[i,f]=a.useState(!1),l=a.useRef(null);a.useEffect(()=>{try{localStorage.setItem("tz_app_markdown_studio",o)}catch{}},[o]);const u=o.trim()?o.trim().split(/\s+/).length:0,w=o.length,j=Math.ceil(u/200)||1,d=(s,p="",x="text")=>{const c=l.current;if(!c)return;const b=c.selectionStart,h=c.selectionEnd,g=o.substring(b,h)||x,E=`${s}${g}${p}`,M=o.substring(0,b)+E+o.substring(h);t(M),setTimeout(()=>{c.focus(),c.setSelectionRange(b+s.length,b+s.length+g.length)},10)},v=async()=>{try{await navigator.clipboard.writeText(o),f(!0),y.success("Markdown copied to clipboard!"),setTimeout(()=>f(!1),2e3)}catch{y.error("Failed to copy to clipboard")}},n=s=>{let p=o,x="text/markdown",c=`Document_${Date.now()}.md`;s==="html"&&(x="text/html",c=`Document_${Date.now()}.html`,p=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exported Document</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; line-height: 1.6; color: #1e293b; }
    pre { background: #f1f5f9; padding: 16px; border-radius: 8px; overflow-x: auto; }
    code { font-family: monospace; background: #e2e8f0; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
    blockquote { border-left: 4px solid #6366f1; margin: 0; padding-left: 16px; color: #475569; }
    table { border-collapse: collapse; width: 100%; margin: 20px 0; }
    th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
    th { background: #f8fafc; }
  </style>
</head>
<body>
${C(o)}
</body>
</html>`);const b=new Blob([p],{type:x}),h=URL.createObjectURL(b),g=document.createElement("a");g.href=h,g.download=c,g.click(),URL.revokeObjectURL(h),y.success(`Downloaded as ${c}`)};return e.jsxs("div",{className:"w-full flex flex-col gap-4",children:[e.jsxs("div",{className:"bg-card border border-border/80 rounded-2xl p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-1",children:[e.jsx("button",{type:"button",onClick:()=>d("**","**","bold text"),className:"p-1.5 rounded-lg hover:bg-secondary text-foreground text-xs font-bold font-mono px-2",title:"Bold",children:"B"}),e.jsx("button",{type:"button",onClick:()=>d("*","*","italic text"),className:"p-1.5 rounded-lg hover:bg-secondary text-foreground text-xs italic font-serif px-2",title:"Italic",children:"I"}),e.jsx("button",{type:"button",onClick:()=>d("## ","","Heading"),className:"p-1.5 rounded-lg hover:bg-secondary text-foreground text-xs font-bold px-2",title:"Heading 2",children:"H2"}),e.jsx("button",{type:"button",onClick:()=>d("> ","","Quote"),className:"p-1.5 rounded-lg hover:bg-secondary text-foreground text-xs px-2",title:"Quote",children:'" "'}),e.jsx("button",{type:"button",onClick:()=>d("`","`","code"),className:"p-1.5 rounded-lg hover:bg-secondary text-foreground text-xs font-mono px-2",title:"Inline Code",children:"</>"}),e.jsx("button",{type:"button",onClick:()=>d("```\n","\n```","code block"),className:"p-1.5 rounded-lg hover:bg-secondary text-foreground text-xs font-mono px-2",title:"Code Block",children:"Code"}),e.jsx("button",{type:"button",onClick:()=>d("- ","","List item"),className:"p-1.5 rounded-lg hover:bg-secondary text-foreground text-xs px-2",title:"Bulleted List",children:"• List"}),e.jsx("button",{type:"button",onClick:()=>d("[Link Title](",")","https://example.com"),className:"p-1.5 rounded-lg hover:bg-secondary text-foreground text-xs px-2",title:"Link",children:"Link"})]}),e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsxs("div",{className:"flex items-center bg-secondary/80 p-0.5 rounded-xl border border-border/60",children:[e.jsxs("button",{type:"button",onClick:()=>m("edit"),className:`p-1.5 sm:px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${r==="edit"?"bg-card text-foreground shadow-2xs":"text-muted-foreground"}`,children:[e.jsx(R,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"hidden sm:inline",children:"Write"})]}),e.jsxs("button",{type:"button",onClick:()=>m("split"),className:`p-1.5 sm:px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${r==="split"?"bg-card text-foreground shadow-2xs":"text-muted-foreground"}`,children:[e.jsx(_,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"hidden sm:inline",children:"Split"})]}),e.jsxs("button",{type:"button",onClick:()=>m("preview"),className:`p-1.5 sm:px-2.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${r==="preview"?"bg-card text-foreground shadow-2xs":"text-muted-foreground"}`,children:[e.jsx(P,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"hidden sm:inline",children:"Preview"})]})]}),e.jsx("button",{type:"button",onClick:v,className:"p-2 rounded-xl border border-border bg-card hover:bg-secondary text-foreground text-xs font-medium flex items-center gap-1 transition-colors",title:"Copy Markdown",children:i?e.jsx(k,{className:"w-3.5 h-3.5 text-emerald-500"}):e.jsx(B,{className:"w-3.5 h-3.5"})}),e.jsxs("button",{type:"button",onClick:()=>n("md"),className:"px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1.5 shadow-xs hover:opacity-95 transition-opacity",children:[e.jsx(N,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Save .md"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-[500px]",children:[(r==="split"||r==="edit")&&e.jsxs("div",{className:`flex flex-col bg-card border border-border/80 rounded-2xl overflow-hidden shadow-2xs ${r==="edit"?"md:col-span-2":""}`,children:[e.jsxs("div",{className:"bg-secondary/40 border-b border-border/60 px-4 py-2 flex items-center justify-between text-xs text-muted-foreground",children:[e.jsx("span",{className:"font-semibold text-foreground",children:"Markdown Source"}),e.jsxs("button",{type:"button",onClick:()=>t(""),className:"hover:text-destructive text-[11px] flex items-center gap-1 transition-colors",children:[e.jsx(H,{className:"w-3 h-3"}),e.jsx("span",{children:"Clear"})]})]}),e.jsx("textarea",{ref:l,value:o,onChange:s=>t(s.target.value),placeholder:"Write or paste markdown here...",className:"w-full flex-1 p-4 font-mono text-sm leading-relaxed bg-transparent text-foreground border-none resize-none focus:outline-none min-h-[460px]",spellCheck:!1})]}),(r==="split"||r==="preview")&&e.jsxs("div",{className:`flex flex-col bg-card border border-border/80 rounded-2xl overflow-hidden shadow-2xs ${r==="preview"?"md:col-span-2":""}`,children:[e.jsxs("div",{className:"bg-secondary/40 border-b border-border/60 px-4 py-2 flex items-center justify-between text-xs text-muted-foreground",children:[e.jsx("span",{className:"font-semibold text-foreground",children:"Live Document View"}),e.jsxs("button",{type:"button",onClick:()=>n("html"),className:"hover:text-primary text-[11px] flex items-center gap-1 transition-colors",children:[e.jsx(N,{className:"w-3 h-3"}),e.jsx("span",{children:"Export HTML"})]})]}),e.jsx("div",{className:"w-full flex-1 p-5 overflow-y-auto max-h-[550px] text-foreground text-sm leading-relaxed prose dark:prose-invert max-w-none",dangerouslySetInnerHTML:{__html:C(o)}})]})]}),e.jsxs("div",{className:"bg-card border border-border/80 rounded-xl px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground shadow-2xs font-mono",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("span",{children:["Words: ",e.jsx("strong",{className:"text-foreground",children:u})]}),e.jsxs("span",{children:["Characters: ",e.jsx("strong",{className:"text-foreground",children:w})]}),e.jsxs("span",{children:["Reading time: ~",e.jsxs("strong",{className:"text-foreground",children:[j," min"]})]})]}),e.jsxs("div",{className:"flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400",children:[e.jsx(k,{className:"w-3 h-3"}),e.jsx("span",{children:"Auto-saved locally"})]})]})]})};function C(o){if(!o)return'<p class="text-muted-foreground italic">Nothing to preview yet.</p>';let t=o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return t=t.replace(/```([a-zA-Z0-9]*)\n([\s\S]*?)```/g,(r,m,i)=>`<pre class="bg-secondary/70 p-3.5 rounded-xl font-mono text-xs overflow-x-auto my-3 border border-border/60"><code>${i.trim()}</code></pre>`),t=t.replace(/`([^`]+)`/g,'<code class="bg-secondary px-1.5 py-0.5 rounded text-xs font-mono text-primary font-semibold">$1</code>'),t=t.replace(/^### (.*$)/gim,'<h3 class="text-base font-bold text-foreground mt-4 mb-2">$1</h3>'),t=t.replace(/^## (.*$)/gim,'<h2 class="text-lg font-extrabold text-foreground mt-5 mb-2.5 pb-1 border-b border-border/60">$1</h2>'),t=t.replace(/^# (.*$)/gim,'<h1 class="text-xl font-black text-foreground mt-2 mb-3 pb-1.5 border-b border-border/80">$1</h1>'),t=t.replace(/^\> (.*$)/gim,'<blockquote class="border-l-4 border-primary/70 pl-3.5 my-3 italic text-muted-foreground bg-primary/5 py-1 rounded-r-lg">$1</blockquote>'),t=t.replace(/\*\*([^*]+)\*\*/g,'<strong class="font-bold text-foreground">$1</strong>'),t=t.replace(/\*([^*]+)\*/g,'<em class="italic">$1</em>'),t=t.replace(/^\- (.*$)/gim,'<li class="ml-4 list-disc text-foreground/90 my-0.5">$1</li>'),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline font-medium hover:opacity-80">$1</a>'),t=t.replace(/\n\n/g,'</p><p class="my-2.5 text-foreground/90">'),`<p class="my-2.5 text-foreground/90">${t}</p>`}const S=`<div class="card">
  <h2>Live Code Studio ✨</h2>
  <p>Test HTML, CSS, and JavaScript with instant client-side rendering.</p>
  <button id="counterBtn">Clicks: 0</button>
</div>`,$=`body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #4f46e5, #06b6d4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1e293b;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  padding: 32px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 360px;
  width: 90%;
}

h2 {
  margin-top: 0;
  color: #1e1b4b;
}

button {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;
}

button:hover {
  background: #4338ca;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
}`,L=`let count = 0;
const btn = document.getElementById('counterBtn');

if (btn) {
  btn.addEventListener('click', () => {
    count++;
    btn.textContent = 'Clicks: ' + count;
    console.log('Button clicked! New count:', count);
  });
}`,F=()=>{const[o,t]=a.useState(S),[r,m]=a.useState($),[i,f]=a.useState(L),[l,u]=a.useState("html"),[w,j]=a.useState("");a.useEffect(()=>{const n=setTimeout(()=>{const s=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${r}</style>
</head>
<body>
  ${o}
  <script>
    try {
      ${i}
    } catch (err) {
      console.error(err);
    }
  <\/script>
</body>
</html>`;j(s)},250);return()=>clearTimeout(n)},[o,r,i]);const d=()=>{t(S),m($),f(L),y.info("Playground reset to default template.")},v=()=>{const n=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Exported Web App</title>
  <style>${r}</style>
</head>
<body>
${o}
<script>${i}<\/script>
</body>
</html>`,s=new Blob([n],{type:"text/html"}),p=URL.createObjectURL(s),x=document.createElement("a");x.href=p,x.download=`WebApp_${Date.now()}.html`,x.click(),URL.revokeObjectURL(p),y.success("Downloaded standalone Web App HTML!")};return e.jsxs("div",{className:"w-full flex flex-col gap-4",children:[e.jsxs("div",{className:"bg-card border border-border/80 rounded-2xl p-3 shadow-2xs flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-1.5 bg-secondary/80 p-0.5 rounded-xl border border-border/60",children:[e.jsx("button",{type:"button",onClick:()=>u("html"),className:`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors ${l==="html"?"bg-card text-primary shadow-2xs":"text-muted-foreground"}`,children:"HTML"}),e.jsx("button",{type:"button",onClick:()=>u("css"),className:`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors ${l==="css"?"bg-card text-primary shadow-2xs":"text-muted-foreground"}`,children:"CSS"}),e.jsx("button",{type:"button",onClick:()=>u("js"),className:`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors ${l==="js"?"bg-card text-primary shadow-2xs":"text-muted-foreground"}`,children:"JS"})]}),e.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[e.jsxs("button",{type:"button",onClick:d,className:"p-2 rounded-xl border border-border bg-card hover:bg-secondary text-muted-foreground hover:text-foreground text-xs font-medium flex items-center gap-1 transition-colors",title:"Reset code",children:[e.jsx(T,{className:"w-3.5 h-3.5"}),e.jsx("span",{className:"hidden sm:inline",children:"Reset"})]}),e.jsxs("button",{type:"button",onClick:v,className:"px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1.5 shadow-xs hover:opacity-95 transition-opacity",children:[e.jsx(N,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Export HTML"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 w-full min-h-[520px]",children:[e.jsxs("div",{className:"flex flex-col bg-card border border-border/80 rounded-2xl overflow-hidden shadow-2xs",children:[e.jsxs("div",{className:"bg-secondary/40 border-b border-border/60 px-4 py-2 flex items-center justify-between text-xs font-mono text-muted-foreground",children:[e.jsxs("span",{children:["Editor (",l.toUpperCase(),")"]}),e.jsx("span",{className:"text-[11px]",children:"Instant Live Compile"})]}),l==="html"&&e.jsx("textarea",{value:o,onChange:n=>t(n.target.value),placeholder:"<!-- Write HTML here -->",className:"w-full flex-1 p-4 font-mono text-xs sm:text-sm leading-relaxed bg-transparent text-foreground border-none resize-none focus:outline-none min-h-[460px]",spellCheck:!1}),l==="css"&&e.jsx("textarea",{value:r,onChange:n=>m(n.target.value),placeholder:"/* Write CSS styles here */",className:"w-full flex-1 p-4 font-mono text-xs sm:text-sm leading-relaxed bg-transparent text-foreground border-none resize-none focus:outline-none min-h-[460px]",spellCheck:!1}),l==="js"&&e.jsx("textarea",{value:i,onChange:n=>f(n.target.value),placeholder:"// Write JavaScript code here",className:"w-full flex-1 p-4 font-mono text-xs sm:text-sm leading-relaxed bg-transparent text-foreground border-none resize-none focus:outline-none min-h-[460px]",spellCheck:!1})]}),e.jsxs("div",{className:"flex flex-col bg-card border border-border/80 rounded-2xl overflow-hidden shadow-2xs",children:[e.jsxs("div",{className:"bg-secondary/40 border-b border-border/60 px-4 py-2 flex items-center justify-between text-xs text-muted-foreground",children:[e.jsxs("span",{className:"font-semibold text-foreground flex items-center gap-1.5",children:[e.jsx(D,{className:"w-3 h-3 text-emerald-500 fill-emerald-500"}),e.jsx("span",{children:"Live Web Sandbox"})]}),e.jsx("span",{className:"text-[11px] font-mono",children:"Isolated IFrame"})]}),e.jsx("iframe",{title:"Live Sandbox Preview",srcDoc:w,sandbox:"allow-scripts",className:"w-full flex-1 min-h-[460px] border-none bg-white rounded-b-2xl"})]})]})]})};export{F as CodePlayground,O as MarkdownStudio};
