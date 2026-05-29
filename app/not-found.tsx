export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
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
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
            color: "#00ff88",
            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <h2>Page Not Found</h2>

        <p
          style={{
            color: "#cccccc",
            marginTop: "15px",
            marginBottom: "30px",
            lineHeight: "1.8",
          }}
        >
          The page you are looking for does not exist or may have been moved.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            padding: "14px 25px",
            background: "#00ff88",
            color: "#000",
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Return Home
        </a>
      </div>
    </main>
  );
}