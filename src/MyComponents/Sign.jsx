import { useState } from "react";
import './sign.css';
const Sign = ()=>{
   
    const [cd, setCd] = useState(true);
    return(
        <div class="container2">

        <div class="form2">
            <div class={cd? 'openRegistor inner-box' : 'openLogin inner-box'} id="card ">
                <div class="front-cov">
                    <h2>Login</h2>
                    <i className="fas fa-check-circle"></i>
                    <form action="/login">
                        <input type="email" class="input-box" placeholder="Email-Id" required />
                        <input type="password" class="input-box" placeholder="password" required />
                        <button class="submit-btn">Submit</button>
                        {/* <input type="checkbox" class="check" /><span>Remember me</span> */}
                    
                    </form>
                    <button class="submit-btn" id="front-btn" onClick={()=>{setCd(!cd)}}>I'm New here</button>
                    <a href="">Forgot password</a>
                    
                </div>
                <div class="back-cov" id="back-cov">
                    <h2>Registor</h2>
                    <i className="fas fa-check-circle"></i>
                    <form action="/registor">
                        <input type="name" class="input-box" placeholder="Name" required />
                        <input type="email" class="input-box" placeholder="Email-Id" required />
                        <input type="password" class="input-box" placeholder="password" required />
                        <button class="submit-btn">Submit</button>
                        {/* <div><input type="checkbox" class="check" /><span>Remember me</span></div> */}
                        
                    
                    </form>
                    <button class="submit-btn" id="back-btn" onClick={()=>{setCd(!cd)}}>Already have an account</button>
                    <a href="">Forgot password</a>
                </div>
            </div>
            

        </div>
    </div>
    )
}
export default Sign;