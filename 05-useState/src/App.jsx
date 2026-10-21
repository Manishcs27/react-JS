import React,{useState} from 'react'

const App = () => {
  const [num, setNum] = useState({username: "John", age: 30, location: "New York"});
  const [arr,setArr] = useState([10,20,30])

function handleClick() {
  const newNum = {...num};
  newNum.username = "Manish";
  newNum.age = 25;
  newNum.location = "Los Angeles";
  setNum(newNum);
}
function handleArr(){
  const newArr = [...arr];
  newArr.push(84);
  setArr(newArr)
}
  return (
    <div>
      <h1>{num.username}, {num.age}, {num.location}</h1><br/>
      <h2>{arr}</h2>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleArr}>Change Array</button>

    </div>
  )
}

export default App
