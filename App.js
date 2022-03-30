import { Helmet } from 'react-helmet';
import './style.css';
import Nav from './nav.js'
import Footer from './footer.js'
import Fitness from './images/fitness.jpeg'; 
import Mindfulness from './images/Mindfulness.jpeg';
import Healthcheck from './images/Healthcheck.jpeg';
import giftCard from './images/giftcard.jpeg';

function App() {
  return (
    <body>
      <Helmet>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudfare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
      </Helmet>
      <Nav />
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1" ></li>
          <li data-target="#slides" data-slide-to="2" ></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="Useanyservice.html"><img src={Fitness} className="img-fluid" alt="Responsive image"/></a>
            <div className="carousel-caption">
              <h1 className="display-2" id="h1U">Fitness </h1>
              <button type="button" className="btn btn-outline-light btn-lg" ></button>

            </div>

          </div>
          <div className="carousel-item">
            <a href="Mindfulness.html"><img src={Mindfulness} className="img-fluid" alt="Responsive image"/></a>
            <div className="carousel-caption"><h1>Mindfulness</h1></div>

          </div>
          <div className="carousel-item">
            <a href="Useanyservice.html"><img src={Healthcheck} className="img-fluid" alt="Responsive image"/></a>
            <div className="carousel-caption"><h1>Health audit</h1></div>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead text-center"> Choose any service or view profile or badges and achievements</p>
          </div>
        </div>
      </div>

      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">About the App</h1>
          </div>
          <hr/>
            <div className="col-12">
              <p className="lead">Use the app and get fitter, mentally and physically.
                You can win badges and Achievements, some achievements involve gift cards to keep you motivated to stay fit!
              </p>
            </div>
        </div>
      </div>


      <hr className="my-4"/>
        <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-lg-6">
              <h2> if you use the app</h2>
              <p>Information about why the fitness tracking is important</p>
              <p> information about why mindfulness is important</p>
              <p> information about why health audit is important</p>
              <p>information about Acheivements and badges partaking companies aswell as fitness score necessary</p>
            </div>
            <div className="col-lg-6">
              <img src={giftCard} className="img-fluid" alt="Responsive image" />
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="container-fluid padding">
          <div className="row welcome text-center">
            <div className="col-12">
              <h1 className="display-4">Get proactive</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid padding">
          <div className="row padding">
            <div className="col-md-4">
              <div className="card">
                <a href="https://www.thegymgroup.com/?gclid=CjwKCAjwlcaRBhBYEiwAK341jdTWi6NZOHGGoRqAoEY_h6FdfdZWy51yr4a6S-EgarWf6ap-TQViZhoCy6cQAvD_BwE&gclsrc=aw.ds"><img className="card-imd-top" src="images/Thegymgrouplogo.jpeg" /></a>
                <div className="card-body">
                  <h4 className="card-title">TheGymGroup</h4>
                  <p className="card-text">Get connected and workout!</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <a href="https://www.sleepcycle.com/"><img className="card-imd-top" src="images/sleepcyclelogo.jpeg" /></a>
                <div className="card-body">
                  <h4 className="card-title">Sleepcycle</h4>
                  <p className="card-text">Maintain your sleep with sleep cycle.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <a href="https://www.headspace.com/"><img className="card-imd-top" src="images/headspacelogo.jpeg" /></a>
                <div className="card-body">
                  <h4 className="card-title">Headspace</h4>
                  <p className="card-text">Get mentally fitter with more mental health maintenance with headspace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-12">
              <h2>Get Connected</h2>
            </div>
            <div className="col-12 social padding">
              <a href="https://www.facebook.com/FDMGroup"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com/FDMGroup?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/company/fdm-group/"><i className="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/fdm_group/?hl=en"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        need to import a footer component
        <Footer/>
    </body>
  )
};

export default App;
