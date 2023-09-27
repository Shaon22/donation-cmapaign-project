

const Banner = () => {
    return (
        <div >
            <div className="opacity-10 relative">
                <img src={'banner.jpg'} alt="" />
            </div>
            <div className="absolute top-72 left-96">
            <h1 className="text-4xl font-bold ">I Grow By Helping People In Need</h1>
           <div className="w-[350px] mx-auto">
           <input className=" text-center border border-gray-200 rounded-l-lg 
            py-2 px-4 my-5" type="text" name="search" id="" placeholder="search here..." />
            <button className="bg-[#FF444A] text-base font-semibold py-2 px-2 border-[#FF444A] rounded-r-lg ">Search</button>
           </div>
            </div>
        </div>
    );
};

export default Banner;