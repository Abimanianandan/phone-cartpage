import React from 'react';

const Navbar = ({totalPrice,totalQuantity}) => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg  bg-warning ">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand " href="#!">
              SmartPhones
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4"></ul>
              <form className="d-flex">
                <button class="btn btn-outline-dark m-1" type="submit">
                  <i
                    class="fa-solid fa-cart-shopping p-1"
                    style={{ color: "#b399ff" }}
                  ></i>
                  Price
                  <span class="badge bg-dark text-white ms-1 rounded-pill">
                    {totalPrice}
                  </span>
                </button>
                <button class="btn btn-outline-dark m-1" type="submit">
                  <i
                    class="fa-solid fa-cart-shopping p-1"
                    onClick={() => {
                      totalQuantity(5);
                    }}
                    style={{ color: "#b399ff" }}
                  ></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill ">
                    {totalQuantity}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
        </div>
    );
};

export default Navbar;