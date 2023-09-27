import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";



const Donation = () => {
    const donations= useLoaderData()
    const [addDonation,setAddDonation]=useState([])
    const [datalength,setDatalength]=useState(4)
    useEffect(()=>{
        const storedDonationIds=getStoredDonation();
        if(donations.length){
            const donationAdd=donations.filter(donation=>storedDonationIds.includes(donation.id))
            setAddDonation(donationAdd)
        }
        
    },[])
    return (
        <div className="max-w-[1100px] mx-auto my-10" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {
                addDonation.slice(0,datalength).map(donation=>
                <div  key={donation.id} className="flex gap-5 rounded" style={{backgroundColor:donation.card_bg}}>
                    <img src={donation.donation_pic} alt="" />
                    <div>
                        <h1 className="text-base font-normal my-4 inline-block py-1 px-2 rounded"  style={{color:donation.text_button_bg,backgroundColor:donation.card_bg}}>{donation.category_name}</h1>
                        
                        <h1 className="text-2xl font-semibold  ">{donation.title}</h1>
                    
                        <h1 className="text-base font-semibold my-4" style={{color:donation.category_bg}}>{donation.price}</h1>
                        <Link to={`/donationDetails/${donation.id}`}><button style={{backgroundColor:donation.text_button_bg}} className="py-1 px-4 rounded text-white text-base font-semibold ">View Details</button></Link>
                    </div>
                </div>)
            }
            </div>
            <div className={datalength===addDonation.length || addDonation.length<4?'hidden':'text-center'}>
                <button className=" bg-[#009444] py-2 px-4 rounded my-5 text-white text-lg font-semibold text-center" onClick={()=>setDatalength(addDonation.length)}>See All</button>
            </div>
        </div>
    );
};

export default Donation;