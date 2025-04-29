// src/pages/MissionPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MissionPage() {
  const navigate = useNavigate();
  const [points, setPoints] = useState(145);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState(["🤖 AI Tutor: Hi! I'm here to help you understand fractions better. What would you like to know?"]);
  const [input, setInput] = useState("");
  const [timeSpent, setTimeSpent] = useState(0);
  const [streak, setStreak] = useState(0);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const questions = [
    {
      theory: "A fraction represents a part of a whole. Example: 1/2 means one part out of two equal parts. When adding fractions with different denominators, find a common denominator first!",
      question: "What is 1/2 + 1/3?",
      options: ["2/5", "3/5", "5/6 ✅", "4/6"],
      correct: 2,
      correctText: "5/6",
      explanation: "To add 1/2 and 1/3, we need a common denominator. The least common denominator is 6. So, 1/2 = 3/6 and 1/3 = 2/6. Adding them gives 5/6."
    },
    {
      theory: "When subtracting fractions, also use a common denominator!",
      question: "What is 3/4 - 1/2?",
      options: ["1/4 ✅", "2/4", "1/2", "3/2"],
      correct: 0,
      correctText: "1/4",
      explanation: "To subtract 1/2 from 3/4, we convert 1/2 to 2/4. Then 3/4 - 2/4 = 1/4."
    }
  ];

  const handleAnswer = (index) => {
    const correct = index === questions[currentQuestion].correct;
    setShowResult(true);
    setIsCorrect(correct);

    if (correct) {
      setPoints(prev => prev + 25);
      setStreak(prev => prev + 1);
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setShowResult(false);
        } else {
          navigate('/dashboard');
        }
      }, 2000);
    } else {
      setStreak(0);
    }
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, `👤 You: ${input}`];
      
      // Simple AI responses based on keywords
      let aiResponse = "🤖 AI Tutor: I'm here to help! Could you be more specific about what you're struggling with?";
      if (input.toLowerCase().includes("denominator")) {
        aiResponse = "🤖 AI Tutor: The denominator is the bottom number in a fraction. It tells us how many equal parts the whole is divided into. For example, in 1/2, the denominator is 2, meaning the whole is divided into 2 equal parts.";
      } else if (input.toLowerCase().includes("add") || input.toLowerCase().includes("plus")) {
        aiResponse = "🤖 AI Tutor: To add fractions, you need a common denominator. For example, to add 1/2 and 1/3, convert them to 3/6 and 2/6, then add to get 5/6.";
      }

      setMessages([...newMessages, aiResponse]);
      setInput("");
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: 'Arial, sans-serif',
      position: 'relative'
    }}>
      {/* Header with Progress */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div>
          <h1 style={{ margin: 0 }}>📘 Mission: Math Basics - Fractions</h1>
          <p style={{ margin: '0.5rem 0', color: '#666' }}>Question {currentQuestion + 1} of {questions.length}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ margin: '0.5rem 0' }}>⏱️ Time: {formatTime(timeSpent)}</p>
          <p style={{ margin: '0.5rem 0' }}>🔥 Streak: {streak}</p>
          <p style={{ margin: '0.5rem 0' }}>⭐ Points: {points}</p>
        </div>
      </div>

      {/* Theory Section */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ color: '#7e5bef', marginTop: 0 }}>📚 Theory:</h2>
        <p style={{ lineHeight: '1.6' }}>{questions[currentQuestion].theory}</p>
      </div>

      {/* Question Section */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '1.5rem'
      }}>
        <h3 style={{ color: '#333', marginTop: 0 }}>🧠 {questions[currentQuestion].question}</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {questions[currentQuestion].options.map((option, index) => (
            <button 
              key={index} 
              onClick={() => handleAnswer(index)} 
              style={{
                ...answerButtonStyle,
                backgroundColor: showResult 
                  ? index === questions[currentQuestion].correct 
                    ? '#4caf50' 
                    : isCorrect === false && index === questions[currentQuestion].correct
                      ? '#4caf50'
                      : '#e0c3fc'
                  : '#e0c3fc'
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Result Section */}
      {showResult && (
        <div style={{
          marginTop: '1rem',
          padding: '1.5rem',
          backgroundColor: isCorrect ? '#d4edda' : '#f8d7da',
          color: isCorrect ? '#155724' : '#721c24',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          {isCorrect ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎉</div>
              <p style={{ margin: 0 }}>Correct! You earned 25 points!</p>
              <p style={{ margin: '0.5rem 0 0 0' }}>Moving to next question...</p>
            </div>
          ) : (
            <div>
              <p style={{ margin: '0 0 1rem 0' }}>
                ❌ Incorrect. The correct answer is {questions[currentQuestion].correctText}.
              </p>
              <p style={{ margin: '0 0 1rem 0', fontStyle: 'italic' }}>
                {questions[currentQuestion].explanation}
              </p>
              <button 
                onClick={() => setShowChat(true)} 
                style={{
                  ...aiHelpButtonStyle,
                  backgroundColor: '#7e5bef'
                }}
              >
                🤖 Ask AI Tutor for Help
              </button>
            </div>
          )}
        </div>
      )}

      {/* AI Chat Popup */}
      {showChat && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '350px',
          backgroundColor: '#fff',
          borderRadius: '15px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          padding: '1.5rem',
          zIndex: 1000
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <h4 style={{ margin: 0, color: '#7e5bef' }}>🤖 AI Tutor</h4>
            <button 
              onClick={() => setShowChat(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
          </div>
          <div style={{
            height: '200px',
            overflowY: 'auto',
            marginBottom: '1rem',
            padding: '0.5rem',
            border: '1px solid #eee',
            borderRadius: '8px'
          }}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                style={{ 
                  marginBottom: '0.5rem',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  backgroundColor: msg.startsWith('🤖') ? '#f0f0f0' : '#e0c3fc',
                  maxWidth: '80%',
                  marginLeft: msg.startsWith('🤖') ? '0' : 'auto',
                  marginRight: msg.startsWith('🤖') ? 'auto' : '0'
                }}
              >
                {msg}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a question..."
              style={{ 
                flex: 1,
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '1rem'
              }}
            />
            <button 
              onClick={handleSendMessage} 
              style={{ 
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: '#7e5bef',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const answerButtonStyle = {
  padding: '1rem',
  borderRadius: '8px',
  border: 'none',
  color: '#333',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: '0.2s',
  textAlign: 'left'
};

const aiHelpButtonStyle = {
  padding: '0.75rem 1.5rem',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: '0.2s'
};

export default MissionPage;