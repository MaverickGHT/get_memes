import { useEffect, useState } from "react";
import ButtonUtente from "./ButtonUtente";

function App() {

const [data, setData] = useState([]);

useEffect (() => {fetch("https://api.imgflip.com/get_memes")
.then((response) => response.json())
.then((json) => setData(json.data.memes));}, [])

  return (
  <div>
    <div>{data.map((elemento) => {
      return (
        <div key={elemento.id}> 
          <div>ID:{elemento.id} NOME:{elemento.name}</div>
        <img src={elemento.url}  width={"50%"} height={"50%"}/>
        </div>
      )
    })}</div>
    </div>
  );
}

export default App;

