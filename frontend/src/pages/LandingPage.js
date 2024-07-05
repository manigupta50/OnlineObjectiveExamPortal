import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStartExam = () => {
        navigate('/start');
    };

    const handleAdminPage = () => {
        navigate('/admin');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'no-wrap', height: '100vh'}}>
            <div>
                <h1>Online Exam Portal</h1>
                <button onClick={handleStartExam} style={{ marginLeft: "50px"}}>Start Exam</button>
                <button onClick={handleAdminPage}>Admin Page</button>
            </div>
        </div>
    );
};

export default LandingPage;
