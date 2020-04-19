
import React from 'react'


const Phonenumber   = ({name,number,remove}) => {


    return (

        <div>
       {name} {number} <button onClick={remove} >delete</button>
      </div>
     
        )
}

export default Phonenumber