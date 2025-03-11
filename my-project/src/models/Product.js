class Product {
  constructor({
    id,
    brand,
    model,
    price,
    imgUrl,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCamera,
    dimentions,
    weight,
    options,
  }) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.imgUrl = imgUrl;
    this.cpu = cpu;
    this.ram = ram;
    this.os = os;
    this.displayResolution = displayResolution;
    this.battery = battery;
    this.primaryCamera = primaryCamera;
    this.secondaryCamera = secondaryCamera;
    this.dimentions = dimentions;
    this.weight = weight || "No disponible";
    this.options = options;
  }

static fromApiResponse(data) {
    console.log(data)
  return new Product({
    id: data.id,
    brand: data.brand,
    model: data.model,
    price: data.price,
    imgUrl: data.imgUrl,
    cpu: data.cpu,
    ram: data.ram,
    os: data.os,
    displayResolution: data.displayResolution,
    battery: data.battery,
    primaryCamera: Array.isArray(data.primaryCamera) ? data.primaryCamera.join(", ") : data.primaryCamera || "No disponible",
    secondaryCamera: Array.isArray(data.secondaryCmera) ? data.secondaryCmera.join(", ") : data.secondaryCmera || "No disponible",
    dimentions: data.dimentions,
    weight: data.weight || "No disponible",
    options: data.options,
  });
  }
}

export default Product;
