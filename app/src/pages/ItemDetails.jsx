import {useParams} from "react-router-dom"
import React from "react"
import './ItemDetails.css'

const ItemDetails = () => {
    const {id} = useParams();
    console.log(id)


    return (
        <div id="movie-modal" className="movie-details">
        <div className="detail-content">
          <span className="close">&times;</span>
          <div className="inner-movie-details">
            <div className="detail-img">
              <img id="movie-detail-img" src="" alt="Movie Image" />
            </div>
            <div className="text-details">
              <h1 id="movie-detail-title"></h1>
              <h2 className="overview">Overview</h2>
              <p id="movie-detail-overview"></p>
              <h2>Cast</h2>
              <p id="movie-detail-cast"></p>
              <span id="movie-detail-rating"></span>
              <span id="movie-detail-releasedate"></span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ItemDetails