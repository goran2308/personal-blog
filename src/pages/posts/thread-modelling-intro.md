---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Architecting Resilience: A Comprehensive Guide to Threat Modeling'
author: Goran Solev
pubDate: 2026-01-10
description: 'Threat modeling: map systems, spot risks with STRIDE/PASTA, and build secure apps proactively.'
tags: ["cybersecurity"]
draft: false
---

<style>
  ol {
    padding-left: 20px;
  }

  ol li {
    list-style-type: decimal;
  }

  ul {
    padding-left: 20px;
  }

  ul li {
    list-style-type: disc;
  }

  figure {
    margin: 1.5rem 0;
  }

  figcaption {
    font-size: 0.75rem;
    font-style: italic;
    margin-top: -0.75rem;
  }

  table {
    font-size: 0.875rem;
  }
</style>

Imagine building the ultimate backyard fort as a kid.<br>
You’ve got cardboard walls, a secret password,<br>
and a “no intruders” sign.<br><br>

But before declaring it unbreakable,<br>
you switch to villain mode:<br><br>

“How would I sneak in?<br>
Over the fence?<br>
Through the window?<br>
Bribe the guard with candy?”

<figure>
  <img src="https://img.freepik.com/premium-photo/digital-fortress-advanced-cybersecurity-concept-with-castle-shield-icons-representing-data-protection-network-security-cloud-computing-futuristic-3d-illustration_924727-26042.jpg" alt="Digital fortress representing cybersecurity resilience with shields and tech icons">
  <figcaption>Source: Freepik</figcaption>
</figure>

That’s **threat modeling** — thinking like an attacker<br>
to protect your apps, systems, or networks *before* trouble strikes.<br><br>

Threat modeling systematically identifies, assesses,<br>
and prioritizes risks like vulnerabilities or missing safeguards.<br><br>

It’s proactive security: adopt the attacker’s mindset during design<br>
to build resilience from the start.

### The Four Core Questions Driving Threat Modeling

Every effective threat model relies on these four fundamental questions<br>
(popularized by Microsoft and Adam Shostack):<br><br>

1. **What are we building?** → Map out the system.  
2. **What can go wrong?** → Uncover potential threats.  
3. **What are we going to do about it?** → Apply fixes.  
4. **Did we do a good enough job?** → Validate and refine.

<figure>
  <img src="https://zd-brightspot.s3.us-east-1.amazonaws.com/wp-content/uploads/2021/03/27055828/Modeling-Process-1.png" alt="Threat Modeling Four-Question Framework diagram">
  <figcaption>Source: ZDNet</figcaption>
</figure>

### Step 1: Map It Out – Data Flow Diagrams and Trust Boundaries

You can’t secure what you don’t understand.<br><br>

Start by breaking the system into components<br>
(web servers, databases, APIs, users)<br><br>

and diagram how data flows between them — **Data Flow Diagrams (DFDs)**.<br><br>

The key element?<br><br>

**Trust boundaries** — lines where data crosses<br>
from untrusted zones (e.g., public internet)<br>
to trusted ones (e.g., internal servers).<br><br>

Anything crossing must be validated rigorously, like airport security.

<figure>
  <img src="https://threat-modeling.com/wp-content/uploads/2022/10/How-to-use-Data-Flow-Diagrams-in-Threat-Modeling-Example-1-1024x768.jpg" alt="Basic Data Flow Diagram example">
  <figcaption>Source: Threat-Modeling.com</figcaption>
</figure>

<figure>
  <img src="https://www.practical-devsecops.com/wp-content/uploads/2024/01/threat-modeling-data-flow-diagram-.png" alt="Data Flow Diagram with trust boundaries highlighted">
  <figcaption>Source: Practical DevSecOps</figcaption>
</figure>

### Step 2: Hunt for Threats – Meet STRIDE

With the map ready, ask: “What can go wrong?”<br><br>

**STRIDE** (Microsoft’s mnemonic) is the go-to framework for spotting threats.<br>
It stands for:<br><br>

- **Spoofing** — Impersonation (e.g., phishing to steal a login).  
- **Tampering** — Altering data in transit (e.g., man-in-the-middle attacks).  
- **Repudiation** — Denying an action because there’s no proof (e.g., no audit logs).  
- **Information Disclosure** — Leaking sensitive data (e.g., unencrypted database dumps).  
- **Denial of Service** — Overloading the system so legitimate users can’t access it (e.g., DDoS).  
- **Elevation of Privilege** — Gaining more access than allowed (e.g., guest becomes admin).

<figure>
  <img src="https://www.practical-devsecops.com/wp-content/uploads/2022/12/STRIDE-Threat-Model-identify-threats-1024x564.webp" alt="STRIDE threat categories visual cheat sheet">
  <figcaption>Source: Practical-DevSecOps.com</figcaption>
</figure>

### Comparing Threat Modeling Frameworks

STRIDE is great, but it’s not the only game in town.<br><br>

Here’s how it stacks up against others:<br><br>

- **STRIDE** (Microsoft) — Developer-focused, technical threats via mnemonic.  
  Best for software/apps. Quick and agile.

- **PASTA** (Process for Attack Simulation and Threat Analysis) — Risk-centric, business-aligned.  
  7 stages, ties threats to business impact.

  <figure>
    <img src="https://miro.medium.com/v2/resize:fit:932/0*WxTlZfwE6LEfCJ9O.png" alt="PASTA threat modeling process diagram">
    <figcaption>Source: medium.com</figcaption>
  </figure>

  <figure>
    <img src="https://threat-modeling.com/wp-content/uploads/2022/08/PASTA-Threat-Modeling-Stages.jpg" alt="PASTA 7-step framework overview">
    <figcaption>Source: Threat-Modeling.com</figcaption>
  </figure>

- **OCTAVE** — Organizational, asset-centric risk assessment.  
  More strategic than technical.

- **TRIAGE** — Lightweight, quick prioritization for fast teams.

- **LINDDUN** — Privacy-focused (Linkability, Identifiability, etc.).

  <figure>
    <img src="https://linddun.org/wp-content/uploads/2023/04/Artboard-3.0.png" alt="LINDDUN privacy threat categories">
    <figcaption>Source: LINDDUN.org</figcaption>
  </figure>

Choose based on your needs: agile dev → STRIDE; business risk → PASTA; org-wide → OCTAVE.

### Real-World Impact: Where Threat Modeling Saves the Day

- **Banking Apps** → Models reveal token theft risks → enforce MFA, biometrics, fraud detection.  
- **IoT Devices** → Expose remote risks → add encryption, device authentication.  
- **Medical Gear** → Prevent life-threatening tampering in insulin pumps and pacemakers.

### Tools to Jumpstart Your Threat Modeling Journey

No PhD required — start simple:<br><br>

- **Miro / Lucidchart** — Digital whiteboards with DFD templates.  
- **OWASP Threat Dragon** — Free, auto-suggests threats.

  <figure>
    <img src="https://asecurityengineer.com/assets/images/OWASP-Threat-Dragon.jpg" alt="OWASP Threat Dragon screenshot">
    <figcaption>Source: A Security Engineer</figcaption>
  </figure>

- **Microsoft Threat Modeling Tool** — Free, beginner-friendly.  
- **IriusRisk** — Enterprise-grade for living models.

### Why It’s Worth the Effort

Fixing flaws in design costs **fractions** of post-launch repairs<br>
(sometimes 100–6,000× cheaper, per studies).<br><br>

It’s shifting left: build security in, not bolt it on.

<figure>
  <img src="https://www.pmi.org/-/media/pmi/microsites/disciplined-agile/cyw/costofchange.png?rev=4875dff14b064653b93677e9c4ccb91a&sc_lang=en" alt="Cost of fixing defects vs. development phase chart">
  <figcaption>Source: ResearchGate (Barry Boehm)</figcaption>
</figure>

<figure>
  <img src="https://static.vecteezy.com/system/resources/previews/041/855/918/non_2x/security-shield-cyber-security-shield-with-lock-with-keyhole-cyber-data-protection-background-with-circuit-board-connections-and-tech-icons-wireframe-hand-pressing-button-illustration-vector.jpg" alt="Secure by design illustration">
  <figcaption>Source: Vecteezy</figcaption>
</figure>

### Your Next Move

Threat modeling isn’t paranoia — it’s smart preparation.<br><br>

Spend a few hours in the attacker’s shoes early,<br>
and you’ll create systems that make real hackers mutter “too hard” and move on.<br><br>

Start today: sketch your app on a whiteboard,<br>
run the four questions, and watch risks vanish.<br><br>

**We’re only scratching the surface here.**<br><br>

I’m diving deeper down this rabbit hole myself — learning, practicing,<br>
and aiming to become a professional threat model architect and consultant.<br><br>

Expect more in-depth articles soon: advanced frameworks,<br>
real client case studies (anonymized), tool deep-dives,<br>
and maybe even some war stories from the field.<br><br>

Stick around if you want to level up with me.

P.S. Have you threat modeled a project?<br>
What was your biggest “aha” moment?<br>
Share below — I read every comment! 👇

#CyberSecurity #ThreatModeling #SecureByDesign #DevSecOps #InfoSec #LearningInPublic