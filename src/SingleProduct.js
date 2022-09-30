import React from "react";
import { useParams, Link } from "react-router-dom";
import './SingleProduct.css'

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const SingleProduct = () => {
  const { user_id } = useParams();
  const [userDetails, setUserDetails] = React.useState({});

  React.useEffect(() => {
    getData(`https://makeup-api.herokuapp.com/api/v1/products/${user_id}.json`).then((res) =>
      setUserDetails(res)
    );
  }, [user_id]);

   console.log(userDetails);
  return (
    <div className="singleproducts_container">
    <div className="first">
      <img src={userDetails.api_featured_image} alt="prof-pic" />
    </div>
    <div className="second">
      <h1>
        Name : {userDetails.name}
      </h1>
      <h2>Brand : {userDetails.brand}</h2>
      <h2>Price : {userDetails.price}</h2>
      <h2> Category : {userDetails.category}</h2>
      <h2> Product Type : {userDetails.product_type}</h2>
      <h2>Description : {userDetails.description}</h2>
      <Link to="/cart"><button className="btn">Add to Bag</button></Link>
      <Link to="/products"><button className="btn">GO BACK</button></Link>
      </div>
    </div>
  );
};

export default SingleProduct;

// Users Page

// UserDetails - useParams;

// AllRoutes - Dynamic Routing
