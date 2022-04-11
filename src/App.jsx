import './App.css';
import React from 'react';
import {Button} from "./Components/Button"

function App() {
  const[theme,setTheme] = React.useState("dark")
  return (
      <div>

        <h1></h1>
           <Button onClick = {() => setTheme( theme==="dark" ? "light" : "dark")}>Primary Button</Button>

      </div>
      
  );
}

export default App;
