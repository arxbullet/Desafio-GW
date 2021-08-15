import React from 'react'

const Welcome = (user) => {

    let user = JSON.parse(localStorage.getItem('user')).name

return(
    <>
    <h3>{`Hello ${user}`}</h3>
    </>
)
}

export default Welcome