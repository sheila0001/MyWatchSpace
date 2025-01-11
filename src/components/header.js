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


                    <ul className="nav-links">
                        <li>
                            <Link to="/Watchlist">Watchlist </Link>
                            <Link to="/Watched">Watched</Link>
                        </li>

                        <li>
                            <Link to="/Add" className="btn">
                                + Add
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


        </header>
    )
}
export default Header;
