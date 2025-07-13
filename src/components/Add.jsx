import React from 'react'
import Navbar from './Navbar'

const Add = () => {
  return (
    <div>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card text-center bg-success">
  <div class="card-body">
    <h5 class="card-title">Add Details Here.....!</h5>
    <p class="card-text">Make sure to input all details..</p></div>
</div><br></br>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <input type="text" className="form-control" placeholder='Enter ID'/>
                        </div>
                        <br></br>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <input type="text" className="form-control" placeholder='Enter User ID'/>
                        </div><br></br>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <input type="text" className="form-control" placeholder='Enter Title' />
                        </div><br></br>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <input type="text" className="form-control" placeholder='Enter Body Content'/>
                        </div><br></br>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <button className="btn btn-success">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add