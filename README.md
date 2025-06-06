# Pinokio

![poster.png](poster.png)


## Introduction

![animation.gif](animation.gif)

Pinokio is a browser that lets you **locally install, run, and automate any AI on your computer**. Everything you can run in your command line can be **automated with Pinokio script**, with a user-friendly UI.

You can use Pinokio to automate anything, including:

1. Install AI apps and models
2. Manage and Run AI apps
3. Create workflows to orchestrate installed AI apps
4. Run any command to automate things on your machine
5. and more...

## Features

Here's what makes Pinokio special:

1. **Local:** Everything gets installed and runs locally. None of your data is stored on someone else's server.
2. **Free:** Pinokio is an open source application that is 100% free to use with no restriction. There is no one to pay for API access, since everything runs on your local machine. Play with AI as much as you want, for free forever.
3. **Private:** You don't need to worry about submitting private data just to run AI, everything runs 100% privately on your own machine.
4. **User-friendly Interface:** Pinokio provides a user-friendly GUI for running and automating anything that you would normally need to use the terminal for.
5. **Batteries Included:** Pinokio is a self-contained system. You do not need to install any other program. Pinokio can automate anything, including program/library installations. The only program you need is Pinokio.
6. **Cross Platform:** Pinokio works on ALL operating systems **(Windows, Mac, Linux)**.
7. **Save Storage and Resources:** Pinokio has a lot of optimization features that will save you hundreds of gigabytes of disk space. Also, many other resource optimization features (such as memory) all possible with Pinokio.
8. **Expressive Scripting Language:** Pinokio script is a powerful automation scripting language with features like memory, dynamic templating, and extensible low level APIs.
9. **Portable:** Everything is stored under an isolated folder and everything exists as a file, which means you can easily back up everything or delete apps simply by deleting files.


---

## Architecture

Pinokio takes inspiration from how traditional computers work.

Just like how a computer can do all kinds of things thanks to its comprehensive architecture, Pinokio as a virtual computer is a comprehensive platform for running and automating anything you can imagine with AI.

1. [File System](#file-system): Where and how Pinokio stores files.
2. [Processor](#processor): How pinokio runs tasks.
3. [Memory](#memory): How pinokio implements a state machine using its built-in native memory.
4. [Script](#script): The programming language that operates pinokio.
5. [UI](#ui): The UI (user interface) through which users access apps.


---

# Install

> 1. [Windows](#windows)
> 2. [Mac](#mac)
> 3. [Linux](#linux)

## Windows

Make sure to follow **ALL steps below!**

#### Step 1. Download

<a class='btn' href='https://github.com/pinokiocomputer/pinokio/releases/download/3.8.0/Pinokio-3.8.0-win32.zip'><i class="fa-brands fa-windows"></i> Download for Windows</a>

#### Step 2. Unzip

Unzip the downloaded file and you will see a .exe installer file.


#### Step 3. Install

Run the installer file and you will be presented with the following Windows warning:

![win_install.gif](win_install.gif)

This message shows up because the app was downloaded from the Web, and this is what Windows does for apps downloaded from the web.

To bypass this,

1. Click **"More Info"**
2. Then click **"Run anyway"**

---

## Mac


#### Step 1. Download

<a class='btn' href='https://github.com/pinokiocomputer/pinokio/releases/download/3.8.0/Pinokio-3.8.0-darwin-arm64.zip'><i class="fa-brands fa-apple"></i> Download for Apple Silicon Mac (M1/M2/M3/M4)</a>&nbsp;&nbsp;<a class='btn' href='https://github.com/pinokiocomputer/pinokio/releases/download/3.8.0/Pinokio-3.8.0-darwin-intel.zip'><i class="fa-brands fa-apple"></i> Download for Intel Mac</a>


#### Step 2. Install (IMPORTANT!!)

![background.gif](background.gif)

The Pinokio Mac installer ships with [Sentinel](https://itsalin.com/appInfo/?id=sentinel) built in. Sentinel lets you run open source apps that are NOT on the Apple App store (which Pinokio is at the moment).

You just need to drag and drop the installed Pinokio.app onto Sentinel to "Remove app from Quarantine".


---

## Linux

For linux, you can download and install directly from the latest release on Github (Scroll down to the bottom of the page for all the binaries):

<a class='btn' href='https://github.com/pinokiocomputer/pinokio/releases/tag/3.8.0'><i class="fa-brands fa-linux"></i> Go to the Releases Page</a>

---

# Community Help

To stay on top of all the new APIs and app integrations,

## X (Twitter)

> Follow [@cocktailpeanut](https://x.com/cocktailpeanut) on X to stay updated on all the new scripts being released and feature updates.

## Discord

> Join the [Pinokio discord](https://discord.gg/TQdNwadtE4) to ask questions and get help.

---

# Quickstart

## Pinokio File System

Pinokio is a self-contained platform that lets you install apps in an isolated manner.

1. **Isolated Environment:** no need to worry about messing up your global system configurations and environments
2. **Batteries Included:** no need to manually install required programs just to install something (such as **ffpeg**, **node.js**, **visual studio**, **conda**, **python**, **pip**, etc.). Pinokio takes care of it automatically.

To achieve this, Pinokio **stores everything under a single isolated folder ("pinokio home")**, so it never has to rely on your system-wide configs and programs but runs everything in a self-contained manner.

You can set the **pinokio home** folder when you first set up Pinokio, as well as later change it to a new location from the **settings** tab.

![settings.png](settings.png)

So where are the files stored?  Click the "Files" button from the home page:

![files.png](files.png)

This will open Pinokio's home folder in your file explorer:

![files_explorer.png](files_explorer.png)

Let's quickly go through what each folder does:

1. `api`: stores all the downloaded apps (scripts).
    - The folders inside this folder are displayed on your Pinokio's home.
2. `bin`: stores globally installed modules shared by multiple apps so you don't need to install them redundantly.
    - For example, `ffmpeg`, `nodejs`, `python`, etc.
3. `cache`: stores all the files automatically cached by apps you run.
    - When something doesn't work, deleting this folder and starting fresh may fix it.
    - It is OK to delete the `cache` folder as it will be re-populated by the apps you use as you start using apps.
4. `drive`: stores all the virtual drives created by the [fs.link](#fslink) Pinokio API
5. `logs`: stores all the log files for each app.

> You can learn more about the file system [here](#file-system)

---

## Hello world

Let's write a script that clones a git repository.

![gitjson.png](gitjson.png)

1. Create a folder named `helloworld` under the Pinokio [api](#folder-structure) folder.
2. Create a file named `git.json` under the the Pinokio `api/helloworld` folder.

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "git clone https://github.com/pinokiocomputer/test"
    }
  }]
}
```

Now when you go back to Pinokio, you will see your `helloworld` repository show up. Navigate into it and click the `git.json` tab to run it:

![gitclone.gif](gitclone.gif)

You will see that an `api/helloworld/test` folder has been cloned from the https://github.com/pinokiocomputer/test repository.

---

## Templates

We can also dynamically change what commmands to run, and how to run them, using templates.

As an example, let's write a script that runs `dir` on windows, and `ls` on linux and mac.

In your `api/helloworld` folder, create a file named `files.json`:


```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "{{platform === 'win32' ? 'dir' : 'ls'}}"
    }
  }]
}
```


1. The `{{ }}` template expression contains a JavaScript expression
2. There are several variables available inside every template expression, and one of them is [platform](#platform).
3. The value of `platform` is either `darwin` (mac), `win32` (windows), or `linux` (linux).

This means, on Windows, the above script is equivalent to:

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "dir"
    }
  }]
}
```

Or if it's not windows (mac or linux), it's equivalent to:

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "ls"
    }
  }]
}
```

> You can learn more about templates [here](#template-interpreter)


---

## Environment Variable Setup

Often, scripts may require certain environment variables to be set in order to run properly.

While the environment variables can be set inside the "Configure" tab, this is still tedious and most users won't know which environment variables need to be filled out.

To solve this problem, a script can EXPLICITLY require the environment variables required to run.

1. If the environment variables are set, it will just use those variables to start automatically without pausing.
2. If the environment variables are NOT yet set, it will NOT start the script, but display a form that needs to be filled out.

To achieve this, you can attach a `pre` array in a script.

```
{
  "pre": [<requirement>, <requirement>, ...]
}
```

Where `<requirement>` is an object that describes the required environment variables:

```
<requirement> := {
  env: <environment_variable_name>,
  title: <title>,
  description: <description>,
  default: <default_value>
}
```

- `<environment_variable_name>`: The name of the environment variable needed to start the script.
- `<title>`: (optional) A simple title for the field
- `<description>`: (optional) description for the field
- `<default>`: (optional) a default value that will be pre-filled when the form is rendered.

For example, let's say our script looks like the following:


```json
{
  "pre": [{
    "title": "custom env",
    "description": "set custom env 1",
    "env": "CUSTOM_ENV"
  }, {
    "title": "custom env 2",
    "description": "set custom env 2",
    "env": "CUSTOM_ENV2"
  }],
  "run": [
    ...
  ]
}
```

There can be 2 scenarios:

1. The environment variables have been previously filled out by the user: The script just starts automatically as usual.
2. The environment variables are NOT yet set: In this case the following form screen will be displayed:

![pre_env.png](pre_env.png)


---

## Run in daemon mode

When a Pinokio script finishes running, every shell session that was spawned through the script gets disposed of, and all the related processes get shut down.

For example, let's try launching a local web server using [http-server](https://github.com/http-party/http-server). Create a new folder named `httpserver` under the Pinokio `api` folder, and create a new script named `index.json`:

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "npx -y http-server"
    }
  }]
}
```

Then go back to Pinokio and you'll see this app show up on the home page. Click through and click the `index.json` tab on the sidebar, and it will start this script, which should launch the web server using `npx http-server`.

But the problem is, right after it launches the server it will immediately shut down and you won't be able to use the web server.

This is because Pinokio automatically shuts down all processes associated with the script when it finishes running all the steps in the `run` array.

To avoid this, you need to tell Pinokio this app should stay up even after all the steps have run. We simply need to add a `daemon` attribute:

```json
{
  "daemon": true,
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "npx -y http-server"
    }
  }]
}
```

Now retry starting the script, and you'll see that the web server starts running and does not shut down.

The web server will serve all the files in the current folder (in this case just `index.json`), like this:

![httpserver.gif](httpserver.gif)

You can stop the script by pressing the "stop" button at the top of the page.


> Learn more about daemon mode [here](#daemon-mode)


---

## Run multiple commands

You can also run multiple commands with one `shell.run` call.

Let's try an example. We are going to install, initialize, and launch a documentation engine in one script.

Things like this used to be not accessible for normal people (since you have to run these things in the terminal), but with Pinokio, it's as easy as one click.

1. Create a folder named `docsify` under the Pinokio `api` folder
2. Create a file named `index.json` under the `api/docsify` folder. The `index.json` file should look like the following:


```json
{
  "daemon": true,
  "run": [{
    "method": "shell.run",
    "params": {
      "message": [
        "npx -y docsify-cli init docs",
        "npx -y docsify-cli serve docs"
      ]
    }
  }]
}
```

This example does 2 things:

1. Initialize a [docsify](https://docsify.js.org/) Documentation project
2. Launch the docsify dev server

When you click the dev server link from the Pinokio terminal, it will open the documentation page in a web browser:

![docsify.gif](docsify.gif)


> Learn more ablut the `shell.run` API [here](#shell)

---


## Install packages into venv

One of the common use cases for Pinokio is to:

1. Create/activate a venv
2. Install dependencies into the activated venv

Let's try a simple example. This example is a minimal gradio app from the [official gradio tutorial](https://www.gradio.app/guides/quickstart#building-your-first-demo)

First, create a folder named `gradio_demo` under Pinokio's `api` folder.

Next, create a file named `app.py` in the `api/gradio_demo` folder.

```python
# app.py
import gradio as gr

def greet(name, intensity):
    return "Hello, " + name + "!" * int(intensity)

demo = gr.Interface(
    fn=greet,
    inputs=["text", "slider"],
    outputs=["text"],
)
demo.launch()
```

We also need a `requirements.txt` file that looks like this:

```
# requirements.txt
gradio
```

Finally, we need an `install.json` script that will install the dependencies from the `requirements.txt` file:

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "venv": "env",
      "message": "pip install -r requirements.txt"
    }
  }]
}
```

The folder structure will look like this:

```
/PINOKIO_HOME
  /api
    /gradio_demo
      app.py
      requirements.txt
      install.json
```

Go back to Pinokio and you'll see the `gradio_demo` app. Click into the UI and click the `install.json` tab, and it will:

1. Create a `venv` folder at path `env`
2. Activate the `env` environment
3. Run `pip install -r requirements.txt`, which will install the `gradio` dependency into the `env` envrionment.

Here's what the installation process looks like (note that a new `env` folder has been created at the end):

![gradio_install.gif](gradio_install.gif)


> Learn more about the venv API [here](#venv)

---

## Run an app in venv

> continued from the [last section](#install-packages-into-venv).

Now let's write a simple script that will launch the gradio server from the `app.py` from the last section. Create a file named `start.json` in the same folder:

```json
{
  "daemon": true,
  "run": [{
    "method": "shell.run",
    "params": {
      "venv": "env",
      "message": "python app.py"
    }
  }]
}
```

Go back to Pinokio and you'll see that the `start.json` file now shows up on the sidebar as well. Click to start the `start.json` script. This will:

1. activate the `env` environment we created from the install step
2. run `python app.py` in **daemon mode** (`daemon: true`), which will launch the gradio server and keep it running.

It will look something like this:

![gradio_start.gif](gradio_start.gif)

> Learn more about the venv API [here](#venv)


---

## Download a file

Pinokio has a cross-platform API for downloading files easily and reliably (including automatic retries, etc.).

Let's try writing a simple script that downloads a PDF.

First create a folder named `download` under the Pinokio `api` folder, and then create a file named `index.json`:

```json
{
  "run": [{
    "method": "fs.download",
    "params": {
      "uri": "https://arxiv.org/pdf/1706.03762.pdf",
      "dir": "pdf"
    }
  }]
}
```

This will download the file at https://arxiv.org/pdf/1706.03762.pdf to a folder named `pdf` (The `fs.download` API automatically creates a folder at the location if it doesn't already exist). Here's what it looks like:

![fsdownload.gif](fsdownload.gif)

> Learn more about the `fs.download` API [here](#fsdownload)

---

## Call a script from another script

In many cases you may want to call a script from another script. Some examples:

1. An orchestration script that spins up `stable diffusion` and then `llama`.
2. An agent that starts `stable diffusion`, and immediately makes a request to generate an image, and finally stops the `stable diffusion` server to save resources, automatically.
3. An agent that makes a request to a `llama` endpoint, and then feeds the response to a `stable diffusion` endpoint.

We can achieve this using the `script` APIs:

- `script.start`: Start a remote script (Download first if it doesn't exist yet)
- `script.return`: If the current script was a child process, specify the return value, which will be made available in the next step of the caller script.


Here's an example. Let's create a simple `caller.json` and `callee.json`:


`caller.json`:

```json
{
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "callee.json",
      "params": { "a": 1, "b": 2 }
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{input}}"
    }
  }]
}
```

First step, the `caller.json` will call `callee.json` with the params `{ "a": 1, "b": 2 }`.

This params object will be passed into the `callee.json` as `args`:

`callee.json`:

```json
{
  "run": [{
    "method": "script.return",
    "params": {
      "ressponse": "{{args.a + args.b}}"
    }
  }]
}
```

The `callee.json` script immediately returns the value `{{args.a + args.b}}` with the `script.return` call.

Finally, the `caller.json` will call the last step `log`, which will print the value `{{input}}`, which is the return value from `callee.json`. This will print `3`:

![localscript.gif](localscript.gif)

---

## Install, start, and stop remote scripts

The last section explained how you can call a script from within the same repository. But what if you want to call scripts from other repositories?

The `script.start` API can also download and run remote scripts on the fly.

Create a folder named `remotescript` under Pinokio `api` folder and create a file named `install.json` under the `api/remotescript`:

```json
{
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "https://github.com/cocktailpeanutlabs/moondream2.git/install.js"
    }
  }, {
    "method": "script.start",
    "params": {
      "uri": "https://github.com/cocktailpeanutlabs/moondream2.git/start.js"
    }
  }, {
    "id": "run",
    "method": "gradio.predict",
    "params": {
      "uri": "{{kernel.script.local('https://github.com/cocktailpeanutlabs/moondream2.git/start.js').url}}",
      "path": "/answer_question_1",
      "params": [
        { "path": "https://media.timeout.com/images/105795964/750/422/image.jpg" },
        "Explain what is going on here"
      ]
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{input}}"
    }
  }, {
    "method": "script.stop",
    "params": {
      "uri": "https://github.com/cocktailpeanutlabs/moondream2.git/start.js"
    }
  }]
}
```

1. The first step starts the script [https://github.com/cocktailpeanutlabs/moondream2.git/install.js](https://github.com/cocktailpeanutlabs/moondream2/blob/main/install.js).
    - If the `moondream2.git` repository already exists on Pinokio, it will run the [install.js](https://github.com/cocktailpeanutlabs/moondream2/blob/main/install.js) script. 
    - If it doesn't already exist, Pinokio automatically clones the `https://github.com/cocktailpeanutlabs/moondream2.git` repository first, and then starts the [install.js](https://github.com/cocktailpeanutlabs/moondream2/blob/main/install.js) script after that.
2. After the install has finished, it then launches the gradio app using the [https://github.com/cocktailpeanutlabs/moondream2.git/start.js](https://github.com/cocktailpeanutlabs/moondream2/blob/main/start.js) script. This script will return after the server has started.
3. Now we run `gradio.predict`, using the [kernel.script.local()](#kernelscriptlocal) API to get the local variable object for the [start.js](https://github.com/cocktailpeanutlabs/moondream2/blob/main/start.js) script, and then getting its `url` value (which is programmatically set inside the `moondream2.git/start.js` script).
    - Basically, this step makes a request to the gradio endpoint to ask the LLM "Explain what is going on here", passing an image.
4. Next, the return value from the `gradio.predict` is logged to the terminal using the `log` API.
5. Finally, we stop the `moondream2/start.js` script to shut down the moondream gradio server using the `script.stop` API.
    - If we don't call the `script.stop`, the moondream2 app will keep running even after this script halts.

Here's what it would look like:

![remotescript.gif](remotescript.gif)


> The ability to run `script.start`, and then `script.stop` is very useful for running AI on personal computers, because most personal computers do not have unbounded memory, and your computer will quickly run out of memory if you cannot shut down these AI engines programmatically.
>
> With `script.stop` you can start a script, get its response, and immediatley shut it down once the task has finished, which will free up the system memory, which you can use for running other subsequent AI tasks.

---

## Build UI with pinokio.js

Pinokio apps have a simple structure:

1. [shortcut](#shortcut): The app shortcut that shows up on Pinokio home.
2. [app](#app): The main UI layout for the app


`Shortcut`

![shortcut.png](shortcut.png)

`App`

- **Menu:** The sidebar that displays all the links you can run (as well as their running status)
- **Window:** The viewport that displays a **web page**, or **a terminal** that runs the scripts

![main.gif](main.gif)


By default if you do not have a `pinokio.js` file in your project,

- the **shortcut** displays the folder name as the title, and a default icon as the app's icon.
- the **menu** displays all `.js` or `.json` files in your repository root.

While this is convenient for getting started, it's not flexible enough:

1. You can't control what gets displayed in the menu bar
2. You can't control how the scripts are launched (by passing `params` for example)
3. You can't control how the app is displayed
    - The title of the app will be your folder name
    - There is no description
    - The icon will just show a default icon.

To customize how your app itself behaves, you will want to write a UI script named `pinokio.js`. 

Let's try writing a minimal UI:

1. Create a folder named `downloader` in the `/PINOKIO_HOME/api` folder
2. Add any icon to the `/PINOKIO_HOME/api/downloader` folder and name it `icon.png`
3. Create a file named `/PINOKIO_HOME/api/downloader/download.json`
4. Create a file named `/PINOKIO_HOME/api/downloader/pinokio.js`

**/PINOKIO_HOME/api/downloader/icon.png**

![doraemon.png](doraemon.png)


**/PINOKIO_HOME/api/downloader/download.json**

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "git clone {{input.url}}"
    }
  }]
}
```

**/PINOKIO_HOME/api/downloader/pinokio.js**

```js
module.exports = {
  title: "Download Anything",
  description: "Download a git repository",
  icon: "icon.png",
  menu: [{
    text: "Start",
    href: "download.json",
    params: {
      url: "https://github.com/cocktailpeanut/dalai"
    }
  }]
}
```

The end result will look like this in your file explorer:

![downloader.png](downloader.png)

Now go back to Pinokio and refresh, and you will see your app show up:

![custom_ui_preview.png](custom_ui_preview.png)

- the title displays `Download Anything`
- the description displays `Download a git repository`
- the icon is the `icon.png` we've added

Now when you click into the app, you will see the following:

![custom_ui.gif](custom_ui.gif)

1. You will see the menu item `Start`.
2. Click this to run the `download.json` which is specified by the `href` attribute.
3. Also note that the script is passing the value of https://github.com/cocktailpeanut/dalai as the `params.url` value.
4. The `params` passed to the `download.json` is made available as the `input` variable, so the `git clone {{input.url}}` will be instantiated as `git clone https://github.com/cocktailpeanut/dalai`.


---

## Publish your script

Once you have a working script repository, you can publish to any git hosting service and share the URL, and anyone will be able to install and run your script.

---


## Install script from any git url

You can install any pinokio script repository very easily:

1. Click the "Download from URL" button at the top of the Discover page.
2. Enter the git URL (You can optionally specify the branch as well).

![download_git.gif](download_git.gif)

---

## List your script on the directory

If you published to github, you can tag your repository with "pinokio" to make it show up in the "latest" section of the Discover page. 

![tagging.gif](tagging.gif)

Now it will automatically show up on the "latest" section (at the bottom of the "Discover" page):

![latest.png](latest.png)

> Pinokio constructs the "Latest" section automatically from GitHub "/repositories" API at https://api.github.com/search/repositories?q=topic:pinokio&sort=updated&direction=desc
>
> So if you tagged your repository as "pinokio" but doesn't show up, check in the API result, and try to figure out why it's not included in there.

---

## Auto-generate app launchers

While it is important to understand how all this works, in most cases you may want a simple "launcher combo", which includes:

1. **App install script:** Installs the app dependencies
2. **App Launch script:** Starts the app
3. **UI:** Displays the launcher UI.
4. **Reset script:** Resets the app state when something goes wrong.
5. **Update script:** Updates the app to the latest version with 1 click.

This use case is needed so often, that we've implemented a program that automatically generates these scripts instantly. It's called [Gepeto](#gepeto).


---

## Adding posts to the Newsfeed

Often you may want to share more info about each script. You can use the newsfeed for that.

![pinokio_meta.gif](pinokio_meta.gif)

To do this, simply create a `pinokio_meta.json` file, with a `posts` array attribute, where each item is an x.com URL. Here's an example:


```json
{
  "posts": [
    "https://x.com/cocktailpeanut/status/1819482952071323788",
    "https://x.com/cocktailpeanut/status/1819439443394109837",
    "https://x.com/cocktailpeanut/status/1800944955738685648",
    "https://x.com/cocktailpeanut/status/1754244867159413001",
    "https://x.com/cocktailpeanut/status/1729884460114727197",
    "https://x.com/cocktailpeanut/status/1728075614807048208"
  ]
}
```

You can see it in action: https://github.com/pinokiofactory/wan/blob/main/pinokio_meta.json

Once you publish, this will be immediately reflected on the script landing page.

---

# Gepeto

<div class='videoWrapper'>
  <iframe width="1280" height="720" src="https://www.youtube.com/embed/D8jdowszkMg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br>

[Gepeto](https://gepeto.pinokio.computer) is a program that lets you **automatically generate Pinokio scripts, specifically for app launchers.**

Let's start by actually generating an app and its launcher in 1 minute.

## Gepeto Quickstart


<div class='videoWrapper'>
  <iframe width="1280" height="720" src="https://www.youtube.com/embed/I-_W-MkV8tc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br>


#### 1. Install Gepeto on Pinokio

If you don't have gepeto installed already, find it on Pinokio and install first.

![gepeto_install.gif](gepeto_install.gif)

#### 2. Generate Scripts with Gepeto

You will see a simple web UI that lets you fill out a form. For simplicity, just enter `Helloworld` as the project name, and press **submit**.

![gepeto_generate.gif](gepeto_generate.gif)

This will initialize a project. When you go back to Pinokio home, 

1. You will see a new entry named `Helloworld`. Click into it and you'll see the launcher screen.
2. Also, check your `/PINOKIO_HOME/api` folder, you will find a new folder named `Helloworld` with some script files.

#### 3. Install and Start the App

Now let's click the **install** button to install the app, and when it's over, click **start** to launch.

![gepeto_launch.gif](gepeto_launch.gif)

You will see a minimal [gradio](https://www.gradio.app/) app, where you can enter a prompt and it will generate an image using [Stable Diffusion XL Turbo](https://stability.ai/news/stability-ai-sdxl-turbo).

So what just happened? We've just **created an empty project**, which comes with a minimal demo app.

Let's take a look at each generated file in the next section.

---

## Creating an empty project

Gepeto automatically generates a minimal set of scripts required for an app launcher. A typical app launcher has the following features:

1. **Install:** Install the dependencies required to run the app. (`install.js`)
2. **Launch:** Launch the app itself. (`start.js`)
3. **Reset install:** Reset all the installed dependencies in case you need to reinstall fresh. (`reset.js`)
4. **Update:** Update to the latest version when the project gets updated. (`update.js`)
5. **GUI:** The script that describes what the launcher will look like and behave on Pinokio home and as a sidebar menu. (`pinokio.js`)

Here's what it looks like:

![type2.png](type2.png)

Note that in addition to the scripts mentioned above, gepeto has generated some extra files:

- `app.py`: A simple demo app. **Replace this with your own code.**
- `requirements.txt`: declares all the required PIP dependencies for `app.py`. **Replace with your own.**
- `icon.png`: A default icon file for the app. **Replace with your own.**
- `torch.js`: The `torch.js` is a utility script that gets called from `install.js`. Since torch is used in almost all AI projects, and it's quite tricky to install them in a cross-platform manner, this script is included by default. You don't have to worry about this file, just understand that it's used by `install.js`. **Do not touch.**


The notable files to look at are `app.py` and `requirements.txt` files:

##### app.py

```python
import gradio as gr
import torch
from diffusers import DiffusionPipeline
import devicetorch
# Get the current device ("mps", "cuda", or "cpu")
device = devicetorch.get(torch)
# Create a diffusion pipeline
pipe = DiffusionPipeline.from_pretrained("stabilityai/sdxl-turbo").to(device)
# Run inference
def generate_image(prompt):
    return pipe(
      prompt,
      num_inference_steps=2,
      strength=0.5,
      guidance_scale=0.0
    ).images[0]
# Create a text input + image output UI with Gradio
app = gr.Interface(fn=generate_image, inputs="text", outputs="image")
app.launch()
```

##### requirements.txt

The below are the libraries required to run `app.py`.

```
transformers
accelerate
diffusers
gradio
devicetorch
```

So how are these files actually used?

##### install.js

If you look inside `install.js`, you will see that it's running `pip install -r requirements.txt` to install the dependencies inside the file, like this:

```javascript
module.exports = {
  run: [
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        message: [
          "pip install -r requirements.txt"
        ],
      }
    },
    //  Uncomment this step to add automatic venv deduplication (Experimental)
    //  {
    //    method: "fs.link",
    //    params: {
    //      venv: "env"
    //    }
    //  },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
```

1. The first step runs `script.start` to call a script named `torch.js`. This installs torch.
2. The second step runs `pip install -r requirements.txt` file to install everything in that file.


##### start.js

And if you look inside `start.js`, you will see that it's running `python app.py` to start the app:

```javascript
module.exports = {
  daemon: true,
  run: [
    // Edit this step to customize your app's launch command
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        env: { },                   // Edit this to customize environment variables (see documentation)
        message: [
          "python app.py",    // Edit with your custom commands
        ],
        on: [{
          // The regular expression pattern to monitor.
          // When this pattern occurs in the shell terminal, the shell will return,
          // and the script will go onto the next step.
          "event": "/http:\/\/\\S+/",

          // "done": true will move to the next step while keeping the shell alive.
          // "kill": true will move to the next step after killing the shell.
          "done": true
        }]
      }
    },
    // This step sets the local variable 'url'.
    // This local variable will be used in pinokio.js to display the "Open WebUI" tab when the value is set.
    {
      method: "local.set",
      params: {
        // the input.event is the regular expression match object from the previous step
        url: "{{input.event[0]}}"
      }
    },
//    Uncomment this step to enable local wifi sharing (access the app from devices on the same network)
//    {
//      method: "proxy.start",
//      params: {
//        uri: "{{local.url}}",
//        name: "Local Sharing"
//      }
//    }
  ]
}
```

1. The first step starts a shell (`shell.run`), activates a venv environment at `env` path, and runs the command `python app.py`. It then monitors the shell terminal for any regular expression matching the pattern `/http:\/\/[0-9.:]+/`, and goes to the next step (without terminating the shell).
2. The next step sets the local variable `url` as using the regular expression match from the previous step.

And that's all there is to it!

---

## Customizing the empty project

Just to make sure we get the point across, let's try modifying the auto-generated code to customize the app:


Open the `app.py` and just replace it with something even simpler:

```python
import gradio as gr
def square(num):
    return num * num
app = gr.Interface(fn=square, inputs="number", outputs="number")
app.launch()
```

Also you can get rid of everything but `gradio` in the `requirements.txt` file:

```
gradio
```

Now restart the app. It's an app that takes a number and displays its square value:

![gepeto_customize.gif](gepeto_customize.gif)

---

## Creating a launcher for an existing project

So far we've seen "how to start from scratch". But **what if you want to take an EXISTING project and simply write a launcher for it**? For example:

1. Write a local launcher for ComfyUI
2. Write a local launcher for FaceFusion
3. Write a local launcher for HuggingFace Spaces
4. so on.

In this case, you just need to enter the **git repository URL** of the project you're trying to install, when you first run gepeto.

![gepeto_web.png](gepeto_web.png)

As an example, **let's build a launcher for [Devika](https://github.com/stitionai/devika), an AI agent application**.

1. Enter `devika-launcher` in the **Project Name** field.
2. Enter `https://raw.githubusercontent.com/stitionai/devika/main/.assets/devika-avatar.png` in the **Icon URL** field.
3. Enter `https://github.com/stitionai/devika` in the **Git URL** field.

and press **Submit**. Gepeto will generate the launcher. Go to Pinokio home, you'll find the generated launcher:

![devika-home.png](devika-home.png)

Click into it and click the **Files** tab to view the generated folder:

![devika-view.gif](devika-view.gif)

The generated folder looks like this:

![devika-launcher.png](devika-launcher.png)

> Note that there are no `app.py` and `requirements.txt` files. Since we entered a git URL, Gepeto assumes that the actual app logic will be in that repository and therefore doesn't generate these two files in this case.

##### install.js

Let's take a look at `install.js`. This is the default script gepeto has generated:

```javascript
module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/stitionai/devika app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip install gradio devicetorch",
          "pip install -r requirements.txt"
        ]
      }
    },
    //  Uncomment this step to add automatic venv deduplication (Experimental)
    //  {
    //    method: "fs.link",
    //    params: {
    //      venv: "env"
    //    }
    //  },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
```

This is the default install script generated by Gepeto.

1. Run `git clone https://github.com/stitionai/devika app` to download the git repository to `app` folder.
2. Call `torch.js` script, which automatically installs the correct version of Pytorch for the current system.
3. Run `pip install gradio devicetorch` and then `pip install -r requirements.txt`, to install dependencies.

This script assumes that the installation for this Devika project is done by running `pip install -r requirements.txt`. Normally this works in many cases, but often you have to do some more. Let's take a look at Devika README.md:

![devika-install.png](devika-install.png)

Looks like we need to do some more:

1. In addition to `pip install -r requirements.txt` we also need to install **Playwright**.
2. Also we need to install the NPM dependencies with `bun install`.

Let's edit the `install.js` to reflect this:

```js
module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/stitionai/devika app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "pip install gradio devicetorch",
          "pip install -r requirements.txt",
          "playwright install --with-deps"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/ui",
        message: "npm install"
      }
    },
    //  Uncomment this step to add automatic venv deduplication (Experimental)
    //  {
    //    method: "fs.link",
    //    params: {
    //      venv: "env"
    //    }
    //  },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
``` 

1. Just notice the third step: we've added the additional command `playwright install --with-deps`
2. Additionally, the fourth step has been added, where we run `npm install` (We use `npm install` instead of the proposed `bun install` since it's effectively the same and NPM is included in Pinokio by default)

##### start.js

Now, what about actually launching the app? The `start.js` script takes care of this. Let's take a look at the generated file:

```js
module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        env: { },                   // Edit this to customize environment variables (see documentation)
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "python app.py",    // Edit with your custom commands
        ],
        on: [{
          // The regular expression pattern to monitor.
          // When this pattern occurs in the shell terminal, the shell will return,
          // and the script will go onto the next step.
          "event": "/http:\/\/\\S+/",

          // "done": true will move to the next step while keeping the shell alive.
          // "kill": true will move to the next step after killing the shell.
          "done": true
        }]
      }
    },
    {
      // This step sets the local variable 'url'.
      // This local variable will be used in pinokio.js to display the "Open WebUI" tab when the value is set.
      method: "local.set",
      params: {
        // the input.event is the regular expression match object from the previous step
        url: "{{input.event[0]}}"
      }
    },
  ]
}
```

The generated script runs the default command `python app.py`. But again, we need to make some changes to the commands. Let's take a look at the `README.md` file https://github.com/stitionai/devika?tab=readme-ov-file#installation:

![devikia-launch.png](devika-launch.png)

1. We need to run `python devika.py` for the backend
2. We need to then run `bun run start` for the frontend (or `npm run start`)

Here's what the updated `start.js` script looks like:

```js
module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        env: { },                   // Edit this to customize environment variables (see documentation)
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "python devika.py",
        ],
        on: [{
          "event": "/Devika is up and running/i",   // wait until the terminal prints this message
          "done": true
        }]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/ui",
        message: "npm run start",
        on: [{ "event": "/http:\/\/\\S+/", "done": true }]
      }
    },
    {
      // This step sets the local variable 'url'.
      // This local variable will be used in pinokio.js to display the "Open WebUI" tab when the value is set.
      method: "local.set",
      params: {
        // the input.event is the regular expression match object from the previous step
        url: "{{input.event[0]}}"
      }
    },
  ]
}
```

Here are the changes:

1. instead of `python app.py`, now we have the `python devika.py` command.
2. The `python devika.py` command waits until the terminal encounters the regulare expression pattern `/Devika is up and running/i`. This ensures that it doesn't move onto the next step until the server has fully started.
3. Also, we have a new step that runs `npm run start`
4. The `npm run start` waits until the terminal encounters the pattern `/http:\/\/\\S+/`. This takes advantage of the fact that the app prints the endpoint URL at the end of the launch.

After we've updated both the `install.js` and `start.js` files, let's go back to Pinokio and try installing and starting:

![devika_launch.gif](devika_launch.gif)

---

## Adding cross platform support

Often we encounter projects that DO NOT support cross platform out of the box. (For example only support CUDA--Nvidia GPUs--and not Macs).

> Normally you can find out very quickly whether an app supports cross platform, simply by searching for **cuda** in the app code.
>
> If there's any part of the code that hardcodes **"cuda"** as a device, that means it only works for CUDA.
>
> We can fix this by simply finding all these occurrences and replace the hardcoded **"cuda"** with the correct device value for the user's platform.

Let's walk through the process step by step:

1. Create a copy of the original project (so you can edit the code).
2. Update the app code to support cross platform
3. Use this copy repository (instead of the original project) when running gepeto.

### 1. Create a copy

Most open source AI projects are hosted on [GitHub](https://github.com) or [HuggingFace](https://huggingface.co).

Before you make changes to the code, you need to create your own copy fork the original project to create your own version.

#### HuggingFace Spaces

On HuggingFace Spaces, you need to **duplicate the space**. Make sure to set it to **public**.

![hf_duplicate.gif](hf_duplicate.gif)


#### GitHub

On GitHub, you need to **fork a repository**.

![gh_fork.gif](gh_fork.gif)

### 2. Clone the repository to your machine

Now that you have your own copy, you can clone the git repository to your local machine to start editing the code.

Let's say your repository is https://huggingface.co/spaces/cocktailpeanut/cosxl

You can clone it from terminal using:

```
git lfs install
git clone https://huggingface.co/spaces/cocktailpeanut/cosxl
```

The `git lfs install` is for allowing large files, which happens often when the repository contains large files.

Now you are ready to edit the files to add cross platform support.

### 3. Add device support for Torch

Many projects only support CUDA devices (Nvidia GPU). To make sure apps support non-CUDA devices, we need to:

1. Find all occurrences of `"cuda"` in the app code (for example `app.py`)
2. Replace all those occurrences with a variable named `device`
3. Make sure the `device` variable is correctly set

Let's take a look at an example:

```python
# app.py
import torch
...
pipe_edit = CosStableDiffusionXLInstructPix2PixPipeline.from_single_file(edit_file, num_in_channels=8)
pipe_edit.scheduler = EDMEulerScheduler(sigma_min=0.002, sigma_max=120.0, sigma_data=1.0, prediction_type="v_prediction")
pipe_edit.to("cuda")

pipe_normal = StableDiffusionXLPipeline.from_single_file(normal_file, torch_dtype=torch.float16)
pipe_normal.scheduler = EDMEulerScheduler(sigma_min=0.002, sigma_max=120.0, sigma_data=1.0, prediction_type="v_prediction")
pipe_normal.to("cuda")
```

This python code has `"cuda"` hardcoded in two places:

- `pipe_edit.to("cuda")`
- `pipe_normal.to("cuda")`

In this case we need to replace these `"cuda"` strings with the user's actual device.

We can do this by using a minimal library called `devicetorch`.

First add a line in `requirements.txt` to include `devicetorch`:

```
# requirements.txt
devicetorch
```

Next, import `devicetorch` and call `devicetorch.get(torch)` to get the actual device name:

```python
# app.py
import torch
import devicetorch
...

# Dynamically get the current device name: will return either "cuda", "mps", or "cpu".
device = devicetorch.get(torch)

pipe_edit = CosStableDiffusionXLInstructPix2PixPipeline.from_single_file(edit_file, num_in_channels=8)
pipe_edit.scheduler = EDMEulerScheduler(sigma_min=0.002, sigma_max=120.0, sigma_data=1.0, prediction_type="v_prediction")
pipe_edit.to(device)

pipe_normal = StableDiffusionXLPipeline.from_single_file(normal_file, torch_dtype=torch.float16)
pipe_normal.scheduler = EDMEulerScheduler(sigma_min=0.002, sigma_max=120.0, sigma_data=1.0, prediction_type="v_prediction")
pipe_normal.to(device)
```

There are some cases where it's much more complicated and this method doesn't work (In these cases I recommend asking the original project author to officially support MPS).

But in most cases, above approach is enough to add cross platform support for any AI app.

### 4. More torch handling


Often when you do the `"cuda"` check (as mentioned above), you will ALSO account cuda specific code snippets like this:

```python
torch.cuda.empty_cache()
```

Again, this code assumes that it will only run on CUDA devices, and it will FAIL if you run the code on an MPS (Mac) device. 

The `devicetorch` library also has a utility method named `devicetorch.empty_cache(torch)` to take care of this. Just comment out the existing code and replace it with devicetorch.empty_cache(torch)

```python
#torch.cuda.empty_cache()
devicetorch.empty_cache(torch)
```

This will automatically run:

- `torch.cuda.empty_cache()` if the device is CUDA.
- `torch.mps.empty_cache()` if the device is MPS.

### 4. Run gepeto

Now push the updates back to your copy repository. We will be using THIS repository to install the app (not the original repository).

When you run gepeto, you'll see the **Git URL** field:

![gepeto_web.png](gepeto_web.png)

Enter YOUR repository url, and press "Submit". That's all! Try installing with the generated script!

---

## Downloading files with script


Sometimes, the project will tell you you need to download certain files and place them inside certain folder paths.

For example, it may say:

> Download `https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors` to `models/checkpoints`
> 
> Download `https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors` to `models/checkpoints`

We can actually use the built-in [fs.download](#fsdownaload) API to download these files:


```json
{
  "run": [{
    ...
  }, {
    "method": "fs.download",
    "params": {
      "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors",
      "dir": "app/models/checkpoints"
    }
  }, {
    "method": "fs.download",
    "params": {
      "url": "https://huggingface.co/stabilityai/stable-diffusion-xl-refiner-1.0/resolve/main/sd_xl_refiner_1.0.safetensors",
      "dir": "app/models/checkpoints"
    }
  }]
}
```

This will download the files into those directories.

If the folder doesn't exist, it will create the folders first automatically.


---

## Porting huggingface spaces to local

1. Create a copy
2. Use the `app.py` and `requirements.txt` files
3. Remove the spaces

Sometimes an app may have some additional changes.

1. **Huggingface spaces:** When trying to make a localized version of a Huggingface space that utilizes [Zero GPU](https://huggingface.co/zero-gpu-explorers), you will need to comment out the `@spaces.GPU` declarations.
2. **Environment variables:** When the code makes use of environment variables (Search for `os.environ.get(...)`, this means the app is expecting an environment variable.

### 1. Handling Huggingface Space

Some huggingface spaces make use of a feature called [Zero GPU](https://huggingface.co/zero-gpu-explorers), which dynamically assigns GPU to each app based on demand.

These are Huggingface-specific feature, and is not required when running locally. Here's an example usage:

```python
import spaces
from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained(...)
pipe.to('cuda')

@spaces.GPU
def generate(prompt):
    return pipe(prompt).images

gr.Interface(fn=generate, inputs=gr.Text(), outputs=gr.Gallery()).launch()
```

Because we don't use the `spaces` feature, we can **comment out these spaces related lines**:

- `import spaces`
- `@spaces.GPU`

The result:

```python
#import spaces
from diffusers import DiffusionPipeline

pipe = DiffusionPipeline.from_pretrained(...)
pipe.to('cuda')

#@spaces.GPU
def generate(prompt):
    return pipe(prompt).images

gr.Interface(fn=generate, inputs=gr.Text(), outputs=gr.Gallery()).launch()
```


### 2. Environment Variables

Sometimes the code may be looking for system environment variables. To find out if this is the case, search for: `os.environment.get`.

For example, let's say the code has:

```python
# app.py
mps_fallback = os.environ.get("PYTORCH_ENABLE_MPS_FALLBACK")
```

You can pass in the `PYTORCH_ENABLE_MPS_FALLBACK` environment variable by setting the `env` object when launching `app.py`, like this:

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "python app.py",
      "env": {
        "PYTORCH_ENABLE_MPS_FALLBACK": "1"
      }
    }
  }]
}
```





---

# Guides

This section will explain some frequently used techniques for writing scripts.

## Install Torch

A lot of AI projects rely on [PyTorch](https://pytorch.org/). However, installing PyTorch is a bit tricky. Let's take a look at an example.

### Problem

Let's imagine a project with the following folder structure (a typical [huggingface gradio space](https://huggingface.co/spaces) is structured this way):

```
app.py
requirements.txt
install.js
```

- `app.py`: The actual app file
- `requirements.txt`: A file that includes all the dependency declarations, which can be installed with `pip install -r requirements.txt`
- `install.js`: a Pinokio script for installing the project

The `requirements.txt` may look something like this:

```
diffusers
accelerate
torch
transformers
gradio
```

A naive way to write an install script `install.js` would be something like this:

```javascript
module.exports = {
  "run": [{
    "method": "shell.run",
    "params": {
      "venv": "env",
      "message": "pip install -r requirements.txt"
    }
  }]
}
```

However this won't work for many cases, because with PyTorch, **every OS/GPU combination has its own unique install command**, as can be seen on the [Official PyTorch Website](https://pytorch.org/get-started/locally/) (See the bottom line **"Run this Command:"**):

![torch.gif](torch.gif)


### Solution

To solve this problem and port AI projects to run locally and cross-platform, we need to:

1. Update ignore the generic `torch`, `torchvision`, and `torchaudio` declarations inside `requirements.txt`.
2. Update the `install.json` so it installs correct versions of Torch.

#### 1. Update requirements.txt

First, let's comment out any occurrence of `torch`, `torchvision`, and `torchaudio`, since we will write a custom installer for these:

```
diffusers
accelerate
#torch        <= commented out, will be ignored.
transformers
gradio
```

Here's an actual example: https://huggingface.co/spaces/cocktailpeanut/SPRIGHT-T2I/blob/main/requirements.txt

#### 2. Update the install script

Let's update the `install.js` to add all possible combintations of torch install commands:

```javascript
module.exports = {
  "run": [
    // Torch for windows nvidia
    {
      "when": "{{platform === 'win32' && gpu === 'nvidia'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio  --index-url https://download.pytorch.org/whl/cu121"
      }
    },
    // Torch for windows amd
    {
      "when": "{{platform === 'win32' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch-directml"
      }
    },
    // Torch for windows cpu
    {
      "when": "{{platform === 'win32' && (gpu !== 'nvidia' && gpu !== 'amd')}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio"
      }
    },
    // Torch for mac
    {
      "when": "{{platform === 'darwin'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cpu"
      }
    },
    // Torch for linux nvidia
    {
      "when": "{{platform === 'linux' && gpu === 'nvidia'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio"
      }
    },
    // Torch for linux rocm (amd)
    {
      "when": "{{platform === 'linux' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm5.7"
      }
    },
    // Torch for linux cpu
    {
      "when": "{{platform === 'linux' && (gpu !== 'amd' && gpu !=='amd')}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu"
      }
    },
    // Install requirements.txt
    {
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install -r requirements.txt"
      }
    }
  ]
}
```

1. This will walk through the `run` array and check the `when` clauses, and only execute the commands when the conditions are met. 
2. Then in the last step, it will run the original `pip install -r requirements.txt`


## Install Torch and Xformers

[Xformers](https://github.com/facebookresearch/xformers) is another library that is frequently used in AI projects, but only for CUDA (NVIDIA GPUs).

Whenever you come across a project that includes `xformers` as a dependency, you will need to do the same thing you did for `torch`:

1. comment out the `xformers` line from the `requirements.txt`
2. add a custom handling logic for `xformers` into the install script, so it only gets installed when the app is running on `nvidia` GPU.

For example, an udpated `requirements.txt` file may look like this:

```
diffusers
accelerate
#torch        <= commented out, will be ignored.
#xformers     <= commented out, will be ignored.
transformers
gradio
```

Additionally, we update the install script so it correctly handles `xformers` when the GPU is nvidia:

1. check if the gpu is `nvidia`.
2. and if so, add the `xformers` to the `pip install` command.

```javascript
module.exports = {
  "run": [
    // Torch for windows nvidia
    {
      "when": "{{platform === 'win32' && gpu === 'nvidia'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio xformers --index-url https://download.pytorch.org/whl/cu121"
      }
    },
    // Torch for windows amd
    {
      "when": "{{platform === 'win32' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch-directml"
      }
    },
    // Torch for windows cpu
    {
      "when": "{{platform === 'win32' && (gpu !== 'nvidia' && gpu !== 'amd')}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio"
      }
    },
    // Torch for mac
    {
      "when": "{{platform === 'darwin'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cpu"
      }
    },
    // Torch for linux nvidia
    {
      "when": "{{platform === 'linux' && gpu === 'nvidia'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio xformers"
      }
    },
    // Torch for linux rocm (amd)
    {
      "when": "{{platform === 'linux' && gpu === 'amd'}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm5.7"
      }
    },
    // Torch for linux cpu
    {
      "when": "{{platform === 'linux' && (gpu !== 'amd' && gpu !=='amd')}}",
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu"
      }
    },
    // Install requirements.txt
    {
      "method": "shell.run",
      "params": {
        "venv": "env",
        "message": "pip install -r requirements.txt"
      }
    }
  ]
}
```

The only lines that have been changed are:

- **Torch for windows nvidia:**  `"pip install torch torchvision torchaudio xformers --index-url https://download.pytorch.org/whl/cu121"`
- **Torch for linux nvidia:** `"pip install torch torchvision torchaudio xformers"`

## Build an App Launcher Instantly

Pinokio script can be used to do all kinds of things (run shell commands, make network requests, write to files, etc.), but sometimes we want a dead simple way to auto-generate some scripts to install and run some apps.

For this specific--but very frequent--use case, we have a program called [gepeto](https://gepeto.pinokio.computer), which automatically generates a set of scripts commonly used for installing, running, and managing apps.

If building an app launcher is your goal, we recommend you start from using Gepeto.

---

# File System

<img src="fs.png" class='fixed'>


## Home directory

Pinokio stores everything inside a centralized location (**Pinokio Home Directory**). This means you can:

1. Remove apps simply by deleting folders (No messy sysetm-wide installed files and DLLs)
2. Back up either the entire workspace or individual apps simiply by backing up folders.


![home.png](home.png)

When you first install Pinokio, you will be asked to set the **home** folder path.

You can also update it later in the settings tab.

---

## Self-contained File System

The top level folders under the Pinokio home directory look like the following

> We'll use the `/PINOKIO_HOME` notation to refer to the pinokio home directory from this point.
>
> The `/PINOKIO_HOME` folder is whichever folder you set as your Pinokio home.

```
/PINOKIO_HOME
  /api
    /stable-diffusion-webui.git
    /comfyui.git
    /brushnet.git
    ...
  /bin
    /miniconda
    /homebrew
    /py
  /drive
    /drives
      /peers
        ...
      /pip
  /cache
  /logs
```



### /api

The `api` folder is where the downloaded app repositories are stored. An API folder can contain either of the following:

1. **downloaded from git:** repositories you downloaded from git.
2. **locally created:** you can manually create folders and work from there.


### /bin

The `bin` folder stores all the binaries commonly used by AI engines.

- **miniconda:** for conda environment
- **brew:** for dealing with homebrew on macs
- **python** (and `pip`)
- **node.js** (and `npm`)
- etc.

Things installed into the `/bin` folder can be shared across multiple apps in the `/api` folder.

### /drive

The `drive` folder stores virtual drives, used for deduplicating redundant files to save the disk space, sharing data across multiple apps, and overall separating data from application for many useful scenarios.

> Learn more about virtual drives [here](#virtual-drive)

### /cache

The `cache` folder stores cache files programmatically downloaded or generated by apps (through `pip`, `torch`, `huggingface-cli`, etc.)

### /logs

The `logs` folder contains the logs, essential for debugging when something doesn't work.

---

## Distributed File URI

Pinokio uses a unique **distributed URI system** that lets you:

- Reference **local files**
- With **universally unique identifiers**

Let's first take a look at the most obvious option--Relative file paths.

### Relative Path

A URI can be a relative path. The path is resolved relative to the currently running script.

Let's say we have a folder at `/PINOKIO_HOME/api/myapp`, which looks like this:

```
/myapp
  start.js
  subroutine.json
```

And here's what `start.js` looks like:

```json
// start.js
module.exports = {
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "subroutine.json"
    }
  }]
}
```

In this example, the `start.js` script calls another script named `subroutine.json`. This is a relative path.

The Pinokio interpreter automatically resolves the path of `subroutine.json` as the same folder that contains `start.js`, which is `/PINOKIO_HOME/api/myapp`.

So the `script.start` call will look for the file `/PINOKIO_HOME/api/myapp/subroutine.json` and run that script.


### Git Path

The relative path is enough for most cases, but what if the script you want to run is NOT from the same repository? What if you want to download a remote repository and run some script inside it?

This is where the Git URI scheme comes in.

#### Specification

This goal is achieved by adopting the [git url protocol](https://www.git-scm.com/docs/http-protocol#_url_format).


```
<REMOTE_GIT_URI>/<RELATIVE_PATH_WITHIN_THE_REPOSITORY>
```

For example, to reference a file at `install.js` inside the https://github.com/cocktailpeanutlabs/comfyui.git git repository, the HTTP path would look like:

https://github.com/cocktailpeanutlabs/comfyui.git/install.js

Some rules:

1. The `<REMOTE_GIT_URI>` must end with `.git` (This is the standard way to reference git repositories)
2. The URL info is derived from the `.git/config` file within the downloaded repository.
    - This means a local repository without `.git/config` won't have a publicly addresable URI. You will need to publish it somewhere before you can use the universal git uri.


#### Content Addressable

In addition to being able to reference filenames, you can also reference files within a specific version, such as:

1. a file path in a specific commit hash
2. a file path in a specific branch

```json
// commit hash uri
{
  "method": "script.start",
  "params": {
    "uri": "https://github.com/facefusion/facefusion-pinokio.git/install.js",
    "hash": "ced4e76aa2a7c60a08535af8c340efea153ec381"
  }
}

// git branch uri
{
  "method": "script.start",
  "params": {
    "uri": "https://github.com/facefusion/facefusion-pinokio.git/install.js",
    "branch": "master"
  }
}
```

Above scripts will:

1. check whether the repository is locally installed
2. if not, `git clone` the repository `https://github.com/facefusion/facefusion-pinokio.git`
3. switch to the **commit hash** (`ced4e76aa2a7c60a08535af8c340efea153ec381`) or the **branch** (`master`)
4. resolve the locally downloaded file path `install.js` from the auto-downloaded git repository
5. and run it

---

## Virtual Drive

### Introduction

Virtual drives let you store data outside of applications while making them behave as if they are inside, by utilizing symbolic links.

![virtualdrive.png](virtualdrive.png)

This is useful for various cases such as:

1. Storing files that persist across multiple installs (Similar to Docker Volumes)
2. Sharing files across multiple apps (for example, ComfyUI, Fooocus, and Stable-Diffusion-WebUI sharing `.safetensor` AI model files among them so you don't have to download redundant files for each app)
3. Storing all the library files (such as pytorch) in a deduplicated manner, which saves a lot of disk space.

### Use Cases

1. **Persistence:** Because Drives exist independently, they stay around even if you delete the apps or update them. If you want to store large AI model files for some apps, and want the models to persist even when you delete or update the app, this is very useful.
2. **Shareable:** Virtual drives can also specify **peers**, which lets multiple apps share a single virtual drive. When you specify a `peer` array, the `fs.link` API will look for any pre-existing peer drive before creating a new dedicated drive. If a peer drive exists, the `fs.link` will simply link to the discovered drive path instead of creating a new one.
3. **Save Disk Space:** The primary purpose of the virtual drive is to avoid duplicate files as much as possible, which **significantly saves disk space**. In many cases, it can save tens of gigabytes **per application**.

### How it works

#### 1. Symbolic Link

Virtual drives are internally implemented with [symbolic links](https://en.wikipedia.org/wiki/Symbolic_link#:~:text=In%20computing%2C%20a%20symbolic%20link,FreeBSD%2C%20Linux%2C%20and%20macOS.) on Linux/Mac, and [junctions](https://learn.microsoft.com/en-us/sysinternals/downloads/junction) on Windows.

When you create a set of virtual drives using the `fs.link` API, here's what happens:

1. Create a set of virtual drive folders under the `/PINOKIO_HOME/drive` folder.
2. Create symbolic links from the specified app folders to the newly created virtual drive folders (which exist OUTSIDE of the app repository)
3. Thanks to the symbolic links, when you reference one of the app folders that link to the virtual drives, it will behave as if the files are actually insdie the specified app folder path, but in reality the files are stored in the external "virtual drive" folder.
4. When you delete the app repository, the files you stored using virtual drivees will stay, since the virtual drives exist outside of the app repository. Only the links are deleted.


#### 2. Programmable

Normally creating symbolic links is a tedious process that people must do manually, since every person's system environment is different.

However thanks to Pinokio's [self-contained](#self-contained-file-system) and [distributed](#distributed-file-uri) file system architecture, it is possible to write scripts that will deterministically automate symbolic link creation regardless of what the user's global system environment looks like.

> Learn more about the `fs.link` API [here](#fslink).

#### 3. It "just" works.

The virtual drive abstraction seamlessly blends into whichever apps you already have, and the apps do NOT need to be written in special ways to facilitate virtual drives.

Apps work EXACTLY the same as when they do not use virtual drives, **without having to change any code**. In fact you can turn the virtual drive feature on and off very easily, simply by including or excluding a single `fs.link` API call.


**Example**: Let's say an app at path `/PINOKIO_HOM/api/sd` has a piece of code that says `open("models/checkpoint.pt")`

- **Without virtual drive:** it will open the file at `/PINOKIO_HOME/api/sd/models/checkpoint.pt` within the current repository.
- **With virtual drive:** Let's say we've created a link from `/PINOKIO_HOME/api/sd/models` to the `models` virtual drive path for this repository.
  - It will try to open the file at `/PINOKIO_HOME/api/sd/models/checkpoint.pt`
  - The `/PINOKIO_HOME/api/sd/models` folder itself is not an actual folder with contents, but instead a symbolic link to an externally created virtual drive.
  - But this distinction doesn't change anything, the attempt to open `/PINOKIO_HOME/api/sd/models/checkpoint.pt` will be automatically redirected to open `models/checkpoint.pt` on the virtual drive.

Basically, everything works exactly the same as when you didn't create the virtual drive links, but we still end up with all the benefits that come with virtual drives.

> Learn more about the `fs.link` API [here](#fslink).



---

# Processor

<img src="cpu.png" class='fixed'>

The processor is the CPU of Pinokio. It follows the same scheme all modern CPUs implement ([fetch-decode-execute cycle](https://en.wikipedia.org/wiki/Instruction_cycle#Summary_of_stages))

1. **[Fetch (Loader)](fetch):** The loader engine instantiates the state machine (including the memory as well as `self`, which refers to its own code)
2. **[Decode (Template)](decode):** The template engine takes a template expression and instantiates it using the current state provided by the loader
3. **[Execute (Runner)](execute):** The runner takes the instantiated request and executes it.

## Fetch

The "Fetch" step resolves locally installed scripts and loads them to memory.

![fetch.png](fetch.png)

### Resolve Script

The first step is to resolve the script URI. This involves:

1. Checking if the specified HTTP git URI is already installed locally.
2. If it is installed, resolving the local path, so we can access the actual files.

#### Syntax

```json
{
  "uri": <script_uri>
}
```

- `<script_uri>`: may be one of the two forms:
  - **Absolute Path:** Full absolute file path to the script file to run
    - Example: `C:\\pinokio\\api\\my_app\\install.json`
  - **Pinokio File System Path:** A Pinokio file system path. Instead of specifying the full file path, starts with `~/api`.
    - Example: `~/api/my_app/install.json`
  - **Git Path:** The distributed URI scheme as explained [here](#git-path). Used for referencing locally downloaded remote repositories.
    - Example: `https://github.com/cocktailpeanut/blogger.git/index.json`

#### Example

```json
{
  "uri": "https://github.com/cocktailpeanut/blogger.git/index.json"
}
```

Here's how the above request gets resolved to a local file:

1. First look for a locally downloaded repository under the `/PINOKIO_HOME/api` whose git remote matches `https://github.com/cocktailpeanut/blogger.git`
2. Let's say we have a locally downloaded repository at `/PINOKIO_HOME/api/blogger.git`. Then the script resolves the local file at `/PINOKIO_HOME/api/blogger.git/index.json`.
3. If not found, it will throw an error.

> **Note**
>
> Pinokio does NOT make a network request to the https path.
>
> Instead, the https URI is simply used for resolving the local paths for already downloaded repositories.

#### Usage

In practice, most Pinokio users will NOT directly make the "uri" call request programmatically.

Instead, the scripts can be triggered through the UI.


### Load Script

The loading stage takes the resolved script file, and actually loads them to memory, so the Pinokio engine can run through the script to execute the commands.

#### Script written in JSON

##### Syntax


A **script** is a JSON (or a JavaScript that returns JSON) file that follows the following syntax:

```json
{
  "daemon": <daemon>,
  "run": <rpc_requests>,
  <key>: <val>,
  <key>: <val>,
  ...
}
```

- `<rpc_requests>`: An array of RPC calls written in JSON
- `<deamon>`: (optional) If set to `true`, the script process will NOT terminate after all RPC requests in the `<rpc_requests>` array have finished running.
- `<key>`: (optional) In addition to the reserved attributes `daemon` and `run`, you can add your own custom key/value pairs. These custom key/value pairs can be accessed inside templates as a variable named [self](#self).
- `<val>`: (optional) The value associated with the `<key>`

##### Example

Here's an example script that clones a repository and installs some packages.

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "git clone https://huggingface.co/spaces/cocktailpeanut/BRIA-RMBG-1.4 app"
    }
  }, {
    "method": "shell.run",
    "params": {
      "venv": "env",
      "path": "app",
      "message": "pip install -r requirements.txt"
    }
  }]
}
```

In this example, the `run` array makes 2 [shell.run](#shellrun) RPC calls:

1. **git clone:** Runs `git clone https://huggingface.co/spaces/cocktailpeanut/BRIA-RMBG-1.4 app` to clone the remote repository to `app` folder.
2. **install dependencies:**
    - Runs `pip install -r requirements.txt`
    - from the `app` folder (which was just downloaded from the previous step)
    - to install depencencies to a venv environment at `env` path


#### Script written in JavaScript

You can also write JavaScript files to implement a `script`.

Simply write a node.js async function module that returns [a JSON script](#script-written-in-json):

##### Syntax

```javascript
module.exports = async (kernel) => {
  return <JSON_RUN_SCRIPT>
}
```


##### Example

```javascript
module.exports = async (kernel) => {
  return {
    "run": [
      {
        "method": "shell.run",
        "params": {
          "message": "git clone https://huggingface.co/spaces/cocktailpeanut/BRIA-RMBG-1.4 app"
        }
      },
      {
        "method": "shell.run",
        "params": {
          "venv": "env",
          "path": "app",
          "message": "pip install -r requirements.txt"
        }
      },
      (kernel.gpu === 'nvidia' ? "pip install xformers" : null)
    ]
  }
}
```

This is useful when you want to dynamically generate the script based on the `kernel` state. 

1. Note that it's a node.js module.
2. It's an **async function** which takes `kernel` variable, which lets you access all the system utils and info.
3. The **async function** is returning a JSON that follows the Pinokio script syntax.

Note that the last step in the **run** array either returns `pip install xformers` or `null` depending on the `kernel.gpu` variable:

```javascript
(kernel.gpu === 'nvidia' ? "pip install xformers" : null)
```

This will utilize the `kernel.gpu` variable to detect the gpu, and only run `pip install xformers` if the gpu is nvidia.

Otherwise it returns `null`, which will be ignored (skipped) in the [execution stage](#execute).


---

## Decode

![decode.png](decode.png)

A typical Pinokio script contains template expressions.

Without template expressions, you would only be able to run static commands. What we want is to be able to dynamically form requests on the fly, so every run can run a unique request workflow based on the current state of the Pinokio state machine.

### Template Interpreter

A Pinokio template expression is a string surrounded by <span v-pre>`{{ }}`</span>, and filled out on the fly when a command is run. Example:

```json
{
  "method": "local.set",
  "params": {
    "name": "{{input}}"
  }
}
```

So, what can go inside the <span v-pre>`{{ }}`</span> expression?

1. **Any JavaScript evaluation expression:** It is recommended to use only simple expressions, but any expression you can run in node.js can be included. For example: <span v-pre>`{{Buffer.from(input.images[0], "base64")}}`</span>
2. **Memory variables:** Pinokio exposes certain variables from the memory so you can dynamically run commands based on these memory variables.

The next section lists all the **memory variables** available for use inside the script template expressions.

### Memory Variables

So what kind of variables are available inside the template expression?

Pinokio exposes several system **memory variables** inside templates. Making use of these variables are essential for writing dynamic (and stateful) scripts.

> You can learn more about memory variables in the [memory](#memory) section.

### Decode Cycle

The template expressions are instantiated freshly at the beginning of every step in the `run` array, using the up-to-date memory variables available at the time of parsing.

For example let's say we have a logging script:

```json
{
  "run": [{
    "method": "log",
    "params": {
      "raw": "running instruction {{current}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "running instruction {{current}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "running instruction {{current}}"
    }
  }]
}
```

Since the [current](#current) variable returns the index of the currently executing step in the `run` array,

1. First it will run the `run[0]` step, and print `running instruction 0`
2. Then it will run the next step `run[1]`, and print `running instruction 1`
3. Finally it will run the final step `run[2]`, and print `running instruction 2`


---


## Execute

![execute.png](execute.png)

Once the request has been instantiated by the decoder, the request is executed.

### Script Lifecycle

The script lifecycle is very simple:

```json
{
  "run": [
    <RPC>,
    <RPC>,
    <RPC>,
    <RPC>,
    <RPC>,
    ...
  ]
}
```

1. The `run` array is an ordered list of RPC calls.
2. Pinokio walks through the `run` array to run the steps one by one.
3. Each `<RPC>` is [freshly decoded](#decode-cycle) with the [template interpreter](#template-interpreter) before executing.
4. After each step, the return value of each step is passed down to the next step in the form of [input](#input).
5. Each step can make use of the `input` variable passed in from the previous step in their template expression to dynamically construct the method to run.
6. When it reaches the end of the `run` array, the script halts, and all the processes associated with the script is garbage collected.

![run.png](run.png)


### RPC

The RPC (Remote Procedure Call) API lets you actually write various logic to make Pinokio do things.


#### syntax

```json
{
  "id": <RPC_id>,
  "when": <RPC_condition>,
  "method": <RPC_method>,
  "params": <RPC_params>,
}
```

1. `<RPC_id>`: **optional.** mark this RPC call with the id of `<RPC_id>`. a `jump` RPC call can jump to any step within the `run` array.
2. `<RPC_condition>`: **optional.** if evaluated to `true`, run this step. Otherwise go to the next step.
3. `<RPC_method>`: The RPC method to call
4. `<RPC_params>`: A JSON parameter to pass to the `<RPC_method>` as payload. The `<RPC_params>` object will be available as the value `{{input}}` template expression on the next step.

> To learn about all the available RPC APIs, see the [script](#script) section.

#### examples

##### id


```json
{
  "run": [{
    "method": "jump",
    "params": {
      "id": "{{gpu === 'nvidia' ? 'cuda' : 'cpu'}}"
    }
  }, {
    "id": "cpu",
    "method": "shell.run",
    "params": {
      "message": "pip install torch torchvision torchaudio"
    }
  }, {
    "id": "cuda",
    "method": "shell.run",
    "params": {
      "message": "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121"
    }
  }]
}
```

When the script starts running it encounters a `jump` instruction that dynamically jumps to either **cuda** (`run[2]`) or **cpu** (`run[1]`) depending on the GPU.

##### when


```json
{
  "run": [{
    "when": "{{gpu !== 'nvidia'}}",
    "method": "shell.run",
    "params": {
      "message": "pip install torch torchvision torchaudio"
    }
  }, {
    "when": "{{gpu === 'nvidia'}}",
    "method": "shell.run",
    "params": {
      "message": "pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121"
    }
  }]
}
```

- `run[0]` is run if the gpu is NOT nvidia. (In nvidia GPU machines, this step is ignored and goes to the next step immediately)
- `run[1]` is run if the gpu is nvidia.

### Daemon mode

By default when Pinokio finishes running all the steps inside the `run` array, every process associated with the script halts, and whatever was in the memory gets cleared out immediately (See [script lifecycle](#script-lifecycle)).

However, sometimes you may want to **keep all the processes running** even after Pinokio interpreter has finished executing every step in the `run` array.

For example **imagine launching a web server using Pinokio script:**

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "python server.py"
    }
  }]
}
```

The `python server.py` may launch a server, but when the script finishes running, everything associated with the script will be shut down automatically, including the server.

To keep the server process running, we simply need to specify an additional attribute: `daemon`:

```json
{
  "daemon": true,
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "python server.py"
    }
  }]
}
```

By setting `daemon` to `true`, Pinokio won't automatically shut down all the associated processes, which means the server will stay running.

The only way to stop the server in this case, is to explicitly stop the script using the [script.stop](#scriptstop) API, or through the Pinokio stop button interface.


---

# Memory

As a pinokio script gets executed step by step, you can update the memory so it can be used in later steps.

<img src="ram.png" class='fixed'>

## input

An `input` is a variable that gets passed from one RPC call to the next. Not all RPC APIs have a return value, but the ones that do, will pass down the `input` value to the next step.

![run.png](run.png)

There are two types of `input`:

1. **Return values between steps:** The `input` value passed into `run[1]`, ... `run[run.length-1]` steps. Basically, these are values that one step passes on to the next. `run[0]` can't have this since there is no previous step to `run[0]`.
1. **Initial script launch parameter:** The `input` value passed into `run[0]`.
    - By default, this value will be `null` for `run[0]` since there is no "previous step".
    - But it is possible to pass in custom `input` values to the first step `run[0]`
      - **script.start params:** You can launch scripts programmatically using the [script.start](#scriptstart) API. And when you call the method, you can pass an additional `params` parameter. This will be passed into the first step `run[0]` as `input`.
      - **pinokio.js menu item params:** You can construct the menu items UI in [pinokio.js](#pinokiojs) with an array attribute named `menu`, where each item may contain an `href` attribute, which will create a menu item that launches a script at the specified URI. You can also pass an additional `params` object along with the `href`, and this `params` object will be passed to the first step `run[0]` of the script as `input` when it's launched through the menu item.

Let's take a look at an example:

```json
{
  "run": [{
    "id": "run",
    "method": "gradio.predict",
    "params": {
      "uri": "http://127.0.0.1:7860",
      "path": "/answer_question_1",
      "params": [
        { "path": "https://media.timeout.com/images/105795964/750/422/image.jpg" },
        "Explain what is going on here"
      ]
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{input.data[0]}}"
    }
  }]
}
```

In the example above, we are:

1. Making a request to `http://127.0.0.1:7860` using the [gradio.predict](#gradiopredict) API.
2. The return value of the [gradio.predict](#gradiopredict) gets passed down to the next step `log`.
3. The `log` takes the `input` and instantiates the template `{{input.data[0]}}` and logs the result to the terminal.


---

## args

args is equivalent to the `input` of the first step (`run[0]`).

Sometimes you may want to pass in some parameters when launching a script, and make use of the parameter object throughout the entire script.

You can't do this with [input](#input) because the input variable gets set freshly for every step.

Let's take a look at an example (a file named `launch.json`):


```json
{
  "run": [{
    "method": "log",
    "params": {
      "json2": "{{input}}"
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{args}}"
    }
  }]
}
```

We may launch this script with the following [script.start](#scriptstart) API call:

```json
{
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "launch.json",
      "params": {
        "a": 1,
        "b": 2
      }
    }
  }]
}
```

This will print:

```
{"a": 1, "b": 2}
{"a": 1, "b": 2}
```

1. The first line is from the first step, using the `input` value available at `run[0]`.
2. The second line is from the second step, usin the `args` value.

Note that the `input` value and `args` value will always be the same for `run[0]`.



---

## local

The local variable is every variable prefixed with `local.`. For example:

- `local.items`
- `local.prompt`


Local variables are reset whenever the script finishes running, which means if you run a script once, and run it again, they will always start from scratch.

You can set local variable values with [local.set](#localset) API.

---

## self

The `self` refers to the script itself.

A `run` script looks like this:

```json
{
  "daemon": <daemon>,
  "run": <rpc_requests>,
  <key>: <val>,
  <key>: <val>,
  ...
}
```

Where:

- `<rpc_requests>`: An array of RPC calls written in JSON
- `<deamon>`: (optional) If set to `true`, the script process will NOT terminate after all RPC requests in the `<rpc_requests>` array have finished running.
- `<key>`: (optional) In addition to the reserved attributes `daemon` and `run`, you can add your own custom key/value pairs
- `<val>`: (optional) The value associated with the `<key>`

Note that you can have any kind of custom `<key>/<value>` pairs in the script. 

And when you do, you can access them using the `self` notation.

Let's imagine we have the following script:

```json
{
  "cmds": {
    "win32": "dir",
    "darwin": "ls",
    "linux": "ls"
  },
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "{{self.cmds[platform]}}"
    }
  }]
}
```

Here, the `self.cmds[platform]` will resolve to:

- `dir` on windows
- `ls` on mac (darwin)
- `ls` on linux

---

## uri

The current script uri

---

## port

The next available port.

This can be used to automatically figure out a free port and use it to launch an app. Here's an example:

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "venv": "env",
      "message": "python app.py --port {{port}}"
    }
  }]
}
```

---

## cwd

The path of the currently running script

---

## platform

The current operating system. May be one of the following:

- `darwin`
- `linux`
- `win32`

---

## arch

The current system architecture. May be one of the following:

- `x32`
- `x64`
- `arm`
- `arm64`
- `s390`
- `s390x`
- `mipsel`
- `ia32`
- `mips`
- `ppc`
- `ppc64`

---

## gpus

An array of available GPUs on the machine

Example:

```json
["apple"]
```

---

## gpu

The first available GPU

Example:

```json
apple
```

---

## current

The `current` variable points to the index of the currently executing instruction within the `run` array. For example:

```json
{
  "run": [{
    "method": "log",
    "params": {
      "raw": "running instruction {{current}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "running instruction {{current}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "running instruction {{current}}"
    }
  }]
}
```

will print:

```
running instruction 0
running instruction 1
running instruction 2
```

---

## next

The `next` variable points to the index of the next instruction to be executed. (`null` if the current instruction is the final instruction in the `run` array):

```json
{
  "run": [{
    "method": "log",
    "params": {
      "raw": "running instruction {{current}}. next instruction is {{next}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "running instruction {{current}}. next instruction is {{next}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "running instruction {{current}}. next instruction is {{next}}"
    }
  }]
}
```

Above command will print the following:


```
running instruction 0. next instruction is 1
running instruction 1. next instruction is 2
running instruction 2. next instruction is null
```

---

## envs

You can access the environment variables of the currently running process with `envs`.

For example, let's say we have set the `SD_INSTALL_CHECKPOINT` and `MODEL_PATH` environment variables for the app. We may retrieve them while executing a script, like this:

```json
{
  "run": [{
    "method": "fs.download",
    "params": {
      "uri": "{{envs.SD_INSTALL_CHECKPOINT}}",
      "dir": "{{envs.MODEL_PATH}}"
    }
  }]
}
```

Additionally, we may even use the environment variables inside `when`, effectively determining whether to run an action or not based on environment variables.


For example we may ONLY want to download a file if the environment variable is set:


```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui app",
    }
  }, {
    "when": "{{envs.SD_INSTALL_CHECKPOINT}}",
    "method": "fs.download",
    "params": {
      "uri": "{{envs.SD_INSTALL_CHECKPOINT}}",
      "dir": "{{envs.MODEL_PATH}}"
    }
  }]
}
```

In the above script,

1. If the `SD_INSTALL_CHECKPOINT` environment variable is set (through [ENVIRONMENT](#ENVIRONMENT), or through other means), the `fs.download` action will execute properly.
2. If the `SD_INSTALL_CHECKPOINT` is NOT set, then the second step will be skipped and the script will complete immediately after the first step.

---

## kernel

The kernel JavaScript API

- `kernel.which()`: return the absolute path of any given command. if the command doesn't exist under PATH, returns null.
- `kernel.exists()`: check if a path exists
- `kernel.path()`: given a relative path within pinokio, resolve its absolute path
- `kernel.script.running()`: check if a script at specified path is currently running
- `kernel.script.local()`: get the local variables of a script (if running)


### kernel.which

Check whether a command exists (can be run in a terminal), and if so, return the absolute path. If it doesn't exist, return null.

#### syntax

```
let command_path = kernel.which(command)
```

- `command`: The command to check (for example `ls`, `dir`, `code`, etc.)
- `command_path`: The absolute path of the command if it exists. Otherwise `null`.

#### examples

##### run command if it exists

```json
{
  "run": [{
    "when": "{{which('winget')}}",
    "method": "shell.run",
    "params": {
      "sudo": true,
      "message": "winget install --id=eSpeak-NG.eSpeak-NG -e --silent --accept-source-agreements --accept-package-agreements"
    }
  }]
}
```

##### inside JS

```js
module.exports = async (kernel) => {
  let env = {}
  if (kernel.platform === "win32") {
    // get the espeak-ng path
    let espeakPath = kernel.which("espeak-ng")

    // get the installation folder path for espeak-ng
    let espeakRoot = path.dirname(espeakPath)

    // set environment variables
    env.PHONEMIZER_ESPEAK_PATH = espeakRoot
    env.PHONEMIZER_ESPEAK_LIBRARY = path.resolve(espeakRoot, "libespeak-ng.dll")
    env.ESPEAK_DATA_PATH = path.resolve(espeakRoot, "espeak-ng-data")
    let LIBPATH = kernel.bin.path("miniconda/libs")
    env.LINK = `/LIBPATH:${LIBPATH}`
  }
  return {
    daemon: true,
    run: [{
      method: "shell.run",
      params: {
        env: env,
        venv: "env",
        path: "app",
        message: "python app.py",
        on: [{
          // The regular expression pattern to monitor.
          // When this pattern occurs in the shell terminal, the shell will return,
          // and the script will go onto the next step.
          "event": "/http:\/\/\\S+/",   

          // "done": true will move to the next step while keeping the shell alive.
          // "kill": true will move to the next step after killing the shell.
          "done": true
        }]
      }
    }]
  }
}
```


### kernel.exists

Check whether a file or a folder at the specified path exists:

#### syntax

```
kernel.exists(...pathChunks)
```

- `pathChunks`: any number of path chunks.
  - the chunks will be combined to resolve the full path (Internally using the node.js `path.resolve(...pathChunks)`)
  - The chunks must resolve to an absolute path when combined.

#### examples

##### inside a script

```json
{
  "run": [{
    "when": "{{!kernel.exists(cwd, 'env')}}",
    "method": "script.start",
    "params": {
      "uri": "install.js"
    }
  }]
}
```

When the template interpreter encounters `kernel.exists`, it merges all the supplied chunks to construct the full path.

1. First resolve the path using the [cwd](#cwd) variable and the string `"env"`, which will resolve to the `env` folder in the current directory.
2. Then it checks if that path exists.
3. if exists, returns `true`, otherwise returns `false`

##### inside pinokio.js

It is also possible to use the `kernel.exists()` method inside `pinokio.js` to dynamically construct the UI.

> The UI sidebar gets updated for every step in the run array execution.

```json
module.exports = {
  version: "1.5",
  title: "My App",
  description: "Add description here",
  icon: "icon.png",
  menu: async (kernel) => {
    // we pass 3 chunks: __dirname, "app", and "env" ==> the chunks will be joined to construct the absolute path, and will be checked to see if the path exists.
    let installed = await kernel.exists(__dirname, "app", "env")
    if (installed) {
      // Already installed, display "start" button
      return [{
        icon: "fa-solid fa-plug",
        text: "Start",
        href: "start.js",
      }]
    } else {
      // Not installed, display "install" button
      return [{
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}
```

### kernel.path

Get the absolute path

#### syntax

```
let absolute_path = kernel.path(...pathChunks)
```

- `pathChunks`: any number of path chunks.
  - the chunks will be combined to resolve the full path (Internally using the node.js `path.resolve(...pathChunks)`)
  - The chunks must resolve to an absolute path when combined.

#### examples

##### check if a path exists, and run the script if it exists

```json
{
  "run": [{
    "when": "{{kernel.exists(kernel.path('api/comfy/start.js'))}}",
    "method": "script.start",
    "params": {
      "uri": "{{kernel.path('api/comfy/start.js')}}"
    }
  }]
}
```


### kernel.script.local

Get the local variables of any specified script path

#### syntax

```
kernel.script.local(...pathChunks)
```

#### example

##### using relative path

```json
{
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "start.js"
    }
  }, {
    "method": "log",
    "params": {
      "text": "{{kernel.script.local(cwd, 'start.js').url}}"
    }
  }]
}
```

1. First run `install.js` using the `script.start` API
2. Then in the next step (`log` API call), we check `{{kernel.script.local(cwd, 'start.js')}}`
3. If the `start.js` is running, it will return a JSON that contains all its variables as key/value pairs. Otherwise it will return an empty JSON `{}`
4. In this case, we assume there's a local variable named `url`, and can get its value with `kernel.script.local(cwd, 'start.js').url` 

##### using git path


```json
{
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "https://github.com/cocktailpeanutlabs/moondream2.git/start.js"
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{kernel.script.local('https://github.com/cocktailpeanutlabs/moondream2.git/start.js')}}"
    }
  }]
}
```

1. If `https://github.com/cocktailpeanutlabs/moondream2.git/start.js` is running: **return all local variables for the script**
2. If NOT running: return an empty object `{}`

##### inside pinokio.js


```json
module.exports = {
  version: "1.5",
  title: "My App",
  description: "Add description here",
  icon: "icon.png",
  menu: async (kernel) => {

    // Step 1.
    // Get the `local.url` variable inside the script "start.js"
    let url = kernel.local(__dirname, "app", "start.js").url

    // Step 2.
    // If there's a local variable "url", display the "web UI" tab,
    // which links to the url => when clicked, this will open the url
    if (url) {
      return [{
        icon: "fa-solid fa-plug",
        text: "Web UI",
        href: url,
      }]
    }
    // Step 3.
    // if there is no local variable "url",
    // it means the url inside the "start.js" script is not yet ready.
    // so do NOT display the tab to open the url.
    else {
      return [{
        icon: "fa-solid fa-plug",
        text: "Start",
        href: "start.js",
      }]
    }
  }
}
```


### kernel.script.running

#### syntax

```
kernel.script.running(...pathChunks)
```

#### examples

##### 

```json
{
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "install.js"
    }
  }, {
    "method": "log",
    "params": {
      "text": "{{kernel.script.running(cwd, 'install.js')}}"
    }
  }]
}
```

1. First it will start the `install.js` script using the `script.start` API.
2. Then in the second step, it checks if the `install.js` script is running. In this case we have to pass both the `cwd` (current directory) and the `install.js` so they can be merged to result in an absolute path.

##### inside pinokio.js


```json
module.exports = {
  version: "1.5",
  title: "My App",
  description: "Add description here",
  icon: "icon.png",
  menu: async (kernel) => {

    // Step 1.
    // Get the `local.url` variable inside the script "start.js"
    let url = kernel.local(__dirname, "app", "start.js").url

    // Step 2.
    // If there's a local variable "url", display the "web UI" tab,
    // which links to the url => when clicked, this will open the url
    if (url) {
      return [{
        icon: "fa-solid fa-plug",
        text: "Web UI",
        href: url,
      }]
    }
    // Step 3.
    // if there is no local variable "url",
    // it means the url inside the "start.js" script is not yet ready.
    // so do NOT display the tab to open the url.
    else {
      return [{
        icon: "fa-solid fa-plug",
        text: "Start",
        href: "start.js",
      }]
    }
  }
}
```

---


## _

The `_` is the utility variable that lets you easily manipulate data inside template expressions, powered by [lodash](https://lodash.com/).

Example:

```json
{
  "run": [{
    "method": "log",
    "params": {
      "raw": "{{_.difference([2, 1], [2, 3])}}"
    }
  }]
}
```

will print:

```
1
```

Another example, where we use the `_.sample()` method to randomly pick an item from the `self.friends` variable:

```json
{
  "friends": [
    "HAL 9000",
    "Deep Blue",
    "Watson",
    "AlphaGo",
    "Siri",
    "Cortana",
    "Alexa",
    "Google Assistant",
    "OpenAI",
    "Tesla Autopilot",
    "IBM Watson",
    "Boston Dynamics",
    "IBM Deep Blue",
    "Microsoft Tay",
    "IBM DeepMind",
    "Amazon Rekognition",
    "OpenAI GPT-3"
  ],
  "run": [{
    "method": "log",
    "params": {
      "raw": "random friend: {{_.sample(self.friends)}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "random friend: {{_.sample(self.friends)}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "random friend: {{_.sample(self.friends)}}"
    }
  }]
}
```

Above script prints randomly picked items, for example:

```
random friend: IBM DeepMind
random friend: HAL 9000
random friend: Amazon Rekognition
```

---

## os

Pinokio exposes the [node.js os module](https://nodejs.org/api/os.html) through the `os` variable.

For example, ee can use the `os` variable to dynamically figure out which platform the script is running on and perhaps shape the commands based on the platform. Example:

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "{{os.platform() === 'win32' ? 'dir' : 'ls'}}"
    }
  }]
}
```

Above script:

1. runs `dir` on windows
2. runs `ls` on non-windows operating systems (mac, linux)

---

## path

The [Node.js path module](https://nodejs.org/api/path.html)

### examples

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "cd {{path.resolve(cwd, 'env')}}"
    }
  }]
}
```



---

# Script 

<img src="keyboard.png" class='fixed'>

Pinokio script is a declarative markup that can shell commands, work with files, make network requests, and pretty much everything you need to automatically install and run ANYTHING on a computer.

It is written in JSON, and can also be written in JavaScript (which returns the resulting JSON) in case you need to make them dynamically change.


---

## fs

- [fs.write](#fswrite)
- [fs.read](#fsread)
- [fs.rm](#fsrm)
- [fs.copy](#fscopy)
- [fs.download](#fsdownload)
- [fs.link](#fslink)
- [fs.open](#fsopen)
- [fs.cat](#fscat)

### fs.write

#### syntax

The `fs` api provides a simple way to write `json`, `text`, or `buffer` to the file system.

```json
{
  "method": "fs.write",
  "params": {
    "path": <path>,
    <type>: <data>
  }
}
```

- `<path>`: the file path to write to (see [distributed file URI](#distributed-file-uri))
- `<type>`: `"json"`, `"json2"`, `"text"`, or `"buffer"`. The `<data>` is treated as the type specified by the `<type>` value when writing to the file.
- `<data>`: the data to write to the file.

#### return value

none

#### examples

##### Writing JSON

Here's a simple example to write JSON to `items.json`

```json
{
  "method": "fs.write",
  "params": {
    "path": "items.json",
    "json": {
      "names": [ "alice", "bob", "carol" ]
    }
  }
}
```

This will result in a file named `items.json` looking like this:

```json
{"names":["alice","bob","carol"]}
```

<br>

##### Writing Multi-line JSON 

The `json` type writes the entire JSON in a **single line**. If we want to write a **multiline JSON**, use `json2` type:

```json
{
  "method": "fs.write",
  "params": {
    "path": "items.json",
    "json2": {
      "names": [ "alice", "bob", "carol" ]
    }
  }
}
```

This will result in `items.json` looking like this:

```json
{
  "names": [
    "alice",
    "bob",
    "carol"
  ]
}
```

<br>

##### Writing text

```json
{
  "method": "fs.write",
  "params": {
    "path": "items.csv",
    "text": "alice,bob,carol"
  }
}
```

This will result in `items.csv` that looks like this:

```
alice,bob,carol
```

<br>

##### Writing buffer


Converting a base64 string to Buffer and writing to `img.png`:

```json
{
  "method": "fs.write",
  "params": {
    "path": "img.png",
    "buffer": "{{Buffer.from(input.images[0], 'base64')}}"
  }
}
```

---

### fs.read

#### syntax

The `fs` api provides a simple way to read from files.

```json
{
  "method": "fs.read",
  "params": {
    "path": <path>,
    "encoding": <encoding>
  }
}
```

- `<path>`: the file path to read from (see [distributed file URI](#distributed-file-uri))
- `<encoding>`: the data encoding to read as. can be one of the following ("buffer" if not specified)
    - "ascii"
    - "base64"
    - "base64url"
    - "hex"
    - "utf8"
    - "utf-8"
    - "binary"


> Internally, the API calls the fs.readFile node.js method:
>
> **fs.readFile(params.path, params.encoding)**

#### return value

- `input`: the file content


#### examples

example (read `img.png` and print its base64 encoded string):

```json
{
  "run": [{
    "method": "fs.read",
    "params": {
      "path": "img.png",
      "encoding": "base64"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "data:image/png;base64,{{input}}"
    }
  }]
}
```

---

### fs.rm

#### syntax

The `fs.rm` API deletes a `file` or a `folder` at the specified path

```json
{
  "method": "fs.rm",
  "params": {
    "path": <path>
  }
}
```

- `<path>`: the file path to write to (see [distributed file URI](#distributed-file-uri))

#### return value

none


#### examples

example: Delete the folder `app` in the current directory.

```json
{
  "run": [{
    "method": "fs.rm",
    "params": {
      "path": "app"
    }
  }]
}
```

---

### fs.copy

#### syntax

The `fs.copy` API copies a file or a folder at `src` to `dest`

```json
{
  "method": "fs.copy",
  "params": {
    "src": <source_path>,
    "dest": <destination_path>
  }
}
```

- `<source_path>`: the source file to copy from (see [distributed file URI](#distributed-file-uri))
- `<destination_path>`: the destination file to copy to (see [distributed file URI](#distributed-file-uri))

#### return value

none


#### examples

example: Copying `hello.txt` to `world.txt`

```json
{
  "run": [{
    "method": "fs.copy",
    "params": {
      "src": "hello.txt",
      "dest": "world.txt"
    }
  }]
}
```

example: Copying the folder `app` to a new folder `api` recursively

```json
{
  "run": [{
    "method": "fs.copy",
    "params": {
      "src": "app",
      "dest": "api"
    }
  }]
}
```

---

### fs.download

The `fs.download` downloads a file to a specified path or directory. If the path does not exist, it is created first if possible.

#### syntax

```json
{
  "method": "fs.download",
  "params": {
    "uri": <uri>,
    <type>: <path>
  }
}
```

- `<uri>`: download file url(s). can be:
  - a url
  - an array of urls
- `<type>`: can be either `"path"` or `"dir"`
- `<path>`: the destination path. 
  - if the `<type>` is `"path"`: the file path to download as (see [distributed file URI](#distributed-file-uri))
  - if the `<type>` is `"dir"`: the directory path to download the file into. The remote filename will be preserved. (see [distributed file URI](#distributed-file-uri))

#### return value

none


#### examples

##### download file as path

example: Download `https://via.placeholder.com/600/92c952` to a file named `placeholder.png`

```json
{
  "run": [{
    "method": "fs.download",
    "params": {
      "url": "https://via.placeholder.com/600/92c952",
      "path": "placeholder.png"
    }
  }]
}
```

##### download file into dir

example: Download the file at `https://huggingface.co/stabilityai/sdxl-turbo/resolve/main/sd_xl_turbo_1.0.safetensors?download=true` under the `models` folder

```json
{
  "run": [{
    "method": "fs.download",
    "params": {
      "url": "https://huggingface.co/stabilityai/sdxl-turbo/resolve/main/sd_xl_turbo_1.0.safetensors?download=true",
      "dir": "models"
    }
  }]
}
```

##### download files into dir

example: Download multiple files into a dir


```json
{
  "run": [{
    "method": "fs.download",
    "params": {
      "uri": [
        "https://huggingface.co/justimyhxu/GRM/blob/main/grm_u.pth",
        "https://huggingface.co/cocktailpeanut/sv3/blob/main/sv3d_p.safetensors"
      ],
      "dir": "app/checkpoints"
    }
  }]
}
```

---

### fs.link

The `fs.link` API provides an easy way to store data outside of the repository through a mechanism called **Pinokio Virtual Drive**.

Virtual drives let you store data outside of applications and reference them from the apps **without changing anything**. Useful for many things, such as:

1. Storing files that persist across multiple installs (Similar to Docker Volumes)
2. Sharing files across multiple apps (such as AI model `.safetensor` files)
3. Storing all the library files (such as pytorch) in a deduplicated manner

> **Learn more about Virtual Drives [here](#virtual-drives)**

Here are the operations supported by the `fs.link` API:

1. [folder linking](#_1-folder-linking): link any folder paths within the current repository to corresponding virtual drive paths
2. [peer linking](#_2-peer-linking): optionally, you can create a shared drive among multiple applications by declaring them as **peer drives**. It works the same sa **folder linking**, except it first checks if there's already an existing peer drive before creating one. If there is one already, the discovered peer drive is used instead of creating one.
2. [venv linking](#_3-venv-linking): a special link method, which automatically links every installed python package inside a venv environment to each corresponding drive path.
    - useful for saving disk space by automatically deduplicating redundant packages (such as pytorch, etc.) across multiple apps.

#### 1. folder linking

![link_folder.png](link_folder.png)

You can link folders to virtual drive counterparts with:

```json
{
  "method": "fs.link",
  "params": {
    "drive": {
      <drive_folder_path>: <actual_folder_path>,
      <drive_folder_path>: <actual_folder_path>,
      ...
    }
  }
}
```

Every `fs.link` call creates a virtual drive designated for the current repository, and then links the specified virtual paths to the actual path counterparts.

- `<drive_folder_path>`: a relative path within the virtual drive path to create
- `<actual_folder_path>`: the actual relative folder path within this repository.
  - Must be a **folder path** (no file paths)
  - May be a **string** or an **array**
  - When an array is used, all paths in the `<actual_folder_path>` array will turn into symbolic links that point to the corresponding `<drive_folder_path>` virtual drive path.

Here's an example:

```json

// /PINOKIO_HOME/api/APP1/install.json

{
  "method": "fs.link",
  "params": {
    "drive": {
      "checkpoints": "app/models/checkpoints",
      "clip": "app/models/clip",
      "vae": "app/models/vae"
    }
  }
}
```

1. The `fs.link` call first creates a virtual drive for the current repository (`/PINOKIO_HOME/api/APP1`)
2. It then merges all the files inside `app/models/checkpoints`, `app/models/clip`, `app/models/vae` into the corresponding virtual drive folders (`checkpoints`, `clip`, `vae`)
3. Finally, it creates symbolic links to link the actual paths to the virtual drive paths:
    - from `app/models/checkpoints`, `app/models/clip`, and `app/models/vae` to 
    - to the created virtual drive paths for this repository at `checkpoints`, `clip`, and `vae` each.

Let's walk through each step one by one.

> **NOTE**
>
> The following sections simply explain how the `fs.link` API works internally, and not something you need to do yourself. All these steps are taken care of by the `fs.link` API automatically.
> 
> Just read to understand what exactly happens when you run the `fs.link` API.

##### Step 1. Drive Creation

The `fs.link` first creates a virtual drive for the current repository. A unique folder for the current repository is created under `/PINOKIO_HOME/drive/drives/peers`.

Here's an example:

```
/PINOKIO_HOME
  /drive
    /drives
      /peers  
        /d1711553147861       <= virtual drive
```


##### Step 2. Create virtual drive folders

The next step is to create the virtual drive folders from the keys under the `params.drive`, in this case:

- `checkpoints`
- `clip`
- `vae`

We end up with a virtua drive at the following paths:

```
/PINOKIO_HOME
  /drive
    /drives
      /peers  
        /d1711553147861       <= virtual drive
          /checkpoints
          /clip               
          /vae
```

##### Step 3. Merge Files into Drives

Next, if there were any existing files inside the application folders, we need to merge them into the virtual drive folders, since we are about to turn these folders into symbolic links.

> The merging is necessary, because otherwise all those files will be lost during the process, since the original folders will turn into symbolic links in the next step.

Pinokio uses a merging algorithm to merge the files at path:

- `/PINOKIO_HOME/api/APP1/app/models/checkpoints`
- `/PINOKIO_HOME/api/APP1/app/models/clip`
- `/PINOKIO_HOME/api/APP1/app/models/vae`

into the virtual drive folders:

- `/PINOKIO_HOME/drive/drives/peers//d1711553147861/checkpoints`
- `/PINOKIO_HOME/drive/drives/peers//d1711553147861/clip`
- `/PINOKIO_HOME/drive/drives/peers//d1711553147861/vae`

At the end of this step, the original application folders will be empty, and all the files will now be in the virtual drive folders.

##### Step 4. Create Links

Finally we finish the process by linking the application folders to the corresponding drive folders:

```
/PINOKIO_HOME/api/APP1/app/models/checkpoints => /PINOKIO_HOME/drive/drives/peers//d1711553147861/checkpoints
/PINOKIO_HOME/api/APP1/app/models/clip        => /PINOKIO_HOME/drive/drives/peers//d1711553147861/clip
/PINOKIO_HOME/api/APP1/app/models/vae         => /PINOKIO_HOME/drive/drives/peers//d1711553147861/vae
```


The app will work exactly the same as before, because when the app tries to access the application folders, they will be redirected by the symbolic links to the virtual drive folders.

Now if we download a file named `sd_xl_turbo_1.0_fp16.safetensors` into `/PINOKIO_HOME/api/APP1/app/models/checkpoints`, the actual file will be stored in the linked virtual drive folder like this:


```
/PINOKIO_HOME
  /api
    /APP1
      /app
        /models
          /checkpoints => symbolic liink to /drive/drives/peers/d1711553147861/checkpoints
    /APP2
    /APP3
    ...
  /drive
    /drives
      /peers
        /d1711553147861
          /checkpoints
            sd_xl_turbo_1.0_fp16.safetensors
        ...
  /logs
  /bin
  /cache
```

However you will still be able to access the `sd_xl_turbo_1.0_fp16.safetensors` file as if it's inside `/PINOKIO_HOME/api/APP1/app/models/checkpoints` thanks to the symbolic link system.

#### 2. peer linking

![link_peer.png](link_peer.png)

Now, what if we want to share a single virtual drive among multiple apps? For example, let's say we have **3 different Stable Diffusion apps** named `Stable-Diffusion-WebUI`, `ComfyUI`, and `Fooocus`, and they all use the same AI model files.

**How can we create a virtual drive so it can be shared by all 3 apps?**

We can achieve this by declaring **peers** when creating a virtual drive with `fs.link`:


```json
{
  "method": "fs.link",
  "params": {
    "drive": {
      <drive_folder_path>: <actual_folder_path>,
      <drive_folder_path>: <actual_folder_path>,
      ...
    },
    "peers": <peers>
  }
}
```

- `<peers>`: an array of git repository URIs

The only difference from [plain folder linking](#_1-folder-linking) is that there's a `peer` array.

When a `peers` array is declared, the `fs.link` API runs the following logic first BEFORE attempting to create its own virtual drive folders:

1. Loop through the `peers` array, and for each peer check if there is any virtual drive already created.
2. If a virtual drive is found for a peer, use that drive instead of creating a new drive.
2. If no virtual drive is found for any of the specified git repositories in the `peers` array, create a virtual drive using the [folder linking method](#_1-folder-linking).

Let's take a look at a specific example, where we will write scripts for `fooocus`, `stable-diffusion-webui`, and `comfyui` so they all declare one another as peers:

**Install script in https://github.com/cocktailpeanutlabs/fooocus.git**

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "git clone https://github.com/lllyasviel/Fooocus app"
    }
  }, {
    "method": "fs.link",
    "params": {
      "drive": {
        "checkpoints": "app/models/checkpoints",
        "clip": "app/models/clip",
        "clip_vision": "app/models/clip_vision",
        "configs": "app/models/configs",
        "controlnet": "app/models/controlnet",
        "diffusers": "app/models/diffusers",
        "embeddings": "app/models/embeddings",
        "gligen": "app/models/gligen",
        "hypernetworks": "app/models/hypernetworks",
        "inpaint": "app/models/inpaint",
        "loras": "app/models/loras",
        "prompt_expansion": "app/models/prompt_expansion",
        "style_models": "app/models/style_models",
        "unet": "app/models/unet",
        "upscale_models": "app/models/upscale_models",
        "vae": "app/models/vae",
        "vae_approx": "app/models/vae_approx"
      },
      "peers": [
        "https://github.com/cocktailpeanutlabs/automatic1111.git",
        "https://github.com/cocktailpeanutlabs/comfyui.git"
      ]
    }
  }]
}
```

**Install script in https://github.com/cocktailpeanutlabs/automatic1111.git**


```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui app"
    }
  }, {
    "method": "fs.link",
    "params": {
      "drive": {
        "checkpoints": "app/models/Stable-diffusion",
        "vae": "app/models/VAE",
        "loras": [
          "app/models/Lora",
          "app/models/LyCORIS"
        ],
        "upscale_models": [
          "app/models/ESRGAN",
          "app/models/RealESRGAN",
          "app/models/SwinIR"
        ],
        "embeddings": "app/embeddings",
        "hypernetworks": "app/models/hypernetworks",
        "controlnet": "app/models/ControlNet"
      },
      "peers": [
        "https://github.com/cocktailpeanutlabs/comfyui.git",
        "https://github.com/cocktailpeanutlabs/fooocus.git"
      ]
    }
  }]
}
```

**Install script in https://github.com/cocktailpeanutlabs/comfyui.git**

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "git clone https://github.com/comfyanonymous/ComfyUI.git app"
    }
  }, {
    "method": "fs.link",
    "params": {
      "drive": {
        "checkpoints": "app/models/checkpoints",
        "clip": "app/models/clip",
        "clip_vision": "app/models/clip_vision",
        "configs": "app/models/configs",
        "controlnet": "app/models/controlnet",
        "embeddings": "app/models/embeddings",
        "loras": "app/models/loras",
        "upscale_models": "app/models/upscale_models",
        "vae": "app/models/vae"
      },
      "peers": [
        "https://github.com/cocktailpeanutlabs/automatic1111.git",
        "https://github.com/cocktailpeanutlabs/fooocus.git"
      ]
    }
  }]
}
```

Each of the three scripts declares the rest 2 as the **peers**:

![peers.png](peers.png)

So how does this work in practice?

1. When any of these three scripts are run for the first time, there will be no existing "peer drive", therefore a new virtual drive will be created for the respository.
2. Then later if you run one of the other scripts, it will first run the `peers` check to discover any existing peer.
3. Since a peer virtual drive was already created in step 1, the virtual drive created in step 1 will used when running the rest of the [fs.link folder linking](#_1-folder-linking), instead of creating a new drive.



#### 3. venv linking

![link_venv.png](link_venv.png)

One of the most frequently encountered use cases is dealing with redundant packages installed into `venv` environments across multiple apps.

Let's imagine the following scenario where we have 3 different apps **APP1**, **APP2**, and **APP3**, each with its own independent `venv` environment:


```
/PINOKIO_HOME
  /api
    /APP1
      requirements.txt
      app.py
      /venv
        /lib
          /python3.10
            /site-packages
              /torch
              /accelerate
              /xformers
    /APP2
      requirements.txt
      app.py
      /venv
        /lib
          /python3.10
            /site-packages
              /torch
              /accelerate
              /xformers
    /APP3
      requirements.txt
      app.py
      /venv
        /lib
          /python3.10
            /site-packages
              /torch
              /accelerate
              /xformers
```

1. ALL of these apps have the same redundant packages installed (`torch`, `accelerate`, `xformers`, etc.)
2. However this is how venv is supposed to work. The whole point of venv is to isolate environments, so each environment is not supposed to know about other environments on the same machine.
3. It would still be nice to take advantage of the isolated environments we get from venv, while removing redundancy, so we can save some disk space.


And this is where the `venv linking` comes in.

For this special use case, there's an automated way to create virtual drives, with just one line.

```json
{
  "method": "fs.link",
  "params": {
    "venv": <venv_path>
  }
}
```

- `<venv_path>`: The venv folder path to create virtual drive links for.

This will:

1. look into all the pip packages installed into the venv at `<venv_path>`
2. automatically create virtual drives for each unique version of the installed packages
3. automatically merge the package files inside the `<venv_path>` into the virtual drive paths
4. automatically create symbolic links from all the folders inside the original `<venv_path>` site-packages folder pointing to the automatically created virtual drive folders.

Unlike the **folder linking** method which creates a unique virtual drive for every repository, there is a single centralized pip drive organized as follows:

```
/PINOKIO_HOME
  /drive
    /drives
      /pip
        /accelerate
          /0.20.3
          /0.21.0
          /0.28.0
        /torch
          /2.1.0
          /2.2.2
        ...
```

Basically, every unique version of a unique library installed has its unique folder path.

When you call `fs.link` on a venv environment path, here's what happens:

1. Pinokio scans through the specified venv folder to find all installed packages
2. Then for every package in the venv, it looks up `/PINOKIO_HOME/drive/drives/pip/<package_name>/<version>` to check if it already exists in the virtual drive
3. If it already exists, just use that one
4. If it does NOT exist, create the library's version folder (for example `/PINOKIO_HOME/drive/drives/pip/torch/2.3.0`), move all files into the drive, and create a symbolic link

This way, each library path in the venv will be nothing more than a symbolic link to the created drive path.

Here's what the end result may look like for the original 3 apps example from above:

```
/PINOKIO_HOME
  /drive
    /drives
      /pip
        /accelerate
          /0.20.3
          /0.21.0
          /0.28.0
        /torch
          /2.1.0
          /2.2.2
        /xformers
          /0.0.25
          /0.0.24
        ...
  /api
    /APP1
      requirements.txt
      app.py
      /venv
        /lib
          /python3.10
            /site-packages
              /torch          => link to /PINOKIO_HOME/drive/drives/pip/torch/2.2.2
              /accelerate     => link to /PINOKIO_HOME/drive/drives/pip/accelerate/0.28.0
              /xformers       => link to /PINOKIO_HOME/drive/drives/pip/xformers/0.0.25
    /APP2
      requirements.txt
      app.py
      /venv
        /lib
          /python3.10
            /site-packages
              /torch          => link to /PINOKIO_HOME/drive/drives/pip/torch/2.2.2
              /accelerate     => link to /PINOKIO_HOME/drive/drives/pip/accelerate/0.28.0
              /xformers       => link to /PINOKIO_HOME/drive/drives/pip/xformers/0.0.25
    /APP3
      requirements.txt
      app.py
      /venv
        /lib
          /python3.10
            /site-packages
              /torch          => link to /PINOKIO_HOME/drive/drives/pip/torch/2.2.2
              /accelerate     => link to /PINOKIO_HOME/drive/drives/pip/accelerate/0.28.0
              /xformers       => link to /PINOKIO_HOME/drive/drives/pip/xformers/0.0.25
```

1. Note that the `/torch`, `/accelerate`, and `xformers` folders are all pointing to the shared virtual drive folders. This is already saving tons of disk space by removing the redundancy.
2. At the same time, each app works EXACTLY the same as before because these are symbolic links, and they all behave as if these pip packages are actually stored in each app's venv site-packages folders (but in reality they are just symbolic links pointing to the shared pip virtual drive)

---

### fs.open

#### syntax

The `fs.open` api opens a file explorer for a given path

```json
{
  "method": "fs.open",
	"params": {
		"path": "<path>",
    "mode": <mode>
	}
}
```

- `<path>`: the file path to open in a file explorer
- `<mode>`: (optional) may be either `view` or `open`. If not specified, it opens in the `view` mode.
  - `view`: open the file path in file explorer
  - `open`: open the file at the file path

#### return value

none


#### example

Open a folder in file explorer

```json
{
  "method": "fs.open",
	"params": {
		"path": "outputs"
	}
}
```

Open a file (with whichever app is the default handler)

```json
{
  "method": "fs.open",
	"params": {
		"path": "outputs",
    "mode": "open"
	}
}
```


---

### fs.cat

#### syntax

The `fs.cat` api prints the contents of a file

```json
{
  "method": "fs.cat",
	"params": {
		"path": "<path>"
	}
}
```

- `<path>`: the file path to print in terminal

#### return value

none




---

## jump

By default, Pinokio steps through all the requests in the `run` array and halts at the end.

However you can implement looping, which will let you build all kinds of interesting perpetual workflows.

#### syntax

```json
{
  "method": "jump",
  "params": {
    <key>: <value>,
    "params": <params>
  }
}
```

- `<key>`: can be either `"index"` or `"id"`
  - `index`: jump to the index position in the `run` array
  - `id`: jump to the position tagged as `id`
- `<value>`
  - if `<key>` is "index", jump to the specified `<value>` position within the `run` array (For example if `"index": 3`, jump to `run[3]`.
  - if `<key>` is "id", jump to a step tagged with an id of `<value>`.
- `<params>`: (optional) Sometimes you may want to pass arguments to the next step. The `<params>` value will be available as `"input"` inside the next step when using a template expression.

#### return value

none


#### examples

##### jump to index

```json
{
  "run": [{
    "method": "jump",
    "params": {
      "index": 2
    }
  }, {
    "method": "log",
    "params": {
      "raw": "hello"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "world"
    }
  }]
}
```

This will print:

```
world
```

##### jump to id

```json
{
  "run": [{
    "method": "jump",
    "params": {
      "id": "w"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "hello"
    }
  }, {
    "id": "w",
    "method": "log",
    "params": {
      "raw": "world"
    }
  }]
}
```

This will print:

```
world
```

##### jump with params

```json
{
  "run": [{
    "method": "jump",
    "params": {
      "id": "w",
      "params": {
        "answer": 42
      }
    }
  }, {
    "method": "log",
    "params": {
      "raw": "hello"
    }
  }, {
    "id": "w",
    "method": "log",
    "params": {
      "raw": "the meaning of life, the universe, and everything: {{input.answer}}"
    }
  }]
}
```

Above script will:

1. first encounter the `jump` step, which jumps to the `id` of "w", which happens to be the last step in the `run` array (`run[2]`).
2. in addition to jumping, it will pass the `params` of `{ "answer": 42 }`.
3. In the last step, the `params` passed in from the previous step will be available as the variable `input`, and the template expression `{{input.answer}}` will evaluate to 42

So it will print:

```
the meaning of life, the universe, and everything: 42
```

##### loop

You can use the jump api to loop.

```json
{
  "run": [{
    "id": "start",
    "method": "local.set",
    "params": {
      "counter": "{{local.counter ? local.counter+1 : 1}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "{{'' + local.counter + ' is ' + (local.counter % 2 === 0 ? 'even' : 'odd')}}"
    }
  }, {
    "method": "jump",
    "params": {
      "id": "{{local.counter < 20 ? 'start' : 'end'}}"
    }
  }, {
    "id": "end",
    "method": "log",
    "params": {
      "raw": "finished!"
    }
  }]
}
```

1. sets `local.counter` to 1
2. prints whether it's even or odd
3. jumps back to `start` if the `local.counter` is less than 20
4. otherwise jump to `end`.

---

## gradio

### gradio.predict

#### syntax

```json
{
  "method": "gradio.predict",
  "params": {
    "uri": <uri>,
    "path": <path>,
    "params": <params>
  }
}
```

- `<uri>`: gradio endpoint uri
- `<path>`: gradio endpoint route
- `<params>`: the params array to pass to the gradio function

#### return value

- `input`: The return value from the gradio function

#### examples

Let's make a request to a gradio endpoint:

```json
{
  "run": [{
    "method": "gradio.predict",
    "params": {
      "uri": "http://127.0.0.1:7860",
      "path": "/answer_question_1",
      "params": [
        { "path": "https://media.timeout.com/images/105795964/750/422/image.jpg" },
        "Explain what is going on here"
      ]
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{input.data[0]}}"
    }
  }]
}
```

If the endpoint returns `{ "data": ["A man is drinking coffee"] }`, the script will print:

```
A man is drinking coffee.
```

---

## hf

An API to access [huggingface-cli](https://huggingface.co/docs/huggingface_hub/en/guides/cli)

### hf.download

Download files from huggingface

#### syntax

```json
{
  "method": "hf.download",
  "params": {
    "path": <executing folder path (default is the current path)>,
    "_": [<arg1>, <arg2>, ...],
    <kwarg1>: <val1>,
    <kwarg2>: <val2>,
    ...
  }
}
```

This is equivalent to:

```
huggingface-cli download <arg1> <arg2> --<kwarg1> <val1> --<kwarg2> <val2>
```

#### example

```json
{
  "method": "hf.download",
  "params": {
    "path": "app/models",
    "_": ["adept/fuyu-8b", "model-00001-of-00002.safetensors"],
    "local-dir": "fuyu"
  }
}
```

Above script is equivalent to:


```
huggingface-cli download adept/fuyu-8b model-00001-of-00002.safetensors --local-dir fuyu
```

---

## local

- [local.set](#localset)

### local.set

Sets a value at an object path (can be a key path, and the key path can also include an array index)

#### syntax

```json
{
  "method": "local.set",
  "params": {
    <key>: <val>,
    ...
  } 
}
```

Sets the `local` variable attributes for the `<key>` as `<val>`.

1. The local variable will be available from the memory as long as the script is running.
2. When the script finishes running, the local variables will be gone.

#### return value

none


#### examples

##### simple key/val

The following comand sets the local variables `local.name.first` and `local.animal`:

```json
{
  "run": [{
    "method": "local.set",
    "params": {
      "name": "Alice",
      "animal": "dog"
    }
  }, {
    "method": "log",
    "params": {
      "text": "{{local.name + ' ' + local.animal}}"
    }
  }]
}
```

This will set the local variables `name` and `animal`, and will print:

```
Alice dog
```

---

## json

- [json.set](#jsonset)
- [json.rm](#jsonrm)
- [json.get](#jsonget)

### json.set

Sets a value at an object path (can be a key path, and the key path can also include an array index)

#### syntax

```json
{
  "method": "json.set",
  "params": {
    <filepath1>: {
      <key_path1>: <value1>,
      <key_path2>: <value2>
    }
  }
}
```

Where `<key_path1>`, `<key_path2>`, ... are dot `(.)` separated values where each component can be:

- an array index
- a key in JSON

Some example key paths:

- `config`
- `config.api_key`
- `config.0.key`


#### return value

none

#### examples

##### Create a new JSON

Assuming that there's no `config.json` file in the current folder,

```json
{
  "method": "json.set",
  "params": {
    "config.json": {
      "a": 1,
      "b": 2
    }
  }
}
```

Should create a file named `config.json` and set its values to look like this:

```json
{
  "a": 1,
  "b": 2
}
```

##### Updating an existing JSON

Let's say the `config.json` file already has the following content:

```json
{
  "a": 1,
  "b": 2
}
```

Let's say we want to set `a` to 3, and add an additional attribute named `c` whose value is 10:

```json
{
  "method": "json.set",
  "params": {
    "config.json": {
      "a": 3,
      "c": 10
    }
  }
}
```

This would set `a` to 3 and `c` to 10, resulting in the `config.json` file:

```json
{
  "a": 3,
  "b": 2,
  "c": 10
}
```

Note that the `b` attribute has not been touched.


##### Updating a deep JSON

Let's say the `config.json` looks like the following:

```json
{
  "api": {
    "key": "1234"
  },
  "endpoint": {
    "port": "11343"
  }
}
```

We wish to change the `api.key` value to `xxxxx`, and `endpoint.port` to `4200`. We can achieve this with:


```json
{
  "method": "json.set",
  "params": {
    "config.json": {
      "api.key": "xxxx",
      "endpoint.port": 4200
    }
  }
}
```

##### Updating a deep JSON with array

Let's say the `config.json` looks like the following:

```json
{
  "numbers": [1,2,3,4]
}
```

We wish to change the last item from `4` to `100`. We can do this with:


```json
{
  "method": "json.set",
  "params": {
    "config.json": {
      "numbers.3": 100
    }
  }
}
```

---


### json.rm

Remove attributes from JSON

#### syntax

```json
{
  "method": "json.rm",
  "params": {
    <filepath1>: [<key_path1>, <key_path2>, ...],
    <filepath2>: [<key_path1>, <key_path2>, ...]
  }
}
```

Where `<key_path1>`, `<key_path2>`, ... are dot `(.)` separated values where each component can be:

- an array index
- a key in JSON

Some example key paths:

- `config`
- `config.api_key`
- `config.0.key`


#### return value

none

#### examples

##### Simple

Let's say `config.json` looks like this:

```json
{
  "api_key": "sk_dfsfdsfdsf",
  "port": "11343"
}
```

If we want to remove the key `api_key`, we can run:

```json
{
  "method": "json.rm",
  "params": {
    "config.json": ["api_key"]
  }
}
```

After running this, the `config.json` file will look like this:


```json
{
  "port": "11343"
}
```

##### Advanced

Let's say `config.json` looks like this:

```json
{
  "a": {
    "b": {
      "c": 1,
      "d": 2
    }
  },
  "e": 2
}
```

If we want to remove the key `a.b.c`, we can run

```json
{
  "method": "json.rm",
  "params": {
    "config.json": ["a.b.c"]
  }
}
```

After running this, the `config.json` file will look like this:


```json
{
  "a": {
    "b": {
      "d": 2
    }
  },
  "e": 2
}
```

---

### json.get

Assign JSON file contents to local variables:

#### syntax

```json
{
  "method": "json.get",
  "params": {
    <key1>: <JSON_file_path1>,
    <key2>: <JSON_file_path2>,
    ...
  }
}
```

When this script is run, `local.<key1>` is set to the value of `<JSON_file_path1>`, and `local.<key2>` is set to the value of `<JSON_file_path2>`.


#### return value

none

#### examples

let's assume the `config.json` file looks like this:

```json
{
  "api_key": "sk_sdfsdfdfsdfdsf"
}
```

When we run the following script:

```json
{
  "run": [{
    "method": "json.get",
    "params": {
      "config": "config.json"
    }
  }, {
    "method": "shell.run",
    "params": {
      "message": "python app.py",
      "env": {
        "OPENAI_API_KEY": "{{local.config.api_key}}"
      }
    }
  }]
}
```

1. The first stpe assigns the contents of `config.json` to the local variable `local.config`.
2. The second step utilizes the value of `{{local.config.api_key}}`. 



---

## log

#### syntax

```json
{
  "method": "log",
  "params": {
    <type>: <data>
  }
}
```

- `<type>`: the type of data to print. can be one of the following:
  - "raw": log raw text
  - "text": same as "raw"
  - "json": log single line json
  - "json2": log json in multiple lines
- `<data>`: the data to print.

#### return value

none


#### examples

#### printing raw text

```json
{
  "run": [{
    "method": "local.set",
    "params": {
      "hello": "world"
    }
  }, {
    "method": "log",
    "params": {
      "text": "{{local.hello}}"
    }
  }]
}
```

will print:

```
world
```

##### printing JSON

Passing the `json` attribute (instead of `raw`) will print JSON

```json
{
  "run": [{
    "method": "local.set",
    "params": {
      "hello": "world"
    }
  }, {
    "method": "log",
    "params": {
      "json": "{{local}}"
    }
  }]
}
```

will print:

```json
{"hello":"world"}
```

##### printing multiline JSON

Passing the `json2` attribute will print JSON, but in multiple lines:

```json
{
  "run": [{
    "method": "local.set",
    "params": {
      "hello": "world",
      "bye": "world"
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{local}}"
    }
  }]
}
```

will print the object in multiple lines:

```json
{
  "hello": "world"
  "bye": "world"
}
```

---

### json.rm

Remove values at key path from a JSON

#### syntax

```json
{
  "method": "json.rm",
  "params": {
    <filepath1>: [<key_path1>, <key_path2>, ...]
  }
}
```

Where `<key_path1>`, `<key_path2>`, ... are dot `(.)` separated values where each component can be:

- an array index
- a key in JSON

Some example key paths:

- `config`
- `config.api_key`
- `config.0.key`


#### return value

none

#### examples

##### remove a key from a JSON file

Let's say the `config.json` file looks like this:

```json
{
  "a": 1,
  "b": 2
}
```

and want to delete the key `b`. we can do:

```json
{
  "method": "json.rm",
  "params": {
    "config.json": ["b"]
  }
}
```

This would result in:


```
{
  "a": 1
}
```

---

## net

#### syntax


```json
{
  "method": "net",
  "params": {
    "url": <url>,
    "method": <method>,
    "headers": <request_headers>,
    "data": <request_data>
  }
}
```

- `<url>`: the endpoint url
- `<request_headers>`: http request header object
- `<data>`: request body
- `<method>`: can be "get", "post", "delete", or "put"

The `net` api internally makes use of the [axios](https://github.com/axios/axios) library, so for a full reference of the API refer to the Axios documentation [here](https://axios-http.com/docs/req_config)

Internally, the above JSON script calls the following axios command:

```javascript
let response = await axios({
  "url": <url>,
  "method": "get"|"post"|"delete"|"put",
  "headers": <request headers>,
  "data": <request body>,
}).then((res) => {
  return res.data
})
```
#### return value

- `input`: The return value from the `axios()` function call from the previous section

#### examples

```json
{
  "run": [{
    "method": "net",
    "params": {
      "url": "http://127.0.0.1:7860/sdapi/v1/txt2img",
      "method": "post",
      "data": {
        "cfg_scale": 7,
        "steps": 30,
        "prompt": "a pencil drawing of a bear"
      }
    }
  }, {
    "method": "fs.write",
    "params": {
      "path": "img.png",
      "buffer": "{{Buffer.from(input.images[0], "base64")}}"
    }
  }]
}
```

---

## notify

Programmatically display a push notification popup.

#### syntax

```json
{
  "method": "notify",
  "params": {
    "html": <html>,
    "href": <href>,
    "target": <target>
  }
}
```

- `<html>`: The html content to display in the notification popup. Can be any HTML
- `<href>`: a url to open. can be an external website or a script url
- `<target>`: **optional** opens in the current window if not specified. If set to `_blank`, opens an external browser

#### return value

none

#### examples

##### Basic message

```json
{
  "run": [{
    "method": "notify",
    "params": {
      "html": "simple message"
    }
  }]
}
```

##### Full HTML

You can even include full HTML elements, such as images

```json
{
  "run": [{
    "method": "notify",
    "params": {
      "html": "<div><img src='https://www.reactiongifs.com/r/2012/06/homer_lurking.gif'/><p>This is an example</p></div>"
    }
  }]
}
```

##### Notify + Start new script

You can display a notification, and start a new script when clicked.

```json
{
  "run": [{
    "method": "notify",
    "params": {
      "html": "Click to run index.json",
      "href": "./index.json"
    }
  }]
}
```

##### Notify + Open an external browser

You can display a notification, and launch an external browser when clicked. Just need to set the `href`, and set `target` to `_blank`:

```json
{
  "run": [{
    "method": "notify",
    "params": {
      "html": "Click to open https://github.com",
      "href": "https://github.com",
      "target": "_blank"
    }
  }]
}
```

---

## script

- [script.download](#scriptdownload)
- [script.start](#scriptstart)
- [script.stop](#scriptstop)
- [script.return](#scriptreturn)

---

### script.download


Download a script from a git URI

#### syntax

```json
{
  "method": "script.download",
  "params": {
    "uri": <uri>,
    "hash": <commit>,
    "branch": <branch>,
    "pull": <should_pull>,
  }
}
```

- `<uri>`: the git uri to download
- `<commit>`: (optional) the git commit hash to switch to after downloading
- `<branch>`: (optional) the git branch to switch to after downloading
- `<should_pull>`: (optional) if set to `true`, always run `git pull` before running code (in case there's been an update made to the remote branch)

This will download the specified git URI to an automatically generated folder.

The download folder name is automatically derived from the repository URL.

#### return value

none

---

### script.start

#### syntax

```json
{
  "method": "script.start",
  "params": {
    "uri": <uri>,
    "hash": <commit>,
    "branch": <branch>,
    "pull": <should_pull>,
    "params": {
      "a": "hello",
      "b": "world"
    }
  }
}
```

- `<uri>`: the script path to start running
- `<commit>`: (optional) the git commit hash to switch to after downloading
- `<branch>`: (optional) the git branch to switch to after downloading
- `<should_pull>`: (optional) if set to `true`, always run `git pull` before running code (in case there's been an update made to the remote branch)
- `<params>`: the params to path to the script. The params will be available as:
  - `<args>`: throughout the entire script
  - `<params>`: on the first method

#### return value

- `input`: if the called script returns a response with `script.return`, this value will be set as `input`.

#### examples

##### local script call

Let's say we want to call `callee.json` from `index.json`.

`index.json`:

```json
{
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "callee.json",
      "params": {
        "a": "hello",
        "b": "world"
      }
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{input}}"
    }
  }]
}
```

and the `callee.json`:

```json
{
  "run": [{
    "method": "log",
    "params": {
      "json2": "{{input}}"
    }
  }, {
    "method": "log",
    "params": {
      "text": "{{args.a + ' ' + args.b}}"
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{args}}"
    }
  }, {
    "method": "script.return",
    "params": {
      "response": "{{args.a + ' + ' + args.b}}"
    }
  }]
}
```

This will print:

```
{
  "a": "hello",
  "b": "world"
}
hello world
{
  "a": "hello",
  "b": "world"
}
{
  "response": "hello + world"
}
```

This is because when this script is called with the `params` of `{ "a": "hello", "b": "world" }`:

1. In the first step, BOTH `input` and `args` will be `{ "a": "hello", "b": "world" }`
    - `input` is the params passed in from the immediately previous step, which means the `input` value will be different for every step.
    - `args` is the params passed in to the script itself, which means the `args` (if it exists), will be the same value throughout the entire script execution.
2. In the second step, the `args` is still available as the same value, therefore prints `hello world`
3. In the third step, the `args` is the same again, so prints the same `args` object
4. The last step (`script.return`) returns the value `{ "response": "hello + world" }`
5. Then the original `index.json` goes on to the next step with the return value set to `input`, so the `log` method prints `{ "response": "hello + world" }`

because:

1. the `args` will be `{ "a": "hello", "b": "world" }` throughout the entire `callee.json` script execution
2. the `input` value 

##### remote script call

"remote script" does NOT mean it makes a request to a remote server.

Remote script simply means a script downloaded from a remote server. In this case, the `uri` can be a git URI scheme that points to a file. For example `https://github.com/cocktailpeanutlabs/comfyui.git/install.js`.

Here's an example. Let's say we have a script at `/PINOKIO_HOME/api/myapp/install.json`:

```json
{
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "https://github.com/cocktailpeanutlabs/torch.git/install.js",
      "branch": "main",
      "params": {
        "venv": "{{path.resolve(cwd, 'env')}}"
      }
    }
  }]
}
```

When this script runs, here's what happens:

1. First, internally Pinokio runs [script.download](#scriptdownload) to clone the repository at https://github.com/cocktailpeanutlabs/torch.git
2. Then it switches the git branch to `main`.
3. Then it starts the script [install.js](https://github.com/cocktailpeanutlabs/torch/blob/main/install.js) with a `params` of `{ "venv": "{{path.resolve(cwd, 'env')}}" }`, which resolves to the `env` folder of the current script
    - Note that the `cwd` is the path of the original script: `/PINOKIO_HOME/api/myapp` (not the path for the repository just downloaded)
    - This means the actual `params` that gets passed will look something like `{ "venv": "/PINOKIO_HOME/api/myapp/install.json" }`

---

### script.stop

#### syntax

```json
{
  "run": [{
    "method": "script.stop",
    "params": {
      "uri": <uri>
    }
  }]
}
```

- `<uri>`: the file path (or an array of file paths). The scripts at the path will be stopped.

#### return value

none


#### examples

##### stop one script

```json
{
  "run": [{
    "method": "script.stop",
    "params": {
      "uri": "https://github.com/cocktailpeanutlabs/moondream2.git/start.js"
    }
  }]
}
```

##### stop multiple scripts

```json
{
  "run": [{
    "method": "script.stop",
    "params": {
      "uri": [
        "https://github.com/cocktailpeanutlabs/moondream2.git/start1.js"
        "https://github.com/cocktailpeanutlabs/moondream2.git/start2.js"
      ]
    }
  }]
}
```

---

### script.return

#### syntax

`index.json`:

```json
{
  "run": [{
    "method": "script.start",
    "params": {
      "uri": "add.json",
      "params": {
        "a": 1,
        "b": 2,
      }
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{input.response}}"
    }
  }]
}
```

and the `callee.json`:

```json
{
  "run": [{
    "method": "script.return",
    "params": {
      "response": "{{args.a + args.b}}"
    }
  }]
}
```

Will print:

```
3
```

#### return value

none

> note that `script.return` itself does NOT have a return value because its function is to return the value back to the caller script.

---


## shell

- [shell.run](#shellrun)

### shell.run

#### syntax

The `shell.run` command starts an instant shell, runs the specified commands, and closes the shell.

```json
{
  "method": "shell.run",
  "params": {
    "message": <message>,
    "path": <path>,
    "env": <env>,
    "venv": <venv_path>,
    "conda": <conda_config>,
    "on": <shell_event_handler>,
    "sudo": <sudo>,
    "cache": <cache>
  }
}
```

- `<message>`: The message to enter into the shell. May be a string, or an array.
  - **string** => enters the message.
  - **array** => enters the messages in the array sequentially.
    - For example `"message": ["pip install -r requirements.txt", "pip install torch"]` will internally run: `pip install -r requirements.txt && pip install torch`
- `<path>` **(optional)**: The path from which to start the shell session (can be either a relative or absolute path).
  - **When NOT specified:** the shell starts from the same path as the currently running script.
  - **When specified:** the shell session starts from the specified path
- `<env>` **(optional)**: Environment variable key/value pairs.
  - when the key/value pairs are specified, the custom environment values are set.
  - when NOT specified, the shell uses the default environment
- `<venv_path>` **(optional)**: A declarative syntax for automatically creating or activating a venv environment at the specified path.
  - **When NOT specified (default):** Does not create or activate a venv and runs the shell session normally.
  - **When specified:** Creates a venv at the specified path if it doesn't exist yet, or if it exists, activates the existing venv at the specified path, and runs the shell session in that venv.
  - the shell automatically creates a venv environment at that path if it doesn't exist, then automatically activates the environment before running the command(s) specified by the `message` attribute.
- `<conda_config>` **(optional)**: Declarative syntax for defining the conda environment that will be activated for this shell session. Can be an object or a string.
  - **When NOT specified (default):** By default Pinokio installs a handful of essential modules in the `base` conda environment that's isolated to Pinokio (Even if you have a conda installed on your system globally, Pinokio will NOT use it and use the isolated conda built-into Pinokio).
  - **When specified:** The `<conda_config>` attribute can be a **string** or an **object**.
    - **string:** the `<conda_config>` is interpreted as the path in which the conda environment is stored. (Ex: if `"conda": "conda_env"`, the shell will activate the conda environment at the `conda_env` path).
    - **object:** In some cases you may want more advanced ways of creating/activating the conda environments declaratively. When the `<conda_config> is an **object** type instead of **string**, the following rules apply:
      - `path`: Same as when the `<conda_config>` is a string. Interpreted as the path in which the conda environment is stored. (Ex: if `"conda": "conda_env"`, the shell will activate the conda environment at the `conda_env` path).
      - `name`: the conda environment **name** to activate. Unlike activation by path, the environments created/activated this way are centrally stored under the `PINOKIO_HOME/bin/miniconda` folder.
      - `skip`: if set to `true`, do NOT activate ANY environment (By default this is set to `false`, and therefore every shell activates the Pinokio-global `base` conda environment every time unless you specify with the `params.conda` attribute.
      - `python`: The python version to install inside the environment (The default is `python=3.10` if not specified)

  - the shell automatically creates a conda enviornment at that path if it doesn't exist, then automatically activates the environment before running the command(s) specified by the `message` attribute.
- `<shell_event_handler>` **(optional)**: event handler for the shell. Can be used to parse the terminal when running `shell.run`. The parsed result can be passed down to the next API call in the `run` array as the `input` variable.
  - **if specified:** The shell keeps running until the specified pattern is met.
    - You may have multiple items in the `<shell_event_handler>` array. The first event to match will handle the event and move to the next step. An event handler object may have the following attributes:
      - `event`: a regular expression string to match.
      - `kill`, `done`, or `break`: describe the behavior for when the `event` match happens. Either kill the shell process and move on, keep it running and move on, or break and stop proceeding.
        - if `done: true` is set, keep the shell and the associated processes running and move onto the next step (Useful when you use the shell to launch some process that needs to keep running, such as web servers)
        - if `kill: true` is set, kill the shell session and all processes tied to the shell session before moving onto the next step. 
        - if `break: true` is set, stop the shell and display a blue screen (error display screen) with the matched event pattern highlighted. For example if you want to break and stop the script from proceeding when the shell encounters "Exception", you may specify `{ event: "/exception/i", break: true }`
        - if `break: false` is set, explicitly ignore the specified event pattern. For example, by default `/Error:/` is captured, but if you want the script to ignore when the terminal encounters an `Error: not critical` pattern, you can specify `{ event: "/error: not critical/i", break: false }`.
  - **if NOT specified (default):** The shell ends only when it reaches the next terminal prompt (when all the commands have finished running, which will trigger the prompt to display at the end again). 
- `<sudo>`: **(optional)** run in admin mode when set to `true`.
  - on mac and linux, it runs the command with `sudo <message>`
  - on windows, it runs the command in administrator mode
- `<cache>`: **(optional)** cache path
  - the following subfolders will be generated under the cache folder, which will be programmatically populated when the apps run:
    - `HF_HOME`: huggingface cache. used to store model files downloaded from huggingface.
    - `TORCH_HOME`: pytorch hub cache. used to store model files downloaded from torch hub
    - `GRADIO_TEMP_DIR`: gradio cache. used to store files processed by gradio

#### return value

- `input`:
  - `id`: The internal shell ID
  - `stdout`: The raw shell content
  - `event`: If the `shell.run` call had an `on` shell parser attached, the return value will have an `event` attribute, which is the regular expression match object from the first matched pattern in the `<shell_event_handler>`.

**Example:**

When running:

```json
{
  "daemon": true,
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "python app.py",
      "venv": "env",
      "on": [{
        "event": "/http:\/\/[0-9.:]+/",
        "done": true
      }]
    }
  }, {
    "method": "local.set",
    "params": {
      "url": "{{input.event[0]}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "Running on {{local.url}}"
    }
  }]
}
```

The first step will return `input` as the following object:

```json
{
  "id": "8e04df87-9b97-4e80-8e77-9224fcb0204f",
  "stdout": "\r\nThe default interactive shell is now zsh.\r\nTo update your account to use zsh, please run `chsh -s /bin/zsh`.\r\nFor more details, please visit https://support.apple.com/kb/HT208050.\r\n<<PINOKIO SHELL>> eval \"$(conda shell.bash hook)\" && conda deactivate && conda deactivate && conda deactivate && conda activate base && source /Users/x/pinokiomaster/api/comfyui.git/app/env/bin/activate /Users/x/pinokiomaster/api/comfyui.git/app/env && python main.py --force-fp16\r\n** ComfyUI startup time: 2024-04-06 22:53:40.865398\r\n** Platform: Darwin\r\n** Python version: 3.10.12 (main, Jul  5 2023, 15:02:25) [Clang 14.0.6 ]\r\n** Python executable: /Users/x/pinokiomaster/api/comfyui.git/app/env/bin/python\r\n** Log path: /Users/x/pinokiomaster/api/comfyui.git/app/comfyui.log\r\n\r\nPrestartup times for custom nodes:\r\n   0.0 seconds: /Users/x/pinokiomaster/api/comfyui.git/app/custom_nodes/ComfyUI-Manager\r\n\r\nTotal VRAM 65536 MB, total RAM 65536 MB\r\nForcing FP16.\r\nSet vram state to: SHARED\r\nDevice: mps\r\nVAE dtype: torch.float32\r\nUsing sub quadratic optimization for cross attention, if you have memory or speed issues try using: --use-split-cross-attention\r\n### Loading: ComfyUI-Manager (V2.7.2)\r\n### ComfyUI Revision: 1969 [02409c30] | Released on '2024-02-12'\r\n\r\nImport times for custom nodes:\r\n   0.1 seconds: /Users/x/pinokiomaster/api/comfyui.git/app/custom_nodes/ComfyUI-Manager\r\n\r\nStarting server\r\n\r\nTo see the GUI go to: http://127.0.0.1:8188",
  "event": [
    "http://127.0.0.1:8188"
  ]
}
```

- As a result, the `local.url` will be set to `{{input.event[0]}}` which evaluates to `http://127.0.0.1:8188`.
- And finally the last `log` step will print:

```
Running on http://127.0.0.1:8188
```


#### examples

##### message

You can either pass one message (string), or multiple messages (array):

###### Single message

If the `message` attribute is a single string, it simply enters that line into the shell.

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "venv": "env",
      "message": "pip install -r requirements.txt"
    }
  }]
}
```

###### Multiple messages

If the `message` attribute is an array, it executes the commands in sequence.

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "venv": "env",
      "message": [
        "pip install -r requirements.txt",
        "pip install torch gradio"
      ]
    }
  }]
}
```

##### path

The path attribute is used to specify the path from which the shell starts.

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "path": "app",
      "message": "python app.py"
    }
  }]
}
```

In this example, the shell starts from the `app` folder, basically running python for the `app/app.py` file.

##### env

The env attribute can be used to inject custom environment variables when starting the shell.


```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "env": {
        "PYTORCH_ENABLE_MPS_FALLBACK": "1"
      },
      "message": "python app.py"
    }
  }]
}
```

In this example, the `PYTORCH_ENABLE_MPS_FALLBACK` environment variable is set to `"1"` before running `python app.py`.


##### venv

The venv attribute is used to declaratively activate a venv environment with just 1 line.

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "venv": ".env",
      "message": "python app.py"
    }
  }]
}
```

With just one line above, it either creates a venv at path `.env` (if it doesn't exist yet), and activates the environment for this specific shells session.

Basically, when the `.env` already exists, it's equivalent to:

```
source .env/bin/activate
python app.py
```

And when the `.env` doesn't exist, it's equivalent to:

```
python -m venv .env
source .env/bin/activate
python app.py
```

But you don't have to worry about any of this since with just one line `"venv": ".env"` this is handled automatically.

Note that the venv environment is ephemeral to the `shell.run` call, so when that shell session ends, the venv is no longer active.

For example:

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "venv": "env1",
      "message": "python app.py"
    }
  }, {
    "method": "shell.run",
    "params": {
      "venv": "env2",
      "message": "python app.py"
    }
  }]
}
```

in the example above, the first `shell.run` runs in `env1` environment, whereas the second `shell.run` runs in `env2` environment. The two shell sessions are completely independent from each other.

##### conda

The conda attribute

###### 1. default is base

By default if you do not specify any `conda` attribute in `shell.run`, it will automatically activate the Pinokio-sandboxed `base` environment.

> Even if you have a globally installed conda, it will NOT use your system-wide base environment, but use Pinokio's own base environment. This is to ensure everything works exactly the same for every user in every system.

For example the following will automatically activate the Pinokio `base` environment before starting the shell (which you can find in `/PINOKIO_HOME/bin/miniconda`):

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "python app.py"
    }
  }]
}
```

###### 2. specifying custom conda environment path

You can also create and/or activate a custom conda environment at a specific path:

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "conda": "conda_env",
      "message": "python app.py"
    }
  }]
}
```

Above script will:

1. First check if there's a conda environment at path `conda_env` (relative to the current folder)
2. If there is one, activate the environment
3. If there is no conda environment there, create a conda environment at the location and activate it.
4. Finally start the shell session and run the command `python app.py`


###### 3. specifying custom conda environment by name

You can also create/activate a conda environment by name. In this case you will need to use the `object` syntax instead of using `string`.

The difference is, instead of storing the conda environment at a specific path, the environment will be stored inside `/PINOKIO_HOME/bin/miniconda`.

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "conda": {
        "name": "conda_env",
      },
      "message": "python app.py"
    }
  }]
}
```

> Writing scripts that create custom conda environments by name is not recommended, because of potential name collision issues. If you really must use conda, create custom conda environments using path instead.


###### 4. skip activating any conda environment

Normally you probably don't want to do this, but you can even avoid the default option of activating the `base` conda environment if you want.

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "conda": {
        "skip": true
      },
      "message": "python app.py"
    }
  }]
}
```


###### 5. custom conda environment with custom python

You can create a custom conda environment with a custom python version using the `conda.python` attribute:


```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "conda": {
        "path": "custom_python_conda_env",
        "python": "python=3.11"
      },
      "message": "python app.py"
    }
  }]
}
```



##### on

The `on` attribute lets you implement a realtime shell parser.

1. Monitor the shell content in realtime
2. When one of the specified events match, move on to the next step along with the matched pattern as `input.event`
3. Additionally, specify whether to kill the shell process (`kill`) or keep it running (`done`)

###### 1. keep the shell process running and move on

```json
{
  "daemon": true,
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "python app.py",
      "venv": "env",
      "on": [{
        "event": "/http:\/\/[0-9.:]+/",
        "done": true
      }]
    }
  }, {
    "method": "local.set",
    "params": {
      "url": "{{input.event[0]}}"
    }
  }]
}
```

Explanation:

1. **method:** Run a command with `shell.run` that starts a web server (`python app.py`)
2. **venv:** The shell is automatically activated to the venv at path `env` (relative path).
3. **on:** The `on` handler takes an array of multiple possible events (In this case just one event).
    - **event** The shell keeps running until the regular expression `/http:\/\/[0-9.:]+/`,
    - **done:** Since `done: true` is set, the behavior is to move onto the next RPC call while keeping the shell process running. This is needed because we want the `python app.py` process to keep running (it's a web server).
        - The return value of this method is `{ id, stdout, event }` where:
          - `id`: the id of the terminal
          - `stdout`: the full content of the terminal
          - `event`: the regular expression match object (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match).
4. In the next step `local.set`, the `input` variable passed in from the previous step contains `{ id, stdout, event }` attributes.
    - The `input.event` attribute is the regular expression match array from the previous step (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match).
    - we use the `input.event[0]` to set the `local.url` local variable.

###### 2. kill the shell process and move on

Example:

```json
{
  "daemon": true,
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "python app.py",
      "venv": "env",
      "on": [{
        "event": "/http:\/\/[0-9.:]+/",
        "kill": true
      }]
    }
  }, {
    "method": "local.set",
    "params": {
      "url": "{{input.event[0]}}"
    }
  }]
}
```

Same as the `done: true` case, but in this case, the `kill: true` is set, therefore when the `event` match happens, the shell session as well as all its associated processes are shut down before moving onto the next step.


###### 3. stop the shell and display an error screen


Example:

```json
// break.js
module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "{{platform === 'win32' ? 'dir' : 'ls'}}",
      on: [{
        event: "/break.*js/",
        break: true
      }]
    }
  }]
}
```

Above script:

1. runs "dir" (on windows) or "ls" (on linux or mac)
2. if it encounters the pattern `/break.*js/`, it breaks with the following blue screen with the matched event `break.js` highlighted:

![break.png](break.png)



#### sudo

Run shell commands in admin mode.

```json
{
  "run": [{
    "method": "shell.run",
    "params": {
      "sudo": true,
      "message": "reg add HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem /v LongPathsEnabled /t REG_DWORD /d 1 /f",
    }
  }]
}
```

In this case we are trying to set the registry value, which needs to be run in admin mode, and we can simply pass the `sudo: true` option to achieve this.

---

# Custom Script

The previous section discussed some of the built-in API methods available out of the box.

But you can even write your own custom JavaScript method that can be called using the same JSON-RPC syntax. There are two steps to writing your own API:


1. Write a JavaScript class with your own custom logic.
2. Call the JavaScript class through script.

## Quickstart

### 1. Write an API in JavaScript

The JavaScript file is where all the logic is written. It must follow the following convention:

```javascript
// api.js
// The class name can be anything, it doesn't matter
const fs = require('fs')
class API {
  // req: the request object, where the request.params contains the arguments passed in from an external script
  // ondata: can be used to print to the terminal
  // kernel: direct access to the kernel
  async custom_method(req, ondata, kernel) => {
    // Do stuff here. Here's an example
    let res = await fetch(req.params.url).then((res) => {
      return res.json()
    })
    await fs.promises.writeFile("result.json", JSON.stringify(res))
  }
}
module.exports = API
```

### 2. Call the API from Script

Now that we've written the logic, we can call it from any Pinokio script. The syntax is the same JSON-RPC syntax.

```json
{
  "method": <method_name>,
  "uri": <file_path>,
  "params": <params>
}
```

The difference in this case is, we have an additional `uri` attribute.

- `<method_name>`: The method name to call
- `<file_path>`: THe file path that contains the API class
- `<params>: The parameters to pass into the API class via `req.params`

For example, to call the `custom_method()` method in the `API` class above, we can do:

```json
{
  "run": [{
    "uri": "api.js",
    "method": "custom_method",
    "params": {
      "url": "https://jsonplaceholder.typicode.com/todos/1"
    }
  }]
}
```

This will call the `custom_method()` of the `API` class inside the `api.js` file.

It will pass in `https://jsonplaceholder.typicode.com/todos/1` through the params, so the `req.params.url` will be `https://jsonplaceholder.typicode.com/todos/1`.

## Example

### Writing a browser automation API

Let's say you want to write an API that accepts a URL and opens that URL in a browser automatically.

We can use the `kernel.playwright` variable to use the [Playwright](https://playwright.dev/) that is included in Pinokio kernel. Let's create a `browser.js` file:

```javascript
// browser.js
class Browser {
  async open(req, ondata, kernel) {
    let { firefox } = kernel.playwright
    const browser = await firefox.launch({ headless: false, });
    const context = await browser.newContext({ viewport: null })
    const page = await context.newPage()
    await page.goto(req.params.url)
  }
}
module.exports = Browser
```

Now we can call this from a script:

```json
{
  "run": [{
    "uri": "browser.js",
    "method": "open",
    "params": {
      "url": "https://pinokio.computer"
    }
  }]
}
```

This will pass in `req.params.url` as `https://pinokio.computer` into the `open()` method in the `browser.js` class, which automatically launches a firefox browser and navigates to the `req.params.url` URL.


---

# UI

The RPC API lets you automatically run things. But we also need a user interface to interact with them.

<img src="monitor.png" class='fixed'>

Just like `scripts`, you can write a UI using nothing but JSON (or JavaScript).

## components

For every project, you just need to think about three UI components:

1. **shortcut:** displayed on the home page. Can be configured with [pinokio.js](#pinokiojs)
2. **app:** The actual UI layout. Can be configured with [pinokio.js](#pinokiojs)
3. **info:** listed on the discover page and on https://pinokio.computer. Can be configured with [pinokio_meta.json](#pinokio_metajson)

### 1. shortcut

how the app is displayed on pinokio once downloaded. You can script this with [pinokio.js](#pinokiojs)

![ui0.png](ui0.png)

### 2. app

what the installed app page looks like.

You can script this with [pinokio.js](#pinokiojs).

![ui1.png](ui1.png)

### 3. info

how the app is displayed on the discover page and on https://pinokio.computer.

You can script this with [pinokio_meta.json](#pinokio_metajson).

![ui2.png](ui2.png)

---


## pinokio.js

Building a UI requires only a single file named `pinokio.js`. Simply place a file named `pinokio.js` in the project root folder.

The `pinokio.js` file describes both:

1. **Shortcut UI**
2. **App UI**

> **What if there is no `pinokio.js` file?**
>
> In this case, Pinokio will do its best to generate a minimal UI for you:
> 
> 1. The shortcut UI will simply display the folder name as its title, and a default icon.
> 2. The app UI will display all `js` or `json` files inside the project root folder.

But in most cases you will want to write a simple `pinokio.js` file to build your own custom UI.


### syntax

```javascript
module.exports = {
  "version": <script_schema_version>,
  "title": <title>,
  "icon": <icon>,
  "description": <description>,
  "menu": <menu>,
  "pre": <pre>,
  "start": <start>
}
```

- `<script_schema_version>`: The schema version used (**the latest version is `"2.0"`**)
- `<title>`: The title of the app
- `<description>`: the description of the app
- `<icon>`: the filepath of the icon image (example `icon.png`, `icon.jpeg`, `icon.gif`, `icon.webp`, etc)
- `<menu>`: An **array** of tab items, or an **async function** that takes `kernel` and `info` as arguments and returns the same tab items array. Each item in the array may have the following attributes:
    - `text`: The text to display on the tab.
    - `icon`: The icon file path to display on the tab.
    - `href`: The URL to open in the tab.
    - `params` (optional): The query parameters to pass to the tab.
      - If passed to a script, the `params` will be made available as the `input` variable inside the first step of the `run` script.
    - `popout` (optional): Opens the `href` link in an external browser instead of Pinokio if set to `true`
    - `menu` (optional): If specified, creates a nested menu. The nested menu follows the same specification as the top level menu (with `text`, `icon`, `href`, `params`, and `popout` attributes)
    - `default` (optional): If specified, this tab item is automatically selected by default. When the `href` attribute is a script URL, the selection also means the script will be automatically started. This can be used to implement automatically executing scripts.
- `<pre>`: (optional) Prerequisites. In case the script requires installation of 3rd party programs that cannot be easily installed through the script, you may specify a `pre` array to provide download links to the user before the installation starts. Each item in the `pre` array may have the following attributes:
    - `text`: The text to display for the item.
    - `icon`: The icon file path to display for the item.
    - `description`: The description.
    - `href`: The URL to open.
    - `fs`: open the file in a file explorer or the default app.
      - if set to `"open"`, opens the file
      - if set to `"view"`, opens in file explorer
      - if set to `true`, same as `"view"`. opens in file explorer.
     
- `<start>`: start script declaration. 
    - Types: can be a `string` or an `object`.
      - string: `url`
      - object: can have the following attributes:
        - `url`: the url
        - `params`: the params to pass to the url
  

---

### examples

#### Prerequisite apps

Let's say an app needs [Ollama](https://ollama.com) to run.

We can direct the user to install Ollama before installing the app, using the `<pre>` syntax in `pinokio.js`:

```javascript
module.exports = {
  version: "2.0",
  title: "LLM App",
  pre: [{
    icon: "ollama.png",
    title: "Ollama",
    description: "Get up and running with large language models.",
    href: "https://ollama.com/"
  }],
  ...
}
```

When this is downloaded, the user will be shown the following Prerequisites screen BEFORE the install screen:

![prerequisites.png](prerequisites.png)

#### Static menu

Here's a UI script for generating a minimal launcher UI:

```javascript
module.exports = {
  version: "2.0",
  title: "Test Launcher",
  description: "This is for testing a test launcher",
  icon: "icon.png",
  menu: [{
    icon: "fa-brands fa-google",  // see https://fontawesome.com/icons/google?f=brands&s=solid
    text: "Open Google",
    href: "https://google.com",
  }, {
    icon: "fa-brands fa-discord",
    text: "Open Discord in New Window",
    href: "https://discord.gg/TQdNwadtE4",
    popout: true    // "popout": true => opens the link in an external browser instead of as a Pinokio tab.
  }]
}
```

#### Dynamic menu

The sidebar menu is automatically re-rendered every time a step in the currently running script finishes.

This means you can write the `pinokio.js` file so it automatically displays relevant items in realtime.

![dynamicmenu.gif](dynamicmenu.gif)

For example, when the app is running, you may want to display a link to open the actual web UI. Or when the app is not running, you may want to display a "Start" button instead.

We can achieve this type of dynamic menu rendering by using a function instead of array. Instead of setting a static `menu` array, set the `menu` as an `async` function that takes `kernel` and `info` as an arguments.

You can use the `info` variable to get various types of status information about the files and scripts:

- `info.local(filepath)`: get the local variable object of a script running at `filepath`.
- `info.running(filepath)`: get the running status of a script at `filepath`.
- `info.exists(filepath)`: check if a file exists at `filepath`.
- `info.path(filepath)`: get the absolute path of a `fileapth`.

Check out an example below, where it makes use of the `info` API to determine whether `install.json` or `start.json` scripts are running, and if they are, get the local variable in memory, etc.


```javascript
const path = require("path")
module.exports = {
  version: "2.0",
  title: "InvokeAI",
  description: "Generative AI for Professional Creatives",
  icon: "icon.jpeg",
  menu: async (kernel, info) => {
    /**********************************************************************************************
      info has 4 methods (where `filepath` may be a relative path or an absolute path.):
        - info.local(filepath): get the local variable object of a script running at `filepath`.
        - info.running(filepath): get the running status of a script at `filepath`.
        - info.exists(filepath): check if a file exists at `filepath`.
        - info.path(filepath): get the absolute path of a `fileapth`.
    **********************************************************************************************/
    let installing = info.running("install.json")
    let installing = info.running("install.json")
    let installed = info.exists("app/env")
    if (installing) {
      return [{ icon: "fa-solid fa-plug", text: "Installing...", href: "install.json" }]
    } else if (installed) {
      let running = info.running("start.json")
      if (running) {
        let memory = info.local("start.json")
        if (memory && memory.url) {
          return [
            { icon: "fa-solid fa-rocket", text: "Web UI", href: memory.url },
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json" },
            { icon: "fa-solid fa-rotate", text: "Update", href: "update.json" },
          ]
        } else {
          return [
            { icon: "fa-solid fa-terminal", text: "Terminal", href: "start.json" },
            { icon: "fa-solid fa-rotate", text: "Update", href: "update.json" },
          ]
        }
      } else {
        return [{
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.json",
        }, {
          icon: "fa-solid fa-rotate", text: "Update", href: "update.json"
        }, {
          icon: "fa-solid fa-plug", text: "Reinstall", href: "install.json"
        }, {
          icon: "fa-solid fa-broom", text: "Factory Reset", href: "reset.json"
        }]
      }
    } else {
      return [
        { icon: "fa-solid fa-plug", text: "Install", href: "install.json" },
        { icon: "fa-solid fa-rotate", text: "Update", href: "update.json" }
      ]
    }
  }
}
```

Based on the determined app status, the dynamic `menu` function can generate menu items.

1. check whether a file/folder exists at a path: `info.exists()`
2. check if a script at a specified path is running: `info.running()`
3. get the local variables object for a script at specified path: `info.local()`

---

#### Nested menu

You can nest the `menu` array into another `menu` (up to level 2)

![nestedmenu.gif](nestedmenu.gif)

```javascript
module.exports = {
  title: "Test Launcher",
  description: "This is for testing a test launcher",
  icon: "icon.png",
  menu: [{
    icon: "fa-solid fa-download",
    text: "Download Models",
    menu: [
      { text: "Download by URL", icon: "fa-solid fa-download", href: "download.html?raw=true" },
      { text: "SDXL", icon: "fa-solid fa-download", href: "download-sdxl.json", mode: "refresh" },
      { text: "SDXL Turbo", icon: "fa-solid fa-download", href: "download-turbo.json", mode: "refresh" },
      { text: "Stable Video XT", icon: "fa-solid fa-download", href: "download-svd-xt.json", mode: "refresh" },
      { text: "Stable Video", icon: "fa-solid fa-download", href: "download-svd.json", mode: "refresh" },
      { text: "Stable Video XT 1.1", icon: "fa-solid fa-download", href: "download-svd-xt-1.1.json", mode: "refresh" },
      { text: "LCM LoRA", icon: "fa-solid fa-download", href: "download-lcm-lora.json", mode: "refresh" },
      { text: "SD 1.5", icon: "fa-solid fa-download", href: "download-sd15.json", mode: "refresh" },
      { text: "SD 2.1", icon: "fa-solid fa-download", href: "download-sd21.json", mode: "refresh" },
      { text: "Playground2.5 fp16", icon: "fa-solid fa-download", href: "download-playground-fp16.json", mode: "refresh" },
      { text: "Playground2.5", icon: "fa-solid fa-download", href: "download-playground.json", mode: "refresh" },

    ]
  }]
}
```

---

#### Auto-execution

Using the `default` attribute, it is possible to implement auto-executing scripts.

For example, let's say we want the following behavior:

- run `install.js` if `app/env` does not exist.
- run `start.js` if `app/env` exists, and `start.js` is not already running.

```javascript
module.exports = {
  title: "Auto Launcher",
  icon: "icon.png",
  menu: async (kernel, info) => {
    if (info.exists("app/env")) {
      // already installed. select the "start.js", automatically running `start.js`
      return [{
        text: "Install",
        href: "install.js"
      }, {
        default: true,
        text: "Start",
        href: "start.js"
      }]
    } else {
      // not installed yet. select the install.js tab.
      return [{
        default: true,
        text: "Install",
        href: "install.js"
      }, {
        text: "Start",
        href: "start.js"
      }]
    }
  }
}
```

---

## pinokio_meta.json

### syntax

```json
{
  "posts": [
    <x.com url>,
    <x.com url>,
    ...
  }]
  "links": [
    {
      "title": <title>
      "value": <value>
    },
    {
      "title": <title>
      "links": [
        {
          "title": <title>
          "value": <value>
        },
        ...
      ]
    },
    ...
  ]
}
```

- `"posts"`: the items in this array will be displayed in the Newsfeed section.
  - `<x.com url>`: include any x.com post here and they will be rendered in the Newsfeed section.
- `"links"`: the items in this array will be displayed in the right sidebar on the info page.
  - `<title>`: The title of the link
  - `<value>`: The URL of the link
  - `<links>`: Create a nested `"links"` array

---

### examples

> Before we go in, you can check out an actual pinokio_meta.json in production at:
> https://github.com/pinokiofactory/wan/blob/main/pinokio_meta.json
>
> and the published result at: https://pinokio.computer/item?uri=https://github.com/pinokiofactory/wan

#### Newsfeed

The newsfeed section can be populated simply by adding x.com links to the `"posts"` array in the `pinokio_meta.json` file:

![feed.png](feed.png)

```json
{
  "posts": [
    "https://x.com/cocktailpeanut/status/1901791032947450088",
    "https://x.com/cocktailpeanut/status/1901748455418347554",
    "https://x.com/cocktailpeanut/status/1901698217831703023",
    "https://x.com/TheAwakenOne619/status/1901389626931318923",
    "https://x.com/cocktailpeanut/status/1901373187667222923",
    "https://x.com/hasigoki/status/1901296301301731620",
    "https://x.com/cocktailpeanut/status/1901092072263922062",
    "https://x.com/cocktailpeanut/status/1901058105934573799",
    "https://x.com/cocktailpeanut/status/1900995261947932714",
    "https://x.com/cocktailpeanut/status/1901037301989515373",
    "https://x.com/cocktailpeanut/status/1900630168638812243",
    "https://x.com/cocktailpeanut/status/1900603261352374405",
    "https://x.com/cocktailpeanut/status/1900589434153869378",
    "https://x.com/Gun_ther/status/1900363944578990399",
    "https://x.com/napoleon21st/status/1900423646960902614",
    "https://x.com/GorillaRogueGam/status/1900956591530103110",
    "https://x.com/DavidFSWD/status/1901096862352110092",
    "https://x.com/cocktailpeanut/status/1900237861955527161",
    "https://x.com/cocktailpeanut/status/1897017429433442429",
    "https://x.com/dgoldwas/status/1897005272453054671",
    "https://x.com/dgoldwas/status/1896999854418940049",
    "https://x.com/cocktailpeanut/status/1896977467031871632",
    "https://x.com/cocktailpeanut/status/1896968455280349548",
    "https://x.com/lmontoya/status/1896837315634557412",
    "https://x.com/Teslanaut/status/1896837830099468759",
    "https://x.com/deepbeepmeep/status/1896681152024563765",
    "https://x.com/cocktailpeanut/status/1896669569626099988",
    "https://x.com/deepbeepmeep/status/1896264231122772069"
  ]
}
```

#### Links

##### Simple Info Links

Just by setting the `"links"` array, you can display as many links as you want:

![links0.png](links0.png)

```json
{
  "links": [{
    "title": "Github",
    "value": "https://github.com/ai-anchorite"
  }]
}
```


##### Nested Info Links

Sometimes you want to add some structure to the links by creating multiple sections. You can simply nest the `"links"` array inside a `"links"` array to achieve this:

![links1.png](links1.png)

```json
{
  "links": [{
    "title": "deepbeepmeep (wrote the app)",
    "links": [{
      "title": "X",
      "value": "https://x.com/deepbeepmeep"
    }, {
      "title": "Github",
      "value": "https://github.com/deepbeepmeep"
    }]
  }, {
    "title": "cocktailpeanut (wrote the launcher)",
    "links": [{
      "title": "X",
      "value": "https://x.com/cocktailpeanut"
    }, {
      "title": "Github",
      "value": "https://github.com/cocktailpeanut"
    }, {
      "title": "Discord",
      "value": "https://discord.gg/TQdNwadtE4"
    }]
  }]
}
```

---

# ENVIRONMENT

While it's possible to customize script behaviors by directly modifying the script files, this is not desirable.

We want a way to customize an app's behavior WITHOUT touching the code. We can achieve this through `ENVIRONMENT`.

## Before

Let's say you want to write a script that automatically downloads an AI model to a specified directory (for example `models`). The script may look like this:

```json
{
  "run": [{
    "method": "fs.download",
    "params": {
      "uri": "https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors",
      "dir": "app/models/Stable-diffusion"
    }
  }]
}
```

The problem is, to change the behavior of this script, the end user will need to edit the URI using a file editor.

What if you wanted to let the end user modify the `uri`?

---

## After

If you want to write a script that can be easily customized by users, you may want to create a file named `_Environment` (Must be prefixed with `_`).

Here's an example `_ENVIRONMENT` file:

```
#####################################################################################################################
#
# SD_INSTALL_CHECKPOINT
# - Delete this field if you don't want to auto-download a checkpoint when installing
# - Replace the URL with another checkpoint link if you want a different checkpoint
#
#####################################################################################################################
SD_INSTALL_CHECKPOINT=https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors
```

Put this file inside the root of the script, along with `pinokio.js` and `download.json`, like this:

```
pinokio.js
download.json
_ENVIRONMENT
```

Then we can modify the `download.json` file like this:

```json
{
  "run": [{
    "method": "fs.download",
    "params": {
      "uri": "{{env.SD_INSTALL_CHECKPOINT}}",
      "dir": "app/models/Stable-diffusion"
    }
  }]
}
```

---

## Custom Install Screen

When you publish this repository, when the user installs the script, they will be shown the following custom install screen:

![custom_install.png](custom_install.png)

With a user-friendly interface, the user can customize which URL to use when first installing the app.

---

## Configure Menu

Also, after the install is complete, they will be able to access the same ENVIRONMENT editor under the **Configure** menu:

![configure.png](configure.png)

---

## How it works

The `_ENVIRONMENT` file you included is a **template file**. When a user downloads this script repository, here's what happens:

1. A new `ENVIRONMENT` file (note that there is no `_` prefix) is created by inheriting from the `_ENVIRONMENT` template file.
2. From this point on, `_ENVIRONMENT` is NOT used.
3. The `ENVIRONMENT` file is used to store the app's configuration going forward.
4. The user can edit the configuration by either DIRECTLY editing the `ENVIRONMENT` file, or by editing through the built-in `Configure` menu.

___

## Isolated Environment for Each App

These environment variables are not some special purpose things JUST for Pinokio. They are internally powered by the widely adopted [Environment variable system](https://en.wikipedia.org/wiki/Environment_variable).


This means we can use the `ENVIRONMENT` file to not only customize the script behavior but also ANYTHING that happens inside the app. When would this be useful?

Often, apps have their own ways of configuring. For example, all [Gradio](https://www.gradio.app/) based apps let you [customize the app's behavior through environment variables](https://www.gradio.app/main/guides/environment-variables). Traditionally, running these apps in a customized manner involved either:

1. Changing the environment variables GLOBALLY.
2. or running environment shell commands like `export GRADIO_SERVER_PORT=8080`

Neither are ideal.

- Global environment variable update is bad because you may want to maintain different custom environment for each individual app.
- Having to run `export` commands is cumbersome and is NOT user friendly. You shouldn't have to touch the terminal.

Fortunately, Pinokio's `ENVIRONMENT` file takes care of this automatically.

Let's say we want to let users customize `GRADIO_SERVER_PORT` and `GRADIO_TEMP_DIR`. All you need to do to enable this is set those values in the `_ENVIRONMENT` file (or `ENVIRONMENT` file if the user is trying to customize this on their end):

```
GRADIO_SERVER_PORT=8080
GRADIO_TEMP_DIR=./cache/GRADIO
```

These variables will be immediately available for editing in the `Configure` menu, and whenever run any script from the repository, these custom environment variables will be automatically applied.


---

# Customization

## File System

Place custom files under your `PINOKIO_HOME/web` folder as follows:

```
~/pinokio
  /web
    config.json       # configure app chrome UI (close button, etc)
    /public           # Static Files
      browser.css     # Custom CSS for App Browser Page
      ...
    /views            # template files
      index.ejs       # home page template file
```

1. `index.ejs`: This is the home page template file. The template can display all the installed applications in whichever way you want.
2. `browser.css`: If you want to customize the app page style, you can override the default theme by overwriting CSS attributes in `browser.css`.

## Home Page

![customize_home.png](customize_home.png)

To customize the home page, you can write your own custom `index.ejs`. The template file can display the installed apps using the following attributes:

- `kernel`: kernel API
- `agent`: **"electron"** (running as an app) or **"web"** (running as a server)
- `items`: An array of installed app items
  - `icon`: `icon` value in `pinokio.js`
  - `name`: `name` value in `pinokio.js`
  - `description`: `description` value in `pinokio.js`
  - `path`: folder path
  - `url`: The app's URL. Open this URL to visit the app page.
  - `browse_url`: App URL WITHOUT running (Even if `PINOKIO_SCRIPT_DEFAULT` is set to **true**, it won't autorun)
  - `running`: `true` (if currently running) or `false`
  - `running_scripts`: An array of scripts that are currently running. Each item is made up of the following attributes:
    - `path`: The file path of the script that's running
    - `name`: The file name

You can do this by adding your own `/web/views/index.ejs` file. Here's an example:

```html
<html>
  <body>
    <header class='grabbable'></header>
    <main>
      <% items.forEach((item) => { %>
        <% if (item.running) { %>
          <a class='item running' data-browse-url="<%=item.browse_url%>" data-href="<%=item.url%    >" onclick="dblclick(event)">
            <img src="<%=item.icon%>"/>
            <div class='name'><%=item.name%></div>
          </a>
        <% } else { %>
          <a class='item' data-browse-url="<%=item.browse_url%>" data-href="<%=item.url%>" data-    name="<%=item.name%>" data-description="<%=item.description%>" data-path="<%=item.path%>"     onclick="dblclick(event)">
            <% if (item.icon) { %>
              <img src="<%=item.icon%>"/>
            <% } else { %>
              <img src="icon.png"/>
            <% } %>
            <div class='name'><%=item.name%></div>
          </a>
        <% } %>
      <% }) %>
    </main>
  </body>
</html>
```

---

## App Page

Each app page can be customized too.

Unlike the Home page, which can be completely customized with your own HTML, the app page currently allows only CSS customization.

You can do this by adding your own `/web/public/browser.css` file. Here's an example:

```css
body {
  background: firebrick !important;
  color: gold !important;
}
aside {
  background: transparent !important;
}
nav {
  background: none !important;
}
.header-item.btn {
  color: gold !important;
}
.btn2 {
  color: gold !important;
}
```

![theme.png](theme.png)

---

## Title Bar 


You can customize the title bar `color` and `symbolColor` (See https://www.electronjs.org/docs/latest/tutorial/custom-title-bar#custom-window-controls)

Just need to specify those attributes inside the `web/config.json` file

```json
{
  "color": "rgba(255,255,255,0)",
  "symbolColor": "white"
}
```

---

## Terminal

![customize_xterm.png](customize_xterm.png)

You can fully customize the terminal by setting the `xterm` attribute in the `web/config.json` file:



```json
{
  "color": "rgba(255,255,255,0)",
  "symbolColor": "white",
  "xterm": {
    "fontSize": 20,
    "theme": {
      "foreground": "#637d75",
      "background": "#0f1610",
      "cursor": "#73fa91",

      "black": "#112616",
      "brightBlack": "#3c4812",

      "red": "#7f2b27",
      "brightRed": "#e08009",

      "green": "#2f7e25",
      "brightGreen": "#18e000",

      "yellow": "#717f24",
      "brightYellow": "#bde000",

      "blue": "#2f6a7f",
      "brightBlue": "#00aae0",

      "magenta": "#47587f",
      "brightMagenta": "#0058e0",

      "cyan": "#327f77",
      "brightCyan": "#00e0c4",

      "white": "#647d75",
      "brightWhite": "#73fa91"

    }
  }
}
```
