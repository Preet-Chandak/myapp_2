import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [appointments, setAppointments] = useState([
    {
      customer: 'Fabiola Ziemann',
      phone: '(875) 904-9468',
      service: 'Beard trim',
      time: '14:30',
      stylist: 'Sam',
      notes: ''
    }
  ]);
  const [newAppointment, setNewAppointment] = useState({ customer: '', service: '', time: '', phone: '', notes: '' });
  const [showForm, setShowForm] = useState(false);

  const addAppointment = () => {
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({ customer: '', service: '', time: '', phone: '', notes: '' });
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
            Phone:
            <input type="text" name="phone" value={newAppointment.phone} onChange={handleInputChange} />
          </label>
          <label>
            Service:
            <input type="text" name="service" value={newAppointment.service} onChange={handleInputChange} />
          </label>
          <label>
            Time:
            <input type="time" name="time" value={newAppointment.time} onChange={handleInputChange} />
          </label>
          <label>
            Notes:
            <input type="text" name="notes" value={newAppointment.notes} onChange={handleInputChange} />
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
            <th>Today's Appointments</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.time}</td>
              <td>
                <div>
                  <strong>Customer:</strong> {appointment.customer}
                </div>
                <div>
                  <strong>Phone:</strong> {appointment.phone}
                </div>
                <div>
                  <strong>Service:</strong> {appointment.service}
                </div>
                <div>
                  <strong>Notes:</strong> {appointment.notes}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
