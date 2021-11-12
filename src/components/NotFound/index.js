import Navbar from '../Navbar'

import './index.css'

const notFoundImage =
  'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'

const NotFound = () => (
  <div>
    <Navbar />
    <div className="notfound-container">
      <div className="notfound-image-container">
        <img className="notfound-image" src={notFoundImage} alt="not found" />
      </div>
      <h1 className="notfound-heading">Page Not Found</h1>
      <p className="notfound-paragraph">
        we’re sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
