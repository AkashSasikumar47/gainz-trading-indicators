import React from "react";
import Link from "next/link";

const Feed = () => {
  return (
    <section
      id="about"
      className="max-w-screen-sm bg-white mx-auto px-8 py-8 flex flex-col gap-8"
      aria-label="About Me"
    >
      <h2 className="font-medium text-sm">About</h2>

      <div className="font-medium text-sm flex flex-col gap-3">
        <p>
          I’m a developer who loves building clean, scalable software. My work
          combines design, code, and automation to create simple solutions for
          complex problems.
        </p>

        <p>
          I focus on clarity, speed, and real-world impact — turning ideas into
          products that just work. You can find out more{" "}
          <Link href="/about" className="text-blue-500 hover:underline">
            about me here
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Feed;
