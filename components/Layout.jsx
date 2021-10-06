import Link from 'next/link'
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
		<Headroom className="z-50">
			<div className="bg-white w-full z-50">
				<div className="px-8 lg:px-12 py-8 lg:py-0 flex items-center gap-4">
					<Link href="/"><a className="group"><img src="/static/logos/kvm_light.svg" className="h-8 transition duration-150 group-hover:opacity-80" /></a></Link>
					<div className="hidden lg:flex">
						<Link href="/"><a className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">Home</a></Link>
						<Link href="/company/about"><a className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">About us</a></Link>
						<Link href="/company/impressum"><a className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">Impressum</a></Link>
						<Link href="/company/brands"><a className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">Brands</a></Link>
						<Link href="/company/contact"><a className="py-8 px-6 text-lg hover:bg-gray-100 transition duration-150">Contact us</a></Link>
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
						}}>
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
			<div className="px-16 md:px-24 lg:px-32 xl:px-40 py-16">
				<div className="w-full">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
						<div>
							<p className="text-xl text-white">KVM Group Limited</p>

							<p className="mt-1.5 text-gray-200">Company no. 13331435</p>
							<p className="text-gray-200">ICO no. ZB077431</p>

							<p className="mt-5 text-gray-200">12 Constance Street</p>
							<p className="text-gray-200">E16 2DQ London, United Kingdom</p>
							<p className="text-gray-200">+44 204-577 1433</p>

							<p className="mt-5 text-gray-200">Kalkofnsvegur 2</p>
							<p className="text-gray-200">101 Reykjavík, Iceland</p>
							<p className="text-gray-200">+354 539 5409</p>
						</div>
						<div>
							<h2 className="text-white text-xl font-medium uppercase">information</h2>
							<div className="pt-3">
								<Link href="/legal/general-terms"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">General terms</a></Link>
								<Link href="/legal/privacy-policy"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Privacy Policy</a></Link>
								<Link href="/legal/acceptable-use"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Acceptable Use Policy</a></Link>
								<Link href="/policies/environmental-conservation"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Environmental Conservation</a></Link>
							</div>
						</div>
						<div>
							<h2 className="text-white text-xl font-medium uppercase">resources</h2>
							<div className="pt-3">
								<Link href="/investors"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Investor relations</a></Link>
								<Link href="/resources/whois"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">WHOIS</a></Link>
								<a href="https://opensource.kvm.group/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Open Source</a>
								<a href="https://developers.kvm.group/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Documentation</a>
								<Link href="/resources/careers"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Careers</a></Link>
								<Link href="/resources/presskit"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Presskit</a></Link>
							</div>
						</div>
						<div>
							<h2 className="text-white text-xl font-medium uppercase">Company</h2>
							<div className="pt-3">
								<Link href="/company/about"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">About us</a></Link>
								<Link href="/company/impressum"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Impressum</a></Link>
								<Link href="/company/contact"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Contact us</a></Link>
								<Link href="/company/brands"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Brands</a></Link>
								<Link href="/company/our-team"><a className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">Our team</a></Link>
							</div>
						</div>
						<div>
							<h2 className="text-white text-xl font-medium uppercase">External links</h2>
							<div className="pt-3">
								<a href="https://www.kubbur.com/" target="_blank" className="block text-gray-200 transition duration-150 hover:text-white transform hover:translate-x-1">KUBBUR.com</a>
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
