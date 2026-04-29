export const Header = () => {
  return (
    <header className="border-b bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">App Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-blue-500">
                Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
