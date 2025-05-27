import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

const MarathonDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [marathon, setMarathon] = useState(null);
    const [registrationOpen, setRegistrationOpen] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/marathons/${id}`)
            .then(res => {
                // console.log(res.data)
                setMarathon(res.data);

                const currentDate = new Date();
                const startDate = new Date(res.data.startRegistrationDate);
                const endDate = new Date(res.data.endRegistrationDate);
                setRegistrationOpen(currentDate >= startDate && currentDate <= endDate);
            })
    }, [id]);


    const handleRegisterClick = () => {
        navigate(`/registrations/${id}`);
    };

    if (!marathon) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">{marathon.title}</h1>
            <img src={marathon.image} alt={marathon.title} className="w-full h-40 object-cover rounded-md" />
            <p className="text-lg">{marathon.location}</p>
            <p>Registration: {new Date(marathon.startRegistrationDate).toLocaleDateString()} - {new Date(marathon.endRegistrationDate).toLocaleDateString()}</p>
            <p>Total Registrations: {marathon.totalRegistrations}</p>

            {registrationOpen ? (
                <button onClick={handleRegisterClick} className="btn btn-primary mt-4">Register Now</button>
            ) : (
                <button disabled className="btn btn-secondary mt-4">Registration Closed</button>
            )}
        </div>
    );
};

export default MarathonDetails;