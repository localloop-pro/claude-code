const elements = {
  syncTime: document.querySelector("#sync-time"),
  tabButtons: [...document.querySelectorAll("[data-tab-target]")],
  tabPanels: [...document.querySelectorAll("[data-panel]")],
  kpiGrid: document.querySelector("#kpi-grid"),
  operationsTape: document.querySelector("#operations-tape"),
  briefingStatus: document.querySelector("#briefing-status"),
  briefingSummary: document.querySelector("#business-summary"),
  briefingMode: document.querySelector("#briefing-mode"),
  briefingWatch: document.querySelector("#briefing-watch"),
  portfolioNav: document.querySelector("#portfolio-nav"),
  businessTag: document.querySelector("#business-tag"),
  spotlightName: document.querySelector("#spotlight-name"),
  spotlightSummary: document.querySelector("#spotlight-summary"),
  businessName: document.querySelector("#business-name"),
  businessSummary: document.querySelector("#business-summary"),
  businessMetrics: document.querySelector("#business-metrics"),
  primaryTrend: document.querySelector("#primary-trend"),
  primarySupport: document.querySelector("#primary-support"),
  primaryStructure: document.querySelector("#primary-structure"),
  shortSignal: document.querySelector("#short-signal"),
  shortDetail: document.querySelector("#short-detail"),
  longSignal: document.querySelector("#long-signal"),
  longDetail: document.querySelector("#long-detail"),
  technicalSignal: document.querySelector("#technical-signal"),
  technicalDetail: document.querySelector("#technical-detail"),
  sentimentSignal: document.querySelector("#sentiment-signal"),
  sentimentDetail: document.querySelector("#sentiment-detail"),
  riskSignal: document.querySelector("#risk-signal"),
  riskDetail: document.querySelector("#risk-detail"),
  orbitValue: document.querySelector("#orbit-value"),
  signalBars: document.querySelector("#signal-bars"),
  revenueCaption: document.querySelector("#revenue-caption"),
  revenueChart: document.querySelector("#revenue-chart"),
  agentGrid: document.querySelector("#agent-grid"),
  manualQueue: document.querySelector("#manual-queue"),
  providerSummary: document.querySelector("#provider-summary"),
  providerList: document.querySelector("#provider-list"),
  incidentList: document.querySelector("#incident-list"),
  deploymentSummary: document.querySelector("#deployment-summary"),
  deploymentList: document.querySelector("#deployment-list"),
  auditTrail: document.querySelector("#audit-trail"),
  forgeTitle: document.querySelector("#forge-title"),
  forgeStatus: document.querySelector("#forge-status"),
  forgeSummary: document.querySelector("#forge-summary"),
  forgeChipRow: document.querySelector("#forge-chip-row"),
  forgeStageGrid: document.querySelector("#forge-stage-grid"),
  forgeMetricGrid: document.querySelector("#forge-metric-grid"),
  forgeBuildList: document.querySelector("#forge-build-list"),
  forgeReleaseList: document.querySelector("#forge-release-list"),
  forgeGuardrailGrid: document.querySelector("#forge-guardrail-grid"),
};

const state = {
  dashboard: null,
  selectedBusinessId: null,
  activeTab: "overview",
};

const fallbackDashboard = {
  timezone: "Australia/Sydney",
  defaultBusinessId: "bondi-flagship",
  summary: [
    {
      label: "Businesses online",
      value: "18 / 18",
      detail: "Precincts, stores, and service lines currently reachable.",
    },
    {
      label: "AI operators active",
      value: "27",
      detail: "Concierge, campaign, retention, and recovery agents in flight.",
    },
    {
      label: "Today GMV",
      value: "A$182.4k",
      detail: "Live platform turnover across bookings, retail, and loyalty.",
    },
    {
      label: "BYOK posture",
      value: "14 healthy",
      detail: "Provider credentials linked, scoped, and within rotation policy.",
    },
  ],
  operationsTape: [
    "Fallback mode still renders the mission deck",
    "Relative asset paths enabled for subpath deploys",
    "Switch to live API automatically when available",
    "Bondi Local command deck remains deployable with npm start",
    "Forge intake stays attached to the Mission Control deploy rail",
  ],
  businesses: [
    {
      id: "bondi-flagship",
      tag: "Flagship precinct",
      name: "Bondi Beach Flagship",
      region: "Beachfront retail, bookings, loyalty, and walk-in orchestration",
      status: "Nominal",
      snapshot: "Walk-ins trending above forecast after surf report uplift.",
      summary:
        "This business is pacing ahead of forecast with strong booking fill, stable AI concierge load, and no payment degradation across prime mobile channels.",
      mode: "Growth capture",
      watchpoint: "Watch kiosk staffing from 4:30 PM if wind change reduces beach linger time.",
      focusScore: 92,
      metrics: [
        {
          label: "Today revenue",
          value: "A$24.8k",
          detail: "+18% against same weekday last week",
        },
        {
          label: "Bookings",
          value: "184",
          detail: "14 pending confirmation automations",
        },
        {
          label: "Return guests",
          value: "61%",
          detail: "Loyalty cohorts outperforming forecast",
        },
        {
          label: "Resolution time",
          value: "5m 12s",
          detail: "Median support completion with AI assist",
        },
      ],
      signals: [
        { label: "Demand capture", value: 88 },
        { label: "Automation cover", value: 93 },
        { label: "Guest sentiment", value: 84 },
      ],
      revenueCaption: "Seven-day demand curve for Bondi Beach Flagship",
      revenueTrend: [
        { label: "Mon", display: "A$18k", delta: "+4%", value: 54, order: 0 },
        { label: "Tue", display: "A$21k", delta: "+7%", value: 63, order: 1 },
        { label: "Wed", display: "A$19k", delta: "+2%", value: 58, order: 2 },
        { label: "Thu", display: "A$23k", delta: "+11%", value: 68, order: 3 },
        { label: "Fri", display: "A$28k", delta: "+18%", value: 84, order: 4 },
        { label: "Sat", display: "A$31k", delta: "+23%", value: 94, order: 5 },
        { label: "Sun", display: "A$26k", delta: "+15%", value: 77, order: 6 },
      ],
    },
    {
      id: "junction-retail",
      tag: "Retail cluster",
      name: "Bondi Junction Retail Lane",
      region: "Point-of-sale, local campaigns, and afterpay-enabled checkout",
      status: "Watch",
      snapshot: "Pacing well, but staffing automation is slightly behind the lunch surge.",
      summary:
        "Retail conversion remains strong, though roster automations are lagging and one payment fallback has increased manual review counts for the afternoon block.",
      mode: "Margin defend",
      watchpoint: "Escalate if manual approvals exceed 12 by 2:00 PM.",
      focusScore: 74,
      metrics: [
        {
          label: "Today revenue",
          value: "A$17.2k",
          detail: "+9% against same weekday last week",
        },
        {
          label: "Checkout success",
          value: "97.1%",
          detail: "One provider fallback still in watch state",
        },
        {
          label: "Staff coverage",
          value: "86%",
          detail: "Lunch roster automation behind by two shifts",
        },
        {
          label: "Review sentiment",
          value: "4.7 / 5",
          detail: "Faster response cadence on socials",
        },
      ],
      signals: [
        { label: "Demand capture", value: 81 },
        { label: "Automation cover", value: 69 },
        { label: "Guest sentiment", value: 88 },
      ],
      revenueCaption: "Seven-day demand curve for Bondi Junction Retail Lane",
      revenueTrend: [
        { label: "Mon", display: "A$13k", delta: "+3%", value: 46, order: 0 },
        { label: "Tue", display: "A$15k", delta: "+5%", value: 52, order: 1 },
        { label: "Wed", display: "A$14k", delta: "+2%", value: 49, order: 2 },
        { label: "Thu", display: "A$16k", delta: "+8%", value: 57, order: 3 },
        { label: "Fri", display: "A$18k", delta: "+10%", value: 67, order: 4 },
        { label: "Sat", display: "A$22k", delta: "+17%", value: 79, order: 5 },
        { label: "Sun", display: "A$19k", delta: "+12%", value: 70, order: 6 },
      ],
    },
    {
      id: "north-bondi-hospitality",
      tag: "Hospitality run",
      name: "North Bondi Dining Circuit",
      region: "Reservations, private events, and guest recovery loops",
      status: "Nominal",
      snapshot: "Tonight's covers are nearly full with private dining upsell converting well.",
      summary:
        "Dining demand is stable and the recovery agent is suppressing churn after wait-time complaints, keeping premium reservation inventory on target for the evening service.",
      mode: "Yield optimise",
      watchpoint: "Monitor kitchen prep estimates after 6:15 PM if walk-ins exceed 22.",
      focusScore: 87,
      metrics: [
        {
          label: "Booked covers",
          value: "312",
          detail: "18 high-value reservations still in pre-arrival sequence",
        },
        {
          label: "Average spend",
          value: "A$84",
          detail: "+6% after menu engineering changes",
        },
        {
          label: "Guest recovery",
          value: "91%",
          detail: "Complaints resolved before churn in last 24h",
        },
        {
          label: "Event pipeline",
          value: "A$42k",
          detail: "Private dining leads in late-stage negotiation",
        },
      ],
      signals: [
        { label: "Demand capture", value: 91 },
        { label: "Automation cover", value: 86 },
        { label: "Guest sentiment", value: 82 },
      ],
      revenueCaption: "Seven-day demand curve for North Bondi Dining Circuit",
      revenueTrend: [
        { label: "Mon", display: "A$21k", delta: "+5%", value: 59, order: 0 },
        { label: "Tue", display: "A$22k", delta: "+6%", value: 61, order: 1 },
        { label: "Wed", display: "A$20k", delta: "+2%", value: 55, order: 2 },
        { label: "Thu", display: "A$24k", delta: "+9%", value: 66, order: 3 },
        { label: "Fri", display: "A$29k", delta: "+14%", value: 82, order: 4 },
        { label: "Sat", display: "A$33k", delta: "+18%", value: 96, order: 5 },
        { label: "Sun", display: "A$27k", delta: "+11%", value: 74, order: 6 },
      ],
    },
    {
      id: "waverley-events",
      tag: "Events network",
      name: "Waverley Activations",
      region: "Events, tourism offers, local partnerships, and promo automation",
      status: "Risk",
      snapshot: "Event demand is strong, but one partner feed is stale and two launches are waiting for approval.",
      summary:
        "The activations line has upside this week, but stale partner inventory is creating mismatch risk in outbound campaigns and the approvals queue is now affecting time-sensitive promotions.",
      mode: "Stabilise supply",
      watchpoint: "Approve or kill pending partner campaigns before 5:00 PM.",
      focusScore: 58,
      metrics: [
        {
          label: "Campaign-ready offers",
          value: "42",
          detail: "7 blocked by stale partner feeds",
        },
        {
          label: "Promo CTR",
          value: "4.9%",
          detail: "+1.2 pts week-over-week",
        },
        {
          label: "Partner sync",
          value: "79%",
          detail: "Two venue APIs awaiting re-auth",
        },
        {
          label: "Launch delay",
          value: "38m",
          detail: "Approvals queue exceeds target threshold",
        },
      ],
      signals: [
        { label: "Demand capture", value: 77 },
        { label: "Automation cover", value: 57 },
        { label: "Guest sentiment", value: 72 },
      ],
      revenueCaption: "Seven-day demand curve for Waverley Activations",
      revenueTrend: [
        { label: "Mon", display: "A$9k", delta: "-2%", value: 34, order: 0 },
        { label: "Tue", display: "A$11k", delta: "+1%", value: 41, order: 1 },
        { label: "Wed", display: "A$10k", delta: "-1%", value: 38, order: 2 },
        { label: "Thu", display: "A$12k", delta: "+5%", value: 46, order: 3 },
        { label: "Fri", display: "A$16k", delta: "+11%", value: 60, order: 4 },
        { label: "Sat", display: "A$18k", delta: "+14%", value: 67, order: 5 },
        { label: "Sun", display: "A$14k", delta: "+7%", value: 52, order: 6 },
      ],
    },
  ],
  agents: [
    {
      domain: "Guest operations",
      name: "Concierge Swarm",
      status: "Nominal",
      summary: "Handling pre-arrival questions, itinerary nudges, and same-day conversions across chat, web, and SMS.",
      throughput: "612 conversations / 24h",
      automation: "98.4% auto-resolved",
      owner: "CX control",
    },
    {
      domain: "Retention",
      name: "Review Rescue",
      status: "Watch",
      summary: "Intervening on negative reviews with recovery offers and owner alerts after sentiment threshold breaches.",
      throughput: "34 recoveries / 24h",
      automation: "11 manual escalations",
      owner: "Brand team",
    },
    {
      domain: "Growth",
      name: "Campaign Autopilot",
      status: "Risk",
      summary: "Optimising ads, offers, and partner campaigns, but blocked by stale provider inventory in one activation lane.",
      throughput: "A$6.3k spend managed",
      automation: "2 approvals pending",
      owner: "Growth desk",
    },
    {
      domain: "Payments",
      name: "Checkout Sentinel",
      status: "Nominal",
      summary: "Watching transaction health, retrying failed charges, and preserving checkout continuity during provider slowdowns.",
      throughput: "3,128 payments / 24h",
      automation: "99.2% success routing",
      owner: "Finance ops",
    },
  ],
  manualQueue: [
    {
      priority: "P1",
      title: "Approve Waverley partner relaunch",
      state: "Risk",
      summary: "Two event campaigns are staged but blocked until partner feed freshness is re-validated.",
      owner: "Growth desk",
      deadline: "Before 5:00 PM",
    },
    {
      priority: "P2",
      title: "Re-auth one stale tourism API",
      state: "Watch",
      summary: "One destination partner token expires tonight and is suppressing offer inventory downstream.",
      owner: "Platform ops",
      deadline: "Within 2 hours",
    },
    {
      priority: "P2",
      title: "Patch Junction lunch roster gap",
      state: "Watch",
      summary: "Staffing automation is missing two midday shifts and customer queue times will widen if left unattended.",
      owner: "Ops desk",
      deadline: "Before 1:30 PM",
    },
  ],
  providers: [
    {
      product: "LLM runtime",
      name: "Anthropic",
      status: "Nominal",
      summary: "Primary provider for concierge, recovery, and super-admin copilots. Rate limits and tool calls are within policy.",
      scopes: ["messages", "tools", "batch"],
      owner: "AI platform",
      rotation: "Rotates 21 Mar",
      keyRef: "sk-ant-••••81NJ",
    },
    {
      product: "Forecasting",
      name: "OpenAI",
      status: "Nominal",
      summary: "Secondary model rail for forecasting jobs and creative variant generation during campaign bursts.",
      scopes: ["responses", "files", "realtime"],
      owner: "Growth desk",
      rotation: "Rotates 26 Mar",
      keyRef: "sk-proj-••••9Q4",
    },
    {
      product: "Payments",
      name: "Stripe",
      status: "Watch",
      summary: "Webhook backlog cleared, but watch remains active until the next payout reconciliation window closes cleanly.",
      scopes: ["payments", "webhooks", "payouts"],
      owner: "Finance ops",
      rotation: "Rotates 08 Apr",
      keyRef: "rk_live_••••2F7",
    },
    {
      product: "Messaging",
      name: "Twilio",
      status: "Nominal",
      summary: "Transactional SMS and fallback messaging are healthy across booking reminders and recovery offers.",
      scopes: ["messaging", "verify", "conversations"],
      owner: "CX control",
      rotation: "Rotates 30 Mar",
      keyRef: "AC••••7V3",
    },
    {
      product: "Partner inventory",
      name: "Google Maps Platform",
      status: "Risk",
      summary: "One partner experience feed is stale after scope drift. Re-auth is required before tonight's campaign wave.",
      scopes: ["places", "routes", "business-profile"],
      owner: "Platform ops",
      rotation: "Re-auth now",
      keyRef: "AIza••••W2P",
    },
  ],
  incidents: [
    {
      severity: "P1",
      business: "Waverley Activations",
      title: "Partner inventory feed stale",
      summary: "Offer inventory has not refreshed for 42 minutes and campaign launches are using degraded availability data.",
      age: "Opened 12m ago",
      owner: "Platform ops",
      action: "Re-auth required",
    },
    {
      severity: "P2",
      business: "Bondi Junction Retail Lane",
      title: "Fallback payment routing elevated",
      summary: "Secondary rail usage rose above threshold during lunch peak, increasing manual approval volume.",
      age: "Opened 27m ago",
      owner: "Finance ops",
      action: "Observe next payout batch",
    },
    {
      severity: "P3",
      business: "North Bondi Dining Circuit",
      title: "Wait-time sentiment spike",
      summary: "Recovery agent is containing churn, but two high-value diners flagged slower-than-forecast seating.",
      age: "Opened 38m ago",
      owner: "CX control",
      action: "Host follow-up queued",
    },
  ],
  deployments: [
    {
      surface: "Production web",
      environment: "Coolify mission-control-web",
      status: "Nominal",
      summary: "Static dashboard shell and API payload serving normally on the Node runtime. Health probe is green.",
      release: "master @ latest",
      runtime: "Node 22.x",
      updated: "Updated moments ago",
    },
    {
      surface: "Admin API",
      environment: "mission-control-api",
      status: "Nominal",
      summary: "Dashboard payload endpoint responding under target latency with no cache churn.",
      release: "Payload v1",
      runtime: "Native http server",
      updated: "Updated moments ago",
    },
    {
      surface: "BYOK vault",
      environment: "provider-credential-plane",
      status: "Watch",
      summary: "Most providers are healthy, but one geospatial partner credential requires immediate re-authorization.",
      release: "Policy pack 4.2",
      runtime: "Rotation policy active",
      updated: "Updated moments ago",
    },
    {
      surface: "Automation rail",
      environment: "agents-and-jobs",
      status: "Risk",
      summary: "Campaign approvals are blocked behind stale inventory. No infrastructure issue, but launch confidence is reduced.",
      release: "Agent pack March",
      runtime: "27 operators active",
      updated: "Updated moments ago",
    },
  ],
  forge: {
    headline: {
      status: "Live",
      title: "AutoForge is wired into the Mission Control rail",
      summary:
        "New build requests open inside the same command deck, branch through the same deployment discipline, and land on Coolify without leaving the admin surface.",
      chips: [
        "Mission Control-owned intake",
        "Branch-per-build flow",
        "Preview before publish",
        "Coolify release gate",
      ],
    },
    metrics: [
      {
        label: "Active briefs",
        value: "6",
        detail: "Four builds are generating and two are waiting on operator review.",
      },
      {
        label: "Median brief to preview",
        value: "14m",
        detail: "From accepted prompt to a reviewable environment with branch metadata attached.",
      },
      {
        label: "Publish confidence",
        value: "98.2%",
        detail: "Recent Forge runs reached deploy-ready state without manual patching.",
      },
      {
        label: "Coolify targets",
        value: "4",
        detail: "Web, API, worker, and preview rails are connected to the same release view.",
      },
    ],
    stages: [
      {
        phase: "01 Intake",
        title: "Capture the brief and assign a surface",
        status: "Live",
        detail:
          "Operator requests and agent-generated opportunities enter Mission Control first, then get pinned to the target business, route, or platform rail.",
        meta: ["Mission ticket #284", "Portfolio scoped", "Auth inherited"],
      },
      {
        phase: "02 Generate",
        title: "Open a branch and build inside guardrails",
        status: "Generating",
        detail:
          "AutoForge creates the implementation branch, writes the UI or workflow change, and keeps every step visible from the same deck.",
        meta: ["codex/forge-local-launch-kit", "UI + server touch", "Smoke checks queued"],
      },
      {
        phase: "03 Review",
        title: "Preview with audit context attached",
        status: "Review",
        detail:
          "Preview links, changed surfaces, and deployment notes stay attached to the build so super admins can approve without leaving Mission Control.",
        meta: ["Preview URL pending", "Audit note attached", "Rollback prepared"],
      },
      {
        phase: "04 Deploy",
        title: "Publish directly to Coolify",
        status: "Ready",
        detail:
          "Approved changes merge into the primary rail, inherit existing environment secrets, and appear in the deployment view immediately.",
        meta: ["Coolify target ready", "Shared env vars", "Release slot 5:30 PM"],
      },
    ],
    builds: [
      {
        surface: "Campaign surface",
        name: "Local launch kit generator",
        status: "Generating",
        summary:
          "Creating a reusable launch scaffold with merchant offers, analytics hooks, and modular conversion blocks for upcoming precinct drops.",
        branch: "codex/forge-local-launch-kit",
        owner: "AutoForge",
        next: "Preview URL in 6m",
        updated: "Touched 2m ago",
      },
      {
        surface: "Dashboard extension",
        name: "Merchant analytics overlay",
        status: "Review",
        summary:
          "Adds a Mission Control-ready reporting layer so newly generated surfaces can expose conversion and retention data on day one.",
        branch: "codex/forge-merchant-analytics",
        owner: "Growth desk",
        next: "Awaiting super-admin signoff",
        updated: "Touched 9m ago",
      },
      {
        surface: "Deployment rail",
        name: "Coolify release checklist",
        status: "Ready",
        summary:
          "Packaging deployment notes, route ownership, and rollback instructions into a repeatable publish card for all Forge-built surfaces.",
        branch: "codex/forge-coolify-checklist",
        owner: "Platform ops",
        next: "Promote during next rail window",
        updated: "Touched 14m ago",
      },
    ],
    releases: [
      {
        target: "Primary web rail",
        name: "mission-control-web",
        status: "Ready",
        summary:
          "Forge output merges into the main web deployment so the new surface ships with unified auth, observability, and release ownership.",
        branch: "master merge queued",
        window: "Next window 5:30 PM",
        updated: "Confidence 98%",
      },
      {
        target: "Preview environments",
        name: "coolify-previews",
        status: "Live",
        summary:
          "Each approved build can expose a review URL before publish, keeping stakeholder approval and regression checks in one rail.",
        branch: "Branch previews armed",
        window: "Created on demand",
        updated: "Healthy now",
      },
      {
        target: "Automation hooks",
        name: "agents-and-jobs",
        status: "Watch",
        summary:
          "Post-deploy agent sync is healthy overall, but campaign automation still waits on one stale partner inventory feed.",
        branch: "Job pack March",
        window: "Retry after re-auth",
        updated: "1 dependency at risk",
      },
    ],
    guardrails: [
      {
        title: "Unified auth boundary",
        detail:
          "Forge inherits the super-admin access model instead of creating a detached workflow or second login surface.",
      },
      {
        title: "Single deploy story",
        detail:
          "Generated changes move through the same Mission Control release rail, so rollback and ownership stay obvious.",
      },
      {
        title: "Branch-level traceability",
        detail:
          "Every Forge build opens a named branch and carries context for who requested it, what changed, and what ships next.",
      },
      {
        title: "Audit-ready approvals",
        detail:
          "Preview, approval, and publish decisions remain visible in the command deck and align with the existing dismissal and change-lock posture.",
      },
    ],
  },
};

function formatSyncLabel(isoString, timezone) {
  const date = new Date(isoString);
  return `Live sync ${date.toLocaleString("en-AU", {
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
  })} ${timezone}`;
}

function createMetricCard(metric, index) {
  const card = document.createElement("article");
  card.className = "kpi-card fade-up";
  card.style.setProperty("--delay", `${index * 70}ms`);
  card.innerHTML = `
    <span class="metric-label">${metric.label}</span>
    <strong>${metric.value}</strong>
    <span>${metric.detail}</span>
  `;
  return card;
}

function createPanelMetricCard(metric) {
  const card = document.createElement("article");
  card.className = "metric-card";
  card.innerHTML = `
    <span class="metric-label">${metric.label}</span>
    <strong class="metric-value">${metric.value}</strong>
    <span class="metric-detail">${metric.detail}</span>
  `;
  return card;
}

function createTapePill(item, index) {
  const pill = document.createElement("span");
  pill.className = "tape-pill fade-up";
  pill.style.setProperty("--delay", `${index * 80}ms`);
  pill.textContent = item;
  return pill;
}

function createSystemsPill(label, value, tone = "neutral") {
  const pill = document.createElement("article");
  pill.className = `systems-pill ${tone}`;
  pill.innerHTML = `
    <span class="systems-pill-label">${label}</span>
    <strong>${value}</strong>
  `;
  return pill;
}

function pillTone(status) {
  if (["Risk", "Blocked", "Failed"].includes(status)) {
    return "risk";
  }

  if (["Watch", "Queued", "Generating", "Review", "Pending"].includes(status)) {
    return "warn";
  }

  return "ok";
}

function statusClass(status) {
  const tone = pillTone(status);

  if (tone === "risk") {
    return "status-risk";
  }

  if (tone === "warn") {
    return "status-watch";
  }

  return "status-ok";
}

function withSyncTimestamp(dashboard) {
  return {
    ...dashboard,
    syncedAt: new Date().toISOString(),
  };
}

function normalizeTabId(tabId) {
  const validTab = elements.tabButtons.find((button) => button.dataset.tabTarget === tabId);
  return validTab ? tabId : "overview";
}

function syncTabHash(tabId) {
  const nextHash = `#${tabId}`;
  if (window.location.hash !== nextHash) {
    window.history.replaceState(null, "", nextHash);
  }
}

function setActiveTab(tabId, options = {}) {
  const nextTabId = normalizeTabId(tabId);

  state.activeTab = nextTabId;
  document.documentElement.dataset.activeTab = nextTabId;

  elements.tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === nextTabId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  elements.tabPanels.forEach((panel) => {
    const isActive = panel.dataset.panel === nextTabId;
    panel.classList.toggle("is-active", isActive);
    panel.toggleAttribute("hidden", !isActive);
    panel.setAttribute("aria-hidden", String(!isActive));
  });

  if (options.updateHash !== false) {
    syncTabHash(nextTabId);
  }
}

function renderSummary(dashboard) {
  elements.syncTime.textContent = formatSyncLabel(dashboard.syncedAt, dashboard.timezone);
  elements.kpiGrid.replaceChildren(
    ...dashboard.summary.map((metric, index) => createMetricCard(metric, index)),
  );
  elements.operationsTape.replaceChildren(
    ...dashboard.operationsTape.map((item, index) => createTapePill(item, index)),
  );
}

function createPortfolioButton(business) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "portfolio-button";
  button.dataset.businessId = business.id;
  button.innerHTML = `
    <div class="portfolio-title">
      <strong>${business.name}</strong>
      <span class="pill ${pillTone(business.status)}">${business.status}</span>
    </div>
    <p>${business.region}</p>
    <small>${business.snapshot}</small>
  `;
  button.addEventListener("click", () => {
    state.selectedBusinessId = business.id;
    renderBusinessFocus();
  });
  return button;
}

function renderPortfolio(dashboard) {
  elements.portfolioNav.replaceChildren(
    ...dashboard.businesses.map((business) => createPortfolioButton(business)),
  );
}

function buildSignalCopy(business) {
  const trend = business.revenueTrend ?? [];
  const firstPoint = trend[0];
  const lastPoint = trend[trend.length - 1] ?? firstPoint;
  const signalCover = business.signals?.[1]?.value ?? business.focusScore;
  const supportMetric = business.metrics?.[1]?.value ?? business.metrics?.[0]?.value ?? "—";
  const resolutionMetric = business.metrics?.[3]?.value ?? business.metrics?.[0]?.value ?? "—";

  return {
    trend: `Trend: ${business.status === "Risk" ? "Defensive" : "Upward"} ${firstPoint?.display ?? "—"}→${
      lastPoint?.display ?? "—"
    }`,
    support: `Support: ${supportMetric}`,
    structure: `Structure: ${business.status === "Risk" ? "Lower highs" : "Bullish HL/HH"}`,
    shortSignal: `Queue: ${supportMetric}`,
    shortDetail: `Signal: ${business.status === "Risk" ? "Hold" : "Cautious push"}`,
    longSignal: `Target: ${lastPoint?.display ?? "—"}`,
    longDetail: `Mode: ${business.mode}`,
    technicalSignal: `Automation cover: ${signalCover}%`,
    technicalDetail: `Resolution: ${resolutionMetric}`,
    sentimentSignal: business.snapshot,
    sentimentDetail: business.metrics?.[2]?.detail ?? business.summary,
    riskSignal: business.watchpoint,
    riskDetail: business.status === "Risk" ? "Immediate intervention recommended" : "Monitor for drift",
  };
}

function renderBusinessFocus() {
  const dashboard = state.dashboard;
  const business =
    dashboard.businesses.find((item) => item.id === state.selectedBusinessId) || dashboard.businesses[0];
  state.selectedBusinessId = business.id;

  const signals = buildSignalCopy(business);

  elements.spotlightName.textContent = business.name;
  elements.spotlightSummary.textContent = `${business.region}. ${business.snapshot}`;
  elements.businessSummary.textContent = business.summary;
  elements.briefingSummary.textContent = business.summary;
  elements.briefingMode.textContent = business.mode;
  elements.briefingWatch.textContent = business.watchpoint;
  elements.briefingStatus.textContent = business.status;
  elements.briefingStatus.className = `status-chip ${statusClass(business.status)}`;

  elements.businessTag.textContent = business.tag;
  elements.businessName.textContent = business.name;
  elements.businessMetrics.replaceChildren(...business.metrics.map((metric) => createPanelMetricCard(metric)));
  elements.orbitValue.textContent = `${business.focusScore}%`;
  elements.primaryTrend.textContent = signals.trend;
  elements.primarySupport.textContent = signals.support;
  elements.primaryStructure.textContent = signals.structure;
  elements.shortSignal.textContent = signals.shortSignal;
  elements.shortDetail.textContent = signals.shortDetail;
  elements.longSignal.textContent = signals.longSignal;
  elements.longDetail.textContent = signals.longDetail;
  elements.technicalSignal.textContent = signals.technicalSignal;
  elements.technicalDetail.textContent = signals.technicalDetail;
  elements.sentimentSignal.textContent = signals.sentimentSignal;
  elements.sentimentDetail.textContent = signals.sentimentDetail;
  elements.riskSignal.textContent = signals.riskSignal;
  elements.riskDetail.textContent = signals.riskDetail;

  elements.signalBars.replaceChildren(
    ...business.signals.map((signal) => {
      const row = document.createElement("div");
      row.className = "signal-row";
      row.innerHTML = `
        <span class="bar-label">${signal.label}</span>
        <div class="signal-track"><span class="signal-fill" style="--value:${signal.value}"></span></div>
        <strong class="signal-value">${signal.value}%</strong>
      `;
      return row;
    }),
  );

  elements.revenueCaption.textContent = business.revenueCaption;
  elements.revenueChart.replaceChildren(
    ...business.revenueTrend.map((point) => {
      const bar = document.createElement("article");
      bar.className = "revenue-bar fade-up";
      bar.style.setProperty("--delay", `${point.order * 60}ms`);
      bar.innerHTML = `
        <div class="revenue-column" style="--value:${point.value}">
          <strong>${point.display}</strong>
        </div>
        <div class="bar-footer">
          <span class="bar-label">${point.label}</span>
          <span>${point.delta}</span>
        </div>
      `;
      return bar;
    }),
  );

  document.querySelectorAll(".portfolio-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.businessId === business.id);
  });
}

function createAgentCard(agent, index) {
  const card = document.createElement("article");
  card.className = "agent-card fade-up";
  card.style.setProperty("--delay", `${index * 80}ms`);
  card.innerHTML = `
    <div class="provider-header">
      <div>
        <span class="metric-label">${agent.domain}</span>
        <h4>${agent.name}</h4>
      </div>
      <span class="pill ${pillTone(agent.status)}">${agent.status}</span>
    </div>
    <p>${agent.summary}</p>
    <div class="queue-footer">
      <span class="scope-chip">${agent.throughput}</span>
      <span class="scope-chip">${agent.automation}</span>
      <span class="scope-chip">${agent.owner}</span>
    </div>
  `;
  return card;
}

function createQueueCard(item, index) {
  const card = document.createElement("article");
  card.className = "queue-card fade-up";
  card.style.setProperty("--delay", `${index * 80}ms`);
  card.innerHTML = `
    <div class="queue-header">
      <div>
        <span class="queue-meta">${item.priority}</span>
        <strong>${item.title}</strong>
      </div>
      <span class="pill ${pillTone(item.state)}">${item.state}</span>
    </div>
    <p>${item.summary}</p>
    <div class="queue-footer">
      <span class="scope-chip">${item.owner}</span>
      <span class="scope-chip">${item.deadline}</span>
    </div>
  `;
  return card;
}

function createProviderCard(provider, index) {
  const card = document.createElement("article");
  card.className = "provider-card fade-up";
  card.style.setProperty("--delay", `${index * 80}ms`);
  card.innerHTML = `
    <div class="provider-header">
      <div>
        <span class="provider-meta">${provider.product}</span>
        <strong>${provider.name}</strong>
      </div>
      <span class="pill ${pillTone(provider.status)}">${provider.status}</span>
    </div>
    <p class="provider-description">${provider.summary}</p>
    <div class="provider-scopes">
      ${provider.scopes.map((scope) => `<span class="scope-chip">${scope}</span>`).join("")}
    </div>
    <div class="queue-footer">
      <span class="scope-chip">${provider.owner}</span>
      <span class="scope-chip">${provider.rotation}</span>
      <span class="scope-chip">${provider.keyRef}</span>
    </div>
  `;
  return card;
}

function createIncidentCard(incident, index) {
  const card = document.createElement("article");
  card.className = "incident-card fade-up";
  card.style.setProperty("--delay", `${index * 80}ms`);
  card.innerHTML = `
    <div class="incident-header">
      <div>
        <span class="incident-meta">${incident.business}</span>
        <strong>${incident.title}</strong>
      </div>
      <span class="severity-pill ${incident.severity.toLowerCase()}">${incident.severity}</span>
    </div>
    <p>${incident.summary}</p>
    <div class="queue-footer">
      <span class="scope-chip">${incident.age}</span>
      <span class="scope-chip">${incident.owner}</span>
      <span class="scope-chip">${incident.action}</span>
    </div>
  `;
  return card;
}

function createDeploymentCard(item, index) {
  const card = document.createElement("article");
  card.className = "deploy-card fade-up";
  card.style.setProperty("--delay", `${index * 70}ms`);
  card.innerHTML = `
    <div class="deploy-header">
      <div>
        <span class="deploy-meta">${item.surface}</span>
        <strong>${item.environment}</strong>
      </div>
      <span class="pill ${pillTone(item.status)}">${item.status}</span>
    </div>
    <p class="deploy-note">${item.summary}</p>
    <div class="queue-footer">
      <span class="scope-chip">${item.release}</span>
      <span class="scope-chip">${item.runtime}</span>
      <span class="scope-chip">${item.updated}</span>
    </div>
  `;
  return card;
}

function renderCollections(dashboard) {
  elements.agentGrid.replaceChildren(
    ...dashboard.agents.map((agent, index) => createAgentCard(agent, index)),
  );
  elements.manualQueue.replaceChildren(
    ...dashboard.manualQueue.map((item, index) => createQueueCard(item, index)),
  );
  elements.providerList.replaceChildren(
    ...dashboard.providers.map((provider, index) => createProviderCard(provider, index)),
  );
  elements.incidentList.replaceChildren(
    ...dashboard.incidents.map((incident, index) => createIncidentCard(incident, index)),
  );
  elements.deploymentList.replaceChildren(
    ...dashboard.deployments.map((item, index) => createDeploymentCard(item, index)),
  );
}

function renderSystemsSummary(dashboard) {
  if (!elements.providerSummary || !elements.deploymentSummary) {
    return;
  }

  const healthyProviders = dashboard.providers.filter((provider) => provider.status === "Nominal").length;
  const providerAttention = dashboard.providers.length - healthyProviders;
  const nextRotation =
    dashboard.providers.find((provider) => provider.status !== "Nominal")?.rotation ??
    dashboard.providers[0]?.rotation ??
    "Tracked";

  elements.providerSummary.replaceChildren(
    createSystemsPill("Healthy", `${healthyProviders}/${dashboard.providers.length}`, providerAttention ? "warn" : "ok"),
    createSystemsPill("Attention", `${providerAttention}`, providerAttention ? "warn" : "ok"),
    createSystemsPill("Rotation", nextRotation, "neutral"),
  );

  const nominalDeployments = dashboard.deployments.filter((item) => item.status === "Nominal").length;
  const deploymentAttention = dashboard.deployments.length - nominalDeployments;
  const releaseLead =
    dashboard.deployments.find((item) => item.status !== "Nominal")?.surface ??
    dashboard.deployments[0]?.surface ??
    "Production";

  elements.deploymentSummary.replaceChildren(
    createSystemsPill(
      "Nominal",
      `${nominalDeployments}/${dashboard.deployments.length}`,
      deploymentAttention ? "warn" : "ok",
    ),
    createSystemsPill("Action", `${deploymentAttention}`, deploymentAttention ? "warn" : "ok"),
    createSystemsPill("Surface", releaseLead, "neutral"),
  );
}

function createForgeMetricCard(metric, index) {
  const card = document.createElement("article");
  card.className = "metric-card forge-metric-card fade-up";
  card.style.setProperty("--delay", `${index * 70}ms`);
  card.innerHTML = `
    <span class="metric-label">${metric.label}</span>
    <strong class="metric-value">${metric.value}</strong>
    <span class="metric-detail">${metric.detail}</span>
  `;
  return card;
}

function createForgeChip(chip, index) {
  const item = document.createElement("span");
  item.className = "scope-chip fade-up";
  item.style.setProperty("--delay", `${index * 60}ms`);
  item.textContent = chip;
  return item;
}

function createForgeStageCard(stage, index) {
  const card = document.createElement("article");
  card.className = "forge-stage-card fade-up";
  card.style.setProperty("--delay", `${index * 90}ms`);
  card.innerHTML = `
    <div class="forge-stage-head">
      <span class="metric-label">${stage.phase}</span>
      <span class="pill ${pillTone(stage.status)}">${stage.status}</span>
    </div>
    <strong>${stage.title}</strong>
    <p>${stage.detail}</p>
    <div class="queue-footer">
      ${stage.meta.map((item) => `<span class="scope-chip">${item}</span>`).join("")}
    </div>
  `;
  return card;
}

function createForgeBuildCard(build, index) {
  const card = document.createElement("article");
  card.className = "forge-build-card fade-up";
  card.style.setProperty("--delay", `${index * 80}ms`);
  card.innerHTML = `
    <div class="queue-header">
      <div>
        <span class="queue-meta">${build.surface}</span>
        <strong>${build.name}</strong>
      </div>
      <span class="pill ${pillTone(build.status)}">${build.status}</span>
    </div>
    <p>${build.summary}</p>
    <div class="provider-scopes">
      <span class="scope-chip">${build.branch}</span>
      <span class="scope-chip">${build.owner}</span>
    </div>
    <div class="queue-footer">
      <span class="scope-chip">${build.next}</span>
      <span class="scope-chip">${build.updated}</span>
    </div>
  `;
  return card;
}

function createForgeReleaseCard(release, index) {
  const card = document.createElement("article");
  card.className = "forge-release-card fade-up";
  card.style.setProperty("--delay", `${index * 80}ms`);
  card.innerHTML = `
    <div class="deploy-header">
      <div>
        <span class="deploy-meta">${release.target}</span>
        <strong>${release.name}</strong>
      </div>
      <span class="pill ${pillTone(release.status)}">${release.status}</span>
    </div>
    <p>${release.summary}</p>
    <div class="queue-footer">
      <span class="scope-chip">${release.branch}</span>
      <span class="scope-chip">${release.window}</span>
      <span class="scope-chip">${release.updated}</span>
    </div>
  `;
  return card;
}

function createForgeGuardrailCard(item, index) {
  const card = document.createElement("article");
  card.className = "forge-guardrail-card fade-up";
  card.style.setProperty("--delay", `${index * 70}ms`);
  card.innerHTML = `
    <span class="metric-label">Guardrail ${String(index + 1).padStart(2, "0")}</span>
    <strong>${item.title}</strong>
    <p>${item.detail}</p>
  `;
  return card;
}

function renderForgePanel(dashboard) {
  const forge = dashboard.forge ?? fallbackDashboard.forge;

  elements.forgeTitle.textContent = forge.headline.title;
  elements.forgeSummary.textContent = forge.headline.summary;
  elements.forgeStatus.textContent = forge.headline.status;
  elements.forgeStatus.className = `pill ${pillTone(forge.headline.status)}`;
  elements.forgeChipRow.replaceChildren(
    ...forge.headline.chips.map((chip, index) => createForgeChip(chip, index)),
  );
  elements.forgeStageGrid.replaceChildren(
    ...forge.stages.map((stage, index) => createForgeStageCard(stage, index)),
  );
  elements.forgeMetricGrid.replaceChildren(
    ...forge.metrics.map((metric, index) => createForgeMetricCard(metric, index)),
  );
  elements.forgeBuildList.replaceChildren(
    ...forge.builds.map((build, index) => createForgeBuildCard(build, index)),
  );
  elements.forgeReleaseList.replaceChildren(
    ...forge.releases.map((release, index) => createForgeReleaseCard(release, index)),
  );
  elements.forgeGuardrailGrid.replaceChildren(
    ...forge.guardrails.map((item, index) => createForgeGuardrailCard(item, index)),
  );
}

function createAuditEntry(entry, index) {
  const row = document.createElement("article");
  row.className = "audit-entry fade-up";
  row.style.setProperty("--delay", `${index * 70}ms`);
  row.innerHTML = `
    <strong>${entry.title}</strong>
    <div class="queue-footer">
      <span class="scope-chip">${entry.time}</span>
      <span class="scope-chip">${entry.detail}</span>
    </div>
  `;
  return row;
}

function renderAccessPanel(dashboard) {
  const providerUnderWatch = dashboard.providers.find((provider) => provider.status !== "Nominal");
  const entries = [
    {
      title: "Change lock verified",
      time: "Now",
      detail: "All production edits require super-admin approval.",
    },
    {
      title: "Key rotation window",
      time: providerUnderWatch?.rotation ?? "Scheduled",
      detail: providerUnderWatch ? providerUnderWatch.name : "No providers require rotation right now.",
    },
    {
      title: "Latest control signal",
      time: "Live",
      detail: dashboard.operationsTape[0] ?? "Mission deck online.",
    },
    {
      title: "Dismissal audit",
      time: "24h",
      detail: "No emergency dismissals recorded in the current window.",
    },
  ];

  elements.auditTrail.replaceChildren(...entries.map((entry, index) => createAuditEntry(entry, index)));
}

function renderDashboard(dashboard) {
  state.dashboard = dashboard;
  state.selectedBusinessId = dashboard.defaultBusinessId;
  renderSummary(dashboard);
  renderPortfolio(dashboard);
  renderBusinessFocus();
  renderCollections(dashboard);
  renderSystemsSummary(dashboard);
  renderForgePanel(dashboard);
  renderAccessPanel(dashboard);
  setActiveTab(state.activeTab);
}

async function loadDashboard() {
  const response = await fetch("api/mission-control", {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Dashboard request failed with ${response.status}`);
  }

  return response.json();
}

async function init() {
  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => setActiveTab(button.dataset.tabTarget));
  });

  window.addEventListener("hashchange", () => {
    setActiveTab(window.location.hash.slice(1), { updateHash: false });
  });

  state.activeTab = normalizeTabId(window.location.hash.slice(1) || state.activeTab);

  renderDashboard(withSyncTimestamp(fallbackDashboard));

  try {
    const liveDashboard = await loadDashboard();
    renderDashboard(liveDashboard);
  } catch (error) {
    elements.syncTime.textContent = `Demo mode ${formatSyncLabel(new Date().toISOString(), fallbackDashboard.timezone)}`;
  }
}

init();
