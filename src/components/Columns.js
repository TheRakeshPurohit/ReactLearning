import React from 'react'

function Columns() {
    const items = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    return (
        <React.Fragment>
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <td>Title</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.skill}</td>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

export default Columns
