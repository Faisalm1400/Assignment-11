import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../context/AuthContextProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const MyMarathonList = () => {
    const { user, setLoading } = useContext(AuthContext);
    const [marathons, setMarathons] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedMarathon, setSelectedMarathon] = useState(null);
    const email = user?.email;

    useEffect(() => {
        if (!email) return;

        setLoading(false);
        axios.get(`http://localhost:5000/myMarathons/?email=${email}`, {
            withCredentials: true
        })
            .then(res => {
                setMarathons(res.data)
                setLoading(false)
            })
    }, [email, setLoading]);

    const handleEditClick = (marathon) => {
        setSelectedMarathon(marathon);
        setShowEditModal(true);
        console.log("Edit Modal Opened:", showEditModal);
    };
    useEffect(() => {
        console.log("Edit Modal State Changed:", showEditModal);
    }, [showEditModal]);

    const handleUpdateMarathon = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = {
            title: formData.get("title"),
            location: formData.get("location"),
            distance: formData.get("distance"),
            description: formData.get("description"),
        };

        axios.put(`http://localhost:5000/marathons/${selectedMarathon._id}`, updatedData)
            .then(() => {
                toast.success('Marathon updated successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                // alert("Marathon updated successfully!");
                
                setShowEditModal(false);
            })
            .catch((error) => console.error("Error updating marathon:", error));
    };
    const handleDeleteClick = (marathon) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/marathons/${marathon._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            setMarathons(prevMarathons => prevMarathons.filter(m => m._id !== marathon._id));
                        }
                    })
                    .catch((error) => console.error("Error deleting marathon:", error));
            }
        });
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">My Marathons</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Photo</th>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Distance</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {marathons.map(marathon => (
                            <tr key={marathon._id}>
                                <td className="border px-4 py-2 flex justify-center">
                                    <img src={marathon.image} alt={marathon.title} className="w-20 h-20 object-cover" />
                                </td>
                                <td className="border px-4 py-2">{marathon.title}</td>
                                <td className="border px-4 py-2">{marathon.description}</td>
                                <td className="border px-4 py-2">{marathon.distance}</td>
                                <td className="border px-4 py-2">
                                    <div className="flex max-sm:flex-col justify-center items-center gap-8">
                                        <button onClick={() => handleEditClick(marathon)} className="hover:cursor-pointer">
                                            <GrUpdate />
                                        </button>
                                        <button onClick={() => handleDeleteClick(marathon)} className="hover:cursor-pointer ml-4">
                                            <MdDelete />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showEditModal && selectedMarathon && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-amber-200 p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-4 text-black">Edit Marathon</h2>
                        <form onSubmit={handleUpdateMarathon}>
                            <input type="text" name="title" defaultValue={selectedMarathon.title} className="input input-bordered w-full" required />
                            <input type="text" name="location" defaultValue={selectedMarathon.location} className="input input-bordered w-full" required />
                            <input type="text" name="distance" defaultValue={selectedMarathon.distance} className="input input-bordered w-full" required />
                            <textarea name="description" defaultValue={selectedMarathon.description} className="textarea textarea-bordered w-full"></textarea>
                            <button type="submit" className="btn btn-primary w-full mt-4">Save Changes</button>
                        </form>
                        <button onClick={() => setShowEditModal(false)} className="btn btn-secondary w-full mt-2">Cancel</button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MyMarathonList;