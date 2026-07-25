// Single source of truth for every report on the site.
// The homepage stat count, the Research library grid, and individual
// report pages all read from this array - update it here only.
export const reports = [
  {
    slug: "tax-without-recognition",
    title: "Tax Without Recognition",
    subtitle: "India's Virtual Digital Asset Regime and the July 2026 Rupture",
    author: "Khuswant Sharma",
    category: "Regulation & Policy",
    date: "2026-07-25",
    thumbnail: "/images/reports/tax-without-recognition.svg",
    pdf: "/reports/Tax-Without-Recognition-Khuswant-Sharma.pdf",
    // Count of distinct citations in this report's own "Principal sources" line
    // (Method and sources section) - update if that list changes.
    sourceCount: 11,
    hook: "India taxes virtual digital assets at one of the highest effective rates in the world while refusing to define what they legally are. That combination has held since 2022. On 23 July 2026, it started to break.",
    content: [
      { type: "heading", text: "Executive summary" },
      {
        type: "paragraph",
        text: "India taxes virtual digital assets at one of the highest effective rates in the world while refusing to define what they legally are. That combination has held since 2022. On 23 July 2026, it started to break.",
      },
      { type: "paragraph", text: "Five points frame the current position:" },
      {
        type: "paragraph",
        text: "**1. Policy is being set on numbers that disagree by a factor of three.** Estimates of India's crypto user base run from 39.3 million KYC-verified accounts on registered domestic platforms to 119 million users on private blockchain analytics. The most-cited figure in the debate, roughly $340 billion in annual transaction value, is gross on-chain volume, not capital inflow, and the RBI has attacked the methodology behind the ranking it comes from. Anyone underwriting this sector is working with contested denominators.",
      },
      {
        type: "paragraph",
        text: "**2. The tax regime has failed on its own stated terms.** The declared purpose of the 2022 framework was to bring VDA activity into the tax net. By exchanges' own figures presented to Parliament, close to 90% of Indian trading volume now sits offshore, beyond the reach of the authorities the regime was designed to serve.",
      },
      {
        type: "paragraph",
        text: "**3. The Reserve Bank of India has hardened, not softened.** At the Standing Committee on Finance on 2 July 2026, the RBI argued for containment leaning toward prohibition, and for keeping banks and regulated entities entirely insulated from private crypto and privately issued stablecoins. It kept prohibition on the table as a stated policy option.",
      },
      {
        type: "paragraph",
        text: "**4. Parliament has moved the other way.** In its 36th Report, tabled 23 July 2026, the same committee recommended an interim framework run by recognised self-regulatory organisations under a statutory regulator, and asked the Finance Ministry to build a legal taxonomy separating VDAs that behave like securities from those that behave like derivatives or something else entirely. This is the first official acknowledgement that tax circulars and anti-money-laundering notices are not a substitute for law.",
      },
      {
        type: "paragraph",
        text: "**5. Nothing has changed yet, and that is the point.** The report is a recommendation. The tax regime is untouched. The RBI's position is unchanged. What has changed is that the disagreement is now on the parliamentary record, which makes indefinite deferral harder to sustain.",
      },
      {
        type: "paragraph",
        text: "This report sets out what the regime actually consists of, how it was assembled, where the July 2026 positions diverge, and what an allocator can and cannot reasonably conclude from the available data.",
      },

      { type: "heading", text: "1. Start with the measurement problem" },
      {
        type: "paragraph",
        text: "Most writing on Indian crypto opens with a large number. This report opens with the reason those numbers cannot be used interchangeably, because the entire policy argument turns on which one a reader accepts.",
      },
      { type: "paragraph", text: "Three estimates are in circulation, and they measure different things." },
      {
        type: "paragraph",
        text: "**39.3 million.** The RBI told the Standing Committee that the domestic market had 54 service providers registered with the Financial Intelligence Unit and 39.3 million KYC-verified users. This is a count of verified accounts on registered Indian platforms. It is the most conservative figure and the most auditable, because it comes from regulated entities with reporting obligations. It also systematically excludes anyone trading offshore, which on the same body of evidence is most of the market.",
      },
      {
        type: "paragraph",
        text: "**119 million.** India has ranked first on Chainalysis's grassroots adoption index for three consecutive years, with an estimated 119 million users. This is a modelled estimate derived from on-chain and traffic data, not a registry. The RBI told the committee directly that the ranking rests on private blockchain analytics, is methodologically unsound, and overstates adoption in populous countries. That objection is self-interested, and it is also not obviously wrong: an index that weights raw user counts will favour a country of 1.4 billion people regardless of per-capita intensity.",
      },
      {
        type: "paragraph",
        text: "**$340 billion.** The OECD's Asia Capital Markets Report 2026, published in June 2026, put India's crypto-asset transaction value for the twelve months to June 2025 at approximately $340 billion, or close to 9% of GDP, the largest absolute figure in Asia. This number has been widely repeated as evidence of the market's scale, and it is the one most often misread.",
      },
      {
        type: "paragraph",
        text: "The $340 billion figure is sourced to Chainalysis inflow methodology and measures crypto received by blockchain addresses geolocated to India. It counts gross on-chain transaction volume, including the same funds moving repeatedly between wallets and exchanges. It is not balance-of-payments data. It does not show that $340 billion of foreign capital entered the country, and it has no counterpart in India's capital account, foreign exchange reserves, or FEMA reporting. A Businessworld investigation published in early July made this case at length, noting that a genuine inflow of that size would exceed India's annual foreign direct investment several times over and would have produced visible effects on the rupee that did not occur.",
      },
      {
        type: "paragraph",
        text: "Set the figures side by side and the incoherence is plain. Tax authority data reported by Reuters put Indian holdings at roughly $2.1 billion as of end-May 2026. Against $340 billion of annual transaction value, that implies turnover of more than 150 times the stock of holdings. The two numbers are not directly comparable, because the holdings figure covers what tax authorities can see on domestic platforms and the volume figure covers all activity geolocated to India. But the gap between them is the story: the visible stock is small, the inferred flow is enormous, and the difference is exactly the portion of the market that has moved beyond domestic reporting.",
      },
      { type: "component", name: "AdoptionEstimatesChart" },
      {
        type: "paragraph",
        text: "For an allocator, the operative conclusion is narrow. The Indian retail crypto market is large in transaction count and small in verifiable domestic assets. Any thesis that depends on a specific user number or a specific market size is resting on a figure that at least one Indian regulator has publicly disputed.",
      },

      { type: "heading", text: "2. What the regime actually consists of" },
      {
        type: "paragraph",
        text: "India has no statute recognising virtual digital assets as an asset class. The committee's own report records the government's formal position: crypto-assets are unregulated in India except for the limited purposes of taxation, prevention of money laundering, and reporting.",
      },
      { type: "paragraph", text: "What exists instead is three layers of obligation built on top of an undefined object." },
      { type: "heading", text: "2.1 The tax layer" },
      {
        type: "paragraph",
        text: "The Finance Act 2022 inserted section 2(47A) into the Income-tax Act, defining a virtual digital asset, and added two operative provisions.",
      },
      {
        type: "paragraph",
        text: "Section 115BBH taxes income from the transfer of a VDA at a flat 30%, plus applicable surcharge and cess. No deduction is permitted except cost of acquisition. Losses on VDA transfers cannot be set off against any other income, cannot be carried forward, and cannot be set off against gains on a different VDA, because each asset is treated separately. The provision applies from assessment year 2023-24.",
      },
      {
        type: "paragraph",
        text: "Section 194S requires the payer to deduct 1% tax at source on consideration for the transfer of a VDA to a resident, effective 1 July 2022. The threshold is ₹50,000 in a financial year for specified persons and ₹10,000 for others. Where the payee does not furnish a PAN, the rate rises to 20%. In peer-to-peer transfers with no exchange in between, the buyer carries the deduction obligation.",
      },
      {
        type: "paragraph",
        text: "Platform fees attract 18% GST. For a top-bracket taxpayer, the combined burden can exceed 42% of gains. Budget 2026 left this architecture untouched.",
      },
      {
        type: "paragraph",
        text: "Two features matter more than the headline rate. First, 194S applies to transaction value rather than profit, so it is a levy on activity regardless of outcome, and it compounds with each round trip. Second, the denial of loss offset means a trader who is flat across a portfolio can still owe tax, because the winners are taxed and the losers are ignored.",
      },
      { type: "heading", text: "2.2 The anti-money-laundering layer" },
      {
        type: "paragraph",
        text: "In March 2023, VDA service providers were brought under the Prevention of Money Laundering Act, 2002, as reporting entities. Registration with the Financial Intelligence Unit of India became mandatory. The obligation is activity-based rather than location-based, so offshore platforms serving Indian users fall within scope regardless of where they are incorporated.",
      },
      {
        type: "paragraph",
        text: "As of March 2026, 54 VDA service providers had registered, three of which no longer operate. Over the same period FIU-IND directed the takedown of 53 unregistered exchanges. Registration requirements were tightened in September 2025, moving from documentary policies to operational compliance obligations.",
      },
      { type: "heading", text: "2.3 The reporting layer" },
      {
        type: "paragraph",
        text: "This is the newest and fastest-moving layer. On 5 March 2026, the Central Board of Direct Taxes notified amendments to the Income-tax Rules, effective 1 January 2026, bringing crypto-assets, central bank digital currency, and electronic money products within the financial account reporting framework. The amendments implement India's commitment to the OECD's Crypto-Asset Reporting Framework, which takes effect from 1 April 2027 and will require identity and transaction details to be exchanged across participating jurisdictions.",
      },
      {
        type: "paragraph",
        text: "From 1 April 2026, exchanges must share transaction data directly with the Income Tax Department. Schedule VDA reporting became mandatory from FY 2025-26. Penalties run at ₹200 per day for non-reporting and up to ₹50,000 for inaccurate disclosure.",
      },
      {
        type: "paragraph",
        text: "The direction here is unambiguous. India is building a surveillance and reporting apparatus of considerable reach around an asset class it has declined to define, license, or supervise on the conduct side. Compliance obligations exist. Consumer protections, custody rules, reserve requirements, and disclosure standards do not.",
      },

      { type: "heading", text: "3. How the regime was assembled" },
      {
        type: "paragraph",
        text: "The current position is the residue of a decade of institutional conflict, and the sequence explains why the RBI's posture in 2026 looks the way it does.",
      },
      {
        type: "paragraph",
        text: "**November 2017.** The government constituted an inter-ministerial committee under the Secretary, Department of Economic Affairs, with the SEBI chairman and an RBI deputy governor among its members, to propose actions on virtual currencies.",
      },
      {
        type: "paragraph",
        text: "**April 2018.** The RBI issued a Statement on Developmental and Regulatory Policies on 5 April, followed by a circular on 6 April directing regulated entities to stop dealing in virtual currencies and to stop providing services to any person or entity dealing in them. This was not a ban on ownership. It was a severance of banking access, which in practice achieved much the same effect.",
      },
      {
        type: "paragraph",
        text: "**July 2019.** The inter-ministerial committee reported, recommending a ban, and published a draft Banning of Cryptocurrency and Regulation of Official Digital Currency Bill, 2019. The bill was never enacted.",
      },
      {
        type: "paragraph",
        text: "**March 2020.** In Internet and Mobile Association of India v. Reserve Bank of India, decided 4 March 2020, a three-judge bench of Justices Nariman, Bose, and Ramasubramanian set aside the 2018 circular. The Court held that the RBI has statutory authority to regulate risks that virtual currencies pose to the financial and payment systems, but that the restriction imposed was disproportionate to the harm demonstrated, given that the RBI had not shown that its regulated entities suffered actual damage. The circular fell on proportionality grounds under Article 19(1)(g), not because the RBI lacked power to act.",
      },
      {
        type: "paragraph",
        text: "This distinction is doing live work in 2026. The judgment did not hold that crypto must be permitted. It held that this particular instrument, on this particular record, went too far. The RBI retains its regulatory authority and has spent six years assembling a fuller evidentiary record.",
      },
      {
        type: "pullquote",
        text: "The judgment did not hold that crypto must be permitted. It held that this particular instrument, on this particular record, went too far.",
      },
      {
        type: "paragraph",
        text: "**May 2021.** The RBI notified that banks could no longer cite the 2018 circular, which had ceased to be valid from the date of judgment, while confirming that KYC, AML, PMLA, and FEMA obligations continued to apply under separate authority.",
      },
      {
        type: "paragraph",
        text: "**2022 and 2023.** The tax regime and the PMLA regime arrived, in that order. Neither conferred legal status. Both created obligations.",
      },
      {
        type: "paragraph",
        text: "**2025 into 2026.** The Standing Committee on Finance began formal consultations. In December 2025 it heard CoinDCX, Coinbase, and CoinSwitch. On 7 January 2026, FIU-IND and the CBDT appeared; the CBDT told the panel it had identified approximately ₹888.82 crore in undisclosed VDA-related income and issued notices to more than 44,000 taxpayers. At its seventh sitting on 20 May 2026, the committee heard Binance, WazirX, and ZebPay alongside the Revenue Secretary, the Income Tax Department, IFSCA, and the Ministry of Corporate Affairs. This was the first time international exchanges were consulted directly, and the chairman, Bhartruhari Mahtab, said afterwards that the committee had found thousands of crores leaving the country through crypto rails.",
      },
      { type: "component", name: "RegulatoryTimeline" },

      { type: "heading", text: "4. The July 2026 rupture" },
      { type: "paragraph", text: "Three weeks in July produced the sharpest institutional divergence on this subject since 2019." },
      { type: "heading", text: "4.1 The RBI's case for containment" },
      {
        type: "paragraph",
        text: "On 2 July 2026, Deputy Governor Rohit Jain and Executive Director P. Vasudevan appeared before the Standing Committee. Their position, set out in a background note, was that India should adopt a calibrated containment strategy leaning toward prohibition: ring-fence the financial system by barring banks and regulated entities from crypto exposure, block private crypto and privately issued stablecoins from payments and settlement, and limit systemic linkages. The note recorded that prohibition remains a recognised policy option under international standard-setting frameworks and continues to merit consideration.",
      },
      {
        type: "paragraph",
        text: "The reasoning has four strands. Conventional regulation would legitimise speculative products with no beneficial economic function and create a false perception of safety among retail users. Privately issued stablecoins threaten monetary sovereignty, and here the RBI made a point often missed: it objects to rupee-pegged tokens as well as dollar-pegged ones, on the ground that rupee-backed tokens would erode seigniorage and create stress points in periods of market turbulence. Crypto transactions have been repeatedly linked to fraud, illegal gambling, unaccounted transfers, and peer-to-peer abuse. And crypto activity could worsen capital outflows and pressure the external position.",
      },
      {
        type: "paragraph",
        text: "On 8 July, Reuters reported from internal government documents that the RBI had told the government that managing digital asset risk through regulation would be difficult and that formal regulation could confer legitimacy and allow the sector to become systemic. The same documents recorded the tax department's concerns about under-reporting and the difficulty of tracking offshore and peer-to-peer activity.",
      },
      {
        type: "paragraph",
        text: "One qualification deserves emphasis, because it is where the RBI's position is more subtle than the headlines suggest. The central bank drew a distinction between private cryptocurrencies and tokenised government securities. Its restrictions target speculation, not distributed ledger technology as such, and it wants room for tokenised sovereign instruments to develop on regulated infrastructure. The RBI is not arguing against blockchain. It is arguing against privately issued claims circulating outside its control.",
      },
      { type: "heading", text: "4.2 The counter-positions" },
      {
        type: "paragraph",
        text: "The RBI was not the only voice. The Institute of Chartered Accountants of India appeared the same day and argued for a comprehensive VDA law covering issuance, trading, and custody, on the view that blockchain systems and stablecoins could make cross-border payments faster and cheaper. Mahtab noted that ICAI has been auditing VDAs under the existing income-tax framework and had flagged constraints in doing so.",
      },
      {
        type: "paragraph",
        text: "SEBI has signalled openness to regulating tokens classified as securities. That feeds a proposed multi-regulator model, discussed but not adopted, splitting oversight between SEBI for exchanges and security-like tokens, the RBI for cross-border flows and foreign investment links, and the Finance Ministry for policy and taxation.",
      },
      { type: "paragraph", text: "The Department of Economic Affairs appeared on 15 July, in what was expected to be the final round of evidence." },
      { type: "heading", text: "4.3 The committee's answer" },
      {
        type: "paragraph",
        text: "On 23 July 2026, the committee tabled its 36th Report on the Securities Markets Code, 2025. On crypto it recommended an interim framework operated by recognised self-regulatory organisations under the supervision of a designated statutory regulator, either SEBI or the RBI.",
      },
      {
        type: "paragraph",
        text: "The specifics matter more than the headline. Any recognised SRO would have to set minimum standards on governance, transparency, disclosure, investor protection, grievance redress, compliance, and codes of conduct. Reported requirements include auditing exchange reserves and legally segregating customer funds from company balance sheets. The industry would run the day-to-day rulebook; a statutory regulator would sit above it.",
      },
      {
        type: "paragraph",
        text: "The committee also asked the Finance Ministry to construct a legal taxonomy for VDAs, on the reasoning that not every digital asset should be regulated identically: some may qualify as securities, some as derivatives, and some may need a new category, particularly those tied to payments, utility functions, or on-chain infrastructure. It recommended that the government consider whether a separate statutory framework is needed for cryptocurrencies, NFTs, and DeFi tokens, and that securities law be drafted technology-neutrally so that tokenised securities on distributed ledgers fall within scope without creating gaps.",
      },
      {
        type: "paragraph",
        text: "Three questions were put to the Finance Ministry for resolution before the Securities Markets Code is finalised: whether crypto investment products will be covered by the Code, whether exchanges offering tokenised securities fall within its scope, and whether additional enabling provisions are needed for regulators to oversee tokenised financial products including real-world assets.",
      },
      {
        type: "paragraph",
        text: "The committee reviewed the approaches taken in the United Kingdom, Singapore, the United States, and the European Union, and concluded that India should not wait for a single comprehensive law but should move in stages, beginning with SRO-led oversight. It declined to fold crypto into the Securities Markets Code at this stage, calling that premature.",
      },
      {
        type: "paragraph",
        text: "A distinction worth holding onto: this is the 36th Report, on the Securities Markets Code. The committee's dedicated study, titled \"A Study on Virtual Digital Assets (VDAs) and Way Forward,\" is a separate document still expected during the monsoon session. The recommendations above are therefore a preview of the committee's thinking rather than its full statement.",
      },

      { type: "heading", text: "5. The leakage evidence" },
      { type: "paragraph", text: "The strongest argument against the status quo is not that it is unfair. It is that it does not work at what it was built to do." },
      {
        type: "paragraph",
        text: "The 2022 tax regime was justified as a means of bringing VDA activity into the tax net. The available evidence suggests it pushed activity out of reach instead.",
      },
      {
        type: "paragraph",
        text: "By exchanges' own figures presented to Parliament, close to 90% of Indian trading volume has migrated offshore. The OECD report puts offshore trading at around the same level. MP Raghav Chadha, during the Union Budget 2026-27 debates, cited roughly 73% of VDA trading on foreign exchanges, more than 180 Indian crypto startups relocating abroad, and around 120 million investors using offshore platforms. These estimates do not agree with each other, which is consistent with the measurement problems set out in section 1, but they point the same direction.",
      },
      {
        type: "paragraph",
        text: "Compliance data supports the same reading. Tax officials reported that fewer than 25% of the 645,000 people who transacted in crypto in the year to March 2023 reported their gains. The CBDT identified ₹888.82 crore in undisclosed VDA income and issued notices to more than 44,000 taxpayers.",
      },
      {
        type: "paragraph",
        text: "There is also a price signal, and it is the most useful single indicator in this report. In late June 2026, USDT in India reportedly traded around 8.5% above the prevailing USD/INR rate. A stablecoin premium of that size is a measurable price on the friction of getting rupees into and out of the crypto system. In a market with functioning banking rails, arbitrage would compress it. Its persistence implies that the on-ramp is constrained, and it functions as a de facto capital control that nobody legislated.",
      },
      {
        type: "paragraph",
        text: "Enforcement activity has intensified alongside. The Enforcement Directorate has raided Bengaluru crypto firms in a ₹2,500 crore FEMA investigation, acted in June against a ₹500 crore Korvio Coin Ponzi scheme affecting roughly 248,000 investors, and filed a prosecution complaint in a ₹64.55 crore Coinbase-phishing matter. The National Investigation Agency has flagged the combination of crypto, Telegram, and VPNs in terror financing patterns.",
      },
      {
        type: "paragraph",
        text: "These enforcement cases cut both ways, and honest analysis has to say so. They are precisely the harms the RBI cites in arguing for containment. They are also, on the committee's reasoning, evidence that an unsupervised market produces exactly these outcomes and that supervision cannot wait. The same facts support both conclusions. What separates the two positions is a judgment about whether supervision reduces harm or legitimises it, and that judgment is not resolvable from the data.",
      },
      {
        type: "pullquote",
        text: "The same facts support both conclusions. What separates the two positions is a judgment about whether supervision reduces harm or legitimises it, and that judgment is not resolvable from the data.",
      },

      { type: "heading", text: "6. Does the e-rupee work as a substitute?" },
      {
        type: "paragraph",
        text: "The RBI's containment argument depends on an implicit claim: that the digital rupee can absorb the legitimate functions people currently seek from private digital assets. That claim is testable.",
      },
      {
        type: "paragraph",
        text: "The wholesale CBDC pilot began 1 November 2022 and the retail pilot on 1 December 2022. Speaking in St Petersburg on 2 July 2026, Governor Sanjay Malhotra said the pilot had reached 12 million users and more than 175 million transactions, with cumulative value close to ₹400 billion. Wallet holdings are capped at ₹10,000 in the pilot.",
      },
      {
        type: "paragraph",
        text: "Set against UPI, which has over 400 million users and processes upwards of 14 billion transactions a month, the e-rupee has roughly 3% of the user base after three and a half years, and its cumulative transaction count is a fraction of what UPI clears in a single day. The RBI has run awareness campaigns under its RBI Kehta Hai programme, made the e-rupee interoperable with existing UPI QR codes, and offered merchants instant settlement at zero cost. Adoption remains modest.",
      },
      { type: "component", name: "CBDCvsUPIChart" },
      {
        type: "paragraph",
        text: "The pilot has found more traction in programmable government disbursement than in retail payments. A CBDC-based public distribution system pilot launched in Gujarat in February 2026, with beneficiaries receiving programmable rupees redeemable only at Fair Price Shops, and similar work has run in Puducherry and Chandigarh. On the international side, the RBI has signed a digital assets arrangement with the Monetary Authority of Singapore, is in discussions with Singapore and the UAE, participates in BIS-led initiatives, and has proposed putting BRICS CBDC linkage on the agenda for the 2026 summit that India hosts. It also plans a CBDC and asset tokenisation sandbox.",
      },
      {
        type: "paragraph",
        text: "The reasonable assessment is that the e-rupee is a competent sovereign settlement rail with genuine promise in programmable public spending, and that it is not currently a substitute for the speculative and cross-border functions that drive private crypto demand in India. Nobody buys USDT at an 8.5% premium because they want a better domestic payment method. Containment premised on the e-rupee absorbing that demand is premised on a substitution that the adoption data does not yet show.",
      },
      {
        type: "pullquote",
        text: "Nobody buys USDT at an 8.5% premium because they want a better domestic payment method.",
      },

      { type: "heading", text: "7. Scenarios" },
      {
        type: "paragraph",
        text: "The committee's dedicated VDA report is pending. The government retains the decision. Three paths are plausible, with rough weights reflecting my reading of the institutional balance rather than any market-implied probability.",
      },
      { type: "heading", text: "Containment-plus: status quo hardens (roughly 45%)" },
      {
        type: "paragraph",
        text: "The government accepts neither the RBI's prohibition option nor the committee's SRO framework in full. Tax and reporting obligations tighten further as CARF implementation approaches in April 2027. Banks stay informally distant from the sector without a formal bar. No enabling legislation appears in this parliamentary cycle.",
      },
      { type: "paragraph", text: "This is the path of least resistance, and it is what has happened at every previous decision point since 2020." },
      {
        type: "paragraph",
        text: "**Observable early indicators:** Finance Ministry responses to the committee's three questions that defer rather than answer. No VDA bill in the monsoon or winter legislative agenda. Continued FIU-IND takedown activity without new licensing machinery.",
      },
      {
        type: "paragraph",
        text: "**Consequence:** The stablecoin premium persists or widens. Offshore share of volume continues rising. Domestic exchange economics deteriorate further.",
      },
      { type: "heading", text: "Framework-lite: SRO route adopted (roughly 35%)" },
      {
        type: "paragraph",
        text: "The government picks up the SRO recommendation through regulatory guidance rather than primary legislation, designating SEBI or the RBI as supervisor. A recognised SRO is constituted with reserve-audit and fund-segregation requirements. Legal definitions begin to separate security-like tokens from payment and utility tokens.",
      },
      {
        type: "paragraph",
        text: "This is the most consequential outcome for domestic market structure, because it creates the first conduct-side rulebook and the first basis on which a regulated Indian institution could plausibly engage with the sector.",
      },
      {
        type: "paragraph",
        text: "**Observable early indicators:** SEBI or RBI consultation paper on SRO recognition criteria. Movement on the Securities Markets Code that addresses tokenised securities explicitly. Industry bodies formally applying for SRO status.",
      },
      {
        type: "paragraph",
        text: "**Consequence:** Domestic exchanges gain a compliance moat. Offshore migration slows if, and only if, the tax arithmetic also changes, which the committee did not recommend.",
      },
      { type: "heading", text: "Prohibition-adjacent: rails formally severed (roughly 20%)" },
      {
        type: "paragraph",
        text: "The RBI's position prevails to the extent that banks and regulated entities are formally barred from crypto exposure and private stablecoins are excluded from payments and settlement by regulation rather than convention.",
      },
      {
        type: "paragraph",
        text: "The 2020 judgment constrains but does not preclude this. The Court struck down the 2018 circular for disproportionality on the record then available, while affirming the RBI's authority to act. A better-documented, more narrowly drawn instrument aimed at systemic linkage rather than at ownership would be materially harder to challenge on the same grounds. Ownership and trading would likely remain legal for individuals; what would be walled off is the interface with the formal financial system.",
      },
      {
        type: "paragraph",
        text: "**Observable early indicators:** An RBI circular or master direction on regulated-entity exposure. Explicit exclusion of private stablecoins from payment system authorisation. Banking partners withdrawing from exchange relationships in a cluster rather than individually.",
      },
      {
        type: "paragraph",
        text: "**Consequence:** The stablecoin premium widens sharply. Domestic exchange volumes collapse toward peer-to-peer and offshore. Tokenised sovereign instruments proceed regardless, given the RBI's own distinction.",
      },
      {
        type: "paragraph",
        text: "The weights above are a judgment, not a calculation, and the July 23 report is the reason the second scenario is no longer negligible. Before it, the institutional record contained no official statement that the current approach was inadequate.",
      },

      { type: "heading", text: "8. What this means for allocators" },
      {
        type: "paragraph",
        text: "Some observations for anyone assessing Indian exposure in this sector. These are descriptive; nothing here is a recommendation, and I am not authorised to give investment advice.",
      },
      {
        type: "paragraph",
        text: "**Domestic exchange equity carries binary regulatory risk that is not diversifiable within India.** The spread between the framework-lite and prohibition-adjacent scenarios is the difference between a licensed moat and a severed banking relationship. That risk is not hedgeable through position sizing, and it does not correlate with token prices.",
      },
      {
        type: "paragraph",
        text: "**The compliance apparatus is an asset for incumbents.** Fifty-four registered VDA service providers, tightened September 2025 requirements, direct data-sharing with the Income Tax Department from April 2026, and CARF from April 2027 together constitute a substantial barrier. If the SRO route is adopted, that barrier becomes a licence. Compliance-first platforms are positioned for framework-lite in a way that offshore-dependent businesses are not.",
      },
      {
        type: "paragraph",
        text: "**Tokenisation of sovereign and regulated instruments is the segment least exposed to the prohibition question.** The RBI has explicitly distinguished private crypto from tokenised government securities and wants the latter developing on regulated infrastructure. The committee asked the Finance Ministry to ensure regulators can oversee tokenised financial products including real-world assets. Both institutions point the same way here, which is unusual in this file and worth noting.",
      },
      {
        type: "paragraph",
        text: "**The tax arithmetic, not the legal status, governs retail flow.** A 30% flat rate with no loss offset, 1% TDS on transaction value, and 18% GST on fees produce an effective burden that can exceed 42%. Budget 2026 left it unchanged and the committee did not recommend changing it. Regulatory clarity without tax reform is unlikely to reverse offshore migration, because the offshore incentive is fiscal before it is legal.",
      },
      {
        type: "paragraph",
        text: "**Underwrite the denominators, not the headlines.** A pitch built on 119 million users or a $340 billion market is built on figures that a serving regulator has publicly contested and that measure something other than what they are usually taken to measure. The defensible domestic figure is 39.3 million KYC-verified users across 54 registered providers, with roughly $2.1 billion in holdings visible to tax authorities.",
      },
      {
        type: "paragraph",
        text: "The live question is whether India ends up with a supervised domestic market or a permanently offshore one. As of today the second is the default, because it is what the current settlement produces, and the first requires an affirmative decision that has been deferred at every previous opportunity.",
      },
      {
        type: "pullquote",
        text: "The live question is whether India ends up with a supervised domestic market or a permanently offshore one.",
      },

      { type: "heading", text: "Method and sources" },
      {
        type: "paragraph",
        text: "**What this report is.** Desk research compiled between 23 and 25 July 2026 from public sources. No primary interviews, no proprietary data, no market access.",
      },
      {
        type: "paragraph",
        text: "**What I could not verify directly.** The full text of the Standing Committee's 36th Report was not retrievable from the Lok Sabha server at the time of writing; its contents here are drawn from multiple independent secondary reports of the tabled document, which agree on the substance of the recommendations. The Reuters reporting of 8 July 2026 rests on internal government documents that I have not seen; figures attributed to it are reported at second hand and flagged as such in the text. Figures presented in closed committee sittings are known only through reporting of those sittings.",
      },
      {
        type: "paragraph",
        text: "**Where sources conflict, and how I handled it.** Estimates of user numbers, offshore trading share, and market size differ materially between the RBI, the OECD, Chainalysis, industry bodies, and parliamentary statements. I have reported the range rather than selecting a preferred figure, and section 1 sets out why the figures are not interchangeable. On the commencement of section 115BBH, sources differ between 1 April 2022 and 1 April 2023; the discrepancy reflects the distinction between financial year and assessment year, and I have used the assessment year formulation that matches the statutory text. The USDT premium is a single reported observation from late June 2026 rather than a series, and should be treated as an indication rather than a measurement.",
      },
      {
        type: "paragraph",
        text: "**Principal sources.** Internet and Mobile Association of India v. Reserve Bank of India, W.P. (C) 528/2018 and 373/2018, judgment of 4 March 2020. Income-tax Act, 1961, sections 2(47A), 115BBH, and 194S, as inserted by the Finance Act 2022. Prevention of Money Laundering Act, 2002, as applied to VDA service providers from March 2023. Standing Committee on Finance, 36th Report on the Securities Markets Code, 2025, tabled 23 July 2026. CBDT notification of 5 March 2026 amending the Income-tax Rules. OECD, Asia Capital Markets Report 2026. Reuters reporting of 8 July 2026. RBI background note to the Standing Committee on Finance, 2 July 2026. Statements by the Governor of the RBI, 2 July 2026. Cyril Amarchand Mangaldas, FIG Paper No. 57 on Indian digital asset developments. Businessworld investigation into the $340 billion figure, July 2026.",
      },
      {
        type: "paragraph",
        text: "**Disclosure.** I hold no position in any digital asset, exchange, or company named in this report. I am a Private Equity Fellow at the Indian Venture and Alternate Capital Association; this report is independent work and does not represent the views of IVCA or its members.",
      },
      {
        type: "paragraph",
        text: "**Corrections.** If you find an error in this report, I want to know. Contact details are on the site.",
      },
    ],
  },
];

export const categories = [...new Set(reports.map((r) => r.category))];
