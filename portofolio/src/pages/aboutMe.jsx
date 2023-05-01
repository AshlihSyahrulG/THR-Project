import img from "../assets/img1.png"

function AboutMe(){
    return (
      <>
          <div>
          <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src={img} alt="img" style={{height:"100%"}} />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">About <span>me</span></h1>
          <h2>Muhammadiyah University of Malang</h2>
          <p>Hello, my name is Ashlih Syahrul Ghifari, I am a graduate of electrical engineering at the Muhammadiyah University of Malang, in early 2023 I was interested in learning about programming, then I decided to join the Hacktiv8 bootcamp to learn new things about programming. </p>
        </div>
      </div>
    </section>
      </div>
      </>
     
    )
}

export default AboutMe;