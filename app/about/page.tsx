import Image from "next/image";

export default function About() {
	return (
		<div className="max-w-6xl m-auto px-8 py-32">
			<div className="peer w-96 h-96 relative overflow-hidden float-start mr-12 mb-12 border-1 hover:translate-[5px] shadow-[10px_10px] hover:shadow-[0px_0px] shadow-black dark:shadow-white transition duration-200 cursor-pointer hover:shadow-main hover:border-main">
				<Image
					src="/profile.jpeg"
					alt="profile pic"
					fill={true}
					className="object-cover scale-150"
				/>
			</div>
			<div className="opacity-0 peer-hover:opacity-20 pointer-events-none absolute bg-main w-screen h-screen left-0 top-14"></div>
			<h1 className="font-bold text-5xl">Hello! I&apos;m Mehek</h1>
			<p className="my-4">
				I&apos;m a 24 year old software engineer currently working at Infinity
				Ward on the Call of Duty franchise. At IW, I&apos;m on the rendering
				team and I mostly work on writing C++ code for the cross-platform game
				engine, but I also occasionally get to touch pipeline, tools,
				automation, and UI.
			</p>
			<p className="my-4">
				Though I&apos;m now located in Los Angeles, I originally grew up in New
				Jersey before moving to Providence, RI where I completed my
				bachelor&apos;s degree in computer science at Brown University. At
				Brown, I was a TA for CS1230: Intro To Computer Graphics and a member of
				the Dash research group under Professor Andy van Dam.
			</p>
			<p className="my-4">
				Aside from coding and playing video games, you can usually find me
				watching too much TV, board gaming, reading, picking up assorted arts
				and crafts projects, and playing the violin poorly.
			</p>
		</div>
	);
}
