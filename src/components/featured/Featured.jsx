import React from 'react';
import './Featured.scss';

const Featured = () => {
    return (
        <div className='featured'>
            <div className='container'>
                <div className="left">
                    <h1>  Find the perfect <span>freelance</span> services for your business</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input type="text" placeholder='Try "building your website"' />
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular: </span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>SEO Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured