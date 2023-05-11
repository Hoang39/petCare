import axios from "axios";

export const getUser = async(token) => {
  if(!token) return 
      
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/adminController.php/users",
      headers: {Authorization: `Bearer ${token}` },
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  } 
}

export const getAllOrder = async(token) => {
  if(!token) return 
  
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/adminController.php/orders",
      headers: {Authorization: `Bearer ${token}` },
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }
  
}

export const updateOrderStatus= async(token,data) => {
  try {
    const res = await axios({
      method: "patch",
      url: "http://localhost:8000/controllers/adminController.php/orderstate",
      data:{orderID:data},

      headers: {Authorization: `Bearer ${token}`,
      'content-type': 'application/x-www-form-urlencoded' }
    });

    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const editPet = async(token,data) => {
  if(!token || !data.id) return 
  
  try {
    const res = await axios({
      method: "patch",
      url: "http://localhost:8000/controllers/adminController.php/editPet",
      data:data,
      headers: { Authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded' },
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }
}

export const editFood = async(token,data) => {
  if(!token || !data.id) return 
  
  try {
    const res = await axios({
      method: "patch",
      url: "http://localhost:8000/controllers/adminController.php/editFood",
      data:data,
      headers: {Authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded' },
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }
}

export const editProduct = async(token,data) => {
  if(!token || !data.id) return

  try {
    const res = await axios({
      method: "patch",
      url: "http://localhost:8000/controllers/adminController.php/editPet",
      data:data,
      headers: {Authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded' },
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }
}

export const editService = async(token,data) => {
  if(!token || !data.id) return

  try {
    const res = await axios({
      method: "patch",
      url: "http://localhost:8000/controllers/adminController.php/editService",
      data:data,
      headers: {Authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded' },
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }
}