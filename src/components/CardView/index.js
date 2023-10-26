import './index.css'

const CardView = () => (
    <div className='order-container'>
        <p className='order'>Orders > <span className='span-element-card'>Order 32457ABC</span></p>
        <div className='order-card'>
            <p className='order-view'>Order 32457ABC</p>
            <div>
                <button type="button" className="outline-btn">Back</button>
                <button type="button" className="card-btn">Approve order</button>
            </div>
        </div>
    </div>
)

export default CardView
