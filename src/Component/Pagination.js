import React from 'react'

function Pagination(props) {

  return (
    <div className="d-flex justify-content-center">
  
    <nav aria-label="Page navigation example">
       
        <ul className="pagination">
        {props.pageNo!==1?<li className="page-item navbtn" id='previousBtn' ><a className="page-link"  onClick={()=>{props.updateplaceDetails(props.pageNo-1)}}>Previous</a></li>:""}
        {props.emptyArray}
        {props.totalPages===props.pageNo?<></>:<li className="page-item navbtn" id='nextBtn'><a className="page-link"  onClick={()=>{props.updateplaceDetails(props.pageNo+1)}}>Next</a></li>}
        </ul>
      </nav>
    </div>

  )
}

export default Pagination
