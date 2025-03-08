import { useState } from "react";

interface IProps {
    one:IWord ;
}

export interface IWord {
    id:string;
    day:string;
    eng:string;
    kor:string;
    isDone:boolean;
}

export default function({one:w} : IProps) {

    const [isShow, setIsShow] = useState(false);
    const [one, setOne] = useState(w);

    function toggleShow(){
        setIsShow(!isShow);
    }

    const [isDone, setIsDone] = useState(one.isDone);
    function toggleDone(){
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${one.id}` , {
            method : 'PUT',
            header : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({
                ...one,
                isDone : !isDone,
                eng : one.eng + Math.trunc(Math.random() * 10) ,
            }),
        })
        .then(res=>{
            if(res.ok){
                setIsDone(!isDone);
            }
        });
    }

    function del(){

        if(window.confirm('삭제?')){
            fetch(`http://localhost:3001/words/${one.id}` , {
                method : 'DELETE',
            })
            .then((res)=>{
                if(res.ok){
                    setOne({...one, id:"0" });
                }
            });
           ;
        }
    }

    if(one.id === "0"){
      return null;
    };

    return (
    <>
        <tr className={isDone?'off':''}> 
            <td>{one.index}</td>
            <td><input type="checkbox" checked={isDone}
                    onChange={toggleDone}/>
            </td>
            <td>{one.eng}</td>
            <td>{isShow && one.kor}</td>            
            <td><button onClick={toggleShow}>{ !isShow ? '보기' : '숨기기'}</button></td>
            <td><button onClick={del} className='btn_del'>삭제</button></td>
        </tr>   
     </> 
    );
  }