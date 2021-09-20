// Our goal is to expand upon the basic framework that's been laid out in the hosting space and try something new for a change.

import Head from 'next/head'
import Link from 'next/link'
import Headroom from 'react-headroom'

export default function Home() {
	return (<>
		<Head>
			<title>KVM</title>
		</Head>
		<Headroom className="z-50">
			<div className="bg-white w-full z-50">
				<div className="px-12 py-8">
					<Link href="/"><a className="group"><img src="/static/logos/kvm_light.svg" className="h-8 transition duration-150 group-hover:opacity-80" /></a></Link>
				</div>
			</div>
		</Headroom>
		<div className="min-h-screen flex flex-col md:flex-row">
			<div className="h-2/3 md:h-screen md:w-1/2 bg-gray-900 flex flex-col">
				<div className="pt-8 pb-14 md:py-0 px-16 md:px-24 lg:px-32 xl:px-40 flex flex-grow justify-center items-center">
					<div>
						<h1 className="text-4xl xl:text-5xl text-white font-semibold">KVM is a global leader at innovation in the hosting space.</h1>
						<p className="lg:text-xl xl:text-2xl text-gray-100 font-normal mt-6 lg:mt-12">The KVM Group leads in the game & web hosting market by bringing new, innovative ideas to customers through it's various brands.</p>
						<Link href="/about-the-kvm-group"><a className="text-normal md:text-lg mt-8 md:mt-12 lg:mt-16 xl:mt-24 inline-block bg-white py-4 md:py-5 px-8 md:px-12 font-medium transition duration-150 hover:opacity-80 transform hover:-translate-y-0.5">Read more</a></Link>
					</div>
				</div>
			</div>
			<div className="flex-grow bg-hero bg-cover bg-no-repeat bg-center md:bg-initial" />
		</div>
		<div className="max-w-screen-xl mx-auto px-4 py-16">
			<div>
				<div className="text-center">
					<h1 className="text-3xl font-medium">Our Brands</h1>
					<p className="text-lg text-gray-800">These are the brands we sell our products through.</p>
					<div className="py-14">
						<div className="flex whitespace-no-wrap overflow-x-hidden">
							<div class="relative">
								<ul className="flex animate-marquee-a-left items-center">
									<img src="/static/logos/kubbur.svg" className="h-12 mx-8" />
									<img src="/static/logos/icevm.svg" className="h-12 mx-8" />
									<img src="/static/logos/dediguard.svg" className="h-12 mx-8" />
									<img src="/static/logos/interstellar.svg" className="h-10 mx-8" />
								</ul>
								<ul className="flex absolute top-0 animate-marquee-b-left items-center">
									<img src="/static/logos/kubbur.svg" className="h-12 mx-8" />
									<img src="/static/logos/icevm.svg" className="h-12 mx-8" />
									<img src="/static/logos/dediguard.svg" className="h-12 mx-8" />
									<img src="/static/logos/interstellar.svg" className="h-10 mx-8" />
								</ul>
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<Link href="/brands"><a className="text-white text-normal inline-block bg-black py-4 md:py-5 px-8 md:px-12 font-medium transition duration-150 hover:opacity-80 transform hover:-translate-y-0.5">Explore our brands</a></Link>
					</div>
				</div>
			</div>
		</div>
		<div className="flex flex-col md:flex-row">
			<div className="flex-grow bg-team bg-cover bg-no-repeat bg-center md:bg-initial" />
			<div className="py-32 h-2/3 md:w-1/2 bg-gray-900 flex flex-col">
				<div className="pt-8 pb-14 md:py-0 px-16 md:px-24 lg:px-32 xl:px-40 flex flex-grow justify-center items-center">
					<div>
						<h1 className="text-4xl xl:text-5xl text-white font-semibold">Supported by an amazing team</h1>
						<p className="lg:text-xl xl:text-2xl text-gray-100 font-normal mt-6 lg:mt-12">Our ideas and ambitions are all but nothing without the people behind them. Our team comes from every corner of the world and makes KVM a reality.</p>
						<Link href="/about-the-kvm-group"><a className="text-normal md:text-lg mt-8 md:mt-12 lg:mt-16 xl:mt-24 inline-block bg-white py-4 md:py-5 px-8 md:px-12 font-medium transition duration-150 hover:opacity-80 transform hover:-translate-y-0.5">Meet the team</a></Link>
					</div>
				</div>
			</div>
		</div>
		<div className="max-w-screen-xl mx-auto px-4 py-16">
			<div>
				<div className="text-center">
					<h1 className="text-3xl font-medium">Key information</h1>
					<p className="text-lg text-gray-800">Company and operational information.</p>
				</div>
			</div>
		</div>
		<div className="bg-gray-900">
			<div className="px-16 md:px-24 lg:px-32 xl:px-40 py-16">
				<div className="w-full">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
						<div>
							<p className="text-xl text-white">KVM Group Limited</p>

							<p className="mt-1.5 text-gray-200">Company no. 13331435</p>
							<p className="text-gray-200">ICO no. ZB077431</p>

							<p className="mt-5 text-gray-200">12 Constance Street</p>
							<p className="text-gray-200">E16 2DQ London, United Kingdom</p>
							<p className="text-gray-200">+44 020-3582 0660</p>

							<p className="mt-5 text-gray-200">Kalkofnsvegur 2</p>
							<p className="text-gray-200">101 Reykjavík, Iceland</p>
							<p className="text-gray-200">+354 539 5409</p>
						</div>
						<div>
							<h2 className="text-white text-xl font-medium uppercase">information</h2>
							<div className="pt-3">
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">General terms</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Privacy Policy</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Acceptable Use Policy</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Environmental Conservation</a></Link>
							</div>
						</div>
						<div>
							<h2 className="text-white text-xl font-medium uppercase">resources</h2>
							<div className="pt-3">
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Investor relations</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">WHOIS</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Open Source</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Documentation</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Careers</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Preskit</a></Link>
							</div>
						</div>
						<div>
							<h2 className="text-white text-xl font-medium uppercase">Company</h2>
							<div className="pt-3">
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Governance</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Company details</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Contact us</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Brands</a></Link>
								<Link href="/company/governance"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Our team</a></Link>
							</div>
						</div>
						<div>
							<h2 className="text-white text-xl font-medium uppercase">External links</h2>
							<div className="pt-3">
								<a href="https://www.kubbur.com/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">KUBBUR.com</a>
								<a href="https://www.icevm.co.uk/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">IceVM.co.uk</a>
								<a href="https://www.dediguard.com/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Dediguard.com</a>
								<a href="https://www.interstellar.com/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Interstellar.nz</a>
								<a href="https://www.AS211350.net/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">AS211350.net</a>
							</div>
						</div>
					</div>
				</div>
				<div className="pt-8">
					<p className="text-gray-500 text-sm">Copyright &copy; 2021 KVM Group Limited. All rights reserved. Images courtesy of Unsplash.</p>
				</div>
			</div>
		</div>
	</>);
}
