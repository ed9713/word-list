import './App.css';
import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord.tsx';
import DayList from './component/DayList.tsx';
import Days from './component/Days.tsx';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import { BrowserRouter, Route, Switch , Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Days />  
          </Route>
          <Route path="/create_word">
            <CreateWord />  
          </Route>   
          <Route path="/create_day">
            <CreateDay />  
          </Route>                  
          <Route>
            <EmptyPage />
          </Route>      
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
