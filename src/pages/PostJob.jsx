import { useState } from 'react';
import { toast } from 'react-toastify';
import { createJob } from '../services/api';

const PostJob = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    jobType: '',
    description: '',
    qualifications: ''
  });

  const jobTypeOptions = [
    'Full-time (On-site)',
    'Part-time (On-site)',
    'Full-time (Remote)',
    'Part-time (Remote)'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { title, company, location, salary, jobType, description, qualifications } = formData;

    if (!title.trim()) {
      toast.error('Job title is required');
      return false;
    }
    if (!company.trim()) {
      toast.error('Company name is required');
      return false;
    }
    if (!location.trim()) {
      toast.error('Location is required');
      return false;
    }
    if (!salary || salary <= 0) {
      toast.error('Valid salary is required');
      return false;
    }
    if (!jobType) {
      toast.error('Job type is required');
      return false;
    }
    if (!description.trim()) {
      toast.error('Job description is required');
      return false;
    }
    if (!qualifications.trim()) {
      toast.error('Qualifications are required');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setSubmitting(true);
      await createJob({
        ...formData,
        salary: Number(formData.salary)
      });
      toast.success('Job posted successfully!');
      
      // Reset form so user can post another job
      setFormData({
        title: '',
        company: '',
        location: '',
        salary: '',
        jobType: '',
        description: '',
        qualifications: ''
      });
    } catch (error) {
      toast.error('Failed to post job. Please try again.');
      console.error('Error posting job:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="main-content">
      <div className="container">
        <h2 className="mb-4">Post a Job</h2>
        
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Job Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter job title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="company" className="form-label">Company Name:</label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Salary:</label>
          <input
            type="number"
            className="form-control"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="Enter salary"
            min="0"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="jobType" className="form-label">Job Type:</label>
          <select
            className="form-select"
            id="jobType"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
          >
            <option value="">Select job type</option>
            {jobTypeOptions.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Job Description:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter job description"
            rows="4"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="qualifications" className="form-label">Job Qualifications:</label>
          <textarea
            className="form-control"
            id="qualifications"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            placeholder="Enter qualifications (one per line)"
            rows="4"
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={submitting}
        >
          {submitting ? 'Posting...' : 'Post Job'}
        </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
