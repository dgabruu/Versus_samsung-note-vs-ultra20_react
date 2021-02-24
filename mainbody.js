import React from 'react';
import img1 from './sam1.JPG';
import img2 from './sam2.JPG';


function mobilebody()
{
    return(
        
        <div className='  mt-4  '  >
          <p className='d-inline 'style={{position:'absolute', left:'260px'}} ><strong>Samsung Galaxy Note 20 Ultra
              </strong></p>
              <p className='d-inline  ' style={{position:'absolute', right:'260px'}} ><strong>Samsung Galaxy S20 Ultra</strong></p>   
              <div  className='d-flex justify-content-start mt-1 '
              style={{marginLeft:'180px' , position: 'absolute',top:'350px'}} > 
            <img src={img1} alt='sam1' height='500px' height='500px' style={{borderRadius:'20%',paddingBottom:'140px'}} />
            </div>
            
            <div className='d-flex justify-content-end ' 
            style={{position: 'absolute',right: '0',top:'360px',marginRight:'180px'}}  > 
           
            <img src={img2} alt='sam2' height='500px' height='500px' style={{borderRadius:'20%',paddingBottom:'140px'}} />
        </div> 
        
        
 </div> 
        
    );
}

export default mobilebody;