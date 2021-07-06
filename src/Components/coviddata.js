import React, {useEffect, useState} from 'react'


// @this_coder_is_alive

const Coviddata = () => {

    const [actualdata, setactualdata] = useState([]);

    const getcoviddata = async () => {
       const res = await fetch('https://api.covidtracking.com/v1/states/current.json')
       const data = await res.json()
       setactualdata(data)
    // console.log(data)
    }

    useEffect(() => {
        getcoviddata();
    }, []);
    return (
        
        <>
         <h1 className="mb-5 text-center">COVID-19 UPDATE</h1>
              <div>
                  <table className="table">
                      <thead className="table-dark">
                          <tr>
                              <th>State</th>
                              <th>Confirmed</th>
                              <th>Recovered</th>
                              <th>Deaths</th>
                              <th>Active</th>
                              <th>Updated</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              actualdata.map((kam, pak)=> {
                                  return(
                                    <tr key={pak}>
                                        <td>{kam.state}</td>
                                        <td>{kam.positive}</td>
                                        <td>{kam.recovered}</td>
                                        <td>{kam.death}</td>
                                        <td>{kam.positiveIncrease}</td>
                                        <td>{kam.deathConfirmed}</td>
                                    </tr>
                                  )
                              })
                          } 
                      </tbody>
                  </table>
             </div>  
        </>
    )
}

export default Coviddata
