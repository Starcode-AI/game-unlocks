document.addEventListener("DOMContentLoaded",()=>{
  I18n.apply();
  Theme.init();
  History.init();
  Files.render();

  const f=document.getElementById("searchForm");
  const i=document.getElementById("fileInput");
  const c=document.getElementById("clearBtn");

  f.onsubmit=e=>{
    e.preventDefault();
    Search.run(i.value);
  };

  i.oninput=()=>{
    c.classList.toggle("hidden",!i.value);
  };

  c.onclick=()=>{
    i.value="";
    c.classList.add("hidden");
    i.focus();
  };

  document.getElementById("themeBtn").onclick=()=>Theme.toggle();
  document.getElementById("clearHistoryBtn").onclick=()=>History.clear();
  document.getElementById("refreshBtn").onclick=()=>Files.render();
});