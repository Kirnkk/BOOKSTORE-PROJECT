import {books} from '../../data'

export const handleAddToCart=(id)=>{
let carBook=books[id];
return{type:'ADD',payload:{...carBook,id:id}}
}


export const getTotalAmount=()=>{
    let pp =0;
    let data=JSON.parse(localStorage.getItem("cartItems"));
    let checkoutData=JSON.parse(localStorage.getItem("checkoutItems"));
    if(data!==null){
    for(let i=0;i<data.length;i++){
    pp += data[i].price;
    }
    return pp;
}else if(checkoutData !==null){
    for(let i=0;i<checkoutData.length;i++){
        pp += checkoutData[i].price;
        }
    return pp;
}
else{
    return pp;
}
}