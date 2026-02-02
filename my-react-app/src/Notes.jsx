const Notes = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📘 React Basics Notes</h1>

      <section style={styles.card}>
        <h2>🚀 What is React?</h2>
        <p>
          React is a JavaScript library used to build fast and interactive user
          interfaces. It is component-based and maintained by Facebook.
        </p>
      </section>

      <section style={styles.card}>
        <h2>📦 Installation Commands</h2>
        <pre style={styles.code}>
npx create-react-app my-app
cd my-app
npm start
        </pre>

        <pre style={styles.code}>
npm create vite@latest my-app
cd my-app
npm install
npm run dev
        </pre>
      </section>

      <section style={styles.card}>
        <h2>🧩 Component</h2>
        <pre style={styles.code}>
{`function Hello() {
  return <h1>Hello React</h1>;
}

export default Hello;`}
        </pre>
      </section>

      <section style={styles.card}>
        <h2>🧠 useState Hook</h2>
        <pre style={styles.code}>
{`import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
};`}
        </pre>
      </section>

      <section style={styles.card}>
        <h2>🎯 Props</h2>
        <pre style={styles.code}>
{`const Card = ({ title }) => {
  return <h2>{title}</h2>;
};

<Card title="React Notes" />`}
        </pre>
      </section>

      <section style={styles.card}>
        <h2>📋 Important Commands</h2>
        <ul>
          <li><b>npm start</b> – run project</li>
          <li><b>npm run dev</b> – run vite project</li>
          <li><b>npm install</b> – install dependencies</li>
          <li><b>npm build</b> – production build</li>
        </ul>
      </section>

      <section style={styles.card}>
        <h2>💡 Best Practices</h2>
        <ul>
          <li>Use small reusable components</li>
          <li>Always use keys in lists</li>
          <li>Keep logic clean</li>
          <li>Use hooks correctly</li>
        </ul>
      </section>

      <footer style={styles.footer}>
        ✨ Happy Learning React ✨
      </footer>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "30px",
    fontFamily: "Segoe UI, sans-serif",
    color: "#333",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "30px",
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
  code: {
    background: "#1e1e1e",
    color: "#00ffcc",
    padding: "15px",
    borderRadius: "8px",
    overflowX: "auto",
    marginTop: "10px",
    fontSize: "14px",
  },
  footer: {
    textAlign: "center",
    color: "#fff",
    marginTop: "40px",
    fontWeight: "bold",
  },
};

export default Notes;
