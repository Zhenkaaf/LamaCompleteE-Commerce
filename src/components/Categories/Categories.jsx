import { Link } from 'react-router-dom';
import './categories.scss';


const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/3622624/pexels-photo-3622624.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Sale</Link>
                    </button>
                </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Hats</Link>
                    </button>
                </div>
            </div>
            <div className="col">
            <div className="row">
            <img src="https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>New season</Link>
                    </button>
            </div>
            </div>
            <div className="col col-large">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Men</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/11785447/pexels-photo-11785447.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Tights</Link>
                    </button>
                </div>
                </div>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/4817120/pexels-photo-4817120.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button>
                        <Link className='link' to='/products/1'>Boots</Link>
                    </button>
            </div>
            </div>
        </div>
    )
}
export default Categories;