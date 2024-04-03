import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function FetchH() {
  const [record, setrecord] = useState([])

  const viewrecord = async () => {
    try {
      let rec = await axios.get("https://dummyjson.com/products")
      setrecord(rec.data.products)
    } catch (error) {
      console.log(error);
      return false
    }
  }

  useEffect(() => {
    viewrecord()
  }, [])

  return (
    <div>
      <div className="container" style={{ margin: "0 auto" }}>
        <center>
          <h1 style={{ textAlign: "center", margin: "20px" }}>Axios Api</h1>
          <Link to={"/axios"}>
            <button class="cta">
              <span>Fetch</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button> 
          </Link>
        </center>
        <div className="row" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {
            record.map((val) =>
              <div className="card" style={{ width: "200px", margin: "10px " }}>
                <div className="card-image">
                  <img src={val.images ? val.images.slice(0, 1) : ""} alt="" style={{ width: "100%", height: "130px", objectFit: "contain" }} />
                </div>
                <div className="category">{val.title} </div>
                <div className="heading"> A heading that must span over two lines
                  <div className="author"> By <span class="name">Abi</span> 4 days ago</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>

  )
}

export default FetchH