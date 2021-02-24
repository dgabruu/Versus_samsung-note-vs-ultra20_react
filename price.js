import React from 'react'
import Nav from './nav'
import Foot from './footer'
import Phone from './price.JPG'
import Phone2 from './phone2.JPG'
function myprice()
{

    return(
        <div>
        <div style={{textAlign:'center'}}>
        <Nav />
        </div>
        <img src={Phone} alt='phoneprice'  className='m-4'/>
        <img src={Phone2} alt='phoneprice'  className='m-4' style={{position:'absolute',right:0,marginRight:'30px'}}/>
        <Foot />
        </div>
    )
}

export default myprice;