import React from 'react';
import './App.css';
export default function app (){
  return (
    <div>
      <Data />
    </div>
  )
}

function Data(){
  const data = [
    {
      name : "FREE",
      price: 0,
      enjoyments : ["single user",
    "5GB storage",
  "unlimited public projects",
"community access",
"unlimited private projects",
"dedicated phone support",
"Free Subdomain",
"monthly status reports",
    ]
    },
    {
      name : "PLUS",
      price: 9,
      enjoyments : ["5 users",
    "50GB storage",
  "unlimited public projects",
"community access",
"unlimited private projects",
"dedicated phone support",
"Free Subdomain",
"monthly status reports",
    ]
    },
    {
      name : "PRO",
      price: 49,
      enjoyments : ["Unlimited users",
    "150 GB storage",
  "unlimited public projects",
"community access",
"unlimited private projects",
"dedicated phone support",
"Unlimited Free Subdomain",
"monthly status reports",
    ]
    }
  ]
return (
  <div className="App">
    {
    data.map((plans,index)=>(<Display key = {index} name ={plans.name} price ={plans.price} enjoyments = {plans.enjoyments} />
    ))};
  </div>

);

}
function Display (props){
  console.log(props);
  return (
    <div className = "card">
    <div className = "plan-name">{props.name}</div>
    <p>${props.price}<sub>/month</sub></p>
    <p className='features'>{props.enjoyments.map((e,index) => <li key={index} > {e}</li>)}</p>
    <button className="buy">Button</button>

    </div>

  );
}