import React from 'react'
import Nav from './nav'
import Foot from './footer'

var data=require('./data2')

class myprice extends React.Component
{
    render(){

    return(
        <div>
        <div style={{textAlign:'center'}}>
        <Nav />
        </div>
        <h1 className=' text-dark m-5'><i class="fas fa-mobile"></i> {data.design[0].data1} </h1>
        <div className='bg-info  d-inline-block' style={{width:'310px',height:'150px',marginLeft:'30px'}}>
       <u> <h5 className=' p-2'>{data.design[0].data2}</h5><br></br></u> 
        <i class='fas fa-check text-success m-1'></i> {<strong>{data.design[0].data5}</strong>} {<br />} {<br />}
        <i class='fas fa-check text-success m-1'></i> {<strong>{data.design[0].data6}</strong>}
        </div>
        
        <div className='bg-info d-inline-block' style={{width:'310px',height:'150px',marginLeft:'80px'}}>
       <u> <h5 className=' p-2'>{data.design[0].data3}</h5><br></br></u> 
        <i class='fas fa-check text-success m-1'></i> {<strong>{data.design[0].data5}</strong>} {<br />} {<br />}
        <i class='fas fa-check text-success m-1'></i> {<strong>{data.design[0].data6}</strong>}
        </div>
        
        <div className='bg-info  d-inline-block' style={{width:'310px',height:'150px',marginLeft:'80px'}}>
       <u> <h5 className=' p-2'>{data.design[0].data4}</h5></u> 
       <span className='p-2 '>202g</span>
         <div className="progress">
             
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<span className='p-2 '>222g</span>
<div className="progress ">
<div className="progress-bar bg-green" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
      <br></br>
      <h1 className=' text-dark m-4'><i class="far fa-image"></i> {data.display[0].data1} </h1>
      <div className='d-inline-block bg-info mt-3' style={{width:'310px',height:'150px',marginLeft:'30px'}}>
      <u> <h5 className=' p-2'>{data.display[0].data2}</h5><br></br></u> 
      <i class='fas fa-check text-success m-1'></i> {<strong>{data.display[0].data5}</strong>} {<br />} {<br />}
        <i class='fas fa-check text-success m-1'></i> {<strong>{data.display[0].data6}</strong>}
      </div>

      <div className='bg-info d-inline-block' style={{width:'310px',height:'150px',marginLeft:'80px'}}>
       <u> <h5 className='m-1'>{data.display[0].data3}</h5><br></br></u> 
       <span className='p-2 '>508 ppi</span>
         <div className="progress">
             
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<span className='p-2 '>511 ppi</span>
<div className="progress ">
<div className="progress-bar bg-green" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>

        <div className='bg-info d-inline-block' style={{width:'310px',height:'150px',marginLeft:'80px'}}>
       <u> <h5 className='m-1'>{data.display[0].data4}</h5><br></br></u> 
       <span className='p-2 '>1440 x 3088px</span>
         <div className="progress">
             
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "50%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<span className='p-2 '>1440 x 3200px</span>
<div className="progress ">
<div className="progress-bar bg-green" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>



        </div>

        <br></br>
      <h1 className=' text-dark m-4'><i class="fas fa-mobile-alt"></i> {data.perf[0].data1} </h1>
      <div className='d-inline-block bg-info mt-3' style={{width:'310px',height:'230px',marginLeft:'30px'}}>
      <u> <h5 className=' p-2'>{data.perf[0].data2}</h5></u> 
      <span className='p-2  '>2 x 2.7GHz - 4 x 2.4GHz - 2 x 1.95GHz (Samsung Exynos 990)</span>
         <div className="progress ">
             
  <div className="progress-bar bg-warning " role="progressbar" style={{width: "60%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div> <br></br>
<span className='p-2 ' >2 x 2.7GHz - 4 x 2.4GHz - 2 x 1.95GHz (Samsung Exynos 990)</span>
<div className="progress ">
<div className="progress-bar bg-green" role="progressbar" style={{width: "70%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
      </div>

      <div className='bg-info d-inline-block' style={{width:'310px',height:'150px',marginLeft:'80px'}}>
       <u> <h5 className='m-1'>{data.perf[0].data3}</h5><br></br></u> 
       <span className='p-2 '>8 GB</span>
         <div className="progress">
             
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "30%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<span className='p-2 '>16 GB</span>
<div className="progress ">
<div className="progress-bar bg-green" role="progressbar" style={{width: "90%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>

        <div className='bg-info d-inline-block' style={{width:'310px',height:'150px',marginLeft:'80px'}}>
       <u> <h5 className='m-1'>{data.perf[0].data4}</h5><br></br></u> 
       <span className='p-2 '>512 GB</span>
         <div className="progress">
             
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "50%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<span className='p-2 '>512 GB</span>
<div className="progress ">
<div className="progress-bar bg-green" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
 </div>
       
 <br></br>
      <h1 className=' text-dark m-4'><i class="fas fa-camera-retro"></i> {data.camera[0].data1} </h1>
      <div className='d-inline-block bg-info mt-3' style={{width:'310px',height:'150px',marginLeft:'30px'}}>
      <u> <h5 className=' p-2'>{data.camera[0].data2}</h5><br></br></u> 
      <i class='fas fa-check text-success m-1'></i> {<strong>{data.camera[0].data3}</strong>} {<br />} {<br />}
        <i class='fas fa-check text-success m-1'></i> {<strong>{data.camera[0].data4}</strong>}
      </div>

      <div className='bg-info d-inline-block' style={{width:'310px',height:'150px',marginLeft:'80px'}}>
       <u> <h5 className='m-1'>{data.camera[0].data5}</h5><br></br></u> 
       <span className='p-2 '>108MP&12MP&12MP</span>
         <div className="progress">
             
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "70%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<span className='p-2 '>108MP & 48MP & 12MP & 0.3MP</span>
<div className="progress ">
<div className="progress-bar bg-green" role="progressbar" style={{width: "90%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>

        <div className='bg-info d-inline-block' style={{width:'310px',height:'150px',marginLeft:'80px'}}>
       <u> <h5 className='m-1'>{data.camera[0].data6}</h5><br></br></u> 
       <span className='p-2 '>10 MP</span>
         <div className="progress">
             
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
</div> 
<span className='p-2 '>40 MP</span>
<div className="progress ">
<div className="progress-bar bg-green" role="progressbar" style={{width: "60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>



        <div className='mt-4'>
        <Foot />
        </div>
        
        </div>
    )
    }
}

export default myprice;