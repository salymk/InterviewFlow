"use client";

import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { priorities, confidence } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { CreateExercise } from "./create-exercise";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div>
      <div className="flex flex-col gap-3 ">
        <div className="flex">
          <div className="flex justify-between gap-3">
            <Input
              placeholder="Filter exercises..."
              value={
                (table.getColumn("title")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
              }
              className="h-8 w-full sm:w-[250px]"
            />
            <CreateExercise />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-row gap-3 flex-wrap">
            {table.getColumn("confidence") && (
              <DataTableFacetedFilter
                column={table.getColumn("confidence")}
                title="Confidence"
                options={confidence}
              />
            )}
            {table.getColumn("priority") && (
              <DataTableFacetedFilter
                column={table.getColumn("priority")}
                title="Priority"
                options={priorities}
              />
            )}
            {isFiltered && (
              <Button
                variant="ghost"
                onClick={() => table.resetColumnFilters()}
                className="h-8 px-2 lg:px-3"
              >
                Reset
                <Cross2Icon className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
          <DataTableViewOptions table={table} />
        </div>
      </div>
    </div>
  );
}
