import {BsCart} from 'react-icons/bs'
import './index.css'

const Header = () => (
    <nav className="nav-container">
        <div className="first-container">
            <p className='reeco'>Reeco</p>
            <p className='header-components'>Store</p>
            <p className='header-components'>Orders</p>
            <p className='header-components'>Analytics</p>
        </div>
        <div className='second-container'>
            <BsCart className='cart' />
            <select className='header-select'>
                <option>Hello, James</option>
            </select>
        </div>
    </nav>
)

export default Header
