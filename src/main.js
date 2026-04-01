import "./styles.css";
import { analyticsPromise } from "./firebase.js";

const root = document.querySelector("#app");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const phraseGroups = [
  {
    lead: "builds",
    focus: "interfaces",
    tail: "that react like they are alive"
  },
  {
    lead: "ships",
    focus: "systems",
    tail: "that stay readable under pressure"
  },
  {
    lead: "writes",
    focus: "automation",
    tail: "so repetition disappears"
  },
  {
    lead: "crosses",
    focus: "stacks",
    tail: "without slowing delivery"
  },
  {
    lead: "turns",
    focus: "complex workflows",
    tail: "into something people can actually use"
  }
];

const proofItems = [
  {
    count: "02",
    title: "company experience",
    copy:
      "Worked with two different web development companies and shipped product work that had to function beyond a portfolio screenshot."
  },
  {
    count: "04+",
    title: "years freelancing + automation",
    copy:
      "Four years of freelance builds and Python web automations taught me to handle real constraints, real clients, and ugly edge cases."
  },
  {
    count: "CS",
    title: "computer science major",
    copy:
      "The visual side matters, but the foundation matters too. I am majoring in computer science while continuing to build in the field."
  },
  {
    count: "ANY",
    title: "stack flexibility",
    copy:
      "I do not lock myself to a single stack. Frontend, backend, databases, APIs, Firebase, browser flows, and custom glue code are all fair game."
  }
];

const traceColumns = [
  [
    "react surfaces",
    "next.js",
    "motion systems",
    "responsive detail",
    "state flows",
    "component logic"
  ],
  [
    "node services",
    "firebase",
    "api contracts",
    "database design",
    "auth layers",
    "deployment"
  ],
  [
    "python automation",
    "playwright",
    "selenium",
    "queue logic",
    "scraping",
    "reporting"
  ]
];

const stackRibbons = [
  [
    "React",
    "Next.js",
    "Vue",
    "Node.js",
    "Express",
    "Firebase",
    "Python",
    "Django",
    "FastAPI"
  ],
  [
    "Laravel",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    "Playwright",
    "Selenium",
    "Scraping",
    "Automation",
    "Deployments"
  ]
];

const rawAccounts = [
  "zinounew123@gmail.com",
  "ops.vector@proton.me",
  "runner.delta@outlook.com",
  "relay.cache@icloud.com"
];

const automationTargets = [
  "checkout flow",
  "inventory sync",
  "lead capture",
  "session farm",
  "report exporter",
  "dashboard sweep"
];

const runtimeState = {
  sessions: 18,
  queue: 4,
  retries: 1,
  success: 98.2
};

const phraseRail = stackRibbons
  .map((group, index) => {
    const items = [...group, ...group].map((item) => `<span>${item}</span>`).join("");
    return `<div class="stack-ribbon ${index % 2 ? "reverse" : ""}">${items}</div>`;
  })
  .join("");

const traceMarkup = traceColumns
  .map((column, index) => {
    const items = [...column, ...column, ...column]
      .map((item) => `<span>${item}</span>`)
      .join("");
    return `<div class="trace-column trace-column-${index + 1}"><div class="trace-float">${items}</div></div>`;
  })
  .join("");

root.innerHTML = `
  <div class="fx-grid" aria-hidden="true"></div>
  <div class="fx-noise" aria-hidden="true"></div>
  <div class="fx-vignette" aria-hidden="true"></div>

  <header class="topline">
    <a class="brand" href="#top">zuc1fer</a>
    <p class="topline-copy">full stack web developer // web automator // computer science</p>
    <nav class="topnav">
      <a href="#proof">proof</a>
      <a href="#automation">automation</a>
      <a href="#availability">availability</a>
    </nav>
  </header>

  <main class="site-shell" id="top">
    <section class="scene hero-scene" data-scene="hero">
      <div class="sticky-stage hero-stage">
        <div class="hero-meta">
          <span>04+ years freelance + python automation</span>
          <span>02 companies</span>
          <span>computer science major</span>
        </div>

        <div class="hero-copy">
          <p class="micro-copy">full stack web developer / web automator</p>
          <div class="hero-name-stack">
            <div class="hero-backplane" aria-hidden="true">
              <span class="hero-back-line">FULL STACK / PYTHON / FIREBASE / API / UI</span>
              <span class="hero-back-line hero-back-line-alt">AUTOMATION / SCRAPING / SYSTEMS / DELIVERY</span>
            </div>
            <div class="hero-fragments" aria-hidden="true">
              <span class="hero-fragment hero-fragment-a">zuc1fer</span>
              <span class="hero-fragment hero-fragment-b">zuc1fer</span>
              <span class="hero-fragment hero-fragment-c">zuc1fer</span>
              <span class="hero-fragment hero-fragment-d">zuc1fer</span>
            </div>
            <h1 class="hero-name">zuc1fer</h1>
          </div>
          <p class="hero-phrase">
            <span data-phrase-lead>${phraseGroups[0].lead}</span>
            <span class="hero-focus" data-phrase-focus>${phraseGroups[0].focus}</span>
            <span data-phrase-tail>${phraseGroups[0].tail}</span>
          </p>
          <p class="hero-summary">
            I build frontends, backends, browser automations, APIs, data flows, and the custom glue that makes serious web software feel sharp.
            The goal is not to look technical. The goal is to actually be technical.
          </p>
        </div>

        <div class="fact-rail" aria-label="experience highlights">
          <div class="fact-row">
            <strong>05+</strong>
            <span>years shipping freelance work and Python web automations</span>
          </div>
          <div class="fact-row">
            <strong>02</strong>
            <span>companies where I worked on real web development delivery</span>
          </div>
          <div class="fact-row">
            <strong>ANY</strong>
            <span>stack if it solves the product problem cleanly</span>
          </div>
          <div class="fact-row">
            <strong>+150</strong>
            <span>projects where I applied technical solutions to real-world problems</span>
          </div>
        </div>

              <div class="contact-links">
        <a class="contact-link" href="https://github.com/zuc1fer" target="_blank" rel="noreferrer">
          <span class="contact-label">github</span>
          <span class="contact-value">github.com/zuc1fer</span>
        </a>
        <a class="contact-link" href="https://www.linkedin.com/in/zineddine-meskine-b410a72b5" target="_blank" rel="noreferrer">
          <span class="contact-label">linkedin</span>
          <span class="contact-value">zineddine meskine</span>
        </a>
        <a class="contact-link" href="https://t.me/zuc1fer" target="_blank" rel="noreferrer">
          <span class="contact-label">telegram</span>
          <span class="contact-value">@zuc1fer</span>
        </a>
        <a class="contact-link" href="mailto:zuc1fer.business@gmail.com">
          <span class="contact-label">email</span>
          <span class="contact-value">zuc1fer.business@gmail.com</span>
        </a>
      </div>

        <div class="hero-ghost hero-ghost-a">SYSTEMS</div>
        <div class="hero-ghost hero-ghost-b">AUTOMATION</div>

      </div>
    </section>

    <section class="scene motion-scene" data-scene="motion">
      <div class="sticky-stage motion-stage">
        <h2 class="section-title center-title">
          Frontend precision, backend pressure, browser control, and the parts most portfolios avoid showing.
        </h2>

        <div class="motion-lines" aria-hidden="true">
          <div class="motion-line line-a"><div class="motion-float"><span>frontend precision</span></div></div>
          <div class="motion-line line-b"><div class="motion-float"><span>backend pressure</span></div></div>
          <div class="motion-line line-c"><div class="motion-float"><span>automation obsession</span></div></div>
        </div>

        <div class="trace-columns" aria-hidden="true">
          ${traceMarkup}
        </div>
      </div>
    </section>

    <section class="proof-scene" id="proof">
      <div class="proof-head">
        <p class="micro-copy">proof</p>
        <h2 class="section-title">
          Range is easy to claim. Execution is what matters.
        </h2>
      </div>

      <div class="proof-list">
        ${proofItems
          .map(
            (item) => `
              <article class="proof-row" data-proof>
                <span class="proof-count">${item.count}</span>
                <div class="proof-copy">
                  <h3>${item.title}</h3>
                  <p>${item.copy}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="scene terminal-scene" id="automation" data-scene="terminal">
      <div class="sticky-stage terminal-stage">
        <div class="terminal-side">
          <div class="terminal-copy">
            <p class="micro-copy">automation runtime</p>
            <h2 class="section-title">
              Repetition belongs to scripts, not humans.
            </h2>
            <p class="section-copy">
              I build browser automations, scraping flows, report exporters, session handling, retry logic, and custom systems that remove manual work without making the product feel fragile.
            </p>
          </div>

          <div class="runtime-strip">
            <div class="runtime-row">
              <span>sessions</span>
              <strong data-runtime="sessions">18</strong>
            </div>
            <div class="runtime-row">
              <span>queue</span>
              <strong data-runtime="queue">04</strong>
            </div>
            <div class="runtime-row">
              <span>retries</span>
              <strong data-runtime="retries">01</strong>
            </div>
            <div class="runtime-row">
              <span>success</span>
              <strong data-runtime="success">98.2%</strong>
            </div>
          </div>
        </div>

        <div class="terminal-shell">
          <div class="terminal-head">
            <div class="terminal-leds" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>masked runtime output</p>
            <div class="terminal-live">
              <span class="live-dot"></span>
              live
            </div>
          </div>
          <div class="terminal-screen" data-terminal-feed></div>
        </div>
      </div>
    </section>

    <section class="stack-scene">
      <p class="micro-copy">selected surface area</p>
      <div class="stack-ribbons">
        ${phraseRail}
      </div>
      <p class="stack-summary">
        I can work across most modern web stacks. The point is choosing the right tools for the job, then making the experience feel cleaner and faster than the complexity behind it.
      </p>
    </section>

    <footer class="availability" id="availability">
      <p class="micro-copy">availability</p>
      <h2>zuc1fer</h2>
      <p>
        Full stack web developer and web automator with company experience, freelance depth, and a computer science background. Open to serious builds, custom systems, and automation-heavy work.
      </p>
      <div class="contact-links">
        <a class="contact-link" href="https://github.com/zuc1fer" target="_blank" rel="noreferrer">
          <span class="contact-label">github</span>
          <span class="contact-value">github.com/zuc1fer</span>
        </a>
        <a class="contact-link" href="https://www.linkedin.com/in/zineddine-meskine-b410a72b5" target="_blank" rel="noreferrer">
          <span class="contact-label">linkedin</span>
          <span class="contact-value">zineddine meskine</span>
        </a>
        <a class="contact-link" href="https://t.me/zuc1fer" target="_blank" rel="noreferrer">
          <span class="contact-label">telegram</span>
          <span class="contact-value">@zuc1fer</span>
        </a>
        <a class="contact-link" href="mailto:zuc1fer.business@gmail.com">
          <span class="contact-label">email</span>
          <span class="contact-value">zuc1fer.business@gmail.com</span>
        </a>
      </div>
    </footer>
  </main>
`;

const sceneNodes = Array.from(document.querySelectorAll("[data-scene]"));
const proofRows = Array.from(document.querySelectorAll("[data-proof]"));
const phraseLead = document.querySelector("[data-phrase-lead]");
const phraseFocus = document.querySelector("[data-phrase-focus]");
const phraseTail = document.querySelector("[data-phrase-tail]");
const terminalFeed = document.querySelector("[data-terminal-feed]");
const runtimeNodes = {
  sessions: document.querySelector('[data-runtime="sessions"]'),
  queue: document.querySelector('[data-runtime="queue"]'),
  retries: document.querySelector('[data-runtime="retries"]'),
  success: document.querySelector('[data-runtime="success"]')
};

const scrambleAlphabet = "ZXCVBNMASDFGHJKLQWERTYUIOP1234567890<>/[]{}";
let phraseIndex = 0;
let terminalStarted = false;
let tickQueued = false;
let scrollIdleTimer = 0;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function maskAccount(account) {
  const [name, domain] = account.split("@");
  const visibleStart = name.slice(0, 2);
  const visibleEnd = name.slice(-3);
  const maskedName = `${visibleStart}***${visibleEnd}`;
  const [domainName, extension] = domain.split(".");
  return `${maskedName}@${domainName.slice(0, 1)}****.${extension}`;
}

function scrambleTo(element, nextText) {
  if (reducedMotion || !element) {
    if (element) {
      element.textContent = nextText;
    }
    return;
  }

  let frame = 0;
  const frameLimit = nextText.length + 10;

  const step = () => {
    const output = nextText
      .split("")
      .map((char, index) => {
        if (char === " ") {
          return " ";
        }

        if (index < frame / 2.2) {
          return nextText[index];
        }

        return scrambleAlphabet[Math.floor(Math.random() * scrambleAlphabet.length)];
      })
      .join("");

    element.textContent = output;
    frame += 1;

    if (frame <= frameLimit) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = nextText;
    }
  };

  window.requestAnimationFrame(step);
}

function cyclePhrases() {
  if (reducedMotion) {
    return;
  }

  window.setInterval(() => {
    phraseIndex = (phraseIndex + 1) % phraseGroups.length;
    const next = phraseGroups[phraseIndex];
    scrambleTo(phraseLead, next.lead);
    window.setTimeout(() => scrambleTo(phraseFocus, next.focus), 80);
    window.setTimeout(() => scrambleTo(phraseTail, next.tail), 140);
  }, 2800);
}

function sceneProgress(node) {
  const rect = node.getBoundingClientRect();
  const travel = rect.height - window.innerHeight;

  if (travel <= 0) {
    return rect.top < 0 ? 1 : 0;
  }

  return clamp(-rect.top / travel, 0, 1);
}

function updateScrollState() {
  sceneNodes.forEach((node) => {
    node.style.setProperty("--progress", sceneProgress(node).toFixed(4));
  });

  const viewportCenter = window.innerHeight * 0.5;

  proofRows.forEach((row) => {
    const rect = row.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
    const focus = clamp(1 - distance / (window.innerHeight * 0.75), 0, 1);
    row.style.setProperty("--focus", focus.toFixed(4));
    row.classList.toggle("is-active", focus > 0.72);
  });
}

function requestScrollState() {
  if (tickQueued) {
    return;
  }

  tickQueued = true;
  window.requestAnimationFrame(() => {
    updateScrollState();
    tickQueued = false;
  });
}

function setScrollState(state) {
  document.body.dataset.scrollState = state;
}

function markScrollActivity() {
  setScrollState("active");
  window.clearTimeout(scrollIdleTimer);
  scrollIdleTimer = window.setTimeout(() => setScrollState("idle"), 180);
  requestScrollState();
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildTerminalLine() {
  const timestamp = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const mode = randomInt(0, 4);

  if (mode === 0) {
    return {
      tone: "ok",
      timestamp,
      parts: [
        { text: `[worker-${randomInt(2, 9).toString().padStart(2, "0")}] ` },
        { text: maskAccount(pick(rawAccounts)), className: "masked" },
        {
          text: ` | working | connection success | balance: ${pick([144, 262, 404, 666, 802])}`
        }
      ]
    };
  }

  if (mode === 1) {
    return {
      tone: "accent",
      timestamp,
      parts: [
        { text: "[vault] password: " },
        { text: "****************", className: "masked" },
        { text: " | token rotated | relay stable" }
      ]
    };
  }

  if (mode === 2) {
    return {
      tone: "ok",
      timestamp,
      parts: [
        {
          text: `[scraper] ${pick(automationTargets)} | selectors healed | retries: ${randomInt(0, 3)
            .toString()
            .padStart(2, "0")}`
        }
      ]
    };
  }

  if (mode === 3) {
    return {
      tone: "warn",
      timestamp,
      parts: [
        {
          text: `[queue] anti-bot noise detected | stealth profile rotated | session kept alive`
        }
      ]
    };
  }

  return {
    tone: "accent",
    timestamp,
    parts: [
      {
        text: `[sync] ${pick(automationTargets)} | webhook clean | export sealed | latency: ${randomInt(
          24,
          73
        )}ms`
      }
    ]
  };
}

function appendTypedLine(line) {
  return new Promise((resolve) => {
    const row = document.createElement("p");
    row.className = `terminal-line ${line.tone}`;

    const prompt = document.createElement("span");
    prompt.className = "prompt";
    prompt.textContent = `[${line.timestamp}]`;

    const body = document.createElement("span");
    body.className = "line-body";

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.textContent = "_";

    row.append(prompt, body, cursor);
    terminalFeed.append(row);
    terminalFeed.scrollTop = terminalFeed.scrollHeight;

    if (reducedMotion) {
      line.parts.forEach((part) => {
        const span = document.createElement("span");
        if (part.className) {
          span.className = part.className;
        }
        span.textContent = part.text;
        body.append(span);
      });
      cursor.remove();
      resolve();
      return;
    }

    let partIndex = 0;
    let charIndex = 0;
    let activeSpan = null;

    const typeNext = () => {
      if (partIndex >= line.parts.length) {
        cursor.remove();
        resolve();
        return;
      }

      const part = line.parts[partIndex];

      if (!activeSpan) {
        activeSpan = document.createElement("span");
        if (part.className) {
          activeSpan.className = part.className;
        }
        body.append(activeSpan);
      }

      activeSpan.textContent += part.text[charIndex];
      charIndex += 1;
      terminalFeed.scrollTop = terminalFeed.scrollHeight;

      if (charIndex >= part.text.length) {
        partIndex += 1;
        charIndex = 0;
        activeSpan = null;
      }

      window.setTimeout(typeNext, 10 + Math.random() * 16);
    };

    typeNext();
  });
}

function trimTerminal() {
  while (terminalFeed.children.length > 18) {
    terminalFeed.removeChild(terminalFeed.firstElementChild);
  }
}

function renderRuntime() {
  runtimeNodes.sessions.textContent = String(runtimeState.sessions).padStart(2, "0");
  runtimeNodes.queue.textContent = String(runtimeState.queue).padStart(2, "0");
  runtimeNodes.retries.textContent = String(runtimeState.retries).padStart(2, "0");
  runtimeNodes.success.textContent = `${runtimeState.success.toFixed(1)}%`;
}

function updateRuntimeMetrics() {
  runtimeState.sessions = clamp(runtimeState.sessions + randomInt(-2, 3), 10, 38);
  runtimeState.queue = clamp(runtimeState.queue + randomInt(-1, 2), 1, 12);
  runtimeState.retries = clamp(runtimeState.retries + randomInt(-1, 1), 0, 7);
  runtimeState.success = clamp(runtimeState.success + (Math.random() * 0.6 - 0.3), 96.4, 99.8);
  renderRuntime();
}

async function startTerminal() {
  if (terminalStarted) {
    return;
  }

  terminalStarted = true;
  renderRuntime();
  window.setInterval(updateRuntimeMetrics, reducedMotion ? 1400 : 900);

  while (terminalStarted) {
    await appendTypedLine(buildTerminalLine());
    trimTerminal();
    await new Promise((resolve) => {
      window.setTimeout(resolve, reducedMotion ? 120 : randomInt(140, 320));
    });
  }
}

analyticsPromise
  .then((analytics) => {
    document.documentElement.dataset.analytics = analytics ? "ready" : "off";
  })
  .catch(() => {
    document.documentElement.dataset.analytics = "off";
  });

setScrollState("idle");
cyclePhrases();
updateScrollState();
startTerminal();

window.addEventListener("scroll", markScrollActivity, { passive: true });
window.addEventListener("resize", requestScrollState);

