import { Outlet, Link } from 'react-router-dom'
import './css/layout.css';


export default function Layout() {

    return (
        <>
            <div><h2>Pharmacy Management System</h2></div>
            <div>


                <Link to="/signup">Signup</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/inventory">Inventory</Link>&nbsp;&nbsp;&nbsp;
                {/* <Link to="/dashboard">Dashboard</Link>&nbsp;&nbsp;&nbsp; */}
                <Link to="/test1">Recent-Orders</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/test2">Products</Link>&nbsp;&nbsp;&nbsp;
            </div>

            <Outlet />
        </>
    )
}

