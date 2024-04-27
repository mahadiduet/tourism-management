import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Login = () => {

    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);

    // Login with User and 
    const handleSignIn = e => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }


    // Login with google credential
    const handleGoogleLogIn = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorMessage);
            });
    }


    // Login with github credential
    const handleGithubLogIn = () => {
        githubLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorMessage);
            });

    }


    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Sign In
                </h1>
                <form onSubmit={handleSignIn} className="mt-6">
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
                            Password
                        </label>
                        <input
                            type="password" name="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                            Sign In
                        </button>
                    </div>
                </form>

                <div>
                    <button onClick={handleGoogleLogIn} className="btn p-4 mt-4 bg-indigo-700 text-white rounded-lg">Google</button>
                    <button onClick={handleGithubLogIn} className="btn p-4 mt-4 bg-indigo-700 text-white rounded-lg">Github</button>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Already have an account?{" "}
                    <Link className="font-medium text-indigo-600 hover:underline" to='/registration'> SignUp</Link>

                </p>
            </div>
        </div>
    );
};

export default Login;