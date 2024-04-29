
const ExtraSection = () => {
    return (
        <div>
            <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">Tourism Information</h1>
            <div className="text-center grid grid-cols-4 gap-5 my-6">
                <div className="border-2 border-gray-600 rounded-lg p-4 mt-4">
                    <h1 className="text-2xl">Special Activities</h1>
                    <p>Tourism special activities encompass a range of unique experiences designed to attract visitors and enhance their travel experiences. These can include guided adventure tours, cultural immersions, wildlife safaris, culinary workshops, and extreme sports like bungee jumping. Such activities offer tourists a chance to explore, learn, and engage with destinations in memorable ways.</p>
                </div>
                <div className="border-2 border-gray-600 rounded-lg p-4 mt-4">
                    <h1 className="text-2xl">Travel Arragement</h1>
                    <p>Travel arrangements encompass the planning and coordination of travel-related logistics, including transportation, accommodation, itineraries, and travel insurance. These arrangements ensure a smooth and stress-free journey, enabling travelers to focus on their experiences. From booking flights and hotels to organizing tours and rental cars, meticulous planning is key to successful travel arrangements.</p>
                </div>
                <div className="border-2 border-gray-600 rounded-lg p-4 mt-4">
                    <h1 className="text-2xl">Your Private Guide</h1>
                    <p>A private guide is a personal travel companion who offers tailored tours and experiences. Unlike group tours, a private guide provides individual attention, customizing the itinerary to suit your interests and pace. They bring local expertise, deep knowledge of the destination, and can offer unique insights, creating a more immersive and personalized travel experience.</p>
                </div>
                <div className="border-2 border-gray-600 rounded-lg p-4 mt-4">
                    <h1 className="text-2xl">Location Manager</h1>
                    <p>A location manager oversees the logistics and operations of a specific site, often in film production or event planning. Their responsibilities include scouting and securing locations, coordinating permits, managing on-site teams, and ensuring compliance with safety regulations. In tourism, a location manager ensures that visitors have a smooth and enjoyable experience by maintaining site operations, coordinating events, and addressing logistical challenges.</p>
                </div>
            </div>
            <div>
                <h1 className="font-playfair text-5xl font-bold text-[#131313] text-center mt-8 mb-8">Special Offers & Discounts</h1>
                <p className="w-10/12 mx-auto text-center mb-5">Tourism special offers and discounts are promotional incentives designed to attract visitors and encourage travel. These deals can include reduced rates on accommodations, bundled packages combining travel and activities, discounts on tours or attractions, and exclusive deals for specific groups like seniors, students, or families. Many tourism businesses use these promotions to increase off-season bookings, fill vacancies, or launch new services. Special offers may also come in the form of early booking discounts, last-minute deals, or loyalty programs that reward repeat customers. By providing these incentives, tourism operators aim to enhance value and drive higher customer engagement.</p>
                <div className="flex gap-4 bg-blue-300 rounded-lg">
                    <img src="https://i.ibb.co/hsNGCkZ/h2-img-1.png" alt="" />
                    <div className="p-10">
                        <h1 className="text-3xl text-stone-600">Last Minute Offer</h1>
                        <h3 className="text-2xl text-stone-500">Aerial view of Cape Town with Cape Town Stadium</h3>
                        <p className="text-stone-300">A last-minute offer is a discount or promotional deal given shortly before the start date to boost bookings, typically used to fill unsold spaces or inventory.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;