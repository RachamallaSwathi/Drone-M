import React from 'react' 

function Header() {
    return (
        <div>
            <header class="">
            <div class="flex container">
                    <a class="brand" href="#"><span class="color-red">-</span>Drone</a>
               <nav class="nav-bar">
                  <ul class="flex">
                      <li><a href="#">HOME</a></li>
                      <li><a href="#">ABOUT US</a></li>
                      <li><a href="#">SERVICES</a></li>
                      <li><a href="#">PRODUCTS</a></li>
                      <li><a href="#">TRAINING</a></li>
                      <li><a href="#">CONTACT</a></li>
                 </ul>
               </nav>
            </div>
        
        </header>
        <div class="social-media flex column">
               <a href="www.facebook.com"><i class="fa-brands fa-facebook-square"></i></a>
               <a href="www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
               <a href="www.youtube.com"><i class="fa-brands fa-youtube"></i></a>
               <a href="www.linkdin.com"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <section class="container">
            <div class="hero">
                <img src="./assets/image/agri.png" alt=""/>
            </div>
        </section>

        <section class="container">
            <div class="basic-info flex justify-between data-display">
                <div class="p-1">
                    <span>200,000+</span>
                    <h6 class="text-center">Customer Flights</h6>
                </div>
                <div class="p-1">
                    <span>200,000+</span>
                    <h6 class="text-center">Customer Flights</h6>
                </div>
                <div class="p-1">
                    <span>200,000+</span>
                    <h6 class="text-center">Customer Flights</h6>
                </div>
                <div class="p-1">
                    <span>200,000+</span>
                    <h6 class="text-center">Customer Flights</h6>
                </div>
            </div>
            
            <div class="drone-info flex">
                <div class=" flex-48">
                    <img class="width-full" src="./assets/image/drones_in_agriculture-300x211.png" alt=""/>
                </div>    

                <div class="flex column flex-48">
                    <div>
                        <h4 class="sub-heading">SPRAY</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto voluptatibus? Atque tempora nobis corporis itaque mollitia, sed nisi, soluta dicta reiciendis repudiandae quidem assumen</p>
                        <a href="#" class="btn">Book HERE</a>
                    </div>
                    <div>
                        <h4 class="sub-heading">DRONE</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, iusto voluptatibus? Atque tempora nobis corporis itaque mollitia, sed nisi, soluta dicta reiciendis repudiandae quidem assumen</p>
                        <a href="#" class="btn">ENQUIRE NOW</a>
                    </div>    
                </div>
            </div>

        </section>
       
    
        <section class="container">
            <div>
                 <h2 class="primary-heading">OUR PRODUCTS</h2>
                 <hr class="underline-heading"/>
                 <p class="heading-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse explicabo ut nisi recusandae eius quibusdam excepturi, magnam sint non, earum quis quos optio distinctio qui suscipit accusamus! Dolor, cum!</p>

            </div>
            <div class="flex hidden justify-between ">
                <div class="product flex-22"><img src="" alt="MD -5Q"/></div>
                <div class="product flex-22"><img src="" alt="MD - 10Q"/></div>
                <div class="product flex-22"><img src="" alt="MD - 16P"/></div>
                <div class="product flex-22"><img src="" alt="MD - 10H"/></div>
                <div class="product flex-22"></div>
                <div class="product flex-22"></div>

            </div>
            <div class="center">
                <div class="dot active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>

        </section>

        
        <section class="container">
            <div>
                <h2 class="primary-heading">LATEST NEWS</h2>
                <hr class="underline-heading"/>
                <p class="heading-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse explicabo ut nisi recusandae eius quibusdam excepturi, magnam sint non, earum quis quos optio distinctio qui suscipit accusamus! Dolor, cum!</p>
        
            </div>
                    
            <div class="flex hidden justify-between ">
                <div class="news flex-17">
                    <div class="playbtn"></div>
                </div>
                <div class="news flex-17"></div>
                <div class="news flex-17"></div>
                <div class="news flex-17"></div>
                <div class="news flex-17"></div>
                <div class="news flex-17"></div>
        
            </div>
        
        </section>

        
        

         <section class="container">
                <div>
                    <h2 class="primary-heading">TESTIMONIALS</h2>
                    <hr class="underline-heading"/>
                    <p class="heading-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse explicabo ut nisi recusandae eius quibusdam excepturi, magnam sint non, earum quis quos optio distinctio qui suscipit accusamus! Dolor, cum!</p>
                </div>
                <div class="testimonials">

                  <div class="flex">
                      <div class="client-pic flex-17">
                        <img src="" alt="Client image"/>
                      </div>
    
                      <div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos rem corrupti eius eveniet veritatis  voluptates!</p>
                          <p> illum ipsa beatae, sit, quasi dolor atque nemo deleniti, quis nesciunt sequi alias. Aut, voluptates!</p>
                      </div>
    
                  </div>
             </div>
          
         </section>

         
        <section class="container">
            <div>
                <h2 class="primary-heading">OUR CLIENTS</h2>
                <hr class="underline-heading"/>
                <p class="heading-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse explicabo ut nisi recusandae eius quibusdam excepturi, magnam sint non, earum quis quos optio distinctio qui suscipit accusamus! Dolor, cum!</p>
        
            </div>
                    
            <div class="flex hidden justify-between ">
                <div class="client flex-17"></div>
                <div class="client flex-17"></div>
                <div class="client flex-17"></div>
                <div class="client flex-17"></div>
                <div class="client flex-17"></div>
                <div class="client flex-17"></div>
        
            </div>
        
        </section>

    

        <section className="container">
            <div>
                <h2 className="primary-heading">CONTACT US</h2>
                <hr className="underline-heading" />
                <p className="heading-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse explicabo ut nisi recusandae eius quibusdam excepturi, magnam sint non, earum quis quos optio distinctio qui suscipit accusamus! Dolor, cum!</p>
        
            </div>

            <div>
                <form action="#" className="contact-form">
                    <fieldset className=" flex wrap">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email Address"/>
                        <input type="Number" name="phone" placeholder="Phone"/>
                        <textarea name="message" id="" cols="30" rows="3"></textarea>

                    </fieldset>
                </form>
            </div>
            </section>
    

    <footer class="container">
        <nav class="nav-links">
            <ul class="flex">
                <li><a href="#">CONTACT US</a></li>
                <li><a href="#">PAGES</a></li>
                <li><a href="#">INFO</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </nav>

        <div class="zero-auto">
            <h4 class="text-center">SUBSCRIBE</h4>
            <form action="" class="center">
                 <input type="email" name="email" placeholder="Email Address" /> 
                 <button>Submit</button>
            </form>
           
        </div>
    </footer>
        </div>
    )
}

export default Header