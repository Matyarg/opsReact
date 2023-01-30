import React, { useState, useEffect } from 'react';
import { useParams, useNavigate ,  Link} from 'react-router-dom';
import { getReports, updateReport, deleteReport } from '../../utils/api';

const ReportDetail = () => {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getReports(reportId);
        setReport(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reportId]);


const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await updateReport(reportId, report);
        navigate('/');
    } catch (err) {
        setError(err);
    }
    };

    const handleDelete = async () => {
    try {
        await deleteReport(reportId);
        navigate('/');
    } catch (err) {
        setError(err);
    }
    };

    return (
    <div className="report-detail">
        {error && <p>Ocurrió un error: {error.message}</p>}
        {loading ? (
        <p>Cargando reporte...</p>
        ) : (
        <>
            <h1>Reporte de mantenimiento #{report.id}</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="description">
                Descripción:
                <textarea
                name="description"
                value={report.description}
                onChange={(event) =>
                    setReport({ ...report, description: event.target.value })
                }
                />
            </label>
            <button type="submit">Actualizar reporte</button>
            </form>
            <button onClick={handleDelete}>Eliminar reporte</button>
            <Link to="/">Volver al listado</Link>
        </>
        )}
    </div>
    );
};

export default ReportDetail;
