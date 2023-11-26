// AddInformation.jsx

import React, { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddInformation.scss';

export const AddInformation = () => {
  // State variables to store input values
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState('');
  const [expenseType, setExpenseType] = useState(''); // New state for expense type
  const [fontColor, setFontColor] = useState('red'); // New state for font color
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // code to check if user is logged in
  const checkLogin = () => {
    const isLoggedin = sessionStorage.getItem("username") !== null;
    if (!isLoggedin) {
      navigate("/");
    }
  }

  // this code will run only once when the component is mounted 
  // to check if user is logged in else it will redirect to login page
  useEffect(() => {
    console.log("Session User Name", sessionStorage.getItem("username"));
    checkLogin();
  }, []);




  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');

    // Here, you can handle the data as per your requirements, e.g., send it to a server or store it locally.
    console.log('Date:', date);
    console.log('Expenses:', expenses);
    console.log('Expense Type:', expenseType);



    const expense = {
      username: sessionStorage.getItem("username"),
      date: date,
      expense: expenses,
      category: expenseType,
    }

    // send data to server
    const retDict = await axios.post("/api/addExpense", expense);
    if(retDict.data.status === "success"){
      setFontColor('green');
      setSuccessMessage("Expense added successfully");
      
    } else {
      setFontColor('red');
      setSuccessMessage("Expense could not be added ! . Try Again.");
    }


    // Reset form fields after submission
    setDate('');
    setExpenses('');
    setExpenseType('');
  };

  // Common expenditure options
  const commonExpenditures = [
    'food','transport','entertainment','shopping','miscellaneous' , 
    'salary' , 'gift' , 'bonus' , 'investment' , 'education','healthcare','insurance','tax','rent','utilities',
  ];

  return (
    <div className='AddInfo'>
      <h1>Expense Tracker</h1>
      <h2 style={{color: fontColor}}>{successMessage}</h2>
      <form className='AddInfo' onSubmit={handleFormSubmit}>
        <div className='AddInfo'>
          <label className='AddInfo' htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className='AddInfo'>
          <label htmlFor="expenses" className='AddInfo'>Expenditure: </label>
          <input
            type="number"
            id="expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            required
          />
        </div>
        <div className='AddInfo'>
          <label htmlFor="expenseType" className='AddInfo'>Expenditure Type: </label>
          <select
            id="expenseType"
            value={expenseType}
            onChange={(e) => setExpenseType(e.target.value)}
            required
          >
            <option value="" disabled>Select an option</option>
            {commonExpenditures.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className='AddInfo'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
