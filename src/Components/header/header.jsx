import React from 'react'
import './header.css'
function Header() {
    return (
        <div>
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Starter Page</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Starter Page</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

      
    </div>
    )
}

export default Header
