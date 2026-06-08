export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-void)',
      }}
    >
      <p
        className="text-xs tracking-widest uppercase"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
      >
        © {new Date().getFullYear()} Yehia Mohamed Elsokkary — All rights reserved.
      </p>
    </footer>
  )
}
