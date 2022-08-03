import React, { useRef } from "react";
import { navigate, Link } from "gatsby";
import AboutMe from "../components/home/about-me";
import Project from "../components/project-preview";
import Seo from "../components/seo";
import Layouts from "../components/layouts";
import FormInputs from "../components/form";
const ProjectsArray = [
	{
		title: "BMW Performance Center",
		liveOne: "https://bmwperformancecenter.com/",
		description: "Gatsby,Node.js",
	},
	{
		title: "Pylon UMP",
		liveOne: "https://pylonump.com/",
		description: "Gatsby,Sanit(CMS),TailwindCSS",
	},
	{
		title: "Riad Eid",
		github: "https://github.com/eslamheshamm/riad-eid-project/",
		liveOne: "http://riadeid.net/",
		description: "Gatsby.js, Sanity(CMS),TailwindCSS.",
	},
	{
		title: "Momen Hesham",
		github: "https://github.com/eslamheshamm/momenhesham-project",
		liveOne: "http://observer.studio/",
		description: "Next.js, Sanity(CMS), TailwindCSS.",
	},
	{
		title: "Gezery",
		liveOne: "http://gezery.studio/",
		description: "JS,HTML,CSS",
	},
	{
		title: "Digitage Studio",
		github: "https://github.com/eslamheshamm/digitage-project",
		liveOne: "https://digitagestudio.com/",
		description: "Gatsby.js,TailwindCSS",
	},
	{
		title: "Pickly",
		github: "https://github.com/m4ntorship/pickly-frontend-v1",
		liveOne: "https://pickly-frontend-dev.m3ntorship.net/post",
		description: "React,TailwindCSS",
	},
	{
		title: "Personal Resume",
		github: "https://github.com/m3ntorship/personal-resume",
		liveOne: "https://personal-resume-fullstack-dev-fe.m3ntorship.net/",
		description: "React,TailwindCSS.",
	},
];
const IndexPage = () => {
	const projectsRef = useRef(null);
	const contactRef = useRef(null);
	const handleScrollProjects = () => {
		if (projectsRef && projectsRef.current) {
			projectsRef.current.scrollIntoView({ behavior: "smooth" });
		} else {
			navigate("/");
			projectsRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleScrollContact = () => {
		if (contactRef && contactRef.current) {
			contactRef.current.scrollIntoView({ behavior: "smooth" });
		} else {
			navigate("/");
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
				<section
					className="w-10/12 lg:w-8/12  mx-auto mb-44 overflow-y-hidden"
					ref={projectsRef}
				>
					<h2 className=" inline-block">
						<Link to="/projects">
							<div className="flex items-center hover:underline">
								<span className="text-4xl md:text-6xl font-bold">Projects</span>
								<Arrow className="ml-5 text-black dark:text-white " />
							</div>
						</Link>
					</h2>
					<p className="text-lg opacity-30 mt-10 mb-24">
						I love to create projects while learning new technologies.
					</p>
					<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{ProjectsArray.map((project) => {
							return (
								<li key={project.title}>
									<Project
										title={project.title}
										github={project.github}
										liveOne={project.liveOne}
										description={project.description}
									/>
								</li>
							);
						})}
					</ul>
					<h2 className="w-full text-center  my-12">
						<a
							href="https://github.com/eslamheshamm"
							target="_blank"
							rel="noopener noreferrer"
							className=" italic underline font-bold "
						>
							+MORE
						</a>
					</h2>
				</section>
				<section
					ref={contactRef}
					className="w-10/12 lg:w-8/12  mx-auto pb-44 overflow-y-hidden"
				>
					<article className=" lg:w-9/12 xl:w-7/12">
						<h1 className="text-3xl sm:5xl md:text-6xl font-bold">
							Let’s work together?
						</h1>
						<p className=" mt-8 mb-12  opacity-30 ">
							Looking For Collaborator? don't hesitate to connect.
						</p>
						<FormInputs />
					</article>
				</section>
			</Layouts>
		</>
	);
};

export default IndexPage;
function Arrow(props) {
	return (
		<svg width={16} height={16} viewBox="0 0 11 10" fill="none" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.5.5A.5.5 0 015 0h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V1H5a.5.5 0 01-.5-.5z"
				fill="currentColor"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.354.146a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"
				fill="currentColor"
			/>
		</svg>
	);
}
