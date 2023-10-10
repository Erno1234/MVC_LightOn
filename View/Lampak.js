import LampaElem from "./LampaElem.js";
class Lampak {
  #jatekmezo;
  constructor(szuloElem, n) {
    this.#jatekmezo = n * n;
    for (let index = 0; index < this.#jatekmezo; index++) {
      new LampaElem(szuloElem, index);
    }
  }
}
export default Lampak;
