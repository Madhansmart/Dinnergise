import React , { Component } from 'react';
import './Banner.css';
import '../../../node_modules/fontawesome/index.js';
import boxIcon1 from '../../assets/img/boxIcon1.png';
import boxIcon2 from '../../assets/img/boxIcon2.png';
import boxIcon3 from '../../assets/img/boxIcon3.png';
import icon1 from '../../assets/img/icon1.png';
import icon2 from '../../assets/img/icon2.png';
class Banner extends Component{

/*  bannerSectionContent = (step, imgSrc, para) => {
    return(
      <div className="col-md-3 banner-section-box text-center offset-md-1">
         <div className="btn btn-custom btn-banner-section-custom">{step}</div><p></p>
         <img src={imgSrc} alt="IMG" className="boxImg img-fluid"/>
         <p>{para}</p>
      </div>
    )
  }*/
    render(){
      return(
        <div className="Banner">
          <div className="section-content">
          <div className="row">
              <div className="col-md-7">
              <div className="text">
                 <h4>Healthy, nutritious and simply delicious</h4>
                 <p>All our food is made from the best locally sourced ingredients,lovingly<br />
                     cooked and beautifully presented</p>
                 <p><img src={icon1} alt="icon" className="icon"/>Refined sugar free</p>
                 <p><img src={icon2} alt="icon" className="icon"/>Gluten free</p>
              </div>
              </div>
            <div className="col-md-3 col-12 col-sm-12 offset-md-2">
                <div className="box">
                   <h3>Opening Hours & Delivery Area</h3>
                   <hr />
                    <p><span className="fa fa-clock-o"></span>&nbsp;
                    Monday To Thursday from <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30pm to 9.30 pm.</p>
                    <p><span className="fa fa-clock-o"></span>&nbsp;
                    Initially <b><i>Canary Wharf</i></b> only</p>
                </div>
              </div>
          </div>
          </div><br />
          <div className="banner-section">
              <h2>How It Works</h2><br />
              <div className="row text-center">
                  <div className="col-md-3 banner-section-box"><br />
                     <div className="btn btn-custom btn-banner-section-custom">Step 1</div><p></p>
                     <img src={boxIcon1} alt="IMG" className="boxImg img-fluid"/>
                     <p>Head to the order page and<br /> select your dinner.<br />Add any extras from our delicious range<br /> of breakfasts , snacks, and drinks</p>
                  </div>
                  <div className="col-md-3 banner-section-box offset-md-1"><br />
                     <div className="btn btn-custom btn-banner-section-custom">Step 2</div><p></p>
                     <img src={boxIcon2} alt="IMG" className="boxImg img-fluid"/>
                     <p>Click on the Shopping cart or checkout to<br /> pay for the order.<br /> While there you can choose the time slot<br /> for delivery today or any other day of the<br /> week</p>
                  </div>
                  <div className="col-md-3 banner-section-box offset-md-1"><br />
                     <div className="btn btn-custom btn-banner-section-custom">Step 3</div><p></p>
                     <img src={boxIcon3} alt="IMG" className="boxImg img-fluid"/>
                     <p>We deliver directly to your office within<br /> <b>45</b> to <b>60</b> minutes</p>
                  </div>
              </div>
          </div><center>
          <div className="btn orderBtn">ORDER NOW</div></center>
        </div>
      )
    }
}

export default Banner;
