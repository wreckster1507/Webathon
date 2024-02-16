import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Faculty = () => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/profiles')
            .then((response) => {
                setProfiles(response.data.data);
                setLoading(false);
                console.log(profiles)

            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div className="my-5">
                <Navbar />
            </div>
            <div>
                {profiles.map((profile, index) => (
                    <Profile key={profile._id} profiles={profile} count={index} />
                ))}
            </div>

            <div>
                <img src="https://ibb.co/hLHwGFF" alt="" />
            </div>


        </div>
    )
}

export default Faculty