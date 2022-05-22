import React from 'react';
import './style.css';
import vid1 from "./images/vid-1.mp4"
import g1 from "./images/g-1.jpg"
import g2 from "./images/g-2.jpg"
import g3 from "./images/g-3.jpg"
import g4 from "./images/g-4.jpg"
import g5 from "./images/g-5.jpg"
import g6 from "./images/g-6.jpg"
import pic1 from "./images/pic1.png"
import contactimg from "./images/contact-img.svg"

const FrontPage = () => {
    return ( 
        <div>
        <section className="home" id="home">
          <div className="content">
            <h3>adventure is worthwhile</h3>
            <p>dicover new places with us, read experiences, get trip guidance</p>
            <a href="/auth" className="btn">Dive in</a>
          </div>
          <div className="video-container">
            <video src={vid1} id="video-slider" loop autoPlay muted />
          </div>
        </section>
        {/* home section ends */}
        {/* services section starts  */}
        <section className="services" id="services">
          <h1 className="heading">
            <span>s</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
          </h1>
          <div className="box-container">
            <div className="box">
              <i className="fas fa-hotel" />
              <h3>Trip experiences</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className="box">
              <i className="fas fa-utensils" />
              <h3>Plan your trip</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
            <div className="box">
              <i className="fas fa-globe-asia" />
              <h3>Photo Gallery</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore commodi earum, quis voluptate exercitationem ut minima itaque iusto ipsum corrupti!</p>
            </div>
          </div>
        </section>
        {/* services section ends */}
        {/* gallery section starts  */}
        <section className="gallery" id="gallery">
          <h1 className="heading">
            <span>g</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>r</span>
            <span>y</span>
          </h1>
          <div className="box-container">
            <div className="box">
              <img src={g5} alt="" />
              <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
              </div>
            </div>
            <div className="box">
              <img src={g6} alt="" />
              <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
              </div>
            </div>
            <div className="box">
              <img src={g1} alt="" />
              <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
              </div>
            </div>
            <div className="box">
              <img src={g2} alt="" />
              <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
              </div>
            </div>
            <div className="box">
              <img src={g3} alt="" />
              <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
              </div>
            </div>
            <div className="box">
              <img src={g4} alt="" />
              <div className="content">
                <h3>amazing places</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tenetur.</p>
                <a href="#" className="btn">see more</a>
              </div>
            </div>
          </div>
        </section>
        {/* gallery section ends */}
        {/* review section starts  */}
        <section className="review" id="review">
          <h1 className="heading">
            <span>r</span>
            <span>e</span>
            <span>v</span>
            <span>i</span>
            <span>e</span>
            <span>w</span>
          </h1>
          <div className="swiper-container review-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="box">
                  <img src={pic1}alt="" />
                  <h3>Hena Singh</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores dolorum enim sint quod ipsam distinctio molestias consectetur ducimus beatae, reprehenderit exercitationem!</p>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* review section ends */}
        {/* contact section starts  */}
        <section className="contact" id="contact">
          <h1 className="heading">
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>a</span>
            <span>c</span>
            <span>t</span>
          </h1>
          <div className="row">
            <div className="image">
              <img src={contactimg} alt="" />
            </div>
            <form action>
              <div className="inputBox">
                <input type="text" placeholder="name" />
                <input type="email" placeholder="email" />
              </div>
              <div className="inputBox">
                <input type="number" placeholder="number" />
                <input type="text" placeholder="subject" />
              </div>
              <textarea placeholder="message" name id cols={30} rows={10} defaultValue={""} />
              <input type="submit" className="btn" defaultValue="send message" />
            </form>
          </div>
        </section>
        {/* contact section ends */}
        {/* footer section  */}
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>about us</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas magni pariatur est accusantium voluptas enim nemo facilis sit debitis.</p>
            </div>
            <div className="box">
              <h3>quick links</h3>
              <a href="#">home</a>
              <a href="#">Trips</a>
              <a href="#">Plan My Trip</a>
              <a href="#">Gallery</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="box">
              <h3>follow us</h3>
              <a href="https://www.instagram.com/address.bus/">Instagram</a>
            </div>
          </div>
          <h1 className="credit"> <span> PlanMyTrip</span> | all rights reserved! </h1>
        </section>
      </div>
    )
}

export default FrontPage;