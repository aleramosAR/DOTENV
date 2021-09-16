import Mensaje from './models/Mensaje.js';

let instance = null;

export default class MensajesMongo {

  static getInstance() {
		if (!instance) {
			instance = new MensajesMongo();
		}
		return instance;
	}

  loadMensajes = async () => {
    return await Mensaje.find();
  };

  saveMensaje = async (mensaje) => {
    const newMensaje = new Mensaje(mensaje);
    await newMensaje.save();
  };
}