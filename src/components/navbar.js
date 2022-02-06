import React from "react";
import { Link, navigate } from "gatsby";
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
			<nav className="flex items-center justify-between w-11/12  mx-auto pt-14">
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
									<ul className="navbar-animations">
										<li className=" p-4  outline-none focus:outline-none ">
											<Link
												to="/about"
												onClick={() => {
													handleClose();
												}}
											>
												About
											</Link>
										</li>
										<li>
											<button
												className="    p-4  outline-none focus:outline-none "
												onClick={() => {
													handleClose();
													if (handleScrollProjects) {
														handleScrollProjects();
													} else {
														navigate("/projects");
													}
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
													if (handleScrollContact) {
														handleScrollContact();
													} else {
														navigate("/contact");
													}
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
									</ul>
								</div>
							</div>
						)}
					</li>
				</ul>
			</nav>

			<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
				<div class="container flex flex-wrap justify-between items-center mx-auto">
					<a href="#" class="flex">
						<svg
							class="mr-3 h-10"
							viewBox="0 0 52 72"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z"
								fill="#76A9FA"
							></path>
							<path
								d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z"
								fill="#A4CAFE"
							></path>
							<path
								d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z"
								fill="#1C64F2"
							></path>
						</svg>
						<span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
							FlowBite
						</span>
					</a>
					<button
						data-collapse-toggle="mobile-menu"
						type="button"
						class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="mobile-menu-2"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
						<svg
							class="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
					<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
						<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							<li>
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
									aria-current="page"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="App">
				<button
					className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					type="button"
					data-modal-toggle="default-modal"
				>
					Toggle modal
				</button>

				<div
					id="default-modal"
					aria-hidden="true"
					className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
				>
					<div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
							<div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
								<h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
									Terms of Service
								</h3>
								<button
									type="button"
									className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
									data-modal-toggle="default-modal"
								>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</button>
							</div>

							<div className="p-6 space-y-6">
								<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
									With less than a month to go before the European Union enacts
									new consumer privacy laws for its citizens, companies around
									the world are updating their terms of service agreements to
									comply.
								</p>
								<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
									The European Union’s General Data Protection Regulation
									(G.D.P.R.) goes into effect on May 25 and is meant to ensure a
									common set of data rights in the European Union. It requires
									organizations to notify users as soon as possible of high-risk
									data breaches that could personally affect them.
								</p>
							</div>

							<div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
								<button
									data-modal-toggle="default-modal"
									type="button"
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									I accept
								</button>
								<button
									data-modal-toggle="default-modal"
									type="button"
									className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
								>
									Decline
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
export default NavBar;
