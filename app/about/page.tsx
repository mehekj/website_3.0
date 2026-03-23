import Image from "next/image";

export default function About() {
	return (
		<div className="max-w-6xl m-auto px-8 py-32">
			<div className="w-96 h-96 relative overflow-hidden float-start mr-12 mb-12 border-1 border-black dark:border-white shadow-[10px_10px] shadow-black dark:shadow-white">
				<Image
					src="/profile.jpeg"
					alt="profile pic"
					fill={true}
					className="object-cover scale-150"
				/>
			</div>
			<h1 className="font-bold text-4xl">Hello! I'm Mehek</h1>
			<p className="my-4">
				I'm a 24 year old software engineer currently working at Infinity Ward
				on the Call of Duty franchise. At IW, I'm on the rendering team and I
				mostly work on writing C++ code for the cross-platform game engine, but
				I also occasionally get to touch pipeline, tools, automation, and UI.
			</p>
			<p className="my-4">
				Though I'm now located in Los Angeles, I originally grew up in New
				Jersey before moving to Providence, RI where I completed my bachelor's
				degree in computer science at Brown University. At Brown, I was a TA for
				CS1230: Intro To Computer Graphics and a member of the Dash research
				group under Professor Andy van Dam.
			</p>
			<p className="my-4">
				Aside from coding and playing video games, you can usually find me
				watching too much TV, board gaming, reading, picking up assorted arts
				and crafts projects, and playing the violin poorly.
			</p>
		</div>
	);
}
