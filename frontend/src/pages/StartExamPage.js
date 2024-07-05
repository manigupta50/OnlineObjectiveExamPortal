import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StartExamPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:8080/api/users/', { name, email });
        // console.log('Response:', response.data);
        navigate(`/exam/${response.data._id}`);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'no-wrap', height: '100vh'}}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "20px"}}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div style={{ marginBottom: "20px"}}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" style={{ marginLeft: "50px"}}>Start Exam</button>
            </form>
        </div>
    );
};

export default StartExamPage;
