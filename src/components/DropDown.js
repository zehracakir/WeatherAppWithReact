import React from 'react';
import{ Dropdown} from 'react-bootstrap';
import { useWeatherContext } from '../context/WeatherContext'
import "../App.css"
function DropDown() {
  const { city, setCity, cities } = useWeatherContext()
  return (
    <div className='header'>
      <Dropdown className='dropdown'>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          {`${city}\n`}
        </Dropdown.Toggle>

        <Dropdown.Menu className='select'>
          {
            cities.map((item) => (
              <div key={item.id}>
                <Dropdown.Item onClick={() => setCity(item.name)}>{item.name}</Dropdown.Item>
              </div>
            ))
          }
        </Dropdown.Menu>

      </Dropdown>

    </div>


  )
}

export default React.memo(DropDown)
