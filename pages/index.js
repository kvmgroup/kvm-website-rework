// Our goal is to expand upon the basic framework that's been laid out in the hosting space and try something new for a change.

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
	return (<>
		<Head>
			<title>KVM</title>
		</Head>
		<div className="min-h-screen flex flex-col md:flex-row">
			<div className="h-2/3 md:h-screen md:w-1/2 bg-gray-900 flex flex-col">
				<div className="pl-12 py-8">
					<Link href="/"><a className="text-white text-3xl font-medium transition duration-150 hover:opacity-80">KVM Group</a></Link>
				</div>
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
					<div className="pt-14">
						<div className="flex whitespace-no-wrap overflow-x-hidden">
							<div class="relative">
								<ul class="flex animate-marquee-a-left items-center">
									<img src="/static/logos/kubbur.svg" className="h-12 mx-8" />
									<img src="/static/logos/icevm.svg" className="h-12 mx-8" />
									<img src="/static/logos/dediguard.svg" className="h-12 mx-8" />
									<img src="/static/logos/interstellar.svg" className="h-10 mx-8" />
								</ul>
								<ul class="flex absolute top-0 animate-marquee-b-left items-center">
								<img src="/static/logos/kubbur.svg" className="h-12 mx-8" />
									<img src="/static/logos/icevm.svg" className="h-12 mx-8" />
									<img src="/static/logos/dediguard.svg" className="h-12 mx-8" />
									<img src="/static/logos/interstellar.svg" className="h-10 mx-8" />
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>);
}
