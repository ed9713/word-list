import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import dummy from '../db/data.json'
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';

export interface IDay {
  id:string;
  day:string;
}

export default function() {


  // console.log(dummy);

    // const [days, setDays] = useState([]);
 
    // useEffect(()=>{

    //     fetch('http://localhost:3001/days')
    //         .then(res=>{
    //             return res.json();
    //         })
    //         .then((data)=>{
    //             setDays(data);
    //         })
    //         .catch((e)=>{
    //             console.log(e);
    //         });

    // }, []);

    // useFetch('http://localhost:3001/days');

    const days : IDay[] = useFetch('http://localhost:3001/days');
    // setDays(result);

    if( days.length === 0  ){
        return `로딩중....`;
    }

  return (
    <>
    <ul className='list_day'>
        {days.map((one) => (
             <li key={one.id}>
                <Link to={`/day/${one.day}`}>
                날짜 {one.day}
                </Link>
            </li>
        ))}       
    </ul>
    </>
  );
}