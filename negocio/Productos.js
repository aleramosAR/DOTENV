import model from '../model/Productos.js';

async function getProductosNegocio() {
  return await model.loadProductos();
}

async function getProductoNegocio(id) {
  return await model.loadProducto(id);
}

async function postProductoNegocio(producto) {
  await model.saveProducto(producto);
  return producto;
}

async function deleteProductoNegocio(id) {
  const producto = await model.deleteProducto(id);
  return producto;
}

async function updateProductoNegocio(id, newData) {
  const prod = await getProductoNegocio(id);
  if (!prod) { return res.status(404).json({ error: "Producto no encontrado." }); }

  let newProduct = {};
  newProduct.title = newData.title || prod.title;
  newProduct.price = newData.price || prod.price;
  newProduct.thumbnail = newData.thumbnail || prod.thumbnail;

  const updatedProduct = await model.updateProducto(id, newProduct);
  return updatedProduct;
}

export {
  getProductosNegocio,
  getProductoNegocio,
  postProductoNegocio,
  deleteProductoNegocio,
  updateProductoNegocio
}