import Link from 'next/link'
import Head from 'next/head'
import Headroom from 'react-headroom'
import { useRouter } from 'next/router'
import { useState } from 'react';

import { MenuIcon, MenuAlt1Icon, ChevronRightIcon } from '@heroicons/react/solid';

function MobileLink({href, children, setState, state}) {
	const Router = useRouter();

	function handleNavLink(e) {
		e.preventDefault();
		Router.push(href || '/');
		setState(!state);
		if (state) {
			document.body.style.overflowY = "unset";
		} else {
			document.body.style.overflowY = "hidden";
		}
	}

	return(<a onClick={handleNavLink} className="w-full flex px-8 py-3 text-xl items-center hover:bg-gray-100">
		<span>{children}</span>
		<div className="flex flex-grow justify-end">
			<ChevronRightIcon className="h-6 w-6" />
		</div>
	</a>);
}

export default function Layout({children}) {
	const [menu, setMenu] = useState(false);

	return (<>
		<Head>
			<meta name="description" content="KVM Group leads in the game & web hosting market by bringing new, innovative ideas to customers through it's various brands." />
			<meta name="theme-color" content="#004ae4" />

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.kvm.group/" />
			<meta property="og:description" content="KVM Group leads in the game & web hosting market by bringing new, innovative ideas to customers through it's various brands." />
			<meta property="og:image" content="https://imgproxy.kvm.group/preset:sharp/resize:fit:1200:0:0/gravity:sm/plain/https://edge.kvm.group/assets/www.kvm.group/images/card.png" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://www.kvm.group/" />
			<meta property="twitter:description" content="KVM Group leads in the game & web hosting market by bringing new, innovative ideas to customers through it's various brands." />
			<meta property="twitter:image" content="https://imgproxy.kvm.group/preset:sharp/resize:fit:1200:0:0/gravity:sm/plain/https://edge.kvm.group/assets/www.kvm.group/images/card.png" />
		</Head>
		<Headroom className="z-60 relative">
			<div className="bg-white w-full z-60">
				<div className="px-8 lg:px-12 py-8 lg:py-0 flex items-center gap-4">
					<Link href="/"><a className="group"><img src="/static/logos/kvm_light.svg" height="32" width="207" className="h-8 transition duration-150 group-hover:opacity-80" alt="KVM Group Logo" /></a></Link>
					<div className="hidden lg:flex">
						<Link href="/"><a href="/" className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">Home</a></Link>
						<Link href="/company/about"><a href="/company/about" className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">About us</a></Link>
						<Link href="/company/impressum"><a href="/company/impressum" className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">Impressum</a></Link>
						<Link href="/company/brands"><a href="/company/brands" className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">Brands</a></Link>
						<Link href="/company/contact"><a href="/company/contact" className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">Contact us</a></Link>
					</div>
					<div className="flex lg:hidden flex-grow justify-end items-center">
						<button onClick={() => {
							setMenu(!menu);
							if (typeof document !== "undefined") {
								if (menu) {
									document.body.style.overflowY = "unset";
								} else {
									document.body.style.overflowY = "hidden";
								}
							}
						}} aria-label="Toggle Mobile Navigation">
							{!menu ? <MenuIcon className="h-8 w-8" /> :
							<MenuAlt1Icon className="h-8 w-8" />}
						</button>
					</div>
				</div>
			</div>
		</Headroom>
		<div className={`flex flex-col lg:hidden fixed z-40 h-screen w-screen bg-white transition duration-150 transform ${(menu) ? 'translate-y-0' : 'translate-y-overlay'}`}>
			<MobileLink href="/" state={menu} setState={setMenu}>Home</MobileLink>
			<MobileLink href="/company/about" state={menu} setState={setMenu}>About us</MobileLink>
			<MobileLink href="/company/impressum" state={menu} setState={setMenu}>Impressum</MobileLink>
			<MobileLink href="/company/brands" state={menu} setState={setMenu}>Brands</MobileLink>
			<MobileLink href="/contact" state={menu} setState={setMenu}>Contact us</MobileLink>
		</div>
        {children}
		<div className="bg-gray-900">
			<div className="px-8 md:px-24 lg:px-32 xl:px-40 py-16">
				<div className="w-full">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
						<div>
							<p className="text-2xl md:text-xl text-white">KVM Group Limited</p>

							<p className="mt-1.5 text-gray-200">Company no. 13331435</p>
							<p className="text-gray-200">ICO no. ZB077431</p>

							<p className="mt-5 text-gray-200">12 Constance Street</p>
							<p className="text-gray-200">E16 2DQ London, United Kingdom</p>
							<p className="text-gray-200">+44 204-577 1433</p>

							<p className="mt-5 text-gray-200">??gis????a 62</p>
							<p className="text-gray-200">101 Reykjav??k, Iceland</p>
							<p className="text-gray-200">+44 204-577 1433</p>
						</div>
						<div>
							<h2 className="text-white text-2xl md:text-xl font-medium uppercase">information</h2>
							<div className="pt-3">
								<Link href="/legal/general-terms"><a href="/legal/general-terms" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 text-lg md:text-base">General terms</a></Link>
								<Link href="/legal/privacy-policy"><a href="/legal/privacy-policy" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Privacy Policy</a></Link>
								<Link href="/legal/acceptable-use"><a href="/legal/acceptable-use" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Acceptable Use Policy</a></Link>
								<Link href="/policies/environmental-conservation"><a href="/policies/environmental-conservation" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Environmental Conservation</a></Link>
								<a href="https://climate.stripe.com/VqQdyN" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Carbon removal</a>
							</div>
						</div>
						<div>
							<h2 className="text-white text-2xl md:text-xl font-medium uppercase">resources</h2>
							<div className="pt-3">
								<Link href="/investors"><a href="/investors" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 text-lg md:text-base">Investor relations</a></Link>
								<Link href="/resources/whois"><a href="/resources/whois" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">WHOIS</a></Link>
								<a href="https://opensource.kvm.group/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Open Source</a>
								<a href="https://developers.kvm.group/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Documentation</a>
								<Link href="/resources/careers"><a href="/resources/careers" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Careers</a></Link>
								<Link href="/resources/presskit"><a href="/resources/presskit" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Presskit</a></Link>
							</div>
						</div>
						<div>
							<h2 className="text-white text-2xl md:text-xl font-medium uppercase">Company</h2>
							<div className="pt-3">
								<Link href="/company/about"><a href="/company/about" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 text-lg md:text-base">About us</a></Link>
								<Link href="/company/impressum"><a href="/company/impressum" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Impressum</a></Link>
								<Link href="/company/contact"><a href="/company/contact" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Contact us</a></Link>
								<Link href="/company/brands"><a href="/company/brands" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Brands</a></Link>
								<Link href="/company/our-team"><a href="/company/our-team" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Our team</a></Link>
							</div>
						</div>
						<div>
							<h2 className="text-white text-2xl md:text-xl font-medium uppercase">External links</h2>
							<div className="pt-3">
								<a href="https://www.kubbur.com/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 text-lg md:text-base">KUBBUR.com</a>
								<a href="https://www.icevm.co.uk/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">IceVM.co.uk</a>
								<a href="https://www.interstellar.nz/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">Interstellar.nz</a>
								<a href="https://www.AS211350.net/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1 mt-2 md:mt-0 text-lg md:text-base">AS211350.net</a>
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
