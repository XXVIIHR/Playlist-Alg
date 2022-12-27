import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        <Link to="/">
            <div className="Logo" {...props}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFuSgTeplM86DeyH9OTEtsaDEjbpouPDJI6w_6Gh_MetMH5159PQK2NdFAOnjL7F9Vm1I&usqp=CAU" />
                <div class = "logoname">
                    <span>myPlay</span>
                </div>
            </div>
        </Link>

    );
}

export default Logo;