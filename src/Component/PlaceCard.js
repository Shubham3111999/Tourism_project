import React from 'react'
import {  Link } from "react-router-dom";



function PlaceCard(props) {
    
    
    const handleFavbtn=(e)=>{

        if(e.target.className==="fa-regular fa-heart"){
            e.target.className="fa-solid fa-heart"   // this replace classname
        }else{
            e.target.className="fa-regular fa-heart"
        }
        
          
        //e.target.classList.add('fa-solid');   //this add classname 
      
    }
    
    const onMoreDetailClick=(ele)=>{
        localStorage.setItem("place",JSON.stringify(ele));
        
    }



    return (
      
        
        props.paginationplaceDetails.map((element) =>
    
        
            <div className="my-2  render"  key={element._id}>
    
                <div className="row border border-5"  >
                    <div className="col-4" style={{ padding: "1px" }} >
                        <img src={`/Images/${element.imgSrc}`} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                    </div>

                    <div className="cardDiscription col-8 p-4 rounded" style={{ color: "white", position: "relative" }} >
                        
                        <i className="fa-regular fa-heart" style={{ position: "absolute",right: "20px", top: "20px"}} onClick={handleFavbtn}></i>

                        <h1 style={{ textAlign: "center", color: "rgba(255,255,255)", fontSize: "30px", fontFamily: 'Caprasimo' }}>{element.placeName}</h1>

                        <i className="fa-solid fa-location-dot" style={{ color: "#c24e0f" }}>  </i> <b style={{ fontFamily: 'Archivo Black' }}>State :</b> <span style={{ fontFamily: 'Preahvihear' }}>{element.state}</span> <br />

                        <i className="fa-solid fa-list" style={{ color: "#c24e0f" }}></i> <b style={{ fontFamily: 'Archivo Black' }}>Description :</b> <span style={{ fontFamily: 'Preahvihear' }}>{element.description}</span> <br /><br />

                        <Link to="/placeDetails" onClick={()=>{onMoreDetailClick(element)}} className="btn btn-success" type="submit" style={{ fontFamily: 'Cinzel' }}>More Detail</Link>

                    </div>

                </div>
            </div>

        )



    )
}

export default PlaceCard