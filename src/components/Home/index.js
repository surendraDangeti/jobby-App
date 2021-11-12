import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="find-job-container">
          <h1 className="home-heading">
            Find The Job That <br />
            Fits your Life
          </h1>
          <p className="home-paragraph">
            Millions of people are searching for jobs, salary information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <Link className="retry-btn-link" to="/jobs">
            <button
              className="jobs-btn"
              type="button"
              onClick={onRedirectToJobs}
            >
              Find Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
