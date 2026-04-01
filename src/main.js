import "./styles.css";
import { analyticsPromise, app } from "./firebase.js";

const root = document.querySelector("#app");

root.innerHTML = `
  <main class="shell">
    <section class="hero">
      <p class="eyebrow">Firebase Initialized</p>
      <h1>Zuc1fer is connected to your web app.</h1>
      <p class="intro">
        Your Firebase project is now wired into this local starter and ready for
        Authentication, Firestore, Storage, Hosting, or any other SDKs you add next.
      </p>
      <div class="status-row">
        <div class="status-card">
          <span class="label">Project ID</span>
          <strong>${app.options.projectId}</strong>
        </div>
        <div class="status-card">
          <span class="label">Analytics</span>
          <strong id="analytics-status">Checking support...</strong>
        </div>
      </div>
    </section>
  </main>
`;

const analyticsStatus = document.querySelector("#analytics-status");

analyticsPromise.then((analytics) => {
  analyticsStatus.textContent = analytics
    ? "Enabled in this browser"
    : "Unavailable in this browser";
});
