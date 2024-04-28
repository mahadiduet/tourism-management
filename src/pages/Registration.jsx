import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { toast } from "react-toastify";

const Registration = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(createUser);



    const handleAddUser = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const photoUrl = from.photoUrl.value;
        const password = from.password.value;

        if (password.length < 6) {
            { toast.warning('Please give me minimum 6 character!') }
            return;
        }
        if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            { toast.warning('You have must be provide password with uppercase or Lowercase!') }
            return;
        }

        createUser(email, password)
            .then(result => {
                updateUser(name, photoUrl)
                    .then((updateUser) => {
                        console.log(updateUser)
                    }).catch((error) => {
                        console.log(error);
                    });
                const userEmail = result.user.email;
                const createdAt = result.user.metadata.createdAt;
                const lastSignInTime = result.user.metadata.lastSignInTime;

                const user = { userEmail, createdAt, lastSignInTime }

                // Data pass to MongoDB by API
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
                toast.success('You are successfully registration.');
                navigate('/');
            })
            .catch((error) => {
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('This user Already exist, please login.')
                }
            });
    }


    return (

        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Sign UP
                </h1>
                <form onSubmit={handleAddUser} className="mt-6">
                    <div className="mb-2">
                        <label className="block text-sm font-semibold text-gray-800">
                            Name
                        </label>
                        <input
                            type="text" name="name"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email" name="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Photo Url
                        </label>
                        <input
                            type="text" name="photoUrl"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password" name="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Sign Up
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link className="font-medium text-indigo-600 hover:underline" to='/login'> Sign In</Link>

                </p>
            </div>
        </div>
    );
};

export default Registration;