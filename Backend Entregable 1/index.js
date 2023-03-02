class TicketManager {
    #codeGenerator(codeLength = 15) {
      const numeros = "0123456789";
      const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numYLetras = numeros + letras;
      let codigo = "";
      for (let i = 0; i < codeLength; i++) {
        const random = Math.floor(Math.random() * numYLetras.length);
        codigo += numYLetras.charAt(random);
      }
      return codigo;
    }
  
    #idGenerator() {
      const id =
        this.products.length === 0
          ? 1
          : this.products[this.products.length - 1].id + 1;
      return id;
    }
  
    constructor() {
      this.products = [];
    }
  
    addProduct(titulo, descripcion, precio, thumbnail, stock) {
      const product = {
        id: this.#idGenerator(),
        titulo: titulo,
        description: descripcion,
        precio: precio,
        thumbnail: thumbnail,
        codigo: this.#codeGenerator(),
        stock: stock,
      };
  
      try {
        if (!titulo || !descripcion || !precio || !thumbnail || !stock) {
          throw new Error(
            `Por favor complete todos los parametros requeridos del producto`
          );
        } else {
          this.products.push(product);
        }
      } catch (error) {
        console.log(`Problema agregando producto: ${error.message}`);
      }
    }
  
    getProducts() {
      try {
        console.log(this.products);
      } catch (error) {
        console.log(`Error obteniendo todos los productos: ${error.message}`);
      }
    }
  
    getProductById(id) {
      try {
        const idProduct = this.products.filter(product => product.id === id);
        if (idProduct.length > 0) {
          console.log(idProduct[0]);
        } else throw new Error(`No se encontro`);
      } catch (error) {
        console.log(
          `Problema al buscar producto con el id ${id}: ${error.message}`
        );
      }
    }
  }
  
  const articulos = new TicketManager();
  
  articulos.getProducts();
  articulos.addProduct
  (
    "Taza",
    "Material Vidrio",
    100,
    "----",
    25
  );
  articulos.addProduct(
    "Plato",
    "Material Acrilico",
    200,
    "----",
    10
  );
  articulos.getProductById(2);
  articulos.getProductById(3);