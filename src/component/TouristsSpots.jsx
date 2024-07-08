import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TouristsSpots = ({ tourism }) => {

    const { _id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, user_email, user_name } = tourism;
    // console.log(_id)
    const handleTourismDelete = (e) =>{
        console.log(_id);
        e.preventDefault();
        fetch(`http://localhost:5000/my-tourism-sport/${_id}`, {
            method: 'DELETE',
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount > 0){
                toast.success('Tourism spot delete successfull!');
            }
            console.log(data);
          })
    }

    return (
            <tr className="">
                <td className="border border-gray-500">{tourists_spot_name}</td>
                <td className="border border-gray-500">{country_Name}</td>
                <td className="border border-gray-500">{location}</td>
                <td className="flex gap-5 border border-gray-500">
                    <Link to={`/update-tourism/${_id}`}><button className="bg-cyan-300 p-2 rounded-lg">Update</button></Link>
                    
                    <button className="bg-cyan-300 p-2 rounded-lg" onClick={handleTourismDelete}>Delete</button>
                </td>
            </tr>
    );
};

export default TouristsSpots;