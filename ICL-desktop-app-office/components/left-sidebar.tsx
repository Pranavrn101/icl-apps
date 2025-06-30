"use client"

import { LayoutDashboard, FileText, Upload, Settings, HelpCircle, Users } from "lucide-react"

interface LeftSidebarProps {
  activeItem: string
  onNavItemClick: (item: string) => void
}

export function LeftSidebar({ activeItem, onNavItemClick }: LeftSidebarProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "jobcards", label: "Job Cards", icon: FileText },
    { id: "uploads", label: "Uploads", icon: Upload },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "help", label: "Help & Support", icon: HelpCircle },
     { id: "staff", label: "Warehouse Staff List", icon: Users },
  ]

    return (
    <div className="w-1/5 bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex flex-col">
      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavItemClick(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeItem === item.id
                    ? "bg-[#142d6a] text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
