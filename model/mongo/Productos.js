import Producto from './models/Producto.js'

let instance = null;

export default class ProductosMongo {

  static getInstance() {
		if (!instance) {
			instance = new ProductosMongo();
		}
		return instance;
	}

  loadProductos = async () => {
    return await Producto.find();
  };
  
  loadProducto = async (id) => {
    return await Producto.findOne({ _id: id })
  };
  
  saveProducto = async (producto) => {
    const newProducto = new Producto(producto);
    await newProducto.save();
  };
  
  deleteProducto = async (id) => {
    await Producto.findOneAndRemove({ _id: id });
    return id;
  };
  
  updateProducto = async (id, newProduct) => {
    const updatedProducto = await Producto.replaceOne({ _id: id }, newProduct );
    return updatedProducto;
  };

}