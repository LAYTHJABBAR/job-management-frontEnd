import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { createJob, getJobById, updateJob } from '../services/api';
import './JobForm.css';

const JobForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [job, setJob] = useState<any>({ customerName: '', jobType: '', status: '', appointmentDate: '', technician: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchJob = async () => {
                const response = await getJobById(parseInt(id));
                setJob(response.data);
            };
            fetchJob();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setJob({ ...job, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            await updateJob(parseInt(id), job);
        } else {
            await createJob(job);
        }
        navigate('/');
    };

    return (
        <div className="job-form">
            <h1>{id ? 'Edit Job' : 'Add Job'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Customer Name:</label>
                    <input type="text" name="customerName" value={job.customerName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Job Type:</label>
                    <input type="text" name="jobType" value={job.jobType} onChange={handleChange} required />
                </div>
                <div>
                    <label>Status:</label>
                    <select name="status" value={job.status} onChange={handleChange} required>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
                <div>
                    <label>Appointment Date:</label>
                    <input type="datetime-local" name="appointmentDate" value={job.appointmentDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>Technician:</label>
                    <input type="text" name="technician" value={job.technician} onChange={handleChange} required />
                </div>
                <button type="submit">{id ? 'Update Job' : 'Add Job'}</button>
            </form>
            <Link to="/" className="back-button">Back to Job List</Link>
        </div>
    );
};

export default JobForm;
