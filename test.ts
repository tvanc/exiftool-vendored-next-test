import {exiftool} from "exiftool-vendored";

const tags = await exiftool.read('./MVI_1361.MOV');

console.log(tags);
