import React, { useState, useEffect } from 'react';
import api from '../api';
import { format } from 'date-fns';
import { FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi';

const Career = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState({
    jobType: '',
    department: '',
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await api.get('/careers?isActive=true');
      setJobs(data);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const departments = ['all', ...new Set(jobs.map(job => job.department))];
  const jobTypes = ['all', ...new Set(jobs.map(job => job.jobType))];

  const filteredJobs = jobs.filter(job => {
    if (filters.jobType && filters.jobType !== 'all' && job.jobType !== filters.jobType) return false;
    if (filters.department && filters.department !== 'all' && job.department !== filters.department) return false;
    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Careers</h1>
          <p className="text-xl text-gray-600">
            Join our team and build your future with us
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <select
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <select
                value={filters.jobType}
                onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.split('-').map(word => 
                      word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job._id}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition hover:scale-105 hover:shadow-lg"
              onClick={() => setSelectedJob(job)}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.jobTitle}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <FiBriefcase className="mr-2" />
                  <span className="text-sm capitalize">{job.jobType.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiMapPin className="mr-2" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiClock className="mr-2" />
                  <span className="text-sm">
                    Deadline: {format(new Date(job.applicationDeadline), 'dd MMM yyyy')}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm line-clamp-3 mb-4">{job.description}</p>

              <div className="flex justify-between items-center text-sm">
                <span className="text-indigo-600 font-medium">{job.department}</span>
                {job.salary && <span className="text-gray-500">{job.salary}</span>}
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No job openings found matching your criteria.
          </div>
        )}

        {/* Job Detail Modal */}
        {selectedJob && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <div
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedJob.jobTitle}</h2>
                  <p className="text-gray-600">{selectedJob.department}</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-sm text-gray-500 block">Job Type</span>
                  <span className="font-medium capitalize">{selectedJob.jobType.replace('-', ' ')}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-sm text-gray-500 block">Location</span>
                  <span className="font-medium">{selectedJob.location}</span>
                </div>
                {selectedJob.salary && (
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="text-sm text-gray-500 block">Salary</span>
                    <span className="font-medium">{selectedJob.salary}</span>
                  </div>
                )}
                <div className="bg-gray-50 p-3 rounded">
                  <span className="text-sm text-gray-500 block">Application Deadline</span>
                  <span className="font-medium">
                    {format(new Date(selectedJob.applicationDeadline), 'dd MMM yyyy')}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Job Description</h3>
                  <p className="text-gray-700">{selectedJob.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index} className="text-gray-700">{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <p className="text-gray-600 mb-4">
                    Interested candidates should submit their resume and cover letter.
                  </p>
                  <a
                    href={`mailto:careers@yourcompany.com?subject=Application for ${selectedJob.jobTitle}`}
                    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;