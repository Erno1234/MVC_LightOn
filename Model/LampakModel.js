class Model {
  #allapotLista = [];
  #jatekmeret;
  #allapot;
 
  constructor(jatekmeret) {
    this.#jatekmeret =jatekmeret*jatekmeret;
    this.allapotListaFeltolt();
  }
  setAllapot(index) {
    this.#allapotLista[index] = !this.#allapotLista[index];
    this.#allapot = this.#allapotLista[index];
    console.log(this.#allapotLista);
  }
  getAllapot() {
    return this.#allapot;
  }

  allapotListaFeltolt() {
    for (let index = 0; index < this.#jatekmeret; index++) {
      this.#allapotLista[index] = true;
    }
  }
}
export default Model;
