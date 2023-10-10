import Model from "../Model/LampakModel.js";
import Lampak from "../View/Lampak.js";
class Controller {
    #jatekmeret
  constructor() {
    this.#jatekmeret = 3;
    const MODEL = new Model(this.#jatekmeret);
    const LAMPAK = new Lampak($(".jatekter"), this.#jatekmeret);

    $(window).on("csere", (event) => {
        MODEL.setAllapot(event.detail.getIndex());
        event.detail.setSzin(MODEL.getAllapot());
    });
  }
}
export default Controller;
