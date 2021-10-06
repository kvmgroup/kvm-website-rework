import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'

export default function Home() {
	return (<>
		<Head>
			<title>Environmental Conservation | KVM Group</title>
		</Head>
        <Layout>
            <div className="h-hero bg-black-beach bg-top bg-cover flex items-center justify-center">
                <div className="bg-gray-900 p-8 shadow">
                    <h1 className="text-3xl md:text-5xl font-semibold text-white">Environmental Conservation</h1>
                </div>
            </div>
            <div className="container py-16">
                <h2 className="mb-6">Our policy</h2>
                <p className="text-lg mb-2">Although KVM is largely a hosting company, a business model that traditionally is known for high emissions, we've always maintained a goal of net-zero, or even negative, carbon emissions. We are in the business of servicing people, both directly and indirectly, and if we don't take action right now to halt the effects of climate change on our planet there won't be that many people to service anymore. As such it is our policy to maintain good relations with suppliers we can trust to sell us what we need without it impacting the environment.</p>
                <p className="text-lg">Additionally, we condemn carbon-offsetting - planting a few trees to "offset" your emissions doesn't work, because climate change isn't that simple. The environment isn't like a store where as long as all losses are compensated for with returns greater or equal to the amount spent the store will stay afloat. The environment is different, you can't just emit and compensate for those emissions - trees take time to grow, any carbon offsetting method takes time to work which is why we won't use carbon offsetting as a bad excuse to emit CO<sup>2</sup>.</p>
                <h2 className="my-6">How we achieve net-zero emissions</h2>
                <p className="text-lg mb-2">To achieve net-zero emissions we make sure only to work with trustworthy providers & upstreams we know care about the environment and won't try to sell us a product that emits massively. For example our budget Minecraft hosting brand KUBBUR.com leases its hardware from Hetzner Online GmbH, a company dedicated to net-zero carbon emissions for their datacentres and products.</p>
                <p className="text-lg">Now while you can always find better providers with better environmental policies we realise you can't apply that to everything. As such we also make an effort to both use the climate to our advantage and give back to the environment as much as we can where possible. Datacentres solely for computing purposes, as supposed to low-latency tasks, are placed in strategic locations like Iceland or Norway for cheaper, renewable electricity and free cooling. Old hardware is recycled or repurposed so it doesn't go straight to e-waste. And we maintain an active effort to plant as many trees and other vegetation around physical locations when we can.</p>
                <p className="text-lg">While we won't use any of these efforts as excuses for emitting CO<sup>2</sup> we still thought we'd mention them here as they are still a very real part of our environmental conservation effort.</p>
            </div>
        </Layout>
    </>)
}