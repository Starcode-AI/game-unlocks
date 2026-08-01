window.History={
  items:[],

  init(){
    try{
      this.items=JSON.parse(localStorage.getItem("searchHistory"))||[];
    }catch{
      this.items=[];
    }
    this.render();
  },

  add(q){
    q=Utils.clean(q);
    if(!q)return;
    this.items=this.items.filter(x=>x.q.toLowerCase()!==q.toLowerCase());
    this.items.unshift({q,t:Date.now()});
    this.items=this.items.slice(0,Config.maxHistory);
    localStorage.setItem("searchHistory",JSON.stringify(this.items));
    this.render();
  },

  clear(){
    this.items=[];
    localStorage.removeItem("searchHistory");
    this.render();
  },

  render(){
    const e=document.getElementById("history");

    if(!this.items.length){
      e.innerHTML=`<div class="empty">${I18n.t("noSearches")}</div>`;
      return;
    }

    e.innerHTML=this.items.map(x=>`
      <div class="history-item">
        <button data-query="${Utils.esc(x.q)}">${Utils.esc(x.q)}</button>
        <time>${Utils.time(x.t)}</time>
      </div>
    `).join("");

    e.querySelectorAll("button").forEach(b=>{
      b.onclick=()=>{
        document.getElementById("fileInput").value=b.dataset.query;
        Search.run(b.dataset.query);
      };
    });
  }
};