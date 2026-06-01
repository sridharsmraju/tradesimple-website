export default function PaymentPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0b0b0b",
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
          backgroundColor: "#171717",
          borderRadius: "20px",
          padding: "40px 25px",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Payment Gateway Coming Soon
        </h1>

        <p
          style={{
            color: "#cccccc",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          Online payment is not yet activated.
          <br />
          To enroll in our trading courses, please contact us using the
          details below.
        </p>

        <div
          style={{
            backgroundColor: "#222",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <h3>📞 Phone / WhatsApp</h3>
          <p>+91 99XXXXXXXX</p>
        </div>

        <div
          style={{
            backgroundColor: "#222",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <h3>📧 Email</h3>
          <p>dummy@gmail.com</p>
        </div>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "12px 25px",
            backgroundColor: "#00ff88",
            color: "#000",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}