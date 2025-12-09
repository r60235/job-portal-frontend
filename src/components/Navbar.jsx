import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleJobPostingsClick = (e) => {
    e.preventDefault();
    // If already on home page, force reload to clear search
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#0056b3', margin: 0, width: '100%' }}>
      <div className="container-fluid" style={{ maxWidth: '100%' }}>
        <Link className="navbar-brand fw-bold" to="/">Intern House</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={handleJobPostingsClick}>Job Postings</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post-job">Post a Job</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
