import React, {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center aligh-items-center">
            <div className="w-50 bg-white rounded p-">
                <h2>Stock List</h2>
                <div className="d-flex justify-content-end">
                    <Link to="/create" className="btn btn-success">Create +</Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>STOCK ID</th>
                            <th>STOCK NAME</th>
                            <th>STOCK TICKER SYMBOL</th>
                            <th>COMPANY NAME</th>
                            <th>SECTOR</th>
                            <th>INDUSTRY</th>
                            <th>EXCHANGE</th>
                            <th>INDUSTRY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((stock, index) => {
                            return <tr key={index}>
                                <td>{stock.ID}</td>
                                <td>{stock.name}</td>
                                <td>
                                    <button className="btn btn-sm btn-info">Read</button>
                                    <button className="btn btn-sm btn-primary mx-2">Edit</button>
                                    <button className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;