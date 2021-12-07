
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import {UserContext} from './App.js'
import logo from '../Images/logo.svg'



export default function NavBar(){
    const [user, setUser] = useContext(UserContext)
    //route function to logout user and redirect to home page
    function logOut(){
        setUser(null)
        return '/'
    }

    return(
        <div className="nav">
            <img src={logo} className='nav-logo'></img>
            <div className='nav-container'>
                <NavLink to='astro-view'>Astro View</NavLink>
                {!user && <NavLink to='/signup'>Signup</NavLink>}
                { user ?<NavLink to={logOut}>Log Out</NavLink>:<NavLink to='/login'>Login</NavLink>}
                
            </div>
        </div>
    )

}