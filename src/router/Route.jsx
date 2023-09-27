
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../mainLayout/MainLayout';
import Home from '../pages/Home/Home';
import Statistics from '../pages/Staistics/Statistics';
import DonationDetails from '../Components/donationDetails/DonationDetails';
import Donation from '../pages/Donation/Donation';

const myRoute = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>,
                loader:()=> fetch('../donation.json')
            },
            {
                path:'/donation',
                element:<Donation></Donation>,
                loader:()=> fetch('../donation.json')
            },
            {
                path:'/donationDetails/:id',
                element:<DonationDetails></DonationDetails>,
                loader:()=> fetch('../donation.json')
            }
        ]
    }
])

export default myRoute;