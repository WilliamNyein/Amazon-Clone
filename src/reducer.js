

export const initialState = {
    basket:[],
    user:null
}

//selector
export const getBasketTotal=(basket)=>{
    basket?.reduce((amount,item)=> item.price+amount,0)
}

export const reducer = (state,action)=>{
    switch(action.type){
        case "Add_to_basket":
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'Remove_from_Basket':
            const index = state.basket.findIndex((item)=>
            item.id === action.id);
            const newBasket = [...state.basket]
            if (index>=0){
                newBasket.splice(index,1)
            }else{
                console.warn(`U cannot remove product with ${action.id}`)
            }
            return{
                ...state,
                basket:newBasket
            };
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[]
            }
        case 'Set_user':
            return{
                ...state,
                user:action.user
            };
        
        case 'Unset_user':
            return{
                ...state,
                user:action.user
            };
        default:
            return state;
    }
}