import logo from './assets/investment-calculator-logo.png';
import Form from './components/form';
import Table from './components/table';

function App() {
 

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <Form/>
      <Table/>
      
      

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

    </div>
  );
}

export default App;
