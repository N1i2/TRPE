import Site from './Work/Site';
import {MovieLibrary} from './MovieLib/MovieLibrary'
import './css/App.css'


function App() {
  return (
    <>
     <Site movies={MovieLibrary} />
    </>
  );
}

export default App;
