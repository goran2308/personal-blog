---
title: What is Synchthing?
author: Goran Solev
date: 2023-02-25
description: Sychthing and the benefits using it.
tags: ["tools"]
draft: false
excerpt: "Syncthing explained: secure, private, peer-to-peer file sync that works better than Dropbox for many use cases — setup, benefits, and gotchas."
thumbnail:
---

*Syncthing is an open-source peer-to-peer file synchronization tool that you can use for syncing files between multiple devices (including an Android phone).*

## Introduction
I want to introduce to you this amazing P2P folder-sharing tool capable of automatically serving folders and files over the wireless network. The devices must use the same network.

## The installation
As a multi-platform tool, the installation is different for Windows, macOS, Linux and Android. I will explain the Windows and Linux setup as I don't have a macOS device at the moment.

### Android
The Android setup is easy, and all you need is to install Synchthing from the [play store](https://play.google.com/store/apps/details?id=com.nutomic.syncthingandroid&gl=US&pli=1) and connect the Android device to the local device.

### Windows
On a Windows device, you need to download the latest version for Windows from [GitHub](https://github.com/Bill-Stewart/SyncthingWindowsSetup/releases/) but make sure you get the latest one.

<br />

All you need is to start the installation and follow the instructions on the screen. You might need to run it as an administrator, and you will get a notification to allow this. When the installation is complete a dashboard will be available on [http://localhost:8384](http://127.0.0.1:8384/) where you can see the default sharing folder and the details for your local and remote devices.


### Linux
On Linux, I'll cover the installation process for Fedora and Debian/Ubuntu only.

#### Fedora
So on the Fedora device, you will need to visit this [page](https://src.fedoraproject.org/rpms/syncthing) from where you can choose your Fedora version. If not sure how then in your terminal write `uname-a` to find out your Fedora version. After you choose the correct version on the download page you will need to get the installation package under **x86_64**.

<br />

Download just the first file as that one is the one you'll need to run Synchthing on the device. To install it just go to the download folder, open your terminal in the same folder and write:

```
sudo dnf localinstall [the-package-name].rpm -y
```

 Hit enter!


#### Debian/Ubuntu
On Debian/Ubuntu device you can follow the instruction [here](https://apt.syncthing.net/) which are straightforward but since Synchting has been included in the Debian 11 apt repository you can just write in your terminal window:

```
sudo apt-get update && sudo apt-get upgrade -y
sudo apt-get install apt-transport-https -y
```

and then

```
sudo apt-get install synchthing -y
```

Just to be sure it has been installed...

```
synchthing --version
```

you should get output with the current version in your terminal window.

## The configuration
This configuration will cover synchronisation between two devices, one "local device", and the other "remote device". The recommendation is to set up both devices at the same time, but it isn't crucial. The local device is the one you are configuring, and the other device connects. The important thing to know is that you need to install Synchthing on both devices.

![Synchthing GUI](https://docs.syncthing.net/_images/gs1.png "Synchthing GUI")

Open the admin GUI which is available on [http://localhost:8384](http://127.0.0.1:8384/) on your local device and the first thing you need to do is to accept the cookies if prompted to do because it is important for the browser.

<br />

On the left side is the list of folders and should be one already created for you called Default Folder which will be marked as "Unshared" since it isn't shared with any other device.

<br />

On the right side is the list of devices. This device section will show the information for the local device and the Remote section will list the devices connected to the local device.

<br />

Click on "Add remote device" in the bottom right corner of your local device. In the General tab on the local device add the Device ID from the remote device and save it. In the Sharing tab select the folder/folders that you want to be shared with the remote device.

![Synchthing GUI](https://docs.syncthing.net/_images/gs2.png "Synchthing GUI")
![Synchthing GUI](https://docs.syncthing.net/_images/gs3.png "Synchthing GUI")

After this, the remote device will show up on your right side as a disconnected remote device but don't worry it will connect after a minute or so. Just repeat the same process on your remote device, and you are ready to roll! It is as simple as that!

<br />

---

<br />

#### Additional reading:

<a href="https://docs.syncthing.net/intro/getting-started.html" target="_blank">docs.synchthing.net | Synchthing Official Docs</a> <br />
<a href="https://github.com/Bill-Stewart/SyncthingWindowsSetup" target="_blank">github.com | Synchthing Windows Setup</a> <br />
<a href="https://proprivacy.com/cloud/review/syncthing" target="_blank">proprivacy.com | Synchthing Review</a>