import React,{useState} from 'react';
import './App.css';
import Form from "./components/form/Form"
import Input from "./components/input/Input"
import Button from "./components/button/Button"

function App() {
  const[user,setUser]=useState({name:"", password:""})

  const handleChange = (e)=>{
    if(e.target.type === "text"){
      setUser({...user, name: e.target.value})
    console.log(user)
    } else{
      setUser({...user,password: e.target.value})
      console.log(user)
    }
    
  }
  const handleClick = ()=>{
    if(user.name === ""){
      alert("kullanıcı adı boş ")
    } else if(user.password === ""){
      alert("şifre boş")
    } else{
      alert("kullanıcı adı"+user.name+"  "+"şifre"+user.password)
    }
  }
  
  return (
    <div className="App">
     <h1>Login Form</h1>
      <Form>
        <Input type={"text"} placeHolder={"please,enter a name"} onChange={handleChange} value={user.name}/>
        <Input type={"password"} placeHolder={"please,enter a password"} onChange={handleChange} value={user.password}/>
        <Button onClick={handleClick}/>
      </Form>
    </div>
  );
}

export default App;
