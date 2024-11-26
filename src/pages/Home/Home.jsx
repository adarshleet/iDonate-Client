import React from 'react'
import backgroundImage from '../../assets/donor_background.jpg'
import Navbar from '../../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar/>
            <section className="bg-gray-50 bg-cover min-h-screen flex box-border justify-center py-28" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className='w-full md:px-20 px-4 rounded-lg'>
                    <div className='flex flex-col items-center bg-gray-600 bg-opacity-50 py-5 rounded-lg'>
                        <h1 className='text-4xl font-bold text-white drop-shadow-2xl mb-2'>Search For Donors</h1>
                        <div className='flex flex-col md:flex-row gap-3'>
                            <select
                                className="py-3 w-72 rounded-xl border outline-none"
                                name="bloodGroup"
                            >
                                <option value="" disabled selected>
                                    Select Blood Group
                                </option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                            <select
                                className="py-3 w-72  rounded-xl border outline-none"
                                name="district"
                            >
                                <option value="" disabled selected>
                                    Select District
                                </option>
                                <option value="Kasaragod">Kasaragod</option>
                                <option value="Kannur">Kannur</option>
                                <option value="Wayanad">Wayanad</option>
                                <option value="Kozhikode">Kozhikode</option>
                                <option value="Malappuram">Malappuram</option>
                                <option value="Palakkad">Palakkad</option>
                                <option value="Thrissur">Thrissur</option>
                                <option value="Ernakulam">Ernakulam</option>
                                <option value="Idukki">Idukki</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value="Alappuzha">Alappuzha</option>
                                <option value="Pathanamthitta">Pathanamthitta</option>
                                <option value="Kollam">Kollam</option>
                                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                            </select>
                        </div>
                    </div>
                    {/* <div>
                        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <img
                                className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                                src="https://tailwindcss.com/img/erin-lindford.jpg"
                                alt="Woman's Face"
                            />
                            <div className="text-center space-y-2 sm:text-left">
                                <div className="space-y-0.5">
                                    <p className="text-lg text-black font-semibold">Erin Lindford</p>
                                    <p className="text-slate-500 font-medium">Product Engineer</p>
                                </div>
                                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                    Message
                                </button>
                            </div>
                        </div>
                        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                            <img
                                className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                                src="https://tailwindcss.com/img/erin-lindford.jpg"
                                alt="Woman's Face"
                            />
                            <div className="text-center space-y-2 sm:text-left">
                                <div className="space-y-0.5">
                                    <p className="text-lg text-black font-semibold">Erin Lindford</p>
                                    <p className="text-slate-500 font-medium">Product Engineer</p>
                                </div>
                                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                    Message
                                </button>
                            </div>
                        </div>
                    </div> */}
                    <div className="grid gap-2 md:px-32 py-8 px-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            ['', '', "", '', '', ''].map(() => (
                                <div className="py-4 px-4 max-w-sm m-1 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 flex flex-col md:flex-row justify-center items-center md:gap-3 sm:space-y-0 sm:space-x-2">
                                    <img
                                        className="block h-16 md:h-16 rounded-full sm:mx-0 sm:shrink-0"
                                        src="https://tailwindcss.com/img/erin-lindford.jpg"
                                        alt="Woman's Face"
                                    />
                                    <div className="text-center md:text-left space-y-1">
                                        <div className="">
                                            <p className="text-md text-black font-semibold">Erin Lindford</p>
                                            {/* <p className="text-slate-500 font-medium">B+ | Tiruvanathapuram</p> */}
                                            <div className="w-full max-w-[100px]">
                                                <p className="text-slate-500 font-medium truncate overflow-hidden whitespace-nowrap">
                                                    B+ | kottayam
                                                </p>
                                            </div>

                                        </div>
                                        <button className="px-2 py-.5 text-xs text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                                            Call
                                        </button>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
