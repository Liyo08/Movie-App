import React from 'react'
import MovieNavbar from './MovieNavbar'

const ViewMovie = () => {
  return (
    <div>
<MovieNavbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                <table class="table">
  <thead>
    <tr>
      <th scope="col">Movie Name</th>
      <th scope="col">Actor Name</th>
      <th scope="col">Actress Name</th>
      <th scope="col">Director Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Lucifer</th>
      <td>Mohanlal</td>
      <td>Manju Warrier</td>
      <td>Prithviraj Sukumaran</td>
    </tr>
   
  </tbody>
</table>




                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMovie