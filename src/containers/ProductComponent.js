import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((item) => {
    const { id, title, image, price, category } = item;
    return (
      <div className="four-column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      {" "}
      <div className="card w-600 h-400">
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU"
                }
              />
            </div>
            <div className="content">
              <div className="header">My name is cat from KG</div>
              <div className="meta price">$ price</div>
              <div className="meta">Category</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
