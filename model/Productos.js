import ProductosMemory from './memory/Productos.js';
import ProductosFileSystem from './file/Productos.js';
import ProductosMongo from './mongo/Productos.js';
import ProductosMySQL from './mysql/Productos.js';

class FactoryProductos {

	static set(db) {
		console.log('**** PERSISTENCIA DE PRODUCTOS **** [' + db + ']');
		switch (db) {
			case 'mem':
				return ProductosMemory.getInstance();
			case 'file':
				return ProductosFileSystem.getInstance();
			case 'mongo':
				return ProductosMongo.getInstance();
			case 'mysql':
				return ProductosMySQL.getInstance();
		}
	}
}

const db = process.env.PERSISTENCIA || 'mem'
export default FactoryProductos.set(db);