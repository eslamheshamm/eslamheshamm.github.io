(self.webpackChunkeslam_hesham = self.webpackChunkeslam_hesham || []).push([
	[678],
	{
		5431: function (e, t, l) {
			"use strict";
			var n = l(7294);
			t.Z = function (e) {
				var t = e.title,
					l = e.github,
					a = e.liveOne,
					r = e.liveTwo,
					i = e.description;
				return n.createElement(
					"article",
					null,
					n.createElement("h2", { className: "font-bold text-3xl mb-6" }, t),
					n.createElement(
						"ul",
						{ className: "uppercase flex items-center   underline" },
						l &&
							n.createElement(
								"li",
								null,
								n.createElement(
									"a",
									{ href: l, target: "_blank", rel: "noopener noreferrer" },
									"github"
								)
							),
						l &&
							n.createElement("div", {
								className: "w-[1px] h-4 bg-black mx-2",
							}),
						a &&
							n.createElement(
								"li",
								null,
								n.createElement(
									"a",
									{ href: a, target: "_blank", rel: "noopener noreferrer" },
									"website live"
								)
							),
						r &&
							n.createElement("div", {
								className: "w-[1px] h-4 bg-black mx-2",
							}),
						r &&
							n.createElement(
								"li",
								null,
								n.createElement(
									"a",
									{ href: r, target: "_blank", rel: "noopener noreferrer" },
									"website live"
								)
							)
					),
					i && n.createElement("p", { className: "text-lg opacity-30 mt-6" }, i)
				);
			};
		},
		944: function (e, t, l) {
			"use strict";
			l.r(t),
				l.d(t, {
					default: function () {
						return h;
					},
				});
			var n = l(7294),
				a = l(5444),
				r = function () {
					return n.createElement(
						"section",
						{ className: "w-10/12 lg:w-8/12  mx-auto pt-44 mb-80" },
						n.createElement(
							"h1",
							{ className: "text-4xl md:text-6xl font-bold " },
							"Hi, I’m Eslam"
						),
						n.createElement(
							"div",
							{
								className:
									"flex flex-col sm:flex-row  sm:items-center mt-3 mb-6",
							},
							n.createElement("h2", null, "Junior Front-End Developer"),
							n.createElement(
								"a",
								{
									href: "https://www.linkedin.com/in/eslamhesham/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center",
								},
								" ",
								n.createElement("div", {
									className: "w-3 h-3 rounded-full bg-[#27CD42] mr-2 sm:ml-4",
								}),
								n.createElement(
									"p",
									{ className: "text-lg text-[#27CD42] hover:underline" },
									"I’m availble for Hiring"
								)
							)
						),
						n.createElement(
							"p",
							{ className: "text-lg opacity-30" },
							"Innovative Front-End developer with +1year experience building and maintaining responsive websites in different industries. ",
							n.createElement("br", null),
							" Proficient in HTML, CSS, JavaScript, plus modern libraries ",
							"<React />",
							" and frameworks such as Next.js, Gatsby. ",
							n.createElement("br", null),
							" Passionate about learning new technologies."
						)
					);
				},
				i = l(5431),
				c = l(3751),
				s = l(7364),
				o = l(7533),
				m = [
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
						description: "Vanilla JS,HTML,CSS",
					},
					{
						title: "Digitage Studio",
						github: "https://github.com/eslamheshamm/digitage-project",
						liveOne: "https://digitagestudio.com/",
						description: "Gatsby.js,TailwindCSS",
					},
				],
				h = function () {
					var e = (0, n.useRef)(null),
						t = (0, n.useRef)(null);
					return n.createElement(
						n.Fragment,
						null,
						n.createElement(c.Z, { title: "Home" }),
						n.createElement(
							s.Z,
							{
								handleScrollProjects: function () {
									(e && e.current) || (0, a.navigate)("/"),
										e.current.scrollIntoView({ behavior: "smooth" });
								},
								handleScrollContact: function () {
									(t && t.current) || (0, a.navigate)("/"),
										t.current.scrollIntoView({ behavior: "smooth" });
								},
							},
							n.createElement(r, null),
							n.createElement(
								"section",
								{
									className:
										"w-10/12 lg:w-8/12  mx-auto mb-44 overflow-y-hidden",
									ref: e,
								},
								n.createElement(
									"h2",
									{ className: " inline-block" },
									n.createElement(
										a.Link,
										{ to: "/projects" },
										n.createElement(
											"div",
											{ className: "flex items-center hover:underline" },
											n.createElement(
												"span",
												{ className: "text-4xl md:text-6xl font-bold" },
												"Projects"
											),
											n.createElement(u, {
												className: "ml-5 text-black dark:text-white ",
											})
										)
									)
								),
								n.createElement(
									"p",
									{ className: "text-lg opacity-30 mt-10 mb-24" },
									"I love to create projects while learning new technologies."
								),
								n.createElement(
									"ul",
									{ className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
									m.map(function (e) {
										return n.createElement(
											"li",
											{ key: e.title },
											n.createElement(i.Z, {
												title: e.title,
												github: e.github,
												liveOne: e.liveOne,
												description: e.description,
											})
										);
									})
								),
								n.createElement(
									"h2",
									{ className: "w-full text-center  my-12" },
									n.createElement(
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
							),
							n.createElement(
								"section",
								{
									ref: t,
									className:
										"w-10/12 lg:w-8/12  mx-auto pb-44 overflow-y-hidden",
								},
								n.createElement(
									"article",
									{ className: " lg:w-9/12 xl:w-7/12" },
									n.createElement(
										"h1",
										{ className: "text-3xl sm:5xl md:text-6xl font-bold" },
										"Let’s work together?"
									),
									n.createElement(
										"p",
										{ className: " mt-8 mb-12  opacity-30 " },
										"Looking For Collaborator? don't hesitate to connect."
									),
									n.createElement(o.Z, null)
								)
							)
						)
					);
				};
			function u(e) {
				return n.createElement(
					"svg",
					Object.assign(
						{ width: 16, height: 16, viewBox: "0 0 11 10", fill: "none" },
						e
					),
					n.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M4.5.5A.5.5 0 015 0h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V1H5a.5.5 0 01-.5-.5z",
						fill: "currentColor",
					}),
					n.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M10.354.146a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z",
						fill: "currentColor",
					})
				);
			}
		},
	},
]);
//# sourceMappingURL=component---src-pages-index-js-27522b300f52d02b1713.js.map
