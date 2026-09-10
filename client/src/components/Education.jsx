function Education() {
  return (
    <section id="education" className="section-block bg-white">
      <div className="section-wrap section-pad">
        <p className="section-eyebrow">Education</p>
        <h2 className="section-title">Academic background</h2>

        <div className="info-card">
          <h3 className="info-heading">
            B.Tech — Computer Science & Engineering
          </h3>
          <p className="info-accent">Specialisation: AI/ML</p>
          <p className="info-text">
            Sister Nivedita University, Kolkata, India · 2024–2028
          </p>
          <p className="info-text" style={{ marginTop: 0 }}>
            Currently a 2nd year undergraduate student.
          </p>

          <div className="badge-row" style={{ marginTop: 16 }}>
            {["Data Structures & Algorithms", "DBMS", "OOP", "Computer Networks", "Operating Systems"].map(
              (course) => (
                <span key={course} className="badge">
                  {course}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
