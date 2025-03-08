import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import dummy from '../db/data.json'
import Word, { IWord } from './Word.tsx';
import { useState } from 'react';
import useFetch from '../hooks/useFetch.ts';

export default function() {
    // const day = 3;
    const {day} = useParams<{day:string}>(); 
    // const day = useParams().day;
    // const wordList = dummy.words.filter(one => Number(one.day) === Number(day) );
    // const [wordsList , setWordsList] = useState([]);

    // useEffect(()=>{

    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then(res=>{
    //             return res.json();
    //         })
    //         .then((data)=>{
    //             console.log(data.length);
    //             setWordsList(data);
    //         })
    //         .catch((e)=>{
    //             console.log(e);
    //         });

    // }, [day]);


    const wordsList : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
    console.log(wordsList.length);

    return (
    <>
     <h2>day {day}</h2>
     {wordsList.length === 0 ? '로딩중...' : ''}     
     <table>
        <tbody>
            {wordsList.map((one,index)=>(
                <Word one={one} key={one.id} />
            ))}           
        </tbody>
     </table>
     </> 
    );
  }