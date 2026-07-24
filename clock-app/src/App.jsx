import "./App.css";
import Heading from './components/Heading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';

function App() {
  return (
    <div className="app-container glass-card">
      <Heading />
      <ClockSlogan />
      <CurrentTime />
    </div>
  );
}

export default App;
