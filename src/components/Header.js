import React from 'react'
import { Link } from "react-router-dom";
import Navigation from './Navigation'

class Header extends React.Component{
    render(){
        return (
            <header className="fixed w-full flex justify-between items-center px-3 h-16">
                <span className="mr-2 font-bold text-2xl">
                    <Link to="/">
                        Quentin Watt
                    </Link>
                </span>
                <Navigation />
            </header>
        )
    }
}

export default Header;