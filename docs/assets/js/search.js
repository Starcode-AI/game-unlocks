window.Search={
  async run(value){
    const q=Utils.clean(value);
    const r=document.getElementById("result");

    if(!q)return;

    History.add(q);
    r.classList.remove("hidden");
    r.innerHTML=`
      <div class="result-card">
        <div class="result-left">
          <img src="assets/svg/loading.svg" alt="">
          <div>
            <h3>${I18n.t("searchingTitle")}</h3>
            <p>${I18n.t("searchingText")}</p>
          </div>
        </div>
      </div>
    `;

    for(const ext of Config.extensions){
      const name=`${q}.${ext}`;
      const url=`${Config.folder}/${Utils.path(name)}`;

      if(await Utils.exists(url)){
        r.innerHTML=`
          <div class="result-card">
            <div class="result-left">
              <img src="assets/svg/success.svg" alt="">
              <div>
                <h3>${Utils.esc(name)}</h3>
                <p>${I18n.t("foundText")}</p>
              </div>
            </div>
            <a class="download-btn" href="${url}" download>
              <img src="assets/svg/download.svg" alt="">
              ${I18n.t("downloadNow")}
            </a>
          </div>
        `;
        return;
      }
    }

    r.innerHTML=`
      <div class="result-card">
        <div class="result-left">
          <img src="assets/svg/error.svg" alt="">
          <div>
            <h3>${I18n.t("notFoundTitle")}</h3>
            <p>${I18n.t("searchedFor")} ${Utils.esc(q)}.zip / ${Utils.esc(q)}.7z</p>
          </div>
        </div>
      </div>
    `;
  }
};