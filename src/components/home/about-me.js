import React from "react";
const AboutMe = () => (
	<section className="w-11/12  mx-auto pt-44 mb-80">
		<h1 className="text-4xl md:text-6xl font-bold ">Hi, I’m Eslam</h1>
		<div className="flex flex-col sm:flex-row  sm:items-center mt-3 mb-6">
			<h2>Junior Front-End Developer</h2>
			<a
				href="https://www.linkedin.com/in/eslamhesham/"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center"
			>
				{" "}
				<div className="w-3 h-3 rounded-full bg-[#27CD42] mr-2 sm:ml-4"></div>
				<p className="text-lg text-[#27CD42] hover:underline">
					I’m availble for Hiring
				</p>
			</a>
		</div>
		<p className="text-lg opacity-30">
			Innovative Front-End developer with +1year experience building and
			maintaining responsive websites in different industries. <br /> Proficient
			in HTML, CSS, JavaScript, plus modern libraries {`<React />`} and
			frameworks such as Next.js, Gatsby. <br /> Passionate about learning new
			technologies.
		</p>
	</section>
);

export default AboutMe;
