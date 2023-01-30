import "./App.css";
import {Route, Routes} from "react-router-dom";

import ReportList from "./components/ReportList/ReportList";
import ReportDetail from "./components/ReportDetail/ReportDetail";
import ReportForm from "./components/ReportForm/ReportForm";

function App() {
	return (
		<div>
			hola
			<Routes>
				<Route exact path="/" element={<ReportList/>}/>
				{/* <Route exact path="/create" element={<ReportForm/>} />
				<Route exact path="/report/:reportId" element={<ReportDetail/>} /> 
				<Route exact path="/edit/:reportId" element={<ReportForm/>} /> */}
			</Routes>
		</div>
	);
}

export default App;
