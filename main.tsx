/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "nakasyou's blog",
  description: "のんびりやってきます",
  // header: <header>nakasyou's blog</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>&copy;2023 nakasyou</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "nakasyou",

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
