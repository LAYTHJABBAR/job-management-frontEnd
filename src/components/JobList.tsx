import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getJobs, deleteJob } from '../services/api';
import './JobList.css';

const JobList: React.FC = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await getJobs();
            setJobs(response.data);
        };
        fetchJobs();
    }, []);

    const handleDelete = async (id: number) => {
        const confirmed = window.confirm("Are you sure you want to delete this job?");
        if (confirmed) {
            await deleteJob(id);
            setJobs(jobs.filter((job: any) => job.id !== id));
        }
    };

    return (
        <div className="job-list">
            <h1>Job List</h1>
            <Link to="/add-job" className="add-job-button">Add Job</Link>
            <ul>
                {jobs.map((job: any) => (
                    <li key={job.id} className="job-item">
                        <span>
                            <Link to={`/jobs/${job.id}`}>
                                {job.customerName} - {job.jobType} - {job.status}
                            </Link>
                        </span>
                        <div className="button-group">
                            <Link to={`/edit-job/${job.id}`} className="edit-button">Edit</Link>
                            <button onClick={() => handleDelete(job.id)} className="delete-button">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
