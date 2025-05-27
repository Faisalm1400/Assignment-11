import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const RegistrationForm = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [marathon, setMarathon] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/marathons/${id}`)
            .then((res) => setMarathon(res.data))
            .catch((error) => console.error("Error fetching marathon:", error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const registrationData = {
            marathonId: id,
            marathonTitle: marathon?.title,
            marathonStartDate: marathon?.marathonStartDate,
            userEmail: user?.email,
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            contactNumber: formData.get("contactNumber"),
            additionalInfo: formData.get("additionalInfo"),
        };

        axios.post("http://localhost:5000/registration", registrationData)
            .then(() => {
                alert("Registration Successful!");
                // navigate("/dashboard/my-apply");
            })
            .catch((error) => {
                console.error("Error registering:", error);
                alert("Registration failed. Please try again.");
            });
    };

    if (!marathon) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">Register for {marathon.title}</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" name="userEmail" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                <input type="text" name="marathonTitle" defaultValue={marathon.title} readOnly className="input input-bordered w-full" />
                <input type="text" name="marathonStartDate" defaultValue={new Date(marathon.marathonStartDate).toLocaleDateString()} readOnly className="input input-bordered w-full" />
                <input type="text" name="firstName" placeholder="First Name" className="input input-bordered w-full" required />
                <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full" required />
                <input type="text" name="contactNumber" placeholder="Contact Number" className="input input-bordered w-full" required />
                <textarea name="additionalInfo" placeholder="Additional Information" className="textarea textarea-bordered w-full sm:col-span-2"></textarea>
                <button type="submit" className="btn btn-primary sm:col-span-2">Submit Registration</button>
            </form>
        </div>
    );
};

export default RegistrationForm;