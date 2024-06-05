import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getJobById } from '../services/api';
import './JobDetail.css'; // Import the CSS file for styling

const JobDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [job, setJob] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchJob = async () => {
                try {
                    const response = await getJobById(parseInt(id));
                    setJob(response.data);
                } catch (error) {
                    setError('Failed to fetch job details');
                }
            };
            fetchJob();
        } else {
            setError('Invalid job ID');
        }
    }, [id]);

    if (error) return <div className="error">{error}</div>;
    if (!job) return <div className="loading">Loading...</div>;

    return (
        <div className="job-detail">
            <h1>Job Detail</h1>
            <p><strong>Customer:</strong> {job.customerName}</p>
            <p><strong>Job Type:</strong> {job.jobType}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <p><strong>Appointment Date:</strong> {new Date(job.appointmentDate).toLocaleString()}</p>
            <p><strong>Technician:</strong> {job.technician}</p>
            <Link to="/" className="back-button">Back to Job List</Link>
        </div>
    );
};

export default JobDetail;
