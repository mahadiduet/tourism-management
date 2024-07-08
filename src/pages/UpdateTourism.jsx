import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateTourism = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    const {_id, image, tourists_spot_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear } = data;

    const handleUpdateTourism = e =>{
        e.preventDefault();
        const from = e.target;
        const image = from.image.value;
        const tourists_spot_name = from.tourists_spot_name.value;
        const country_Name = from.country_Name.value;
        const location = from.location.value;
        const short_description = from.short_description.value;
        const average_cost = parseFloat(from.average_cost.value);
        const seasonality = from.seasonality.value;
        const travel_time = from.travel_time.value;
        const totalVisitorsPerYear = from.totalVisitorsPerYear.value;
        const tourism = {image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear};
        console.log(tourism);
        fetch(`http://localhost:5000/update-tourism-spot/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tourism)
        })
            .then(res => res.json())
            .then(data => {                
                if(data.modifiedCount){
                    toast.success('Tourism updated successfull!');
                    navigate('/my_tourism_spot');
                }
                
            })
    }


    return (
        <div>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                        Update Tourists Spot
                    </h1>
                    <form onSubmit={handleUpdateTourism} className="mt-6">
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Image Url
                            </label>
                            <input
                                type="text" name="image" defaultValue={image}
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Tourists Spot Name
                            </label>
                            <input
                                type="text" name="tourists_spot_name" defaultValue={tourists_spot_name}
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Country Name
                            </label>
                            <select name="country_Name" class="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                <option selected>Choose a country</option>
                                <option value="Bangladesh" selected>Bangladesh</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Cambodia">Cambodia</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Location
                            </label>
                            <input
                                type="text" name="location" defaultValue={location}
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Short Description
                            </label>
                            <input
                                type="text" name="short_description" defaultValue={short_description}
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Average Cost
                            </label>
                            <input
                                type="text" name="average_cost" defaultValue={average_cost}
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Seasonality
                            </label>
                            <input
                                type="text" name="seasonality" defaultValue={seasonality}
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Travel Time
                            </label>
                            <input
                                type="text" name="travel_time" defaultValue={travel_time}
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Total Visitors PerYear
                            </label>
                            <input
                                type="text" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear}
                                className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        

                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTourism;