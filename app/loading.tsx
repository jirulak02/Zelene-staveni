import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import ImageLoader from "@/components/ui/ImageLoader";

export default function loading() {
	return (
		<div className="-mt-image pb-12">
			<div className="relative h-[400px] md:h-[700px]">
				<div className="relative h-[400px] overflow-hidden md:h-[700px]">
					<ImageLoader className="h-full w-full" />
				</div>
				<div className="absolute top-0 flex h-full w-full flex-col items-center justify-center bg-shadow text-neutral-100">
					<h1 className="md:text-7xl">ZELENÉ</h1>
					<h1 className="md:text-7xl">STAVĚNÍ</h1>
					<h3 className="mt-3 font-normal">
						... trochu jiné stavění
					</h3>
				</div>
			</div>
			<Container className="relative z-10 -mt-16 md:-mt-24">
				<div className="-mt-1 grid grid-cols-1 bg-neutral-100 shadow-lg shadow-neutral-400 sm:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col items-center space-y-2 border-b-2 border-neutral-300 bg-neutral-100 px-6 py-4 text-center sm:space-y-3 sm:border-r-2 lg:my-10 lg:border-b-0 lg:px-10">
						<ImageLoader className="h-[50px] w-[50px]" />
						<h3 className="text-hneda">ZELENÉ STŘECHY</h3>
						<p>Ukládají vodu, vážou prach a nezahřívají se.</p>
						<Button href="/sluzby/zelene-strechy">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="flex flex-col items-center space-y-2 border-b-2 border-neutral-300 bg-neutral-100 px-6 py-4 text-center sm:space-y-3 lg:my-10 lg:border-b-0 lg:border-r-2 lg:px-10">
						<ImageLoader className="h-[50px] w-[50px]" />
						<h3 className="text-hneda">KOŘENOVÉ ČISTÍRNY</h3>
						<p>Přírodní čistírna odpadních vod domácností.</p>
						<Button href="/sluzby/korenove-cistirny">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="flex flex-col items-center space-y-2 border-b-2 border-neutral-300 bg-neutral-100 px-6 py-4 text-center sm:space-y-3 sm:border-b-0 sm:border-r-2 lg:my-10 lg:px-10">
						<ImageLoader className="h-[50px] w-[50px]" />
						<h3 className="text-hneda">BLOWER DOOR TEST</h3>
						<p>Test vzduchotěsnosti obálky budov a bytů.</p>
						<Button href="/sluzby/blower-door-test">
							ZJISTIT VÍCE
						</Button>
					</div>
					<div className="flex flex-col items-center space-y-2 bg-neutral-100 px-6 py-4 text-center sm:space-y-3 lg:my-10 lg:px-10">
						<ImageLoader className="h-[50px] w-[50px]" />
						<h3 className="text-hneda">MĚŘENÍ ÚNIKU TEPLA</h3>
						<p>Měření úniku tepla kvalitní termokamerou.</p>
						<Button href="/sluzby/termovize">ZJISTIT VÍCE</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}