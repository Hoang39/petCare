import axios from 'axios';

export const getAllPets = async() => {
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/productController.php/pets",
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const getAllPetFoods = async() => {
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/productController.php/foods",
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const getAllServices = async() => {
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/productController.php/services",
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const getAllProducts = async() => {
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/productController.php/products",
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}


export const search = async(keySearch) => {
  if(keySearch===undefined ||keySearch==='')
    return; 

  try {
    const res = await axios({
      method: "get",
      url: `http://localhost:8000/controllers/productController.php/searchItem?keySearch=${keySearch}`,
    })

    return res.data
  } catch(error) {
      return error.response.data;
  }
}
