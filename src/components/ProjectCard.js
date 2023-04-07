import React from 'react';
import {Col} from 'react-bootstrap';

export const ProjectCard = ({ name, category, imgUrl}) => {
  return (
    <Col sm = {6} md = {4}>
      <div className='proj-imgbx'>
        <img src = {imgUrl} />
        <div className='proj-txtx'>
          <h4>{name}</h4>
            <span>{category}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard