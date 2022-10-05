
import React, {Component} from 'react';
import axios from 'axios';
import Topspots from './topspots';
 class App extends Component {
  constructor(props) {
    super(props);


    this.state  = {
      topspots: [],
      userLoc: ''
      
    };
}

  componentWillMount()  {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
    /*if(navigator.geolocation) NavigationPreloadManager.geolocation.getCurrentPosition((position) => {
    this.setState({
      userLoc: {latitude: position.coords.latitude, longitude: position.coords.longitude}*
  });*/
};
  

  


render() {
  return (    
            <div className='App'> 
              <div className='container-fluid' style= {{background: '#ff06a0'}}>
                <div style={{borderRadius: '3px', background: 'ff06a0' }}>
                  <div className= 'row'>
                    <div className='col-sm-10'>
                      <div className='well well-md'>
                        <h1>San Diego Top Spots</h1>
                          <h3>A list of the top 30 places to see in San Diego, California.</h3>
                          <div>
                        <pre>{ /*JSON.stringify(this.state.topspots, null, 2) */}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  
                      
               {this.state.topspots.map((topspot, index) => (
                <Topspots
                key={index}
                userLoc={topspot} />
               ))}
          </div>
          </div> 
               );
}
}
               
              
              
                
        export default App;
               
                           
  
  
            
              