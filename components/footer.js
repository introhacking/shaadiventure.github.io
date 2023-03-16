class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="mani_footer-wrapper">
        <div class="mani_footer-title mani_footer-service">
          <h2>Services</h2>
          <ul>
            <li>
              <a href="#"
                ><i class="fa fa-chevron-right"></i>Wedding Management</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-chevron-right"></i>Decor Management</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-chevron-right"></i>Catering Management</a
              >
            </li>
            <li>
              <a href="#"><i class="fa fa-chevron-right"></i>Photography</a>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-chevron-right"></i>Entertainment Management</a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-chevron-right"></i>Corporate Events</a
              >
            </li>
          </ul>
        </div>
        <div class="mani_footer-title mani_footer-more">
          <h2>Know More</h2>
          <ul>
            <li>
              <a href="#"><i class="fa fa-chevron-right"></i>About us</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-chevron-right"></i>Privacy Policy</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-chevron-right"></i>Business Query</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-chevron-right"></i>Contact us</a>
            </li>
          </ul>
        </div>
        <div class="mani_footer-title mani_footer-follow">
          <h2>Follow us</h2>
          <ul class="mani_social-link">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
            <a href="#"><i class="fa fa-pinterest"></i></a>
            <a href="#"><i class="fa fa-youtube"></i></a>
          </ul>
          <div>
            <h2>Contact :</h2>
            <ul>
              <li><a href="#" type='tel'><i class="fa fa-volume-control-phone"></i>
              <span>+91-9667700828</span></a></li>
              <li><a href="#"><i class="fa fa-envelope-o"></i>
              <span>info@shaadiventures.com</span></a></li>
              <li><a href="#"><i class="fa fa-map-marker"></i>
              <span
                >Plot no.107,Vyapar Marg,D-Block,Sector-2,Noida,Uttar
                Pradesh 201301</span
              ></a></li>
            </ul>
          </div>
        </div>
        <div class="mani_footer-title mani_footer-newletter">
          <p>Let's connect today</p>
          <input placeholder="Email" />
          <div class="mani_footer-btn">
            <button>Submit</button>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("my-footer", myFooter);
