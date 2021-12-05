import React, { useState } from 'react'
import dijkstra from './dijkstraExtend'
var find_path = dijkstra.find_path;

const Airport = () => {
    const [start, setStart] = useState([]);
    const [end, setEnd] = useState([]);
    const [route, setRoute] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

// i use Dijkstra library with some modification

    const airports = [
        { name: 'Please insert Airport' },
        { name: 'ISB' },
        { name: 'LHR' },
        { name: 'NYC' },
        { name: 'CBS' },
        { name: 'GRC' },
    ]

    const handleRoute = (e) => {
        e.preventDefault();

        describe();

    }
    const handleStart = (e) => {
        setStart(e.target.value);
    }
    const handleEnd = (e) => {
        setEnd(e.target.value);
    }
    const describe = ('.find_path()', function () {
        var graph = {
            ISB: { CBS: 575, LHR: 1000 },
            LHR: { NYC: 750, ISB: 1000 },
            NYC: { LHR: 750, GRC: 459, CBS: 775 },
            CBS: { ISB: 575, GRC: 731, NYC: 775 },
            GRC: { CBS: 731, NYC: 459 }
        };
        var pathCost = find_path(graph, start, end);
        var path= pathCost[0];
        var cost = pathCost[1];
        var cost =cost[path[path.length - 1]];
        setTotalCost(cost);
        setRoute(JSON.stringify(path));
    });

    return (
        <div>
            <form className="my-3" >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Start Point : </label>
                    <select onChange={handleStart}>
                        {airports.map((airport) => (
                            <option value={airport.name} key={airport.name}>{airport.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">End Point : </label>
                    <select onChange={handleEnd}>
                        {airports.map((airport) => (
                            <option value={airport.name} key={airport.name}>{airport.name}</option>
                        ))}
                    </select>
                </div>

                <button onClick={handleRoute} disabled={start==0 || end==0} className="btn btn-primary" >Submit</button>

            </form>
            <div>
               
                <h2>Route : {route}</h2>
                <h2>Cost : {totalCost}</h2>
            </div>
        </div>
    )
}

export default Airport
