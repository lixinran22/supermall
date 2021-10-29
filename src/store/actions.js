import {ADD_TO_CART,ADD_COUNTER} from './mutationsType'
export default {
   addToCart(context,newProduct){
     let oldProduct=null
     for(let item of context.state.carList){
       if(item.iid===newProduct.iid) {
         oldProduct=item
        }
     }
     if(oldProduct){
      context.commit(ADD_COUNTER,oldProduct)
     }else{
      context.commit(ADD_TO_CART,newProduct)
     }
   }
  
};
