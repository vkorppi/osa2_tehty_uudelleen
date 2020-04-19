import React, { useState,useEffect  } from 'react'
import NewPhonenumber from './components/NewPhonenumber'
import Phonenumbers from './components/Phonenumbers'
import numberService from './services/numberService'

import './index.css'

const App = () => {
  const [ objects, setobjects] = useState([
    { name: 'Arto Hellas' }
  ]) 
  
  const [ newName, setNewName ] = useState('')

  const [ newNumber, setnewNumber ] = useState('')

  const [ filter, setfilter ] = useState('')

  const [alert, setAlert] = useState('')

  const Alerts = ({ info }) => {
	
    if (info === '') {
      return ''
    }
  
    return (
      <p className="info">
        {info}
      </p>
    )
    
    
  }

  const addNewName = (event) => {
    event.preventDefault()   



    if(objects.some(object => object.name === newName)) {
      alert(`${newName} is already in phonebook`)
    }
    else {

      numberService.addNumber({"name":newName,"number":newNumber}).then(response => {
          setobjects(objects.concat(response.data))
        })
        
        setAlert(`New phonenumber added:  ${newName} ${newNumber}`)
              
        setTimeout(() => {
          setAlert('')
        }, 2000)
    }

    setNewName('')
    setnewNumber('')


   
  }

  const inputControl = (event) => {
    setNewName(event.target.value)
  }

  const numberControl = (event) => {
    setnewNumber(event.target.value)
  }

  const filterControl = (event) => {
    setfilter(event.target.value)

  }

  const removeNumber = id => {

    const object = objects.find(object => object.id === id)

    

    if(window.confirm(`Are sure you want to remove this phonenumber ${object.name}`))
    {

      numberService.removeNumber(id).then(response => {

        const filterednumbers=objects.filter(object => object.id !== id)
        setobjects(filterednumbers)
        setNewName('')
        setnewNumber('')


      })

      setAlert(`${object.name} was removed from database`)
              
      setTimeout(() => {
        setAlert('')
      }, 2000)


    }

  }

  useEffect(() => {  
      

      numberService.getNumbers()
        .then(response => {
            setobjects(response.data)
        })

      }, [])  



  return (
    <div>
      <h2>Phonebook</h2>

      <Alerts info={alert}/>

      <NewPhonenumber addNewName={addNewName} newName={newName} newNumber={newNumber} inputControl={inputControl}
      numberControl={numberControl} filterControl={filterControl} />


      <h2>Numbers</h2>
      <Phonenumbers objects={objects} filter={filter} remove={removeNumber}/>

    </div>
  )

}

export default App