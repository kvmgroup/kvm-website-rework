import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function Home() {
	return (<>
		<Head>
			<title>About us | KVM Group</title>
		</Head>
        <Layout>
            <div className="h-hero bg-about bg-center bg-cover flex items-center justify-center">
                <div className="bg-gray-900 p-8 shadow">
                    <h1 className="text-3xl md:text-5xl font-semibold text-white">About KVM Group</h1>
                </div>
            </div>
            <div className="container py-16">
                <h2 className="mb-6">Our story</h2>
                <p className="text-lg mb-2">KVM's story originated in 2018 when a domain name by the name of Heimsnet.eu was registered. The domain name, for a short while, was used for a landing page for a new up and coming domestic cargo company. Eventually the idea was binned and a new idea arose: frelancing. A Discord server was set up and a freelance marketplace was born. Eventually when the owners, Leifur & Kjartan, realised that freelancing wasn't what the brand was destined for they pivoted. At that same time Leifur had gotten introduced to a chap by the name of Nathan. Nathan was into servers and hosting services and eventually convinced Leifur to lease a 64GB server and lease out Minecraft hosting. The business came to be known as "Heimsnet Hosting" with the name meaning "Internet" in Icelandic. After almost a year of operation and the original owners starting a new chapter, college, in their lives in just a few weeks they decide to sell the business. After handing over ownership to the new owner he manages to bring it into ruin due to not collecting invoices and ignoring outside advice. The new owner then, after a long few months of continuous loss, hands the company over back to one of the original owners this time with his friends: Petar, Fredrik and one other partner. After attempting to run the business out of pocket for a month or two with unpaid bills left by the original owner the business is once again sold to another owner. This time an actually competent one: SparkedHost. While Sparked may not hold a very good reputation it was clear as day that their takeover was better than bankruptcy and they were clearly more competent than the 2nd owner.</p>
                <p className="text-lg mb-6">After having faced this loss the original two owners, along with the newfound Petar and Fredrik start a new company which has the name "IceVM". Each retaining 25% of the newly established brand they start working day and night to get it up and running until one evening in the middle of building their control panel "KVM Group Limited" is formed on companies house in the United Kingdom and that is where our story ends.</p>
                <h2 className="mb-6">Our mission</h2>
                <p className="text-lg mb-2">With such a messy story behind us we want to offer something few other companies can offer in this industry: stability, performance and affordability. Our key focus is always to provide the customer with as good of an experience we can and we continuously try to find new ways to do so whether it be an entirely custom control panel interface or the best prices on the market for the features you get the KVM Group will continue to grow and adapt to tomorrow's technologies to ultimately bring the best experience in hosting to you.</p>
                <p className="text-lg">Our second keyword has to be "humane". We want to create a natural feeling conversation when we talk to our customers directly. When we're providing assistance via live chat, email or a ticket we want to show that we're human too. We don't spend unnecessary time wording everything formally or using endless greetings during a conversation. We aren't afraid to tell jokes, swear (if you do too of course), play around or anything else that we as humans are naturally inclined to do. This really sets us apart from all the boring and slow robot-like conversations you'll have with every single support agent out there.</p>
            </div>
        </Layout>
    </>)
}