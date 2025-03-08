import { useEffect, useState } from 'react';
export default function(url : string){
    
   const [data , setData] = useState([]);

    useEffect(()=>{
        fetch(url)
            .then(res=>{
                return res.json();
            })
            .then((data1)=>{
                // console.log(data1.length);
                setData(data1);
            })
            .catch((e)=>{
                console.log(e);
            });

    }, [url]);      // 의존성 배열

    return data;
}