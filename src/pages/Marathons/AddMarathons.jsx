import { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../context/AuthContextProvider';
import axios from "axios";
import { toast } from 'react-toastify';

const AddMarathons = () => {
    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);
    const { user } = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const marathon = {
            title: formData.get("title"),
            startRegistrationDate: startRegDate,
            endRegistrationDate: endRegDate,
            marathonStartDate: marathonStartDate,
            location: formData.get("location"),
            distance: formData.get("distance"),
            description: formData.get("description"),
            image: formData.get("image"),
            createdAt: new Date(),
            totalRegistrations: 0,
            email: user?.email
        };

        axios.post("https://marathon-server-sable.vercel.app/marathons", marathon)
            .then((response) => {
                // console.log("Marathon Added:", response.data);
                toast.success('Marathon registered successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                // alert("Marathon registered successfully!");
            })
            .catch((error) => {
                // console.error("Error adding marathon:", error);
                // alert("Failed to register the marathon. Please try again.");
            });
        // console.log("Marathon Data:", marathon);

        toast.success('Marathon registered successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        // alert("Marathon registered successfully!");
    }

    return (
        <div className="bg-[#d2c49a] p-4 md:p-24 pt-10">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-6">Add New Marathon</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="mb-4 md:mb-8">
                    <legend className="text-xl font-bold mb-2">Marathon Details</legend>
                    <div className="mb-4 md:mb-8 md:flex">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className="fieldset-label mb-2">Marathon Title</label>
                            <input type="text" name="title" placeholder="Title" className="w-full input input-bordered" required />
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className="fieldset-label mb-2">Location</label>
                            <input type="text" name="location" placeholder="Location" className="w-full input input-bordered" required />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="mb-4 md:mb-8">
                    <legend className="text-xl font-bold mb-2">Marathon Schedule</legend>
                    <div className="mb-4 md:mb-8 md:flex">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className="fieldset-label mb-2">Start Registration Date</label>
                            <DatePicker selected={startRegDate} onChange={(date) => setStartRegDate(date)} className="w-full input input-bordered" required />
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className="fieldset-label mb-2">End Registration Date</label>
                            <DatePicker selected={endRegDate} onChange={(date) => setEndRegDate(date)} className="w-full input input-bordered" required />
                        </div>
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="fieldset-label mb-2">Marathon Start Date</label>
                        <DatePicker selected={marathonStartDate} onChange={(date) => setMarathonStartDate(date)} className="w-full input input-bordered" required />
                    </div>
                </fieldset>

                <fieldset className="mb-4 md:mb-8">
                    <legend className="text-xl font-bold mb-2">Additional Information</legend>
                    <div className="mb-4 md:mb-8 md:flex">
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <label className="fieldset-label mb-2">Running Distance</label>
                            <select name="distance" className="w-full select select-bordered">
                                <option value="25K">25K</option>
                                <option value="10K">10K</option>
                                <option value="3K">3K</option>
                            </select>
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className="fieldset-label mb-2">Marathon Image URL</label>
                            <input type="text" name="image" placeholder="Image URL" className="w-full input input-bordered" required />
                        </div>
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="fieldset-label mb-2">Description</label>
                        <textarea name="description" placeholder="Description" className="w-full textarea textarea-bordered" required></textarea>
                    </div>
                </fieldset>

                <input type="submit" value="Register Marathon" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddMarathons;