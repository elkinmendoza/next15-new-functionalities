import { Metadata } from "next";

import Counter from "./counter";

export const metadata: Metadata = {
  title: "Counter",
  description: "A simple counter app built with Next.js 15",
};

export default function CounterPage() {
  return <Counter />;
}
