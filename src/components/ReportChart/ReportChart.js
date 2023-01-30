import React from 'react';
// import './ReportTable.css';

const ReportTable = ({ reports }) => {
  return (
    <table className="report-table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Equipo</th>
          <th>Problema</th>
          <th>Solución</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report) => (
          <tr key={report.id}>
            <td>{report.date}</td>
            <td>{report.equipment}</td>
            <td>{report.problem}</td>
            <td>{report.solution}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
