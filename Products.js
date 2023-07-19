import React from 'react'
import NormalLayout from '../Layout/NormalLayout'
import { books } from '../data'
import { useDispatch } from 'react-redux'
import { handleAddToCart } from '../Components/actions/addToCartActions'
import "../style.css"
import Footer from '../Components/Footer'


const Products = () => {
  const dispatch = useDispatch()
  return (
   <NormalLayout>
    <>
    <h1>Products</h1>
    <hr/>
    <div className='bookContainer'>
        {books.map((item,index)=>{
            return(
                <div className='bookItem' key={index}>
                    <img src={item.link} alt='NoImage' width='150px' height='150px'/>
                    <br/>
                    <h3>{item.name}</h3>
                    <h4>Price=Rs:{item.price}</h4>
                    <button onClick={()=>dispatch(handleAddToCart(index))}>Add to Cart</button>

                    </div>
            )
        })}
    </div>
    <hr/><hr/>
    <div>
      <footer>
          <Footer/>
      </footer>
    </div>
    </>
    </NormalLayout>
  )
}

export default Products