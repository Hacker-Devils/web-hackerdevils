import { getApps, initializeApp } from "firebase/app";
import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore/lite";
import { codeAThonRegistration } from "@/content/events";
import { firebaseConfig } from "./firebase";

export type Registration = { name: string; email: string; track: "beginner" | "advanced"; hackerrank: string };

/**
 * Saves one sign-up. The ASU email is the document ID, so the rules refuse a second sign-up with the same email:
 * writing to an existing document counts as an update, and updates are never allowed.
 */
export async function register({ name, email, track, hackerrank }: Registration) {
  const app = getApps()[0] ?? initializeApp(firebaseConfig);
  const ref = doc(getFirestore(app), "events", codeAThonRegistration.eventId, "registrations", email);
  await setDoc(ref, { name, email, track, ...(hackerrank ? { hackerrank } : {}), createdAt: serverTimestamp() });
}
