import React, { useEffect, useState } from 'react';
import { getJobs } from '../services/api';

const JobList: React.FC = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await getJobs();
            setJobs(response.data);
        };
        fetchJobs();
    }, []);

    return (
        <div>
            <h1>Job List</h1>
            <ul>
                {jobs.map((job: any) => (
                    <li key={job.id}>
                        {job.customerName} - {job.jobType} - {job.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;
