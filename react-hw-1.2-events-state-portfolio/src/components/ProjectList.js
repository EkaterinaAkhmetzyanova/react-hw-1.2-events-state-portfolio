import PropTypes from 'prop-types';
import React from 'react';

export default function ProjectList({projects}) {
    return (
        <div className='project-list'>
            {projects.map((element) => {
                return <div key={Math.random()}>
                  <img src={element.img} alt={element.category} />
                </div>
            })}
        </div>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array,
}