import React from "react";
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img src="/logo.png" width="90" height="90" alt="" id="logo"/>
            <Navbar.Brand>Videogame Finder</Navbar.Brand>
            <NavItem><Link to='/' className="nav-link">Home</Link></NavItem>
            <NavItem><Link to='/About'className="nav-link">About</Link></NavItem>
            <NavItem><Link to='/FavoriteGames'className="nav-link">WishList</Link></NavItem>
            {/* PLACEHOLDER: render a navigation link to the about page */}
          </Navbar>
        ) 

    }
}

export default Header;