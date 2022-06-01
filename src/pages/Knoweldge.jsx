import React from 'react'
import Navigation from '../component/Navigation';
import Hobbies from '../component/knoweldge/Hobbies';
import Experience from '../component/knoweldge/Experience';
import Langue from '../component/knoweldge/Langue';
import Otherskills from '../component/knoweldge/Otherskills';


function Knoweldge() {
  return (
    <div className='knowledges'>
      <Navigation />
      <div className="knowledgesContent">
        <Langue />
       <Experience />
        <Otherskills />
        <Hobbies />
      </div>
    </div>
  )
}

export default Knoweldge
