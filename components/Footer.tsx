export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[var(--border)] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-black">EvolveD</span>. All rights reserved.
        </p>

        <p className="text-xs uppercase tracking-wide text-[var(--primary)]">
          Learn today, evolve tomorrow
        </p>
      </div>
    </footer>
  );
}