import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addText,addNr,addData } from './reducers';
import {Container,Tabs,Tab,Col,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [arata,setArata]=useState(false);
  const [eroare_text,SetEroareText]=useState(false);
  const [text, setText] = useState('Adrian');
  const [nr, setNr] = useState(25);
  const [data, SetData] = useState(1996);
  const texte = [...useSelector(state => state.texte)];
  const numere = [...useSelector(state => state.numere)];
  const date = [...useSelector(state => state.date)];
  const dispatch = useDispatch();
  const handleSubmit1 = event => {
    event.preventDefault();
    dispatch(addText(text))
    setText('Text');
  };

  const handleSubmit2 = event => {
    event.preventDefault();
    dispatch(addNr(nr))
    setNr('Nr');
  };

  const handleSubmit3 = event => {
    event.preventDefault();
    dispatch(addData(data))
    SetData('Data');
  };
  console.log(texte)
  console.log(numere)
  console.log(date)

  return (


<Container>

<div className="box">
      <button onClick={
       ()=>{
        setArata(true)
       }
      }>
        Creaza
      </button>


      
      {arata ? <div className="arata"> 
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="Text" title="Text">
              <form onSubmit={handleSubmit1}>
            <label>
              <p>
               Adauga Text
              </p>
              <input
                type="text"
                onChange={e => setText(e.target.value)}
                value={text}
                className='text_class'
                minLength="3"
                maxLength="20"
              />
            </label>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
          <button onClick={
       ()=>{
        setArata(false)
       }
      }>
        Ascunde
      </button>
          </Tab>
          <Tab eventKey="Numar" title="Numar">
          <form onSubmit={handleSubmit2}>
            <label>
              <p>
               Adauga NR
              </p>
              <input
                type="number"
                onChange={e => setNr(e.target.value)}
                name="quantity" min="1" max="5"
                value={nr}
              />
            </label>
            <div>
              <button type="submit">Add</button>
            </div>
          </form> 
            <button onClick={
          ()=>{
            setArata(false)
          }
          }>
            Ascunde
          </button>      
          </Tab>
          <Tab eventKey="Date" title="Date" >
          <form onSubmit={handleSubmit3}>
            <label>
              <p>
               Adauga data
              </p>
              <input
                type="date"
                onChange={e => SetData(e.target.value)}
                name="quantity"
                value={data}
              />
            </label>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
              <button onClick={
              ()=>{
                setArata(false)
              }
          }>
            Ascunde
          </button>
          </Tab>
        </Tabs>
      <Row>
        <Col md={4}>          
          <ul>
            {texte.map(text => (
              <li key={text.name}>
                <h3>{text.name}</h3>
              </li>
            ))}
          </ul> 
         { eroare_text ?   <p className="eroare">Textul trebuia sa aibe minim 3 charactere</p> : false}
       
        </Col>
        <Col md={4}>
        <ul>
        {numere.map(nr => (
          <li key={nr.nr}>
            <h3>{nr.nr}</h3>
          </li>
        ))}
      </ul>
        </Col>
        <Col md={4}>       
          <ul>
            {date.map(data => (
              <li key={data.data}>
                <h3>{data.data}</h3>
              </li>
            ))}
          </ul> 
        </Col>
      </Row>
      </div> : null}
        
    </div>
</Container>
   
  );
}

export default App;