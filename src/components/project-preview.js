import React from "react";
const Project = ({ title, github, liveOne, liveTwo, description }) => (
	<article>
		<h2 className="font-bold text-3xl mb-6">{title}</h2>
		<ul className="uppercase flex items-center   underline">
			{github && (
				<li>
					<a href={github} target="_blank" rel="noopener noreferrer">
						github
					</a>
				</li>
			)}
			{github && <div className="w-[1px] h-4 bg-black mx-2"></div>}
			{liveOne && (
				<li>
					<a href={liveOne} target="_blank" rel="noopener noreferrer">
						website live
					</a>
				</li>
			)}
			{liveTwo && <div className="w-[1px] h-4 bg-black mx-2"></div>}
			{liveTwo && (
				<li>
					<a href={liveTwo} target="_blank" rel="noopener noreferrer">
						website live
					</a>
				</li>
			)}
		</ul>
		{description && <p className="text-lg opacity-30 mt-6">{description}</p>}
	</article>
);
export default Project;
