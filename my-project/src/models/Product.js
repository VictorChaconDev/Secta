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
    secondaryCmera,
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
    this.secondaryCmera = secondaryCmera;
    this.dimensions = dimentions;
    this.weight = weight || "No disponible";
    this.options = options;
  }

  static fromApiResponse(data) {
    {
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
        cameras: [
          data.primaryCamera,
          Array.isArray(data.secondaryCmera) ? data.secondaryCmera.join(", ") : data.secondaryCmera || "No disponible"
        ].filter(Boolean).join(" / "),
        dimentions: data.dimentions,
        weight: data.weight,
        options: data.options,
      });
    }
  }
}

export default Product;
