import React, { use, useState } from 'react';
import Country from './Country/Country';
import './Countries.css';

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = ( country)=>{
        console.log('handle visited countery clicked',country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const [visitedFlage,setVisitedFlage] = useState([]);
    const handleVisitedFlag =(flag) =>{
        // console.log('flag need to be added', flag);
        const newVisitedFlage =[...visitedFlage,flag];
        setVisitedFlage(newVisitedFlage);
    }

    const countriesData = use(countriesPromise);
    const  countries = countriesData.countries;

    // console.log(countries)


    return (
        <div>
            <h1>In the Countries: {countries.length} </h1>
            <h3>Total Country Visited:{visitedCountries.length}</h3>
            <h3>Total Flage Visited:{visitedFlage.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                     key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>

                    {/* flage  */}
            <div className='visied-flags-container'>
                {
                    visitedFlage.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>



           <div className='countries'>
                 {
                countries.map(country => <Country 
                    key ={country.cca3.cca3}
                    country={country}
                    handleVisitedCountries={handleVisitedCountries }
                    handleVisitedFlag ={handleVisitedFlag} >
                    </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;