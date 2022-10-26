import Photo from './components/profile/ProfilePhoto.js'
import Name from './components/profile/FullName.js'
import Address from './components/profile/Address.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
    
     
     <img src={Photo.image2} className="imgi" alt=""/>
     
     { Name+': ' +Address }
      
      </header>
      <body>
      <img src= {Photo.image1} className="imgii" alt=""/>
      </body>
    </div>
  );
}

export default App;
