import './App.css';
import CustomerList from  './components/CustomerList/CustomerList';
import CustomerForm from './components/CustomerForm/CustomerForm';
import { useState } from 'react';

function App() {
  const [customers, setCustomers] = useState([]);

  const addNewCustomer = (newCustomer) => {
      setCustomers([newCustomer, ...customers]);
  };
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
     <CustomerForm addNewCustomer={addNewCustomer} />
     {customers.length === 0 && "*There is no customer..."}
     <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  );
}

export default App;
