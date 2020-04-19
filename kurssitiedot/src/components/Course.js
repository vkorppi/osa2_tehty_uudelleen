
import React from 'react'



const Header = ({name}) => {
	return (
	  <h1>{name}</h1>
	)  
  }

  const Part = ({name,exercises}) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )  
    }
  
  const Content  = ({parts}) => {


	return ( 
    <div>
{parts.map(part =>    <Part
      key={part.id}
      name={part.name}
      exercises={part.exercises}/>
      )} 
      </div>
	)  
  }

  const Total = ({parts}) => {



	return (

  <p>Number of exercises {parts.reduce( function countAll(sum, cell) {return sum + cell.exercises},0) }</p>

 
	)  
  }







const Course = ({course}) => {

    return (
      <>
      
      <Header name={course.name} />
     <Content parts={course.parts} />
      <Total parts={course.parts} />
      </>
      
    )
  

  }







export default Course