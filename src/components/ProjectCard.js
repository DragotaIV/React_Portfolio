import React from 'react';
import {Col} from 'react-bootstrap';

export const ProjectCard = ({ name, category, imgUrl, projectUrl}) => {
  return (
    <Col sm = {6} md = {4}>
      <div className='proj-imgbx'>
      <img src={imgUrl} />

        <div className='proj-txtx'>
          <h4>{name}</h4>
          <a href = {projectUrl} target="_blank"><span>{category}</span></a>
      </div>

      </div>
    </Col>
  )
}

export default ProjectCard