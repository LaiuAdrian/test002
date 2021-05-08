import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addInfo } from './reducers';
import {Container,Col,Row,Modal,Button,Dropdown,ButtonGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [arata,setArata]=useState(false);

  const [info, setInfo] = useState('Adrian');
  const [min,setMin]=useState();
  const [max,setMax]=useState();
  const [val,setVal]=useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [tip,setTip]=useState();
  const informatii = [...useSelector(state => state.informatii)];

  const dispatch = useDispatch();
  
  const handleSubmit1 = event => {
    event.preventDefault();
    dispatch(addInfo(info,tip,val))
    setInfo();
    setTip();
    setVal();
  };

  console.log(informatii)
  console.log(tip)
  // console.log(max)

  return (

  <Container>
  <div className="box"> 
      <Button variant="primary" onClick={handleShow}>
        Creaza
      </Button>
    </div>
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
        <form onSubmit={handleSubmit1} className="formular">
        <label>
              <p>
               Nume formular:
              </p>
              <input
                type="text"
                onChange={e => setInfo(e.target.value)}
                value={info}
                className='text_class'
                minLength="3"
                maxLength="20"
                required
              />
            </label>
              <Dropdown as={ButtonGroup}>
                <Button>Alege tip-ul </Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item onClick={
                   ()=>{
                     setTip('number')
                   }
                  }>
                    Integer
                  </Dropdown.Item>
                  <Dropdown.Item onClick={
                   ()=>{
                     setTip('String')
                   }
                  }>
                    String
                  </Dropdown.Item>
                  <Dropdown.Item onClick={
                   ()=>{
                     setTip('date')
                   }
                  }>
                    Date
                  </Dropdown.Item>
                </Dropdown.Menu>
             </Dropdown>
            <div>
              <p>
               Adauga 
              </p>
              <div className="d-flex">
             <p> Min:  </p>
              <input
                type={tip}
                onChange={e => setMin(e.target.value)}
                name="quantity" 
                value={min}
                required
              />
              </div>
              <div className="d-flex">
              <p> Max: </p>
               <input
                type={tip}
                onChange={e => setMax(e.target.value)}
                name="quantity"
                required
                value={max}
              />
              </div>
              <div className="butoane">
                <Button 
                type="submit"
                value="Submit"
              
                
                  >Add</Button>
                          <Button 
                type="submit"
                value="Submit"
                onClick={()=>{
                  setArata(true)
                  setShow(false)
                  }}
                
                  >Vezi Lista
                  </Button>
              </div>
            </div>
          </form> 
   
      </Modal.Body>
      </Modal>

      {arata ? 
      <div className="arata">      
        {informatii.map(date => (
              <div key={date.name}>
                  <Row>
                  <Col md={4}>     
                  <h3>Field Name:{date.name}</h3>
                 </Col>
                 <Col md={4}>     
                  <h3>Type:{date.tip}</h3>
                 </Col>
                 <Col md={4}>     
                    <input
                      type={date.tip}
                      onChange={e => setVal(e.target.val)}
                      value={val}
                      className='text_class'
                      minLength={min}
                      maxLength={max}
                      min={min}
                      max={max}
                    />
                </Col>
                  </Row>
          
              </div>
            ))}
       

        <Col md={4}>     

        </Col>

      </div> : null}
</Container>
   
  );
}

export default App;