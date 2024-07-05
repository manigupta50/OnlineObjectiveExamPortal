import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Result = () => {
    const { userId } = useParams();
    const [result, setResult] = useState(null);

    useEffect(() => {
        const fetchResult = async () => {
            const response = await axios.get(`http://localhost:8080/api/results/${userId}`);
            setResult(response.data);
        };
        fetchResult();
    }, [userId]);

    if (!result) return <div>Loading...</div>;

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'no-wrap', height: '100vh'}}>
            <h1>Successfully Completed</h1>
            <p>Correct Answers: {result.correct}</p>
            <p>Wrong Answers: {result.wrong}</p>
        </div>
    );
};

export default Result;
