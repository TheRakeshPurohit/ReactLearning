import React from 'react'

function Person(person) {
    return (
        <div>
            <h3>
                Hi ! I am {person.name}. I am {person.age}. I know {person.skill}.
            </h3>
        </div>
    )
}

export default Person
