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
				title="Riad Eid"
				github="https://eslamheshamm.github.io/"
				liveOne="https://eslamheshamm.github.io/"
				description="Tortor aliquam ac fermentum neque. Magna vestibulum tristique donec et. Amet etiam sed porttitor sociis. Mi libero tortor vulputate amet a augue sed."
			/>
			<Project
				title="Momen Hesham"
				github="https://eslamheshamm.github.io/"
				liveOne="https://eslamheshamm.github.io/"
				description="Tortor aliquam ac fermentum neque. Magna vestibulum tristique donec et. Amet etiam sed porttitor sociis. Mi libero tortor vulputate amet a augue sed."
			/>{" "}
			<Project
				title="Gezery"
				github="https://eslamheshamm.github.io/"
				liveOne="https://eslamheshamm.github.io/"
				description="Tortor aliquam ac fermentum neque. Magna vestibulum tristique donec et. Amet etiam sed porttitor sociis. Mi libero tortor vulputate amet a augue sed."
			/>
			<Project
				title="Digitage Studio"
				github="https://eslamheshamm.github.io/"
				liveOne="https://eslamheshamm.github.io/"
				description="Tortor aliquam ac fermentum neque. Magna vestibulum tristique donec et. Amet etiam sed porttitor sociis. Mi libero tortor vulputate amet a augue sed."
			/>
			<Project
				title="Artlex Community"
				github="https://eslamheshamm.github.io/"
				liveOne="https://eslamheshamm.github.io/"
				description="Tortor aliquam ac fermentum neque. Magna vestibulum tristique donec et. Amet etiam sed porttitor sociis. Mi libero tortor vulputate amet a augue sed."
			/>
			<Project
				title="Abdelrahman Ebrahim"
				github="https://eslamheshamm.github.io/"
				liveOne="https://eslamheshamm.github.io/"
				description="Tortor aliquam ac fermentum neque. Magna vestibulum tristique donec et. Amet etiam sed porttitor sociis. Mi libero tortor vulputate amet a augue sed."
			/>
			<Project
				title="Owls Social"
				github="https://eslamheshamm.github.io/"
				liveOne="https://eslamheshamm.github.io/"
				description="Tortor aliquam ac fermentum neque. Magna vestibulum tristique donec et. Amet etiam sed porttitor sociis. Mi libero tortor vulputate amet a augue sed."
			/>
		</ul>
	</section>
));

export default Projects;
