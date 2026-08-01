window.Files={
  render(){
    const e=document.getElementById("files");

    if(!Config.files.length){
      e.innerHTML=`<div class="empty">${I18n.t("noFiles")}</div>`;
      return;
    }

    e.innerHTML=Config.files.map(f=>{
      const ext=f.name.split(".").pop().toLowerCase();
      const icon=ext==="7z"?"7z.svg":"zip.svg";
      const url=`${Config.folder}/${Utils.path(f.name)}`;

      return `
        <article class="file-card">
          <div class="file-icon">
            <img src="assets/svg/${icon}" alt="">
          </div>
          <div class="file-meta">
            <strong>${Utils.esc(f.name)}</strong>
            <span>${Utils.esc(f.description||I18n.t("downloadFile"))} · ${Utils.esc(f.size||I18n.t("unknownSize"))}</span>
          </div>
          <a class="download-btn" href="${url}" download>
            <img src="assets/svg/download.svg" alt="">
            ${I18n.t("download")}
          </a>
        </article>
      `;
    }).join("");
  }
};