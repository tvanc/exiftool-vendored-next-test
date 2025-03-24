import {exiftool} from "exiftool-vendored";

export default async function Home() {
  const tags = await exiftool.read('./MVI_1361.MOV')

  return (
    <pre>
      {JSON.stringify(tags, null, 2)}
    </pre>
  );
}
