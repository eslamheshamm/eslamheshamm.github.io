import React, { useRef } from "react";
import AboutMe from "../components/home/about-me";
import Projects from "../components/home/projects";
import ContactMe from "../components/home/contact-me";
import Seo from "../components/seo";
import Layouts from "../components/layouts";
const IndexPage = () => {
	const projectsRef = useRef(null);
	const contactRef = useRef(null);
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
			<Layouts
				handleScrollProjects={handleScrollProjects}
				handleScrollContact={handleScrollContact}
			>
				<AboutMe />
				<Projects ref={projectsRef} />
				<ContactMe ref={contactRef} />
			</Layouts>{" "}
		</>
	);
};

export default IndexPage;
