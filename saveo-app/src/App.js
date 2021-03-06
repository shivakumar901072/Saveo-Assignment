import React from 'react';
import './App.css';

const initialState = {
  location: '',
  latittude: '',
  longitude: ''
}

class App extends React.Component {
// const [location, setLocation] = useState('');
// const[Latittude,setLattitude] = useState('');
// const[longitude,setLongitude] = useState('');
state= initialState;


 handleLocation =(e) => {
  this.setState({location: e.target.value});  
}
 handleLattitude=(e) => {
  this.setState=({latittude: e.target.value});  

}
 handleLongitude =(e) => {
  this.setState=({longitude: e.target.value});  
}

 addLocation =(e) => {
  e.preventDefault();
  console.log(this.state)
  this.setState({
    location:this.state.location,
    latittude:this.state.latittude,
    longitude:this.state.longitude
  }
  )

 }
render() {

  return (
    <div className="App">
      <div className="innerDiv">
        <div className="nav">
        <section>
      <form onSubmit={this.addLocation}>
        <label className="location" >Location Name</label>
        <label className="lat"  >Enter Latittude</label>
        <label className="lon"  >Enter Longitude</label><br/>


      <input className="inputLoc" type="text" placeholder="Location"value={this.state.location} onChange={this.handleLocation} ></input>
      
      <input className="inputLat" type="Number" placeholder="Lat" value={this.state.latittude} onChange={this.handleLattitude}></input>
      
      <input className="inputLo" type="Number" placeholder="Lon"value={this.state.longitude} onChange={this.handleLongitude}></input>
      <button  type="submit" className="btn">Submit</button>
      </form>
      </section>
        </div>
        <div className="row">
          <div className="column">
            shiva 
            <div>
              {this.state.location} {this.state.latittude} {this.state.longitude}
            </div>
          </div>
          <div className="column2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3949543.6136211567!2d76.89042892848849!3d14.836937389057514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1614884138581!5m2!1sen!2sin" width="463" height="416"   loading="lazy"></iframe>

          </div>

        </div>
        

        </div>
    
    </div>
  );
}
}

export default App;
