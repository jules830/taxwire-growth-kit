// One tool = this file. The engine (index.html) never changes.
// Fill it with the lm-tool skill: it asks the questions, then writes this file.
window.TOOL = {
  slug: 'my-tool',
  brand: 'Taxwire',
  logo: '',                       // path or URL to the logo (white or transparent works best on the dark header)
  colors: { accent: '#5B8CFF', bg1: '#2B3A67', bg2: '#0F1733' },
  title: 'The promise of the tool, in the reader\'s words',
  subtitle: 'What they get in 30 seconds.',
  demoData: '',                   // non-empty = yellow banner "demo data" (keep it until the numbers are verified)
  inputs: [
    { id: 'revenue', label: 'Annual revenue', type: 'number', placeholder: '2000000', hint: 'in USD' },
  ],
  button: 'Show my result',
  validate: s => s.revenue > 0 ? '' : 'Enter your revenue',
  // compute() returns the WOW (big + headline) and the items. The first `freeItems` show in full, the rest are blurred.
  compute: s => ({
    big: '3',
    headline: 'things you should look at',
    note: 'Based on what you entered.',
    items: [
      { title: 'Item 1', value: '$12,000', detail: 'Why it matters, in one line.' },
      { title: 'Item 2', value: '$8,000', detail: '' },
      { title: 'Item 3', value: '$5,000', detail: '' },
    ],
  }),
  freeItems: 2,
  gate: {
    title: '{n} more in your full report',
    text: 'Book 15 minutes with our team. We go through the full report with you, on your numbers.',
    button: 'Book my 15-min review →',
    url: 'https://cal.com/your-link',
  },
  webhook: '',                    // optional: Zapier/Make/n8n/Clay URL that receives every run (inputs + result)
  footer: '',
};
