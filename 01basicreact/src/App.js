
import { Card, Col, Container, Row,Button } from "react-bootstrap";
import Footer from "./footer";
import Header from "./header";
import { blog } from "./Data/blog";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import { useState } from "react";
import btnModule from './button.module.css'
import { questions } from "./Data/faqQuestion";
import { Faq } from "./faq";




function App() {

  // let [count,setCount]=useState(1);
  // let [pshow,setPshow]=useState(false);
  // let template='';

  // if(pshow)
  //   {
  //     template=<>

  //   <button className="bg-[red] p-[10px] mr-3" onClick={()=>{setPshow(false)}}>Hide</button>
  //   <p>Welcome to ws is the paragraph which is hide from the main section</p>;

  //     </>

  //   }
  // else{
  //   template=<button className="bg-[red] p-2" onClick={()=>{setPshow(true)}}>show</button>;
  // }
  // let headerInfo={
  //   email:"ws@gmail.com",
  //   phone:"234324"
  // }

  // let displaydata=()=>{
  //   // n++;
  //   // alert(`Welcome to Ws Cube tech ${n}`);
  //   setCount(count+1);

  // }

  // let addData=(a,b)=>
  // {
  //   alert( `the sum is ${a+b}`);
  // }

  // let n=10;

  let [pstatus,setPstatus]=useState(false);
  let [menuStatus,setMenustatus]=useState(false);
  let [modelStatus,setModelStatus]=useState(false);
  let [showAnsid,setshowAnsid]=useState(questions[0].id);

  

  return (
    <div className="app">

    <Faq/>

    {/* <div>
      <h1>Frequently Asked Questions (FAQs)</h1>
      <div className="faqouter">
        {questions.map((faqitems,i)=>{
          return (
          <div className="faqitems">
      <h2 onClick={()=>{setshowAnsid(faqitems.id)}}>{faqitems.question}</h2>
      <p className={showAnsid==faqitems.id ? 'activeans':''}>{faqitems.answer}</p>
      </div>
          )
        })}
      
      </div>
    </div> */}

    </div>
    
    // <div>
    //   <button className="en" onClick={()=>{setModelStatus(true)}}>Enquire Now</button>
    //   <div onClick={()=>{setModelStatus(false)}} className={`modeloverlay ${modelStatus ? 'modelshow':''}`}>

    //   </div>
    //   <div className={`modeldiv ${modelStatus ? 'showmodeldiv' : ''}`}>
    //     <h3>Enquire Now  <span onClick={()=>{setModelStatus(false)}}>
    //       &times;
    //       </span></h3>

    //   </div>




//{
   /*
      <button className="micon" onClick={()=>{setMenustatus(!menuStatus)}}>
        {
          menuStatus ?
          <span>&times;</span>
          :
          <span>&#9776;</span>
        }
      </button>
      <div className={`menu ${menuStatus ? 'activemenu ': ''} `}>
         
         <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Feedback</li>
          <li>Courses</li>
          <li>Email</li>

         </ul>

      </div>

      <input type={pstatus ? "text" : "password"} className={btnModule.border}/>
      <button className="bg-[white] p-[10px] mr-3" onClick={()=>{setPstatus(!pstatus)}}>{pstatus ? 'Hide' : 'Show'}</button> */
    // </div>
  //  <>
  //  <Header headerInfo={headerInfo}>
  //   <h1  className="text-3xl font-bold underline italic" >Header wala part</h1>
  //   <FontAwesomeIcon icon={faWhatsapp}/>
  //  </Header>
    

  //  {template}
  //  <div>
  //  {count}
  //  </div>
  //  <button className="bg-[red] p-[10px] mr-3"  onClick={()=>{addData(23,34)}}>Cal</button>
  //  <button className="bg-[red] p-[10px]" onClick={displaydata}> Click</button>

  //  <div>

  //  </div>

  //  <button className={btnModule.error}>Error</button>
  //  <button className={btnModule.warning}>Warning</button>

  //  {/* <button className="bg-[red] p-[10px] mr-3 ml-3"  onClick={()=>{setPshow(true)}}>button</button> */}
  //  <Footer/>
  // //  </>
  );
}


export default App;


function ProductItems({pitems}){
  return(
  <Col lg="3" md="6">
    <Card>
          <Card.Body>
            <Card.Title>{pitems.title}</Card.Title>
            <Card.Text>
              {pitems.body}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
     </Card>
  </Col>
  )
}