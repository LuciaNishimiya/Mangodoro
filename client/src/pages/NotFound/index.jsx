import "./styles.css";
import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <main className="Error-404">
      <h1>Not Found 404</h1>

      <button>
        <Link to="/">Go to home</Link>
      </button>
    </main>
  );
}
