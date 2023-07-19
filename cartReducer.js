let initialState=[]
export const carReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD":{
            state=[...state,action.payload]
            localStorage.setItem("cartItems",JSON.stringify(state))
            return state
        }
        case "REMOVE":{
           let data=JSON.parse(localStorage.getItem("cartItems"));
            data=data.filter(data=>data.id !== action.id);

            localStorage.setItem("cartItems",JSON.stringify(data))
                return data
            };
        case'CHECKOUT':{
            const checkoutData=action.payload;
            localStorage.removeItem('cartItems')
            localStorage.setItem("checkoutItems",JSON.stringify(checkoutData))
            state=[];
            return state;
        }
        default:{
            const data=JSON.parse(localStorage.getItem("cartItems"));
            if(data=== null){
                return state
            }else{
                return data;
            }
          }
    }
}