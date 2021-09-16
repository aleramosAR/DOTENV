import fs from 'fs';

let instance = null;

export default class MensajesFileSystem {

	static getInstance() {
		if (!instance) {
			instance = new MensajesFileSystem();
		}
		return instance;
	}

	constructor() {
    this.mensajesLOG = './model/file/logs/mensajes.txt';

		(async () => {
			try {
				await fs.promises.readFile(this.mensajesLOG);
			} catch {
				await fs.promises.writeFile(this.mensajesLOG, JSON.stringify([]));
			}
		})();
	}

  loadMensajes = async () => {
    try {
			return JSON.parse(await fs.promises.readFile(this.mensajesLOG));
		} catch (error) {
			console.log(error);
		}
  };

  saveMensaje = async (mensaje) => {
    try {
			const mensajes = JSON.parse(await fs.promises.readFile(this.mensajesLOG));
      mensajes.push(mensaje);
			await fs.promises.writeFile(this.mensajesLOG, JSON.stringify(mensajes, null, "\t"));
		} catch (error) {
			console.log(error);
		}
  };
}