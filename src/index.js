import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Display = (props) => {
  return (
    <div className="bg-secondary pr-2 py-1">
      <Row  noGutters className="justify-content-end text-info"> {props.calculate}</Row>
      <Row  noGutters className="justify-content-end text-light" id="display"> {props.display}</Row>
    </div>
  );
};
const Buttons = (props) => {
  const groupOneColor = 'secondary';
  const groupTwo = 'dark';
  const borderStyle = 'border-light';

  const onPressNumber = (number) => {
    props.handleNumber(number);
  }
  const onPressOperation = (op) => {
    props.handleOperation(op);
  }
  const onPressEqual = () => {
    props.handleEqual();
  }
  return ( 
    <div className="pt-3">
      <Row noGutters >
        <Col xs={6}>
          <Button 
            variant="danger" 
            className={`w-100 ${borderStyle}`} 
            id="clear"
            onClick={() => {props.clear()}}
          >
            AC
          </Button>
        </Col>
        <Col>
          <Button 
            variant={groupTwo} 
            className={`w-100 ${borderStyle}`} 
            id="divide"
            value="div"
            onClick={(e) =>{onPressOperation(e.target.value)}}
          >
            /
          </Button>
        </Col>
        <Col>
          <Button 
            variant={groupTwo} 
            className={`w-100 ${borderStyle}`} 
            id="multiply"
            value="mul"
            onClick={(e) =>{onPressOperation(e.target.value)}}
            
          >
            x
          </Button>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <Button 
            variant={groupOneColor} 
            className={`w-100 ${borderStyle}`} 
            id="seven" 
            value="7" 
            onClick={(e) =>{onPressNumber(e.target.value)}}
          >
            7
          </Button>
        </Col>
        <Col>
          <Button 
            variant={groupOneColor} 
            className={`w-100 ${borderStyle}`} 
            id="eight"
            value="8" 
            onClick={(e) =>{onPressNumber(e.target.value)}}
          >
            8
          </Button>
        </Col>
        <Col>
          <Button 
            variant={groupOneColor} 
            className={`w-100 ${borderStyle}`} 
            id="nine"
            value="9" 
            onClick={(e) =>{onPressNumber(e.target.value)}}
          >
            9
          </Button>
        </Col>
        <Col>
          <Button 
            variant={groupTwo} 
            className={`w-100 ${borderStyle}`} 
            id="subtract"
            value="sub"
            onClick={(e) =>{onPressOperation(e.target.value)}}
          >
            -
          </Button>
        </Col>
      </Row>
      <Row noGutters>
        <Col>
          <Button 
            variant={groupOneColor} 
            className={`w-100 ${borderStyle}`} 
            id="four"
            value="4" 
            onClick={(e) =>{onPressNumber(e.target.value)}}
          >
            4
          </Button>
        </Col>
        <Col>
          <Button 
            variant={groupOneColor} 
            className={`w-100 ${borderStyle}`} 
            id="five"
            value="5" 
            onClick={(e) =>{onPressNumber(e.target.value)}}
          >
            5
          </Button>
        </Col>
        <Col>
          <Button 
            variant={groupOneColor} 
            className={`w-100 ${borderStyle}`} 
            id="six"
            value="6" 
            onClick={(e) =>{onPressNumber(e.target.value)}}
          >
            6
          </Button>
        </Col>
        <Col>
          <Button 
            variant={groupTwo} 
            className={`w-100 ${borderStyle}`} 
            id="add"
            value="add"
            onClick={(e) =>{onPressOperation(e.target.value)}}
          >
            +
          </Button>
        </Col>
      </Row>
      <Row noGutters>
        <Col xs={9}>
          <Row noGutters>
            <Col>
              <Button 
                variant={groupOneColor} 
                className={`w-100 ${borderStyle}`} 
                id="one"
                value="1" 
                onClick={(e) =>{onPressNumber(e.target.value)}}
              >
                1
              </Button>
            </Col>
            <Col>
              <Button 
                variant={groupOneColor} 
                className={`w-100 ${borderStyle}`} 
                id="two"
                value="2" 
                onClick={(e) =>{onPressNumber(e.target.value)}}
              >
                2
              </Button>
            </Col>
            <Col>
              <Button 
                variant={groupOneColor} 
                className={`w-100 ${borderStyle}`} 
                id="three"
                value="3" 
                onClick={(e) =>{onPressNumber(e.target.value)}}
              >
                3
              </Button>
            </Col>
          </Row>
          <Row noGutters>
            <Col xs={8}>
              <Button 
                variant={groupOneColor} 
                className={`w-100 ${borderStyle}`} 
                id="zero"
                value="0" 
                onClick={(e) =>{onPressNumber(e.target.value)}}
              >
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
          <Button 
            variant="primary" 
            className={`w-100 ${borderStyle} h-100`} 
            id="equals"
            onClick={(e) =>{onPressEqual()}}
          >
            =
          </Button>
        </Col>
      </Row>
    </div>
   );
}
const App = () => {
  const [display, setDisplay] = React.useState(0);
  const [displayOperations, setDisplayOperations] = React.useState(0);
  
  
  const [displayState, setDisplayState] = React.useState([]);
  const [operationsState, setOperationsState] = React.useState([]);
  
  const clear = ()=>{
    setDisplayState([]);
    setOperationsState([]);
    setDisplay([0]);
    setDisplayOperations([0]);
  };
  const handleNumber = (number) => {

    setDisplayState([...displayState, number])
    setDisplay([...displayState, number]);
    setOperationsState([...operationsState, number])
    setDisplayOperations([...operationsState, number])

  }
  const handleOperation = (op) => {
    setOperationsState([...operationsState, ops[op]])
    setDisplayState([]);
  }
  const handleEqual = () => {
    console.log(operationsState.join(''))
    let evaled;
    try {
      evaled = eval(operationsState.join(''));
    } catch(e) {
      evaled = 0;
    }
    setOperationsState([]);
    setDisplayOperations([...operationsState, ' ', '=', evaled]);
    setDisplay([evaled]);
    setDisplayState([]);
    
  }
  const ops = {
    add: '+',
    sub: '-',
    mul: '*',
    div: '/',
  }
  return(
    <Container className="w-25 bg-dark pb-3 pt-3 mt-4 ">
        <Display 
          display={display} 
          calculate={displayOperations}
        />
        <Buttons 
          clear={() => {clear()}}
          handleNumber={(number) => {handleNumber(number)}}
          handleOperation={(op) => {handleOperation(op)}}
          handleEqual={() => {handleEqual()}}
        />
    </Container>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

