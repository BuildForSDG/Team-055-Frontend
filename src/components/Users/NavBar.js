import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

export class NavBar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="\login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="\register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="\profile" className="nav-link">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="/" onClick = {this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggle"
                type="button"
                data-toggle= "collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded = "false"
                aria-label = "Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center">
                    id="navbar1"
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-item">Home</Link>
                    </li>
                </ul>
                {localStorage.usertoken ? userLink : loginRegLink}
            </nav>
        )
    }
}

export default withRouter(NavBar)
