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
        if (Math.random() < 0.2) {
            this.#allapotLista[index] = true;
        } else {
            this.#allapotLista[index] = false;
        }
     
    }
  }
}
export default Model;
