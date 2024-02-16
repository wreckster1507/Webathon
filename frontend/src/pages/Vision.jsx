import React from 'react';
import Navbar from '../components/Navbar';

const Vision = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="p-16 bg-white">
                <div className="mb-8">
                    <h1 className="text-orange-500 text-center font-semibold text-2xl">Vision</h1>
                    <div className="text-lg">
                        To be a world class University visualizing a great future for the young aspirants, with innovative nature, research culture and ethical sensitivities to meet the global challenges improving the Quality of Human Life.
                    </div>
                </div>
                <div className="mb-8">
                    <h1 className="text-orange-500 text-center font-semibold text-2xl">Mission</h1>
                    <div className="text-lg">
                        To impart value-based futuristic higher education moulding students into globally competent empowered youth, rich in culture and ethics along with professional expertise.
                        To promote Innovation, Entrepreneurship, Research, and Development for the broad purpose of fulfilling societal goals such as Societal Welfare and benefit.
                    </div>
                </div>
                <div className="mb-8">
                    <h1 className="text-orange-500 text-center font-semibold text-2xl">Core Values</h1>
                    <ul >
                        <li className='flex justify-start'>
                            Promoting excellence in the learning process.
                        </li>
                        <li className='flex justify-start'>
                            Expanding the horizon of knowledge through creative research.
                        </li>
                        <li className='flex justify-start'>
                            Maintaining high ethical standards in teaching, research and administration.
                        </li>
                        <li className='flex justify-start'>
                            Catering to diverse needs of multi-cultural, multi-linguist strata of society.
                        </li>
                        <li className='flex justify-start'>
                            Providing good academic ambience in pursuit of excellence in education.
                        </li>
                        <li className='flex justify-start'>
                            Eco-friendly campus as a substratum of multi-disciplinary courses.
                        </li>
                        <li className='flex justify-start'>
                            State-of-art infrastructure to support the students participatory means of seeking knowledge.Promoting excellence in the learning process.
                        </li>
                        <li className='flex justify-start'>
                            Encouraging awareness about social responsibility and accountability.
                        </li>
                        <li className='flex justify-start'>
                            Promotion of equity through continuous improvement and sustainable growth.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Vision;
