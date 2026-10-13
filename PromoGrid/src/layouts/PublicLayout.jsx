import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/layout/PublicNavbar";

function PublicLayout() {
  return (
    <div className="app">
      <PublicNavbar />

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="public-footer">
        <span>© 2026 PromoGrid</span>
        <span>Every Promotion Has a Place.</span>
      </footer>
    </div>
  );
}

export default PublicLayout;
