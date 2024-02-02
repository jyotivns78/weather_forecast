import React, {
  useState
} from 'react'
import {
  AsyncPaginate
} from 'react-select-async-paginate'
import {
  GEO_API_URL,
  geoApiOptions
} from '../../Api';

const Search = ({onSearchChange}) => {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
           return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
           }
          })
        }
      })
      .catch((err) => console.log(err));
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }



  return ( 
    <>
     <div className="container-fluid mb-4 d-flex justify-content-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1124&amp;q=100')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", paddingTop: "150px", paddingBottom: "150px" }}>
        <div className="p-5 mb-4 col-xxl-7 col-lg-8 col-12" style={{ backdropFilter: "blur(6px) saturate(102%)", WebkitBackdropFilter: "blur(6px) saturate(102%)", backgroundColor: "rgba(255, 255, 255, 0.45)", borderRadius: "12px", border: "1px solid rgba(209, 213, 219, 0.3)" }}>
        <div className="lc-block mb-3">
            <h2 className="fw-bolder display-3">Weather Forecast</h2>
          </div>
       
        <AsyncPaginate placeholder = "Search By City"
    debounceTimeout = {
      600
    }
    value = {
      search
    }
    onChange = {
      handleOnChange
    }
    loadOptions = {
      loadOptions
    }
    /> 
        </div>
      </div>
 
    </>
  )
}

export default Search