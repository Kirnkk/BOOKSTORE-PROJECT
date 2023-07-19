import React,{useEffect, useState} from 'react'
import NormalLayout from '../Layout/NormalLayout'
import { getTotalAmount } from '../Components/actions/addToCartActions';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import "../style.css"

const Checkout = () => {
  const [finalItems,setFinalItems]=useState([{}]);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    let chckData=JSON.parse(localStorage.getItem("checkoutItems"));
    setFinalItems(chckData);
    setTotal(getTotalAmount());
  },[])
  return (
    <NormalLayout>
      <>
      <h1>Checkout</h1>
      <hr/>
      {finalItems== null?
      <h2>There is Nothing to Checkout with!! .Visit <Link to={'/products'}>Products</Link>Page.</h2>
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
          {finalItems.map((item, index) => {
            return(
              <tr className='cartTableRow' key={index}>
                <td className='cartTableData'>{index+1}</td>
                <td className='cartTableData'><h5>{item.name}</h5></td>
                <td className='cartTableData'><img src={item.link} width='100px' height='100px' alt='NoImg' /></td>
                <td className='cartTableData'>Rs. {item.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <h2 style={{paddingTop:"50px"}}>Total Amount:{total}</h2>
        </div>
        </div>
        </>
        }
      <div>
        <footer>
          <Footer/>
        </footer>
        </div>
      </>
      </NormalLayout>
  )
}

export default Checkout