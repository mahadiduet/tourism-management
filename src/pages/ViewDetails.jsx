import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewDetails = () => {
    const [viewData, setViewData] = useState([]);
    // const [tourismId, setTourismId] = useState(null);
    
    console.log(viewData);
    const firstItem = viewData[0] || {};
    const { image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_email, user_name } = firstItem;
    const params = useParams();
    // setTourismId(params.id);
    // console.log(params.id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`https://tourism-server-management.vercel.app/view-details?id=${params.id}`)
                    .then(res => res.json())
                    .then(data => {
                        setViewData(data);
                    })
            } catch (err) {
                // console.log(err);
            }
        };

        fetchData();
    }, [params.id]);


    console.log(viewData);

    return (
        <div className="bg-base-200 p-4 rounded-lg">
            <div className="flex-col lg:flex-row">
                <img className="w-full h-[300px] mx-auto mb-6 rounded-md" src={image} />
                <div>
                    <h1 className="text-3xl font-bold">{tourists_spot_name}</h1>
                    <div className="text flex gap-6">
                        <p className="my-2">Country Name: {country_Name}</p>
                        <p className="my-2">Location: {location}</p>
                        <p className="my-2">Average Cost: {average_cost}/{travel_time} days</p>
                    </div>
                    <div className="mb-4">
                        <p>Description: {short_description}</p>
                    </div>
                    <div className="flex gap-10">
                        <p>Seasonality:{seasonality}</p>
                        <p>Total Visitor Per Year:{totalVisitorsPerYear}</p>
                    </div>
                    {/* <Link to={`/tourism-details/${_id}`}><button className="btn btn-primary w-full text-xl self-end">View Details</button></Link> */}
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;