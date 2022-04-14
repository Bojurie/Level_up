import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './FeatureContent.css'
// import NewArrival from './NewArrival';
// import axios from 'axios';
// import Products from './Products';

// https:www.printful.com/oauth/whFlyJuGlJdDFoquwGttpjMGnWY1UOTRdxcKxQrv?product-templates
const FeatureContent = () => {
  const [clothings, getClothings] = useState([])
    
      useEffect(() => {
       const fetchClothings = async () =>{
         try {
           const response = await axios.get('https:www.printful.com/')
          if(response && response.data) getClothings(response.data)
         } catch(err){
           if(err.response) {
          console.log(err)
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header);
          } else {
            console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchClothings();
  }, [])

  return (
    <>
        <div className='content-wrapper'>
           <div className='content-header'>
             <h1>Shop Now</h1>
           </div>
            <div className='cards'>
              <div className='cards-image'>
                <div style={{textAlign: 'center', fontSize: '2rem' }}>
                  <h1>Feature Products</h1>
                    {
                      clothings.map(clothing => <div key={clothing.id}>{clothing.title}</div>)
                    }
                </div>

              </div>

            </div>
           <div>
             {/* <Products /> */}
           </div>
        </div>
    </>
  )
}

export default FeatureContent
