import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function Contact() {
	return (<>
		<Head>
			<title>Contact us | KVM Group</title>
            <meta name="title" content="Contact us — KVM Group" />
			<meta property="og:title" content="Contact us — KVM Group" />
			<meta property="twitter:title" content="Contact us — KVM Group" />
		</Head>
        <Layout>
            <div className="h-hero bg-about bg-center bg-cover flex items-center justify-center">
                <div className="bg-gray-900 p-8 shadow">
                    <h1 className="text-3xl md:text-5xl font-semibold text-white">Contact us</h1>
                </div>
            </div>
            <div className="container py-16">
                <h2 className="my-6">Business contact information</h2>
                <p className="text-lg">General enquiries: <a href="mailto:info@kvm.group" className="underline">info@kvm.group</a></p>
                <p className="text-lg">Network Operations Centre: <a href="mailto:noc@kvm.group" className="underline">noc@kvm.group</a></p>
                <p className="text-lg">Peering enquiries: <a href="mailto:peering@kvm.group" className="underline">peering@kvm.group</a></p>
                <p className="text-lg">Abuse enquiries: <a href="mailto:abuse@kvm.group" className="underline">abuse@kvm.group</a></p>
                <p className="text-lg">UK telephone line: <a href="tel:+442045771433" className="underline">+44 204-577 1433</a></p>
                <p className="text-lg">Nordic telephone line: <a href="tel:+3545395409" className="underline">+354 539 5409</a></p>
                <p className="text-lg">Post: Kalkofnsvegur 2, 101 Reykjavík, Iceland</p>
                <h2 className="my-6">KUBBUR brand contact information</h2>
                <p className="text-lg">General enquiries: <a href="mailto:hello@kubbur.com" className="underline">hello@kubbur.com</a></p>
                <p className="text-lg">Business enquiries: <a href="mailto:business@kubbur.com" className="underline">business@kubbur.com</a></p>
                <p className="text-lg">Support enquiries: <a href="mailto:support@kubbur.com" className="underline">support@kubbur.com</a></p>
                <p className="text-lg">Abuse enquiries: <a href="mailto:abuse@kvm.group" className="underline">abuse@kvm.group</a></p>
                <p className="text-lg">UK telephone line: <a href="tel:+442045771433" className="underline">+44 204-577 1433</a></p>
                <p className="text-lg">Nordic telephone line: <a href="tel:+3545395409" className="underline">+354 539 5409</a></p>
            </div>
        </Layout>
    </>)
}