import { MailIcon } from '@heroicons/react/outline'

import Head from 'next/head'

import Layout from '../../components/Layout'
import { Member, LinkedIn, Twitter, Email, GitHub, Instagram } from '../../components/Team'

export default function Team() {
	return (<>
		<Head>
			<title>Our team | KVM Group</title>
            <meta name="title" content="Our team — KVM Group" />
			<meta property="og:title" content="Our team — KVM Group" />
			<meta property="twitter:title" content="Our team — KVM Group" />
		</Head>
        <Layout>
            <div className="h-hero bg-team bg-center bg-cover flex items-center justify-center">
                <div className="bg-gray-900 p-8 shadow">
                    <h1 className="text-3xl md:text-5xl font-semibold text-white">Our team</h1>
                </div>
            </div>
            <div className="container py-16">
                <h2>Governance</h2>
                <div className="team-grid">
                    <Member name="Leifur Steinn Gunnarsson" position="Chief Executive Officer" image="leifur.png">
                        <Email address="leifur@kvm.group" />
                        <Instagram handle="leifursteinng" />
                        <LinkedIn handle="leifursteinng" />
                    </Member>
                    <Member name="Fredrik Alstad" position="Chief Operating Officer" image="unknown.png">
                        <Email address="fredrik@kvm.group" />
                        <Twitter handle="craxydev" />
                        <GitHub handle="craxydev" />
                    </Member>
                    <Member name="Kjartan Hrafnkelsson" position="Chief Technology Officer" image="kjartan.png">
                        <Email address="kjartan@kvm.group" />
                        <Twitter handle="kjartanhr" />
                        <GitHub handle="kjartanhr" />
                        <LinkedIn handle="kjartanhr" />
                    </Member>
		    <Member name="Petar Markov" position="Chief Information Officer" image="petar.png">
                        <Email address="petar@kvm.group" />
                        <Instagram handle="leifursteinng" />
                        <Twitter handle="kiv0x" />
                        <GitHub handle="kivox" />
                        <LinkedIn handle="kjartanhr" />
                    </Member>
                    <Member name="Jack Cosens" position="Chief Financial Officer" image="jack.png">
                        <Email address="jack@kvm.group" />
                    </Member>
                </div>
                <h2 className="mt-6">Management</h2>
                <div className="team-grid">
                    <Member name="Gunnar Áki Þorsteinsson" position="Public Relations Director" image="gunnar.png">
                        <Twitter handle="gunnar_aki" />
                        <Instagram handle="gunnar_2004" />
                    </Member>
                    <Member name="Nicklas Yli-Länttä" position="Brand Manager, KUBBUR" image="unknown.png">
                        <Twitter handle="timanttikuutio" />
                        <GitHub handle="timanttikuutio" />
                    </Member>
                    <Member name="Nathan Gimblett" position="Network Manager" image="unknown.png">
                        <Twitter handle="NathanG_MC" />
                    </Member>
                </div>
            </div>
        </Layout>
    </>);
}
