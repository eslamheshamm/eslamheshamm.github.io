import React from "react";
import Project from "../project-preview";
const Projects = React.forwardRef((props, ref) => (
	<section
		className="w-11/12 md:w-10/12 min-h-screen mx-auto mb-52"
		{...props}
		ref={ref}
	>
		<h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
		<p className="text-lg opacity-30 mt-10 mb-24">
			Tortor aliquam ac fermentum neque. Magna vestibulum tristique donec et.
			Amet etiam <br /> sed porttitor sociis. Mi libero tortor vulputate amet a
			augue sed.
		</p>
		<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			<Project
				title="Pickly"
				github="https://eslamheshamm.github.io/"
				liveOne="https://pickly-frontend-dev.m3ntorship.net/post"
				description="React,TailwindCSS"
			/>
			<Project
				title="Personal Resume"
				github="https://eslamheshamm.github.io/"
				liveOne="https://personal-resume-fullstack-dev-fe.m3ntorship.net/"
				description="Gatsby.js, Sanity,TailwindCSS."
			/>
			<Project
				title="Riad Eid"
				github="https://eslamheshamm.github.io/"
				liveOne="http://riadeid.net/"
				description="Gatsby.js, Sanity,TailwindCSS."
			/>
			<Project
				title="Momen Hesham"
				github="https://eslamheshamm.github.io/"
				liveOne="https://momenhesham-portfolio.vercel.app/"
				description="Next.js, Sanity, TailwindCSS."
			/>{" "}
			<Project
				title="Gezery"
				github="https://eslamheshamm.github.io/"
				liveOne="https://gezery.com/"
				description="Vanilla JS,HTML,CSS"
			/>
			<Project
				title="Digitage Studio"
				github="https://eslamheshamm.github.io/"
				liveOne="https://digitagestudio.com/"
				description="Gatsby.js,TailwindCSS"
			/>
			<Project
				title="Artlex Community"
				github="https://eslamheshamm.github.io/"
				liveOne="https://artlex-blog.vercel.app/"
				description="Next.js, Sanity(CMS), TailwindCSS."
			/>
			<Project
				title="Abdelrahman Ebrahim"
				github="https://eslamheshamm.github.io/"
				liveOne="https://abdelrahman-ebrahim.netlify.app/"
				description="Next.js, Sanity(CMS), TailwindCSS."
			/>
			<Project
				title="Owls Social"
				github="https://eslamheshamm.github.io/"
				liveOne="https://owls-social.netlify.app//"
				description="Gatsby.js,TailwindCSS"
			/>
		</ul>
	</section>
));

export default Projects;
