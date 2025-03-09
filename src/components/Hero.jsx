import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
      title: 'Welcome to Stan School',
      description: 'Nurturing Tomorrow\'s Leaders Today'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
      title: 'Modern Learning Environment',
      description: 'State-of-the-art facilities for optimal learning'
    },
    {
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80',
      title: 'Beautiful Campus',
      description: 'A perfect setting for academic excellence'
    },
    {
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80',
      title: 'STEM Education',
      description: 'Fostering innovation and scientific thinking'
    },
    {
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
      title: 'Sports Excellence',
      description: 'Developing athletic talents and team spirit'
    },
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
      title: 'Arts & Culture',
      description: 'Nurturing creativity and artistic expression'
    },
    {
      image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80',
      title: 'Library Resources',
      description: 'Extensive collection for research and learning'
    },
    {
      image: 'https://images.unsplash.com/photo-1511377107391-116a9d5d20b5?auto=format&fit=crop&q=80',
      title: 'Technology Integration',
      description: 'Preparing students for the digital age'
    },
    {
      image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&q=80',
      title: 'Student Life',
      description: 'Creating memories and lifelong friendships'
    },
    {
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
      title: 'Community Spirit',
      description: 'Building strong relationships and values'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 