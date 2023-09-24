"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { priorities, confidence } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Plus } from "lucide-react";
import { FilterPopover } from "./filter-popover";

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

            <FilterPopover>
              <div className="flex flex-col gap-4 flex-wrap">
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
            </FilterPopover>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="hidden md:relative md:flex flex-row gap-3 flex-wrap">
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
          <div className="flex gap-4">
            <DataTableViewOptions table={table} />

            <Button variant="default" className="h-8 px-3">
              <Plus className="mr-2 h-4 w-4" />
              Create sprint
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
