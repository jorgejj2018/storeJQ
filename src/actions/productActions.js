import { firebase , db } from '../firebase/firebaseConfig';
export const getAllProduct = (data) => async (dispatch)  =>{
    console.log(data)
    dispatch({ type: 'listarProduct', payload: data});
}
export const ProductActionsDetail = (slug) => async (dispatch) => {
    const res = await db.collection('products').doc(slug).get()
    const data = await res.data()
        //console.log(data)
        //dispatch({ type: 'detailProduct', payload: data });
};
export const createProduct = (products) => async (dispatch, getState) => {
    try {
        products.forEach(el=> {
            db.collection('products').add(el); 
        });
      }
     catch (error) {
      alert('algo salio mal');
      console.log(error);
    }
  
  };




