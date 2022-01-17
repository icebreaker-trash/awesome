import { reporter } from "vfile-reporter";
import { rehype } from "rehype";

rehype()
  .process("<title>Hi</title><h2>Hello world!")
  .then((file) => {
    console.log(reporter(file));
    console.log(String(file));
  });
