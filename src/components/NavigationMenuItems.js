import React from 'react'
import { Link } from "react-router-dom";
import MainMenu from '../constants/MainMenu'

class Header extends React.Component{
    render(){
        return (
            <nav>
                <div className="text-2xl font-bold border-b pb-3">
                    React Boilerplate
                </div>
                <ul>
                    {
                        MainMenu.map((value, index) => {
                            return (
                                <li key={index} className="border-b">
                                    <Link 
                                        to={value.route} 
                                        onClick={this.props.close}
                                        className="block w-full py-3"    
                                    >
                                        {value.label}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}

export default Header;