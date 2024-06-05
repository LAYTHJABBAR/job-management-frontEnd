import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../services/api';

const JobDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [job, setJob] = useState<any>(null);

    useEffect(() => {
        const fetchJob = async () => {
            const response = await getJobById(parseInt(id));
            setJob(response.data);
        };
        fetchJob();
    }, [id]);

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
