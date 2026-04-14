import Image from "next/image";

export default function Home() {
	return (
		<div className="max-w-6xl grid place-items-center m-auto px-8">
			<div className="flex flex-col justify-center items-center gap-12">
				<div className="absolute overflow-hidden w-120 max-w-full aspect-video">
					<Image
						className="w-full h-full object-cover"
						src="/construction.gif"
						alt="soodeeupdoodeeupdigidigidada"
						fill={true}
					/>
				</div>
				<div className="z-20">
					<h1 className="text-7xl font-black tracking-tighter text-center">
						COOL LANDING PAGE
					</h1>
					<p className="text-center">coming soon maybe</p>
				</div>
			</div>
		</div>
	);
}
