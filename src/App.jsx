import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Tasks from "./components/tasks/Tasks"

import Task02 from "./components/tasks-2/Task02"

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to='/task/list' replace />} />
				<Route path="task/list" element={<Tasks />} />
				{/* <Route path="task/create" /> */}
				{/* <Route path="task/:id/edit" /> */}
				{/* <Route path="login" /> */}
			</Routes>
		</BrowserRouter>
	)
}

export default App