import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [postDate,changePostData]= useState(
        [ ]
    )

    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (response)=>{changePostData(response.data)}
      ).catch()
    }
useEffect(()=>{fetchData()},{})
  return (
    <div>
        <Navbar /><br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     
                    <div class="card text-center bg-warning">
  <div class="card-body">
    <h5 class="card-title">View all Details Here.....!</h5>
    <p class="card-text">All the details are given in a tabular form.</p></div>
</div><br></br>
                    <div className='table-responsive'>
                    <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">UserID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    {postDate.map(
        (value,index)=>{
            return (
                <tr>
      <th scope="row">{value.id}</th>
      <td>{value.userId}</td>
      <td>{value.title}</td>
      <td>{value.body}</td>
    </tr>
            )
        }
    )}
    
  </tbody>
</table>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View