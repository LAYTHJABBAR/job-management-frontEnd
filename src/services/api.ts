import axios from 'axios';

const API_URL = 'http://localhost:5000/jobs';

export const getJobs = async () => {
    return await axios.get(API_URL);
};

export const getJobById = async (id: number) => {
    return await axios.get(`${API_URL}/${id}`);
};

export const createJob = async (job: any) => {
    return await axios.post(API_URL, job);
};

export const updateJob = async (id: number, job: any) => {
    return await axios.put(`${API_URL}/${id}`, job);
};

export const deleteJob = async (id: number) => {
    return await axios.delete(`${API_URL}/${id}`);
};
