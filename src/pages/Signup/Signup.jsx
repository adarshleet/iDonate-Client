import React from 'react'
import bloodDonor from '../../assets/bloodDonor.avif'
import backgroundImage from '../../assets/donor_background.jpg'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Signup = () => {
    return (
        <>
        <Navbar/>
            <section className="bg-gray-50 bg-cover min-h-screen flex box-border justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="bg-red-500 bg-opacity-70 rounded-2xl flex max-w-3xl p-5 items-center">
                    <div className="md:w-1/2 px-8">
                        <h2 className="font-bold text-3xl text-white">SignUp</h2>
                        <p className="text-sm mt-2 text-white">
                            Create a new account.
                        </p>
                        <form action="" className="flex flex-col gap-3 w-72">
                            <input
                                className="p-2 mt-6 rounded-xl border outline-none"
                                type="text"
                                name="Name"
                                placeholder="Name"
                            />
                            <input
                                className="p-2 rounded-xl border outline-none"
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                            />
                            <select
                                className="p-2 rounded-xl border outline-none text-gray-400"
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
                                className="p-2  rounded-xl border outline-none text-gray-400"
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


                            <div className="relative">
                                <input
                                    className="p-2 rounded-xl border w-full outline-none"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="gray"
                                    id="togglePassword"
                                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                                    id="mama"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                                </svg>
                            </div>
                            <div className="relative">
                                <input
                                    className="p-2 rounded-xl border w-full outline-none"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Confirm Password"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="gray"
                                    id="togglePassword"
                                    className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path>
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                                    id="mama"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"></path>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"></path>
                                </svg>
                            </div>
                            <button
                                className="bg-gray-600 text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                                type="submit"
                            >
                                SignUp
                            </button>
                        </form>


                        <div className=" text-sm border-b border-gray-500 py-2 playfair tooltip text-white">
                        </div>
                        <div className="mt-2 text-sm flex justify-between items-center container-mr">
                            <p className="mr-2 md:mr-0 text-white">Already a donor ?</p>
                            <Link to={'/login'} className=" register text-white rounded-xl py-2 font-semibold duration-300">
                                Login
                            </Link>
                        </div>
                    </div>
                    <div className="md:block hidden w-1/2">
                        <img
                            className="rounded-2xl max-h-[1600px]"
                            src={bloodDonor}
                            alt="login form image"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
