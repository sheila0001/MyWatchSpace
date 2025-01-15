import React, { useState } from 'react';
//to change the text as we type input-> use react hooks//

export const Add = () => {
    const [query, setQuery] = useState("");
    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);
    };
    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-wrapper'>
                        <input type="text"
                            placeholder="What movie are you looking for?"
                            value={query}
                            onChange={onChange}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};


