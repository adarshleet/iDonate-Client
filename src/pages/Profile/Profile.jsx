import React from 'react'
import backgroundImage from '../../assets/donor_background.jpg'
import profileBackground from '../../assets/background_donor.jpg'
import Navbar from '../../components/Navbar'

const Profile = () => {
    return (
        <>
        <Navbar/>
        <section className="bg-gray-50 bg-cover min-h-screen flex box-border justify-center py-28" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="flex flex-wrap items-center  justify-center">
                <div className="container lg:w-4/6 xl:w-4/7 sm:w-full md:w-2/3    bg-white  shadow-lg    transform   duration-200 easy-in-out">
                    <div className=" h-32 overflow-hidden">
                        <img
                            className="w-full"
                            src={profileBackground}
                            alt=""
                        />
                    </div>
                    <div className="flex justify-center px-5  -mt-12">
                        <img
                            className="h-32 w-32 bg-white p-2 rounded-full   "
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                            alt=""
                        />
                    </div>
                    <div className=" ">
                        <div className="text-center px-14">
                            <h2 className="text-gray-800 text-3xl font-bold">Mohit Dhiman</h2>
                            <div className="text-gray-600 mt-2 font-semibold">
                                <div className="flex justify-between">
                                    <p>Blood Group :</p>
                                    <p className="text-gray-500">B +ve</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>District :</p>
                                    <p className="text-gray-500">Kannur</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Mobile :</p>
                                    <p className="text-gray-500">9847587401</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Age :</p>
                                    <p className="text-gray-500">24</p>
                                </div>
                                <div className="flex justify-between">
                                    <p>Last donated date :</p>
                                    <p className="text-gray-500">12/10/2024</p>
                                </div>
                            </div>


                        </div>
                        <hr className="mt-6" />
                        <div className="flex  bg-gray-50 ">
                            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                <p>
                                    <span className="font-semibold">Edit Profile </span>
                                </p>
                            </div>
                            <div className="border" />
                            <div className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                <p>
                                    <span className="font-semibold">Edit Donated Date </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Profile
