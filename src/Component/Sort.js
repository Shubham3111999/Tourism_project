import React, { useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'

function Sort(props) {
    const sortArray = [];
    const sortSet = new Set();
    const previousState = useRef("");

    // const [props.count, props.setCount] = useState(0);  //add in app
    // const [props.setCount, props.changePlaceState] = useState("previous state");   //add in app

    const sortClickHandler = (state) => {
        let placeByState=[];
        //console.log(props.count);
        props.changePlaceState(state);

        if (props.count === 0) {
            props.setCount(1);

            //console.log('if is run');
            //console.log("clicked on " + state);
            placeByState = props.filterArray.filter((ele) => ele.state === state);
            props.changeplaceDetails(placeByState);

            let noOfPages = Math.ceil(placeByState.length / props.pageLimit);
            props.changetotalPages(noOfPages);

        } else if (props.count === 1 && previousState.current=== state){
            //console.log(props.country);
            props.setCount(0);
            //console.log('else is run');
            //console.log("clicked on " + state);
            
            if(props.country==="Select Country"){
                placeByState=props.filterArray
                props.changeplaceDetails(props.filterArray);
            }else{
                placeByState = props.filterArray.filter((element) => element.country === props.country);
                props.changeplaceDetails(placeByState)
            }



            let noOfPages = Math.ceil(placeByState.length / props.pageLimit);
            props.changetotalPages(noOfPages);
           
        }else{
            props.setCount(1);
            //console.log('else is runnnnnnnnnnnnnnnnn');
            //console.log("clicked on " + state);
            placeByState = props.filterArray.filter((ele) => ele.state === state);
            props.changeplaceDetails(placeByState)

            let noOfPages = Math.ceil(placeByState.length / props.pageLimit);
            props.changetotalPages(noOfPages);

        }
    }

        if (props.country === "Select Country") {

            for (let index = 0; index < props.filterArray.length; index++) {
                sortSet.add(props.filterArray[index].state)

            }
        } else {

            const filteredArray = props.filterArray.filter((element) => element.country === props.country);
            for (let index = 0; index < filteredArray.length; index++) {

                sortSet.add(filteredArray[index].state)

            }

        }

        sortSet.forEach((ele) => {
          
            let element = <span key={nanoid()} onClick={() => sortClickHandler(ele)} >  <input className="form-check-input" type="checkbox" value={ele} id={ele} checked={props.placeState === ele && props.count===1 ? true : false} onChange={() => { }} />
                <label className="form-check-label" htmlFor={ele} >
                    {ele}
                </label><br /></span>
            sortArray.push(element);
        })

        useEffect(() => {
            // //console.log("useeefct of short");

            previousState.current = props.placeState;
            // //console.log(previousState.current);

        }, [props.placeDetails]);



        return (
            <div>


                <div className="form-check " >
                    {sortArray}
                </div>
            </div>
        )
    
}

export default Sort
