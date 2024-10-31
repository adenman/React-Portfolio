export default function Resume() {
return (
      <div>
        <section className="about" id="about">
          <div className="about-img">
              <img src="/adenresume.PNG" alt="" />
          </div>
          <div>
            
          </div>
          <div className="about-content">
              <h2 className="heading">My <span>Resume</span></h2>
              <h3></h3>
              <p> 
              <div>
              <button className="btn" role="button">
                <a download="Aden-Resume.pdf" href="Aden-Resume.pdf" title="ImageName">
              Download
              </a>
              </button>
            
          </div>
              </p>
          </div>
        </section>
      </div>
    );
}