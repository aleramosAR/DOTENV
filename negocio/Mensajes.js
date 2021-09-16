import model from '../model/Mensajes.js';

async function getMensajesNegocio() {
  return await model.loadMensajes();
}

async function postMensajeNegocio(mensaje) {
  const dt = new Date();
  mensaje.fecha = `${
    (dt.getMonth()+1).toString().padStart(2, '0')}/${
    dt.getDate().toString().padStart(2, '0')}/${
    dt.getFullYear().toString().padStart(4, '0')} ${
    dt.getHours().toString().padStart(2, '0')}:${
    dt.getMinutes().toString().padStart(2, '0')}:${
    dt.getSeconds().toString().padStart(2, '0')}`;
  await model.saveMensaje(mensaje)
  return mensaje
}

export { postMensajeNegocio, getMensajesNegocio }