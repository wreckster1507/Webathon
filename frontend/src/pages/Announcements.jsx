import React from 'react'
import Navbar from '../components/Navbar'
import { Carousel } from '@material-tailwind/react'
import Mru from '../images/Mru.jpg'

const Announcements = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='flex justify-center my-3'>
                <img src={Mru} alt='img' />
            </div>
            <div className="font-semibold font-san">
                <p>
                    The Department of Computer Science and Engineering has eminent faculty with a blend from Academics and industry with varied specializations to impart their skill on latest technologies for B.Tech students. The department offers a Doctoral program (Ph.D) in Computer Science and Engineering and working on emerging areas. Center of Excellence Labs have been functioning on cutting edge technologies such as Artificial Intelligence & Machine Learning, IoT, Cyber Security, Cloud & Fog Computing and Software Engineering. Department faculty has been executing several funded research projects. Had MoUs with reputed MNCs such as IBM, Microsoft, CISCO etc to be in tune with industry developments and requirements."
                </p>
            </div>
        </div>
    )
}

export default Announcements

