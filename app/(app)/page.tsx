import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Flow",
  description: "A local app for managing job applications",
};

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold leading-tight">Job Flow</h1>
      <p className="text-2xl">A local app for managing job applications</p>
    </main>
  );
}
