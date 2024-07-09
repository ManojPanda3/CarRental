import { Suspense } from "react";

const InorderLoad = ({ children }) => {
	return (
		<>
			{children.map((e, i) => {
				return (
					<Suspense fallback={<>Loading ...</>} key={i}>
						{e}
					</Suspense>
				);
			})}
		</>
	);
};

export default InorderLoad;
