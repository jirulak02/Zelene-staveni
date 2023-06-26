import Image from "next/image";

import Container from "@/components/layout/Container";
import ScrollUp from "@/components/layout/ScrollUp";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";

export const metadata = {
	title: "Služby - Zelené stavění.cz",
	description:
		"Nabýzíme realizaci zelených střech a kořenových čistíren, blower door test, měření termovizí či získání státní podpory. Email: info@zelenestaveni.cz telefon: 608 974 908.",
};

export default function Sluzby() {
	return (
		<>
			<ScrollUp />
			<Container>
				<h1 className="my-10 text-zelena">Služby</h1>
				<div className="grid grid-cols-1">
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<div className="relative h-[280px] overflow-hidden lg:h-[480px]">
							<Image
								alt="Ukázka realizace zelené střechy"
								priority
								fill={true}
								sizes="(min-width: 1024px) 640px, 100vw"
								quality={100}
								className="object-cover"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/468ee74c-416f-4625-9d4a-359a92855562_strechy_sluzby.png"
							/>
						</div>
						<div className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
							<Image
								alt="Ikona skalničky"
								width={50}
								height={50}
								quality={100}
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/e3b98002-4bf2-4acc-8f1c-be888af923e2_flowers.png"
							/>
							<h2 className="text-hneda">ZELENÉ STŘECHY</h2>
							<p>
								Zelené střechy ukládají vodu, vážou prach a
								nezahřívají se. Realizujeme zelené střechy od A
								do Z. Vyřídíme i dotaci Nová zelená úsporám.
							</p>
							<Button href="/sluzby/zelene-strechy">
								ZJISTIT VÍCE
							</Button>
						</div>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<Reveal className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
							<Image
								alt="Ikona recyklace kytek"
								width={50}
								height={50}
								quality={100}
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/5f71b8bc-4212-4b3e-b49e-f8a01fcc8b68_compost.png"
							/>
							<h2 className="text-hneda">KOŘENOVÉ ČISTÍRNY</h2>
							<p>
								Kořenová čistírna odpadních vod je vlastně
								takový malý přírodní mokřad. Slouží k čištění
								odpadních vod z domácnosti.
							</p>
							<Button href="/sluzby/korenove-cistirny">
								ZJISTIT VÍCE
							</Button>
						</Reveal>
						<Reveal className="relative row-start-1 h-[280px] overflow-hidden lg:row-start-auto lg:h-[480px]">
							<Image
								alt="Ukázka realizace kořenové čistírny"
								fill={true}
								sizes="(min-width: 1024px) 640px, 100vw"
								quality={100}
								className="object-cover"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/74f65524-a186-4419-b836-b48006c900f2_korenovky_sluzby.png"
							/>
						</Reveal>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<Reveal className="relative row-start-1 h-[280px] overflow-hidden lg:h-[480px]">
							<Image
								alt="Ukázka měření blower door testu"
								fill={true}
								sizes="(min-width: 1024px) 640px, 100vw"
								quality={100}
								className="object-cover"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/e2e498dc-f3cb-469c-9475-8a4806c97245_blowerdoor_sluzby.png"
							/>
						</Reveal>
						<Reveal className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
							<Image
								alt="Ikona fénu"
								width={50}
								height={50}
								quality={100}
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/559f37bf-3c19-40df-b84c-1b83e0276705_fan.png"
							/>
							<h2 className="text-hneda">BLOWER DOOR TEST</h2>
							<p>
								Test Blower Door je vyžadován především u
								pasivních a nízkoenergetických domů. Test je
								vhodné provést již v průběhu výstavby domu po
								zabudování oken a venkovních dveří, kdy je možno
								ještě relativně snadno opravit zjištěné
								netěsnosti.
							</p>
							<Button href="/sluzby/blower-door-test">
								ZJISTIT VÍCE
							</Button>
						</Reveal>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<Reveal className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
							<Image
								alt="Ikona kamery v domě"
								width={50}
								height={50}
								quality={100}
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/13337481-8d83-45a8-8a3a-f12cc76a72c3_camera.png"
							/>
							<h2 className="text-hneda">TERMOVIZE</h2>
							<p>
								Závady v zateplení budov či v topných systémech
								je možno zjišťovat v topné sezóně, tedy v zimním
								období. Měření termokamerou je možno provádět i
								za tmy.
							</p>
							<Button href="/sluzby/termovize">
								ZJISTIT VÍCE
							</Button>
						</Reveal>
						<Reveal className="relative row-start-1 h-[280px] overflow-hidden lg:row-start-auto lg:h-[480px]">
							<Image
								alt="Ukázka měření temovizí"
								fill={true}
								sizes="(min-width: 1024px) 640px, 100vw"
								quality={100}
								className="object-cover"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/2fc25db7-2ca1-4a22-a8d9-bed01b4a84b9_termovize_sluzby.png"
							/>
						</Reveal>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2">
						<Reveal className="relative h-[280px] overflow-hidden lg:h-[480px]">
							<Image
								alt="Ukázka měření blower door testu"
								fill={true}
								sizes="(min-width: 1024px) 640px, 100vw"
								quality={100}
								className="object-cover"
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/ec841236-3dfd-4ff0-85e8-1d27fcdfe034_dotace_sluzby.png"
							/>
						</Reveal>
						<Reveal className="mx-4 my-8 flex flex-col items-center justify-center space-y-3 text-center sm:mx-10 md:mx-12 md:my-12 md:space-y-5">
							<Image
								alt="Ikona fénu"
								width={50}
								height={50}
								quality={100}
								placeholder="blur"
								blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88h8AAq0B1REmZuEAAAAASUVORK5CYII="
								src="https://uploadthing.com/f/8b8ac783-5332-40bc-8707-8f157dabc550_analytics.png"
							/>
							<h2 className="text-hneda">Dotace</h2>
							<p>
								Nechte si usnadnit cestu k získání finanční
								podpory na vaši střechu. Dotaci k programu Nová
								zelená úsporám Vám bezstarostně komplet
								vyřídíme.
							</p>
							<Button href="/sluzby/dotace">ZJISTIT VÍCE</Button>
						</Reveal>
					</div>
				</div>
			</Container>
		</>
	);
}
