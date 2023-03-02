import './App.css';
import Container from "./components/Container"
import { WeatherProvider } from './context/WeatherContext';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className='App'>
     <h1 className='text-center'>Hava Durumu</h1>
      <WeatherProvider>
      <Container/>
      </WeatherProvider>
    </div>
  );
}

export default App;


