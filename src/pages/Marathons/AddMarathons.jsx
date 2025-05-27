import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddMarathons = () => {
    const [startRegDate, setStartRegDate] = useState(null);
    const [endRegDate, setEndRegDate] = useState(null);
    const [marathonStartDate, setMarathonStartDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const location = form.location.value;
        const startRegistrationDate = form.startRegistrationDate.value;
        const endRegistrationDate = form.endRegistrationDate.value;
        const marathonStartDate = form.marathonStartDate.value;
        const distance = form.distance.value;
        const image = form.image.value;
        const description = form.description.value;

        console.log(title, location, startRegistrationDate, endRegistrationDate,marathonStartDate,distance, image, description)

        // const marathon = {
        //     title: form.title.value,
        //     startRegistrationDate: startRegDate,
        //     endRegistrationDate: endRegDate,
        //     marathonStartDate: marathonStartDate,
        //     location: form.location.value,
        //     distance: form.distance.value,
        //     description: form.description.value,
        //     image: form.image.value,
        //     createdAt: new Date(),
        //     totalRegistrations: 0
        // };

        // console.log("Marathon Data:", marathon);
        alert("Marathon registered successfully!");
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
                            <DatePicker name="startRegistrationDate" selected={startRegDate} onChange={(date) => setStartRegDate(date)} className="w-full input input-bordered" required />
                        </div>
                        <div className="w-full md:w-1/2 md:ml-4">
                            <label className="fieldset-label mb-2">End Registration Date</label>
                            <DatePicker name="endRegistrationDate" selected={endRegDate} onChange={(date) => setEndRegDate(date)} className="w-full input input-bordered" required />
                        </div>
                    </div>
                    <div className="mb-4 md:mb-8">
                        <label className="fieldset-label mb-2">Marathon Start Date</label>
                        <DatePicker name="marathonStartDate" selected={marathonStartDate} onChange={(date) => setMarathonStartDate(date)} className="w-full input input-bordered" required />
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