import axios from 'axios';

export const signIn = async(formValue) => {
  if( formValue.email==='' || formValue.password===''){
    return;
  }

  try {
    const res = await axios({
      method: "post",
      url: "http://localhost:8000/controllers/userController.php/login",
      data: formValue,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const signUp = async(formValue) => {
  if(formValue.fullName==='' || formValue.phoneNumber==='' || formValue.password==='' || formValue.email===''){
    return;
  }

  try {
    const res = await axios({
      method: "post",
      url: "http://localhost:8000/controllers/userController.php/signup",
      data: formValue,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const userInfo = async(token) => {
  if(token === undefined){
      return 
  }
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/userController.php/profile",
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const userAvatar = async(token) => {
  if(!token) return 
  
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/userController.php/avatar",
      headers: { Authorization: `Bearer ${token}` },
    });
    
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const changeUserInfo = async(token, formValue) => {
  if(!token || formValue.phoneNumber === '' || formValue.fullName === '' || formValue.sex === '') return 

  try {
    const res = await axios({
      method: "patch",
      url: "http://localhost:8000/controllers/userController.php/edit",
      data: formValue,
      headers: { Authorization: `Bearer ${token}`,
                'content-type': 'application/x-www-form-urlencoded' },
    });
    
    return res.data;
  } catch(error) {
      return error.response.data;
  }
}

export const userOrder = async(token) => {
  if(!token) return 

  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/orderController.php",
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }
}

export const createOrder = async(token,newCart,payment) => {
  if( !token || !newCart || !newCart.length )
    return;
    
  try {
    const res = await axios({ 
      method: "post",
      url: "http://localhost:8000/controllers/orderController.php",
      data: {
        order:toString(JSON.stringify(newCart)),
        paymentMethod:payment
      },
      headers: { Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data" }
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }  
}

export const userFeedback= async() => {
  try {
    const res = await axios({
      method: "get",
      url: "http://localhost:8000/controllers/reviewController.php",
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }
}

export const postFeedback= async(token,data) => {
  if (!data || data === '') return

  try {
    const res = await axios({
      method: "post",
      url: "http://localhost:8000/controllers/reviewController.php",
      data:{content:data},
      headers: { Authorization: `Bearer ${token}`,
      'content-type': 'application/x-www-form-urlencoded' }
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }
}

export const changePassword= async(token,data) => {
  if (!data) return

  try {
    const res = await axios({
      method: "patch",
      url: "http://localhost:8000/controllers/userController.php/editpassword",
      data:{password:data},
      headers: {Authorization: `Bearer ${token}`,
      'content-type': 'application/x-www-form-urlencoded' }
    });
    return res.data;

  } catch(error) {
      return error.response.data;
  }
}