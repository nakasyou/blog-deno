// Copyright 2022 the Deno authors. All rights reserved. MIT license.
import { join, resolve } from "https://deno.land/std@0.153.0/path/mod.ts";
const HELP = `deno_blog

Initialize a new blog project. This will create all the necessary files for
a new blog.

To generate a blog in the './my_blog' subdirectory:
  deno run ${import.meta.url} ./my_blog

To generate a blog in the current directory:
  deno run ${import.meta.url} .

Print this message:
  deno run ${import.meta.url} --help
`;
const CURRENT_DATE = new Date();
const CURRENT_DATE_STRING = CURRENT_DATE.toISOString().slice(0, 10);
const FIRST_POST_CONTENTS = `---
title: Hello world!
publish_date: ${CURRENT_DATE_STRING}
---

This is my first blog post!
`;
const MAIN_NAME = "main.tsx";
const MAIN_CONTENTS = `/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "My Blog",
  description: "This is my new blog.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "An author",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
`;
const DENO_JSONC_NAME = "deno.jsonc";
const DENO_JSONC_CONTENTS = `{
  "tasks": {
    "dev": "deno run --allow-net --allow-read --allow-env --watch main.tsx --dev",
    "serve": "deno run --allow-net --allow-read --allow-env --no-check main.tsx",
  },
  "importMap": "./import_map.json"
}
`;
const IMPORT_MAP_JSON_NAME = "import_map.json";
const IMPORT_MAP_JSON_CONTENTS = `{
  "imports": {
    "blog": "https://deno.land/x/blog@0.4.2/blog.tsx"
  }
}
`;
async function init(directory) {
    directory = resolve(directory);
    console.log(`Initializing blog in ${directory}...`);
    try {
        const dir = [
            ...Deno.readDirSync(directory)
        ];
        if (dir.length > 0) {
            const confirmed = confirm("You are trying to initialize blog in an non-empty directory, do you want to continue?");
            if (!confirmed) {
                throw new Error("Directory is not empty, aborting.");
            }
        }
    } catch (err) {
        if (!(err instanceof Deno.errors.NotFound)) {
            throw err;
        }
    }
    await Deno.mkdir(join(directory, "posts"), {
        recursive: true
    });
    await Deno.writeTextFile(join(directory, "posts/hello_world.md"), FIRST_POST_CONTENTS);
    await Deno.writeTextFile(join(directory, MAIN_NAME), MAIN_CONTENTS);
    await Deno.writeTextFile(join(directory, DENO_JSONC_NAME), DENO_JSONC_CONTENTS);
    await Deno.writeTextFile(join(directory, IMPORT_MAP_JSON_NAME), IMPORT_MAP_JSON_CONTENTS);
    console.log("Blog initialized, run `deno task dev` to get started.");
}
function printHelp() {
    console.log(HELP);
    Deno.exit(0);
}
if (import.meta.main) {
    if (Deno.args.includes("-h") || Deno.args.includes("--help")) {
        printHelp();
    }
    const directory = Deno.args[0];
    if (directory == null) {
        printHelp();
    }
    await init(directory);
} else {
    throw new Error("This module is meant to be executed as a CLI.");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBzOi8vZGVuby5sYW5kL3gvYmxvZ0AwLjUuMC9pbml0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAyMDIyIHRoZSBEZW5vIGF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIE1JVCBsaWNlbnNlLlxuXG5pbXBvcnQgeyBqb2luLCByZXNvbHZlIH0gZnJvbSBcImh0dHBzOi8vZGVuby5sYW5kL3N0ZEAwLjE1My4wL3BhdGgvbW9kLnRzXCI7XG5cbmNvbnN0IEhFTFAgPSBgZGVub19ibG9nXG5cbkluaXRpYWxpemUgYSBuZXcgYmxvZyBwcm9qZWN0LiBUaGlzIHdpbGwgY3JlYXRlIGFsbCB0aGUgbmVjZXNzYXJ5IGZpbGVzIGZvclxuYSBuZXcgYmxvZy5cblxuVG8gZ2VuZXJhdGUgYSBibG9nIGluIHRoZSAnLi9teV9ibG9nJyBzdWJkaXJlY3Rvcnk6XG4gIGRlbm8gcnVuICR7aW1wb3J0Lm1ldGEudXJsfSAuL215X2Jsb2dcblxuVG8gZ2VuZXJhdGUgYSBibG9nIGluIHRoZSBjdXJyZW50IGRpcmVjdG9yeTpcbiAgZGVubyBydW4gJHtpbXBvcnQubWV0YS51cmx9IC5cblxuUHJpbnQgdGhpcyBtZXNzYWdlOlxuICBkZW5vIHJ1biAke2ltcG9ydC5tZXRhLnVybH0gLS1oZWxwXG5gO1xuXG5jb25zdCBDVVJSRU5UX0RBVEUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgQ1VSUkVOVF9EQVRFX1NUUklORyA9IENVUlJFTlRfREFURS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuY29uc3QgRklSU1RfUE9TVF9DT05URU5UUyA9IGAtLS1cbnRpdGxlOiBIZWxsbyB3b3JsZCFcbnB1Ymxpc2hfZGF0ZTogJHtDVVJSRU5UX0RBVEVfU1RSSU5HfVxuLS0tXG5cblRoaXMgaXMgbXkgZmlyc3QgYmxvZyBwb3N0IVxuYDtcblxuY29uc3QgTUFJTl9OQU1FID0gXCJtYWluLnRzeFwiO1xuY29uc3QgTUFJTl9DT05URU5UUyA9IGAvKiogQGpzeCBoICovXG5cbmltcG9ydCBibG9nLCB7IGdhLCByZWRpcmVjdHMsIGggfSBmcm9tIFwiYmxvZ1wiO1xuXG5ibG9nKHtcbiAgdGl0bGU6IFwiTXkgQmxvZ1wiLFxuICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIG15IG5ldyBibG9nLlwiLFxuICAvLyBoZWFkZXI6IDxoZWFkZXI+WW91ciBjdXN0b20gaGVhZGVyPC9oZWFkZXI+LFxuICAvLyBzZWN0aW9uOiA8c2VjdGlvbj5Zb3VyIGN1c3RvbSBzZWN0aW9uPC9zZWN0aW9uPixcbiAgLy8gZm9vdGVyOiA8Zm9vdGVyPllvdXIgY3VzdG9tIGZvb3RlcjwvZm9vdGVyPixcbiAgYXZhdGFyOiBcImh0dHBzOi8vZGVuby1hdmF0YXIuZGVuby5kZXYvYXZhdGFyL2Jsb2cuc3ZnXCIsXG4gIGF2YXRhckNsYXNzOiBcInJvdW5kZWQtZnVsbFwiLFxuICBhdXRob3I6IFwiQW4gYXV0aG9yXCIsXG5cbiAgLy8gbWlkZGxld2FyZXM6IFtcblxuICAgIC8vIElmIHlvdSB3YW50IHRvIHNldCB1cCBHb29nbGUgQW5hbHl0aWNzLCBwYXN0ZSB5b3VyIEdBIGtleSBoZXJlLlxuICAgIC8vIGdhKFwiVUEtWFhYWFhYWFgtWFwiKSxcblxuICAgIC8vIElmIHlvdSB3YW50IHRvIHByb3ZpZGUgc29tZSByZWRpcmVjdGlvbnMsIHlvdSBjYW4gc3BlY2lmeSB0aGVtIGhlcmUsXG4gICAgLy8gcGF0aG5hbWUgc3BlY2lmaWVkIGluIGEga2V5IHdpbGwgcmVkaXJlY3QgdG8gcGF0aG5hbWUgaW4gdGhlIHZhbHVlLlxuICAgIC8vIHJlZGlyZWN0cyh7XG4gICAgLy8gIFwiL2hlbGxvX3dvcmxkLmh0bWxcIjogXCIvaGVsbG9fd29ybGRcIixcbiAgICAvLyB9KSxcblxuICAvLyBdXG59KTtcbmA7XG5cbmNvbnN0IERFTk9fSlNPTkNfTkFNRSA9IFwiZGVuby5qc29uY1wiO1xuY29uc3QgREVOT19KU09OQ19DT05URU5UUyA9IGB7XG4gIFwidGFza3NcIjoge1xuICAgIFwiZGV2XCI6IFwiZGVubyBydW4gLS1hbGxvdy1uZXQgLS1hbGxvdy1yZWFkIC0tYWxsb3ctZW52IC0td2F0Y2ggbWFpbi50c3ggLS1kZXZcIixcbiAgICBcInNlcnZlXCI6IFwiZGVubyBydW4gLS1hbGxvdy1uZXQgLS1hbGxvdy1yZWFkIC0tYWxsb3ctZW52IC0tbm8tY2hlY2sgbWFpbi50c3hcIixcbiAgfSxcbiAgXCJpbXBvcnRNYXBcIjogXCIuL2ltcG9ydF9tYXAuanNvblwiXG59XG5gO1xuXG5jb25zdCBJTVBPUlRfTUFQX0pTT05fTkFNRSA9IFwiaW1wb3J0X21hcC5qc29uXCI7XG5jb25zdCBJTVBPUlRfTUFQX0pTT05fQ09OVEVOVFMgPSBge1xuICBcImltcG9ydHNcIjoge1xuICAgIFwiYmxvZ1wiOiBcImh0dHBzOi8vZGVuby5sYW5kL3gvYmxvZ0AwLjQuMi9ibG9nLnRzeFwiXG4gIH1cbn1cbmA7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoZGlyZWN0b3J5OiBzdHJpbmcpIHtcbiAgZGlyZWN0b3J5ID0gcmVzb2x2ZShkaXJlY3RvcnkpO1xuXG4gIGNvbnNvbGUubG9nKGBJbml0aWFsaXppbmcgYmxvZyBpbiAke2RpcmVjdG9yeX0uLi5gKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBkaXIgPSBbLi4uRGVuby5yZWFkRGlyU3luYyhkaXJlY3RvcnkpXTtcbiAgICBpZiAoZGlyLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IGNvbmZpcm0oXG4gICAgICAgIFwiWW91IGFyZSB0cnlpbmcgdG8gaW5pdGlhbGl6ZSBibG9nIGluIGFuIG5vbi1lbXB0eSBkaXJlY3RvcnksIGRvIHlvdSB3YW50IHRvIGNvbnRpbnVlP1wiLFxuICAgICAgKTtcbiAgICAgIGlmICghY29uZmlybWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpcmVjdG9yeSBpcyBub3QgZW1wdHksIGFib3J0aW5nLlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIERlbm8uZXJyb3JzLk5vdEZvdW5kKSkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxuXG4gIGF3YWl0IERlbm8ubWtkaXIoam9pbihkaXJlY3RvcnksIFwicG9zdHNcIiksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICBhd2FpdCBEZW5vLndyaXRlVGV4dEZpbGUoXG4gICAgam9pbihkaXJlY3RvcnksIFwicG9zdHMvaGVsbG9fd29ybGQubWRcIiksXG4gICAgRklSU1RfUE9TVF9DT05URU5UUyxcbiAgKTtcbiAgYXdhaXQgRGVuby53cml0ZVRleHRGaWxlKGpvaW4oZGlyZWN0b3J5LCBNQUlOX05BTUUpLCBNQUlOX0NPTlRFTlRTKTtcbiAgYXdhaXQgRGVuby53cml0ZVRleHRGaWxlKFxuICAgIGpvaW4oZGlyZWN0b3J5LCBERU5PX0pTT05DX05BTUUpLFxuICAgIERFTk9fSlNPTkNfQ09OVEVOVFMsXG4gICk7XG4gIGF3YWl0IERlbm8ud3JpdGVUZXh0RmlsZShcbiAgICBqb2luKGRpcmVjdG9yeSwgSU1QT1JUX01BUF9KU09OX05BTUUpLFxuICAgIElNUE9SVF9NQVBfSlNPTl9DT05URU5UUyxcbiAgKTtcblxuICBjb25zb2xlLmxvZyhcIkJsb2cgaW5pdGlhbGl6ZWQsIHJ1biBgZGVubyB0YXNrIGRldmAgdG8gZ2V0IHN0YXJ0ZWQuXCIpO1xufVxuXG5mdW5jdGlvbiBwcmludEhlbHAoKSB7XG4gIGNvbnNvbGUubG9nKEhFTFApO1xuICBEZW5vLmV4aXQoMCk7XG59XG5cbmlmIChpbXBvcnQubWV0YS5tYWluKSB7XG4gIGlmIChEZW5vLmFyZ3MuaW5jbHVkZXMoXCItaFwiKSB8fCBEZW5vLmFyZ3MuaW5jbHVkZXMoXCItLWhlbHBcIikpIHtcbiAgICBwcmludEhlbHAoKTtcbiAgfVxuXG4gIGNvbnN0IGRpcmVjdG9yeSA9IERlbm8uYXJnc1swXTtcbiAgaWYgKGRpcmVjdG9yeSA9PSBudWxsKSB7XG4gICAgcHJpbnRIZWxwKCk7XG4gIH1cblxuICBhd2FpdCBpbml0KGRpcmVjdG9yeSk7XG59IGVsc2Uge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIG1vZHVsZSBpcyBtZWFudCB0byBiZSBleGVjdXRlZCBhcyBhIENMSS5cIik7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFO0FBRXJFLFNBQVMsSUFBSSxFQUFFLE9BQU8sUUFBUSw0Q0FBNEM7QUFFMUUsTUFBTSxPQUFPLENBQUM7Ozs7OztXQU1ILEVBQUUsWUFBWSxHQUFHLENBQUM7OztXQUdsQixFQUFFLFlBQVksR0FBRyxDQUFDOzs7V0FHbEIsRUFBRSxZQUFZLEdBQUcsQ0FBQztBQUM3QixDQUFDO0FBRUQsTUFBTSxlQUFlLElBQUk7QUFDekIsTUFBTSxzQkFBc0IsYUFBYSxXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUc7QUFFaEUsTUFBTSxzQkFBc0IsQ0FBQzs7Y0FFZixFQUFFLG9CQUFvQjs7OztBQUlwQyxDQUFDO0FBRUQsTUFBTSxZQUFZO0FBQ2xCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCdkIsQ0FBQztBQUVELE1BQU0sa0JBQWtCO0FBQ3hCLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7QUFPN0IsQ0FBQztBQUVELE1BQU0sdUJBQXVCO0FBQzdCLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBS2xDLENBQUM7QUFFRCxlQUFlLEtBQUssU0FBaUIsRUFBRTtJQUNyQyxZQUFZLFFBQVE7SUFFcEIsUUFBUSxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLEdBQUcsQ0FBQztJQUNsRCxJQUFJO1FBQ0YsTUFBTSxNQUFNO2VBQUksS0FBSyxXQUFXLENBQUM7U0FBVztRQUM1QyxJQUFJLElBQUksTUFBTSxHQUFHLEdBQUc7WUFDbEIsTUFBTSxZQUFZLFFBQ2hCO1lBRUYsSUFBSSxDQUFDLFdBQVc7Z0JBQ2QsTUFBTSxJQUFJLE1BQU0scUNBQXFDO1lBQ3ZELENBQUM7UUFDSCxDQUFDO0lBQ0gsRUFBRSxPQUFPLEtBQUs7UUFDWixJQUFJLENBQUMsQ0FBQyxlQUFlLEtBQUssTUFBTSxDQUFDLFFBQVEsR0FBRztZQUMxQyxNQUFNLElBQUk7UUFDWixDQUFDO0lBQ0g7SUFFQSxNQUFNLEtBQUssS0FBSyxDQUFDLEtBQUssV0FBVyxVQUFVO1FBQUUsV0FBVyxJQUFJO0lBQUM7SUFDN0QsTUFBTSxLQUFLLGFBQWEsQ0FDdEIsS0FBSyxXQUFXLHlCQUNoQjtJQUVGLE1BQU0sS0FBSyxhQUFhLENBQUMsS0FBSyxXQUFXLFlBQVk7SUFDckQsTUFBTSxLQUFLLGFBQWEsQ0FDdEIsS0FBSyxXQUFXLGtCQUNoQjtJQUVGLE1BQU0sS0FBSyxhQUFhLENBQ3RCLEtBQUssV0FBVyx1QkFDaEI7SUFHRixRQUFRLEdBQUcsQ0FBQztBQUNkO0FBRUEsU0FBUyxZQUFZO0lBQ25CLFFBQVEsR0FBRyxDQUFDO0lBQ1osS0FBSyxJQUFJLENBQUM7QUFDWjtBQUVBLElBQUksWUFBWSxJQUFJLEVBQUU7SUFDcEIsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVztRQUM1RDtJQUNGLENBQUM7SUFFRCxNQUFNLFlBQVksS0FBSyxJQUFJLENBQUMsRUFBRTtJQUM5QixJQUFJLGFBQWEsSUFBSSxFQUFFO1FBQ3JCO0lBQ0YsQ0FBQztJQUVELE1BQU0sS0FBSztBQUNiLE9BQU87SUFDTCxNQUFNLElBQUksTUFBTSxpREFBaUQ7QUFDbkUsQ0FBQyJ9