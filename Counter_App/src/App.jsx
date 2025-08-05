import { useState } from "react";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  const mobile = {
    id: 1,
    name: "Galaxy S24 Ultra",
    price: 999.99,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRxMXeyNylr1Rl90jS7mWek7woYORCJ_IawcNpb2NuGRK85bMuJX_kU0dsjB8T077D2Gkf9t_SaycI1e2jl4kUj7ocEgx62Oojz46AgD_4CMDTx9EQlXttasJH15cV817u0cS_EIc-BwEg&usqp=CAc  ",
    storage: "256GB",
    color: "Titanium Black",
    maxStock: 5,
  };

  const existingItem = cart.find((item) => item.id === mobile.id);
  const currentInCart = existingItem ? existingItem.qty : 0;
  const stockLeft = mobile.maxStock - currentInCart;

  const changeQuantity = (type) => {
    if (type === "inc" && quantity < stockLeft) {
      setQuantity(quantity + 1);
    } else if (type === "dec" && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (quantity === 0) return;

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === mobile.id ? { ...item, qty: item.qty + quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...mobile, qty: quantity }]);
    }
    setQuantity(0);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <div className="product-card fade-in">
        <div className="favorite bounce">♡</div>
        <img src={mobile.image} alt={mobile.name} className="product-img" />
        <h2 className="product-title">{mobile.name}</h2>

        <div className="tags">
          <span className="tag">{mobile.storage}</span>
          <span className="tag">{mobile.color}</span>
        </div>

        <p className="description">{mobile.description}</p>
        <p><b>In Stock:</b> {stockLeft} available</p>
        <p className="price">${mobile.price.toFixed(2)}</p>

        <div className="counter">
          <button onClick={() => changeQuantity("dec")} disabled={quantity === 0}>➖</button>
          <span>{quantity}</span>
          <button onClick={() => changeQuantity("inc")} disabled={quantity >= stockLeft}>➕</button>
        </div>

        <button className="add-btn pulse" onClick={addToCart} disabled={quantity === 0}>Add to Cart</button>
      </div>

      <div className="cart-section slide-up">
        <h2>🛍️ Cart Items</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                {item.name} - Qty: <b>{item.qty}</b>
                <button onClick={() => removeItem(item.id)}>❌</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
