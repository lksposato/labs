import './App.css';

export default function Home() {
    return (
    <div className="App">
      <header className="App-header">        
        <a
          className="App-link"
          href="https://lksposato.github.io/chromatography"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chromatography Lab
        </a>
        <p></p>
        <a
          className="App-link"
          href="https://lksposato.github.io/electrochemistry"
          target="_blank"
          rel="noopener noreferrer"
        >
          Electrochemistry Lab
        </a>
        <p></p>
        <a
          className="App-link"
          href="/kinetics"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kinetics Lab
        </a>
      </header>
    </div>
    );
}
