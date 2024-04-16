function Header(){
  return(
  <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <div className="container-xxl">
      <a href="#intro" className="navbar-brand"><span className="fw-bold text-warning">Fatemeh Afkar-Pro Tutorials</span>
      </a>
      
      
      {/*togglebutton for mobile nav*/}
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

      {/*navbar links*/}

      <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#topics">About The Tutorial</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#faq">Your FAQs</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#contact-us">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sign-up">Sign Up</a>
          </li>
          <li className="nav-item d-md-none">
            <a className="nav-link" href="#pricing">Pricing</a>
          </li>
          <li className="nav-item ms-2 d-none d-md-inline">
            <a className="btn btn-secondary" href="#pricing">buy now</a>
          </li>
        </ul>
      </div>    
     </div>
  </nav>
  )}
  export default Header;