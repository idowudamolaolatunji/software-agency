import React, { Children } from 'react';

import Dolapo from '../assets/images/user-photos/dolapo.jpg'
import James from "../assets/images/user-photos/james.jpg"
import Brenda from "../assets/images/user-photos/brenda.jpg"
import Emeka from '../assets/images/user-photos/emeka.jpeg'

import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { TbUsers } from 'react-icons/tb';


function LabHeroSection({ title, welcome, description, students, courses, children }) {
    return (
        <div className="lab__section--content">
            <h4 className="lab__section--heading">{title}</h4>
            <p className="lab__section--text">{welcome}</p>
            <p className="lab__section--text text--two">{description}</p>
            <div className="lab__section--info">
                <div className="lab__section--box">
                    <span className="lab__section--image-box">
                        <img src={Dolapo} alt="students images" />
                        <img src={James} alt="students images" />
                        <img src={Emeka} alt="students images" />
                        <img src={Brenda} alt="students images" />
                    </span>
                    <p>{students} students</p>
                </div>
                <span className="lab__section--stat">
                    <p><BsFillJournalBookmarkFill className='icon' />{courses} Courses</p>
                    <p><TbUsers className='icon' /> 2 Tutors</p>
                </span>
            </div>
            <>
                {children}
            </>
        </div>

    )
}

export default LabHeroSection
