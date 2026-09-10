const ACHIEVEMENTS = [
  "Built and shipped 3 full-stack AI-integrated applications independently.",
  "Active GitHub contributor.",
  "Regularly solves DSA problems using Java.",
  "Exploring system design and high-concurrency backend concepts.",
  "Exploring LLM orchestration patterns.",
  "Building projects beyond formal academic coursework.",
];

function Achievements() {
  return (
    <section id="achievements" className="section-block bg-white">
      <div className="section-wrap section-pad">
        <p className="section-eyebrow">Achievements</p>
        <h2 className="section-title">Things I've accomplished</h2>

        <div className="info-card">
          <ul className="achievement-list">
            {ACHIEVEMENTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
