import React from 'react';
import Nav from './component/Nav'
import Create from './component/Create'
import Table from './component/Table'

const Dashboard = ({ isAuthenticated }) => {
    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <Nav/>
                    <h1>admin page</h1>
                </div>
            ) : (
                <div>
                   <Nav/>
                   <h1>User Dashboard Page</h1>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
