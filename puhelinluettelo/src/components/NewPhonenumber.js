
import React from 'react'
import Filter from './Filter'

const NewPhonenumber   = ({addNewName,newName,newNumber,inputControl,numberControl,filterControl}) => {

    return (

        <form  onSubmit={addNewName}>

          <Filter filterControl={filterControl} />

          <div>
            name: <input name="person" value={newName} onChange={inputControl}/>
          </div>
          <div>number: <input name="number" value={newNumber} onChange={numberControl} /></div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        )
}

export default NewPhonenumber