import React from 'react'

const Header = () => {
    const headerStyle = {
        backgroundColor: "#a64dff",
        padding: "10px"
    }
    return (
        <div style={headerStyle} className=''>
            <div className='ui container center'>
                <h2>React Redux Fake Shop</h2>
            </div>
        </div>
    )
}

export default Header