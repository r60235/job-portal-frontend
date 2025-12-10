# Intern House - Frontend

A modern React job portal frontend where users can browse, search, view detailed job postings, and post new job listings. Built with React 18, Vite, Bootstrap 5, and features responsive design with real-time search functionality.

---

## Demo Link

[Live Demo](https://job-portal-frontend-ivory-nine.vercel.app/)

---

## Quick Start

```bash
git clone https://github.com/r60235/job-portal-frontend.git
cd job-portal-frontend
npm install
npm run dev
```

## Technologies

- React 18+ with Hooks
- Vite (Build Tool)
- React Router DOM
- Bootstrap 5
- Axios
- React-Toastify

## Demo Video

Watch a walkthrough (3 minutes) of all major features of this app:
[Explaination Video Link](https://drive.google.com/file/d/1m8FEAdf9w7ml7wzSow6bc0311KSPTdRp/view?usp=drive_link)

## Features

**Home Page**
- Displays all job postings in responsive grid layout
- Real-time search by job title (case-insensitive)
- Responsive design: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)

**Job Listings**
- Job cards with title, company, location, and job type
- "See Details" button navigates to full job information
- "Delete" button removes job posting instantly

**Job Details**
- View complete job information (title, company, location, salary, type)
- Job description and qualifications displayed as ordered list
- Clean, professional layout

**Post a Job**
- Form with validation for all required fields
- Dropdown for job type selection
- Toast notifications for success/error feedback
- Form resets after successful submission

**Navigation**
- Responsive navbar with hamburger menu for mobile
- Cross-page navigation with React Router


**User Experience**
- Toast notifications (no native alerts)
- Loading spinners for API calls
- Cross-tab synchronization using Visibility API
- Instant search results with client-side filtering

## Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

For production (Vercel):
```env
VITE_API_URL=https://job-portal-backend-5ybs.vercel.app/api
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── JobCard.jsx
│   │   └── SearchBar.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── JobDetails.jsx
│   │   └── PostJob.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## API Integration

The frontend communicates with the backend API through:

- `GET /api/jobs` - Fetch all job postings
- `GET /api/jobs/:id` - Fetch single job details
- `POST /api/jobs` - Create new job posting
- `DELETE /api/jobs/:id` - Delete job posting

## Responsive Design

- **Desktop (≥992px)**: 3-column grid, 50% search bar width
- **Tablet (768px-991px)**: 2-column grid, full-width search
- **Mobile (<768px)**: 1-column grid, stacked buttons, full-width search

## Key Features

✅ Real-time search with instant results
✅ Responsive Bootstrap 5 design
✅ Cross-tab data synchronization
✅ Toast notifications for user feedback
✅ Form validation with error messages
✅ Loading states and error handling
✅ Clean, professional UI matching job board standards

## Contact

For bugs or feature requests, please reach out to rishaabh105@gmail.com