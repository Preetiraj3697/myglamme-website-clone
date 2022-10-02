import axios from "axios";
import { useEffect, useState } from "react";
import LoadingScreen from "react-loading-screen";
import { useCart } from "react-use-cart";
import spinner from "./S.gif";
import { Link} from "react-router-dom";
import './Products.css'
export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoding, setIsLoding] = useState(true)
  const { addItem } = useCart();
  const getApiData = async () => {
    setIsLoding(true);
    try {
      const data = await axios.get(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
      );
      setProducts(data.data);
      setIsLoding(false);
    } catch (e) {
      console.log(e);
      setIsLoding(false);
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
         {isLoding ? (
        <LoadingScreen
        loading={true}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        logoSrc={spinner}
        text="Loading..."
      />
    ) : (
      <div>
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
            <div className="grid-container" >
             <div className="grid-item" key={item.id}>
              <img src={item.api_featured_image} alt="iamge"/>
              <h4>{item.name}</h4>
              <h2>₹ {item.price}</h2>
             <button className="btnt" onClick={() => addItem(item)}>Add to Bag</button>
              <Link to={`/products/${item.id}`}><button className="btnt" >More Details</button></Link>
              </div>
              <div className="grid-item" key={item.id}>
              <img src={item.api_featured_image} alt="iamge"/>
              <h4>{item.name}</h4>
              <h2>₹ {item.price}</h2>
              <button className="btnt" onClick={() => addItem(item)}>Add to Bag</button>
              <Link to={`/products/${item.id}`}><button className="btnt" >More Details</button></Link>
              
              </div>
              <div className="grid-item" key={item.id}>
              <img src={item.api_featured_image} alt="iamge"/>
              <h4>{item.name} </h4>
              <h2>₹ {item.price}</h2>
              <button className="btnt" onClick={() => addItem(item)}>Add to Bag</button>
              <Link to={`/products/${item.id}`}><button className="btnt" >More Details</button></Link>
              </div>
            </div>
          );
        })}
        </div>
         )}
    </div>
  );
}
