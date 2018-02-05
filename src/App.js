import React, { Component } from 'react';
import video from './VIDEO_BG/bg.mp4'
import img from "./img/client-experience.jpg"
import CountDown from './Components/CountDown/CountDown';

import './App.css';
import './css/flexboxgrid.css'

class App extends Component {
  constructor() {
    super();

  }
  
  render() {
    return (
      <div className="App">
        <div className="v-header container">
      <div className="fullscreen-video-wrap">
        <video autoPlay="true" muted loop="true"> <source src={video} type="video/mp4"/></video>
      </div>
      <div className="header-overlay">
        <div className="header-content">


        {/* <!--  Header --> */}
        <header id="main-header">
          <div class="container ">
            <div class="row end-sm end-md end-lg middle-xs middle-sm  middle-md middle-lg">
              <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                <div class="row start-xs logo-div">
                <h1> <span className="logo">TST</span>Company</h1>                
                </div>
              </div>
              <div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                <nav id="navbar">
                  <ul>
                    <li class="items current"><a href="" style={{color:"white"}}>Home</a></li>
                    <li class="items"><a href="About.html" style={{color:"white"}}>About</a></li>
                    <li class="items"><a href="Products.html" style={{color:"white"}}>Products</a></li>
                    <li class="items"><a href="Contact.html" style={{color:"white"}}>Contact</a></li>
                    <li class="items"><a href="" style={{color:"white"}}>More</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
          <div className="mid-content">          
          <CountDown/>
          <h1>Welcome to <span className="primary-text">Techno Steam Traps</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam 
            possimus odio nam praesentium dolore at incidunt fugiat enim eligendi, 
            cum ad voluptatum! Doloremque voluptates commodi, distinctio harum iure, labore itaque!</p>
          <a href="" className="btn">Know More</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!--  test video Close--> */}


    {/* <!--  Product--> */}
    <section id="product">
      <div className="container">
        <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Products</h1>
            <p>That We Provide</p>

            {/* <!--  Row 1 --> */}
            <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <i className="fab fa-steam"></i>
                <h4>Thermostatic Steam Trap </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi?</p>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <i className="fab fa-steam"></i>
                <h4>Inverted Bucket Steam Strap</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi?</p>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <i className="fab fa-steam"></i>
                <h4>Ball Float Stream Strap</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi?</p>
              </div>
            </div>
            {/* <!--  Row 1 End--> */}

            {/* <!--  Row 2 --> */}
            <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <i className="fab fa-steam"></i>
                <h4>Easy Float Steam Trap </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi?</p>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <i className="fab fa-steam"></i>
                <h4>Thermodynamic Steam Strap</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi?</p>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <i className="fab fa-steam"></i>
                <h4>Air Traps</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi?</p>
              </div>
            </div>
            {/* <!--  Row 2 End--> */}

            {/* <!--  Row 3 --> */}
            <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <i className="fab fa-steam"></i>
                <h4>Condensate Recover Pumps </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi?</p>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <i className="fab fa-steam"></i>
                <h4>More...</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi?</p>
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <i className="fab fa-steam"></i>
                <h4>More...</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, eligendi?</p>
              </div>
            </div>
            {/* <!--  Row 3 End--> */}
          </div>
        </div>
      </div>
    </section>
    {/* <!--  Product closed--> */}

    {/* <!-- Cliets  --> */}
    <section id="clients">
      <div className="container">
        <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Clients</h1>
            <p>That We Provide</p>
        <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">

          {/* <!--  row 1--> */}
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div className="icoimg">
              <img src={img} />
              <div className="center">
                <i className="fas fa-user"></i>
                <h4>Client 1</h4>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          {/* <!--  row 1 end --> */}

          {/* <!--  row 1--> */}
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div className="icoimg">
              <img src={img} />
              <div className="center">
                <i className="fas fa-user"></i>
                <h4>Client 1</h4>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          {/* <!--  row 1 end --> */}

          {/* <!--  row 1--> */}
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div className="icoimg">
              <img src={img} />
              <div className="center">
                <i className="fas fa-user"></i>
                <h4>Client 1</h4>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          {/* <!--  row 1 end --> */}
        </div>
      </div>
    </div>
  </div>
    </section>
    {/* <!-- Clients  Closed--> */}

    {/* <!--  Quality and Policy --> */}
    <section id="qandp">
      <div className="container">
        <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Quality and Policy</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus nisi fugit ut atque rerum a praesentium illum maxime, eaque tempora, mollitia dolores odit quasi laboriosam? Suscipit distinctio illo molestias porro quam, nulla natus laudantium quis obcaecati enim, ipsa reiciendis itaque voluptatibus sequi magni reprehenderit ipsam odio aliquam rerum nostrum dignissimos!</p>
          </div>
        </div>
      </div>
    </section>
    {/* <!--  Quality and Policy Closed--> */}
    {/* <!--  Quality and Policy --> */}
    <section id="dealers">
      <div className="container">
        <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Dealers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus nisi fugit ut atque rerum a praesentium illum maxime, eaque tempora, mollitia dolores odit quasi laboriosam? Suscipit distinctio illo molestias porro quam, nulla natus laudantium quis obcaecati enim, ipsa reiciendis itaque voluptatibus sequi magni reprehenderit ipsam odio aliquam rerum nostrum dignissimos!</p>
          </div>
        </div>
      </div>
    </section>
    {/* <!--  Quality and Policy Closed--> */}

    {/* <!--  Qoutation--> */}
    <section className="qoutation">
      <div className="container">
        <div className="row center-xs center-sm center-md center-lg middle-xs middle-sm middle-md middle-lg">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1>Qoutation</h1>
          </div>
        </div>
      </div>

    </section>
    {/* <!--  Qoutation Closed--> */}

{/* <!--  Company --> */}
    <section className="company">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h1>Contact Us</h1>
            <ul className="contact-list">
              <li className="contact-items">
                <i className="fas fa-industry"></i>&nbsp;&nbsp;GK Engineerings
              </li>
              <li className="contact-items">
                <i className="fas fa-building"></i>Plot No.
              </li>
              <li className="contact-items">
                <i className="fas fa-mobile"></i>+9100000
              </li>
              <li className="contact-items">
                <i className="fas fa-envelope"></i>xyz@mail.com
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nulla eum ipsam optio cum non perspiciatis ea totam, saepe earum.</p>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <h1>News letter</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <form action="" className="contact">
              <input type="text" name="email" placeholder="Enter e-mail" />
              <button type="submit" value="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* <!--  Company closed --> */}

    {/* <!-- Footer --> */}
    <footer id="main-footer">
      <div className="container">
        <div className="row cernetr-xs center-sm center-md center-lg">
          <div className="col-xs-12 col-sm-12 col-md-12 col lg-12">
            <p>Copyright &copy; 2018 | Techno Steam Traps</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
    );
  }
}

export default App;
