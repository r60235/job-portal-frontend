import { useNavigate } from 'react-router-dom';

const JobCard = ({ job, onDelete }) => {
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/jobs/${job._id}`);
  };

  const handleDelete = () => {
    onDelete(job._id);
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <p className="card-text mb-2">
          <strong>Company name:</strong> {job.company}
        </p>
        <p className="card-text mb-2">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="card-text mb-3">
          <strong>Job Type:</strong> {job.jobType}
        </p>
        <div className="d-flex gap-2">
          <button 
            className="btn btn-primary btn-sm flex-fill" 
            onClick={handleSeeDetails}
          >
            See Details
          </button>
          <button 
            className="btn btn-danger btn-sm flex-fill" 
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
