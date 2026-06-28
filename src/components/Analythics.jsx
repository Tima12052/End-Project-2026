// import "./Analythicssty.css"
export default function Analythiks() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon"><img src="../src/assets/logo.svg" alt="Money Guard Logo" /></span>
          <span className="brand-text">Money Guard</span>
        </div>
        <div className="topbar-actions">
          <span>Name</span>
          <span className="topbar-separator">|</span>
          <button className="topbar-exit">
            <img src="../src/assets/exit.svg" alt="Exit" />
            <p>Exit</p>
          </button>
        </div>
      </header>

      <div className="dashboard">
        <aside className="sidebar">
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#" className="active">
              Statistics
            </a>
          </nav>

          <div className="balance-panel">
            <p className="balance-label">Your balance</p>
            <p className="balance-value">₹ 24 000.00</p>
          </div>

          <div className="currency-panel">
            <div className="currency-row header">
              <span>Currency</span>
              <span>Purchase</span>
              <span>Sale</span>
            </div>
            <div className="currency-row">
              <span>USD</span>
              <span>27.55</span>
              <span>27.65</span>
            </div>
            <div className="currency-row">
              <span>EUR</span>
              <span>30.00</span>
              <span>30.10</span>
            </div>
          </div>
        </aside>

        <main className="content">
          <header className="content-header">
            <h1>Statistics</h1>
            <div className="filters">
              <div className="filter">
                <label htmlFor="month">Month</label>
                <select id="month" name="month">
                  <option>January</option>
                  <option>February</option>
                  <option selected>March</option>
                  <option>April</option>
                  <option>Mai</option>
                  <option>Juni</option>
                  <option>Juli</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="filter">
                <label htmlFor="year">Year</label>
                <select id="year" name="year">
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option selected>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>Cyberpunk 2077</option>
                </select>
              </div>
            </div>
          </header>

          <section className="statistics-panel">
            <div className="donut-card">
              <div className="donut"></div>
              <div className="donut-label">₹ 24 000.00</div>
            </div>

            <div className="legend-card">
              <div className="legend-item">
                <span className="legend-color"></span>
                <span>Car</span>
                <span>1 500.00</span>
              </div>
              <div className="legend-item">
                <span className="legend-color"></span>
                <span>Self care</span>
                <span>800.00</span>
              </div>
              <div className="legend-item">
                <span className="legend-color"></span>
                <span>Child care</span>
                <span>2 208.50</span>
              </div>
              <div className="legend-item">
                <span className="legend-color"></span>
                <span>Household products</span>
                <span>300.00</span>
              </div>
              <div className="legend-item">
                <span className="legend-color"></span>
                <span>Education</span>
                <span>3 400.00</span>
              </div>
              <div className="legend-item">
                <span className="legend-color"></span>
                <span>Leisure</span>
                <span>1 230.00</span>
              </div>
              <div className="legend-item">
                <span className="legend-color"></span>
                <span>Other expenses</span>
                <span>610.00</span>
              </div>
            </div>
          </section>

          <div className="summary-panel">
            <div className="summary-row">
              <span>Expenses:</span>
              <strong>22 649.24</strong>
            </div>
            <div className="summary-row">
              <span>Income:</span>
              <strong>27 350.00</strong>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
