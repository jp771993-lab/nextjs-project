export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold">Register</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded border p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border p-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border p-2"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-500 px-4 py-2 text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
