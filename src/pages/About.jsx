import { useEffect, useRef } from "react";

export default function About() {
  const textElementRef = useRef(null);

  useEffect(() => {
    const texts = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'React'];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenTexts = 1000;
    const textElement = textElementRef.current;

    function type() {
      if (charIndex < texts[index].length) {
        textElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, delayBetweenTexts);
      }
    }

    function erase() {
      if (charIndex > 0) {
        textElement.textContent = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(type, typingSpeed);
      }
    }

    type();

    return () => {
      // Add cleanup if needed
    };
  }, []);

  return (
    <div>
      <section className="about" id="about">
        <div className="about-img">
            <img src="/IMG_8883.jpg" alt="" />
        </div>
        <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>My skills: <span className="multiple-text" ref={textElementRef}></span></h3>
            <p>I am a passionate web developer dedicated to creating seamless, user-friendly digital experiences. With a foundation in front-end and back-end technologies, I blend creativity with technical expertise to bring innovative ideas to life.
                My journey in web development began with a fascination for how things work behind the scenes of the websites we use every day. This curiosity led me to immerse myself in a bootcamp which covered languages like HTML, CSS, and JavaScript, and explore frameworks such as React and Vue.js. On the server side, I work with technologies like Node.js and Express.js to build robust, scalable applications.
            </p>
        </div>
      </section>
    </div>
  );
}