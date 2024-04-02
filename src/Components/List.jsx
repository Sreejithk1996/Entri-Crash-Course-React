import React from 'react'
import people from './people'

function List() {
    const listitems = people.map(person =><li key={person.id}>{person.name}</li>)
  return (
    <div>
        <ul>
            <h1>{listitems}</h1>
        </ul>
      
    </div>
  )
}

export default List
