// ---- Sample batch data (swap this for a real API/ledger call later) ----
const batches = [
  {
    id: "batch-tomatoes",
    name: "Heirloom Tomatoes — Batch #4471",
    cert: "Certified Organic",
    path: [
      { stage: "Harvested", detail: "Green Hollow Farm, Sonoma County — Sept 2, 2026" },
      { stage: "Processed", detail: "Washed and packed at Sonoma Valley Co-op — Sept 3, 2026" },
      { stage: "Shipped", detail: "Cold-chain transport, 4°C maintained — Sept 4, 2026" },
      { stage: "On shelf", detail: "Received at Riverside Market — Sept 5, 2026" }
    ]
  },
  {
    id: "batch-oats",
    name: "Rolled Oats — Batch #2098",
    cert: "Certified Organic",
    path: [
      { stage: "Harvested", detail: "Prairie Roots Farm, Manitoba — Aug 14, 2026" },
      { stage: "Milled", detail: "Northgate Grain Mill — Aug 19, 2026" },
      { stage: "Packaged", detail: "Sealed and batch-tagged — Aug 20, 2026" },
      { stage: "Distributed", detail: "Shipped to regional warehouses — Aug 22, 2026" },
      { stage: "On shelf", detail: "Received at Riverside Market — Aug 27, 2026" }
    ]
  },
  {
    id: "batch-honey",
    name: "Wildflower Honey — Batch #1187",
    cert: "Certified Organic",
    path: [
      { stage: "Harvested", detail: "Blue Ridge Apiary — July 30, 2026" },
      { stage: "Extracted & bottled", detail: "On-site facility, same-day bottling — July 31, 2026" },
      { stage: "On shelf", detail: "Received at Riverside Market — Aug 3, 2026" }
    ]
  }
];

const select = document.getElementById("batch-select");
const scanBtn = document.getElementById("scan-btn");
const resultBox = document.getElementById("scan-result");
const resultTitle = document.getElementById("result-title");
const resultPath = document.getElementById("result-path");
const certBadge = document.getElementById("cert-badge");

batches.forEach((b) => {
  const opt = document.createElement("option");
  opt.value = b.id;
  opt.textContent = b.name;
  select.appendChild(opt);
});

scanBtn.addEventListener("click", () => {
  const chosen = batches.find((b) => b.id === select.value) || batches[0];

  resultTitle.textContent = chosen.name;
  certBadge.textContent = chosen.cert;
  resultPath.innerHTML = "";

  chosen.path.forEach((step) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="stage">${step.stage}</div><div class="detail">${step.detail}</div>`;
    resultPath.appendChild(li);
  });

  resultBox.hidden = false;
  resultBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// ---- Role-based view tabs ----
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected", "false");
    });
    panels.forEach((p) => p.classList.remove("is-active"));

    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");
    document.querySelector(`.tab-panel[data-panel="${tab.dataset.tab}"]`).classList.add("is-active");
  });
});

// ---- Join form (front-end only placeholder) ----
const joinForm = document.getElementById("join-form");
const formNote = document.getElementById("form-note");

joinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.hidden = false;
  joinForm.reset();
});
