import { Link } from "react-router-dom";

export default function(){
    return (
    <div className="header">
        <h1>            
            <Link to="/">영단어</Link>
        </h1>        
        <div className="menu">
            <Link to="/create_word" className="link">영단어 추가</Link>
            <Link to="/create_day" className="link">날짜 추가</Link>
        </div>
    </div>
    );
}
