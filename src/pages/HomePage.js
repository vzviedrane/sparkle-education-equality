// src/pages/HomePage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('role');

  // Success stories data
  const successStories = [
    {
      id: 1,
      name: 'Anna',
      location: 'Rural Latvia',
      achievement: 'Improved math grades from C to A',
      story: 'Through consistent daily practice and using the AI tutor, Anna transformed her math skills and gained confidence.',
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 2,
      name: 'Markus',
      location: 'Small Town',
      achievement: 'Won regional science competition',
      story: 'Markus used our platform to prepare for the competition and won first place in his category.',
      image: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: 'Virtual Study Group',
      date: 'Tomorrow, 15:00',
      description: 'Join our math study group for collaborative learning',
      icon: '📚'
    },
    {
      id: 2,
      title: 'Science Workshop',
      date: 'Next Week, 14:00',
      description: 'Interactive science experiments and demonstrations',
      icon: '🔬'
    }
  ];

  // Local success stories
  const localStories = [
    {
      id: 1,
      school: 'Rural School A',
      achievement: '50% improvement in test scores',
      students: 120,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500'
    },
    {
      id: 2,
      school: 'Village School B',
      achievement: '100% graduation rate',
      students: 80,
      image: 'https://images.unsplash.com/photo-1523240795612-9a04b0820b8b?w=500'
    }
  ];

  // Daily inspirational quote
  const dailyQuote = {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  };

  // FAQ items
  const faqItems = [
    {
      question: "How do I earn points?",
      answer: "You earn points by completing missions, maintaining streaks, and participating in community activities."
    },
    {
      question: "What rewards can I get?",
      answer: "Rewards range from digital badges to real-world items like books, tech gadgets, and local business vouchers."
    },
    {
      question: "Is the AI tutor available 24/7?",
      answer: "Yes, our AI tutor is available around the clock to help you with your studies."
    }
  ];

  // Support options
  const supportOptions = [
    {
      type: "Email",
      contact: "support@eduwork.lv",
      icon: "✉️"
    },
    {
      type: "Phone",
      contact: "+371 12345678",
      icon: "📞"
    },
    {
      type: "Live Chat",
      contact: "Available 9:00-17:00",
      icon: "💬"
    }
  ];

  // Tutorial videos
  const tutorialVideos = [
    {
      title: "Getting Started",
      duration: "2:30",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
    },
    {
      title: "Using the AI Tutor",
      duration: "3:15",
      thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
    }
  ];

  const handleRoleSelect = (role) => {
    // For prototype, we'll just navigate to dashboard
    // In a real app, this would handle different role-specific flows
    navigate('/dashboard');
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        background: 'rgba(255, 255, 255, 0.9)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <button
          onClick={() => setActiveTab('role')}
          style={{
            ...tabButtonStyle,
            backgroundColor: activeTab === 'role' ? '#7e5bef' : '#e0c3fc',
            color: activeTab === 'role' ? '#fff' : '#333'
          }}
        >
          Get Started
        </button>
        <button
          onClick={() => setActiveTab('stories')}
          style={{
            ...tabButtonStyle,
            backgroundColor: activeTab === 'stories' ? '#7e5bef' : '#e0c3fc',
            color: activeTab === 'stories' ? '#fff' : '#333'
          }}
        >
          Success Stories
        </button>
        <button
          onClick={() => setActiveTab('support')}
          style={{
            ...tabButtonStyle,
            backgroundColor: activeTab === 'support' ? '#7e5bef' : '#e0c3fc',
            color: activeTab === 'support' ? '#fff' : '#333'
          }}
        >
          Support
        </button>
      </div>

      {/* Main Content */}
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Role Selection (Default Tab) */}
        {activeTab === 'role' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '3rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #7e5bef, #4caf50)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              ✨ EDUWORK
            </h1>
            
            <p style={{ 
              fontSize: '1.5rem', 
              marginBottom: '3rem',
              color: '#666',
              lineHeight: '1.6'
            }}>
              Transform your learning journey into real opportunities. 
              Every effort counts toward your future!
            </p>

            {/* Daily Quote */}
            <div style={{
              background: '#f8f9fa',
              padding: '1.5rem',
              borderRadius: '10px',
              marginBottom: '2rem',
              borderLeft: '4px solid #7e5bef'
            }}>
              <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>
                "{dailyQuote.quote}"
              </p>
              <p style={{ textAlign: 'right', color: '#666' }}>
                - {dailyQuote.author}
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <button
                onClick={() => handleRoleSelect('student')}
                style={roleButtonStyle}
              >
                <span style={{ fontSize: '2.5rem' }}>👩‍🎓</span>
                I am a Student
              </button>

              <button
                onClick={() => handleRoleSelect('teacher')}
                style={roleButtonStyle}
              >
                <span style={{ fontSize: '2.5rem' }}>👨‍🏫</span>
                I am a Teacher
              </button>

              <button
                onClick={() => handleRoleSelect('parent')}
                style={roleButtonStyle}
              >
                <span style={{ fontSize: '2.5rem' }}>👨‍👩‍👧‍👦</span>
                I am a Parent
              </button>
            </div>
          </div>
        )}

        {/* Success Stories Tab */}
        {activeTab === 'stories' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Featured Success Stories */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ marginTop: 0, color: '#7e5bef' }}>Featured Success Stories</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {successStories.map(story => (
                  <div key={story.id} style={{
                    background: '#fff',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <img 
                        src={story.image} 
                        alt={story.name}
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          objectFit: 'cover'
                        }}
                      />
                      <div>
                        <h3 style={{ margin: 0 }}>{story.name}</h3>
                        <p style={{ margin: 0, color: '#666' }}>{story.location}</p>
                      </div>
                    </div>
                    <p style={{ fontWeight: 'bold' }}>{story.achievement}</p>
                    <p style={{ color: '#666' }}>{story.story}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ marginTop: 0, color: '#7e5bef' }}>Upcoming Events</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {upcomingEvents.map(event => (
                  <div key={event.id} style={{
                    background: '#fff',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                      {event.icon}
                    </div>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>{event.title}</h3>
                    <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>
                      {event.date}
                    </p>
                    <p style={{ color: '#666' }}>{event.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Success Stories */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ marginTop: 0, color: '#7e5bef' }}>Local Success Stories</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                {localStories.map(story => (
                  <div key={story.id} style={{
                    background: '#fff',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      height: '200px',
                      background: `url(${story.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }} />
                    <div style={{ padding: '1.5rem' }}>
                      <h3 style={{ margin: '0 0 0.5rem 0' }}>{story.school}</h3>
                      <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>
                        {story.achievement}
                      </p>
                      <p style={{ color: '#666' }}>
                        {story.students} students impacted
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === 'support' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* FAQ Section */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ marginTop: 0, color: '#7e5bef' }}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqItems.map((item, index) => (
                  <div key={index} style={{
                    background: '#fff',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.question}</h3>
                    <p style={{ color: '#666', margin: 0 }}>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Options */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ marginTop: 0, color: '#7e5bef' }}>Support Options</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {supportOptions.map((option, index) => (
                  <div key={index} style={{
                    background: '#fff',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                      {option.icon}
                    </div>
                    <h3 style={{ margin: '0 0 0.5rem 0' }}>{option.type}</h3>
                    <p style={{ color: '#666', margin: 0 }}>{option.contact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tutorial Videos */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ marginTop: 0, color: '#7e5bef' }}>Tutorial Videos</h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {tutorialVideos.map((video, index) => (
                  <div key={index} style={{
                    background: '#fff',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{
                      height: '140px',
                      background: `url(${video.thumbnail})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        background: 'rgba(0,0,0,0.7)',
                        color: '#fff',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '0.8rem'
                      }}>
                        {video.duration}
                      </div>
                    </div>
                    <div style={{ padding: '1rem' }}>
                      <h3 style={{ margin: 0 }}>{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const tabButtonStyle = {
  padding: '0.75rem 1.5rem',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: '0.2s'
};

const roleButtonStyle = {
  padding: '1.5rem',
  borderRadius: '15px',
  border: 'none',
  backgroundColor: '#e0c3fc',
  color: '#333',
  cursor: 'pointer',
  fontSize: '1.2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  transition: '0.3s ease',
  boxShadow: '0 4px 15px rgba(224, 195, 252, 0.3)'
};

export default HomePage;
