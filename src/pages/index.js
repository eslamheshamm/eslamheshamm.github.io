import * as React from "react";
import { Link } from "gatsby";

import { Spin as Hamburger } from "hamburger-react";
import logo from "../images/logo.png";

import AboutMe from "../components/home/about-me";
import Projects from "../components/home/projects";
import ContactMe from "../components/home/contact-me";
import ThemeToggle from "../components/themeToggle";
import Seo from "../components/seo";
const IndexPage = () => {
	const [open, setOpen] = React.useState(false);
	const projectsRef = React.useRef(null);
	const contactRef = React.useRef(null);
	const handleClose = () => {
		setOpen(false);
	};
	const handleScrollProjects = () => {
		if (projectsRef && projectsRef.current) {
			projectsRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	const handleScrollContact = () => {
		if (contactRef && contactRef.current) {
			contactRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<Seo title="Home" />
			<header className="dark:bg-[#121212]">
				<nav className="flex items-center justify-between w-11/12 mx-auto pt-14">
					<Link
						to="/"
						className="flex items-center justify-center dark:text-white"
					>
						<img src={logo} alt="Eslam Hesham" className="mr-3 sm:mr-4" />
						<h2 className="font-bold sm:text-2xl ">Eslam Hesham</h2>
					</Link>
					<ul className="flex items-center justify-end">
						<li className="">
							<ThemeToggle />
						</li>
						<li className="ml-4">
							<Hamburger toggled={open} toggle={setOpen} color={"#373737"} />
							{open && (
								<ul className="absolute top-28 w-28 rounded-lg bg-gray-100 transform -translate-x-2/4 overflow-hidden">
									<li>
										{" "}
										<button
											className="h-10 flex items-center w-full  rounded-lg  transition-all p-4 hover:bg-gray-50 outline-none focus:outline-none "
											onClick={() => {
												handleClose();
												handleScrollProjects();
											}}
										>
											Projects
										</button>
									</li>
									<li>
										<button
											className="h-10 flex items-center w-full font-semibold rounded-lg transition-all p-4 hover:bg-gray-50 outline-none focus:outline-none "
											onClick={() => {
												handleClose();
												handleScrollContact();
											}}
										>
											Let's Talk
										</button>
									</li>
									<li>
										<a
											href="https://github.com/eslamheshamm"
											target="_blank"
											rel="noopener noreferrer"
											className=" h-10 flex items-center w-full rounded-lg transition-all p-4 hover:bg-gray-50 "
										>
											GitHub
										</a>
									</li>
									<li>
										{" "}
										<a
											href="https://docs.google.com/document/d/e/2PACX-1vRjAfwhkhrz1VnnuoEIf2vj8CV1vr-6R7tK5sGCG4E0oBzcxFDCsRH87-xIFJVGdgZYc4Jz-0URtf-b/pub"
											target="_blank"
											rel="noopener noreferrer"
											className=" h-10 flex items-center w-full rounded-lg transition-all p-4 hover:bg-gray-50 "
										>
											Résumé
										</a>
									</li>
								</ul>
							)}
						</li>
					</ul>
				</nav>
			</header>
			<main className="font-Poppins min-h-screen dark:bg-[#121212] dark:text-white">
				<AboutMe />
				<Projects ref={projectsRef} />
				<ContactMe ref={contactRef} />
			</main>
		</>
	);
};

export default IndexPage;
