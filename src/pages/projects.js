import React from "react";
import Seo from "../components/seo";
import Layouts from "../components/layouts";
import Project from "../components/project-preview";
const ProjectsArray = [
	{
		title: "Pickly",
		github: "https://github.com/m4ntorship/pickly-frontend-v1",
		description: "React,TailwindCSS",
	},
	{
		title: "Personal Resume",
		github: "https://github.com/m3ntorship/personal-resume",
		liveOne: "https://personal-resume-fullstack-dev-fe.m3ntorship.net/",
		description: "React,TailwindCSS.",
	},
	{
		title: "Riad Eid",
		github: "https://github.com/eslamheshamm/riad-eid-project/",
		liveOne: "http://riadeid.net/",
		description: "Gatsby.js, Sanity,TailwindCSS.",
	},
	{
		title: "Momen Hesham",
		github: "https://github.com/eslamheshamm/momenhesham-project",
		liveOne: "http://observer.studio/",
		description: "Next.js, Sanity, TailwindCSS.",
	},
	{
		title: "Gezery",
		liveOne: "https://gezery.com/",
		description: "Vanilla JS,HTML,CSS.",
	},
	{
		title: "Digitage Studio",
		github: "https://github.com/eslamheshamm/digitage-project",
		liveOne: "https://digitagestudio.com/",
		description: "Gatsby.js,TailwindCSS.",
	},
	{
		title: "Mahmdoud Abd El-Ghany(Landing Page)",
		github: "https://github.com/eslamheshamm/mahmoud-abdelghany-project",
		liveOne: "https://mahmoud-abdelghany-project.vercel.app//",
		description: "Next.js,TailwindCSS,GSAP.",
	},
	{
		title: "Mahmdoud Abd El-Ghany",
		github: "https://github.com/eslamheshamm/mahmoud-abdelghany",
		liveOne: "https://mahmoud-abdelghany.vercel.app/",
		description: "TypeScript,Next.js,TailwindCSS.",
	},
	{
		title: "Artlex Community",
		github: "https://github.com/eslamheshamm/artlex-blog",
		liveOne: "https://artlex-blog.vercel.app/",
		description: "Next.js, Sanity(CMS), TailwindCSS.",
	},
	{
		title: "Abdelrahman Ebrahim",
		github: "https://github.com/eslamheshamm/abdelrahman-project",
		liveOne: "https://abdelrahman-ebrahim.netlify.app/",
		description: "Next.js, Sanity(CMS), TailwindCSS.",
	},
	{
		title: "Owls Social",
		github: "https://github.com/eslamheshamm/owls-social",
		liveOne: "https://owls-social.netlify.app//",
		description: "Gatsby.js,TailwindCSS.",
	},
	{
		title: "Ahmed Yasser",
		github: "https://github.com/eslamheshamm/ahmed-yasser",
		liveOne: "https://ahmedyasser.gatsbyjs.io/",
		description: "Gatsby.js,TailwindCSS.",
	},
	{
		title: "Nourhan Hamdi",
		github: "https://github.com/eslamheshamm/nourhan-hamdi-portfolio",
		liveOne: "https://nourhanhamdi.gatsbyjs.io/",
		description: "Gatsby.js,TailwindCSS.",
	},
];
const ProjectsPage = () => {
	return (
		<>
			<Seo title="Projects" />
			<Layouts>
				<section className="w-10/12 lg:w-8/12  min-h-screen mx-auto overflow-y-hidden">
					<h1 className="text-4xl  md:text-6xl font-bold mt-44 mb-24">
						Projects
					</h1>
					{/* <p className="text-lg opacity-30 mt-10 mb-24">
						I love to create projects while learning new things.
					</p> */}
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
						{" "}
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
			</Layouts>
		</>
	);
};

export default ProjectsPage;
