import {ADD_TO_CART,ADD_COUNTER} from './mutationsType'
export default {
  [ADD_COUNTER](state,oldProduct){
     oldProduct.count++
  },
  [ADD_TO_CART](state,newProduct){
    newProduct.count=1
    newProduct.isChecked=true
    state.carList.push(newProduct)
  }
  
}