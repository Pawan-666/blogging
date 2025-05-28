+++
title = "Workflow"
description = "softwares I use"
date = 2025-05-28
draft = false

[taxonomies]
tags = ["dotfiles", "linux", "mac"]
categories = ["Dotfiles"]

[extra]
toc = true
comment = true
+++

Everything in my setup is chosen with one priority in mind: keyboard-first efficiency. My [dotfiles](https://github.com/Pawan-666/m3_dotfiles)  reflect years of iterating toward a system that feels fast, minimal, and flexible—without sacrificing power. I prefer tools that stay out of my way, let me stay in the flow, and do one thing well.

### 🧩 Workflow & Tools

#### OS: macOS  arm64

  Using mac for last couple of years now. I've used linux for ~4 years prior as my main machine. Prior to that windows. Switching to macos was not pleasant initially but I've gotten used to it and I understand why people like MacBook. It’s grown on me.

```
❯ neofetch
                    'c.          pawan@NEP-local
                 ,xNMM.          --------------------------
               .OMMMMo           OS: macOS 15.4.1 24E263 arm64
               OMMM0,            Host: Mac15,3
     .;loddo:' loolloddol;.      Kernel: 24.4.0
   cKMMMMMMMMMMNWMMMMMMMMMM0:    Uptime: 25 days, 24 mins
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    Packages: 184 (brew)
 XMMMMMMMMMMMMMMMMMMMMMMMX.      Shell: zsh 5.9
;MMMMMMMMMMMMMMMMMMMMMMMM:       Resolution: 1920x1080, 1512x982
:MMMMMMMMMMMMMMMMMMMMMMMM:       DE: Aqua
.MMMMMMMMMMMMMMMMMMMMMMMMX.      WM: Quartz Compositor
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    WM Theme: Graphite (Dark)
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   Terminal: tmux
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   CPU: Apple M3
    kMMMMMMMMMMMMMMMMMMMMMMd     GPU: Apple M3
     ;KMMMMMMMWXXWMMMMMMMk.      Memory: 3267MiB / 16384MiB
       .cooc,.    .,coo:.
```



#### Window Manager: **Aerospace**
  
macOS’s default window management doesn’t cater to keyboard-first workflows. Aerospace has been a refreshing change, by far the closest experience to i3 or bspwm on macOS. I’ve tried other macOS tiling managers, but nothing else really clicked like Aerospace.

### 🖥️ Terminal
#### Package Manager: **Homebrew**

Brew remains the default package manager for most macOS users. While Nix is appealing, it doesn’t yet align well with my current workflow. Keeping it simple with brew for now.

#### Shell: **Zsh**

I use Zsh with a few productivity plugins (autosuggestions, autocompletion) and the Powerlevel10k prompt for aesthetics and function. I stick to bash for scripting.

#### Terminal Emulator: **Alacritty , Ghostty**
  
* **Alacritty** is my daily driver. It is fast, GPU-accelerated, and handles a ridiculous number of tabs without hiccups. I'm a terminal tab hoarder. Bonus points for sane Vim-style copy/paste out of the box.

* **Ghostty** is there for the rare occasions I need inline image/thumbnail previews. It’s lightweight, modern, and a solid alternative.

#### Terminal Multiplexer: **Tmux**

Tmux is irreplaceable. I use a custom keybinding locally for global key and stick to stock when working over SSH. I've found this combo very rewarding. Nesting tmux sessions between local and remote machines has been incredibly reliable. 

#### Terminal File Manager: **Yazi**

I’ve previously used `nnn` and `lf` on Linux, both powerful, minimalist file managers. I’ve since migrated to **Yazi**, which offers sensible defaults, modern design, image rendering, and is easily customizable.

#### Editor: **Neovim**

Neovim is my go-to for everything—code, notes, quick edits. I’ve been a Vim user for years, and nothing beats the speed and efficiency. Fast is fun.

### 🌐 Browser **Brave**

After years on Firefox, I switched to Brave and haven’t looked back. I use it across both desktop and mobile. That said, syncing between devices can be frustrating to set up and manage, something I remain wary of.


### 📚 Notes & Knowledge Base

#### Notes + Blogging: **Zola**

I use **Zola** both for blogging and managing my markdown-based notes. It’s fast, simple, and fits my static-site mindset.

#### Markdown Notes Sync: **Obsidian (experimental)**

I’ve started experimenting with Obsidian for syncing notes across desktop and mobile. While I appreciate the concept, especially the mobile readability, the sync setup feels clunky without the paid cloud service. Still evaluating if it fits into my long-term workflow.

---
