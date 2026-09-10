function CurrentWork() {
  return (
    <section id="current-work" className="section-block bg-lime">
      <div className="section-wrap section-pad">
        <p className="section-eyebrow" style={{ background: "var(--ink)", color: "var(--lime)" }}>
          Current Work
        </p>
        <h2 className="section-title">What I'm building now</h2>

        <div className="info-card-lime">
          <span className="status-tag status-progress">IN PROGRESS</span>
          <h3 className="info-heading" style={{ margin: "12px 0 4px" }}>
            UPI Without Internet
          </h3>
          <p className="info-text" style={{ marginTop: 0, marginBottom: 16 }}>
            An offline P2P transaction processor — an architecture and research
            project, not a completed or production system.
          </p>

          <div className="badge-row">
            {[
              "Cryptographically signed offline ledger",
              "Transaction reconciliation",
              "Double-spend prevention research",
              "CRDT research",
              "Bluetooth/NFC research",
            ].map((item) => (
              <span key={item} className="badge">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWork;
