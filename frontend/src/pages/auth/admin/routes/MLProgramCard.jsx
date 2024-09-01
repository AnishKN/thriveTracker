import React, { useState } from 'react';
import axios from 'axios';

function MLProgramCard({ data, title, description, onOpenModal }) {
    const [loading, setLoading] = useState(false);

    const handleButtonClick = () => {
        setLoading(true); // Start loading
        fetchAnalysisData(); // Fetch analysis data
    };

    const fetchAnalysisData = async () => { 
        try {
          // Send a POST request with `data` as the payload
          const response = await axios.post('http://localhost:8000/analyze-eda', {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/analyze-eda',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        }); 
          onOpenModal(response.data); // Pass the data to open the modal with the results
        } catch (error) {
          console.error('Error fetching analysis data:', error);
          onOpenModal({ error: 'Failed to fetch data. Please try again.' });
        } finally {
          setLoading(false); // Stop loading after data is fetched or if there's an error
        }
    };

    return (
        <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden p-4 m-4 w-full  hover:bg-gray-200 transition-all hover:shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
            <p className="text-sm text-gray-700 mb-4">{description}</p>
            <button
                onClick={onOpenModal}
                className={`bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 flex items-center justify-center ${loading ? 'cursor-not-allowed' : ''}`}
                style={{ width: '100%' }}
                disabled={loading}
            >
                {loading ? (
                    <span className="flex items-center">
                        Loading...
                        <svg
                            className="animate-spin h-5 w-5 text-white ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            ></path>
                        </svg>
                    </span>
                ) : (
                    'Run Analysis'
                )}
            </button>
        </div>
    );
}

export default MLProgramCard;
