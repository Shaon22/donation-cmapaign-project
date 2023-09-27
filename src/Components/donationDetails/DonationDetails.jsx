import {useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
import { saveDonation } from "../../utility/localStorage";
const DonationDetails = () => {
    const donations= useLoaderData();
    const {id}=useParams()
    const intId=parseInt(id)
    const donation=donations.find(donation=>donation.id===intId)

    const handleDonate=()=>{
        saveDonation(intId)
        swal("Thank You", "Successfuly added your donation", "success");

    }
    return (
        <div className="max-w-[1100px] mx-auto">
            <div>
            <img className="w-[1100px] h-[500px] my-14 relative" src={donation.picture} alt="" />
            <div>
                <button onClick={()=>handleDonate()} style={{background:donation.category_bg}} className="text-white py-1 px-4 text-lg font-semibold rounded absolute bottom-8 left-36 bg-black/20 ">Donate {donation.price}</button>
                </div>
            </div>
            
            <h1 className="text-4xl font-bold">{donation.category_name}</h1>
            <h1 className="text-base font-normal text-[#0b0b0bb3] my-5">{donation.description}</h1>
        </div>
    );
};

export default DonationDetails;