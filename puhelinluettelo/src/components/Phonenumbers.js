
import React from 'react'
import Phonenumber from './Phonenumber'

const Phonenumbers   = ({objects,filter,remove}) => {

    var filtered=objects.filter(object => object.name.includes(filter))


    return (

         (filtered.map(object =>    
            <Phonenumber key={object.id} name={object.name} number={object.number} remove={() => remove(object.id)}/>
          ))
        )
}

export default Phonenumbers


