import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Axioss() {
  const [record, setrecord] = useState([])

  const viewrecord = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json()) 
      .then(rec => setrecord(rec.products))    
  }

  useEffect(() => {
    viewrecord()
  }, [])

  return (
    <div>
      <div className="container" style={{ margin: "0 auto" }}>
        <center>
          <h1 style={{ textAlign: "center", margin: "20px" }}>Api Fetch</h1>
          <Link to={"/"}>
            <button class="cta">
              <span>Axios</span>
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
                  <img alt="" src={val.images?val.images.slice(2,3):""} style={{ width: "100%", height: "130px", objectFit: "contain" }} />
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

export default Axioss