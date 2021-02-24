import logo from './versus.png';
import logo1 from './samsung.jpg';
import Nav from './nav';
import Mobilebody from './mainbody';
import Footer from './footer';

import './App.css';
import { render } from '@testing-library/react';

function App() {
  
  return (
    <div className="App">
      <Nav />
      <p className='mt-2 display-6 text-primary'>Which is Better For You to Buy!!</p>
      <Mobilebody />
      <div style={{position:'relative', bottom:'-500px'}}>
      <Footer />
      </div>
      </div>
    
  );
}

export default App;
