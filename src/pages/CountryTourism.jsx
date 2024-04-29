import { useLoaderData, useParams } from "react-router-dom";
import Tourism from "../component/Tourism";

const CountryTourism = () => {
    const data = useLoaderData();
    const countryName = useParams();
    console.log(countryName.id)
    console.log(data);
    return (
        <div>
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">{countryName.id} Tourism Spot</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    data.map(tourism => <Tourism key={tourism._id} tourism={tourism}></Tourism>)
                }
            </div>
        </div>
    );
};

export default CountryTourism;