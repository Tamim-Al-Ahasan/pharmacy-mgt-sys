import React, { useState } from 'react';

const OrderStatusForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [trackingId, setTrackingId] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tracking ID:', trackingId);
    console.log('Date:', date);
    console.log('Status:', status);
    setTrackingId('');
    setDate('');
    setStatus('');
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide' : 'Add Product Status'}
      </button>
      {showForm && (
        <div>
          <h2>Add Product Tracking</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Tracking ID:
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
            </label>
            <br />
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <br />
            <label>
              Status:
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default OrderStatusForm;
