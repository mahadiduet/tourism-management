import { useLoaderData } from "react-router-dom";
import AllTourism from "../component/AllTourism";
import { useState } from "react";

const AllTourismSpot = () => {
    const data = useLoaderData();
    const [allTourismSpot, setAllTourismSpot] = useState(data);

    // console.log(allTourismSpot);
    const handleAcendingOrder = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        if (newValue === "acending") {
            const sortedAllTourismSpot = [...allTourismSpot].sort((a, b) => a.average_cost - b.average_cost);
            setAllTourismSpot(sortedAllTourismSpot);
        }
        if(newValue === "decending"){
            const sortedAllTourismSpot = [...allTourismSpot].sort((a, b) => b.average_cost - a.average_cost);
            setAllTourismSpot(sortedAllTourismSpot);
        }
        // console.log(newValue);
    }
    return (
        <div>
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">All Tourism Spot</h1>
            <div className="w-full">
                <select onChange={handleAcendingOrder} className="select select-bordered w-[300px] mb-6">
                    <option selected>Sort</option>
                    <option value="acending">Average Cost - Acending</option>
                    <option value="decending">Average Cost - Decending</option>
                </select>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    allTourismSpot.map(tourism => <AllTourism key={tourism._id} tourism={tourism}></AllTourism>)
                }
            </div>
        </div>
    );
};

export default AllTourismSpot;