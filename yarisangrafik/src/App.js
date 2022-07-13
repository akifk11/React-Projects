import React,{useState,useEffect} from 'react';
import './App.css';
import Area from './components/Area';
import ChartItem from './components/ChartItem';

function App() {
const getRandom= ()=>{
return Math.floor(Math.random()*100+1);
}
const[barData,setBarData]=useState([
{
  id:1,
  title:"apple",
  color:"#999999",
  value:getRandom() 
},
{
  id:2,
  title:"microsoft",
  color:"#000de5",
  value:getRandom() 
},
{
  id:3,
  title:"tesla",
  color:"#e5000d",
  value:getRandom() 
},
{
  id:4,
  title:"google",
  color:"#ffff00",
  value:getRandom() 
},
{
  id:5,
  title:"facebook",
  color:"#03a9f4",
  value:getRandom() 
},
])

const bigBarItem = (data)=>{
  return data.sort((val1,val2)=>val2.value-val1.value)[0].value
  
}

const[bigBarData,setBigBarData]=useState(bigBarItem(barData)); 

const setBarDataWithRandom = ()=>{
  let data = [...barData];
  data.forEach((item)=>{
    item.value+=getRandom();
  })
  setBigBarData(bigBarItem(data))
  setBarData(data);
}
useEffect(()=>{
  let timer;
  timer = setInterval(()=>{
   setBarDataWithRandom()
  },500)
},[])
const renderBarItem=(item,index)=>{
  let rate=item.value/bigBarData;
  rate = rate * (1000-40);
  const percent = (rate*100)/1040;
  return(
    <ChartItem
    key={item.id} backgroundColor={item.color} width={percent+"%"} text={item.title} count={item.value} top={(index===0?10:(index*40)+20)+'px'}
    ></ChartItem>
  )
}

  return (
    <>
      <div className="app-title">firmaların müşteri sayıları</div>
      <Area data={barData}>
        {barData.map((item,index)=>renderBarItem(item,index))}
      </Area>
    </>
  );
}

export default App;
