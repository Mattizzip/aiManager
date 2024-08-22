import styles from './styles.module.css'
import { useState, useEffect } from 'react'

const SLIDES = [ 
            {'content': 
            <div className={styles.infoSlider}>
                <h1 className={styles.sliderPhrase}>Create amazing things</h1>
                <p className={styles.sliderSentence}>
                    with help of AI instruments
                </p>
            </div>},
  { type: 'video', src: 'video1.mp4', text: 'Generate inspiring video with OpenSora' },
  { type: 'video', src: 'video2.mp4', text: 'Create beautiful images via Stable Diffusion' },
  { type: 'video', src: 'video3.mp4', text: 'Improve your skills and productibvity with GPT 4' },
]

const SLIDE_INTERVAL = 3000;


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide +1) % SLIDES.length);
        }, SLIDE_INTERVAL);

        return () => clearInterval(intervalId);
    }, []) 
  return (
    <div className={styles.sliderContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {slide.content ? (
            slide.content
          ) : (
            <>
              {slide.type === 'video' && (
                <div className="video-slide">
                  <video src={slide.src} autoPlay muted loop />
                  <div className="video-text">{slide.text}</div>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;