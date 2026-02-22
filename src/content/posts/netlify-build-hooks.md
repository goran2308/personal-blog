---
title: Automate builds with Netlify Build Hooks and GitHub Actions
author: Goran Solev
date: 2023-04-03
description: How to use Netlify build hooks with GitHub Actions?
tags: ["tools"]
draft: false
excerpt:
thumbnail:
---

_I'm hosting this website on <a href="https://app.netlify.com" target="_blank">Netlify</a>, and recently I found out about something called Build Hooks. What are they, and how to use them?_

<br />

Basically, even though my posts were uploaded before the publishing date and marked as no draft, they still were not published until I manually rebuild my website from the Netliffy dashboard. And this was time-consuming for me and also I had to add reminders in my calendar to do these builds or to publish my posts at a certain date which was a huge distraction from my focus.

<br />

## Set up your hook
While looking for a solution for this huge problem of mine, I read an article about automatically triggering the build process on Netlify using these Build Hooks. They are basically URLs that trigger the builds and deploys. They are located in Site settings > Build & deploy > Continuous deployment > Build hooks.

![](https://d33wubrfki0l68.cloudfront.net/453ab1c4e4ac0a38d48b897de7abc889f069682e/445c7/images/configure-builds-build-hooks.png)

<br />

When you save the hook, will be a URL provided for your build. This URL is the actual trigger and can be used with many tools of your choice. I will explain how to use them with GitHub Actions but there are many other ways to use them. For example, you can use the URL from your terminal using curl and all you need to do is write a simple bash script, add it as a cronjob and trigger the build on Netlify. This will only work while your computer is up and running. That is why I suggest using GitHub actions.

```sh
$ curl -X POST -d '{}' https://api.netlify.com/build_hooks/5c23354f454e1350f8543e78
```

<br />

## Use the Build Hooks in GitHub Actions
Setting up GitHub Actions is a breeze. All you need to do is on your repo create an actions yaml file under the `.github\workflows folder`. For me this is called main.yaml file which contains the following:

```yaml
name: nightly-netlify-build

on:
  schedule:
    - cron: "0 3 * * Sun"

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: trigger netlify build
        run: |
          curl -X POST -d '{}' https://api.netlify.com/build_hooks/641843587aee3b2baf8bba24
```

If you hover with the cursor over the cron expression, GitHub displays the explanation of the cron expression which is very helpful. I used a website to write my cron job expression that was also very helpful called [Cronitor](https://crontab.guru/).

<br />

I've set my build to run every Sunday at 3am!

<br />

Save the file and push the changes. That's all!

<br />

---

<br />

#### Additional reading:

<a href="https://docs.github.com/en/actions" target="_blank">docs.github.com | GitHub Actions Docs</a> <br />
<a href="https://docs.netlify.com/configure-builds/build-hooks/" target="_blank">docs.netlify.com | Build Hooks</a> <br />
<a href="https://crontab.guru/" target="_blank">crontab.guru | Cronitor</a>