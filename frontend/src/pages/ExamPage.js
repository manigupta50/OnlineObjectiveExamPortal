import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ExamPage = () => {
    const { userId } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await axios.get('http://localhost:8080/api/questions/');
            setQuestions(response.data);
        };
        fetchQuestions();
    }, []);

    const handleOptionChange = (e) => {
        setSelectedOptions({
            ...selectedOptions,
            [questions[currentQuestionIndex]._id]: e.target.value,
        });
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        const responses = Object.keys(selectedOptions).map((questionId) => ({
            questionId,
            selectedOption: selectedOptions[questionId],
            userId,
        }));
        await axios.post('http://localhost:8080/api/responses/', { responses });
        navigate(`/result/${userId}`);
    };

    if (questions.length === 0) return <div>Loading...</div>;

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'no-wrap', height: '100vh'}}>
            <div>
                <div style={{ marginBottom: "20px"}}>{currentQuestion.question}</div>
                {currentQuestion.options.map((option, index) => (
                    <div key={index} style={{ marginBottom: "20px"}}>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOptions[currentQuestion._id] === option}
                            onChange={handleOptionChange}
                        />
                        {option}
                    </div>
                ))}
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default ExamPage;
