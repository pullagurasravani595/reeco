import {useState} from 'react'
import {IoIosClose} from 'react-icons/io'
import './index.css'

const OrderItem = (props) => {
    const [correct, setCorrect] = useState("")
    const {details} = props
    const {imageUrl, name, brand, price, quantity} = details
    const [quantityNum, setQuality] = useState(quantity)
    const total = parseInt(quantity)*600
    console.log(correct)
    return (
        <li className="list-container">
            <div className='product-list-container'>
                <img src={imageUrl} alt="fruit" className="image-element" />
                <p className='name'>{name}</p>
                <p className='brand'>{brand}</p>
                <p className='price'>{price}</p>
                <p>{quantity}<span><IoIosClose /></span>6*1LB</p>
                <p className='total'>{total}</p>
                <div className='last-container'>
                    {correct ? <button type='button'>Approved</button> : <button type='button'>Missing</button>}
                    <div className='icon-container'>
                        <button className='correct-btn' onClick={() => setCorrect(true)} type="button">
                            <img src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1694495865/correct_icon_nhwtqy.webp" alt="correct" className='correct-icon'/>
                        </button>
                        <button className='correct-btn' onClick={() => setCorrect(false)} type="button"><IoIosClose /></button>
                        <button type="button" className='correct-btn'>edit</button>
                    </div>
                </div>
            </div> 
            <hr className='line-break'/>
        </li>
    )
}

export default OrderItem