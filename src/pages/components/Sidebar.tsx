export default function Sidebar() {
  return (
    <aside className="sidebar w-full md:w-1/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </aside>
  );
}