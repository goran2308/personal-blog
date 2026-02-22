---
title: Fix "Insecure mixed content detected" on Netlify (Astro)
author: Goran Solev
date: 2023-04-17
description: How to fix "Insecure mixed content detected" on Netlify (Astro)?
tags: ["astro"]
draft: false
excerpt:
thumbnail:
---

_Recently I faced a problem using Netlify to host my Astro blog and website. I was getting this message in the logs that actually my website is served through http:// instead https:// protocol which was already activated. This is the fix I found that works for me. Hopefully, it will work for you too!_

## The problem

Every time when I update my blog and the build process on Netlify is done, I get email that it is served mixed content on http:// instead https:// and this was very annoying for me.

![](/assets/img/mixed-content-log.png)

I was trying to find solution for long time (month or so) but without any success. So I decided to re-read the whole documentation from Astro and make sure I don't miss something causing this problem of mine.

<br />

After a week of reading I came across the <a href='https://docs.astro.build/en/reference/configuration-reference/' target="_blank">Configuration Reference</a> section where were covered all supported configuration options for Astro (recommended reading them) and my solution was right there, in front of my nose.

## The solution

The solution was right <a href="https://docs.astro.build/en/reference/configuration-reference/#site" target="_blank">here</a>! Basically I just needed to put one line in my Astro configuration file named astro.config.mjs.

![](/assets/img/site-property.png)

In the site property I wrote my website domain with https:// like this:

```json
{
  site: "https://goransolev.com"
}
```

After I pushed all the changes to the GitHub repo which triggered the build and everything went smooth without any error messages from Netlify.