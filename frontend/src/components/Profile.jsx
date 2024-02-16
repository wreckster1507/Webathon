import React from 'react'
import Hod from '../images/Hod.jpg';
import img from '../images/img.jpg';



const Profile = (props) => {
    return (
        <div
            className="flex flex-col rounded-lg my-5 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
            <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"

                src={`/src/images/${props.profiles.img}`}
                // `./images/${props.profiles.img}`
                alt="" />
            <div className="flex flex-col justify-start p-6">
                <h5
                    className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 flex justify-start">
                    {props.profiles.name}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 flex justify-start">
                    {props.profiles.role}
                </p>
                <p className="text-s text-neutral-500 dark:text-neutral-300 flex justify-start">
                    {props.profiles.Degrees}
                </p>
                <p className="text-s text-neutral-500 dark:text-neutral-300 flex justify-start">
                    Experience:  {props.profiles.experience}
                </p>
            </div>
        </div>
    )
}

export default Profile