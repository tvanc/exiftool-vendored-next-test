# Example of error in `exiftool-vendored`

This repository demonstrates a failure state in `exiftool-vendored` when used in a Docker container and in a Next.js application.

This same issue may exist with other frameworks or in other situations, but this is the context in which I encountered it.

There are two error states:
1. `exiftool.read(…)` hangs forever
2. `exiftool.read(…)` errors out immediately

## `exiftool-vendored` hangs forever

1. `cd` into this repository's root directory.
2. Run this command
    ```bash
    docker compose up -d
    ```
3. Open [http://localhost:3001](http://localhost:3001) in your browser
4. Observe that a response is never returned. 

Open [`src/app/page.tsx`](src/app/page.tsx) to see the code that triggers this error.

## `exiftool-vendored` errors out immediately

1. Open a shell into the container
    ```bash
    docker exec -it exiftool-vendored-next-test-exiftool-vendored-next-test-1 sh
    ```
2. Run `node test.ts`
3. The tags from the included video display immediately.
4. Reload [localhost:3001](http://localhost:3001) in your browser
5. Observe the error: `BatchCluster has ended, cannot enqueue …`

---

## `exiftool-vendored` _succeeds_ when used without Docker

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
4. Visit [localhost:3001](http://localhost:3001) or the IP address from step three in your browser. Don't forget to include port 3001. You may need to configure Windows to [forward that port](https://gist.github.com/xmeng1/aae4b223e9ccc089911ee764928f5486?permalink_comment_id=4939664#gistcomment-4939664).
5. Observe that the browser displays the tags from the included video.
