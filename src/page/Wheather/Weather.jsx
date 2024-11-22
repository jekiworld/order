import React, { useEffect, useState } from 'react'

export default function Weather() {

  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [City, setCity] = useState("");
  const ApiKey = "a7a279dc6363473eae0134501242111";

  const handleChangeInput = (event) => {
    setCity(event.target.value);
  }

  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${City}`
      );
      if (!response.ok) {
        throw new Error("Ошибка при получении данных о погоде");
      }
      const data = await response.json();
      setInfo(data);
      console.log(info)
    } catch (err) {
      setError(err.message);
    }
  }


  return (
    <div>
      <div className='search'>
        <input type="text" value={City} placeholder='search' onChange={handleChangeInput} />
        <button onClick={handleClick}>Найти</button>
      </div>

      {info === null ? (
        <p>Данные еще не загружены</p>
      ) : (
        <div>
          <p>Country: {info.location.country}</p>
          <p>City: {info.location.name}</p>
        </div>
      )
      }
    </div>
  )
}
