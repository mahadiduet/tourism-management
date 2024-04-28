import { useLoaderData } from "react-router-dom";
import AllTourism from "../component/AllTourism";

const AllTourismSpot = () => {
    const allTourismSpot = useLoaderData();
    // console.log(allTourismSpot);
    return (
        <div>
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">All Tourism Spot</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                allTourismSpot.map(tourism => <AllTourism key={tourism._id} tourism={tourism}></AllTourism>)
            }
            </div>
        </div>
    );
};

export default AllTourismSpot;