export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Track the ROI of Every<br />
          <span className="text-[#58a6ff]">AI Prompt Variation</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-10">
          Connect your APIs, run A/B tests on prompt versions, and see exactly which prompts drive revenue — with real business metrics, not guesses.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Tracking ROI — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$49</p>
          <p className="text-[#8b949e] mb-8">/month per workspace</p>
          <ul className="text-left space-y-3 mb-8 text-[#c9d1d9]">
            {[
              'Unlimited prompt versions',
              'A/B testing with statistical significance',
              'Business metrics dashboard',
              'API integrations (OpenAI, Anthropic, etc.)',
              'ROI calculation & reporting',
              'Team collaboration (up to 5 seats)',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the ROI calculation work?',
              a: 'You define your business metrics (conversion rate, revenue per session, churn, etc.) and connect them to your prompt versions. We measure the delta before and after each prompt change and calculate the monetary impact automatically.'
            },
            {
              q: 'Which AI providers are supported?',
              a: 'We support OpenAI, Anthropic, Cohere, Mistral, and any OpenAI-compatible API. You connect via API key and we proxy requests to track latency, cost, and output quality alongside your business metrics.'
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. You can cancel anytime from your billing dashboard. Your data is retained for 30 days after cancellation so you can export everything before it is removed.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} AI Prompt ROI Tracker. All rights reserved.
      </footer>
    </main>
  )
}
