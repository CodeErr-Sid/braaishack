import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const fakeItems = [
    {
        image: "https://via.placeholder.com/150", // replace with actual image URL if available
        title: "Sample Gift Coupon",
        price: 50,
        quantity: 2,
        description: "This is a sample gift coupon."
    }
];


const InputField = ({ type, label, required, name, value, onChange }) => (
    <div className="sb-group-input">
        <input
            type={type}
            name={name}
            value={value}
            required={required}
            onChange={onChange}
        />
        <span className="sb-bar"></span>
        <label>{label}</label>
    </div>
);

const CartItem = ({ item, currency }) => (
    <div className="sb-cart-item">
        <div className="row align-items-center">
            <div className="col-lg-9">
                <a className="sb-product">
                    {/* <div className="sb-cover-frame">
                        <img src={item.image} alt={item.title} />
                        <div className="quantity-red-circle">{item.quantity}</div>
                    </div> */}
                    <div className="sb-prod-description">
                        <h4 className="sb-mb-10">{item.title}</h4>
                        <p className="sb-text sb-text-sm">price: {currency + item.price}</p>
                        <p className="sb-text sb-text-sm">{item.description}</p>
                    </div>
                </a>
            </div>
            <div className="col-lg-3 text-md-right">
                <div className="sb-price-2"><span>Total: </span>{currency + (item.quantity * item.price).toFixed(2)}</div>
            </div>
        </div>
    </div>
);

const GiftCheckoutSection = () => {


    const { currency } = useContext(StoreContext)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const calculateTotal = () => {
        if (fakeItems) {
            const subtotal = fakeItems.reduce((accumulator, item) => {
                return (item.price * item.quantity) + accumulator
            }, 0)
            return subtotal;
        }
        return 0
    };


    return (
        <section>
            <div className="container sb-mb-0">
                <div className="col-lg-8">
                    <form className="sb-checkout-form" onSubmit={handleSubmit}>
                        <div className="sb-mb-30">
                            <h3>Billing details</h3>
                        </div>
                        <div className="row">
                            {Object.keys(formData).map((key, index) => (
                                <div className="" key={index}>
                                    <InputField
                                        type={key === 'email' ? 'email' : 'text'}
                                        label={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                        required
                                        name={key}
                                        value={formData[key]}
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                        </div>
                        <button type="submit" className="sb-btn sb-m-0">
                            <span className="sb-icon">
                                <img src={assets.arrow} alt="icon" />
                            </span>
                            <span>Place order</span>
                        </button>
                    </form>
                </div>
                <div className="gift-voucher-cart col-lg-4" style={{ marginBottom: "2rem" }}>
                    <div className="sb-pad-type-2 sb-sticky" data-margin-top="120">
                        <div className="sb-co-cart-frame">
                            <div className="sb-cart-table">
                                <div className="sb-cart-table-header">
                                    <div className="row">
                                        <div className="col-lg-9">Gift Coupon</div>
                                        <div className="col-lg-3 text-right">Total</div>
                                    </div>
                                </div>
                                {fakeItems.length === 0 ? (
                                    <p>No Coupons Selected</p>
                                ) : (
                                    fakeItems.map((item, index) => (
                                        <CartItem key={index} item={item} currency={currency} />
                                    ))
                                )}
                                <div className="sb-cart-total sb-cart-total-2">
                                    {/* <div className="sb-sum">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="sb-total-title">Subtotal:</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="sb-price-1 text-right">
                                                    ${calculateTotal().toFixed(2)}
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="sb-sum">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="sb-total-title">Subtotal:</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="sb-price-1 text-right">
                                                    ${calculateTotal().toFixed(2)}
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="sb-realy-sum">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="sb-total-title">Total:</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="sb-price-2 text-right">${(calculateTotal()).toFixed(2)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GiftCheckoutSection