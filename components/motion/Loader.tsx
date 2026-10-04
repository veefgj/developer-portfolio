// Entry loader, pure CSS (globals.css `.loader`): three butter dots bounce, then the cover wipes up.
// It never waits for assets, ends by itself in ~1.1s even without JS, and is skipped after the first
// page of a session and under reduced motion. Purely visual, so hidden from assistive tech.
export function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}
