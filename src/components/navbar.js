import React from "react";
import { Link } from "gatsby";
import ThemeToggle from "./themeToggle";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../images/logo.png";

const NavBar = (props) => {
	const { handleScrollContact, handleScrollProjects, open, setOpen } = props;
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<header>
			<nav className="flex items-center justify-between w-11/12 mx-auto pt-14">
				<Link
					to="/"
					className="flex items-center justify-center dark:text-white "
				>
					<img src={logo} alt="Eslam Hesham" className="mr-3 sm:mr-4 " />
					<h2 className="font-bold sm:text-2xl ">Eslam Hesham</h2>
				</Link>
				<ul className="flex items-center justify-end">
					<li className="relative  z-40">
						<ThemeToggle />
					</li>
					<li className="ml-4">
						<div className=" relative top-0  z-40">
							<Hamburger toggled={open} toggle={setOpen} color={"#373737"} />
						</div>
						{open && (
							<div
								className={`fixed top-0 left-0 z-30  w-full  min-h-screen dark:text-white  transition-all navbar-background-opacity`}
							>
								<div className="text-2xl font-Poppins bg-white transition-all  dark:bg-[#121212] min-h-screen flex flex-col items-center justify-center">
									<ol className="navbar-animations">
										<li>
											<button
												className="    p-4  outline-none focus:outline-none "
												onClick={() => {
													handleClose();
													handleScrollProjects();
												}}
											>
												Projects
											</button>
										</li>
										<li className="">
											<button
												className=" p-4  outline-none focus:outline-none "
												onClick={() => {
													handleClose();
													handleScrollContact();
												}}
											>
												Let's Talk
											</button>
										</li>
										<li className="p-4">
											<a
												href="https://github.com/eslamheshamm"
												target="_blank"
												rel="noopener noreferrer"
											>
												GitHub
											</a>
										</li>
										<li className="p-4">
											<a
												href="https://docs.google.com/document/d/e/2PACX-1vRjAfwhkhrz1VnnuoEIf2vj8CV1vr-6R7tK5sGCG4E0oBzcxFDCsRH87-xIFJVGdgZYc4Jz-0URtf-b/pub"
												target="_blank"
												rel="noopener noreferrer"
											>
												Résumé
											</a>
										</li>
									</ol>
								</div>
							</div>
						)}
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default NavBar;
