import React, { useEffect, useState } from 'react'
import bloodDonor from '../../assets/bloodDonor.avif'
import backgroundImage from '../../assets/donor_background.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { verifyOtp } from '../../services/apis/user'

const VerifyOtp = () => {

    const [timer,setTimer] = useState(60)
    const [otp,setOtp] = useState(null)

    const navigate = useNavigate()
    const location = useLocation();

    const {value,mobile} = location.state;

    useEffect(()=>{
        console.log("here",value,mobile)
        if(!value){
            navigate('/signup')
        }
    },[])

    useEffect(() => {
        // Start the interval
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 0) {
                    clearInterval(interval); // Clear the interval when timer reaches 0
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, [timer]);


    //handle verifying otp
    const handleVerifyOtp = async(e)=>{
        e.preventDefault()
        const response = await verifyOtp({mobile:mobile,otp:otp})
        console.log(response,'verfiyyy')
    }

    return (
        <>
            <section className="bg-gray-50 bg-cover min-h-screen flex box-border justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="bg-red-500 bg-opacity-70 rounded-2xl flex max-w-3xl p-5 items-center">
                    <div className="md:w-1/2 px-8">
                        <h2 className="font-bold text-3xl text-white">Verify OTP</h2>
                        <p className="text-sm text-white">
                            Please Enter the OTP for {mobile}
                        </p>
                        <form onSubmit={handleVerifyOtp} className="flex flex-col gap-3 w-72">
                            <div>
                                <input
                                    className="p-2 mt-4 mb-1.5 rounded-xl border outline-none w-full"
                                    type="text"
                                    name="Otp"
                                    placeholder="OTP"
                                    maxLength="6"
                                    pattern="\d{6}"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
                                    }}
                                    value={otp}
                                    onChange={(e)=>setOtp(e.target.value)}
                                />
                                <div className='flex w-full justify-between text-xs'>
                                    <button>00:{timer>9 ? timer : `0${timer}`}</button>
                                    <button onClick={()=>setTimer(10)} disabled={timer!=0} className={`${timer!=0 && 'text-gray-600'}`}>Resend?</button>
                                </div>
                            </div>


                            <button
                                className={`${timer === 0 ? 'bg-gray-300' : 'bg-gray-600 hover:scale-105 duration-300 hover:bg-[#206ab1]'} text-white py-2 rounded-xl  font-medium`}

                                type="submit"
                                disabled={timer==0}
                            >
                                Confirm
                            </button>
                        </form>
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

export default VerifyOtp
