export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Khuswant Sharma. Independent research, not investment advice.</p>
      </div>
    </footer>
  );
}
