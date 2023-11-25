import React from 'react'
import s from './css/dashboard.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Dashboard() {

    // const data = [
    //     {
    //       name: 'Page A',
    //       uv: 4000,
    //       pv: 2400,
    //       amt: 2400,
    //     }
    //   ];

    // useEffect(() => {
    
    //     fetchData();
    //   }, []);
    
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('###backend endpoint###'); // Replace with your backend API endpoint
    //       const data = await response.json();
    //       setDashboardData(data);
    //     } catch (error) {
    //       console.error('Error retrieving data:', error);
    //     }
    //   };
     

  return (
<>

    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Total Units in Stock</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>35658</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Available Medicines</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>259</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Suppliers</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>27</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Notifications</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
        </div>
      
    </main>


    </>  
  )
}

export default Dashboard