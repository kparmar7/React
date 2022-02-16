import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Contact">Contact</a></li> */}


                    {/* <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li> */}

                    <li><NavLink to='/' style={{color:'red'}}>Home</NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/Contact'>Contact</NavLink></li>
                    <li><NavLink to='/post/Contact'>Post</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;