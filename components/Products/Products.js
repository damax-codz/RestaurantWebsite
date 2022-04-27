import React from 'react'
import './Products.css'
import Spag3 from '../../images/Spag3.jpg'
import Afangsoup3 from '../../images/Afangsoup3.jpg'
import bangasoup3 from '../../images/bangasoup3.jpg'
import coconutrice from '../../images/coconutrice.jpg'
import eba2 from '../../images/eba2.jpg'
import eforiro from '../../images/eforiro.jpg'
import Plantain2 from '../../images/Plantain2.jpg'
import Fufu2 from '../../images/Fufu2.jpg'
import OfadaRice2 from '../../images/OfadaRice2.jpg'
import ogbono from '../../images/ogbono.jpg'
import Okro from '../../images/Okro.jpg'
import Poundedyam2 from '../../images/Poundedyam2.jpg'
import Spag from '../../images/Spag.jpg'
import Whiterice2 from '../../images/Whiterice2.jpg'
import jollof2 from '../../images/jollof2.jpg'

function Products() {
  return (
    <div className='container'>
      <div className='uni'>
        <h2>You don't need a silver fork to eat good food because eveything taste good when you are hungry</h2>
        
        <div className='oj'>
          <img src={Spag3} alt= 'a Spag3' />
        </div>
      </div>

      <div className='open'>
        <p>Choose from Popular categories</p>
      </div>

      <div className='img'>
        <div className='af'>
           <img src={Afangsoup3} alt= 'a Afangsoup3' />
           <h3>African pot</h3>
           <p>Afangsoup</p>
           <h4>N500</h4>
        </div>

        <div className='at'>
           <img src={bangasoup3} alt= 'a bangasoup3' />
           <h3>African pot</h3>
           <p>Bangasoup</p>
           <h4>N500</h4>
        </div>


        <div className='ap'>
           <img src={eba2} alt= 'a eba2' />
           <h3>African pot</h3>
           <p>Eba</p>
           <h4>N300</h4>
        </div>

        <div className='ap'>
           <img src={coconutrice} alt= 'a coconutrice' />
           <h3>African pot</h3>
           <p>Coconut Rice</p>
           <h4>N300</h4>
        </div>

        
      </div>

      <div className='ig'>

      <div className='ap'>
           <img src={OfadaRice2} alt= '' />
           <h3>African pot</h3>
           <p>Ofada Rice</p>
           <h4>N500</h4>
        </div>

        <div className='ap'>
           <img src={ogbono} alt= '' />
           <h3>African pot</h3>
           <p>Ogbono</p>
           <h4>N500</h4>
        </div>

        <div className='ap'>
           <img src={Okro} alt= '' />
           <h3>African pot</h3>
           <p>Okro Soup</p>
           <h4>N500</h4>
        </div>

        <div className='ap'>
           <img src={Poundedyam2} alt= '' />
           <h3>African pot</h3>
           <p>Pounded  yam </p>
           <h4>N500</h4>
        </div>

      </div>

     <div className='we'>
        <div className='ap'>
           <img src={Fufu2} alt= 'a Fufu2' />
           <h3>African pot</h3>
           <p>Fufu </p>
           <h4>N500</h4>
         </div>

        <div className='ap'>
           <img src={eforiro} alt= '' />
           <h3>African pot</h3>
           <p>Efo riro </p>
           <h4>N500</h4>
         </div>

         <div className='ap'>
           <img src={Plantain2} alt= '' />
           <h3>African pot</h3>
           <p>Plantain </p>
           <h4>N500</h4>
         </div>

         <div className='ap'>
           <img src={Spag} alt= '' />
           <h3>African pot</h3>
           <p>Spaghetti </p>
           <h4>N500</h4>
         </div>
    </div>

    <div className='few'>
       
    <div className='ap'>
           <img src={Whiterice2} alt= '' />
           <h3>African pot</h3>
           <p>Whiterice </p>
           <h4>N500</h4>
         </div>


         <div className='ap'>
           <img src={jollof2} alt= '' />
           <h3>African pot</h3>
           <p>Jollof Rice </p>
           <h4>N500</h4>
         </div>


         <div className='ap'>
           <img src={Spag} alt= '' />
           <h3>African pot</h3>
           <p>Spaghetti </p>
           <h4>N500</h4>
         </div>


         <div className='ap'>
           <img src={Spag} alt= '' />
           <h3>African pot</h3>
           <p>Spaghetti </p>
           <h4>N500</h4>
         </div>


    </div>
       

    </div>
  )
}

export default Products