export const Sidebar = () => {
  return (
    <aside className="h-full w-64 bg-gray-100 p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="/dashboard" className="block rounded p-2 hover:bg-gray-200">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/dashboard/settings"
              className="block rounded p-2 hover:bg-gray-200"
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
