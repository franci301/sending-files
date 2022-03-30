import FDMLogo from './images/FDMLogo.jpeg';

function nav() {
    return(
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={FDMLogo} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a className="nav-link" href="Displaypage.html">Home</a></li>
              <li className="nav-item active"><a className="nav-link" href="Useanyservice.html">Use a service</a></li>
              <li className="nav-item"><a className="nav-link" href="Badges&achievements.html">Badges&Achievements</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Profile</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default nav;