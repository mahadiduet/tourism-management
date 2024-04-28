import { Link } from "react-router-dom";

const AllTourism = ({ tourism }) => {
    const { _id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_email, user_name } = tourism;
    return (
        <div className="bg-base-200 p-4 rounded-lg">
            <div className="flex-col lg:flex-row">
                <img className="w-[300px] h-[200px] mx-auto mb-6 rounded-md" src={image} />
                <div>
                    <h1 className="text-3xl font-bold">{tourists_spot_name}</h1>
                    <div className="text">
                        <p className="my-2">Country Name: {country_Name}</p>
                        <p className="my-2">Location: {location}</p>
                        <p className="my-2">Average Cost: {average_cost}/{travel_time} days</p>
                    </div>
                    <Link to={`/tourism-details/${_id}`}><button className="btn btn-primary w-full text-xl self-end">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllTourism;