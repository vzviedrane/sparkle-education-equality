// src/pages/DashboardPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [points, setPoints] = useState(145);

  // Accessibility Settings
  const [accessibilitySettings, setAccessibilitySettings] = useState({
    textSize: 'medium',
    highContrast: false,
    dyslexiaFont: false,
    screenReader: false
  });

  // Offline Status
  const [offlineStatus, setOfflineStatus] = useState({
    isAvailable: true,
    lastSync: '2 hours ago',
    downloadedMaterials: 5
  });

  // Personal Progress
  const personalProgress = {
    startingPoint: 'Basic',
    currentLevel: 'Intermediate',
    personalBest: 85,
    effortPoints: 450,
    milestones: [
      { name: 'First Quiz Completed', date: '2024-03-01', points: 50 },
      { name: 'Week Streak Achieved', date: '2024-03-08', points: 100 },
      { name: 'Personal Best Score', date: '2024-03-15', points: 150 }
    ]
  };

  // Support Resources
  const supportResources = [
    {
      type: 'AI Tutor',
      available: true,
      lastUsed: '1 hour ago',
      description: '24/7 personalized help'
    },
    {
      type: 'Peer Mentor',
      available: true,
      name: 'Anna',
      grade: '11th',
      expertise: 'Math & Physics'
    },
    {
      type: 'Special Education',
      available: true,
      resources: ['Learning Materials', 'Adapted Tests', 'Extra Time']
    },
    {
      type: 'Local Support',
      available: true,
      group: 'Rural Students Network',
      nextMeeting: 'Tomorrow, 4 PM'
    }
  ];

  // Previous functionality data
  const rewards = [
    { pointsRequired: 200, reward: '🎧 Headphones' },
    { pointsRequired: 400, reward: '🎟 Spotify Subscription' },
    { pointsRequired: 800, reward: '🎓 Scholarship Bonus' },
    { pointsRequired: 1000, reward: '💼 Internship Opportunity' },
  ];

  const leaderboard = [
    { name: 'Elina', points: 320 },
    { name: 'Markus', points: 290 },
    { name: 'Anna', points: 270 },
  ];

  const progressPercent = (points / 200) * 100;

  // Current functionality data
  const badges = [
    { id: 1, name: 'Math Master', icon: '🔢', earned: true, date: '2024-03-15' },
    { id: 2, name: 'Science Explorer', icon: '🔬', earned: true, date: '2024-03-10' },
    { id: 3, name: 'Language Expert', icon: '🌍', earned: false, progress: 75 },
    { id: 4, name: 'History Buff', icon: '📜', earned: false, progress: 50 }
  ];

  const monthlyProgress = {
    currentMonth: {
      name: 'March 2024',
      days: 31,
      completed: 22,
      streak: 7,
      points: 850,
      dailyProgress: [
        { day: 1, completed: true, points: 40 },
        { day: 2, completed: true, points: 35 },
        { day: 3, completed: true, points: 45 },
        { day: 4, completed: true, points: 30 },
        { day: 5, completed: true, points: 50 },
        { day: 6, completed: true, points: 40 },
        { day: 7, completed: true, points: 45 },
        { day: 8, completed: false, points: 0 },
        { day: 9, completed: false, points: 0 },
        { day: 10, completed: true, points: 35 },
        { day: 11, completed: true, points: 40 },
        { day: 12, completed: true, points: 45 },
        { day: 13, completed: true, points: 50 },
        { day: 14, completed: true, points: 40 },
        { day: 15, completed: true, points: 35 },
        { day: 16, completed: true, points: 45 },
        { day: 17, completed: true, points: 40 },
        { day: 18, completed: true, points: 50 },
        { day: 19, completed: true, points: 45 },
        { day: 20, completed: true, points: 40 },
        { day: 21, completed: true, points: 35 },
        { day: 22, completed: true, points: 45 },
        { day: 23, completed: false, points: 0 },
        { day: 24, completed: false, points: 0 },
        { day: 25, completed: true, points: 40 },
        { day: 26, completed: true, points: 45 },
        { day: 27, completed: true, points: 50 },
        { day: 28, completed: true, points: 40 },
        { day: 29, completed: true, points: 35 },
        { day: 30, completed: true, points: 45 },
        { day: 31, completed: true, points: 40 }
      ]
    },
    previousMonths: [
      { name: 'February 2024', completed: 18, total: 29, points: 720 },
      { name: 'January 2024', completed: 20, total: 31, points: 800 },
      { name: 'December 2023', completed: 15, total: 31, points: 600 }
    ]
  };

  const subjects = [
    { 
      name: 'Math', 
      icon: '📐', 
      progress: 75,
      grade: '10th Grade'
    },
    { name: 'English', icon: '📖', progress: 60 },
    { name: 'Physics', icon: '🔬', progress: 45 },
    { name: 'Chemistry', icon: '🧪', progress: 30 },
    { name: 'Geography', icon: '🌍', progress: 85 },
    { name: 'Art', icon: '🎨', progress: 90 }
  ];

  const partnerships = [
    {
      id: 1,
      name: 'Local Bookstore',
      reward: '20% discount on educational books',
      points: 500
    },
    {
      id: 2,
      name: 'Tech Store',
      reward: 'Free laptop accessories',
      points: 1000
    }
  ];

  const weakAreas = [
    { subject: 'Chemistry', improvement: 25, priority: 'high' },
    { subject: 'History', improvement: 15, priority: 'medium' }
  ];

  const careerPaths = [
    {
      id: 1,
      title: 'Engineering',
      match: 85,
      skills: ['Mathematics', 'Physics', 'Problem Solving'],
      localOpportunities: 3
    },
    {
      id: 2,
      title: 'Medicine',
      match: 75,
      skills: ['Biology', 'Chemistry', 'Research'],
      localOpportunities: 2
    }
  ];

  const stats = {
    totalPoints: 1250,
    missionsCompleted: 45,
    hoursSpent: 35,
    currentStreak: 7
  };

  const offlineOptions = [
    {
      id: 1,
      title: 'Math Practice Sheets',
      size: '2.5MB',
      downloaded: true
    },
    {
      id: 2,
      title: 'Science Experiments Guide',
      size: '5MB',
      downloaded: false
    }
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const mathTopics = {
    '10th Grade': [
      {
        name: 'Algebra',
        subtopics: [
          {
            name: 'Linear Equations',
            theory: 'Introduction to linear equations and their applications...',
            quizzes: [
              { title: 'Basic Linear Equations', completed: true, score: 85 },
              { title: 'Advanced Linear Equations', completed: false }
            ],
            aiHelp: true,
            practiceProblems: 15,
            points: 30
          },
          {
            name: 'Quadratic Equations',
            theory: 'Understanding quadratic equations and their solutions...',
            quizzes: [
              { title: 'Quadratic Formula', completed: true, score: 90 },
              { title: 'Applications of Quadratic Equations', completed: false }
            ],
            aiHelp: true,
            practiceProblems: 12,
            points: 25
          }
        ]
      },
      {
        name: 'Geometry',
        subtopics: [
          {
            name: 'Triangles',
            theory: 'Properties and theorems of triangles...',
            quizzes: [
              { title: 'Triangle Properties', completed: true, score: 88 },
              { title: 'Triangle Congruence', completed: false }
            ],
            aiHelp: true,
            practiceProblems: 10,
            points: 20
          }
        ]
      }
    ]
  };

  const handleSubjectClick = (subject) => {
    if (subject.name === 'Math') {
      setSelectedSubject('Math');
      setSelectedTopic(null);
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      fontFamily: accessibilitySettings.dyslexiaFont ? 'OpenDyslexic, Arial' : 'Arial, sans-serif',
      fontSize: accessibilitySettings.textSize === 'large' ? '18px' : 
               accessibilitySettings.textSize === 'small' ? '14px' : '16px',
      color: accessibilitySettings.highContrast ? '#000' : '#333',
      padding: '2rem'
    }}>
      {/* Accessibility Toolbar */}
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        background: 'white',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}>
        <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem' }}>Accessibility</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button
            onClick={() => setAccessibilitySettings(prev => ({
              ...prev,
              textSize: prev.textSize === 'small' ? 'medium' : 
                       prev.textSize === 'medium' ? 'large' : 'small'
            }))}
            style={accessibilityButtonStyle}
          >
            Text Size: {accessibilitySettings.textSize}
          </button>
          <button
            onClick={() => setAccessibilitySettings(prev => ({
              ...prev,
              highContrast: !prev.highContrast
            }))}
            style={accessibilityButtonStyle}
          >
            High Contrast: {accessibilitySettings.highContrast ? 'On' : 'Off'}
          </button>
          <button
            onClick={() => setAccessibilitySettings(prev => ({
              ...prev,
              dyslexiaFont: !prev.dyslexiaFont
            }))}
            style={accessibilityButtonStyle}
          >
            Dyslexia Font: {accessibilitySettings.dyslexiaFont ? 'On' : 'Off'}
          </button>
          <button
            onClick={() => setAccessibilitySettings(prev => ({
              ...prev,
              screenReader: !prev.screenReader
            }))}
            style={accessibilityButtonStyle}
          >
            Screen Reader: {accessibilitySettings.screenReader ? 'On' : 'Off'}
          </button>
        </div>
      </div>

      {/* Existing Welcome Section */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px'
      }}>
        <h1 style={{ marginBottom: '0.5rem' }}>👋 Welcome, <span style={{ color: '#7e5bef' }}>Anna</span>!</h1>
        <p><strong>🎯 Trust Score:</strong> <span style={{ color: '#4caf50' }}>65</span></p>
        <p><strong>🎓 Grade:</strong> 10th Grade</p>

        {/* Profile, Rewards, and Share Buttons */}
        {/* Profile and Rewards Buttons */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button
            onClick={() => navigate('/profile')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              backgroundColor: '#7e5bef',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              flex: 1
            }}
          >
            👤 View Profile
          </button>
          <button
            onClick={() => navigate('/rewards')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              flex: 1
            }}
          >
            🏆 View Rewards
          </button>
        </div>
      </div>

      {/* PathPoints Progress */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1.5rem',
        borderRadius: '12px',
        marginBottom: '2rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>PathPoints Progress</h2>
        <div style={{
          background: '#ddd',
          borderRadius: '10px',
          overflow: 'hidden',
          height: '25px',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: `${progressPercent}%`,
            backgroundColor: '#4caf50',
            height: '100%'
          }}></div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          {points} / 200 points to next reward!
        </p>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1rem',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <button
          onClick={() => setActiveTab('overview')}
          style={tabButtonStyle}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('learning')}
          style={tabButtonStyle}
        >
          Learning Path
        </button>
        <button
          onClick={() => setActiveTab('career')}
          style={tabButtonStyle}
        >
          Career Paths
        </button>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Quick Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <StatCard
            title="Total Points"
            value={stats.totalPoints}
            icon="⭐"
          />
          <StatCard
            title="Missions Completed"
            value={stats.missionsCompleted}
            icon="🎯"
          />
          <StatCard
            title="Hours Spent"
            value={stats.hoursSpent}
            icon="⏱️"
          />
          <StatCard
            title="Current Streak"
            value={`${stats.currentStreak} days`}
            icon="🔥"
          />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Achievement Badges */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Achievement Badges</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem'
              }}>
                {badges.map(badge => (
                  <div key={badge.id} style={badgeStyle}>
                    <div style={{ fontSize: '2rem' }}>{badge.icon}</div>
                    <h3 style={{ margin: '0.5rem 0' }}>{badge.name}</h3>
                    {badge.earned ? (
                      <span style={{ color: '#4caf50' }}>Earned {badge.date}</span>
                    ) : (
                      <div style={{ width: '100%', background: '#eee', borderRadius: '10px' }}>
                        <div style={{
                          width: `${badge.progress}%`,
                          height: '8px',
                          background: '#7e5bef',
                          borderRadius: '10px'
                        }} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Progress Section */}
            <div style={{
              background: '#fff',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              marginBottom: '2rem'
            }}>
              <h2 style={{ marginBottom: '1.5rem' }}>📅 Monthly Progress</h2>
              
              {/* Current Month Overview */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
                padding: '1rem',
                background: '#f8f9fa',
                borderRadius: '8px'
              }}>
                <div>
                  <h3 style={{ marginBottom: '0.5rem' }}>{monthlyProgress.currentMonth.name}</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#7e5bef' }}>
                        {monthlyProgress.currentMonth.completed}/{monthlyProgress.currentMonth.days}
                      </div>
                      <div style={{ color: '#666' }}>Days Completed</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#7e5bef' }}>
                        {monthlyProgress.currentMonth.streak}
                      </div>
                      <div style={{ color: '#666' }}>Day Streak</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#7e5bef' }}>
                        {monthlyProgress.currentMonth.points}
                      </div>
                      <div style={{ color: '#666' }}>Points Earned</div>
                    </div>
                  </div>
                </div>
                <div style={{
                  width: '100px',
                  height: '100px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#7e5bef"
                      strokeWidth="8"
                      strokeDasharray={`${(monthlyProgress.currentMonth.completed / monthlyProgress.currentMonth.days) * 283} 283`}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div style={{
                    position: 'absolute',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#7e5bef'
                  }}>
                    {Math.round((monthlyProgress.currentMonth.completed / monthlyProgress.currentMonth.days) * 100)}%
                  </div>
                </div>
              </div>

              {/* Daily Progress Chart */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Daily Activity</h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(31, 1fr)',
                  gap: '4px',
                  height: '100px',
                  alignItems: 'end'
                }}>
                  {monthlyProgress.currentMonth.dailyProgress.map((day, index) => (
                    <div key={index} style={{
                      height: `${(day.points / 50) * 100}%`,
                      background: day.completed ? '#7e5bef' : '#eee',
                      borderRadius: '4px',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '0.7rem',
                        color: '#666',
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed'
                      }}>
                        {day.day}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Previous Months Comparison */}
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Previous Months</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {monthlyProgress.previousMonths.map((month, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem',
                      background: '#f8f9fa',
                      borderRadius: '8px'
                    }}>
                      <div style={{ fontWeight: 'bold' }}>{month.name}</div>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <div>
                          <div style={{ fontSize: '0.9rem', color: '#666' }}>Completed</div>
                          <div style={{ fontWeight: 'bold' }}>{month.completed}/{month.total}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.9rem', color: '#666' }}>Points</div>
                          <div style={{ fontWeight: 'bold' }}>{month.points}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Local Partnerships */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Local Partnerships</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem'
              }}>
                {partnerships.map(partner => (
                  <div key={partner.id} style={partnershipStyle}>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>{partner.name}</h3>
                    <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>
                      {partner.reward}
                    </p>
                    <span style={{ color: '#7e5bef' }}>
                      {partner.points} points
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Learning Path Tab */}
        {activeTab === 'learning' && (
          <div style={{ display: 'grid', gap: '2rem' }}>
            {/* Subjects Grid */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Subjects</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                {subjects.map((subject, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    textAlign: 'center'
                  }}
                    onClick={() => handleSubjectClick(subject)}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{subject.icon}</div>
                    <h3 style={{ margin: 0 }}>{subject.name}</h3>
                    <div style={{
                      width: '100%',
                      height: '8px',
                      background: '#eee',
                      borderRadius: '4px',
                      marginTop: '1rem',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${subject.progress}%`,
                        height: '100%',
                        background: '#7e5bef'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Math Topics Modal */}
            {selectedSubject === 'Math' && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000
              }}>
                <div style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '10px',
                  width: '80%',
                  maxWidth: '800px',
                  maxHeight: '80vh',
                  overflow: 'auto'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <h2 style={{ margin: 0 }}>📐 Math - 10th Grade</h2>
                    <button
                      onClick={() => {
                        setSelectedSubject(null);
                        setSelectedTopic(null);
                      }}
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

                  {!selectedTopic ? (
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {mathTopics['10th Grade'].map((topic, index) => (
                        <div key={index} style={{
                          background: '#f5f5f5',
                          padding: '1rem',
                          borderRadius: '8px',
                          cursor: 'pointer'
                        }}
                          onClick={() => setSelectedTopic(topic)}
                        >
                          <h3 style={{ margin: '0 0 0.5rem 0' }}>{topic.name}</h3>
                          <div style={{
                            display: 'flex',
                            gap: '1rem',
                            fontSize: '0.9rem',
                            color: '#666'
                          }}>
                            <span>📚 {topic.subtopics.length} subtopics</span>
                            <span>📝 {topic.subtopics.reduce((acc, curr) => acc + curr.quizzes.length, 0)} quizzes</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={() => setSelectedTopic(null)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#7e5bef',
                          cursor: 'pointer',
                          marginBottom: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        ← Back to Topics
                      </button>
                      <h3 style={{ margin: '0 0 1rem 0' }}>{selectedTopic.name}</h3>
                      <div style={{ display: 'grid', gap: '1rem' }}>
                        {selectedTopic.subtopics.map((subtopic, index) => (
                          <div key={index} style={{
                            background: 'white',
                            border: '1px solid #eee',
                            borderRadius: '8px',
                            padding: '1rem'
                          }}>
                            <div style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '0.5rem'
                            }}>
                              <h4 style={{ margin: 0 }}>{subtopic.name}</h4>
                              <span style={{ color: '#7e5bef' }}>+{subtopic.points} pts</span>
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                              <p style={{ color: '#666' }}>{subtopic.theory}</p>
                            </div>
                            <div style={{
                              display: 'flex',
                              gap: '1rem',
                              marginBottom: '1rem'
                            }}>
                              <button
                                onClick={() => navigate('/mission')}
                                style={{
                                  padding: '0.5rem 1rem',
                                  background: '#7e5bef',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Start Learning
                              </button>
                              <button
                                onClick={() => navigate('/quiz')}
                                style={{
                                  padding: '0.5rem 1rem',
                                  background: '#4caf50',
                                  color: 'white',
                                  border: 'none',
                                  borderRadius: '4px',
                                  cursor: 'pointer'
                                }}
                              >
                                Take Quiz
                              </button>
                              {subtopic.aiHelp && (
                                <button
                                  onClick={() => navigate('/ai-tutor')}
                                  style={{
                                    padding: '0.5rem 1rem',
                                    background: '#ff9800',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                  }}
                                >
                                  AI Tutor
                                </button>
                              )}
                            </div>
                            <div style={{
                              display: 'flex',
                              gap: '1rem',
                              fontSize: '0.9rem',
                              color: '#666'
                            }}>
                              <span>📝 {subtopic.quizzes.length} quizzes</span>
                              <span>📚 {subtopic.practiceProblems} practice problems</span>
                              {subtopic.quizzes.some(q => q.completed) && (
                                <span>🏆 Best score: {Math.max(...subtopic.quizzes.filter(q => q.completed).map(q => q.score))}%</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Rewards List */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Available Rewards</h2>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {rewards.map((reward, index) => (
                  <li key={index} style={{
                    background: points >= reward.pointsRequired ? '#c8e6c9' : '#f0f0f0',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                    <span><strong>{reward.pointsRequired} Points</strong></span>
                    <span>{reward.reward}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leaderboard */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Leaderboard</h2>
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '1rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                {leaderboard.map((student, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    fontWeight: index === 0 ? 'bold' : 'normal',
                    color: index === 0 ? '#FFD700' : index === 1 ? '#C0C0C0' : '#CD7F32'
                  }}>
                    <div>{index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'} {student.name}</div>
                    <div>{student.points} pts</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weak Areas */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Areas to Focus On</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {weakAreas.map((area, index) => (
                  <div key={index} style={weakAreaStyle}>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>{area.subject}</h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <div style={{
                        width: '100%',
                        height: '8px',
                        background: '#eee',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          width: `${area.improvement}%`,
                          height: '100%',
                          background: area.priority === 'high' ? '#f44336' : '#ff9800'
                        }} />
                      </div>
                      <span style={{
                        color: area.priority === 'high' ? '#f44336' : '#ff9800',
                        fontWeight: 'bold'
                      }}>
                        {area.improvement}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offline Study Options */}
            <div style={cardStyle}>
              <h2 style={sectionTitleStyle}>Offline Study Materials</h2>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {offlineOptions.map(option => (
                  <div key={option.id} style={offlineOptionStyle}>
                    <div>
                      <h3 style={{ margin: '0 0 0.5rem 0' }}>{option.title}</h3>
                      <span style={{ color: '#666' }}>{option.size}</span>
                    </div>
                    <button style={{
                      padding: '0.5rem 1rem',
                      background: option.downloaded ? '#4caf50' : '#7e5bef',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}>
                      {option.downloaded ? 'Downloaded' : 'Download'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Career Paths Tab */}
        {activeTab === 'career' && (
          <div style={cardStyle}>
            <h2 style={sectionTitleStyle}>Suggested Career Paths</h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {careerPaths.map(path => (
                <div key={path.id} style={careerPathStyle}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <h3 style={{ margin: 0 }}>{path.title}</h3>
                    <div style={{
                      background: '#7e5bef',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem'
                    }}>
                      {path.match}% Match
                    </div>
                  </div>
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Required Skills:</h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {path.skills.map((skill, index) => (
                        <span key={index} style={skillTagStyle}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#666'
                  }}>
                    <span>📌</span>
                    <span>{path.localOpportunities} local opportunities available</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Tutor Quick Access */}
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: '#7e5bef',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(126, 91, 239, 0.3)',
          transition: '0.3s ease'
        }}
        onMouseOver={e => e.target.style.transform = 'scale(1.1)'}
        onMouseOut={e => e.target.style.transform = 'scale(1)'}
        >
          🤖
        </div>
      </div>

      {/* Support Network - Moved to bottom */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '1.5rem',
        borderRadius: '12px',
        marginTop: '2rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Support Network</h2>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {supportResources.map((resource, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '1rem',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>{resource.type}</h3>
              {resource.type === 'AI Tutor' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span>Status: {resource.available ? 'Available' : 'Unavailable'}</span>
                  <span>Last used: {resource.lastUsed}</span>
                  <span>{resource.description}</span>
                </div>
              )}
              {resource.type === 'Peer Mentor' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span>Name: {resource.name}</span>
                  <span>Grade: {resource.grade}</span>
                  <span>Expertise: {resource.expertise}</span>
                </div>
              )}
              {resource.type === 'Special Education' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span>Available Resources:</span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {resource.resources.map((item, i) => (
                      <span key={i} style={{
                        background: '#e0c3fc',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.9rem'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {resource.type === 'Local Support' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span>Group: {resource.group}</span>
                  <span>Next Meeting: {resource.nextMeeting}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Components
const StatCard = ({ title, value, icon }) => (
  <div style={{
    background: 'white',
    padding: '1.5rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  }}>
    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
    <h3 style={{ margin: '0 0 0.5rem 0' }}>{title}</h3>
    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7e5bef' }}>
      {value}
    </div>
  </div>
);

// Styles
const cardStyle = {
  background: 'rgba(255, 255, 255, 0.9)',
  padding: '2rem',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
};

const sectionTitleStyle = {
  marginTop: 0,
  color: '#7e5bef',
  marginBottom: '1.5rem'
};

const tabButtonStyle = {
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  border: 'none',
  background: '#e0c3fc',
  color: '#333',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: '0.2s'
};

const badgeStyle = {
  background: 'white',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

const partnershipStyle = {
  background: 'white',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const subjectStyle = {
  background: 'white',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const weakAreaStyle = {
  background: 'white',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const offlineOptionStyle = {
  background: 'white',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const careerPathStyle = {
  background: 'white',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const skillTagStyle = {
  background: '#e0c3fc',
  padding: '0.25rem 0.75rem',
  borderRadius: '15px',
  fontSize: '0.9rem'
};

const accessibilityButtonStyle = {
  padding: '0.5rem 1rem',
  background: '#f5f5f5',
  border: '1px solid #ddd',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '0.9rem'
};

export default DashboardPage;