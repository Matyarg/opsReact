import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createReport, getReports , updateReport } from "../../utils/api";
import {useEffect} from 'react';

const ReportForm = () => {
    const navigate = useNavigate();
	const { reportId } = useParams();
	const [report, setReport] = useState({
		description: "",
	});
	const [error, setError] = useState(null);

	useEffect(() => {
		if (reportId) {
			// Si se está editando un reporte existente, cargar los datos del reporte
			// en el formulario
			getReports(reportId).then((response) => {
				setReport(response.data);
			});
		}
	}, [reportId]);

		const handleSubmit = async (event) => {
			event.preventDefault();
			try {
				if (reportId) {
					// Si se está editando un reporte existente, utilizar la función
					// updateReport
					await updateReport(reportId, report);
				} else {
					// Si se está creando un nuevo reporte, utilizar la función createReport
					await createReport(report);
				}
				navigate('/');
			} catch (err) {
				setError(err);
			}
		};
	

	return (
		<div>

			<form onSubmit={handleSubmit}>
			{error && <p>Ocurrió un error: {error.message}</p>}
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
			<button type="submit">Enviar</button>
			<button type="button" onClick={() => navigate("/")}>
				Cancelar
			</button>
		</form>
		</div>
	);}


export default ReportForm;
