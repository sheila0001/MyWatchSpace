import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div classNme="inner-content">
                    <div className="brand">
                        <link to="/"> Watchlist</link>
                    </div>

                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>

                    <li>
                        <Link to="/add" className="btn">
                            + Add
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header
