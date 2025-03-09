import { useState, useEffect } from 'react';

const BellSchedule = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const schedule = [
    { period: '1st Period', time: '8:00 AM - 8:50 AM' },
    { period: '2nd Period', time: '8:55 AM - 9:45 AM' },
    { period: '3rd Period', time: '9:50 AM - 10:40 AM' },
    { period: 'Break', time: '10:40 AM - 10:55 AM' },
    { period: '4th Period', time: '11:00 AM - 11:50 AM' },
    { period: '5th Period', time: '11:55 AM - 12:45 PM' },
    { period: 'Lunch', time: '12:45 PM - 1:30 PM' },
    { period: '6th Period', time: '1:35 PM - 2:25 PM' },
    { period: '7th Period', time: '2:30 PM - 3:20 PM' }
  ];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
      caption: 'Students in Class'
    },
    {
      url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80',
      caption: 'Break Time Activities'
    },
    {
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
      caption: 'Sports and Recreation'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
      caption: 'Library Study Time'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bell-schedule">
      <div className="container">
        <h2 className="fade-in">Bell Schedule</h2>
        <div className="schedule-carousel-wrapper">
          <div className="carousel-container">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image.url})` }}
              />
            ))}
          </div>
          <div className="schedule-overlay slide-in-left">
            <div className="schedule-content">
              <div className="schedule-table">
                <div className="schedule-header">
                  <span>Period</span>
                  <span>Time</span>
                </div>
                {schedule.map((item, index) => (
                  <div 
                    key={index} 
                    className="schedule-row fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="period">{item.period}</span>
                    <span className="time">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BellSchedule; 