import { BrowserRouter, Routes, Route } from "react-router-dom";
import { G_width, getWidth } from "./utils/DeviceDetect";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./page/Home"));

const App = () => {
	return (
		<G_width.Provider value={getWidth()}>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<Suspense fallback={<>Loading...</>}>
								<Home />
							</Suspense>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</G_width.Provider>
	);
};

export default App;
