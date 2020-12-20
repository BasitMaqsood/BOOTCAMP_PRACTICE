import './App.css';
import Card from './components/Card';
import Card2 from './components/Card2';

function App() {
  return (
    <div className="App">
      <h3>Hello Malik Basit Maqsood (Full Stack Developer)</h3>
      <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
        {[1, 2, 3].map(card => <Card />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between' }}>
        {[1, 2, 3].map(card => <Card2 />)}
      </div>
    </div>
  );
}

export default App;
