import React, { useState, useEffect } from 'react';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  useEffect(() => {
    // Simulate fetching appointments from an API
    const fetchedAppointments = [
      { time: '09:00', customer: '' },
      { time: '09:30', customer: 'Fabiola Ziemann', phone: '(875) 904-9468', stylist: 'Sam', service: 'Beard trim' },
      { time: '10:30', customer: '' },
      { time: '12:00', customer: '' },
      { time: '14:00', customer: '' },
      { time: '14:30', customer: 'Today\'s appointment' },
      { time: '15:00', customer: '' },
      // ... more appointments
    ];
    setAppointments(fetchedAppointments);
  }, []);

  const handleAddCustomer = () => {
    // Add logic to handle adding a customer
    // For simplicity, let's just log the customer details for now
    console.log('Added customer:', { name: customerName, phone: customerPhone });
    setCustomerName('');
    setCustomerPhone('');
  };

  const handleAddAppointment = () => {
    // Add logic to handle adding an appointment
    // For simplicity, let's just log the appointment details for now
    console.log('Added appointment:', { time: appointmentTime });
    setAppointmentTime('');
  };

  return (
    <div className="appointment-list">
      <h2>Appointments</h2>
      <div>
        <button onClick={handleAddCustomer}>Add Customer</button>
        <button onClick={handleAddAppointment}>Add Appointment</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Stylist</th>
            <th>Service</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.time}>
              <td>{appointment.time}</td>
              <td>{appointment.customer}</td>
              <td>{appointment.phone}</td>
              <td>{appointment.stylist}</td>
              <td>{appointment.service}</td>
              <td>{appointment.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
