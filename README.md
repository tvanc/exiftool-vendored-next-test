# Example of error in `exiftool-vendored`

This repository demonstrates a strange behavior encountered when using `exiftool-vendored` in a Docker container and in a Next.js application.

This same issue may exist with other frameworks or in other situations, but this is the context in which I encountered it.

## `exiftool-vendored` fails when called within Next.js

1. `cd` into this repository's root directory.
2. Run this command
    ```bash
    docker compose up -d
    ```
3. Open [http://localhost:3001](http://localhost:3001) in your browser
4. Observe the error: `BatchCluster has ended, cannot enqueue …`

Open [`src/app/page.tsx`](src/app/page.tsx) to see the code that triggers this error.

## `exiftool-vendored` succeeds when called directly from node.js script

1. Run this command
    ```bash
    node test.ts
    ```
2. Observe the tags from the video included in this repo, `MVI_1361.MOV`, output in JSON format. 

## `exiftool-vendored` also succeeds when served directly from WSL instead of Docker

1. Destroy the docker container
   ```bash
   docker compose down
   ```
2. Start the Next.js server
   ```bash
   npm run dev
   ```
3. If you're on WSL, Get your distro's IP address:
   ```bash
   ip a | grep -Po 'inet \K[\d.]+(?=.*eth0)'
   ```
4. Visit localhost:3001 or the IP address from step three in your browser. Don't forget to include port 3001. You may need to configure Windows to [forward that port](https://gist.github.com/xmeng1/aae4b223e9ccc089911ee764928f5486?permalink_comment_id=4939664#gistcomment-4939664).
5. Observe that the browser displays the tags from the included video.
