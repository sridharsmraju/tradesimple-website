export default function ThankYouPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0b0b0b 0%, #111827 50%, #0b0b0b 100%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "#171717",
          borderRadius: "24px",
          padding: "40px 25px",
          textAlign: "center",
          boxSizing: "border-box",
          boxShadow: "0 0 40px rgba(0,255,136,0.15)",
        }}
      >
        <div
          style={{
            fontSize: "70px",
            marginBottom: "15px",
          }}
        >
          ✅
        </div>

        <h1
          style={{
            fontSize: "2.2rem",
            marginBottom: "15px",
            color: "#00ff88",
          }}
        >
          Thank You!
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#d1d5db",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Your registration has been received successfully.
          <br />
          Welcome to the TradeSimple with Sridhar learning community.
        </p>

        <div
          style={{
            background: "#222",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "25px",
            textAlign: "left",
          }}
        >
          <h3 style={{ color: "#00ff88" }}>
            What Happens Next?
          </h3>

          <ul
            style={{
              lineHeight: "2",
              color: "#d1d5db",
            }}
          >
            <li>Course access details will be shared via email.</li>
            <li>WhatsApp community invite will be sent.</li>
            <li>Trading resources and materials will be provided.</li>
            <li>Watch your inbox for further instructions.</li>
          </ul>
        </div>

        <div
          style={{
            background: "#222",
            padding: "20px",
            borderRadius: "15px",
            marginBottom: "30px",
          }}
        >
          <h3>Need Help?</h3>

          <p>📞 +91 99XXXXXXXX</p>

          <p>📧 dummy@gmail.com</p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/"
            style={{
              padding: "14px 25px",
              background: "#00ff88",
              color: "#000",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Back to Home
          </a>

          <a
            href="/contact"
            style={{
              padding: "14px 25px",
              background: "#2d3748",
              color: "white",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}