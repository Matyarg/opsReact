import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getReports } from '../../utils/api';
import LineChart from '../ReportTable/ReportTable';

const ReportList = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReports();
        setReports(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="report-list">
      {error && <p>Ocurrió un error: {error.message}</p>}
      {loading ? (
        <p>Cargando reportes...</p>
      ) : (
        <>
          <LineChart/>
          <Link to="/create">Crear nuevo reporte</Link>
        </>
      )}
    </div>
  );
};

export default ReportList;
