import React, {useEffect, useState} from 'react'


import './Header.css'


import { FaPhoneAlt,FaFacebookF,FaGooglePlusG,FaLinkedinIn,FaTwitter,FaRegEnvelope,FaSearch,FaBabyCarriage} from "react-icons/fa";
import {FaStar, } from "react-icons/fa6";
function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
    })
  return (
     
       <header className={`rows header navbar-static-top slideIn affix-top animated ${scrollPosition > 50 ? "fadeInDown affix animated" : ""}`} id="main_navbar">
         <div className="containers">
             <div className='rows  m0 social-info'>
                <ul className="social-icon">
                    <li>
                       <a href="#">
                       <FaFacebookF />
                            

                         
                       </a>
                    </li>
                    <li>
                       <a href="#">
                       <FaTwitter/>
                            
                         
                       </a>
                    </li>
                    <li>
                       <a href="#">
                       <FaGooglePlusG/>
                            
                         
                       </a>
                    </li>
                    <li>
                       <a href="#">
                       <FaLinkedinIn/>
                            
                         
                       </a>
                    </li>
                    <li className="tel">
                    <a href="tel:+1234567890">
                       <FaPhoneAlt/>
                          + (123) 456 7890 
                         
                       </a>
                    </li>
                    <li className="email">
                       <a href="#">
                       <FaRegEnvelope/>
                         info@woodworkshop  
                         
                       </a>
                    </li>
                </ul>
             </div>
         </div>
            
             <div className="logo_part">
                <div className="logo">
                <a href="index.html" className="brand_logo">
                <img src="images/header/logo.png" alt="logo image"/>
               </a>
                </div>
             </div>
             <div class="main-menu">
              <nav className="navbar navbar-default">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main_nav" aria-expanded="false">
                   <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
               </button>
                <div className="menu rows m0">
                     
                  <ul className="nav navbar-nav navbar-right visible-sm">
                  
                  <li className="dropdown">
                    
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                           <FaSearch/> 
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                
                                <form action="#" method="get" className="search-form">
                                                                    
                                    <input type="search"  className="form-control" placeholder="Type and Enter" />
                                </form>
                            </li>
                        </ul>
                    </li>
                    <li class="dropdown">
                     
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"
                           >
                          <FaBabyCarriage/>
                        </a>
                        <ul class="dropdown-menu cart-box ">
                            <li class="cart-header">
                                <h4>You have 2 Items In Your Cart.</h4>
                            </li>
                            <li class="cart-content">
                                <div class="img-box">
                                    <img src="images/header/cart.jpg" alt="Awesome Image"/>
                                </div>
                                <div class="content">
                                    <a href="product.html"><h5>BATTERY SCREWDRIVER</h5></a>
                                    <div class="rating">
                                         <FaStar/>
                                         <FaStar/>
                                         <FaStar/>
                                         <FaStar/>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <ul class="price">
                                        <li><span class="or-price">$39.99</span></li>
                                        <li><span class="sale-price">$24.5</span></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="cart-content">
                                <div class="img-box">
                                    <img src="images/header/cart.jpg" alt="Awesome Image"/>
                                </div>
                                <div class="content">
                                    <a href="product.html"><h5>BATTERY SCREWDRIVER</h5></a>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <ul class="price">
                                        <li><span class="or-price">$39.99</span></li>
                                        <li><span class="sale-price">$24.5</span></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="cart-footer">
                                <div class="total-price">
                                    <h4>Total price: <span>$73.5</span></h4>
                                </div>
                                <div class="checkout-box submit">
                                    <a class="" href="#">Checkout <i class="fa fa-shopping-cart"></i></a>
                                </div>
                            </li>
                        </ul>
                       
                        
                    </li>
                    
                                 

                  </ul>
                  <div className="collapse navbar-collapse" id="main_nav">
                  <ul class="nav navbar-nav">
                        <li class="dropdown active">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home</a>
                            <ul class="dropdown-menu">
                                <li><a href="index.html">Home Default</a></li>
                                <li><a href="landing-page.html">landing page</a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About Us</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">services</a>
                            <ul class="dropdown-menu">
                                <li><a href="service.html">services</a></li>
                                <li><a href="services-2.html">services 2</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">projects</a>
                            <ul class="dropdown-menu">
                                <li><a href="projects.html">projects</a></li>
                                <li><a href="projects2.html">projects 2</a></li>
                                <li><a href="projects-3.html">projects 3</a></li>
                                <li><a href="projects-details.html">projects details</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">pages</a>
                            <ul class="dropdown-menu">
                                <li><a href="testimonials.html">testimonial</a></li>
                                <li><a href="team.html">team</a></li>
                                <li><a href="faq.html">faq</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">blog</a>
                            <ul class="dropdown-menu">
                                <li><a href="blog.html">blog</a></li>
                                <li><a href="blog-details.html">blog details</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu">
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="product.html">Product Details</a></li>
                                <li><a href="cart.html">Cart Page</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">contact us</a></li>
                    </ul>           
                    <ul class="nav navbar-nav navbar-right hidden-xs hidden-sm">
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                              <FaSearch/>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <form action="#" method="get" class="search-form">
                                        <input type="search" class="form-control" placeholder="Type and Enter"/>
                                    </form>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <FaBabyCarriage/>
                            </a>
                            <ul class="dropdown-menu cart-box ">
                                <li class="cart-header">
                                    <h4>You have 2 Items In Your Cart.</h4>
                                </li>
                                <li class="cart-content">
                                    <div class="img-box">
                                        <img src="images/header/cart.jpg" alt="Awesome Image"/>
                                    </div>
                                    <div class="content">
                                        <a href="product.html"><h5>BATTERY SCREWDRIVER</h5></a>
                                        <div class="rating">
                                         <FaStar/>
                                         <FaStar/>
                                         <FaStar/>
                                         <FaStar/>
                                        </div>
                                        <ul class="price">
                                            <li><span class="or-price">$39.99</span></li>
                                            <li><span class="sale-price">$24.5</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="cart-content">
                                    <div class="img-box">
                                        <img src="images/header/cart.jpg" alt="Awesome Image"/>
                                    </div>
                                    <div class="content">
                                        <a href="product.html"><h5>BATTERY SCREWDRIVER</h5></a>
                                        <div class="rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                        <ul class="price">
                                            <li><span class="or-price">$39.99</span></li>
                                            <li><span class="sale-price">$24.5</span></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="cart-footer">
                                    <div class="total-price">
                                        <h4>Total price: <span>$73.5</span></h4>
                                    </div>
                                    <div class="checkout-box submit">
                                        <a class="" href="#">Checkout <i class="fa fa-shopping-cart"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                 </div>
                  </div>
              </nav>
        
    </div>
       </header>

      
  )
}

export default Header