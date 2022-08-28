const TaxCalculator = ()=>{
    return (
<>
        <section class="section">
        <div class="container">
          <div class="content">
            <h1>Tax calculator</h1>
            <p>
               .
            </p>
          </div>
  
          <div class="columns">
            <div class="column is-three-quarters">
              <div class="card">
                <div class="card-content">
                  <form id="loan-form">
                    
                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">1</p>
                          Annual Gross Salary (Rs)
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="annual_gross_salary" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">2</p>
                          Standard Deduction
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="standard_deduction" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">3</p>
                          HRA
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="hra" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">4</p>
                          PT and Entertainment Allowance
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="pt" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">5</p>
                          NPS
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="nps" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">6</p>
                          Leave Travel Allowance
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="lta" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">7</p>
                          Home Loan Interest Payment
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="homeloaninterest" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">8</p>
                          Deduction u/s 80C
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="deductions80c" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">9</p>
                          Health Insurance U/s 80D
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="healthinsurence" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="level">
                      <div class="level-left is-marginless">
                        <div class="level-item">
                          <p class="number">10</p>
                          Saving Bank Interest u/s 80TTA
                        </div>
                      </div>
  
                      <div class="level-right">
                        <div class="level-item">
                          <div class="field">
                            <div class="control has-icons-left ">
                              <input class="input" id="sbi" type="number" />
                              <span class="icon is-small is-left">
                                <i class="fa fa-rupee-sign"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


  
                    
  
                    <div class="control">
                      <button
                        class="button is-large is-fullwidth is-primary is-outlined"
                      >
                        Calculate
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
        
      </section>

      <section class="section"> 
      
  <div class="columns is-multiline">
    
    <div class="column is-12-tablet is-6-desktop is-3-widescreen">
      <div class="notification is-info has-text">
        <p id="totaldeduction" class="title is-1">₹</p>
        <p class="subtitle is-4">Total Deductions</p>
      </div>
    </div>
  
      <div class="column is-12-tablet is-6-desktop is-3-widescreen">
          <div class="notification is-info has-text">
            <p id="oldincome" class="title is-1">₹</p>
            <p class="subtitle is-4">TAXABLE INCOME (OLD)</p>
          </div>
        </div>
  
        <div class="column is-12-tablet is-6-desktop is-3-widescreen">
          <div class="notification is-link has-text">
            <p id="newincome" class="title is-1">₹</p>
            <p class="subtitle is-4">TAXABLE INCOME (NEW)</p>
          </div>
        </div>
  
  </div>
  </section>
  <section class="section"> 
      
    <div class="columns is-multiline">
      
      <div class="column is-12-tablet is-6-desktop is-4-widescreen">
        <div class="notification is-primary has-text">
          <p id="OLDTAX" class="title is-1">₹</p>
          <p class="subtitle is-4">Tax acc. to old system</p>
        </div>
      </div>

    </div>
    </section>
    <section class="section"> 
      
      <div class="columns is-multiline">
        
        <div class="column is-12-tablet is-6-desktop is-4-widescreen">
          <div class="notification is-primary has-text">
            <p id="NEWTAX" class="title is-1">₹</p>
            <p class="subtitle is-4">Tax acc. to new system</p>
          </div>
        </div>
  
      </div>
    </section>
    </>

    );
};

export default TaxCalculator;