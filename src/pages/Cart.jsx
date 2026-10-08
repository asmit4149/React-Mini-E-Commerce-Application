import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/formatCurrency';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const [showCheckoutMsg, setShowCheckoutMsg] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart container">
        <div className="empty-cart-content">
          <span className="empty-cart-icon">🛒</span>
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="btn-primary continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <div className="cart-header">
        <h1 className="cart-title">Shopping Cart</h1>
        <span className="cart-item-count">{cartCount} {cartCount === 1 ? 'Item' : 'Items'}</span>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="cart-item-details">
                <Link to={`/products/${item.id}`} className="cart-item-name">
                  {item.name}
                </Link>
                <span className="cart-item-category">{item.category}</span>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="cart-item-remove"
                >
                  Remove
                </button>
              </div>

              <div className="cart-item-quantity">
                <button 
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <div className="cart-item-price">
                <span className="item-subtotal">{formatCurrency(item.price * item.quantity)}</span>
                {item.quantity > 1 && (
                  <span className="item-unit-price">{formatCurrency(item.price)} each</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>{formatCurrency(cartTotal)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span>{formatCurrency(cartTotal)}</span>
          </div>
          <button 
            className="btn-primary checkout-btn"
            onClick={() => setShowCheckoutMsg(true)}
          >
            Proceed to Checkout
          </button>
          {showCheckoutMsg && (
            <div className="checkout-demo-msg" style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#eef2ff', color: '#4f46e5', borderRadius: '0.5rem', fontSize: '0.875rem', textAlign: 'center', border: '1px solid #c7d2fe' }}>
              Checkout is a demo feature and is not available in this assessment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
