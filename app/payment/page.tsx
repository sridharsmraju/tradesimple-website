"use client";

import { useState } from "react";

export default function PaymentPage() {
const [accepted, setAccepted] = useState(false);
  

/* const startPayment = async () => {
  console.log("Payment button clicked");

  try {
    const orderResponse = await fetch("/api/create-order", {
      method: "POST",
    });

    console.log("Order response received");

    const order = await orderResponse.json();

    console.log("Order data:", order);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      order_id: order.order_id,
      name: "Trade Simple with Sridhar",
      description: "Master The Scalp",
    };

    console.log("Creating Razorpay instance");

    const razorpay = new (window as any).Razorpay(options);

    console.log("Opening Razorpay popup");

    razorpay.open();
  } catch (error) {
    console.error("Payment Error:", error);
  }



   
  }; */


  const startPayment = async () => {
  console.log("Payment button clicked");

  try {
    const orderResponse = await fetch("/api/create-order", {
      method: "POST",
    });

    console.log("Order response received");

    const order = await orderResponse.json();

    console.log("Order data:", order);

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      order_id: order.order_id,

      name: "Trade Simple with Sridhar",

      description: "Master The Scalp",

      handler: async function (response: any) {
        console.log(
          "Razorpay success response:",
          response
        );

        const verifyResponse = await fetch(
          "/api/verify-payment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
          }
        );

        const verify =
          await verifyResponse.json();

        console.log(
          "Verify response:",
          verify
        );

        if (verify.success) {
          window.location.href = "/thankyou";

          // Optional redirect
          // window.location.href = "/thank-you";
        } else {
          alert(
            "Payment Verification Failed"
          );
        }
      },

      modal: {
        ondismiss: function () {
          console.log(
            "Payment popup closed by user"
          );
        },
      },

      theme: {
        color: "#F59E0B",
      },
    };

    console.log("Creating Razorpay instance");

    const razorpay =
      new (window as any).Razorpay(
        options
      );

    razorpay.on(
      "payment.failed",
      function (response: any) {
        console.log(
          "Payment failed:",
          response
        );

        alert(
          response.error.description ||
            "Payment Failed"
        );
      }
    );

    console.log("Opening Razorpay popup");

    razorpay.open();
  } catch (error) {
    console.error(
      "Payment Error:",
      error
    );

    alert(
      "Unable to initiate payment"
    );
  }
};

  return (
<main
style={{
minHeight: "100vh",
background: "#080808",
color: "white",
padding: "50px 20px 80px",
}}
>



          {/* LOGO */}

          <a  className="logo-wrapper"
  href="#"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "16px",
    textDecoration: "none",
    cursor: "pointer",
  }}
>
            <div 
              style={{
                width: "58px",
                height: "58px",
                background:
                  "linear-gradient(135deg,#F59E0B,#D97706)",
                transform: "rotate(45deg)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 0 12px rgba(245,158,11,0.25)",
              }}
            >
              {/* <span
                style={{
                  transform: "rotate(-45deg)",
                  color: "#000",
                  fontWeight: 900,
                  fontSize: "22px",
                }}
              >
                TS
              </span> */}

              <img
  src="/images/logo_white_black.png"
  alt="TradeSimple Logo"
  style={{
    width: "45px",
    height: "45px",
    transform: "rotate(-45deg)",
    objectFit: "contain",
    
  }}
/>
            </div>

            <div>
              <div
                style={{
    fontSize: "1.7rem",
    fontWeight: 800,
    color: "#FFFFFF",
  }}
              >
                Trade
                <span
                  style={{
                    color: "#F59E0B",
                  }}
                >
                  <span className="text-shimmer">
    Simple
  </span>
                </span>
              </div>

              <div
                style={{
                  color: "#F59E0B",
                  fontSize: "0.8rem",
                  letterSpacing: "2px",
                  fontWeight: 600,
                }}
              >WITH&nbsp;
                <span className="text-shimmer">
     SRIDHAR
  </span>
                
              </div>
            </div>
          </a>


<div
style={{
maxWidth: "900px",
margin: "0 auto",
}}
>
{/* Header */}


    <div
      style={{
        textAlign: "center",
        marginBottom: "50px",
      }}
    >
      <h1 className="page-title"
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          marginBottom: "15px",
        }}
      >
        Enroll in the Next Batch
      </h1>

      <p
        style={{
          color: "#A3A3A3",
          fontSize: "1.1rem",
        }}
      >
        Please review the course details and disclaimer before proceeding.
      </p>
    </div>

    {/* Course Details */}

    <div className="course-details-card"
      style={{
        background: "#111111",
        border: "1px solid rgba(245,158,11,0.2)",
        borderRadius: "20px",
        padding: "40px",
        marginBottom: "35px",
      }}
    >
      <h2 className="center_test"
        style={{
          color: "#F59E0B",
          marginBottom: "25px",
          fontSize: "1.8rem",
        }}
      >
        Course Details
      </h2>

      <div className="course-details-content"
        style={{
          lineHeight: "2",
          color: "#D1D5DB",
        }}
      >
        <div>
          📅 Duration: <strong>15 Trading Days</strong>
        </div>

        <div>
          🕘 Timing: <strong>9:00 PM – 10:00 PM IST</strong>
        </div>

        <div>
          💻 Mode: <strong>Live Online Sessions</strong>
        </div>

        <div>
          🎓 Structure:{" "}
          <strong>
            45 mins Knowledge Transfer + 15 mins Live Q&A
          </strong>
        </div>

        <div style={{ marginTop: "15px" }}>
          📚 Topics Covered:
        </div>

        <ul>
          <li>Stock Market & Technical Analysis</li>
          <li>Intraday Scalping Mastery</li>
          <li>Futures & Options Trading in Indices</li>
        </ul>
      </div>
      
    </div>
{/* --Three box section */}
    <div className="course-grid"
      style={{
          display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
    alignItems: "stretch",
     paddingBottom: "40px", 
      }}
    >

      <div className="gold-card center_test">
  <h3 style={{ color: "#F59E0B", fontSize: "1.5rem" }}>
    Stock Market & Technical Analysis
  </h3>

  <ul className="course-list1"
    style={{
      textAlign: "left",
      color: "#D1D5DB",
      lineHeight: "2",
      marginTop: "20px",
    }}
  >
    <li>✓ Stock Market Basics</li>
    <li>✓ Candlestick Analysis</li>
    <li>✓ Support & Resistance</li>
    <li>✓ Trend Identification</li>
    <li>✓ Volume Analysis</li>
    <li>✓ Trading Psychology</li>
  </ul>


</div>

<div className="gold-card center_test">
  <h3 style={{ color: "#F59E0B", fontSize: "1.5rem" }}>
    Intraday Trading<br/> Mastery
  </h3>

  <ul className="course-list1"
    style={{
      textAlign: "left",
      color: "#D1D5DB",
      lineHeight: "2",
      marginTop: "20px",
    }}
  >
    <li>✓ Scalping Strategies</li>
    <li>✓ Momentum Trading</li>
    <li>✓ Breakout Trading</li>
    <li>✓ Risk Management</li>
    <li>✓ Trade Planning</li>
    <li>✓ Live Market Examples</li>
  </ul>


</div>

<div className="gold-card center_test">
  <h3 style={{ color: "#F59E0B", fontSize: "1.5rem" }}>
    Futures & <br/>Options Trading
  </h3>

  <ul className="course-list1"
    style={{
      textAlign: "left",
      color: "#D1D5DB",
      lineHeight: "2",
      marginTop: "20px",
    }}
  >
    <li>✓ Index Options</li>
    <li>✓ Option Greeks</li>
    <li>✓ Option Buying</li>
    <li>✓ Option Selling</li>
    <li>✓ Hedging Strategies</li>
    <li>✓ Expiry Trading</li>
  </ul>

 {/*  <div style={{ marginTop: "25px" }}>
    <a href="#pricing" className="btn-gold">
      Learn More
    </a>   </div> */}

</div>
</div>
    

    {/* Disclaimer */}

    <div
      style={{
        background: "rgba(220,38,38,0.08)",
        border: "1px solid rgba(220,38,38,0.3)",
        borderRadius: "20px",
        padding: "40px",
        marginBottom: "30px",
      }}
    >
      <h2 className="center_test"
        style={{
          color: "#F87171",
          marginBottom: "20px",
          fontSize: "2rem",
          fontWeight: 900,
        }}
      >
        IMPORTANT DISCLAIMER
      </h2>

     {/*  <p
        style={{
          color: "#D1D5DB",
          lineHeight: "1.9",
          marginBottom: "15px",
        }}
      >
        Trading in stocks, futures, and options involves substantial risk.
        The educational content provided during this program is intended
        solely for learning purposes.
      </p>

      <p
        style={{
          color: "#D1D5DB",
          lineHeight: "1.9",
          marginBottom: "15px",
        }}
      >
        Any examples, charts, market discussions, setups, strategies,
        observations, or case studies shared during the course should not
        be interpreted as investment advice, stock recommendations,
        trading signals, or guarantees of future performance.
      </p>

      <p
        style={{
          color: "#D1D5DB",
          lineHeight: "1.9",
        }}
      >
        Every participant is solely responsible for their own trading and
        investment decisions. Past performance does not guarantee future
        results. Please consult a qualified financial advisor before making
        investment decisions.
      </p> */}

      <p
  style={{
    color: "#D1D5DB",
    lineHeight: "1.9",
    marginBottom: "15px",
  }}
>
  We are not registered with SEBI (Securities and Exchange Board of India)
  and do not act as a SEBI-registered investment advisor or research analyst.
</p>

<p
  style={{
    color: "#D1D5DB",
    lineHeight: "1.9",
    marginBottom: "15px",
  }}
>
  Trading in stocks, futures, and options involves substantial risk. The
  educational content provided during this program is intended solely for
  learning purposes.
</p>

<p
  style={{
    color: "#D1D5DB",
    lineHeight: "1.9",
    marginBottom: "15px",
  }}
>
  Any examples, charts, market discussions, setups, strategies, observations,
  or case studies shared during the course should not be interpreted as
  investment advice, stock recommendations, trading signals, or guarantees of
  future performance.
</p>

<p
  style={{
    color: "#D1D5DB",
    lineHeight: "1.9",
    marginBottom: "15px",
  }}
>
  We do not provide any personalized financial advice. All information shared
  is general in nature and for educational purposes only.
</p>

<p
  style={{
    color: "#D1D5DB",
    lineHeight: "1.9",
    marginBottom: "15px",
  }}
>
  Every participant is solely responsible for their own trading and investment
  decisions. Past performance does not guarantee future results. Markets are
  subject to risk and volatility, and losses may occur, including potential
  loss of capital.
</p>

<p
  style={{
    color: "#D1D5DB",
    lineHeight: "1.9",
  }}
>
  Participants are strongly advised to consult a qualified SEBI-registered
  financial advisor before making any investment or trading decisions. By
  participating in this program, you acknowledge that you understand and accept
  these risks and disclaimers.
</p>

    </div>

    {/* Mandatory Acceptance */}

    <div
      style={{
        background: "#111111",
        border: "1px solid rgba(245,158,11,0.2)",
        borderRadius: "20px",
        padding: "25px",
        marginBottom: "35px",
      }}
    >
      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          cursor: "pointer",
          color: "#D1D5DB",
          lineHeight: "1.8",
        }}
      >
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          style={{
            marginTop: "5px",
            transform: "scale(1.3)",
          }}
        />

        <span>
          I have read and understood the disclaimer above and acknowledge
          that trading in financial markets involves risk. I understand
          that this program is provided purely for educational purposes and
          does not constitute investment advice.
        </span>
      </label>
    </div>

    {/* Payment Section */}

    <div
      style={{
        background: "#111111",
        border: "1px solid rgba(245,158,11,0.2)",
        borderRadius: "20px",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: "1.6rem",
          marginBottom: "10px",
        }}
      >
        Secure Enrollment
      </h3>

      <p
        style={{
          color: "#A3A3A3",
          marginBottom: "25px",
        }}
      >
        Razorpay payment gateway will be integrated here.
      </p>

      {!accepted && (
        <p
          style={{
            color: "#F59E0B",
            marginBottom: "20px",
          }}
        >
          Please accept the disclaimer to continue.
        </p>
      )}

      <button 
        onClick={startPayment}
        className="btn-gold"
        disabled={!accepted}
        style={{
          opacity: accepted ? 1 : 0.4,
          cursor: accepted ? "pointer" : "not-allowed",
        }}
      >
        Pay Now →
      </button>
    </div>
  </div>
</main>


);
}
