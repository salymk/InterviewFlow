import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "../components/columns ";
import { DataTable } from "../components/data-table";
import { taskSchema } from "../data/schema";
import { Separator } from "@/components/ui/separator";
import { SprintTable } from "@/components/sprint-table";

export const metadata: Metadata = {
  title: "InterviewFlow",
  description:
    "Spaced repetition + technical interview prep will help you flow right into your next interview.",
};

import { CollapseTable } from "../components/collapse-table";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), "data/tasks.json"));

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

async function getSprintTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/sprint-tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function Home() {
  const tasks = await getTasks();
  const sprintTasks = await getSprintTasks();

  return (
    <>
      <section>
        <CollapseTable text="Meta Interview Sprint">
          <SprintTable data={sprintTasks} columns={columns} />
        </CollapseTable>
      </section>
      <Separator className="my-16" />
      <section>
        <CollapseTable text="Backlog">
          <DataTable data={tasks} columns={columns} />
        </CollapseTable>
      </section>
    </>
  );
}
