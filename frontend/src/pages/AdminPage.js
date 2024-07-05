import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctOption, setCorrectOption] = useState('');

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { question, options, correctOption };
        await axios.post('http://localhost:8080/api/questions/', data);
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectOption('');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'no-wrap', height: '100vh'}}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Question:</label>
                    <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
                </div>
                {options.map((option, index) => (
                    <div key={index}>
                    <label>Option {index + 1}:</label>
                    <input
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                    />
                    </div>
                ))}
                <div>
                    <label>Correct Option:</label>
                    <input type="text" value={correctOption} onChange={(e) => setCorrectOption(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AdminPage;
