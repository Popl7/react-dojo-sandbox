import React from "react";
import { Link } from "react-router-dom";

export function NavButton({ to, children }) {
  return (
    <Link
      to={to}
      className="border px-8 py-4 bg-purple-900 rounded-lg text-white hover:no-underline text-center text-2xl"
    >
      {children}
    </Link>
  );
}

export function PreviousButton({ to }) {
  return <NavButton to={to}>←</NavButton>;
}

export function NextButton({ to, title }) {
  return <NavButton to={to}>→</NavButton>;
}

export function NavButtons({ previous, next }) {
  return (
    <div className="flex justify-between mt-8">
      {previous ? <PreviousButton to={previous} /> : <div />}
      {next ? <NextButton to={next} /> : <div />}
    </div>
  );
}
