import {v4 as uuidv4} from 'uuid'
import {GiFruitBowl} from 'react-icons/gi'
import {LiaWineBottleSolid, LiaCarSolid} from 'react-icons/lia'
import {CgGlassAlt} from 'react-icons/cg'
import {BsTree, BsSearch, BsPrinter} from 'react-icons/bs'
import Header from '../Header'
import CardView from '../CardView'
import OrderItem from '../OrderItem'
import './index.css'
const orderItemsArr = [
    {
        id: uuidv4(),
        name: "Chicken Breast Fillets, Boneless mattu maMarinated 6 Ounce Raw, invivid",
        brand: "Hormel Black Labelmany",
        price: "$60.67/6*1LB",
        quantity: "0",
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284544/Avocado_Hass_vulm3c.jpg"
    },
    {
        id: uuidv4(),
        name: "Chicken Breast Fillets, Boneless mattu maMarinated 6 Ounce Raw, invivid",
        brand: "Hormel Black Labelmany",
        price: "$60.67/6*1LB",
        quantity: "15",
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284544/Avocado_Hass_vulm3c.jpg"
    },
    {
        id: uuidv4(),
        name: "Chicken Breast Fillets, Boneless mattu maMarinated 6 Ounce Raw, invivid",
        brand: "Hormel Black Labelmany",
        price: "$60.67/6*1LB",
        quantity: "15",
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284544/Avocado_Hass_vulm3c.jpg"
    },
    {
        id: uuidv4(),
        name: "Chicken Breast Fillets, Boneless mattu maMarinated 6 Ounce Raw, invivid",
        brand: "Hormel Black Labelmany",
        price: "$60.67/6*1LB",
        quantity: "0",
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284544/Avocado_Hass_vulm3c.jpg"
    },
    {
        id: uuidv4(),
        name: "Chicken Breast Fillets, Boneless mattu maMarinated 6 Ounce Raw, invivid",
        brand: "Hormel Black Labelmany",
        price: "$60.67/6*1LB",
        quantity: "0",
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284544/Avocado_Hass_vulm3c.jpg"
    },
    {
        id: uuidv4(),
        name: "green Apple",
        brand: "Granny Smith",
        price: "$60.67/6*1LB",
        quantity: "13",
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284892/Apple_Green_Smith_aneg4f.png"
    },
    {
        id: uuidv4(),
        name: "green Apple",
        brand: "Granny Smith",
        price: "$60.67/6*1LB",
        quantity: "3",
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284892/Apple_Green_Smith_aneg4f.png"
    },
    {
        id: uuidv4(),
        name: "green Apple",
        brand: "Granny Smith",
        price: "$60.67/6*1LB",
        quantity: "4",
        imageUrl: "https://res.cloudinary.com/dj6c4lrt9/image/upload/v1698284892/Apple_Green_Smith_aneg4f.png"
    }

]

const MainPage = () => (
    <div>
        <Header />
        <CardView />
        <div className='banner-container'>
            <div className='small-container'>
                <div className='small-card'>
                    <div className='req-container'>
                        <p className='small-table-heading'>Supplier</p>
                        <p className='small-heading-description'>East coast fruits <br />& vegetables</p>
                    </div>
                    <hr className='small-line'/>
                </div>
                <div className='small-card'>
                    <div>
                        <p className='small-table-heading'>Shipping date</p>
                        <p className='small-heading-description'>Thu, Feb 10</p>
                    </div>
                    <hr className='small-line' />
                </div>
                <div className='small-card'>
                    <div>
                        <p className='small-table-heading'>Total</p>
                        <p className='small-heading-description'>$ 15,028.3</p>
                    </div>
                    <hr className='small-line' />
                </div>
                <div className='small-card'>
                    <div>
                        <p className='small-table-heading'>Category</p>
                        <div>
                            <GiFruitBowl />
                            <LiaWineBottleSolid />
                            <CgGlassAlt /> 
                            <LiaCarSolid />
                            <BsTree />
                        </div>
                    </div>
                    <hr className='small-line' />
                </div>
                <div className='small-card'>
                    <div>
                        <p className='small-table-heading'>Department</p>
                        <p className='small-heading-description'>300-444-678</p>
                    </div>
                    <hr className='small-line'/>
                </div>
                <div className='small-card'>
                    <div>
                        <p className='small-table-heading'>Status</p>
                        <p className='small-heading-description'>Awaiting your Approvel</p>
                    </div>
                </div>
            </div>
            <div className='banner-second-container'>
                <div className='banner-search-container'>
                    <div className='search-input'>
                        <input type="text" className='input' placeholder='search..'/>
                        <BsSearch className="search-icon" />
                    </div>
                    <div>
                        <button type="button" className='button'>Add Item</button>
                        <BsPrinter />
                    </div>
                </div>
                <div>
                    <div className='product-view'>
                        <p className='prduct'>Productname</p>
                        <p>Brand</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Status</p>
                    </div>
                    <ul className='un-order-list-container'>
                        {orderItemsArr.map(eachItem => (
                            <OrderItem details={eachItem} key={eachItem.id} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default MainPage