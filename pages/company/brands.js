import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function Brands() {
	return (<>
		<Head>
			<title>Brands | KVM Group</title>
            <meta name="title" content="Brands — KVM Group" />
			<meta property="og:title" content="Brands — KVM Group" />
			<meta property="twitter:title" content="Brands — KVM Group" />
		</Head>
        <Layout>
            <div className="h-hero bg-about bg-center bg-cover flex items-center justify-center">
                <div className="bg-gray-900 p-8 shadow">
                    <h1 className="text-3xl md:text-5xl font-semibold text-white">Our brands</h1>
                </div>
            </div>
            <div className="container py-16">
                <img src="/static/logos/kubbur.svg" className="h-16 mb-6" />
                <h2 className="mb-6">KUBBUR Minecraft Hosting</h2>
                <p className="text-lg mb-2">KUBBUR aims to provide unrivaled Minecraft hosting with top of the line features whilst beating the competition in features and pricing. From budget plans at €1 / GB of memory to €2 / GB extreme dedicated plans, where CPU cores are not shared, KUBBUR beats all major competitors at their game with not only top of the line pricing but also lower minimum plans. Where one provider may only offer 10GB of memory for a given CPU KUBBUR will offer that same plan at lower pricing with a minimum plan of say 4GB.</p>
                <p className="text-lg mb-2">For enquiries write to <a href="mailto:hello@kubbur.com" className="underline">hello@kubbur.com</a> or call <a href="tel:+442045771433" className="underline">+44 204-577 1433</a> (Mon-Fri at 9:00 - 22:00).</p>
                <p className="text-lg">Website <a href="https://www.kubbur.com/en-gb" target="_blank" className="underline">www.kubbur.com</a>.</p>
                <img src="/static/logos/icevm.svg" className="h-16 my-6" />
                <h2 className="mb-6">IceVM</h2>
                <p className="text-lg mb-2">Although currently inactive, IceVM is a VPS hosting brand which until the creation of KUBBUR also sold Minecraft servers. IceVM's aim is to provide hyperaffordable DDoS protected Virtual Servers for running a variety of technologies. Additionally IceVM is used as a sort of "cloud" brand, leasing out dedicated servers in various locations and soon expanding into web hosting.</p>
                <p className="text-lg mb-2">For enquiries write to <a href="mailto:icevm@kvm.group" className="underline">icevm@kvm.group</a>..</p>
                <p className="text-lg">Website <a href="https://www.icevm.co.uk/" target="_blank" className="underline">www.icevm.co.uk</a> (orders inactive).</p>
            </div>
        </Layout>
    </>)
}