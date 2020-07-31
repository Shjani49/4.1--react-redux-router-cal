import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
render()
{
    return(
        <nav>
            <ul>
                <li>
                    <Link to = "/">
                    Home (Basic Calculator)
                    </Link >
                </li>
                <li>
                    <Link to = "/PastCalculations">
                    Past Calculations...
                    </Link >
                </li>
            </ul>
        </nav>
    
    );
}

}

export default Nav;