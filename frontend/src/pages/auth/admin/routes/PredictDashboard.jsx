// PredictDashboard.jsx
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css'; // Import styles for react-responsive-modal
import MLProgramCard from './MLProgramCard'; // Import the Card Component
import useData from '../../AllData';

function PredictDashboard() {

    const allData = useData();
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const handleOpenModal = (data) => {
        setModalData(data);
        setOpenModal(true);
    };

    return (
        <div className="min-h-screen">
            {/* Cards Displaying Different ML Programs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-4">
                <MLProgramCard
                    data={allData.results}
                    title="ML Program 1"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil est accusantium aliquam a ab dolorum eius vel aliquid natus."
                    onOpenModal={handleOpenModal}
                />
                <MLProgramCard
                    data={allData.results}
                    title="ML Program 2"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil est accusantium aliquam a ab dolorum eius vel aliquid natus." 
                    onOpenModal={handleOpenModal}
                />
                <MLProgramCard
                    data={allData.results}
                    title="ML Program 3"
                    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nihil est accusantium aliquam a ab dolorum eius vel aliquid natus."
                    onOpenModal={handleOpenModal}
                />
                {/* Add more cards as needed */}
            </div>


            {/* Modal to Display Analysis Results */}
            <Modal open={openModal} onClose={() => setOpenModal(false)} center>
                <h2>Analysis Result</h2>
                {modalData ? (
                    <pre>{JSON.stringify(modalData, null, 2)}</pre>
                ) : (
                    <p>Loading data...</p>
                )}
            </Modal>
        </div>
    );
}

export default PredictDashboard;
