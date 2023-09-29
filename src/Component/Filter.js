import React, { useEffect } from 'react'

function Filter(props) {
    
     let {placeDetails}=props;    

    useEffect(() => {

        if (props.totalPages !== 0) { props.updateplaceDetails(1); }

    }, [placeDetails])                      //run on first render and on change dependancies  [props.totalPages]



    const changeplaceDetails = async (country) => {
        props.changeCountry(country);

        const filteredArray = props.filterArray.filter((element) => element.country === country);
        props.changeplaceDetails(filteredArray);             //placeDetail we actually changing so after clicking on 


        let noOfPages = Math.ceil(filteredArray.length / props.pageLimit);


        await props.changetotalPages(noOfPages);    //this is not changing taking old value

        props.setCount(0);
        props.changePlaceState("previous state")

        // console.log(" noOfpages "+noOfPages);
        // console.log(" total page changed to "+props.totalPages);


    }

    const searchHandler = () => {
        console.log('clicked on search');
        let placeByName = [];

        let value = document.getElementById('search').value;
        console.log(value);
        let regex = new RegExp(value, "ig")


        if (value!== "") { 
            placeByName = props.filterArray.filter((ele) => ele.placeName.match(regex));
        }
       
       

        if (placeByName.length !== 0) {
            

            props.changeplaceDetails(placeByName);

            let noOfPages = Math.ceil(placeByName.length / props.pageLimit);
            props.changetotalPages(noOfPages);
        }else{
            //alert("Didn't found any match")
        }

    }


    return (
        <>
            <div className="bg-dark py-3 filter ">
                <div className="d-flex justify-content-end">


                    <div className="dropdown mx-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {props.country}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <span  className="dropdown-item" value="India" onClick={() => { changeplaceDetails("India") }}>INDIA</span>
                            <span className="dropdown-item" value="US" onClick={() => { changeplaceDetails("US") }} >US</span>
                        </div>
                    </div>

                    <div className="d-flex mx-3" >
                        <input className="form-control mx-2" type="search" placeholder="Search by place name" aria-label="Search" id='search' />
                        <button className="btn btn-success" type="submit" onClick={searchHandler}>Search</button>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Filter
