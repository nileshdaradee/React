import React, { useState } from 'react'
import { questions } from './Data/faqQuestion'

export const Faq = () => {

    let [currentid,setcurrentid]=useState(questions[0].id)
let items=questions.map((itemsdata,i)=>{

    let itemsdetails={
        itemsdata,
        currentid,
        setcurrentid
    }
    return(
        <Faqitems itemsdetails={itemsdetails} key={i}/>
    )
})


  return (
    <div>
        <h1>Frequently Asked Questions?</h1>
        <div className="faqouter">
        {items}

        </div>
    </div>
  )
}


function Faqitems({itemsdetails})
{
    
    return(
        <div className="faqitems">
        <h2  onClick={()=>{itemsdetails.setcurrentid(itemsdetails.itemsdata.id)}}>{itemsdetails.itemsdata.question}</h2>
        <p  className={itemsdetails.currentid===itemsdetails.itemsdata.id ?'activeans':''}>{itemsdetails.itemsdata.answer}</p>
        </div>
    )
}