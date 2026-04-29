'use client'

import React, { useMemo, useState } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'

type Tab = 'Activity' | 'Payments'

const SUMMARY_DATA = {
  Activity: [
    {
      title: 'Within the last 3 days',
      value: '3,000',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      bg: '#a592ab',
      color: 'text-white',
    },
    {
      title: '4-7 Days Ago',
      value: '22',
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      bg: '#00c853',
      color: 'text-white',
    },
    {
      title: '7+ Days Ago',
      value: '10',
      icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
      bg: '#ff4e3d',
      color: 'text-white',
    },
  ],
  Payments: [
    {
      title: '7 Day Trial',
      value: '500',
      icon: 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      bg: '#fff5e5',
      color: 'text-[#ff9f00]',
    },
    {
      title: 'Basic',
      value: '234',
      icon: 'M20 7h-9M14 17H5M17 12H8',
      bg: '#ffcc91',
      color: 'text-[#ff4e3d]',
    },
    {
      title: 'Premium',
      value: '50',
      icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
      bg: '#97a5eb',
      color: 'text-[#5570f1]',
    },
    {
      title: 'Pro',
      value: '190',
      icon: 'M2 12l5.25 5 2.625-5-2.625-5L2 12zM22 12l-5.25 5-2.625-5 2.625-5L22 12zM12 2L6.75 7l5.25 5L17.25 7 12 2z',
      bg: '#5570f1',
      color: 'text-white',
    },
  ],
}

const USERS = [
  {
    id: 1,
    name: 'Esther Howard',
    email: 'Loremipsum@gmail.com',
    registration: '2023.11.30 10:30 pm',
    lastLogon: '2023.11.30 10:30 pm',
    cohort: 'April 2024',
    rating: '1.8',
    subscribed: '22',
  },
  {
    id: 2,
    name: 'Eleanor Pena',
    email: 'Loremipsum@gmail.com',
    registration: '2023.11.28 09:12 am',
    lastLogon: '2023.11.29 08:30 pm',
    cohort: 'March 2024',
    rating: '4.2',
    subscribed: '45',
  },
  {
    id: 3,
    name: 'Wade Warren',
    email: 'Loremipsum@gmail.com',
    registration: '2023.11.25 02:44 pm',
    lastLogon: '2023.11.28 11:20 am',
    cohort: 'March 2024',
    rating: '2.5',
    subscribed: '10',
  },
  {
    id: 4,
    name: 'Jacob Jones',
    email: 'Loremipsum@gmail.com',
    registration: '2023.11.21 11:15 am',
    lastLogon: '2023.11.29 04:15 pm',
    cohort: 'Feb 2024',
    rating: '3.9',
    subscribed: '60',
  },
  {
    id: 5,
    name: 'Esther Howard',
    email: 'Loremipsum@gmail.com',
    registration: '2023.11.30 10:30 pm',
    lastLogon: '2023.11.30 10:30 pm',
    cohort: 'April 2024',
    rating: '1.8',
    subscribed: '22',
  },
]

type User = (typeof USERS)[number]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Activity')
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'User Name',
        cell: ({ row }) => {
          const user = row.original

          return (
            <div className="flex items-center gap-[12px]">
              <div className="w-[32px] h-[32px] rounded-full bg-[#fef8ed] flex items-center justify-center text-figma-primary font-bold text-[14px]">
                {user.name.charAt(0)}
              </div>
              <span className="font-semibold text-figma-text-dark text-[14px]">
                {user.name}
              </span>
            </div>
          )
        },
      },
      {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ getValue }) => (
          <span className="font-medium text-[#7e818c] text-[13px]">
            {getValue<string>()}
          </span>
        ),
      },
      {
        accessorKey: 'registration',
        header: 'Registration',
        cell: ({ getValue }) => (
          <span className="text-[13px] text-[#7e818c]">
            {getValue<string>()}
          </span>
        ),
      },
      {
        accessorKey: 'lastLogon',
        header: 'Last Logon',
        cell: ({ getValue }) => (
          <span className="text-[13px] text-[#7e818c]">
            {getValue<string>()}
          </span>
        ),
      },
      {
        accessorKey: 'cohort',
        header: 'Cohort',
        cell: ({ getValue }) => (
          <span className="px-[12px] py-[6px] bg-[#f5f5f5] text-[#7e818c] rounded-full text-[12px] font-medium">
            {getValue<string>()}
          </span>
        ),
      },
      {
        accessorKey: 'rating',
        header: 'Ratings',
        cell: ({ getValue }) => (
          <div className="flex items-center gap-[6px]">
            <svg
              className="w-[16px] h-[16px] text-figma-accent-orange"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-bold text-figma-text-dark text-[14px]">
              {getValue<string>()}
            </span>
          </div>
        ),
      },
      {
        accessorKey: 'subscribed',
        header: 'Subscribed (Days)',
        cell: ({ getValue }) => (
          <span className="font-bold text-figma-primary text-[14px]">
            {getValue<string>()}
          </span>
        ),
      },
      {
        id: 'action',
        header: 'Action',
        enableSorting: false,
        cell: () => (
          <button className="w-[36px] h-[36px] flex items-center justify-center text-[#c4c4c4] hover:text-figma-primary bg-white rounded-[4px] shadow-figma-card transition-all mx-auto">
            <svg
              className="w-[18px] h-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        ),
      },
    ],
    []
  )

  const table = useReactTable({
    data: USERS,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="p-8 w-full max-w-full mx-auto font-sans text-figma-text-dark bg-transparent">
      {/* Cards Section */}
      <section className="mb-10">
        {/* Toggle / Tabs exactly matching the layout style */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[28px] font-bold tracking-tight">Overview</h2>

          <div className="inline-flex bg-figma-bg p-1 rounded-xl shadow-figma-card">
            {(['Activity', 'Payments'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-[10px] text-[14px] leading-5 font-semibold transition-all rounded-[10px] ${
                  activeTab === tab
                    ? 'bg-white text-figma-primary shadow-figma-soft border border-gray-50'
                    : 'text-figma-gray hover:text-figma-text-dark'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Cards Grid strictly mimicking 200px height and 12px radius */}
        <div
          className={`grid gap-6 ${activeTab === 'Payments' ? 'grid-cols-4' : 'grid-cols-3'}`}
        >
          {SUMMARY_DATA[activeTab].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-[12px] h-[200px] p-[24px] shadow-figma-soft border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition-all"
            >
              <div className="flex justify-between items-start">
                <p className="text-[14px] font-medium text-figma-gray leading-tight mt-1">
                  {card.title}
                </p>
                <div
                  className={`w-[46.75px] h-[42px] rounded-[9px] flex items-center justify-center shadow-figma-btn ${card.color}`}
                  style={{ backgroundColor: card.bg }}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={card.icon} />
                  </svg>
                </div>
              </div>
              <h3 className="text-[40px] font-bold text-figma-text-dark leading-none tracking-tight">
                {card.value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* User Table Section */}
      <section className="bg-white rounded-[16px] shadow-figma-soft border border-gray-100 overflow-hidden">
        {/* Table Header / Actions */}
        <div className="px-8 py-7 flex items-center justify-between">
          <div>
            <h3 className="text-[20px] font-bold text-figma-text-dark">
              User List
            </h3>
            <p className="text-[13px] text-figma-gray mt-1">
              Manage and track user activity details.
            </p>
          </div>

          <div className="flex items-center gap-[15px]">
            <div className="relative">
              <svg
                className="absolute left-[15px] top-[13px] w-[18px] h-[18px] text-[#8b8d97]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search"
                value={globalFilter}
                onChange={(event) => setGlobalFilter(event.target.value)}
                className="pl-[42px] pr-4 py-[11px] bg-white border border-[#e4e5e7] rounded-[10px] text-[13px] text-figma-text-dark focus:outline-none focus:ring-1 focus:ring-figma-primary w-[260px] "
              />
            </div>
            {/* Generic Utilities */}
            <button className="w-[42px] h-[42px] flex items-center justify-center text-[#8b8d97] hover:text-figma-primary border border-[#e4e5e7] rounded-[10px] bg-white">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
            <button className="w-[42px] h-[42px] flex items-center justify-center text-[#8b8d97] hover:text-figma-primary border border-[#e4e5e7] rounded-[10px] bg-white">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
            </button>
            <button className="h-[42px] px-[20px] flex items-center justify-center bg-figma-primary hover:bg-opacity-90 text-white font-medium text-[13px] rounded-[10px] gap-2 shadow-figma-btn">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export
            </button>
          </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-[#fafafa] border-y border-[#f5f5f5]">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const isCentered =
                      header.column.id === 'subscribed' ||
                      header.column.id === 'action'
                    const sorted = header.column.getIsSorted()

                    return (
                      <th
                        key={header.id}
                        className={`px-8 py-5 text-[12px] font-semibold text-[#848a95] uppercase ${isCentered ? 'text-center' : ''}`}
                      >
                        {header.isPlaceholder ? null : (
                          <button
                            type="button"
                            onClick={header.column.getToggleSortingHandler()}
                            disabled={!header.column.getCanSort()}
                            className={`inline-flex items-center gap-1 uppercase ${isCentered ? 'justify-center' : ''} ${header.column.getCanSort() ? 'cursor-pointer hover:text-figma-primary' : 'cursor-default'}`}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            <svg
                              className={`w-3 h-3 transition-transform ${sorted === 'asc' ? 'rotate-180 text-figma-primary' : sorted === 'desc' ? 'text-figma-primary' : ''}`}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="m6 9 6 6 6-6" />
                            </svg>
                          </button>
                        )}
                      </th>
                    )
                  })}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-[#f5f5f5]">
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-[#fef8ed]/20 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`px-8 py-6 ${cell.column.id === 'subscribed' || cell.column.id === 'action' ? 'text-center' : ''}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {table.getRowModel().rows.length === 0 && (
                <tr>
                  <td
                    className="px-8 py-10 text-center text-[13px] text-[#7e818c]"
                    colSpan={columns.length}
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
