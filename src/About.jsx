
function About() {
  function download() {
    var a = document.createElement("a");
    a.style = "display: none";
    a.href = "data:application/pdf;base64,<?= $file_content ?>";
    a.download = "Backend Developer internships.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    }


  return (
    <>
    <div className="about-card">
      <div className="about-main">
        <h2>About Us</h2>
        <div className="about-page">
          <label htmlFor="Name">Name</label>
          <h1>Govinda Phuyal</h1>
          <label htmlFor="Phone">Phone</label>
          <h1>+97700000000</h1>
          <label htmlFor="Address">Address</label>
          <h1>Tokha,Kathmandu</h1>
        </div>
      </div>
          <div className="resume">
          <button onClick={download}>Resume</button>          </div>
    </div>
    </>
  )
}

export default About
