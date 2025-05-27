import { Link } from "react-router-dom";
import photo1 from "../../assets/photos/spring-run.jpeg"
import photo2 from "../../assets/photos/river-challenge.jpeg"
import photo3 from "../../assets/photos/sunset-dash.jpg"
import photo4 from "../../assets/photos/city-marathon.jpg"
import photo5 from "../../assets/photos/coastal-sprint.jpg"
import photo6 from "../../assets/photos/mountain-trek.jpg"

const upcomingMarathons = [
    {
        _id: "1",
        title: "Spring Run",
        location: "Dhaka",
        image: photo1,
        startRegistrationDate: "2025-06-01",
        endRegistrationDate: "2025-06-10",
    },
    {
        _id: "2",
        title: "River Challenge",
        location: "Chittagong",
        image: photo2,
        startRegistrationDate: "2025-07-05",
        endRegistrationDate: "2025-07-15",
    },
    {
        _id: "3",
        title: "Sunset Dash",
        location: "Sylhet",
        image: photo3,
        startRegistrationDate: "2025-08-10",
        endRegistrationDate: "2025-08-20",
    },
    {
        _id: "4",
        title: "City Marathon",
        location: "Barisal",
        image: photo4,
        startRegistrationDate: "2025-09-01",
        endRegistrationDate: "2025-09-10",
    },
    {
        _id: "5",
        title: "Coastal Sprint",
        location: "Cox’s Bazar",
        image: photo5,
        startRegistrationDate: "2025-10-15",
        endRegistrationDate: "2025-10-25",
    },
    {
        _id: "6",
        title: "Mountain Trek",
        location: "Bandarban",
        image: photo6,
        startRegistrationDate: "2025-11-20",
        endRegistrationDate: "2025-11-30",
    },
];

const UpcomingMarathons = () => {
    return (
        <div className="container mx-auto p-4 space-y-8">
            <h2 className="text-3xl font-bold">Upcoming Marathons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingMarathons.slice(0, 6).map((marathon) => (
                    <div key={marathon._id} className="card bg-blue-100 text-black shadow-lg p-4 rounded-md">
                        <img src={marathon.image} alt={marathon.title} className="w-full h-40 object-cover rounded-md" />
                        <h2 className="text-xl font-bold mt-4">{marathon.title}</h2>
                        <p className="text-gray-600">{marathon.location}</p>
                        <p className="text-sm">
                            Registration: {new Date(marathon.startRegistrationDate).toLocaleDateString()} - {new Date(marathon.endRegistrationDate).toLocaleDateString()}
                        </p>
                        <Link to={`/marathon/${marathon._id}`} className="btn btn-primary mt-4 w-full">
                            See Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingMarathons;