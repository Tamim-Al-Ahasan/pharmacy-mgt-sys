import { Outlet, Link } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            
            <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/signup">Signup</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/inventory">Inventory</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/dashboard">dashboard</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/test1">Recent-Orders</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/test2">Products</Link>&nbsp;&nbsp;&nbsp;

            <Outlet />
        </>
    )
}

