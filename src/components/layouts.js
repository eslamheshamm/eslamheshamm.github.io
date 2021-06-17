import React from "react";

const Layouts = (props) => {
	const { children } = props;
	return (
		<main className="font-Poppins min-h-screen dark:bg-black dark:text-white">
			{children}
		</main>
	);
};
export default Layouts;
