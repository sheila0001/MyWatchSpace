import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header>
            <div className="container">
                <div classNme="inner-content">
                    <div className="brand">
                        <link to="/"> Watchlist</link>
                    </div>

                </div>

            </div>

        </header>
    )
}

export default header
