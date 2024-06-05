import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../services/api';

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

    if (error) return <div>{error}</div>;
    if (!job) return <div>Loading...</div>;

    return (
        <div>
            <h1>Job Detail</h1>
            <p>Customer: {job.customerName}</p>
            <p>Job Type: {job.jobType}</p>
            <p>Status: {job.status}</p>
            <p>Appointment Date: {new Date(job.appointmentDate).toLocaleString()}</p>
            <p>Technician: {job.technician}</p>
        </div>
    );
};

export default JobDetail;
