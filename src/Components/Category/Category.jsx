import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {picture,category_name,category_bg,title,card_bg,id}=category
    return (
        <Link to={`/donationDetails/${id}`}>
        <div style={{background:card_bg}} className="rounded pb-4">
            <img src={picture} alt="" />
            <h1 style={{color:category_bg, background:card_bg,}} className="text-sm font-medium py-1 px-2 my-5 bg-auto inline-block ml-4 rounded">{category_name}</h1>
            <h1 style={{color:category_bg}} className="text-xl font-semibold px-2">{title}</h1>
        </div>
        </Link>
    );
};

export default Category;