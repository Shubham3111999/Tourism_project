
import { useEffect, useState } from 'react';
import './App.css';
import Filter from './Component/Filter';
import MainComponent from './Component/MainComponent';
import Navbar from './Component/Navbar';
import Pagination from './Component/Pagination';
import Placedetails from "./Component/Placedetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  //   let placeDetails=[
  //   {
  //     placeName:"PlaceName4 with name",
  //     state:"state4",
  //     description:"D4",
  //     imgSrc:"/Lake_hero.jpg"
  // }]

  const [placeDetails, changeplaceDetails] = useState(["my initial valuer"]);
  const [pageLimit, changepageLimit] = useState(2);              //how many places on single page
  const [totalPages, changetotalPages] = useState(0);            //total pages count
  const [pageNo, changepageNo] = useState(1);                    //current page no
  const [paginationplaceDetails, changepaginationplaceDetails] = useState([]);

  const [filterArray, changefilterArray] = useState(["initial"]);

  const [country, changeCountry] = useState("Select Country");

  const [count, setCount] = useState(0);
  const [placeState, changePlaceState] = useState("previous state");


  let emptyArray = [];


  const fetchAllPlaces = async () => {

    const respose = await fetch("http://localhost:2000/api/places");
    const places = await respose.json();
    changeplaceDetails(places);                   // fetch all places but this going to change as filter/sort applied
    changefilterArray(places);                    // fetch all places

    let noOfPages = Math.ceil(places.length / pageLimit);
    changetotalPages(noOfPages);                  //no of pages for pagination

    let pagination = places.slice((pageNo - 1) * pageLimit, pageNo * pageLimit)
    changepaginationplaceDetails(pagination);

    document.getElementById("previousBtn") === null ? <></> : document.getElementById("previousBtn").style.visibility = "hidden";
    //document.getElementById("previousBtn").style.visibility = "hidden"    //dont show previous btn

  }


  const updateplaceDetails = (pageNo) => {
    //console.log("update place detail running");

    let allPageBtn = document.getElementsByClassName("page-link");

    Array.from(allPageBtn).forEach(element => {
      element.classList.remove("paginationBtn")          // remove pagination styling class if available
    });


    changepageNo(pageNo);

    // console.log("current page no "+ pageNo);
    // console.log(" totalpage "+totalPages);

    try {
      pageNo === 1 ? document.getElementById("previousBtn").style.visibility = "hidden" : document.getElementById("previousBtn").style.visibility = "visible"
      pageNo === totalPages ? document.getElementById("nextBtn").style.visibility = "hidden" : document.getElementById("nextBtn").style.visibility = "visible"

      
      

    } catch (error) {

    }

    changepaginationplaceDetails(placeDetails.slice((pageNo - 1) * pageLimit, pageNo * pageLimit));

    try {
      
      document.getElementById(pageNo).classList.add("paginationBtn");
    } catch (error) {
      
    }
  }


  for (let index = 0; index < totalPages; index++) {
    emptyArray.push(<li className="page-item" onClick={() => { updateplaceDetails(index + 1) }} key={index}><a className="page-link" id={index + 1} >{index + 1}</a></li>)

  }



  useEffect(() => {
 
    fetchAllPlaces();
  }, []);

  return (
    <>
      <BrowserRouter>

        <Navbar />
        <div id='HeroImage'> <h1>Welcome To My site</h1></div>


        <Filter filterArray={filterArray} pageLimit={pageLimit} totalPages={totalPages} changetotalPages={changetotalPages} changeplaceDetails={changeplaceDetails} updateplaceDetails={updateplaceDetails} changeCountry={changeCountry} placeDetails={placeDetails} country={country} count={count} setCount={setCount} placeState={placeState} changePlaceState={changePlaceState} />

        <Routes>

          <Route exact path="/" element={<><MainComponent paginationplaceDetails={paginationplaceDetails} placeDetails={placeDetails} changeplaceDetails={changeplaceDetails} filterArray={filterArray} country={country} pageLimit={pageLimit} changetotalPages={changetotalPages} totalPages={totalPages} count={count} setCount={setCount} placeState={placeState} changePlaceState={changePlaceState} />
            <Pagination emptyArray={emptyArray} updateplaceDetails={updateplaceDetails} pageNo={pageNo} totalPages={totalPages} /> </>} />


          <Route path="/placeDetails" element={<Placedetails />} />

        </Routes>




      </BrowserRouter>
    </>
  );
}

export default App;