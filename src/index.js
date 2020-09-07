import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const App = () => {
  const groupOneColor = 'secondary';
  const groupTwo = 'dark';
  const borderStyle = 'border-light';
  return(
    <Container className="w-25 bg-dark pb-4 pt-2 mt-4 ">
        <Row  noGutters className="justify-content-end text-info"> <h5>other dysplay</h5></Row>
        <Row  noGutters className="justify-content-end text-light" id="display"> <h6>display</h6></Row>
        <Row noGutters >
          <Col xs={6}>
            <Button variant="danger" className={`w-100 ${borderStyle}`} id="clear">
              AC
            </Button>
          </Col>
          <Col>
            <Button variant={groupTwo} className={`w-100 ${borderStyle}`} id="divide">
              /
            </Button>
          </Col>
          <Col>
            <Button variant={groupTwo} className={`w-100 ${borderStyle}`} id="multiply">
              x
            </Button>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="seven">
              7
            </Button>
          </Col>
          <Col>
            <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="eight">
              8
            </Button>
          </Col>
          <Col>
            <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="nine">
              9
            </Button>
          </Col>
          <Col>
            <Button variant={groupTwo} className={`w-100 ${borderStyle}`} id="subtract">
              -
            </Button>
          </Col>
        </Row>
        <Row noGutters>
          <Col>
            <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="four">
              4
            </Button>
          </Col>
          <Col>
            <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="five">
              5
            </Button>
          </Col>
          <Col>
            <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="six">
              6
            </Button>
          </Col>
          <Col>
            <Button variant={groupTwo} className={`w-100 ${borderStyle}`} id="add">
              +
            </Button>
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={9}>
            <Row noGutters>
              <Col>
                <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="one">
                  1
                </Button>
              </Col>
              <Col>
                <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="two">
                  2
                </Button>
              </Col>
              <Col>
                <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="three">
                  3
                </Button>
              </Col>
            </Row>
            <Row noGutters>
              <Col xs={8}>
                <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="zero">
                  0
                </Button>
              </Col>
              <Col xs={4}>
                <Button variant={groupOneColor} className={`w-100 ${borderStyle}`} id="decimal">
                  .
                </Button>
              </Col>
            </Row>
          </Col>
          <Col xs={3}>
            <Button variant="primary" className={`w-100 ${borderStyle} h-100`} id="equals">
              =
            </Button>
          </Col>
        </Row>
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

