import Head from 'next/head'

import Layout from '../../components/Layout'
import PDF from '../../components/PDF';

export default function About() {
	return (<>
		<Head>
			<title>General Terms | KVM Group</title>
            <meta name="title" content="General Terms — KVM Group" />
			<meta property="og:title" content="General Terms — KVM Group" />
			<meta property="twitter:title" content="General Terms — KVM Group" />
		</Head>
        <Layout>
            <div className="h-hero bg-about bg-center bg-cover flex items-center justify-center">
                <div className="bg-gray-900 p-8 shadow">
                    <h1 className="text-3xl md:text-5xl font-semibold text-white">General Terms</h1>
                </div>
            </div>
            <div className="container py-16">
                <PDF src="/static/documents/kvm_group_general_terms.pdf" />
            </div>
        </Layout>
    </>);
}