# Compliance checklist for khuswantsharma.com

Last reviewed: 25 October 2026. Not legal advice; this records what the site does and why.

## What the site collects
- Contact form (Formspree): name, email, message. Nothing else.
- Vercel Web Analytics and Speed Insights: anonymous, cookieless statistics. No IP stored; daily visitor hash discarded after 24 hours.
- Hosting (Vercel): normal web server request data, held in Vercel's short-lived logs.
- No cookies, accounts, payments, ads, newsletters, embeds (YouTube, maps, social widgets) or third-party fonts. Fonts are self-hosted.

## Laws checked and how they apply
| Law | Applies? | What it means here |
| --- | --- | --- |
| India: Digital Personal Data Protection Act, 2023 + DPDP Rules, 2025 | Yes, treat as applying. Core duties and penalties start 13 May 2027 | Notice (Rule 3), security (Rule 6), breach intimation (Rule 7, Board report within 72 hours), keep data and logs at least 1 year (Rule 8(3)), publish contact person (Rule 9), rights and grievance within 90 days (Rule 14). Contact form relies on Section 7(a): data given voluntarily for a stated purpose |
| India: IT Act s.43A + SPDI Rules, 2011 | Unlikely: applies to body corporates handling sensitive data (passwords, financial, health, biometric). Name and email are not sensitive data. Section 43A is omitted when DPDP s.44 commences | No sensitive data is collected; the form asks people not to send it |
| India: CERT-In Directions, 28 April 2022 | Unlikely: written for service providers, intermediaries, data centres, body corporates, cloud/VPN/VPS and VDA providers | If a serious incident ever happens, reporting to CERT-In within 6 hours is the safe course |
| India: SEBI Research Analysts Regulations, 2014 / Investment Advisers Regulations, 2013 | No, as long as reports do not cover securities listed or to be listed on a stock exchange and no advice is sold | Terms page and every report say "not investment advice" and "not SEBI-registered". Re-check before writing on any listed or IPO-bound company |
| EU GDPR / UK GDPR (Art. 3(2)) | Unlikely: the site does not offer goods or services to people in the EU/UK or monitor their behaviour | Privacy Policy still covers GDPR-style rights, legal bases and complaints, so it is safe either way |
| US: California CCPA/CPRA | No: covers for-profit businesses above ~USD 26.6 million revenue (2026) or 100,000+ California consumers | Nothing to do |
| Copyright Act, 1957 / Trade Marks Act, 1999 | Yes, for third-party logos and quotes | Logos used only to identify companies; trademark notice on Terms page; sources credited; short quotes only |

## Recurring tasks
- Every 3 months: delete contact-form messages and related emails older than 1 year (Formspree dashboard and Gmail), unless a conversation is ongoing.
- Keep two-step verification on Formspree, Vercel, GitHub and Gmail.
- Before adding any new tool, form, cookie, embed, newsletter or analytics: update the Privacy Policy first, and check whether a cookie notice becomes necessary.
- Before writing on a listed or soon-to-be-listed company: re-check SEBI rules.
- On 13 May 2027 (DPDP core duties start): re-read the Privacy Policy against the Rules in force, and check whether the Data Protection Board has published its complaint portal; add the link.
- If a breach ever affects personal data: tell affected people without delay, report to the Data Protection Board (detailed report within 72 hours), and consider a CERT-In report.
