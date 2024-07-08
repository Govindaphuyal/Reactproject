function Footer() {
  return (
    <>
    <footer className="footer">
     <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>We are</h4>
          <ul>
            <li><a href="#">about us</a></li>
            <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/govinda.phuyal.79230"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/govinda-phuyal-222344203"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
     </div>
     <p>&copy;{new Date().getFullYear()} Govinda Phuyal | All Rights Reserved</p>
  </footer>
  </>
  )
}

export default Footer
