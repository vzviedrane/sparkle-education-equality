import React, { useState } from 'react';

function RewardsPage() {
  const [userPoints, setUserPoints] = useState(320);
  const [activeCategory, setActiveCategory] = useState('all');

  // Friends' recent rewards
  const friendsRewards = [
    { name: 'Anna', reward: '🎧 Premium Headphones', date: '2 hours ago' },
    { name: 'Markus', reward: '📚 Book Bundle', date: '1 day ago' },
    { name: 'Elina', reward: '🎵 Spotify Premium', date: '2 days ago' }
  ];

  // Earning tips
  const earningTips = [
    { tip: 'Complete daily missions', points: '+20 points daily' },
    { tip: 'Maintain a 7-day streak', points: '+50 bonus points' },
    { tip: 'Help other students', points: '+10 points per help' },
    { tip: 'Participate in study groups', points: '+30 points per session' }
  ];

  // Rewards organized by category
  const rewards = {
    digital: [
      {
        id: 1,
        name: 'Spotify Premium',
        points: 400,
        description: '3 months of ad-free music streaming',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
        icon: '🎵',
        claimed: userPoints >= 400,
        estimatedTime: '2 weeks',
        availability: 'Unlimited',
        claimedCount: 45,
        brandColor: '#1DB954'
      },
      {
        id: 2,
        name: '📱 Premium Features',
        points: 300,
        description: 'Unlock advanced learning features',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        claimed: userPoints >= 300,
        estimatedTime: '10 days',
        availability: 'Unlimited',
        claimedCount: 32
      }
    ],
    physical: [
      {
        id: 3,
        name: '🎧 Premium Headphones',
        points: 200,
        description: 'High-quality wireless headphones for your study sessions',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        claimed: userPoints >= 200,
        estimatedTime: '1 week',
        availability: 'Limited (10 left)',
        claimedCount: 15
      },
      {
        id: 4,
        name: '📚 Book Bundle',
        points: 600,
        description: 'Collection of best-selling educational books',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        claimed: userPoints >= 600,
        estimatedTime: '3 weeks',
        availability: 'Limited (5 left)',
        claimedCount: 8
      }
    ],
    experiences: [
      {
        id: 5,
        name: '🎓 Study Workshop',
        points: 500,
        description: 'Exclusive study skills workshop with experts',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        claimed: userPoints >= 500,
        estimatedTime: '2 weeks',
        availability: 'Limited (20 spots)',
        claimedCount: 12
      }
    ],
    opportunities: [
      {
        id: 6,
        name: '🎓 University Scholarship',
        points: 10000,
        description: 'Guaranteed scholarship application review at partner universities',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        claimed: userPoints >= 10000,
        estimatedTime: '6 months',
        availability: 'Limited (5 per year)',
        claimedCount: 2,
        requirements: 'Maintain 90%+ accuracy for 3 months'
      },
      {
        id: 7,
        name: '💼 Guaranteed Interview',
        points: 8000,
        description: 'Guaranteed interview with top tech companies',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        claimed: userPoints >= 8000,
        estimatedTime: '4 months',
        availability: 'Limited (10 per year)',
        claimedCount: 3,
        requirements: 'Complete all advanced courses'
      },
      {
        id: 8,
        name: '🏛️ Budget Place',
        points: 15000,
        description: 'Guaranteed budget place at partner universities',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
        claimed: userPoints >= 15000,
        estimatedTime: '1 year',
        availability: 'Limited (3 per year)',
        claimedCount: 1,
        requirements: 'Maintain 95%+ accuracy for 6 months'
      }
    ]
  };

  // Local partnerships
  const localPartnerships = [
    {
      id: 1,
      name: 'Local Bookstore',
      reward: '20% discount on educational books',
      points: 500,
      image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      name: 'Tech Store',
      reward: 'Free laptop accessories',
      points: 1000,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  // Add upcoming rewards data
  const upcomingRewards = [
    {
      id: 9,
      name: 'Netflix Premium',
      points: 500,
      description: '1 month of ad-free streaming',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png',
      releaseDate: 'Next month',
      brandColor: '#E50914'
    },
    {
      id: 10,
      name: 'Gaming Console',
      points: 2000,
      description: 'Latest gaming console for educational games',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      releaseDate: 'In 2 months',
      brandColor: '#0070d1'
    },
    {
      id: 11,
      name: 'Study Abroad Program',
      points: 12000,
      description: '2-week study program in partner universities',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      releaseDate: 'Next semester',
      brandColor: '#4a148c'
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
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          marginBottom: '2rem',
          color: '#4a148c',
          textAlign: 'center'
        }}>
          🏆 Your Rewards
        </h1>

        {/* Points Display */}
        <div style={{
          background: '#fff',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>Your Points</h2>
          <div style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#7e5bef'
          }}>
            ⭐ {userPoints}
          </div>
        </div>

        {/* Earning Tips */}
        <div style={{
          background: '#fff',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ marginBottom: '1rem' }}>💡 Quick Ways to Earn Points</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {earningTips.map((tip, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.5rem',
                background: '#f8f9fa',
                borderRadius: '8px'
              }}>
                <span>{tip.tip}</span>
                <span style={{ color: '#4caf50', fontWeight: 'bold' }}>{tip.points}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          overflowX: 'auto',
          padding: '0.5rem'
        }}>
          <button
            onClick={() => setActiveCategory('all')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              backgroundColor: activeCategory === 'all' ? '#7e5bef' : '#f0f0f0',
              color: activeCategory === 'all' ? 'white' : '#333',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            All Rewards
          </button>
          <button
            onClick={() => setActiveCategory('digital')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              backgroundColor: activeCategory === 'digital' ? '#7e5bef' : '#f0f0f0',
              color: activeCategory === 'digital' ? 'white' : '#333',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Digital
          </button>
          <button
            onClick={() => setActiveCategory('physical')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              backgroundColor: activeCategory === 'physical' ? '#7e5bef' : '#f0f0f0',
              color: activeCategory === 'physical' ? 'white' : '#333',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Physical
          </button>
          <button
            onClick={() => setActiveCategory('experiences')}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              backgroundColor: activeCategory === 'experiences' ? '#7e5bef' : '#f0f0f0',
              color: activeCategory === 'experiences' ? 'white' : '#333',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Experiences
          </button>
        </div>

        {/* High-Value Opportunities Section */}
        <div style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #4a148c, #7e5bef)',
          borderRadius: '12px',
          color: 'white'
        }}>
          <h2 style={{ 
            marginBottom: '1.5rem',
            fontSize: '1.8rem',
            textAlign: 'center'
          }}>
            🎯 High-Value Opportunities
          </h2>
          <p style={{
            textAlign: 'center',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            These exclusive opportunities require significant dedication and consistent performance
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {rewards.opportunities.map(opportunity => (
              <div key={opportunity.id} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <h3 style={{ 
                  marginBottom: '1rem',
                  fontSize: '1.3rem'
                }}>
                  {opportunity.name}
                </h3>
                <p style={{ 
                  marginBottom: '1rem',
                  opacity: 0.9
                }}>
                  {opportunity.description}
                </p>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}>
                  <strong>Requirements:</strong> {opportunity.requirements}
                </div>
                <div style={{
                  display: 'grid',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Points Needed:</span>
                    <span style={{ fontWeight: 'bold' }}>{opportunity.points}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Estimated Time:</span>
                    <span>{opportunity.estimatedTime}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Availability:</span>
                    <span>{opportunity.availability}</span>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#ffd700'
                  }}>
                    {Math.min(100, (userPoints / opportunity.points) * 100).toFixed(1)}% Progress
                  </div>
                  <button
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      backgroundColor: opportunity.claimed ? '#4caf50' : 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      border: 'none',
                      cursor: opportunity.claimed ? 'default' : 'pointer',
                      opacity: opportunity.claimed ? 0.7 : 1
                    }}
                    disabled={opportunity.claimed}
                  >
                    {opportunity.claimed ? 'Claimed' : 'Learn More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Rewards Section */}
        <div style={{
          marginBottom: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, #2c3e50, #3498db)',
          borderRadius: '12px',
          color: 'white'
        }}>
          <h2 style={{ 
            marginBottom: '1.5rem',
            fontSize: '1.8rem',
            textAlign: 'center'
          }}>
            🚀 Upcoming Rewards
          </h2>
          <p style={{
            textAlign: 'center',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Exciting new rewards coming soon!
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {upcomingRewards.map(reward => (
              <div key={reward.id} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  {reward.image.startsWith('http') ? (
                    <img 
                      src={reward.image} 
                      alt={reward.name}
                      style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'contain'
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: '2rem' }}>{reward.image}</span>
                  )}
                  <h3 style={{ 
                    margin: 0,
                    fontSize: '1.3rem'
                  }}>
                    {reward.name}
                  </h3>
                </div>
                <p style={{ 
                  marginBottom: '1rem',
                  opacity: 0.9
                }}>
                  {reward.description}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '1rem'
                }}>
                  <div style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    fontSize: '0.9rem'
                  }}>
                    {reward.releaseDate}
                  </div>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#ffd700'
                  }}>
                    {reward.points} Points
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Rewards Section */}
        <h2 style={{ 
          marginBottom: '1.5rem',
          color: '#4a148c',
          textAlign: 'center'
        }}>
          🎁 Regular Rewards
        </h2>

        {/* Rewards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {(activeCategory === 'all' 
            ? [...rewards.digital, ...rewards.physical, ...rewards.experiences]
            : rewards[activeCategory]
          ).map(reward => (
            <div key={reward.id} style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              {/* Reward Image */}
              <div style={{
                height: '200px',
                background: `url(${reward.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                {reward.claimed && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#4caf50',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '20px',
                    fontSize: '0.8rem'
                  }}>
                    Claimed! 🎉
                  </div>
                )}
              </div>

              {/* Reward Info */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ 
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  {reward.name === 'Spotify Premium' ? (
                    <img 
                      src={reward.image} 
                      alt="Spotify" 
                      style={{ 
                        width: '24px', 
                        height: '24px',
                        objectFit: 'contain'
                      }} 
                    />
                  ) : (
                    <span>{reward.icon || '🎁'}</span>
                  )}
                  {reward.name}
                </h3>
                <p style={{ 
                  color: '#666',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  {reward.description}
                </p>
                {reward.requirements && (
                  <div style={{
                    background: '#f8f9fa',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    fontSize: '0.9rem'
                  }}>
                    <strong>Requirements:</strong> {reward.requirements}
                  </div>
                )}
                <div style={{
                  display: 'grid',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Estimated Time:</span>
                    <span style={{ color: '#7e5bef' }}>{reward.estimatedTime}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Availability:</span>
                    <span style={{ color: '#666' }}>{reward.availability}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Claimed by:</span>
                    <span style={{ color: '#666' }}>{reward.claimedCount} students</span>
                  </div>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#7e5bef'
                  }}>
                    {reward.points} Points
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        backgroundColor: reward.claimed ? '#4caf50' : '#7e5bef',
                        color: 'white',
                        border: 'none',
                        cursor: reward.claimed ? 'default' : 'pointer',
                        opacity: reward.claimed ? 0.7 : 1
                      }}
                      disabled={reward.claimed}
                    >
                      {reward.claimed ? 'Claimed' : 'Claim Reward'}
                    </button>
                    <button
                      style={{
                        padding: '0.5rem',
                        borderRadius: '50%',
                        backgroundColor: '#f0f0f0',
                        color: '#333',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      📤
                    </button>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{
                height: '4px',
                background: '#eee',
                position: 'relative'
              }}>
                <div style={{
                  width: `${Math.min(100, (userPoints / reward.points) * 100)}%`,
                  height: '100%',
                  background: '#7e5bef',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Partnerships */}
        <h2 style={{ marginBottom: '1rem' }}>🤝 Local Partnerships</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {localPartnerships.map(partner => (
            <div key={partner.id} style={{
              background: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                height: '150px',
                background: `url(${partner.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{partner.name}</h3>
                <p style={{ 
                  color: '#666',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  {partner.reward}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#7e5bef'
                  }}>
                    {partner.points} Points
                  </div>
                  <button
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      backgroundColor: '#7e5bef',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Friends' Recent Rewards */}
        <h2 style={{ marginBottom: '1rem' }}>👥 Friends' Recent Rewards</h2>
        <div style={{
          background: '#fff',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          {friendsRewards.map((friend, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.5rem 0',
              borderBottom: index < friendsRewards.length - 1 ? '1px solid #eee' : 'none'
            }}>
              <div>
                <span style={{ fontWeight: 'bold' }}>{friend.name}</span> claimed {friend.reward}
              </div>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>{friend.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RewardsPage;
