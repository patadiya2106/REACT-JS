class APIService {
  ProductsURL: string = "http://localhost:8000/fashion/";

  async fetchAllProducts() {

    const response = await fetch(this.ProductsURL);

    const data = await response.json();
    console.log(data);

    return data;
  }

  async addProduct(ProductsData: any) {

    const response = await fetch(this.ProductsURL, {
      method: "POST",
      body: JSON.stringify(ProductsData),
    });
    return response.ok;
  }

  async deleteProducts(id: string) {
    const res = await fetch(this.ProductsURL + id, {
      method: "DELETE"
    });

    return res.ok;
  }


  async fetchProductsById(id: string) {
    const res = await fetch(this.ProductsURL + id);

    const data = await res.json();

    return data;
  }

  async updateProducts(id: string, updatedData: any) {
    const res = await fetch(this.ProductsURL + id, {
      method: "PATCH",
      body: JSON.stringify(updatedData),
    });

    return res.ok;
  }
}

export interface FashionType {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
}

export const FashionAPIService = new APIService();