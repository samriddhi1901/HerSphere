import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <nav className="navbar">
        <div className="brand">
          <div className="logo">H</div>
          <span>HerSphere</span>
        </div>

        <SignedOut>
          <div className="nav-actions">
            <SignInButton mode="modal">
              <button className="ghost-btn">Log in</button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="primary-btn">Sign up</button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>

      <SignedOut>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">Women’s health awareness for every stage</p>
            <h1>Understand your body. Support your health.</h1>
            <p className="hero-text">
              HerSphere helps girls and women learn about periods, PCOS/PCOD,
              mood changes, deficiencies, body changes, and menopause through
              simple and supportive guidance.
            </p>

            <div className="hero-actions">
              <SignUpButton mode="modal">
                <button className="primary-btn large">Get started</button>
              </SignUpButton>

              <SignInButton mode="modal">
                <button className="ghost-btn large">I already have an account</button>
              </SignInButton>
            </div>

            <p className="safety-note">
              HerSphere is for awareness and support only. It does not diagnose
              or replace professional medical care.
            </p>
          </div>

          <div className="hero-panel">
            <div className="pulse-card main-card">
              <span>Today’s Focus</span>
              <h3>Cycle awareness</h3>
              <p>Track symptoms, learn patterns, and know when to consult a doctor.</p>
            </div>

            <div className="mini-card card-one">
              <strong>PCOS/PCOD</strong>
              <span>Know the signs</span>
            </div>

            <div className="mini-card card-two">
              <strong>Nutrition</strong>
              <span>Iron, B12, Vitamin D</span>
            </div>

            <div className="mini-card card-three">
              <strong>Menopause</strong>
              <span>Support after 40+</span>
            </div>
          </div>
        </section>
      </SignedOut>

      <SignedIn>
        <section className="dashboard">
          <p className="eyebrow">Your private space</p>
          <h1>Welcome to your HerSphere dashboard</h1>
          <p>
            Start with a life stage, explore health topics, or use awareness
            tools to understand when professional care may be needed.
          </p>

          <div className="cards-grid">
            <article className="info-card">
              <h3>Teen Health</h3>
              <p>Puberty, first periods, hygiene, mood changes, and confidence.</p>
            </article>

            <article className="info-card">
              <h3>Periods & PCOS</h3>
              <p>Cycle basics, cramps, irregular periods, PMS, PCOS and PCOD.</p>
            </article>

            <article className="info-card">
              <h3>Nutrition</h3>
              <p>Iron, calcium, vitamin D, B12, hydration, and food awareness.</p>
            </article>

            <article className="info-card">
              <h3>40+ & Menopause</h3>
              <p>Perimenopause, menopause, bone health, sleep, and mood changes.</p>
            </article>
          </div>
        </section>
      </SignedIn>
    </main>
  )
}

export default App