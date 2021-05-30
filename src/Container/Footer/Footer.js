import './Footer.css';
// import Link from '../../Components/Link/Link';
// import Social from '../../Components/Social/Social';
// import Team from '../../Components/Team/Team';
import HumbleLogo from '../../assets/Humble-logo.png'
import ContactUs from '../HomePage/ContactUs/ContactUs'


function Footer() {
  
  return (
    <footer class="footer">
  	 <div class="footer__container">
  	 	<div class="footer__row">
           <div class="footer__col">
  	 			<img src={HumbleLogo} className='footer__logo' alt='Humble' />
  	 		</div>
  	 		<div class="footer__col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="/">Home</a></li>
                    <li><a href="/aboutus">About Us</a></li>
  	 				<li><a href="/services">Our Services</a></li>
  	 				<li><a href='/contactus'>Contact Us</a></li>
					<li><a href='/team'>Team</a></li>
  	 			</ul>
  	 		</div>
  	 		{/* <div class="footer__col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div> */}
  	 		{/* <div class="footer__col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div> */}
  	 		<div class="footer__col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

  );
}

export default Footer;
