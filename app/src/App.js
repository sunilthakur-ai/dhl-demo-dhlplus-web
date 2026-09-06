import logo from './12975.jpg';
import './App.css';
 
function App() {
  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', height: '100vh' }}>
      <img src={logo} alt="logo" style={{ width: '100%', height: '100vh', objectFit: 'cover', display: 'block' }} />
    </div>
 
  );
}
 
export default App;