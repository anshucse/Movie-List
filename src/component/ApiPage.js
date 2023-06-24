import React, { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const url = 'https://hoblist.com'

function ApiPage(props) {
  const [data,setData] = useState(false)

  const readData = async () => {
    let data = {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting'
    }
      const res = await axios.post(`${url}/api/movieList`, data)
        console.log('res = ',res.data)
        setData(res.data.result)
  }

  useEffect(() => {
    readData()
  }, [])


  return (
    <div className='container'>
      
    
          
       <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Movie List</h3>
        </div>
       </div>  
 
   
       <div className="row">
          {
              data && data.map((item, index) => {
                const { title, poster, voting, totalVoted, genre,stars, director,releasedDate, language, pageViews } = item
                return (
                  <div className="col-md-6 col-lg-6 col-sm-12" key={index} >
                      <div className="card mt-3 mb-3">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-md-2 col-sm-2 col-lg-2 voting">
                                <i className="bi bi-caret-up-fill"></i>
                                  <span className='text-center'> { voting } </span>
                                <i className="bi bi-caret-down-fill"></i>
                                  <strong className='text-center'>Votes</strong>
                              </div>
                              <div className="col-md-4 col-sm-4 col-lg-4">
                                <img src={poster? poster: ''} alt="no image" className="img-fluid rounded" />
                              </div>
                              <div className="col-md-6 col-sm-6 col-lg-6">
                                    <h2 className="text-dark"> {title} </h2>
                                    <p>
                                       <b>Genre:</b> <span> {genre} </span>
                                    </p>
                                    <p>
                                       <b>Director:</b> <span> {director} </span>
                                    </p>
                                    <p>
                                       <b>Starring:</b> <span> {stars} </span>
                                    </p>
                                    <p>
                                        { new Date(releasedDate).getMinutes().toString()}mins |
                                        { language } |
                                        { new Date(releasedDate).toLocaleDateString()}
                                    </p>
                                    <p className="text-info">
                                        {pageViews} Views | 
                                        Voted By { totalVoted } people 
                                    </p>
                              </div>
                            </div> 
                          </div>
                          <div className="card-footer d-grid"> 
                              <button className="btn btn-primary">Watch Trailer</button>
                          </div>
                      </div>
                  </div>
                )
              })
          }
       </div>
    </div>
  )
}

export default ApiPage
