import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img className="card-img-top" src="https://images.unsplash.com/photo-1542367592-8849eb950fd8?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card-image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">this is some imp text</p>
          <div className="container w-100">
            <select className="m-2 h-100">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100 ">
              <option value="half">Half</option>
              <option value="half">Full</option>
            </select>

            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card