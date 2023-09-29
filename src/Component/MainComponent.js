import React from 'react'
import PlaceCard from './PlaceCard'
import Sort from './Sort'

function MainComponent(props) {
    
    return (
        

        <div className='row my-1 mx-1 '>
          
            <div className="col-2 my-2 Sort text-white render">
                <h3 style={{ fontFamily: 'Archivo Black' }}>Filter Place By</h3>
                <Sort  placeDetails={props.placeDetails} changeplaceDetails={props.changeplaceDetails} filterArray={props.filterArray}  country={props.country}  pageLimit={props.pageLimit} changetotalPages={props.changetotalPages} totalPages={props.totalPages} count={props.count} setCount={props.setCount} placeState={props.placeState} changePlaceState={props.changePlaceState}/>
            </div>
            <div className="col-10">
            
            <PlaceCard paginationplaceDetails={props.paginationplaceDetails}/>
            </div>

            

        </div>
    )
}

export default MainComponent
