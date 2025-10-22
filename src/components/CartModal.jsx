import React from 'react';

const CartModal = ({ isOpen, onClose, cart, setCart }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleClearCart = () => {
        setCart([]);
    };

    const handleCheckout = () => {
        if (cart.length > 0) {
            alert('Order placed successfully! Total: ₱' + total.toFixed(2));
            setCart([]);
            onClose();
        } else {
            alert('Your cart is empty. Add some items first!');
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div id="orderModal" className="modal" style={{ display: 'block' }}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Your Cart</h2>
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p style={{ textAlign: 'center' }}>Your cart is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <div className="cart-item-info">
                                    <h4>{item.name} (x{item.quantity})</h4>
                                </div>
                                <div className="cart-item-price">₱{(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))
                    )}
                </div>
                {cart.length > 0 && (
                    <div className="cart-total">
                        Total: ₱{total.toFixed(2)}
                    </div>
                )}
                <div className="modal-buttons">
                    <button className="modal-button clear-cart-button" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                    <button className="modal-button checkout-button" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;