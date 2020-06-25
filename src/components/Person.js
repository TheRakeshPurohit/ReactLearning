import React from 'react'

function Person({person}) {
    return (
        <div>
            <ul>
                <li>Hi ! I am {person.name}. I am {person.age}. I know {person.skill} </li>
            </ul>
        </div>
    )
}

export default Person
