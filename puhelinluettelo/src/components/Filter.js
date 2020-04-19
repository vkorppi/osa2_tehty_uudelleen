
import React from 'react'


const Filter   = ({filterControl}) => {

    return (

        <div>
        filter phonebook: <input name="filter"  onChange={filterControl}/>
      </div>
     
        )
}

export default Filter