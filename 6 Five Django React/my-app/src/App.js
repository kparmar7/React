import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';
import axios from 'axios';

import {FlatList, Text} from 'react-native';

function App() {
  const [student, setStudent] = useState([]); 

  useEffect(()=>{
    async function getAllStud(){
      try{
        const stud = await axios.get('http://127.0.0.1:8000/api/student/')
        setStudent(stud.data);
      }catch(error){
        console.log(error);
      }
    }
    getAllStud()
  }, [])

  // useEffect(()=>{
  //   getData()
  // }, [])

  // let getData = async () =>{
  //   let response = await fetch('http://127.0.0.1:8000/api/student/')
  //   let data = await response.json()
  //   console.log(data);
  //   setStudent(data);
  // }

  return (
    <div className="App">
      <h1>Create React APP</h1>
      <h3>
        {student.map((stud, index)=>(
          <p key={index}>{stud.name}</p>
        ))}
      </h3>
      <h2>Data</h2>
    </div>
  );
}

export default App;
