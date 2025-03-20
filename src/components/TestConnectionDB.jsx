import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestConnectionDB = () => {
  const [status, setStatus] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkDatabaseConnection = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/health/database');
        setStatus(response.data.message || 'Connected successfully!');
      } catch (err) {
        setError(`Error connecting to database: ${err.message}`);
        setStatus('Failed');
      }
    };
    checkDatabaseConnection();
  }, []);

  return (
    <div className="db-connection-status">
      <h3>Database Connection Status: </h3>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="status-message">{status}</div>
      )}
    </div>
  );
};

export default TestConnectionDB;