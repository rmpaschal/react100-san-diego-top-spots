import TopSpot from './topspot';
import React, {Component} from 'react';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);


    this.state  = {
      topspots: []
      
      
    };
}

  componentDidMount()  {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
    }
   
  

  


render() {
  return (   
    <div className='container-fluid'>
       <div className='card'>
          <div className='card-body' backgroundImage> 
              <h1>San Diego Top Spots</h1>
              <p>A list of the top 30 places to see in San Diego, California.</p>
          </div>
        </div>
                
                
                {
                  this.state.topspots.map(topspot => (
                    <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location} 
                />
            ))
                };
                </div>
  );
              }
            }
        
            
  
  export default App;
               
                           
  

        
