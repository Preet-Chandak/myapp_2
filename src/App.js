import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({ customer: '', service: '', time: '' });
  const [showForm, setShowForm] = useState(false);

  const addAppointment = () => {
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ customer: '', service: '', time: '' });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    setNewAppointment({ ...newAppointment, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Appointments</h1>
      <button type="button" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add Appointment'}
      </button>
      {showForm && (
        <form>
          <label>
            Customer:
            <input type="text" name="customer" value={newAppointment.customer} onChange={handleInputChange} />
          </label>
          <label>
            Service:
            <input type="text" name="service" value={newAppointment.service} onChange={handleInputChange} />
          </label>
          <label>
            Time:
            <input type="time" name="time" value={newAppointment.time} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={addAppointment}>
            Add Appointment
          </button>
        </form>
      )}
      <table>
        <thead>
          <tr>
          <th>Time</th>
            <th>Customer</th>
            <th>Service</th>
            
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.time}</td>
              <td>{appointment.customer}</td>
              <td>{appointment.service}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
