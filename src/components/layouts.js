import React, { useRef, useEffect, useState } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import NavBar from "./navbar";
const Layouts = (props) => {
	const { children, handleScrollContact, handleScrollProjects } = props;
	const bodyRef = useRef(null);
	const [open, setOpen] = useState(false);
	const scrollNone = () => {
		disableBodyScroll(bodyRef.current);
	};
	useEffect(() => {
		open ? scrollNone() : clearAllBodyScrollLocks();
	}, [open]);
	return (
		<div
			ref={bodyRef}
			className={`font-Poppins dark:bg-[#121212] duration-500 ease-in-out min-h-screen transition-all dark:text-white`}
		>
			<NavBar
				handleScrollProjects={handleScrollProjects}
				handleScrollContact={handleScrollContact}
				open={open}
				setOpen={setOpen}
			/>
			<main>{children}</main>
		</div>
	);
};
export default Layouts;
