const http = require("http");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "public");

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

const missionControlPayload = {
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
    "Coolify rail green across production",
    "Anthropic latency down 12% since 14:00",
    "Stripe backlog drained after webhook retry",
    "2 launches staged for tonight's precinct campaigns",
    "Forge intake is attached to the Mission Control deployment rail",
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
      updated: "Updated 3m ago",
    },
    {
      surface: "Admin API",
      environment: "mission-control-api",
      status: "Nominal",
      summary: "Dashboard payload endpoint responding under target latency with no cache churn.",
      release: "Payload v1",
      runtime: "Native http server",
      updated: "Updated 3m ago",
    },
    {
      surface: "BYOK vault",
      environment: "provider-credential-plane",
      status: "Watch",
      summary: "Most providers are healthy, but one geospatial partner credential requires immediate re-authorization.",
      release: "Policy pack 4.2",
      runtime: "Rotation policy active",
      updated: "Updated 8m ago",
    },
    {
      surface: "Automation rail",
      environment: "agents-and-jobs",
      status: "Risk",
      summary: "Campaign approvals are blocked behind stale inventory. No infrastructure issue, but launch confidence is reduced.",
      release: "Agent pack March",
      runtime: "27 operators active",
      updated: "Updated 12m ago",
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

function sendFile(filePath, response) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendError(404, "Not found", response);
        return;
      }

      sendError(500, "Internal server error", response);
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const shouldDisableCaching = extension === ".html" || extension === ".css" || extension === ".js";
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": shouldDisableCaching ? "no-store, max-age=0, must-revalidate" : "public, max-age=3600",
      Vary: "Accept-Encoding",
    });
    response.end(data);
  });
}

function sendJson(payload, response) {
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-cache",
  });
  response.end(JSON.stringify(payload, null, 2));
}

function sendError(statusCode, message, response) {
  response.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-cache",
  });
  response.end(message);
}

function resolvePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = normalizedPath === "/" ? "/index.html" : normalizedPath;
  return path.join(publicDir, requestedPath);
}

function requestHandler(request, response) {
  if (!request.url) {
    sendError(400, "Bad request", response);
    return;
  }

  if (request.url === "/health") {
    sendJson({ status: "ok" }, response);
    return;
  }

  if (request.url === "/api/mission-control") {
    sendJson(
      {
        ...missionControlPayload,
        syncedAt: new Date().toISOString(),
      },
      response,
    );
    return;
  }

  const filePath = resolvePath(request.url);

  fs.stat(filePath, (error, stats) => {
    if (error) {
      if (error.code === "ENOENT") {
        sendError(404, "Not found", response);
        return;
      }

      sendError(500, "Internal server error", response);
      return;
    }

    if (stats.isDirectory()) {
      sendFile(path.join(filePath, "index.html"), response);
      return;
    }

    sendFile(filePath, response);
  });
}

function createServer() {
  return http.createServer(requestHandler);
}

function startServer() {
  const host = process.env.HOST || "0.0.0.0";
  const port = Number(process.env.PORT || 3000);
  const server = createServer();

  server.listen(port, host, () => {
    console.log(`Marketplace site listening on http://${host}:${port}`);
  });

  return server;
}

module.exports = {
  createServer,
  requestHandler,
  resolvePath,
  startServer,
};

if (require.main === module) {
  startServer();
}
