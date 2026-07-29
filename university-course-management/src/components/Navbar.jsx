import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Navbar(){

const navigate = useNavigate();


const logout = () => {

 localStorage.removeItem("user");

 navigate("/login");

};


return (

<nav className="navbar navbar-dark bg-primary">

<div className="container">

<Link 
className="navbar-brand"
to="/"
>
CMS University
</Link>


<button
className="btn btn-light"
onClick={logout}
>
Logout
</button>


</div>

</nav>

);

}


export default Navbar;