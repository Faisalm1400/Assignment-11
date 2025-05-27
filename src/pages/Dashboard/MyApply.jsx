import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

const MyApply = () => {
    const { user } = useContext(AuthContext);
    const [appliedMarathons, setAppliedMarathons] = useState([]);



    useEffect(() => {
        if (user?.email) {
            axios.get(`https://marathon-server-sable.vercel.app/myApply?email=${user.email}`)
                .then(res => setAppliedMarathons(res.data))
                // .catch(err => console.error("Error fetching data:", err));
        }
    }, [user?.email]);



    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">My Applied Marathons</h2>
            {appliedMarathons.length > 0 ? (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-black">
                            <th className="border px-4 py-2">Title</th>
                            <th className="border px-4 py-2">Start Date</th>
                            <th className="border px-4 py-2">Contact Number</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appliedMarathons.map((registration) => (
                            <tr key={registration._id} className="text-center">
                                <td className="border px-4 py-2">{registration.marathonTitle}</td>
                                <td className="border px-4 py-2">{new Date(registration.marathonStartDate).toLocaleDateString()}</td>
                                <td className="border px-4 py-2">{registration.contactNumber}</td>
                                <td className="border px-4 py-2">
                                    <button className="hover:cursor-pointer">
                                        <GrUpdate />
                                    </button>
                                    <button className="hover:cursor-pointer ml-4">
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-500">No marathon applications found.</p>
            )}
        </div>
    );
};

export default MyApply;