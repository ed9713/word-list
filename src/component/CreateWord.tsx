import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch.ts";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { IDay } from "./DayList";

export default function CreateWord() {
 
    const days : IDay[]  = useFetch('http://localhost:3001/days');
    const history = useHistory();
    const [isLoading , setIsLoading] = useState(false);

    function onSubmit(e : React.FormEvent){
        e.preventDefault();



        if( !isLoading && dayRef.current && engRef.current && korRef.current  ){
            setIsLoading(true);
         // setIsDone(!isDone);

         const day = dayRef.current.value;
         const eng = engRef.current.value;
         const kor = korRef.current.value;
 
  
         fetch(`http://localhost:3001/words/` , {
            method : 'POST',
            header : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(    {
                day,
                eng,
                kor,
                "isDone": false
            }),
        })
        .then(res=>{
            if(res.ok){           
                history.push(`/day/${dayRef.current.value}`);
                setIsLoading(false);
            }
        });   

        }  
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label>영어</label>
                    <input type="text" ref={engRef}/>
                </div>
                <div className="input_area">
                    <label>한국어</label>
                    <input type="text" ref={korRef}/>
                </div>
                <div className="input_area">
                    <label>날짜</label>
                    <select ref={dayRef}>
                    {days.map((day)=>(
                        <option key={day.id}>{day.day}</option>
                    ))}                       
                    </select>
                </div>                                
                <button>{isLoading ? '저장중..' : '저장'}</button>
            </form>
        </>
    );
}