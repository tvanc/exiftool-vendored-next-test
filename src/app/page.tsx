import {exiftool} from "exiftool-vendored";

export default async function Home() {
  const tags = await exiftool.read('./MVI_1361.MOV')
  await exiftool.end();

  return (
    <pre>
      {JSON.stringify(tags, null, 2)}
    </pre>
  );
}
