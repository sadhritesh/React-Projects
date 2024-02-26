import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header(){
    return (
        <>
            <ul className='navbar'>
                <div className='left-side'>
                    <li >
                        <NavLink to='/' className='navitems' activeclassname="active" >Home</NavLink>
                    </li>
                    <li >
                        <NavLink to='/about' className='navitems' activeclassname="active" >AboutUs</NavLink>
                    </li>
                    <li >
                        <NavLink to='/contact' className='navitems' activeclassname="active" >ContactUs</NavLink>
                    </li>
                </div>
                <div className='right-side'>
                    <li>
                        <Link to='/login' className='navitems' ><button>Login</button></Link>
                    </li>
                    <li>
                        <Link to='/github' className='navitems' ><button>Github</button></Link>
                    </li>
                </div>
            </ul>
        </>
    );
}