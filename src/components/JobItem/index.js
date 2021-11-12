import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

import './index.css'

const JobItem = props => {
  const {jobData} = props
  const {
    id,
    title,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
  } = jobData

  return (
    <Link to={`/jobs/${id}`} className="job-item">
      <li className="job-item-container">
        <div className="first-part-container">
          <div className="img-title-container">
            <img
              className="company-logo"
              src={companyLogoUrl}
              alt="company logo"
            />
            <div className="title-and-rating-container">
              <h1 className="title-heading">{title}</h1>
              <div className="rating-container">
                <AiFillStar className="star-icon" />
                <p className="rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-and-package-container">
            <div className="location-job-type-container">
              <div className="location-icon-location-container">
                <MdLocationOn className="location-icon" />
                <p className="location">{location}</p>
              </div>
              <div className="employment-type-container">
                <p className="job-type">{employmentType}</p>
              </div>
            </div>
            <div>
              <p className="package">{packagePerAnnum}</p>
            </div>
          </div>
        </div>
        <hr className="item-hr-line" />
        <div className="second-part-container">
          <h1 className="description-heading">Description</h1>
          <p className="description">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}

export default JobItem
