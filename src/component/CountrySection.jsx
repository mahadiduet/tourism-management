import { Link } from "react-router-dom";

const CountrySection = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <Link to='bangladesh'>
                <div>
                    <div className="hero min-h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/FhyKHd2/Bangladesh.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Bangladesh</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='thailand'>
                <div>
                    <div className="hero min-h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/pztttKP/Thailand.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Thailand</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='indonesia'>
                <div>
                    <div className="hero min-h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/xm68mJf/Indonesia.webp)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Indonesia</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link>
                <div to='Malaysia'>
                    <div className="hero min-h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/1brsF8S/Malaysia.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Malaysia</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='vietnam'>
                <div>
                    <div className="hero min-h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/qNgW2Sz/Vietnam.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Vietnam</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to='cambodia'>
                <div>
                    <div className="hero min-h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/Fn4wMrT/Cambodia.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Cambodia</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CountrySection;