import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import TouristsSpots from "../component/TouristsSpots";

const MyTourismSpot = () => {

    const [myTourismData, setMyTourismData] = useState([]);
    // console.log(myTourismData)
    const { user, loading } = useContext(AuthContext);
    const email = user?.email;
    // console.log(email);
    console.log(loading);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`http://localhost:5000/my-tourism-sport?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                        setMyTourismData(data);
                    })
            } catch (err) {
                // console.log(err);
            }
        };

        fetchData();
    }, [email]);

    return (
        <div className="bg-cyan-100">
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center pt-8 mb-8">My Tourism Spot</h1>
                    {/* { loading? 'Loading......':''} */}
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className="text-center border border-gray-500">Tourism Spot Name</th>
                                <th className="text-center border border-gray-500">Country Name</th>
                                <th className="text-center border border-gray-500">Location</th>
                                <th className="text-center border border-gray-500">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        { loading? 'Loading......':''}
                            {
                                myTourismData.map(tourism => <TouristsSpots key={tourism._id} tourism={tourism}></TouristsSpots>)
                            }

                        </tbody>
                    </table>
            
        </div>
    );
};

export default MyTourismSpot;