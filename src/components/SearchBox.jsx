import React, { useState } from 'react'
import { getWeatherInfo } from "../helper/getWeatherInfo"


const SearchBox = ({ updateInfo }) => {

    let [city, setCity] = useState("");
    let [error, SetError] = useState(false)

    const handlechange = (e) => {
        setCity(e.target.value);

    }

    const handlesubmit = async (e) => {

        try {
            e.preventDefault();
            setCity("");
            SetError(false);
            let newinfo = await getWeatherInfo(city);
            updateInfo(newinfo);

        } catch (error) {
            SetError(true);

        }
    }

    return (
        <>

            <div>
                <div className="text-center ">
                    <form action="" onSubmit={handlesubmit} className='flex py-2 mt-4 flex-col items-center'>
                        <input
                            id="city"
                            label="City Name"
                            onChange={handlechange}
                            required
                            value={city}
                            placeholder='Enter City name...'
                            className='bg-blue-100 rounded-md px-3 py-2 '
                        />
                        <div className='flex items-center py-3'>

                            <button className='rounded-md text-white font-bold bg-black opacity-50 hover:opacity-100 hover:text-black hover:bg-blue-600 px-3 py-1' type="submit">search</button>

                        </div>
                        {error && <p style={{ color: "red" }}>No such place exists</p>}
                    </form>
                </div>
            </div>


        </>

    )
}

export default SearchBox