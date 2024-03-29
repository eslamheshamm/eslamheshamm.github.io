(self.webpackChunkeslam_hesham = self.webpackChunkeslam_hesham || []).push([
	[853],
	{
		5431: function (e, t, i) {
			"use strict";
			var a = i(7294);
			t.Z = function (e) {
				var t = e.title,
					i = e.github,
					l = e.liveOne,
					n = e.liveTwo,
					s = e.description;
				return a.createElement(
					"article",
					null,
					a.createElement("h2", { className: "font-bold text-3xl mb-6" }, t),
					a.createElement(
						"ul",
						{ className: "uppercase flex items-center   underline" },
						i &&
							a.createElement(
								"li",
								null,
								a.createElement(
									"a",
									{ href: i, target: "_blank", rel: "noopener noreferrer" },
									"github"
								)
							),
						i &&
							a.createElement("div", {
								className: "w-[1px] h-4 bg-black mx-2",
							}),
						l &&
							a.createElement(
								"li",
								null,
								a.createElement(
									"a",
									{ href: l, target: "_blank", rel: "noopener noreferrer" },
									"website live"
								)
							),
						n &&
							a.createElement("div", {
								className: "w-[1px] h-4 bg-black mx-2",
							}),
						n &&
							a.createElement(
								"li",
								null,
								a.createElement(
									"a",
									{ href: n, target: "_blank", rel: "noopener noreferrer" },
									"website live"
								)
							)
					),
					s && a.createElement("p", { className: "text-lg opacity-30 mt-6" }, s)
				);
			};
		},
		7744: function (e, t, i) {
			"use strict";
			i.r(t);
			var a = i(7294),
				l = i(3751),
				n = i(7364),
				s = i(5431),
				r = [
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
						github:
							"https://github.com/eslamheshamm/mahmoud-abdelghany-project",
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
			t.default = function () {
				return a.createElement(
					a.Fragment,
					null,
					a.createElement(l.Z, { title: "Projects" }),
					a.createElement(
						n.Z,
						null,
						a.createElement(
							"section",
							{
								className:
									"w-10/12 lg:w-8/12  min-h-screen mx-auto overflow-y-hidden",
							},
							a.createElement(
								"h1",
								{ className: "text-4xl  md:text-6xl font-bold mt-44 mb-24" },
								"Projects"
							),
							a.createElement(
								"ul",
								{ className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
								r.map(function (e) {
									return a.createElement(
										"li",
										{ key: e.title },
										a.createElement(s.Z, {
											title: e.title,
											github: e.github,
											liveOne: e.liveOne,
											description: e.description,
										})
									);
								})
							),
							a.createElement(
								"h2",
								{ className: "w-full text-center  my-12" },
								" ",
								a.createElement(
									"a",
									{
										href: "https://github.com/eslamheshamm",
										target: "_blank",
										rel: "noopener noreferrer",
										className: " italic underline font-bold ",
									},
									"+MORE"
								)
							)
						)
					)
				);
			};
		},
	},
]);
//# sourceMappingURL=component---src-pages-projects-js-6f49dd5f24f43bb09b5f.js.map
