class LampaElem {
  #index;

  constructor(szuloElem, index) {
    this.#index = index;
    this.szuloElem = szuloElem;
    this.#htmlLetrehozasas();
    this.lampa = $(".lampa:last-child");
    this.lampa.on("click", () => {
            this.#esemenyLetrehozas("csere");

        
    });
  }
  getIndex() {
    return this.#index;
  }

  setSzin(ertek) {
    console.log(ertek)
    if (ertek) {
        this.lampa.css("background-color", "green");
    } else {
        this.lampa.css("background-color", "yellow");
    }
  }

  #esemenyLetrehozas(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this });
    window.dispatchEvent(esemenyem);
  }

  #htmlLetrehozasas() {
    let txt = "";
    txt += `<div class="lampa"><p></p></div>`;
    this.szuloElem.append(txt);
  }
}
export default LampaElem;
