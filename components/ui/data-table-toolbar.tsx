"use client";

import type { Column, Table } from "@tanstack/react-table";
import * as React from "react";

// import { DataTableDateFilter } from "@/shared/components/ui/table/data-table-date-filter";
// import { DataTableFacetedFilter } from "@/shared/components/ui/table/data-table-faceted-filter";
// import { DataTableSliderFilter } from "@/shared/components/ui/table/data-table-slider-filter";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconArrowBarToUp,
  IconCheck,
  IconCopy,
  IconFileExport,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
export interface DataTableToolbarProps<TData>
  extends React.ComponentProps<"div"> {
  table: Table<TData>;
  options?: {
    publishEnabled?: boolean;
    deleteEnabled?: boolean;
    ApproveEnabled?: boolean;
    excelEnabled?: boolean;
    cloneEnabled?: boolean;
  };
}

export function DataTableToolbar<TData>({
  table,
  children,
  className,
  options,
  ...props
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const selectedRows = table.getFilteredSelectedRowModel().rows;
  const isRowsSelected = selectedRows.length > 0;

  const columns = React.useMemo(
    () => table.getAllColumns().filter((column) => column.getCanFilter()),
    [table]
  );

  const onReset = React.useCallback(() => {
    table.resetColumnFilters();
  }, [table]);

  const onClearSelection = React.useCallback(() => {
    table.resetRowSelection();
  }, [table]);

  return (
    <div
      role="toolbar"
      aria-orientation="horizontal"
      className={cn(
        "flex w-full items-start justify-between gap-2 p-1",
        className
      )}
      {...props}
    >
      <DataTableViewOptions table={table} />
      <div className="flex flex-1 flex-wrap items-center gap-2">
        {options?.publishEnabled && (
          <Button variant="outline" size="sm" disabled={!isRowsSelected}>
            <IconArrowBarToUp />
            Publish
          </Button>
        )}
        {options?.deleteEnabled && (
          <Button variant="outline" size="sm" disabled={!isRowsSelected}>
            <IconTrash />
            Delete
          </Button>
        )}
        {options?.ApproveEnabled && (
          <>
            <Button variant="outline" size="sm" disabled={!isRowsSelected}>
              <IconCheck />
              Approve
            </Button>
            <Button variant="outline" size="sm" disabled={!isRowsSelected}>
              <IconX />
              Unapprove
            </Button>
          </>
        )}
        {options?.cloneEnabled && (
          <Button variant="outline" size="sm">
            <IconCopy />
            Clone
          </Button>
        )}
        {options?.excelEnabled && (
          <Button variant="outline" size="sm">
            <IconFileExport />
            Excel
          </Button>
        )}
        {isRowsSelected && (
          <div className="flex items-center gap-2">
            {/* <span className="text-muted-foreground text-sm">
              {selectedRows.length} of {table.getFilteredRowModel().rows.length}{" "}
              row(s) selected
            </span> */}
            <Button
              variant="outline"
              size="sm"
              onClick={onClearSelection}
              className="h-8 border-dashed"
            >
              <IconX className="size-4" />
              Clear Selection
            </Button>
          </div>
        )}
        {!isRowsSelected && (
          <>
            {columns.map((column) => (
              <DataTableToolbarFilter key={column.id} column={column} />
            ))}
            {isFiltered && (
              <Button
                aria-label="Reset filters"
                variant="outline"
                size="sm"
                className="border-dashed"
                onClick={onReset}
              >
                <IconX />
                Reset
              </Button>
            )}
          </>
        )}
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
}
interface DataTableToolbarFilterProps<TData> {
  column: Column<TData>;
}

function DataTableToolbarFilter<TData>({
  column,
}: DataTableToolbarFilterProps<TData>) {
  {
    const columnMeta = column.columnDef.meta;

    const onFilterRender = React.useCallback(() => {
      if (!columnMeta?.variant) return null;

      switch (columnMeta.variant) {
        case "text":
          return (
            <Input
              placeholder={columnMeta.placeholder ?? columnMeta.label}
              value={(column.getFilterValue() as string) ?? ""}
              onChange={(event) => column.setFilterValue(event.target.value)}
              className="h-8 w-40 lg:w-56"
            />
          );

        case "number":
          return (
            <div className="relative">
              <Input
                type="number"
                inputMode="numeric"
                placeholder={columnMeta.placeholder ?? columnMeta.label}
                value={(column.getFilterValue() as string) ?? ""}
                onChange={(event) => column.setFilterValue(event.target.value)}
                className={cn("h-8 w-[120px]", columnMeta.unit && "pr-8")}
              />
              {columnMeta.unit && (
                <span className="bg-accent text-muted-foreground absolute top-0 right-0 bottom-0 flex items-center rounded-r-md px-2 text-sm">
                  {columnMeta.unit}
                </span>
              )}
            </div>
          );

        case "range":
          // return (
          //   <DataTableSliderFilter
          //     column={column}
          //     title={columnMeta.label ?? column.id}
          //   />
          // );

        case "date":
        // case "dateRange":
        //   return (
        //     <DataTableDateFilter
        //       column={column}
        //       title={columnMeta.label ?? column.id}
        //       multiple={columnMeta.variant === "dateRange"}
        //     />
        //   );

        case "select":
        // case "multiSelect":
        //   return (
        //     <DataTableFacetedFilter
        //       column={column}
        //       title={columnMeta.label ?? column.id}
        //       options={columnMeta.options ?? []}
        //       multiple={columnMeta.variant === "multiSelect"}
        //     />
        //   );

        default:
          return null;
      }
    }, [column, columnMeta]);

    return onFilterRender();
  }
}
