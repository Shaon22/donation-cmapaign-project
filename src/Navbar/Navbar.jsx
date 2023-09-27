
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='md:flex justify-between items-center max-w-[1100px] mx-auto'>
            <img src='Logo.png' alt="" /> 
            <div className='flex gap-8'>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-semibold" : "text-lg font-semibold"
                    }
                >
                   Home
                </NavLink>
                <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-semibold" : "text-lg font-semibold"
                    }
                >
                    Donation
                </NavLink>
                <NavLink
                    to="/statistics"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-semibold" : "text-lg font-semibold"
                    }
                >
                  Statistics 
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;