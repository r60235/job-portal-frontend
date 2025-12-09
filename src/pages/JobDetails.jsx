import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getJobById } from '../services/api';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  const fetchJobDetails = async () => {
    try {
      setLoading(true);
      const data = await getJobById(id);
      setJob(data);
    } catch (error) {
      setError('Job not found');
      toast.error('Failed to load job details. Redirecting to home...');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  // Parse qualifications string into array
  const parseQualifications = (qualifications) => {
    if (!qualifications) return [];
    return qualifications.split('\n').filter(q => q.trim() !== '');
  };

  if (loading) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="alert alert-danger">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="container">
        <h2 className="mb-4">{job.title}</h2>
        
        <div className="card shadow-sm">
          <div className="card-body">
            <p className="mb-2">
              <strong>Company Name:</strong> {job.company}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="mb-2">
              <strong>Salary:</strong> {job.salary}
            </p>
            <p className="mb-2">
              <strong>Job Type:</strong> {job.jobType}
            </p>
            <p className="mb-3">
              <strong>Description:</strong> {job.description}
            </p>
            <div>
              <strong>Qualifications:</strong>
              <ol className="mt-2">
                {parseQualifications(job.qualifications).map((qual, index) => (
                  <li key={index}>{qual}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
