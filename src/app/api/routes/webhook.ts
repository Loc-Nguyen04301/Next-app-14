import createUser from "@/lib/actions/user.actions";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

const webhookSecret: string = process.env.WEBHOOK_SECRET || "your-secret";

export async function POST(req: Request) {
  const svix_id = headers().get("svix-id") ?? "";
  const svix_timestamp = headers().get("svix-timestamp") ?? "";
  const svix_signature = headers().get("svix-signature") ?? "";

  if (!svix_id || !svix_signature || !svix_signature) {
    return new Response("Bad Request", { status: 400 });
  }
  const body = await req.text();

  const sivx = new Webhook(webhookSecret);

  let msg: WebhookEvent;

  try {
    msg = sivx.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    return new Response("Bad Request", { status: 400 });
  }

  const evenType = msg.type;

  if (evenType === "user.created") {
    const { id, username, email_addresses } = msg.data;
    const newUser = await createUser({
      clerkId: id,
      name: username!,
      username: username!,
      email: email_addresses[0].email_address,
    });
    return NextResponse.json({
      message: "Ok",
      newUser,
    });
    console.log("EvenType:", evenType);
  }

  // Rest

  return new Response("OK", { status: 200 });
}
