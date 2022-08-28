import React from 'react';
import './consultancy.css';
const Consultancy = ()=>{
    return (
        <div className="section2">
            <div className="right">
                <form action="/consult" method="POST" className="form">
                    <h2>Consult online</h2>
                            <i className="fas fa-check-circle"></i>
                            <input type="text" name="name" placeholder="Full Name" required />
                            <div className="half">
                            <input type="number" name="phone" id="" placeholder="Phone " required />
                            <input type="email" name="email" id="" placeholder="E-mail" required />
                            </div>
                            <div className="half">
                            <select name="mode" id="">
                                <option value="">--- Select Mode ---</option>
                                <option value="person">In Person</option>
                                <option value="Vid_call">Video call</option>
                                <option value="Ph_call">Phone call</option>
                                <option value="Message">Whatsapp</option>
                            </select>
                            <select name="speciality" id="">
                                <option value="">--- Select speciality ---</option>
                                <option value="Quantitative_Analyst">Quantitative Analyst</option>
                                <option value="Financial_planner">Financial Planner</option>
                                <option value="Economic_analyst">Economic Analyst</option>
                                <option value="Financial_analyst">Financial Analyst</option>
                            </select>
                            </div>
                            
                            <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="left">
                <h2>Why Finco ?</h2>
                <ul>
                    <li>Round-the-clock adviser availability</li>
                    <li>Broad range of features</li>
                    <li>Detailed digital guides</li>
                    <li>Different types of finance related calculator related to finance</li>
                    <li>Digitised health records</li>
                </ul>
            </div>
        </div>
      
 
 
    );
}
export default Consultancy;