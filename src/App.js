import { useEffect, useState } from 'react';
import ReactPaginate  from 'react-paginate';
import './App.css';
import {BrowserRouter , Switch , Route, Link } from 'react-router-dom'
import DisplayData from './Components/DisplayData';
import SingleUserData from './Components/SingleUserData';

function App() {
  const [userData , setUserData] = useState([]);
  const [noOfRows , setNoOfRows] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  const totalRows = userData.length;

  const handleChangePageNo = (e)=>{ 
      setNoOfRows(e.target.value) 
  }


  const noOfPages = Math.ceil(totalRows / noOfRows);

  const noOfPageVisited = noOfRows * currentPage;

  const displayUsersdata = userData.slice(noOfPageVisited , noOfPageVisited + noOfRows).map((item)=>{
    return(
      <div className="innerBox">
          <div className="table_row_name">{item.name}</div>
          <div className="table_row_username">{item.username}</div>
          <div className="table_row_email">{item.email}</div>
          <div className="table_row_address">{item.address.street}</div>
          <div className="table_row_phone">{item.phone}</div>
          <div className="table_row_website">{item.website}</div>
          <div className="table_row_company">{item.company.name}</div>
          <div className="table_row_open">
            <Link to={`/single:${item.id}`}>open</Link> 
            </div>
          <div className="table_row_delete">delete</div>
      </div>
    );
  })


  const fetchData = async()=>{
      const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const newData = await data.json();
      console.log(newData);
      setUserData(newData);
  }

  const changePage = ({selected})=>{
    setCurrentPage(selected);
  }
  


  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className="App">
        <div className="inputField">
          <label>no of Items:-</label>
          <input value={noOfRows} onChange={handleChangePageNo}></input>
        </div>


        <BrowserRouter>
          <Switch>
              <Route path='/' exact>
                  <DisplayData displayUsersdata={displayUsersdata} noOfPages={noOfPages} changePage={changePage} />
              </Route> 
                {/* { displayUsersdata , noOfPages , changePage, } */}
              <Route path='/single/:id' exact>
                  <SingleUserData />
              </Route>
          </Switch>

        </BrowserRouter>

        
      

    </div>
  );
}

export default App;