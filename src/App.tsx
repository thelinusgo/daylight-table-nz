import './App.css';
import { DaylightTableService } from './data/daylightTableService';
import { DaylightTableInputComponent } from './presentation/DaylightTableInputComponent';

function App() {
  // Dependencies
  const daylightService = new DaylightTableService();

  // Render the app
  return (
    <div className="App">
      <header className="App-header">
        <h1>Daylight Table Calculator!</h1>
        <p>This web-app is a handy way to determine Morning Civil Twilight and Evening Civil Twilight for any given region within NZ.</p>
        <DaylightTableInputComponent daylightService={daylightService} />
      </header>
    </div>
  );
}

export default App;