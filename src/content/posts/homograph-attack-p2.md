---
title: 'When Your “a” Is Actually a Russian Spy: The Real-World Horror Show (Part 2 of 3)'
author: Goran Solev
date: 2025-12-17
description: 'Cybersecurity: Homograph Attack - Part 2'
tags: ["cybersecurity"]
draft: false
excerpt:
thumbnail:
---

_Part 1 broke down the sneaky mechanics of homograph attacks. Now in Part 2, we dive into the real-world disasters—big brands, banks, and crypto projects that lost millions because one tiny letter was a wolf in sheep's clothing._

<br />

Right, deep breath.

<br />

Here are the real-world cases that still keep security teams awake at night.

<ul>
<li>
<h4>1. Adobe & the Dotted “b” That Installed Banking Trojans (2017)</h4>
<p>Someone registered adoḅe[.]com (that second “b” has a tiny dot below it (U+1E05) you’ll never spot on a phone screen).
Fake site offered a “critical Flash Player update”. Thousands downloaded it.
Result: Betabot trojan on their machines, quietly stealing banking credentials.
Adobe had to send out emergency warnings while their own name was being weaponised.</p>
</li>

<li>
<h4>2. The 100% Cyrillic Apple.com (2017 – Proof-of-Concept)</h4>
<p>Russian researcher Arseny Levin registered аррӏе[.]com (every letter Cyrillic) and even got a valid SSL certificate for it.
In every major browser it displayed as apple.com. Punycode underneath: xn--80ak6aa92e.com.
He disclosed it responsibly, but the demo proved any brand could be perfectly cloned overnight.</p>
</li>

<li>
<h4>3. Ethereum ICO Donations Sent to Narnia (2017–2018)</h4>
<p>Fake site: еthеrеum[.]org (two Cyrillic “e”s).
Exact copy of the official Ethereum Foundation page, except the wallet address belonged to the scammers.
In a few hours people sent >$250k in ETH. Vitalik had to beg on Twitter for people to stop donating to the obvious scam. They didn’t.</p>
</li>

<li>
<h4>4. Canadian Bank Password-Reset Heist (2018)</h4>
<p>Legitimate-looking emails from the bank with a password-reset link to bankofcanаda[.]com (Cyrillic “а”).
Victims reset passwords → attackers used the fresh credentials on the real site within minutes.
The bank only realised something was wrong when customers started calling about money disappearing to Eastern Europe.</p>
</li>

<li>
<h4>5. Lenovo’s Superfish Catastrophe (2014–2015)</h4>
<p>Lenovo pre-installed Superfish adware on millions of laptops.
Superfish performed man-in-the-middle attacks on HTTPS using a root cert tied to lenоvo[.]com (Cyrillic “о”).
Every banking session, every login (completely decrypted for ad injection).
When it broke, it was one of the biggest “we accidentally shipped spyware” scandals in history.</p>
</li>

<li>
<h4>6. Microsoft 365 Phishing That’s Still Running Today (2021–2024)</h4>
<p>Sender display name: “Suррогt Меѕѕаցе Сеntеr” (every capital letter swapped for Cyrillic lookalikes).
Email uses real Microsoft Forms/Sway links to look safe, then redirects to a homograph login page.
Tens of thousands of corporate credentials stolen. Average cost per successful breach: $4.88 million (IBM 2024).</p>
</li>

<li>
<h4>7. The Crypto Wallet Slaughterhouse (2020 → right now)</h4>
<p>Fake Ledger sites: ledɡer[.]com, ˢledger[.]com
MetaMask clones: metаmask[.]io (Cyrillic “а”)
Binance, Coinbase, Trust Wallet… all have active homograph twins as you read this.
One wrong click or typed seed phrase = wallet drained forever.</p>
</li>

<li>
<h4>8. PayPal’s 200+ Sleeping Clones</h4>
<p>Security researchers found over 200 active PayPal homograph domains that PayPal’s own monitoring missed for months because their filters only looked for exact string matches.</p>
</li>
</ul>

<br />

Feeling queasy? Same.

<br />

The good news: almost every single one of these could have been stopped dead with settings and tools that take literally minutes to enable.
That’s exactly what Part 3 is for (dropping in a few days): the no-BS, works-in-real-life defence checklist that turns you from target to “yeah, nice try”.

<br />

See you there. Your bank account is begging you not to miss it.

<br />

P.S. Which one of these made you audibly say “you’re kidding”? Tell me below — I read everything. 👇