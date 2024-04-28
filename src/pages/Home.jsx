import { useLoaderData } from "react-router-dom";
import Slider from "../component/Slider";
import Tourism from "../component/Tourism";

const Home = () => {
    const tourims = useLoaderData();
    console.log(tourims);
    return (
        <div>
            <Slider />
            <div>
                <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">Tourism Spot</h1>
                <p className="w-2/4 mx-auto text-center mb-5">
                A tourism spot is a specific location or area designed to attract visitors for leisure, recreation, or cultural exploration. It typically features unique natural landscapes, historical landmarks, recreational facilities, or cultural attractions. Popular tourism spots offer a range of amenities, including accommodations, guided tours, restaurants, and entertainment, catering to both domestic and international tourists.
                </p>
            </div>
            {
                tourims.map(tourim => <Tourism key={tourim._id} tourim={tourim}></Tourism>)
            }
        </div>
        
        
    );
};

export default Home;