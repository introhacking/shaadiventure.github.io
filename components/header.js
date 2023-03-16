class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class='overlay'></div>
    <div class="mani_header-section">
    <a href="/">
    <img
    src="../images/wedding-logo.png"
    style="width: 110px; height: 60px"
    />
    </a>
    <div class="mani_manu-wrapper">
      <ul>
        <li class="mani-menu"><a href="/">HOME</a></li>
        <li class="mani-menu"><a href="/pages/about.html">ABOUT</a></li>
        <li class="mani-menu dropdown-item"><a href="/#">SERVICES</a>
        <i class="fa fa-angle-down"></i>
        <ul class="dropdown">
        <li><a href="/pages/wedding-management.html">Wedding Management</a></li>
        <li><a href="#">Decor Management</a></li>
        <li><a href="/pages/catering-management.html">Catering Management</a></li>
        <li><a href="#">Photography</a></li>
        <li><a href="#">Entertainment Management</a></li>
        <li><a href="#">Corporate Events</a></li>
        </ul>
        </li>
        <li class="mani-menu dropdown-item">
          <a href="/#">DESTINATION WEDDING PLANNING</a>
          <i class="fa fa-angle-down"></i>
          <ul class="dropdown">
          <li><a href="#">Wedding Management</a></li>
          <li><a href="#">Decor Management</a></li>
          <li><a href="#">Catering Management</a></li>
          <li><a href="#">Photography</a></li>
          <li><a href="#">Entertainment Management</a></li>
          <li><a href="#">Corporate Events</a></li></ul>
        </li>
        <li class="mani-menu"><a href="#">CAREER</a></li>
        <li class="mani-menu"><a href="/pages/contact.html">CONTACT US</a></li>
      </ul>
    </div>
    <div class='trigger_menu' id='clickTrigger'>
    <i class="fa fa-bars menu_bar" ></i>
    </div>
  </div>
  <div class='sidebar_menu-open'>
  <p id='closeMenu' class='closeMenu'><i class="fa fa-times"></i>  </p>
  <div class="mobile_menu-wrapper">
  <ul id='mobile_menu'>
        <li class="mobile_menu"><a href="/">HOME</a></li>
        <li class="mobile_menu"><a href="/pages/about.html">ABOUT</a></li>
        <li class="mobile_menu mobile_dropdown-item"><a href="#">SERVICES <i class="fa fa-angle-down"></i>
        </a>
        <ul class="mobile_dropdown">
        <li><a href="/pages/wedding-management.html">Wedding Management</a></li>
        <li><a href="#">Decor Management</a></li>
        <li><a href="/pages/catering-management.html">Catering Management</a></li>
        <li><a href="#">Photography</a></li>
        <li><a href="#">Entertainment Management</a></li>
        <li><a href="#">Corporate Events</a></li>
        </ul>
        </li>
        <li class="mobile_menu mobile_dropdown-item">
          <a href="#">DESTINATION WEDDING PLANNING <i class="fa fa-angle-down"></i></a>
          <ul class="mobile_dropdown">
          <li><a href="#">Wedding Management</a></li>
          <li><a href="#">Decor Management</a></li>
          <li><a href="#">Catering Management</a></li>
          <li><a href="#">Photography</a></li>
          <li><a href="#">Entertainment Management</a></li>
          <li><a href="#">Corporate Events</a></li></ul>
        </li>
        <li class="mobile_menu"><a href="/pages/contact.html">CONTACT US</a></li>
      </ul>
  </div>
  </div>
    `;
  }
}
customElements.define("my-header", myHeader);
// SIDEBAR MENU
class letConnectForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="info_form">
    <div class="form_center">
      <div class="form_background_manage">
        <div class="custom_style">
          <h2>Let's Discuss</h2>
          <span class="form_hide" id="form_HIDE">X</span>
        </div>
        <form>
          <div>
            <input
              type="text"
              id="info_name"
              name="name"
              placeholder="Name*"
            />
          </div>
          <div>
            <input
              type="text"
              id="info_phone"
              name="phone"
              placeholder="Phone*"
              onkeypress="return /[0-9]/i.test(event.key)"
            />
          </div>
          <div>
            <input
              type="email"
              id="info_email"
              name="email"
              placeholder="Email*"
            />
          </div>
          <div>
            <select class="custom_color">
              <option value="--Select your category--">
                --Select your category--
              </option>
              <option value="Wedding management">Wedding management</option>
              <option value="Catering management">Catering management</option>
              <option value="Decor management">Decor management</option>
              <option value="Entertainment management">
                Entertainment management
              </option>
              <option value="Photography">Photography</option>
              <option value="Corporate events">Corporate events</option>
            </select>
          </div>
          <div>
            <input type="text" id="city" name="city" placeholder="City*" />
          </div>
          <div>
            <input type="date" id="date" name="date" placeholder="Date*" />
          </div>
          <div>
            <select class="custom_color">
              <option value="--Number of Pax--">--Number of Pax--</option>
              <option value="20-100">20 - 100</option>
              <option value="100-300">100 - 300</option>
              <option value="300-500">300 - 500</option>
              <option value="500-1000">500 - 1000</option>
            </select>
          </div>
          <div>
            <select id="info_budget" class="custom_color">
              <option value="--Select your Budget--" selected>
                --Select your Budget--
              </option>
              <option value="Between 1 to 5 lakh">Between 1 to 5 lakh</option>
              <option value="Between 5 to 10 lakh">
                Between 5 to 10 lakh
              </option>
              <option value="10+ Lakh Above">10+ Lakh Above</option>
            </select>
            <span id="info_budgetErr"></span>
          </div>
          <div>
            <button>Let's Connect</button>
          </div>
        </form>
      </div>
    </div>
  </div>
    `;
  }
}
customElements.define("let-connect", letConnectForm);
