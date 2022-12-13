import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img className="imgFlag" src="/img/flag.png" alt="flag" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/1'>Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/2'>Men</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/products/3'>Children</Link>
                    </div>
                </div>

                <div className="center">
                    <Link className='link' to='/'>FODOROV</Link>
                </div>


                <div className="right">
                    <div className="item">
                        <Link className='link' to='/'>Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Contact</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to='/'>Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PermIdentityIcon />
                        <FavoriteBorderIcon />
                        <div className="cartIcon">
                            <AddShoppingCartIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;