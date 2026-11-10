# dsh-studio-film

[简体中文](README.zh.md)

## Repository

- Repository name: `dsh-studio-film`
- Repository description: PRINTFILM studio adapter for scripts, episodes, storyboards, asset management and video production tasks.
- Source: `https://github.com/1997liuyh-boop/dsh-studio-film`
- Upstream: `https://github.com/yi1108/printfilm`, locked in `UPSTREAM.json`.

## Features

- Manage projects, stories, scenes, characters and production notes.
- Organize episodes and shots with image direction, dialogue, duration and status.
- Manage character, scene, prop, image, audio and video assets.
- Bridge the original application's generation, preview, export and task status into DSH.
- Use a bound DSH session for messages, model state, tool results and stop operations.
- Show real service and database failures with a retry path; no sample data is presented as connected.

## Installation

Install the control bundle, then this exact studio tag through the official Desktop plugin manager after fully quitting Desktop:

```powershell
& "<Desktop install directory>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-library#v0.1.3"
& "<Desktop install directory>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop add "github:1997liuyh-boop/dsh-studio-film#v0.2.2"
& "<Desktop install directory>\resources\runtime\cli\bin\dsh.cmd" plugin --profile desktop list
```

Verify `main: lib/index.js`, `exports./client: lib/client.js`, `dsh.bundle.patch: ./cordis.patch.yml` and the built `static` entry. Install and configure the PRINTFILM service, database and video-generation service separately, then restart Desktop.

### Service setup

The plugin does not ship the PRINTFILM service. Prepare the pinned upstream source in a new absolute directory, then follow its own documentation to install dependencies and start the service:

```powershell
node scripts/prepare-upstream.mjs film "C:\work\printfilm"
```

Configure the DSH host with `printfilmUrl`, or set `DSH_STUDIO_PRINTFILM_URL` to the service origin. The default origin is `http://127.0.0.1:33102`; the upstream service, database and video-generation provider must be running before opening the studio.

## Requirements and limits

The adapter does not download personal projects, import accounts or start external services. Service and database failures limit the studio to status and retry views. Third-party applications and assets keep their own licenses; see `THIRD_PARTY_NOTICES.md`.

## License and sources

MIT licensed. The upstream source, locked revision and adaptation patches are recorded in `UPSTREAM.json` and `patches/`.
