import { useState } from "react";
import Heading from "./Heading";
import Tours from "./components/Tours.jsx";
import data from './components/data.js'

function App()
{
  const [tours,setToures]=useState(data);
  function romoveTour(id)
  {
      const newToures = tours.filer(tour=>tour.id!=id);
      setToures(newToures);
  }
  return(
    <div>
      
        <Tours tours={tours} romoveTour={removeTour}></Tours>
    </div>
  );
}
export default App;