import { postMensajeNegocio, getMensajesNegocio } from '../negocio/Mensajes.js';

async function getMensajeController(req, res) {
  try {
    const mensajes = await getMensajesNegocio();
    res.status(200).json(mensajes);
  } catch (err) {
    return res.status(404).json({ error: "No hay mensajes cargados." });
  }
};

async function postMensajeController(req, res) {
  try {
    const mensajeData = req.body;
    const newMensaje = await postMensajeNegocio(mensajeData);
    res.status(201).json(newMensaje);
  } catch (err) {
    res.status(400).send();
  }
};

async function getMensajes() {
  try {
    const mensajes = await getMensajesNegocio();
    return mensajes;
  } catch (err) {
    return { error: "No hay mensajes cargados." };
  }
};

export {
  getMensajeController,
  postMensajeController,
  getMensajes
}