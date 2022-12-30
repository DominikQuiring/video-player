import React from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactPlayer 
      controls url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
      light = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.intermedia-solutions.net%2Fen%2Ffaq-help%2Fthumbnails-for-videos%2F&psig=AOvVaw3f4DhWaRSeMNv8JSrSidnx&ust=1672512356946000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOihjZiAovwCFQAAAAAdAAAAABAE"
      playing="true" />
    </div>
  );
}

export default App;
