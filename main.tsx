/** @jsx h */

import blog, { ga, redirects, h } from "https://raw.githubusercontent.com/nakasyou/deno_blog/main/blog.tsx";

blog({
  title: "nakasyou's blog",
  description: "のんびりやってきます",
  // header: <header>nakasyou's blog</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>&copy;2023 nakasyou</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  script:"alert(0)",
  author: "nakasyou",
  links: [
    { title: "Email", url: "mailto:nakasyou1103@gmail.com" },
    { title: "GitHub", url: "https://github.com/nakasyou" },
    { title: "Twitter", url: "https://twitter.com/nakasyou0" },
    { title: "Element", url: "https://matrix.to/#/@nakasyou:matrix.org" },
  ],
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
