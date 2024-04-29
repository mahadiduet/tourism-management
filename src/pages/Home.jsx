import { useLoaderData } from "react-router-dom";
import Slider from "../component/Slider";
import Tourism from "../component/Tourism";
import CountrySection from "../component/CountrySection";
import ExtraSection from "../component/ExtraSection";

const Home = () => {
    const tourisms = useLoaderData();
    return (
        <div>
            <Slider />
            <div>
                <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">Tourism Spot</h1>
                <p className="w-2/4 mx-auto text-center mb-5">
                    A tourism spot is a specific location or area designed to attract visitors for leisure, recreation, or cultural exploration. It typically features unique natural landscapes, historical landmarks, recreational facilities, or cultural attractions. Popular tourism spots offer a range of amenities, including accommodations, guided tours, restaurants, and entertainment, catering to both domestic and international tourists.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    tourisms.map(tourism => <Tourism key={tourism._id} tourism={tourism}></Tourism>)
                }
            </div>
            <div>
                <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">Country Tourisms</h1>
                <p className="w-2/4 mx-auto text-center mb-5">
                    Bangladesh, Indonesia, Malaysia, Cambodia, and Vietnam offer unique tourism experiences. Bangladesh showcases lush landscapes and vibrant festivals. Indonesia, with its islands like Bali, captivates with beaches and culture. Malaysia blends modernity with rich heritage. Cambodia's Angkor Wat is a UNESCO marvel, and Vietnam's Halong Bay offers breathtaking natural beauty.
                </p>
            </div>
            <CountrySection />
            <ExtraSection />
        </div>


    );
};

export default Home;