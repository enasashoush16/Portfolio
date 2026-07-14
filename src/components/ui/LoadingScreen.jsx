export default function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-label="Loading content">
      <div className="skeleton-stack">
        <span className="skeleton" />
        <span className="skeleton" style={{ width: '78%' }} />
        <span className="skeleton" style={{ width: '62%' }} />
      </div>
    </div>
  );
}
