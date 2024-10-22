import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";


const Home = () => {
  const[search , setsearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [fooditem, setFoodItem] = useState([]);

  // Function to load data from API
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/fooddata", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    console.log(response[0], response[1]);
  };

  // Fetch the data when the component mounts
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <div>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <div className='carousel-caption' style={{ zIndex:"10"}}>
          <div className="d-flex justify-content-center">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  value={search}  onChange={(e)=>{setsearch(e.target.value)}}/>
    <button className="btn btn-outline-success text-white bg-dark" type="submit">Search</button>
  </div>
          </div>
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100" style={{ width: "100%", maxHeight: "650px" ,objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100 " style={{ width: "100%", maxHeight: "650px" ,objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100" style={{ width: "100%", maxHeight: "650px" ,objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1718567234333-e60566ef06e4?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div> 
      </div>


      <div className="container">
        {
          foodCat.length > 0 ? foodCat.map((data) => {
            return (
              <div key={data.id} className="row mb-3">
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                <div className="row">
                  {
                    fooditem.length > 0 ? fooditem
                      .filter((items) => (items.CategoryName === data.CategoryName && (items.name.toLowerCase().includes(search.toLowerCase())))) 
                      .map((filterItems) => {
                        return (
                          <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                            {console.log(filterItems.url)}
                            <Card 
                              foodName={filterItems.name} 
                              item={filterItems} 
                              options={filterItems.options[0]} 
                              ImgSrc={filterItems.img} 
                            />
                          </div>
                        );
                      })
                      : <div>No items found in this category.</div>
                  }
                </div>
              </div>
            );
          })
            : <div>No categories found.</div>
        }
      </div>
      <Footer />
    </>
  );
};

export default Home;
