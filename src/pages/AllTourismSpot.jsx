import { useLoaderData } from "react-router-dom";
import AllTourism from "../component/AllTourism";
import { useEffect, useState } from "react";
import axios from 'axios';
import '../index.css';

const AllTourismSpot = () => {
    const count = useLoaderData();
    // console.log(pages);
    const [allTourismSpot, setAllTourismSpot] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);

    const handleItemsPerPage = e =>{
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
        // console.log(val);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }



    // Load Data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/all-tourism-sport?page=${currentPage}&size=${itemsPerPage}`);
                console.log('Axios Data:', response.data);
                setAllTourismSpot(response.data);
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [currentPage, itemsPerPage]);

    // console.log(allTourismSpot);
    const handleAcendingOrder = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        if (newValue === "acending") {
            const sortedAllTourismSpot = [...allTourismSpot].sort((a, b) => a.average_cost - b.average_cost);
            setAllTourismSpot(sortedAllTourismSpot);
        }
        if (newValue === "decending") {
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
            <div className='pagination'>
                <p>Current page: {currentPage}</p>
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                </select>
            </div>
        </div>
    );
};

export default AllTourismSpot;