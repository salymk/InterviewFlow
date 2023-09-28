"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "./ui/badge";
import { labels, priorities, confidence, difficulty } from "../data/data";
import { Task } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { ExerciseDetails } from "./exercise-details";
import { classNames } from "@/lib/utils";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader className="ml-4" column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2 ml-2">
          {label && (
            <Badge className="h-5 self-center" variant="outline">
              {label.label}
            </Badge>
          )}
          <span className="max-w-[500px] truncate font-medium self-center">
            {row.getValue("title")}
          </span>
          <div className="group/edit md:invisible md:group-hover/item:visible">
            <ExerciseDetails />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "difficulty",
    header: ({ column }) => (
      <DataTableColumnHeader className="" column={column} title="Difficulty" />
    ),
    cell: ({ row }) => {
      const diff = difficulty.find(
        (dif) => dif.value === row.getValue("difficulty")
      );

      if (!diff) {
        return null;
      }

      return (
        <div>
          <span
            className={classNames(
              diff.value === "easy" && "text-green-400",
              diff.value === "medium" && "text-amber-400",
              diff.value === "hard" && "text-red-400",
              "max-w-[500px] truncate font-medium self-center"
            )}
          >
            {diff.label}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "confidence",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Confidence" />
    ),
    cell: ({ row }) => {
      const con = confidence.find(
        (con) => con.value === row.getValue("confidence")
      );

      if (!con) {
        return null;
      }

      return (
        <div className="flex w-[160px] items-center">
          {con.icon && <con.icon className="mr-2 h-4 w-4" />}

          <span>{con.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("priority")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "lastReview",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Review" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("lastReview")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "nextReview",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Next Review" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("nextReview")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "reviewCount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Review Count" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("reviewCount")}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
