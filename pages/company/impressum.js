import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function Home() {
	return (<>
		<Head>
			<title>Impressum | KVM Group</title>
		</Head>
        <Layout>
            <div className="h-hero bg-about bg-center bg-cover flex items-center justify-center">
                <div className="bg-gray-900 p-8 shadow">
                    <h1 className="text-3xl md:text-5xl font-semibold text-white">Impressum</h1>
                </div>
            </div>
            <div className="container py-16">
                <h2 className="mb-6">Company information</h2>
                <p className="text-lg">KVM Group Limited</p>
                <p className="text-lg">Kalkofnsvegur 2</p>
                <p className="text-lg">101 Reykjavík</p>
                <p className="text-lg mb-2">Iceland</p>
                <p className="text-lg">Registered office:</p>
                <p className="text-lg">12 Constance Street</p>
                <p className="text-lg">E16 2DQ London</p>
                <p className="text-lg mb-2">United Kingdom</p>
                <p className="text-lg">Company no. 13331435</p>
                <p className="text-lg">ICO no. ZB077431</p>
                <p className="text-lg">VAT no. N/A</p>
                <p className="text-lg">(EU) VAT no. N/A</p>
                <h2 className="my-6">Business contact information</h2>
                <p className="text-lg">General enquiries: <a href="mailto:info@kvm.group" className="underline">info@kvm.group</a></p>
                <p className="text-lg">Network Operations Centre: <a href="mailto:noc@kvm.group" className="underline">noc@kvm.group</a></p>
                <p className="text-lg">Peering enquiries: <a href="mailto:peering@kvm.group" className="underline">peering@kvm.group</a></p>
                <p className="text-lg">Abuse enquiries: <a href="mailto:abuse@kvm.group" className="underline">abuse@kvm.group</a></p>
                <p className="text-lg">UK telephone line: <a href="tel:+442045771433" className="underline">+44 204-577 1433</a></p>
                <p className="text-lg">Nordic telephone line: <a href="tel:+3545395409" className="underline">+354 539 5409</a></p>
                <p className="text-lg">Post: Kalkofnsvegur, 101 Reykjavík, Iceland</p>
                <h2 className="my-6">Management team</h2>
                <p className="text-lg">Chief Executive Officer: Leifur Steinn Gunnarsson (<a href="mailto:leifur@kvm.group" className="underline">leifur@kvm.group</a>)</p>
                <p className="text-lg">Chief Operating Officer: Fredrik Alstad (<a href="mailto:fredrik@kvm.group" className="underline">fredrik@kvm.group</a>)</p>
                <p className="text-lg">Chief Technology Officer: Kjartan Hrafnkelsson (<a href="mailto:kjartan@kvm.group" className="underline">kjartan@kvm.group</a>)</p>
                <p className="text-lg">Chief Information Officer: Petar Markov (<a href="mailto:petar@kvm.group" className="underline">petar@kvm.group</a>)</p>
            </div>
        </Layout>
    </>)
}