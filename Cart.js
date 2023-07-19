import React, { useEffect, useState } from 'react'
import NormalLayout from '../Layout/NormalLayout'
import { useSelector,useDispatch } from 'react-redux'
import "../style.css"
import { removeFromCartAction } from '../Components/actions/removeActions'
import { getTotalAmount } from '../Components/actions/addToCartActions'
import { checkoutAction } from '../Components/actions/checkoutAction'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'

const Cart = () => {
       const dispatch = useDispatch()
       const cartData=useSelector(state=>state.books);
       const[amt,setAmt]=useState(0);
       const nav =useNavigate();
       useEffect(()=>{
        let x = getTotalAmount();
        setAmt(x);
       },[cartData])
       const handleCheckout=()=>{
        dispatch(checkoutAction(cartData));
        nav('/checkout')
      }

  return (
    <NormalLayout>
      <>
      <h1>Cart</h1>
      <hr/>

      {cartData.length<1?
      <h2> No items in Cart. Visit <Link to={'/products'}>Products</Link>Page.</h2>
      :
      <>
      <div className='tableAlign'>
      <table className='cartTable'>
        <tbody className='cartTableBody'>
          <tr>
            <td>S.No.</td>
            <td>Name</td>
            <td>Image</td>
            <td>Price</td>
          </tr>
                 {cartData.map((item, index)=>{
            return(
            <tr className='cartTableRow' key={index}>
              <td className='cartTableData'>{item.id+1}</td>
              <td className='cartTableData'><h4>{item.name}</h4></td>
              <td className='cartTableData'><img src={item.link} alt='No Img' width='100px' height='100px' /></td>
              <td className='cartTableData'>Rs.{item.price}</td>
              <td><button onClick={()=>dispatch(removeFromCartAction(item.id))}>×</button></td>
            </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <h2>Total Amount:{amt}</h2>
        <button onClick={handleCheckout}>Checkout</button>
        <br/><br/>
      </div>
      </div>
      </>}
      <hr/>
      <div>
      <footer>
          <Footer/>
        </footer>
      </div>
      </>
    </NormalLayout>
  )
}

export default Cart