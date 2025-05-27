import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Marathons = () => {
    const [marathons, setMarathons] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/marathons")
            .then((response) => {
                setMarathons(response.data);
            })
            // .catch((error) => console.error("Error fetching marathons:", error));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">All Marathons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marathons.map((marathon) => (
                    <div key={marathon._id} className="card bg-amber-100 text-black shadow-lg p-4 rounded-md">
                        <img src={marathon.image} alt={marathon.title} className="w-full h-40 object-cover rounded-md" />
                        <h2 className="text-xl font-bold mt-4">{marathon.title}</h2>
                        <p className="text-gray-600">{marathon.location}</p>
                        <p className="text-sm">Registration: {new Date(marathon.startRegistrationDate).toLocaleDateString()} - {new Date(marathon.endRegistrationDate).toLocaleDateString()}</p>
                        <Link to={`/marathon/${marathon._id}`} className="btn btn-primary mt-4 w-full">See Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marathons;