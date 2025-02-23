import React from 'react';
import { Link } from 'react-router-dom';

export const Homes = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        {/* Corrected `Link` usage */}
                        <Link to="/">MyWatchSpace</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/watchlist">Watchlist</Link>
                        </li>
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
            </div>
        </header>
    );
};

