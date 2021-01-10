import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';




<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

class App extends React.Component{
  
  constructor(){
    super()
    this.click = this.click.bind(this);
  
  
  this.state={
    name:'Amine srasra'
    ,proffesion:'web dev'
    ,bio:'Hello world'
    ,url:'https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521_960_720.jpg'
    ,show:false
    ,time:0
  }
  
  

  }
  
      click() {
        this.setState(
          {show:!this.state.show}
        )
        
          
        };
    

        componentDidMount() {
          this.intervalID = setInterval(
            () =>  this.setState({
              time:this.state.time+1
            }),
            1000
          );
          }
    
  

  render(){

return(
 

  <div > 
      <div className="container mt-5" >
      <div>
        <p>the time since the component has mounted: {this.state.time}.</p>
       <Button onClick={this.click} variant="success">Click</Button>  
       </div>
       { this.state.show && <> <div className="mt-3">
       <img src={this.state.url} alt="profil" style={{width:'250px',height:'250px'}}></img> 
       </div>
        <div className="d-flex justify-content-md-between justify-content-lg-center  justify-content-md-between mt-3">
       <div><h3>name:{this.state.name}</h3></div>
        <div><h3>proffesion:{this.state.proffesion}</h3></div>
       <div><h3>bio:{this.state.bio}</h3></div>
     
       </div>
       </>}
    
      
      </div>
    </div>
  
)
}
}


export default App;
