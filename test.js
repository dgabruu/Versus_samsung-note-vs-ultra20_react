import React from 'react';
import Nav from './nav';
import './test.css';
import logo1 from './note20.JPG'
import logo2 from './ultra.JPG'
import Overview from './overview'
import logo3 from './line.JPG'
var data=require('./data');
class fun extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            val:false,
            data:data.note,
            secondval:false,
            data1:data.ultra,
        }
    }
     
    render(){
     var ele=null;
     var secondele=null;
     if(this.state.val)
     {
     ele=
     
             this.state.data.map((data ,i)=>{
               return <Overview mydata={data.data1} />
            
             });
     }
     if(this.state.secondval)
     {
        secondele=
     
        this.state.data1.map((data ,i)=>{
          return <Overview mydata={data.data1} />
       
        });
     }
    return(
    <div >
        <div style={{textAlign:'center'}}>
        <Nav />
        </div>
<h2 className='display-5 mt-2 
 ' style={{fontFamily: 'PT Sans Narrow, sans-serif' , fontSize:'30px',marginLeft:'230px'}}>
<button type='button' onClick={()=>this.setState({val:!this.state.val})} className='btn btn-primary btn-outline-dark dropdown-toggle' data-toggle="dropdown">
    <strong>Samsung Galaxy Note20 Ultra</strong></button>
    
    <button type='button' onClick={()=>this.setState({secondval:!this.state.secondval})} className='btn btn-primary btn-outline-dark dropdown-toggle' data-toggle="dropdown" style={{marginLeft:'290px'}}>
    <strong>Samsung Galaxy S20 Ultra</strong></button>
</h2>
<div>
   { 
   
   (this.state.val==false&&this.state.secondval==false)?<div><img src={logo1} alt='logo1' className='img1' />
   <img src={logo3} alt='logo2' className='img2' style={{marginLeft:'80px'}} /><img src={logo2} alt='logo2' className='img2' style={{marginLeft:'180px'}}/></div>
   :null
   
   }
</div>
<div className=' display-6 mt-4'  >
    {
        
        this.state.val?
        ele:null  
    }
    <div className=' display-6 ' style={{marginLeft:'700px',position: 'absolute',top:'240px'}}  >
    {
        
        this.state.secondval?
        secondele:null  
    }
   </div>
</div>


    </div>
    

);
}
}

export default fun;

