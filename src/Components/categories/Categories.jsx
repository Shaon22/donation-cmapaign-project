import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('donation.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    
    return (
        <div className="max-w-[1100px] mx-auto my-24" >
            <div className="grid grid cols-1 md:grid-cols-4 gap-5">
            {
                categories.map(category=><Category key={category.id} category={category}></Category>)
            }
            </div>
        </div>
    );
};

export default Categories;