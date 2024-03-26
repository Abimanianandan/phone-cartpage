import React, { useContext } from "react";
import { myContext } from "../App";
import Navbar from "../Navbar";

const Card1 = () => {
  const [data, setData] = useContext(myContext);

  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.Quantity || 1),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.Quantity || 1),
    0
  );

  const handleIncrease = (id, Quantity) => {
    setData((preData) => {
      return preData.map((item) => {
        if (item.id === id) {
          return { ...item, Quantity: item.Quantity + 1 || Quantity + 1 };
        }
        return item;
      });
    });
  };
  const handleDecrease = (id, Quantity) => {
    setData((preData) => {
      return preData.map((item) => {
        if (item.id === id && (item.Quantity || Quantity) > 0) {
          return { ...item, Quantity: item.Quantity - 1 || Quantity - 1 };
        }
        return item;
      });
    });
  };
  return (
    <div>
      <div className="container">
        <Navbar totalPrice={totalPrice} totalQuantity={totalQuantity}/>
        {data.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div
                  class="card mb-3 mt-5 p-3 border-3 border-info"
                  style={{ maxwidth: "540px" }}
                >
                  <div class="row g-0">
                 
                    <div class="col-md-4 mt-5">
                     <img src={item.thumbnail} alt="img" />
                     {/* {item.images.map((img,index)=>{
                      return(
                        <div key={index}>
                            <img
                        src={img.images}
                        class="img-fluid rounded-start h-100"
                        alt="img"
                      />
                        </div>
                      )
                     })} */}
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="fw-bolder">Title: {item.title}</h5>
                        <p class="fw-bolder">Description: {item.description}</p>
                        <p class="fw-bolder">Price: {item.price}</p>
                        <p class="fw-bolder">
                          DiscountPercentage: {item.discountPercentage}
                        </p>
                        <p class="fw-bolder">Rating: {item.rating}</p>
                        <p class="fw-bolder">Store: {item.stock}</p>
                        <p class="fw-bolder">Brand: {item.brand}</p>
                        <p class="fw-bolder">Category: {item.category}</p>
                        <button
                          class="btn btn-outline-success m-3"
                          onClick={() =>
                            handleIncrease(item.id, item.Quantity || 1)
                          }
                        >
                          Add
                        </button>
                        <button
                          class="btn btn-outline-danger"
                          onClick={() =>
                            handleDecrease(item.id, item.Quantity || 1)
                          }
                        >
                          Sub
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card1;
