import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiEdit2, FiTrash2, FiEye, FiEyeOff, FiPlus, FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import api from '../../api';
import { format } from 'date-fns';

const CareerAdmin = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobType: 'full-time',
    department: '',
    location: '',
    description: '',
    requirements: '',
    responsibilities: '',
    salary: '',
    applicationDeadline: '',
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data } = await api.get('/careers');
      setJobs(data);
    } catch (error) {
      toast.error('Failed to fetch jobs');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      ...formData,
      requirements: formData.requirements.split('\n').filter(r => r.trim()),
      responsibilities: formData.responsibilities.split('\n').filter(r => r.trim()),
    };

    try {
      if (editingJob) {
        await api.put(`/careers/${editingJob._id}`, jobData);
        toast.success('Job updated successfully');
      } else {
        await api.post('/careers', jobData);
        toast.success('Job created successfully');
      }

      setShowModal(false);
      setEditingJob(null);
      setFormData({
        jobTitle: '',
        jobType: 'full-time',
        department: '',
        location: '',
        description: '',
        requirements: '',
        responsibilities: '',
        salary: '',
        applicationDeadline: '',
      });
      fetchJobs();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setFormData({
      jobTitle: job.jobTitle,
      jobType: job.jobType,
      department: job.department,
      location: job.location,
      description: job.description,
      requirements: job.requirements.join('\n'),
      responsibilities: job.responsibilities.join('\n'),
      salary: job.salary || '',
      applicationDeadline: job.applicationDeadline ? format(new Date(job.applicationDeadline), 'yyyy-MM-dd') : '',
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      try {
        await api.delete(`/careers/${id}`);
        toast.success('Job deleted successfully');
        fetchJobs();
      } catch (error) {
        toast.error('Failed to delete job');
      }
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await api.patch(`/careers/${id}/toggle`);
      toast.success(`Job ${currentStatus ? 'deactivated' : 'activated'} successfully`);
      fetchJobs();
    } catch (error) {
      toast.error('Failed to toggle status');
    }
  };

  const jobTypes = [
    { value: 'full-time', label: 'Full Time', color: 'bg-green-100 text-green-800' },
    { value: 'part-time', label: 'Part Time', color: 'bg-blue-100 text-blue-800' },
    { value: 'contract', label: 'Contract', color: 'bg-purple-100 text-purple-800' },
    { value: 'internship', label: 'Internship', color: 'bg-yellow-100 text-yellow-800' },
  ];

  const getJobTypeStyle = (type) => {
    const jobType = jobTypes.find(jt => jt.value === type);
    return jobType?.color || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Link 
                to="/admin/dashboard" 
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                ← Dashboard
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Career Management</h1>
                <p className="text-sm text-gray-500 mt-1">Manage job postings and applications</p>
              </div>
            </div>
            <button
              onClick={() => {
                setEditingJob(null);
                setFormData({
                  jobTitle: '',
                  jobType: 'full-time',
                  department: '',
                  location: '',
                  description: '',
                  requirements: '',
                  responsibilities: '',
                  salary: '',
                  applicationDeadline: '',
                });
                setShowModal(true);
              }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:scale-105"
            >
              <FiPlus className="mr-2 h-5 w-5" /> 
              Create New Job
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                <FiBriefcase className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Jobs</p>
                <p className="text-2xl font-semibold text-gray-900">{jobs.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                <FiEye className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Jobs</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {jobs.filter(job => job.isActive).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-yellow-100 rounded-md p-3">
                <FiEyeOff className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Inactive Jobs</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {jobs.filter(job => !job.isActive).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                <FiMapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Locations</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {new Set(jobs.map(job => job.location)).size}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-900">Current Job Openings</h2>
          </div>
          
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-500 border-t-transparent"></div>
              <p className="mt-2 text-gray-500">Loading jobs...</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {jobs.map((job, index) => (
                <li 
                  key={job._id} 
                  className="px-6 py-5 hover:bg-gray-50 transition-colors duration-150"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                          {job.jobTitle}
                        </h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getJobTypeStyle(job.jobType)}`}>
                          {job.jobType.replace('-', ' ')}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          job.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {job.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      
                      <div className="mt-2 flex items-center text-sm text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <FiBriefcase className="mr-1.5 h-4 w-4 text-gray-400" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <FiMapPin className="mr-1.5 h-4 w-4 text-gray-400" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <FiCalendar className="mr-1.5 h-4 w-4 text-gray-400" />
                          Deadline: {format(new Date(job.applicationDeadline), 'dd MMM yyyy')}
                        </span>
                      </div>
                      
                      {job.salary && (
                        <p className="mt-1 text-sm text-gray-600">
                          <span className="font-medium">Salary:</span> {job.salary}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleToggleStatus(job._id, job.isActive)}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          job.isActive 
                            ? 'text-green-600 hover:bg-green-50 hover:text-green-700' 
                            : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                        }`}
                        title={job.isActive ? 'Deactivate Job' : 'Activate Job'}
                      >
                        {job.isActive ? <FiEye className="h-5 w-5" /> : <FiEyeOff className="h-5 w-5" />}
                      </button>
                      <button
                        onClick={() => handleEdit(job)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 hover:text-blue-700"
                        title="Edit Job"
                      >
                        <FiEdit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(job._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 hover:text-red-700"
                        title="Delete Job"
                      >
                        <FiTrash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              
              {jobs.length === 0 && (
                <li className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center">
                    <FiBriefcase className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500 text-lg">No job postings found</p>
                    <p className="text-gray-400 text-sm mt-1">Click "Create New Job" to get started</p>
                  </div>
                </li>
              )}
            </ul>
          )}
        </div>
      </main>

      {/* Modal for Add/Edit - Enhanced with large top margin */}
      {showModal && (
        <div className="fixed z-20 inset-0 overflow-y-auto">
          <div className="flex items-start justify-center min-h-screen pt-16 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm"></div>

            {/* Added large top margin with mt-16 and adjusted positioning */}
            <div className="inline-block align-top bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-16 sm:align-middle sm:max-w-3xl sm:w-full mt-30">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-6 pt-6 pb-4 sm:p-8 mt-20">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {editingJob ? 'Edit Job Posting' : 'Create New Job Posting'}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Fill in the details below to {editingJob ? 'update the' : 'create a new'} job posting
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        setEditingJob(null);
                      }}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-6 max-h-[60vh] overflow-y-auto px-1">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow"
                          placeholder="e.g., Senior Software Engineer"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="jobType"
                          value={formData.jobType}
                          onChange={handleInputChange}
                          className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          {jobTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Department <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="department"
                          required
                          value={formData.department}
                          onChange={handleInputChange}
                          className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="e.g., Engineering"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="e.g., New York, NY"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="description"
                        rows="4"
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Provide a detailed description of the role..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Requirements <span className="text-red-500">*</span>
                        <span className="text-xs text-gray-500 ml-2">(One per line)</span>
                      </label>
                      <textarea
                        name="requirements"
                        rows="4"
                        required
                        value={formData.requirements}
                        onChange={handleInputChange}
                        placeholder="Bachelor's degree in Computer Science&#10;3+ years of experience with React&#10;Strong problem-solving skills"
                        className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Responsibilities <span className="text-red-500">*</span>
                        <span className="text-xs text-gray-500 ml-2">(One per line)</span>
                      </label>
                      <textarea
                        name="responsibilities"
                        rows="4"
                        required
                        value={formData.responsibilities}
                        onChange={handleInputChange}
                        placeholder="Develop and maintain web applications&#10;Collaborate with cross-functional teams&#10;Write clean, maintainable code"
                        className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Salary <span className="text-xs text-gray-500">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          name="salary"
                          value={formData.salary}
                          onChange={handleInputChange}
                          placeholder="$50,000 - $70,000 per year"
                          className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Application Deadline <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="applicationDeadline"
                          required
                          value={formData.applicationDeadline}
                          onChange={handleInputChange}
                          className="block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 sm:px-8 sm:flex sm:flex-row-reverse gap-3">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm transition-colors duration-200"
                  >
                    {editingJob ? 'Update Job' : 'Create Job'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setEditingJob(null);
                    }}
                    className="mt-3 w-full inline-flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerAdmin;