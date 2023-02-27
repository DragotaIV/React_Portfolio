import React from 'react';
import { Container, Tab, TabContainer, Row, Col, Nav, Button } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = ()  => {


  const cats = [
    {"id": 1, "name": "All"},
    {"id": 2, "name": "HTML_CSS"},
    {"id": 3, "name": "JavaScript"},
    {"id": 4, "name": "React"}
  ]



  const [collections, setCollections] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState("All");
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(()=> {
    setIsLoading(true);

    const category = categoryId !=="All" ? `category=${categoryId}` : '';

    fetch(`https://63cb0c51f36cbbdfc764f902.mockapi.io/colections?${category}`)

  .then((resp)=>resp.json())
  .then((json) => {
    setCollections(json);
})

  .catch((err) => {
    console.warn(err);
    alert('Помилка при отриманні');
  })

  .finally(()=> setIsLoading(false));
},[categoryId]);



  return (
<section className="project" id = "project">
  <Container>
    <Row>
      <Col>
      <h2>Projects</h2>
      </Col>
    </Row>
    <Row>
      <TabContainer id = "projects-tabs" defaultActiveKey = "All">
      <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center " id = "pills-tab">
      {isLoading

      ? (<h1>Downloading...</h1>)

      :
      (cats.map((obj)=> (

      <Nav.Item  onClick = {()=> {setCategoryId(obj.name)}}
      className = {categoryId === obj.name ? 'active' : ''}
      key = {obj.name}
      >
        <Nav.Link eventKey = {obj.name}>{obj.name}</Nav.Link>
      </Nav.Item>

      )))}

    </Nav>
<Tab.Content>
{cats.map((cat) => (

  <Tab.Pane eventKey = {cat.name} key = {cat.id} >

<Row>
    {collections

    .map(project => (

    <ProjectCard key = {project.id} name = {project.name} category= {project.category} imgUrl = {project.imgUrl} projectUrl={project.projectUrl}
        />
    )
      )
      }
</Row>

</Tab.Pane>

 ))}

</Tab.Content>
    </TabContainer>
    </Row>
  </Container>
  <img className='backround-image-right' src = {colorSharp2}></img>
</section>
  )
}