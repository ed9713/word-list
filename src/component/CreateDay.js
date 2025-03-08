import { useRef } from "react";
import useFetch from "../hooks/useFetch.ts";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CreateDay() {
 
    const days = useFetch('http://localhost:3001/days');
    const history = useHistory();


    function addDay(){
        
         // setIsDone(!isDone);
         fetch(`http://localhost:3001/days/` , {
            method : 'POST',
            header : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(    {
                "day": days.length + 1 ,
            }),
        })
        .then(res=>{
            if(res.ok){           
                history.push(`/`);
            }
        });      
    }

    return (
        <>

                <div>현재 일수 : {days.length}</div>
                <button onClick={addDay}>day 추가</button>

        </>
    );
}