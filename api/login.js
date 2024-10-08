// api/login.js
import axiosInstance from './axiosConfig';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await axiosInstance.post('/api/Login', req.body); // Usa axiosInstance
            res.status(200).json(response.data);
        } catch (error) {
            res.status(error.response?.status || 500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
