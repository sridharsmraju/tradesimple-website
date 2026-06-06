import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

/* export async function POST() {
  try {
    const options = {
      amount: 499900, // ₹4,999 in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    }; */

    export async function POST(req: Request) {
  try {
    const { paymentType } = await req.json();

    let amount = 2299900; // default full payment

    if (paymentType === "installment1") {
      amount = 1200000;
    }

    if (paymentType === "installment2") {
      amount = 1199900;
    }

    const options = {
      amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Create Order Error:", error);

    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}




/* refernce for two different amounts 
export async function POST(req) {
  const { courseId } = await req.json();

  const courses = {
    "basic-course": 499900,      // ₹4,999
    "advanced-course": 999900,   // ₹9,999
  };

  const amount = courses[courseId];

  if (!amount) {
    return Response.json(
      { error: "Invalid course" },
      { status: 400 }
    );
  }

  const order = await razorpay.orders.create({
    amount,
    currency: "INR",
  });

  return Response.json(order);
} */