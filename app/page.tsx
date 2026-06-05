"use client";

import { useEffect, useState } from "react";



export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  onScroll();

  document.addEventListener("scroll", onScroll);

  return () => {
    document.removeEventListener("scroll", onScroll);
  };
}, []);

  return (
  

    <main className="bg-diamond-neon min-h-screen"
      style={{
        minHeight: "100vh",
        /* background:
          "radial-gradient(circle at top right, rgba(234,179,8,0.08), transparent 30%), #080808", */
        color: "white",
        overflow: "hidden",
      }}
    >
      {/* NAVBAR */}

      <nav className="navbar stack-mobile"
         style={{
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
    transition: "all 0.3s ease",

    background: scrolled
      ? "rgba(8,8,8,0.92)"
      : "rgba(8,8,8,0.92)",

    backdropFilter: scrolled
      ? "blur(12px)"
      : "none",

    borderBottom: scrolled
      ? "1px solid rgba(245,158,11,0.15)"
      : "none",
  }}
      >
        
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "18px 5%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* LOGO */}

          <a
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

          {/* MENU */}

          <div  className="nav-links"
            style={{
              display: "flex",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/"
              style={{
                color: "#9CA3AF",
                textDecoration: "none",
              }}
            >
              Home
            </a>

            <a
              href="#contact"
              style={{
                color: "#9CA3AF",
                textDecoration: "none",
              }}
            >
              Contact
            </a>

            <a
              href="#course"
              style={{
                color: "#9CA3AF",
                textDecoration: "none",
              }}
            >
              Courses
            </a>
          </div>

          <a
            className="enroll-btn"
            href="/payment"
            style={{
              background:
                "linear-gradient(135deg,#F59E0B,#D97706)",
              color: "#000",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            Enroll Now
          </a>
        </div>
      </nav>

      {/* HERO */}
    

{/* code for glowing diamond     <div
  style={{
    position: "absolute",
    top: "120px",
    right: "80px",
    width: "70px",
    height: "70px",
    border: "2px solid rgba(245,158,11,0.6)",
    transform: "rotate(45deg)",
    boxShadow: "0 0 20px rgba(245,158,11,0.4)",
    zIndex: 1,
    animation: "floatY 8s ease-in-out infinite",
  }}
/>

<div
  style={{
    position: "absolute",
    bottom: "150px",
    left: "80px",
    width: "45px",
    height: "45px",
    background: "rgba(245,158,11,0.15)",
    transform: "rotate(45deg)",
    boxShadow: "0 0 15px rgba(245,158,11,0.3)",
    zIndex: 1,
    animation: "floatY 6s ease-in-out infinite",
  }}
/>

<div
  className="absolute top-24 right-20 w-20 h-20 border border-amber-500/30 rotate-45"
  style={{
    animation: "floatY 8s ease-in-out infinite",
    boxShadow: "0 0 20px rgba(245,158,11,0.25)",
  }}
/>

<div
  className="absolute bottom-32 left-16 w-12 h-12 border border-amber-500/20 rotate-45"
  style={{
    animation: "floatY 6s ease-in-out infinite",
    boxShadow: "0 0 15px rgba(245,158,11,0.15)",
  }}
/> */}
      <section   
      className="hero-section section-bottom "
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "90px 5%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "60px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT */}

          <div
            style={{
              flex: "1 1 600px",
            }}
          >
           {/*  <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                border: "1px solid rgba(245,158,11,0.2)",
                background: "rgba(245,158,11,0.05)",
                borderRadius: "999px",
                padding: "10px 18px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#F59E0B",
                  borderRadius: "50%",
                }}
              />

              <span
                style={{
                  color: "#E5E7EB",
                  fontSize: "0.9rem",
                }}
              >
                Live Sessions Available
              </span>
            </div>   */}

            <h1
              style={{
                fontSize: "clamp(4rem,10vw,7rem)",
                fontWeight: 900,
                lineHeight: "0.9",
                letterSpacing: "-0.08em",
                marginBottom: "30px",
              }}
            >
              Trade{" "}
              
              <span
                style={{
                  color: "#F59E0B",
                }}
              >
                  <span className="text-shimmer">
    Simple.
  </span>
              </span>
            </h1>

            <p
              style={{
                color: "#A3A3A3",
                fontSize: "1.2rem",
                lineHeight: "1.9",
                maxWidth: "650px",
              }}
            >
              Master the stock market with Sridhar. Learn practical trading,
              risk management, market psychology and real-world strategies that
              work in live markets.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                marginTop: "35px",
              }}
            >
              <a className="enroll-btn"
                href="https://www.youtube.com/@TradeSimpleWithSridhar"
                target="_blank"
  rel="noopener noreferrer"
                style={{
                  background:
                    "linear-gradient(135deg,#F59E0B,#D97706)",
                  color: "#000",
                  textDecoration: "none",
                  padding: "18px 28px",
                  borderRadius: "14px",
                  fontWeight: 800,
                }}
              >
                Start Learning for Free →
              </a>

              <a className="enroll-btn"
                href="#course"
                style={{
                  border: "1px solid rgba(245,158,11,0.4)",
                  color: "#F59E0B",
                  textDecoration: "none",
                  padding: "18px 28px",
                  borderRadius: "14px",
                }}
              >
                Explore Courses
              </a>

               <a className="enroll-btn btn-ghost text-base"
    href="/downloads/free-1-day-notes.pdf"
    download
    
    style={{
      borderColor: "#10B981",
      color: "#10B981",
    }}
  >
    📒 Free 1-Day Notes
  </a>

            </div>



  {/*    notes sale section     */}  
  
   <div
  style={{
    marginTop: "25px",
    background: "rgba(245,158,11,0.05)",
    border: "1px solid rgba(245,158,11,0.2)",
    borderRadius: "16px",
    padding: "20px",
    maxWidth: "500px",
  }}
>
  <div
    style={{
      color: "#F59E0B",
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "uppercase",
      marginBottom: "8px",
    }}
  >
    Premium Trading Playbook
  </div>

  <div
    style={{
      color: "#FFFFFF",
      fontSize: "1.15rem",
      fontWeight: 700,
      marginBottom: "10px",
    }}
  >
    30 Days of Personal Trading Notes <span className="text-shimmer">(COMING SOON) </span>
  </div>

  <p
    style={{
      color: "#A3A3A3",
      fontSize: "0.95rem",
      lineHeight: 1.6,
      marginBottom: "16px",
    }}
  >
    My handwritten market observations, trading story framework,
    preparation process used before
    taking trades in live markets.
  </p>

  <button  disabled className="btn-gold">
    Buy Now →
  </button>
</div>

            {/* STATS */}

           {/*  <div
              style={{
                display: "flex",
                gap: "50px",
                flexWrap: "wrap",
                marginTop: "70px",
                borderTop: "1px solid #222",
                paddingTop: "30px",
              }}
            >
              <div>
                <div
                  style={{
                    color: "#F59E0B",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                  }}
                >
                  10K+
                </div>
                <div style={{ color: "#737373" }}>
                  Students
                </div>
              </div>

              <div>
                <div
                  style={{
                    color: "#F59E0B",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                  }}
                >
                  50+
                </div>
                <div style={{ color: "#737373" }}>
                  Live Batches
                </div>
              </div>

              <div>
                <div
                  style={{
                    color: "#F59E0B",
                    fontSize: "2.5rem",
                    fontWeight: 900,
                  }}
                >
                  95%
                </div>
                <div style={{ color: "#737373" }}>
                  Success Rate
                </div>
              </div>
            </div> */}
          </div>

          {/* RIGHT CARD */}

          <div
            style={{
              flex: "1 1 450px",
              background: "#111111",
              border: "1px solid #2D2D2D",
              borderRadius: "24px",
              padding: "35px",
              position: "relative",
              boxShadow:
                "0 0 40px rgba(245,158,11,0.06)",
            }}
          >
            <div  className="badge-mobile"
              style={{
                position: "absolute",
                top: "-15px",
                left: "50%",
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(135deg,#F59E0B,#D97706)",
                color: "#000",
                padding: "10px 18px",
                borderRadius: "999px",
                fontWeight: 900,
                fontSize: "12px",
              }}
            >
              ◆ NEXT BATCH STARTING SOON
            </div>

            <div className="profile-section"
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <div className="diamond-icon"
                style={{
                  width: "64px",
                  height: "64px",
                  background:
                    "linear-gradient(135deg,#F59E0B,#D97706)",
                  transform: "rotate(45deg)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                 <span
                  style={{
                    transform: "rotate(-45deg)",
                    color: "#000",
                    fontWeight: 900,
                    fontSize: "22px",
                  }}
                >
                  TS
                </span> 
{/*                 <img
  src="/images/logo_white_black.png"
  alt="TradeSimple Logo"
  style={{
    width: "45px",
    height: "45px",
    transform: "rotate(-45deg)",
    objectFit: "contain",
  
    
  }}
  /> */}
              </div>

              <div className="profile-text" >
                <div 
                  style={{
                    fontWeight: 800,
                    fontSize: "1.4rem",
                  }}
                >
                  Sridhar Raju
                </div>

                <div
                  style={{
                    color: "#737373",
                  }}
                >
                  Trading Educator · Market Mentor
                </div>

                
              </div>
                {/* RIGHT: PROFILE IMAGE BLOCK (NEW) */}
  <div className="profile-image"
    style={{
      marginLeft: "20px",
      width: "100px",
      height: "120px",
      borderRadius: "14px",
      border: "2px solid #F59E0B",
      boxShadow: "0 0 12px rgba(245, 158, 11, 0.6)",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#111827",
    }}
  >
    <img
  src="/images/My_professional_image.png"
  alt="Profile"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }}
/>
    </div>
            </div>

            <blockquote className="mentor-quote"
              style={{
                marginTop: "30px",
                borderLeft: "3px solid #F59E0B",
                paddingLeft: "16px",
                color: "#A3A3A3",
                lineHeight: "1.8",
                fontStyle: "italic",
              }}
            >
              Anyone can learn to trade profitably. My goal is to simplify
              markets and help traders become consistent.
            </blockquote>

            <ul  className="course-list"
              style={{
                marginTop: "25px",
                lineHeight: "2.2",
                color: "#D4D4D4",
              }}
            >
              <li>Technical Analysis</li>
              <li>Price Action Trading</li>
              <li>Intraday & Swing Trading</li>
              <li>Risk Management</li>
              <li>Live Market Sessions</li>
            </ul>

            <a
              href="/payment"
              style={{
                display: "block",
                marginTop: "30px",
                textAlign: "center",
                background:
                  "linear-gradient(135deg,#F59E0B,#D97706)",
                color: "#000",
                textDecoration: "none",
                padding: "18px",
                borderRadius: "14px",
                fontWeight: 900,
              }}
            >
              Join The Next Batch →
            </a>
          </div>
        </div>
      </section>

{/* WHY CHOOSE US SECTION */}

<section className="section-spacing"
  style={{
    background: "#111111",
    padding: "100px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <p
      style={{
        color: "#F59E0B",
        textTransform: "uppercase",
        letterSpacing: "3px",
        fontSize: "0.9rem",
        marginBottom: "15px",
      }}
    >
      Why Choose Us
    </p>

    <h2
      style={{
        fontSize: "clamp(2rem,5vw,3.5rem)",
        fontWeight: 900,
        color: "#ffffff",
        marginBottom: "20px",
      }}
    >
      Why TradeSimple with{" "}
      <span className="text-shimmer">Sridhar?</span>
    </h2>

    <p
      style={{
        color: "#9CA3AF",
        maxWidth: "700px",
        margin: "0 auto 60px",
        lineHeight: "1.8",
        fontSize: "1.05rem",
      }}
    >
      Learn practical trading with structured guidance,
      live market examples and a proven approach designed
      for both beginners and intermediate traders.
    </p>

    {/* CARDS */}

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "25px",
      }}
    >
      {/* CARD 1 */}

      <div className="gold-card">
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          🎓
        </div>

        <h3
          style={{
            color: "#ffffff",
            fontSize: "1.4rem",
            fontWeight: 700,
            marginBottom: "15px",
          }}
        >
          Expert-Led Training
        </h3>

        <p
          style={{
            color: "#9CA3AF",
            lineHeight: "1.8",
          }}
        >
          Learn directly from Sridhar with real market
          experience, practical strategies and proven
          trading methodologies.
        </p>
      </div>

      {/* CARD 2 */}

      <div className="gold-card">
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          📚
        </div>

        <h3
          style={{
            color: "#ffffff",
            fontSize: "1.4rem",
            fontWeight: 700,
            marginBottom: "15px",
          }}
        >
          Structured Curriculum
        </h3>

        <p
          style={{
            color: "#9CA3AF",
            lineHeight: "1.8",
          }}
        >
          A step-by-step learning path from basics to
          advanced concepts so you always know what to
          learn next.
        </p>
      </div>

      {/* CARD 3 */}

      <div className="gold-card">
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          📡
        </div>

        <h3
          style={{
            color: "#ffffff",
            fontSize: "1.4rem",
            fontWeight: 700,
            marginBottom: "15px",
          }}
        >
          Live Interactive Sessions
        </h3>

        <p
          style={{
            color: "#9CA3AF",
            lineHeight: "1.8",
          }}
        >
          Join live sessions, ask questions in real-time
          and see actual market setups explained as they
          happen.
        </p>
      </div>
    </div>
  </div>
</section>


<section  className="section-spacing"
id="course"
  style={{
    background: "#080808",
    padding: "100px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <p
      style={{
        color: "#F59E0B",
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "15px",
      }}
    >
      What You'll Learn
    </p>

    <h2
      style={{
        fontSize: "clamp(2rem,5vw,3.5rem)",
        fontWeight: 900,
        color: "white",
        marginBottom: "20px",
      }}
    >
      Our Learning <span className="text-shimmer">Modules</span>
    </h2>

    <p
      style={{
        color: "#9CA3AF",
        maxWidth: "700px",
        margin: "0 auto 60px",
      }}
    >
      Structured learning paths designed for practical,
      real-world scalping success.
    </p>


{/* FEATURED COURSE */}

<div
  style={{
    maxWidth: "900px",
    margin: "0 auto 70px",
    background:
      "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.03))",
    border: "1px solid rgba(245,158,11,0.25)",
    borderRadius: "24px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 0 30px rgba(245,158,11,0.12)",
  }}
>
  <div
    style={{
      color: "#F59E0B",
      fontSize: "0.9rem",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginBottom: "12px",
      fontWeight: 700,
    }}
  >
    Premium Program
  </div>

  <h3
    style={{
      color: "#ffffff",
      fontSize: "clamp(2rem,4vw,3rem)",
      fontWeight: 900,
      marginBottom: "20px",
    }}
  >
   <span className="text-shimmer">Scalping</span>  Learners Program
  </h3>

  <p
    style={{
      color: "#D1D5DB",
      maxWidth: "650px",
      margin: "0 auto 25px",
      lineHeight: "1.8",
      fontSize: "1.05rem",
    }}
  >
    Designed for traders who want to master scalping in index options,
    understand market structure, improve risk management and build a
    professional trading process.
  </p>

  <div
  style={{
    background: "rgba(245,158,11,0.08)",
    border: "1px solid rgba(245,158,11,0.15)",
    borderRadius: "12px",
    padding: "20px",
    margin: "30px 0",
  }}
>
  <p
    style={{
      color: "#E5E7EB",
      margin: 0,
      lineHeight: "1.8",
      fontSize: "1rem",
    }}
  >
    📚 Complete curriculum details are available below.
    <br />
    The program covers <strong>Stock Market & Technical Analysis</strong>,
    <strong> Intraday Trading Mastery</strong>, and
    <strong> Futures & Options Trading</strong>.
  </p>

  <div
    style={{
      marginTop: "15px",
      color: "#F59E0B",
      fontWeight: 600,
    }}
  >
    ↓ Scroll down to view all modules
  </div>
</div>

<div
  style={{
    color: "#D1D5DB",
    marginBottom: "30px",
    lineHeight: "2",
  }}
>
  <div>🗓️ Duration: <strong>15 Days</strong></div>
  <div>📅 Days: <strong>Monday – Friday</strong></div>
  <div>⏰ Time: <strong>9:00 PM – 10:00 PM</strong></div>
  <div>
  💻 Mode: <strong>Live Online Sessions</strong>
  <br />
  <span style={{ color: "#A3A3A3", fontSize: "0.9rem" }}>
    45 mins Knowledge Transfer + 15 mins Q&A
  </span>
</div>
</div>

  <div
    style={{
      color: "#F59E0B",
      fontSize: "3rem",
      fontWeight: 900,
      marginBottom: "10px",
    }}
  >
    ₹24,999
  </div>

  <p
    style={{
      color: "#9CA3AF",
      marginBottom: "30px",
    }}
  >
    + GST Applicable
  </p>

  <div
  style={{
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "30px",
  }}
>
  <a
    href="/Brocure/Master-the-Scalp-Course-Details.png"
    download
    className="btn-ghost"
  >
    Download Brochure
  </a>


  <a
  href="/payment"
  className="btn-gold"
>
  Enroll Now →
</a>
</div>

  
</div>



    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        gap: "25px",
      }}
    >

      <div className="gold-card">
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

{/*   <div style={{ marginTop: "25px" }}>
    <a href="#pricing" className="btn-gold">
      Learn More
    </a>
  </div> */}
</div>

<div className="gold-card">
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

 {/*   <div style={{ marginTop: "25px" }}>
    <a href="#pricing" className="btn-gold">
      Learn More
    </a>
  </div> */}
</div> 

<div className="gold-card">
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
    <li>✓ Trapping Strategies</li>
    <li>✓ Expiry Trading</li>
  </ul>

 {/*  <div style={{ marginTop: "25px" }}>
    <a href="#pricing" className="btn-gold">
      Learn More
    </a>
  </div> */}
</div>
</div>
  </div>
</section>

{/* GET IN TOUCH */}

<section  className="section-spacing"

id="contact"
  style={{
    /* background: "#080808", */
    background: "transparent",
    padding: "80px 20px",
    borderTop: "1px solid rgba(245,158,11,0.15)",
  }}
>
  <div
    style={{
      maxWidth: "1000px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <div
      style={{
        color: "#F59E0B",
        letterSpacing: "3px",
        textTransform: "uppercase",
        fontSize: "0.85rem",
        marginBottom: "15px",
      }}
    >
      Get In Touch
    </div>

    <h2
      style={{
        color: "#FFFFFF",
        fontSize: "clamp(2rem,5vw,3.5rem)",
        fontWeight: 900,
        marginBottom: "20px",
      }}
    >
      Ready To Start Your Trading Journey?
    </h2>

    <p
      style={{
        color: "#9CA3AF",
        maxWidth: "650px",
        margin: "0 auto 50px",
        lineHeight: "1.8",
      }}
    >
      Have questions about the course, batch timings or enrollment?
      Reach out and we'll be happy to help.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        flexWrap: "wrap",
        marginBottom: "50px",
      }}
    >
      <div className="gold-card">
        <div style={{ color: "#F59E0B", fontWeight: "bold" }}>
          📞 Call / WhatsApp
        </div>

        <div style={{ marginTop: "10px", color: "#D1D5DB" }}>
          +91 9380891232
        </div>
      </div>

      <div className="gold-card">
        <div style={{ color: "#F59E0B", fontWeight: "bold" }}>
          ✉️ Email
        </div>

        <div style={{ marginTop: "10px", color: "#D1D5DB" }}>
          tradesimplewithsridhar@gmail.com
        </div>
      </div>
    </div>

    {/* SOCIAL MEDIA */}

    {/* SOCIAL MEDIA */}

<h3
  style={{
    color: "#FFFFFF",
    marginBottom: "25px",
  }}
>
  Follow TradeSimple With Sridhar
</h3>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  }}
>
  <a
    href="https://www.youtube.com/@TradeSimpleWithSridhar"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "rgba(245,158,11,0.08)",
      border: "1px solid rgba(245,158,11,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.8rem",
      textDecoration: "none",
      transition: "0.3s",
      boxShadow: "0 0 15px rgba(245,158,11,0.15)",
    }}
  >
    <img
    src="/images/youtube_logo.png"
    alt="Instagram"
    width="35"
    height="35"
  />
  </a>

  <a
  
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "rgba(245,158,11,0.08)",
      border: "1px solid rgba(245,158,11,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.8rem",
      textDecoration: "none",
      transition: "0.3s",
      boxShadow: "0 0 15px rgba(245,158,11,0.15)",
    }}
  >
    <img
    src="/images/insta_logo1.png"
    alt="Instagram"
    width="35"
    height="35"
  />
    
  </a>

  <a
    href="https://t.me"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      background: "rgba(245,158,11,0.08)",
      border: "1px solid rgba(245,158,11,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.8rem",
      textDecoration: "none",
      transition: "0.3s",
      boxShadow: "0 0 15px rgba(245,158,11,0.15)",
    }}
  >
     <img
    src="/images/telegram_logo.png"
    alt="Instagram"
    width="35"
    height="35"
  />
    
  </a>
</div>
  </div>
</section>

<section className="disclaimer-diamond section-spacing"

  style={{
  
    padding: "80px 20px",
    borderTop: "1px solid rgba(245,158,11,0.15)",
  }}
>
  <div
    style={{
      maxWidth: "1000px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        color: "#F59E0B",
        fontSize: "2rem",
        fontWeight: 900,
        marginBottom: "25px",
      }}
    >
      IMPORTANT DISCLAIMER
    </h2>

    <p
      style={{
        color: "#D1D5DB",
        fontSize: "1.05rem",
        lineHeight: "2",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      TradeSimple with Sridhar provides stock market
      education and training for informational and
      educational purposes only. We do not provide
      investment advice, stock recommendations,
      portfolio management services, or guaranteed
      returns. Trading and investing involve substantial
      risk, including possible loss of capital.
      Past performance is not indicative of future results.
      Please consult a qualified financial advisor before
      making investment decisions.
    </p>
  </div>
</section>

  <footer
  style={{
    padding: "30px 20px",
    textAlign: "center",
    borderTop: "1px solid rgba(245,158,11,0.15)",
    background: "#080808",
  }}
>
  <p
    style={{
      color: "#9CA3AF",
      fontSize: "0.9rem",
      margin: 0,
    }}
  >
    © {new Date().getFullYear()} TradeSimple with Sridhar. All rights reserved.
  </p>
</footer>

    </main>

    
  );

}