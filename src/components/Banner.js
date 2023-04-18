
import {useState, useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
const [loopNum, setLoopNum] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ['Web Developer', 'Person'];
const [text, setText] = useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const period = 2000;

useEffect(()=> {
  let ticker = setInterval ( ()=> {
    tick();
  }, delta)

  return ()=> { clearInterval(ticker)};
}, [text])

const tick = ()=> {
  let i = loopNum % toRotate.length;
  let fullText = toRotate[i];
  let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
  setText(updatedText);

  if (isDeleting){
    setDelta(prevDelta => prevDelta / 2)
  }

  if (!isDeleting && updatedText === fullText) {
    setIsDeleting(true);
    setDelta(period);
  } else if (isDeleting && updatedText===''){
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setDelta(500);
  }


}


return (
  <section className="banner align-items-center">
    <Container >
    <Row className="align-items-center mt-100">
      <Col xs={12} md = {6} xl = {7}>
      <TrackVisibility>
      {({ isVisible })=>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
        <Row >
        <span className="tagline ">Welcome to my Portfolio</span>
        <h1>{`Hi I'm Inna `}<span className="wrap">{text}</span></h1>
        <h2>I like JavaScript and React</h2>
        </Row>
      </div>}
      </TrackVisibility>
      </Col>

      <Col xs={12} md = {6} xl = {5}>
      <TrackVisibility>
      {({ isVisible })=>
      <div className= {isVisible  ? "animate__animated animate__zoomIn" : "" }>
        <img src = {headerImg} alt = "Header img" />
        </div>}

      </TrackVisibility>
      </Col>
    </Row>

    </Container>
  </section>
)
}