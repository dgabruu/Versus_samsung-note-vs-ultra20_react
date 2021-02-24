import React from 'react';

const printdata=(props)=>
{
    console.log(props)
   return (
       
      <h2 ><i class="fas fa-check text-success m-2"></i>{props.mydata}</h2>

   );
}

export default printdata;