import React from "react";
import { Link } from "react-router-dom";

export function NavButton({ to, children }) {
  return (
    <Link
      to={to}
      className="border w-1/4 px-4 py-3 border-purple-900 rounded-lg hover:bg-purple-900 hover:text-white hover:no-underline text-center"
    >
      {children}
    </Link>
  );
}

export function PreviousButton({ to }) {
  return <NavButton to={to}>&lt; previous</NavButton>;
}

export function NextButton({ to }) {
  return <NavButton to={to}>next &gt;</NavButton>;
}

export function NavButtons({ previous, next }) {
  return (
    <div className="flex justify-between mt-8">
      {previous ? <PreviousButton to={previous} /> : <div />}
      {next ? <NextButton to={next} /> : <div />}
    </div>
  );
}
