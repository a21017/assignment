import React from 'react';
import {useState,useEffect} from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import axios from 'axios';


import './App.css';
import Details from './components/Details';

function App() {

  const fetchUrl = async()=>{

    try {
      const response = await axios.get('https://randomuser.me/api');
  
      const {results:[{email,name}]} = response.data;
           localStorage.setItem('detail',JSON.stringify({email,name}));
           setDetails({email,name});
  
      
  
      
    } catch (errors) {
      console.error(errors);
    }

   
  }

  const onClickHandler = ()=>{

    fetchUrl();

  }


  useEffect(() => {
    
    
    
  }, [])
  
  
 
  const init = JSON.parse(localStorage.getItem('detail')|| '') || {email:'',name:{title:'',first:'',last:''}};
  
  const [details,setDetails] = useState<{email:string,name:{title:string,first:string,last:string}}>(init);

  return (
   
    <div className='Card'>
      <Details details={details}></Details>
      <button className='buttonRefresh' onClick={onClickHandler}><RefreshIcon></RefreshIcon></button>
    </div>
  );
}

export default App;
