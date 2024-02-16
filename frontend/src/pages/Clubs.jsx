import React from 'react';
import Navbar from '../components/Navbar';

const Clubs = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-8 bg-slate-50">
                <h2 className="text-2xl font-semibold mb-4">Sports Club</h2>
                <ul className="list-disc ml-8 mb-8">
                    <li>
                        <strong>MRU 5K run:</strong> Games and sports are an essential component of the curriculum. The college is dedicated to fostering an environment that balances academic, cultural, and sporting activities for the students' total personality development. The Department of Physical Education under SAC is working hard to help students and faculty learn the fundamentals of numerous sports and games and improve their talents to a greater degree of proficiency. Sports and games are now an essential component of MREC's student development programme.
                    </li>
                    <li>
                        <strong>MRU Cricket:</strong> Students of CSE have participated in Cricket organized by sports fest “SPARKS INTELLIGENTIA 2021” OF MRU and won the Overall Championship.
                    </li>
                    <li>
                        <strong>MRU Volley Ball:</strong> Students of CSE have participated in Volley Ball organized by sports fest “SPARKS INTELLIGENTIA 2021” OF MRU and have won Winner prize.
                    </li>
                    <li>
                        <strong>MRU Throw Ball:</strong> Students of CSE have participated in Throw Ball organized by sports fest “SPARKS INTELLIGENTIA 2021” OF MRU and have won Winner prize.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">GDSC Club</h2>
                <ul className="list-disc ml-8 mb-8">
                    <li>
                        <strong>GDSC:</strong> We are the Google Developer Student Club dedicated to promoting tech education, innovation, and collaboration. Follow us for updates on coding events, hackathons, and tech talks. Join our tech community!
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">Photography Club</h2>
                <p>
                    Photography Club are constantly working to develop new promising for club and college. At the same time, club are showing a growing demand for new ideas and innovative products. The Club has made it its mission to bring these two worlds together so that they can benefit effectively from each other for this we got a new camera kits to encourage the students towards photography and some of the images captured on that day.
                </p>
            </div>
        </div>
    );
};

export default Clubs;
