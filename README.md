# Example of error in `exiftool-vendored`

This repository demonstrates a strange behavior encountered when using `exiftool-vendored`
in a Next.js application.

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
