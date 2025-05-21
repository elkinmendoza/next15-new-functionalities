export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        This is a demo app to showcase the new features of Next.js 13.4. It
        includes a dashboard and an about page. The dashboard page is a client
        component that uses React hooks to manage state.
        {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}
