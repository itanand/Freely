import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'
import user from '../../assets/user.png';

const Navbar = () => {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, []);

    const currentUser = {
        id: 1,
        username: "itanand",
        isSeller: true,

    }

    return (
        <div className={active || pathname !== ("/" || "/business") ? "navbar active" : "navbar"}>
            <div className='container'>
                <div className='logo'>
                    <Link to="/" className='link'>
                        <span className='text'>Skillपुर</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className='links'>
                    <Link to="/business" className='link'>Skillपुर @Business</Link>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)
                        }>
                            <img src={user} alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <Link to="/mygigs" className='link'>Gigs</Link>
                                            <Link to="/add" className='link'>Add New Gig</Link>
                                        </>
                                    )}
                                <Link to="/orders" className='link'>Orders</Link>
                                <Link to="/messages" className='link'>Messages</Link>
                                <Link to="/" className='link'>Logout</Link>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && <><hr />
                <div className='menu'>
                    <Link className='link menuLink' to="/gigs">
                        Graphics & Design
                    </Link>
                    <Link className='link' to="/">
                        Content Writing
                    </Link>
                    <Link className='link' to="/">
                        Web & UI Design
                    </Link>
                    <Link className='link' to="/">
                        Digital Marketing
                    </Link>
                    <Link className='link' to="/">
                        Web & App Development
                    </Link>
                    <Link className='link' to="/">
                        Video & Animation
                    </Link>
                </div></>}
        </div>
    );
};

export default Navbar;