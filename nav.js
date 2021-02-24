import React from 'react';
import logo from './versus.png';
import logo1 from './samsung.jpg';


class Nav extends React.Component{
     
     
    render(){
        return(
            <div >
    
    <img className='mt-2 '
    src={logo} alt='img1' height='70px' width='300px' />
    <div >
    <nav className='navbar navbar-dark bg-success mt-3 ' style={{marginLeft:'40px' , height:'80px'}}>
    <div className='container '>
      <a  className='navbar-brand'  >
        <img src={logo1} alt='img2' height='60px' width='140px' />
       <a href='./App.js' className='text-dark '><i  class="fas fa-home " style={{marginLeft:'70px' , fontSize:'25px'}}></i></a> 
      </a>
      <li className='nav-item d-inline border border-success rounded-circle'>
        <a   href='./test.js'  className='nav-link text-warning '
         style={{fontFamily: 'Akaya Telivigala , cursive',fontSize:'23px'}}>
       <strong>Overview</strong> 
        </a>
        
      </li>
      <li className='nav-item d-inline border border-success rounded-circle'>
        <a href='./price.js' className='nav-link text-warning'
        style={{fontFamily: 'Akaya Telivigala , cursive',fontSize:'23px'}}>
        <strong>Prices</strong>
        </a>
      </li>
      <li className='nav-item d-inline border border-success rounded-circle'>
        <a href='./specs.js' className='nav-link text-warning'
        style={{fontFamily: 'Akaya Telivigala , cursive',fontSize:'23px'}}>
        <strong>Specs</strong>
        </a>
      </li>
    </div>

    </nav>
    </div>
    </div>);
    
        }
}

export default Nav;