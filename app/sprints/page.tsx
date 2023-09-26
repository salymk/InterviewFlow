import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

import { columns } from "../../components/columns ";
import { taskSchema } from "../../data/schema";
import { SprintTable } from "@/components/sprint-table";
import { CollapseTable } from "@/components/collapse-table";

async function getSprintTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "data/sprint-tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function Page() {
  const sprintTasks = await getSprintTasks();

  return (
    <>
      <h1 className="text-md sm:text-xl font-bold text-slate-950 mb-4">
        Sprints
      </h1>
      <CollapseTable text="Meta Interview Sprint">
        <SprintTable data={sprintTasks} columns={columns} />
      </CollapseTable>
    </>
  );
}
