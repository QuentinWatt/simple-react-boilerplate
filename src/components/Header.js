import React from 'react'
import { Link } from "react-router-dom";
import Navigation from './Navigation'

class Header extends React.Component{
    render(){
        return (
            <header className="fixed w-full flex items-center h-16 border-b">
                <div className="container mx-auto flex justify-between items-center px-3">
                    <span className="mr-2 font-bold text-2xl">
                        <Link to="/">
                            React Boilerplate
                        </Link>
                    </span>
                    <Navigation />
                </div>
            </header>
        )
    }
}

export default Header;