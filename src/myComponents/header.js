import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Header = (props) => {
    const headerStyle={
        zIndex: '2',
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={headerStyle}>
                <div className="container container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
Header.defaultProps = {    //if values are not provided
    title: "Place Your Title",
    searchBar: true
}
Header.propTypes = {     //if number provides it will show but error will be thrown in inspect
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
export default Header