import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Hero({ onApply, onProspectus, onEnquiry }) {
	return (
		<section className="relative overflow-hidden">
			<Helmet>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context":"https://schema.org",
						"@type":"CollegeOrUniversity",
						"name":"Jadhavar College of Law",
						"address":{"@type":"PostalAddress","addressLocality":"Pune","addressRegion":"MH","addressCountry":"IN"},
						"url":"https://www.jadhavar-law.edu.in"
					})}
				</script>
			</Helmet>
			<div className="container-responsive py-12 md:py-20 grid gap-8 md:grid-cols-2 items-center">
				<div>
					<p className="text-sm font-semibold text-primary mb-2">Shaping ethical legal minds</p>
					<h1 className="font-display text-3xl md:text-5xl font-bold leading-tight">
						Undergraduate & Postgraduate Law Programs — Apply Now for 2026 Admission.
					</h1>
					<p className="mt-4 text-gray-700 max-w-2xl">
						World-class legal education combining doctrinal teaching and practical exposure —
						moot courts, legal aid, internships and more.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<button onClick={onApply} className="px-5 py-3 rounded-xl bg-primary text-white hover:opacity-90">Apply Now</button>
						<button onClick={onProspectus} className="px-5 py-3 rounded-xl border border-gray-300 hover:border-primary">Download Prospectus</button>
						<button onClick={onEnquiry} className="px-5 py-3 rounded-xl bg-accent text-gray-900">Enquiry</button>
					</div>
				</div>
				<div className="relative">
					<div className="aspect-[4/3] w-full rounded-2xl bg-gray-200 overflow-hidden shadow-lg">
						<img src="/assets/hero.jpg" alt="Jadhavar College of Law campus" className="w-full h-full object-cover" loading="eager" />
					</div>
				</div>
			</div>
		</section>
	)
}


