import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "../components/columns ";
import { DataTable } from "../components/data-table";
import { taskSchema } from "../data/schema";
import Dashboard from "@/components/dashboard";

export const metadata: Metadata = {
  title: "InterviewFlow",
  description:
    "Spaced repetition + technical interview prep will help you flow right into your next interview.",
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), "data/tasks.json"));

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <>
      <Dashboard>
        <section>
          <h1 className="text-xl font-bold text-slate-950 mb-4">Backlog</h1>
          <DataTable data={tasks} columns={columns} />
        </section>
      </Dashboard>
    </>
  );
}
