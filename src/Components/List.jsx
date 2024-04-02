import React from 'react'
import people from './people'

function List() {
    const listitems = people.map(person =><li key={person.id}>{person.name}</li>)
  return (
    <div>
        <ul>
            {listitems}
        </ul>
      
    </div>
  )
}

export default List
