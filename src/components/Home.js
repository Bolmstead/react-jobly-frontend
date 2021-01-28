import React from "react";
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

/* Home page that displays login and signup button links */

function Home() {
  return (
    <div><br/>
        <h1>Welcome!</h1>
        <Link to={`/Login`}><Button className="btn btn-md btn-primary m-3">Login</Button></Link>
        <Link to={`/Signup`}><Button className="btn btn-md btn-primary m-3">Sign up</Button></Link>
    </div>
  );
}

export default Home;
