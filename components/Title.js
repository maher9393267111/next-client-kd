import React from 'react';

const jumbotron = ({children}) => {
    return (
        <div>
            
            <div class="jumbotron jumbotron-fluid danger">
  <div class="container">
    <h1 class="display-4">{children}</h1>
   
  </div>
</div>




        </div>
    );
}

export default jumbotron;
