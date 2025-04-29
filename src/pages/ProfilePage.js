// src/pages/ProfilePage.js

import React, { useState } from 'react';

function ProfilePage() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const userData = {
    name: 'Anna Bērziņa',
    grade: '10th Grade',
    school: 'Riga State Gymnasium No.1',
    trustScore: 85,
    points: 1250,
    streak: 7,
    achievements: [
      { name: 'Math Master', icon: '📐', date: '2 days ago' },
      { name: 'Consistent Learner', icon: '🔥', date: '5 days ago' },
      { name: 'Community Helper', icon: '🤝', date: '1 week ago' }
    ]
  };

  const trustScoreFactors = [
    {
      name: 'Consistency',
      score: 25,
      maxScore: 30,
      description: 'Based on your regular study patterns and streak maintenance',
      details: [
        'Daily study sessions: +5 points',
        'Weekly streak bonus: +10 points',
        'Monthly consistency: +15 points'
      ]
    },
    {
      name: 'Accuracy',
      score: 28,
      maxScore: 30,
      description: 'Reflects your performance in quizzes and assignments',
      details: [
        'Quiz accuracy: +10 points',
        'Assignment completion: +10 points',
        'Error correction: +8 points'
      ]
    },
    {
      name: 'Community',
      score: 20,
      maxScore: 25,
      description: 'Your contribution to the learning community',
      details: [
        'Helping others: +8 points',
        'Study group participation: +7 points',
        'Resource sharing: +5 points'
      ]
    },
    {
      name: 'Progress',
      score: 12,
      maxScore: 15,
      description: 'Your learning progress and improvement over time',
      details: [
        'Skill improvement: +5 points',
        'Course completion: +4 points',
        'Challenge completion: +3 points'
      ]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      background: '#f3e8ff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Profile Header */}
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            background: '#7e5bef',
            borderRadius: '50%',
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            color: 'white'
          }}>
            {userData.name.charAt(0)}
          </div>
          <h1 style={{ marginBottom: '0.5rem' }}>{userData.name}</h1>
          <p style={{ color: '#666', marginBottom: '0.5rem' }}>
            {userData.grade} • {userData.school}
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '1rem'
          }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7e5bef' }}>
                {userData.points}
              </div>
              <div style={{ color: '#666' }}>Points</div>
            </div>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7e5bef' }}>
                {userData.streak}
              </div>
              <div style={{ color: '#666' }}>Day Streak</div>
            </div>
          </div>
        </div>

        {/* Trust Score Section */}
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            cursor: 'pointer'
          }} onClick={() => toggleSection('trustScore')}>
            <h2 style={{ margin: 0 }}>Trust Score: {userData.trustScore}/100</h2>
            <span style={{ fontSize: '1.5rem' }}>
              {expandedSections.trustScore ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedSections.trustScore && (
            <div>
              <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                Your trust score reflects your reliability and commitment to learning. 
                Higher scores unlock special opportunities and rewards.
              </p>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {trustScoreFactors.map((factor, index) => (
                  <div key={index} style={{
                    background: '#f8f9fa',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.5rem'
                    }}>
                      <div>
                        <div style={{ fontWeight: 'bold' }}>{factor.name}</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>
                          {factor.description}
                        </div>
                      </div>
                      <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: '#7e5bef'
                      }}>
                        {factor.score}/{factor.maxScore}
                      </div>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '0.5rem'
                    }}>
                      <div style={{ width: '80%' }}>
                        <div style={{
                          height: '6px',
                          background: '#eee',
                          borderRadius: '3px',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            width: `${(factor.score / factor.maxScore) * 100}%`,
                            height: '100%',
                            background: '#7e5bef',
                            transition: 'width 0.3s ease'
                          }}></div>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleSection(`factor${index}`)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#7e5bef',
                          cursor: 'pointer',
                          padding: '0.5rem'
                        }}
                      >
                        {expandedSections[`factor${index}`] ? 'Hide Details' : 'Show Details'}
                      </button>
                    </div>
                    {expandedSections[`factor${index}`] && (
                      <div style={{
                        marginTop: '1rem',
                        padding: '0.5rem',
                        background: 'rgba(126, 91, 239, 0.1)',
                        borderRadius: '4px'
                      }}>
                        {factor.details.map((detail, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.5rem'
                          }}>
                            <span style={{ color: '#7e5bef' }}>•</span>
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Achievements Section */}
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Recent Achievements</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {userData.achievements.map((achievement, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '8px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>{achievement.icon}</span>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{achievement.name}</div>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>
                    Earned {achievement.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
