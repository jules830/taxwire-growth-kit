// EXAMPLE tool: "Where do you owe sales tax?" (economic nexus check).
// ⚠️ The thresholds and rates below are approximate public figures, for the demo only.
// Taxwire's tax team must replace STATES with their own verified table, then empty `demoData`.
const STATES = {
  CA: { name: 'California',    threshold: 500000, rate: 0.0885 },
  TX: { name: 'Texas',         threshold: 500000, rate: 0.082 },
  NY: { name: 'New York',      threshold: 500000, rate: 0.0853 },
  FL: { name: 'Florida',       threshold: 100000, rate: 0.07 },
  IL: { name: 'Illinois',      threshold: 100000, rate: 0.0889 },
  WA: { name: 'Washington',    threshold: 100000, rate: 0.0938 },
  GA: { name: 'Georgia',       threshold: 100000, rate: 0.0738 },
  PA: { name: 'Pennsylvania',  threshold: 100000, rate: 0.0634 },
  OH: { name: 'Ohio',          threshold: 100000, rate: 0.0724 },
  NJ: { name: 'New Jersey',    threshold: 100000, rate: 0.066 },
  MA: { name: 'Massachusetts', threshold: 100000, rate: 0.0625 },
  CO: { name: 'Colorado',      threshold: 100000, rate: 0.0781 },
};
const usd = n => '$' + Math.round(n).toLocaleString('en-US');

window.TOOL = {
  slug: 'nexus-check',
  brand: 'Taxwire',
  logo: '',
  colors: { accent: '#5B8CFF', bg1: '#2B3A67', bg2: '#0F1733' },
  title: 'Where do you already owe sales tax?',
  subtitle: 'Pick the states you sell to, enter your revenue. You get the answer in 30 seconds, before a state sends you a letter.',
  demoData: 'Demo data: thresholds and rates are approximate and not verified. Do not publish before the tax team replaces them.',
  inputs: [
    { id: 'states', label: 'Where are your customers?', type: 'chips', hint: 'pick all that apply',
      options: Object.entries(STATES).map(([k, v]) => ({ value: k, label: v.name })) },
    { id: 'revenue', label: 'Annual US revenue', type: 'number', placeholder: '3000000', hint: 'in USD' },
    { id: 'months', label: 'Since when do you sell there?', type: 'select',
      options: [{ value: 12, label: '1 year' }, { value: 24, label: '2 years' }, { value: 36, label: '3 years or more' }] },
  ],
  button: 'Check my exposure',
  validate: s => !s.states.length ? 'Pick at least one state' : !(s.revenue > 0) ? 'Enter your annual US revenue' : '',
  compute: s => {
    // simple split: revenue spread evenly across the picked states (the full review uses real order data)
    const per = s.revenue / s.states.length, months = Number(s.months);
    const over = s.states.map(k => ({ k, ...STATES[k] })).filter(x => per >= x.threshold)
      .map(x => ({ ...x, owed: per * x.rate * months / 12 })).sort((a, b) => b.owed - a.owed);
    const total = over.reduce((a, x) => a + x.owed, 0);
    return {
      big: String(over.length),
      headline: over.length === 1 ? 'state where you likely owe sales tax' : 'states where you likely owe sales tax',
      note: over.length ? `Up to ${usd(total)} of uncollected tax, if your product is taxable there.` : 'Below every threshold today. Re-check when you grow.',
      items: over.map(x => ({
        title: x.name,
        value: usd(x.owed),
        detail: `Threshold ${usd(x.threshold)} a year. You are at about ${usd(per)}. Registration, filing calendar and penalties are in the full review.`,
      })),
    };
  },
  freeItems: 2,
  gate: {
    title: '{n} more states in your full report',
    text: 'Book 15 minutes with our tax team. We check your real order data, state by state, and tell you exactly what to file.',
    button: 'Book my 15-min nexus review →',
    url: 'https://www.taxwire.com',
  },
  webhook: '',
  footer: 'Estimate only, not tax advice.',
};
