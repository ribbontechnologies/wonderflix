export function cn(...classes: (string | boolean | undefined)[]) {
  return [
    ...new Set(
      classes.filter((thing) => typeof thing === "string").map((thing) => (thing as string).replace(/\n\s+|\s+/g, " ")),
    ),
  ].join(" ");
}
