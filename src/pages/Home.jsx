import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';
import { getAllJobs, deleteJob } from '../services/api';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  // Refresh data when tab becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchJobs();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Filter jobs based on search term (client-side filtering)
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredJobs(filtered);
    }
  }, [searchTerm, jobs]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getAllJobs();
      setJobs(data);
      setFilteredJobs(data);
    } catch (error) {
      toast.error('Failed to fetch jobs. Please try again.');
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      await deleteJob(jobId);
      
      // Update both jobs and filteredJobs state immediately
      const updatedJobs = jobs.filter(job => job._id !== jobId);
      setJobs(updatedJobs);
      setFilteredJobs(filteredJobs.filter(job => job._id !== jobId));
      
      toast.success('Job deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete job. Please try again.');
      console.error('Error deleting job:', error);
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
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

  return (
    <div className="main-content">
      <div className="container">
        <div className="search-wrapper">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        </div>
        <h2 className="mb-4">All Jobs</h2>
        
        {filteredJobs.length === 0 ? (
          <div className="alert alert-info">
            {searchTerm ? 'No jobs found matching your search.' : 'No jobs available.'}
          </div>
        ) : (
          <div className="row g-4">
            {filteredJobs.map(job => (
              <div key={job._id} className="col-12 col-md-6 col-lg-4">
                <JobCard job={job} onDelete={handleDelete} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
