export default function Home() {
return (
<main
style={{
background: "#0b0b0b",
color: "white",
minHeight: "100vh",
fontFamily: "Arial, sans-serif",
}}
>
{/* Navbar */}
<nav
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "20px 50px",
borderBottom: "1px solid #222",
}}
>
<div
style={{
display: "flex",
alignItems: "center",
gap: "12px",
}}
>
<div
style={{
width: "40px",
height: "40px",
background: "#00ff88",
borderRadius: "50%",
}}
></div>

```
      <h2>TradeSimple with Sridhar</h2>
    </div>

    <div
      style={{
        display: "flex",
        gap: "30px",
      }}
    >
      <a href="#" style={{ color: "white", textDecoration: "none" }}>
        Home
      </a>

      <a href="#" style={{ color: "white", textDecoration: "none" }}>
        About Us
      </a>

      <a
  href="/contact"
  style={{
    color: "white",
    textDecoration: "none",
  }}
>
  Contact
</a>
    </div>
  </nav>

  {/* Hero Section */}
  <section
    style={{
      textAlign: "center",
      padding: "80px 20px",
    }}
  >
    <h1
      style={{
        fontSize: "60px",
        marginBottom: "20px",
      }}
    >
      Learn Trading The Simple Way
    </h1>

    <p
      style={{
        color: "#cccccc",
        fontSize: "20px",
        marginBottom: "40px",
      }}
    >
      Price Action • Risk Management • Trading Psychology
    </p>

    <img
      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200"
      alt="Trading"
      style={{
        width: "80%",
        maxWidth: "1000px",
        borderRadius: "20px",
      }}
    />
  </section>

  {/* Courses */}
  <section
    style={{
      padding: "50px",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "40px",
      }}
    >
      Courses
    </h2>

    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Beginner */}
      <div
        style={{
          background: "#171717",
          padding: "30px",
          borderRadius: "20px",
          width: "350px",
        }}
      >
        <h3>Beginner Trading Program</h3>

        <h2>₹12,999 + GST</h2>

        <ul>
          <li>Market Basics</li>
          <li>Candlestick Reading</li>
          <li>Support & Resistance</li>
          <li>Risk Management</li>
          <li>Live Examples</li>
        </ul>

        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "#00ff88",
            border: "none",
            borderRadius: "10px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          <a
  href="/payment"
  style={{
    display: "block",
    textAlign: "center",
    width: "100%",
    padding: "15px",
    background: "#00ff88",
    color: "#000",
    textDecoration: "none",
    borderRadius: "10px",
    marginTop: "20px",
    fontWeight: "bold",
  }}
>
  Enroll Now
</a>
        </button>
      </div>

      {/* Intermediate */}
      <div
        style={{
          background: "#171717",
          padding: "30px",
          borderRadius: "20px",
          width: "350px",
        }}
      >
        <h3>Intermediate Price Action Mastery</h3>

        <h2>₹24,999 + GST</h2>

        <ul>
          <li>Advanced Price Action</li>
          <li>Market Structure</li>
          <li>Trade Management</li>
          <li>Psychology Framework</li>
          <li>Case Studies</li>
        </ul>

        <button
          style={{
            width: "100%",
            padding: "15px",
            background: "#00ff88",
            border: "none",
            borderRadius: "10px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          <a
  href="/payment"
  style={{
    display: "block",
    textAlign: "center",
    width: "100%",
    padding: "15px",
    background: "#00ff88",
    color: "#000",
    textDecoration: "none",
    borderRadius: "10px",
    marginTop: "20px",
    fontWeight: "bold",
  }}
>
  Enroll Now
</a>
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer
    style={{
      textAlign: "center",
      padding: "40px",
      borderTop: "1px solid #222",
      marginTop: "50px",
    }}
  >
    © 2026 TradeSimple with Sridhar
  </footer>
</main>


);
}
