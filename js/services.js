const BASE_URL = "http://localhost:3001/products";

const productList = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao obter a lista de produtos:", error);
  }
};

const createProduct = async (name, price, image) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, image }),
    });

    const data = await response.json();
    console.log("Solicitude POST feita com sucesso:", data);
    return data;
  } catch (error) {
    console.error("Erro na solicitude POST:", error);
  }
};

const deleteProduct = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(`Produto com id ${id} deletado com sucesso`);
  } catch (error) {
    console.error("Erro na solicitude DELETE:", error);
  }
};

export const servicesProducts = {
  productList,
  createProduct,
  deleteProduct,
};