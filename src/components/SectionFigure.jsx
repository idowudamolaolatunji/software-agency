import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

function SectionFigure({ type, subtitle, title, content, link="/", image }) {
  return (
    <>
        {type === "how" && (
            <figure className="how__figure">
                <p className="subtitle">{subtitle}</p>
                <h4 className="figure--title">{title}</h4>
                <p className="figure--text">{content}</p>
            </figure>
        )}

        {type === "service" && (
            <figure className="service__figure">
                <span className="figure--icon">
                    <img src={image} alt={title} className='img' />
                </span>
                <h4 className="figure--title">{title}</h4>
                <p className="figure--text">{content}</p>

                <Link to={link} className='figure--link'>Read more <MdOutlineArrowOutward className='icon' /></Link>
            </figure>
        )}
    </>
  )
}

export default SectionFigure