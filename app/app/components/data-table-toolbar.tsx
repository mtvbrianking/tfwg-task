"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

import { genders } from "../data/filters"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"

import { Plus } from "lucide-react"
import Link from "next/link"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter clients..."
          value={(table.getColumn("firstName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("firstName")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("gender") && (
          <DataTableFacetedFilter
            column={table.getColumn("gender")}
            title="Gender"
            options={genders}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
      <Button asChild variant="outline" size="sm" className="ml-2">
        <Link href="/create">
          <Plus />
          <span className="hidden lg:inline">Add Client</span>
        </Link>
      </Button>
    </div>
  )
}
