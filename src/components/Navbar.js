import { BsSearch } from 'react-icons/bs';
import { NavLink, useNavigate, Link } from 'react-router-dom';

const Navbar1 = ({ inputValue, setInputValue}) => {

    const navigate = useNavigate();

    const InputHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + inputValue)
    }
    
    return (
        <div className='navbar'>
            <div className='logo'><Link className='link' to={'/'}><h1>MovieLand</h1></Link></div>
            <div className='navbar-links'>
                <NavLink className='link' to={'/movies'}>Movie</NavLink>
                <NavLink className='link' to={'/serials'}>Serial</NavLink>
            </div>
            <form onSubmit={InputHandler}>
                <BsSearch onClick={InputHandler} className='icon' />
                <input 
                className='search'
                type='text' 
                placeholder='Search for movie' 
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                />
            </form>
            
        </div>
        
    )
}

export default Navbar1;