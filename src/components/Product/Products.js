import axios from "axios";
import { useEffect, useState } from "react";
import './Products.css'
export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState('https://makeup-api.herokuapp.com/api/v1/products.json')
  const addToCart = i => {
    setCart(prevState =>
      prevState.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            inCart: true,
            count: item.counterVal
          };
        }
        return item;
      })
    );
  };
  const increaseQuantity = i => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 9) {
            return item;
          } else return { ...item, count: item.count + 1 };
        } else if (i === o) {
          if (item.counterVal > 9) {
            return item;
          } else
            return {
              ...item,
              counterVal: item.counterVal + 1
            };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = i => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        } else if (i === o && item.counterVal > 1) {
          return {
            ...item,
            counterVal: item.counterVal - 1
          };
        }
        return item;
      })
    );
  };

  const removeFromCart = i => {
    setCart(prevCart =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false
          };
        }
        return item;
      })
    );
  };
  const getApiData = async () => {
    try {
      const data = await axios.get(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
      );
      setProducts(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc.."
        className="Input"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {products
        .filter((item) => {
          if (search === "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <div className="grid-container">
             <div className="grid-item">
              <img src={item.api_featured_image} alt="iamge"/>
              <h4>{item.name}</h4>
              <h2>₹ {item.price}</h2>
              <button>Add to Bag</button>
              
              </div>
              <div className="grid-item">
              <img src={item.api_featured_image} alt="iamge"/>
              <h4>{item.name}</h4>
            
              <h2>₹ {item.price}</h2>
              <button>Add to Bag</button>
              
              </div>
              <div className="grid-item">
              <img src={item.api_featured_image} alt="iamge"/>
              <h4>{item.name} </h4>
              <h2>₹ {item.price}</h2>
              <button >Add to Bag</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
