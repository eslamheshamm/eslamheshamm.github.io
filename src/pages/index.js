import * as React from "react";
import Layouts from "../components/layouts";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import AboutMe from "../components/home/about-me";
import Projects from "../components/home/projects";
import ContactMe from "../components/home/contact-me";
import ThemeToggle from "../components/themeToggle";

const IndexPage = () => {
	const useStyles = makeStyles((theme) => ({
		root: {
			display: "flex",
		},
		paper: {
			boxShadow: " none",
		},
		menu: {
			border: 0,
			borderRadius: 1,
			padding: 0,
			backgroundColor: "transparent",
			boxShadow: "none",
		},
		menuItem: {
			backgroundColor: "transparent",
			color: "red",
		},
	}));

	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const projectsRef = React.useRef(null);
	const contactRef = React.useRef(null);
	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
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

	const handleListKeyDown = (event) => {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	};
	const theme = "dark";
	return (
		<>
			<header className="dark:bg-[#121212]">
				<nav className="flex justify-between items-center w-10/12 mx-auto pt-14">
					<Link
						to="/"
						className="flex items-center justify-center dark:text-white"
					>
						<img src={logo} alt="Eslam Hesham" className="mr-4" />
						<h2 className="font-bold text-2xl ">Eslam Hesham</h2>
					</Link>
					<div className="flex items-center">
						<ThemeToggle />
						<button
							ref={anchorRef}
							className="border-opacity-0 focus:outline-none ml-4 "
							aria-controls={open ? "menu-list-grow" : undefined}
						>
							<Hamburger toggled={open} toggle={setOpen} color={"#E5E7EB"} />
						</button>

						<Popper
							open={open}
							anchorEl={anchorRef.current}
							role={undefined}
							className={classes.paper}
							transition
							disablePortal
						>
							{({ TransitionProps, placement }) => (
								<Grow
									{...TransitionProps}
									style={{
										transformOrigin:
											placement === "bottom" ? "center top" : "center bottom",
									}}
								>
									<Paper className={classes.paper}>
										<ClickAwayListener onClickAway={handleClose}>
											<MenuList
												className={classes.menu}
												autoFocusItem={open}
												id="menu-list-grow"
												onKeyDown={handleListKeyDown}
											>
												<MenuItem
													onClick={(e) => {
														handleClose(e);
														handleScrollProjects(e);
													}}
													className={classes.menuItem}
												>
													Projects
												</MenuItem>
												<MenuItem
													onClick={(e) => {
														handleClose(e);
														handleScrollContact(e);
													}}
												>
													Let's Talk
												</MenuItem>
												<MenuItem onClick={handleClose}>GitHub</MenuItem>
												<MenuItem onClick={handleClose}>Résumé</MenuItem>
											</MenuList>
										</ClickAwayListener>
									</Paper>
								</Grow>
							)}
						</Popper>
					</div>
				</nav>
			</header>
			<Layouts>
				<AboutMe />
				<Projects ref={projectsRef} />
				<ContactMe ref={contactRef} />
			</Layouts>
		</>
	);
};

export default IndexPage;
