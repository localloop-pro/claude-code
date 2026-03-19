const elements = {
  syncTime: document.querySelector("#sync-time"),
  kpiGrid: document.querySelector("#kpi-grid"),
  operationsTape: document.querySelector("#operations-tape"),
  briefingTitle: document.querySelector("#briefing-title"),
  briefingStatus: document.querySelector("#briefing-status"),
  briefingSummary: document.querySelector("#briefing-summary"),
  briefingMetrics: document.querySelector("#briefing-metrics"),
  briefingMode: document.querySelector("#briefing-mode"),
  briefingWatch: document.querySelector("#briefing-watch"),
  portfolioNav: document.querySelector("#portfolio-nav"),
  businessTag: document.querySelector("#business-tag"),
  businessName: document.querySelector("#business-name"),
  businessSummary: document.querySelector("#business-summary"),
  businessMetrics: document.querySelector("#business-metrics"),
  orbitValue: document.querySelector("#orbit-value"),
  signalBars: document.querySelector("#signal-bars"),
  revenueCaption: document.querySelector("#revenue-caption"),
  revenueChart: document.querySelector("#revenue-chart"),
  agentGrid: document.querySelector("#agent-grid"),
  manualQueue: document.querySelector("#manual-queue"),
  providerList: document.querySelector("#provider-list"),
  incidentList: document.querySelector("#incident-list"),
  deploymentList: document.querySelector("#deployment-list"),
};

const state = {
  dashboard: null,
  selectedBusinessId: null,
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

function statusClass(status) {
  if (status === "Risk") {
    return "status-risk";
  }

  if (status === "Watch") {
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
      <span class="pill ${business.status === "Risk" ? "risk" : business.status === "Watch" ? "warn" : "ok"}">${business.status}</span>
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

function renderBusinessFocus() {
  const dashboard = state.dashboard;
  const business =
    dashboard.businesses.find((item) => item.id === state.selectedBusinessId) || dashboard.businesses[0];
  state.selectedBusinessId = business.id;

  elements.briefingTitle.textContent = business.name;
  elements.briefingSummary.textContent = business.summary;
  elements.briefingMode.textContent = business.mode;
  elements.briefingWatch.textContent = business.watchpoint;
  elements.briefingStatus.textContent = business.status;
  elements.briefingStatus.className = `status-chip ${statusClass(business.status)}`;
  elements.briefingMetrics.replaceChildren(...business.metrics.map((metric) => createPanelMetricCard(metric)));

  elements.businessTag.textContent = business.tag;
  elements.businessName.textContent = business.name;
  elements.businessSummary.textContent = business.summary;
  elements.businessMetrics.replaceChildren(...business.metrics.map((metric) => createPanelMetricCard(metric)));
  elements.orbitValue.textContent = `${business.focusScore}%`;

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
      <span class="pill ${agent.status === "Risk" ? "risk" : agent.status === "Watch" ? "warn" : "ok"}">${agent.status}</span>
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
      <span class="pill ${item.state === "Risk" ? "risk" : item.state === "Watch" ? "warn" : "ok"}">${item.state}</span>
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
      <span class="pill ${provider.status === "Risk" ? "risk" : provider.status === "Watch" ? "warn" : "ok"}">${provider.status}</span>
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
      <span class="pill ${item.status === "Risk" ? "risk" : item.status === "Watch" ? "warn" : "ok"}">${item.status}</span>
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

function renderDashboard(dashboard) {
  state.dashboard = dashboard;
  state.selectedBusinessId = dashboard.defaultBusinessId;
  renderSummary(dashboard);
  renderPortfolio(dashboard);
  renderBusinessFocus();
  renderCollections(dashboard);
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
  renderDashboard(withSyncTimestamp(fallbackDashboard));

  try {
    const liveDashboard = await loadDashboard();
    renderDashboard(liveDashboard);
  } catch (error) {
    elements.syncTime.textContent = `Demo mode ${formatSyncLabel(new Date().toISOString(), fallbackDashboard.timezone)}`;
  }
}

init();
