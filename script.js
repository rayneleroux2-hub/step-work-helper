 const STEPS = [
      {
        number: 1,
        title: "Honesty and surrender",
        focus: "Admitting what addiction has cost me and where I need help.",
        prompts: [
          "Where has my addiction made my life unmanageable?",
          "What am I still trying to control that is hurting me?",
          "What has my disease convinced me to believe about myself?",
          "What evidence shows that I cannot safely use again?",
          "What would surrender look like in my life today?"
        ],
        starters: [
          "Today I can be honest about...",
          "One thing I keep trying to control is...",
          "When I look at the damage honestly, I see..."
        ]
      },
      {
        number: 2,
        title: "Hope and open-mindedness",
        focus: "Becoming willing to believe that recovery is possible.",
        prompts: [
          "What gives me hope that I can recover?",
          "Where have I seen recovery working in someone else's life?",
          "What blocks me from believing that help is available?",
          "How can I practice open-mindedness today?",
          "What would sanity look like for me?"
        ],
        starters: [
          "I have seen hope in...",
          "I struggle to believe because...",
          "A healthier way of thinking would be..."
        ]
      },
      {
        number: 3,
        title: "Trust and willingness",
        focus: "Letting go of self-will and becoming willing to follow guidance.",
        prompts: [
          "Where has self-will caused pain in my life?",
          "What am I afraid will happen if I let go?",
          "Who or what can I safely trust in my recovery today?",
          "What small action can I take to show willingness?",
          "How do I know when I am forcing things?"
        ],
        starters: [
          "My self-will shows up when...",
          "Letting go scares me because...",
          "Today I can show willingness by..."
        ]
      },
      {
        number: 4,
        title: "Inventory and courage",
        focus: "Looking at patterns, fears, resentments, harms, and strengths.",
        prompts: [
          "What resentments am I still carrying?",
          "What fears keep controlling my choices?",
          "What patterns keep repeating in my relationships?",
          "Where have I harmed myself or others?",
          "What strengths have helped me survive and recover?"
        ],
        starters: [
          "A resentment I need to look at is...",
          "A fear that controls me is...",
          "A pattern I can no longer ignore is..."
        ]
      },
      {
        number: 5,
        title: "Truth and accountability",
        focus: "Sharing honestly and breaking the isolation of shame.",
        prompts: [
          "What am I afraid to say out loud?",
          "What secrets have kept me sick?",
          "How has shame affected my recovery?",
          "What do I need from a sponsor, mentor, or trusted person?",
          "What relief might come from being fully honest?"
        ],
        starters: [
          "The truth I avoid saying is...",
          "Shame tells me... but recovery tells me...",
          "Being honest could help me by..."
        ]
      },
      {
        number: 6,
        title: "Readiness to change",
        focus: "Becoming willing to release defects, survival habits, and old reactions.",
        prompts: [
          "Which character defects hurt me the most?",
          "Which defects once helped me survive but now hold me back?",
          "What do I gain by holding onto old behavior?",
          "What am I afraid of becoming without these defects?",
          "Where am I already becoming ready to change?"
        ],
        starters: [
          "One defect I see clearly is...",
          "This behavior protected me by... but now it costs me...",
          "I am becoming ready because..."
        ]
      },
      {
        number: 7,
        title: "Humility and action",
        focus: "Asking for help and practicing the opposite of old behavior.",
        prompts: [
          "What does humility mean to me in recovery?",
          "Where do I need help instead of pride?",
          "What opposite action can I practice today?",
          "How can I accept progress instead of demanding perfection?",
          "What behavior do I need to release first?"
        ],
        starters: [
          "Humility looks like...",
          "Instead of reacting the old way, I can...",
          "Progress today would be..."
        ]
      },
      {
        number: 8,
        title: "Willingness to repair",
        focus: "Identifying harms and becoming willing to make things right.",
        prompts: [
          "Who have I harmed through my addiction or behavior?",
          "What harm have I caused myself?",
          "Who am I still angry with, and how does that affect my willingness?",
          "What does making amends mean beyond saying sorry?",
          "Where do I need guidance before taking action?"
        ],
        starters: [
          "A person I harmed is...",
          "I harmed myself by...",
          "Willingness does not mean rushing. It means..."
        ]
      },
      {
        number: 9,
        title: "Making amends wisely",
        focus: "Repairing harm where appropriate without causing more damage.",
        prompts: [
          "What amends can I safely and responsibly make?",
          "Where could direct contact cause more harm?",
          "What living amends can I practice daily?",
          "How can I accept the outcome without controlling it?",
          "What support do I need before making amends?"
        ],
        starters: [
          "A living amend I can make is...",
          "I need guidance because...",
          "I can repair harm without demanding forgiveness by..."
        ]
      },
      {
        number: 10,
        title: "Daily inventory",
        focus: "Staying current with honesty, accountability, and repair.",
        prompts: [
          "Where was I honest today?",
          "Where did I react out of fear, pride, anger, or insecurity?",
          "Do I owe anyone an apology or a repair?",
          "What did I do well today?",
          "What can I do differently tomorrow?"
        ],
        starters: [
          "Today I handled... well by...",
          "I need to take responsibility for...",
          "Tomorrow I can practice..."
        ]
      },
      {
        number: 11,
        title: "Connection and guidance",
        focus: "Building spiritual connection, reflection, and direction.",
        prompts: [
          "What helps me feel connected to something bigger than myself?",
          "What noise do I need to quiet inside me?",
          "What guidance am I asking for today?",
          "How do I know when I am spiritually disconnected?",
          "What practice helps me return to peace?"
        ],
        starters: [
          "I feel connected when...",
          "The guidance I need today is...",
          "Peace feels like..."
        ]
      },
      {
        number: 12,
        title: "Service and growth",
        focus: "Living recovery, helping others, and practicing these principles.",
        prompts: [
          "How has recovery changed the way I live?",
          "How can I carry hope without trying to control others?",
          "What principles do I want to practice today?",
          "Where can I be useful without losing myself?",
          "How will I keep growing after completing this step?"
        ],
        starters: [
          "Recovery has changed me by...",
          "I can be useful today by...",
          "The principle I want to practice is..."
        ]
      }
    ];

    const STORAGE_KEY = "step-work-helper-shareable-v1";
    let selectedStep = 1;
    let activeView = "dashboard";
    let entries = loadEntries();
    const importFile = document.getElementById("importFile");

    function loadEntries() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      } catch {
        return {};
      }
    }

    function saveEntries() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    }

    function todayKey() {
      return new Date().toISOString().slice(0, 10);
    }

    function emptyEntry(stepNumber) {
      return {
        stepNumber,
        date: todayKey(),
        promptAnswers: {},
        freeWrite: "",
        feelings: "",
        action: "",
        sponsorNote: "",
        cravingLevel: 0,
        completed: false,
        updatedAt: new Date().toISOString()
      };
    }

    function stepByNumber(number) {
      return STEPS.find(step => step.number === number) || STEPS[0];
    }

    function entryKey(number) {
      return "step-" + number;
    }

    function getEntry(number) {
      return entries[entryKey(number)] || emptyEntry(number);
    }

    function setEntry(number, patch) {
      const key = entryKey(number);
      entries[key] = {
        ...emptyEntry(number),
        ...(entries[key] || {}),
        ...patch,
        updatedAt: new Date().toISOString()
      };
      saveEntries();
      updateStatsOnly();
      renderSponsorPreview();
    }

    function countWords(text) {
      return String(text || "").trim().split(/\s+/).filter(Boolean).length;
    }

    function entryWordCount(entry) {
      if (!entry) return 0;
      const promptWords = Object.values(entry.promptAnswers || {}).reduce((sum, value) => sum + countWords(value), 0);
      return promptWords + countWords(entry.freeWrite) + countWords(entry.feelings) + countWords(entry.action) + countWords(entry.sponsorNote);
    }

    function answeredCount(step, entry) {
      if (!entry) return 0;
      return step.prompts.filter(prompt => String(entry.promptAnswers?.[prompt] || "").trim()).length;
    }

    function getRisk(level) {
      if (level >= 8) return { name: "High", className: "high", message: "Reach out to support now." };
      if (level >= 5) return { name: "Medium", className: "medium", message: "Use your recovery tools before it grows." };
      return { name: "Stable", className: "stable", message: "Keep doing the simple things well." };
    }

    function getStats() {
      const completedCount = STEPS.filter(step => entries[entryKey(step.number)]?.completed).length;
      const startedCount = STEPS.filter(step => entries[entryKey(step.number)] && entryWordCount(entries[entryKey(step.number)]) > 0).length;
      const totalWords = STEPS.reduce((sum, step) => sum + entryWordCount(entries[entryKey(step.number)]), 0);
      const progress = Math.round((completedCount / STEPS.length) * 100);

      const mostRecent = STEPS
        .map(step => ({ step, entry: entries[entryKey(step.number)] }))
        .filter(item => item.entry)
        .sort((a, b) => new Date(b.entry.updatedAt || b.entry.date || 0) - new Date(a.entry.updatedAt || a.entry.date || 0))[0];

      const nextStep = STEPS.find(step => !entries[entryKey(step.number)]?.completed) || STEPS[11];
      const currentEntry = mostRecent?.entry || entries[entryKey(nextStep.number)] || emptyEntry(nextStep.number);
      const risk = getRisk(currentEntry.cravingLevel || 0);

      const highestRisk = STEPS
        .map(step => ({ step, level: entries[entryKey(step.number)]?.cravingLevel || 0 }))
        .sort((a, b) => b.level - a.level)[0];

      return { completedCount, startedCount, totalWords, progress, mostRecent, nextStep, currentEntry, risk, highestRisk };
    }

    function updateStatsOnly() {
  const stats = getStats();

  document.getElementById("heroProgress").textContent = stats.progress + "%";
  document.getElementById("heroCompleted").textContent = stats.completedCount + "/12";
  document.getElementById("heroProgressBar").style.width = stats.progress + "%";

  document.getElementById("dashboardProgressBar").style.width = stats.progress + "%";
}

    function switchView(view) {
      activeView = view;
      render();
    }

    function openStep(number) {
      selectedStep = number;
      activeView = "workspace";
      render();

      const step = stepByNumber(number);
      const entry = getEntry(number);
      renderPrompts(step, entry);
    }

    function render() {
      const stats = getStats();

      document.getElementById("heroProgress").textContent = stats.progress + "%";
      document.getElementById("heroCompleted").textContent = stats.completedCount + "/12";
      document.getElementById("heroProgressBar").style.width = stats.progress + "%";

      document.getElementById("dashboardBtn").className = activeView === "dashboard" ? "primary" : "";
      document.getElementById("workspaceBtn").className = activeView === "workspace" ? "primary" : "";

      document.getElementById("dashboardView").classList.toggle("hidden", activeView !== "dashboard");
      document.getElementById("workspaceView").classList.toggle("hidden", activeView !== "workspace");

      renderDashboard(stats);
      renderWorkspace();
    }

    function renderDashboard(stats) {
      document.getElementById("statCompleted").textContent = stats.completedCount + "/12";
      document.getElementById("statCompletedHelp").textContent = stats.progress + "% through the work";
      document.getElementById("statStarted").textContent = stats.startedCount;
      document.getElementById("statWords").textContent = stats.totalWords;
      document.getElementById("statRisk").textContent = stats.risk.name;
      document.getElementById("statRiskHelp").textContent = stats.risk.message;
      document.getElementById("dashboardProgressBar").style.width = stats.progress + "%";

      const grid = document.getElementById("stepGrid");
      grid.innerHTML = "";
      STEPS.forEach(step => {
        const entry = entries[entryKey(step.number)];
        const started = entry && entryWordCount(entry) > 0;
        const done = entry?.completed;
        const btn = document.createElement("button");
        btn.className = "step-chip " + (done ? "done" : started ? "started" : "empty");
        btn.innerHTML = "<span>Step</span><strong>" + step.number + "</strong>";
        btn.onclick = () => openStep(step.number);
        grid.appendChild(btn);
      });

      const riskCard = document.getElementById("riskCard");
      riskCard.className = "card risk-card " + stats.risk.className;
      document.getElementById("riskTitle").textContent = stats.risk.name;
      document.getElementById("riskMessage").textContent = stats.risk.message;
      document.getElementById("highestCraving").textContent = (stats.highestRisk?.level || 0) + "/10";
      document.getElementById("highestCravingStep").textContent = "Step " + (stats.highestRisk?.step.number || 1) + ": " + (stats.highestRisk?.step.title || "Honesty and surrender");
      document.getElementById("highRiskAction").classList.toggle("hidden", (stats.currentEntry.cravingLevel || 0) < 7);

      document.getElementById("nextStepTitle").textContent = "Step " + stats.nextStep.number + ": " + stats.nextStep.title;
      document.getElementById("nextStepFocus").textContent = stats.nextStep.focus;
      document.getElementById("nextQuestion").textContent = stats.nextStep.prompts[0];
      document.getElementById("openNextStepBtn").onclick = () => openStep(stats.nextStep.number);

      const recent = document.getElementById("recentActivity");
      if (stats.mostRecent) {
        recent.innerHTML = `
          <p><strong>Step ${stats.mostRecent.step.number}: ${stats.mostRecent.step.title}</strong></p>
          <p class="muted">${entryWordCount(stats.mostRecent.entry)} words saved. ${answeredCount(stats.mostRecent.step, stats.mostRecent.entry)}/${stats.mostRecent.step.prompts.length} guided questions answered.</p>
          <button onclick="openStep(${stats.mostRecent.step.number})">Resume writing</button>
        `;
      } else {
        recent.innerHTML = `<div class="soft-box">No writing saved yet. Start with Step 1 or choose the step your sponsor gave you.</div>`;
      }
    }

    function renderWorkspace() {
      const step = stepByNumber(selectedStep);
      const entry = getEntry(selectedStep);

      document.getElementById("workspaceStepNumber").textContent = "Step " + step.number;
      document.getElementById("workspaceStepTitle").textContent = step.title;
      document.getElementById("workspaceStepFocus").textContent = step.focus;
      document.getElementById("markDoneBtn").textContent = entry.completed ? "✓ Done" : "✓ Mark done";
      document.getElementById("cravingRange").value = entry.cravingLevel || 0;
      document.getElementById("cravingScore").textContent = entry.cravingLevel || 0;
      document.getElementById("cravingWarning").classList.toggle("hidden", (entry.cravingLevel || 0) < 7);

      document.getElementById("freeWrite").value = entry.freeWrite || "";
      document.getElementById("feelings").value = entry.feelings || "";
      document.getElementById("action").value = entry.action || "";
      document.getElementById("sponsorNote").value = entry.sponsorNote || "";

      renderStepList();
      renderStarters(step);
      renderSponsorPreview();
    }

    function renderStepList() {
      const query = document.getElementById("searchInput").value.toLowerCase().trim();
      const list = document.getElementById("stepList");
      list.innerHTML = "";
      STEPS.filter(step => {
        const text = [step.number, step.title, step.focus, ...step.prompts].join(" ").toLowerCase();
        return !query || text.includes(query);
      }).forEach(step => {
        const entry = entries[entryKey(step.number)];
        const btn = document.createElement("button");
        btn.className = "side-step" + (selectedStep === step.number ? " active" : "");
        btn.innerHTML = `
          <p class="small">Step ${step.number}${entry?.completed ? " ✓" : ""}</p>
          <p class="title">${step.title}</p>
          <p class="focus">${step.focus}</p>
        `;
        btn.onclick = () => openStep(step.number);
        list.appendChild(btn);
      });
    }

    function renderPrompts(step, entry) {
      const list = document.getElementById("promptList");
      list.innerHTML = "";
      step.prompts.forEach((prompt, index) => {
        const div = document.createElement("div");
        div.className = "prompt";
        div.innerHTML = `
          <label>${index + 1}. ${prompt}</label>
          <textarea placeholder="Write honestly. You can edit it later.">${entry.promptAnswers?.[prompt] || ""}</textarea>
        `;
        const textarea = div.querySelector("textarea");
        textarea.oninput = () => {
          const current = getEntry(selectedStep);
          setEntry(selectedStep, {
            promptAnswers: {
              ...(current.promptAnswers || {}),
              [prompt]: textarea.value
            }
          });
        };
        list.appendChild(div);
      });
    }

    function renderStarters(step) {
      const starterButtons = document.getElementById("starterButtons");
      starterButtons.innerHTML = "";
      step.starters.forEach(starter => {
        const btn = document.createElement("button");
        btn.textContent = starter;
        btn.onclick = () => {
          document.getElementById("starterBox").classList.remove("hidden");
          document.getElementById("starterText").textContent = starter;
        };
        starterButtons.appendChild(btn);
      });
    }

    function renderSponsorPreview() {
      const step = stepByNumber(selectedStep);
      const entry = getEntry(selectedStep);
      const message = `Hi, I worked on Step ${selectedStep}: ${step.title}.\n\nWhat came up for me:\n${entry.freeWrite || "[write what came up]"}\n\nWhere I need guidance:\n${entry.sponsorNote || "[write what you need help with]"}\n\nMy next right action:\n${entry.action || "[write one action]"}`;
      document.getElementById("sponsorPreview").textContent = message;
    }

    function resetCurrentStep() {
      delete entries[entryKey(selectedStep)];
      saveEntries();
      render();
    }

    function exportWriting() {
       const data = {
    exportedAt: new Date().toISOString(),
    entries: entries
  };

  
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = "step-work-backup.json";
  a.click();

  URL.revokeObjectURL(url);
}

  function importData(text) {
    try {
    const data = JSON.parse(text);

    if (!data.entries) {
      alert("Invalid file format: missing entries");
      return;
    }

    entries = data.entries || {};
    saveEntries();
    selectedStep = 1;
    activeView = "dashboard";
    render();

    alert("Import successful!");
  } catch (err) {
    console.error(err);
    alert("Could not import file. Make sure it's a valid backup JSON.");
  }
}

    //  STEPS.forEach(step => {
       // const saved = entries[entryKey(step.number)];
        //if (!saved) return;
        //lines.push("STEP " + step.number + ": " + step.title);
        //lines.push("Focus: " + step.focus);
        //lines.push("Completed: " + (saved.completed ? "Yes" : "No"));
        //lines.push("Craving level: " + (saved.cravingLevel || 0) + "/10");
        //lines.push("");

        //step.prompts.forEach(prompt => {
          //lines.push("Q: " + prompt);
          //lines.push("A: " + (saved.promptAnswers?.[prompt] || ""));
          //lines.push("");
       // });

       // if (saved.freeWrite) lines.push("Free write:\n" + saved.freeWrite + "\n");
        //if (saved.feelings) lines.push("Feelings:\n" + saved.feelings + "\n");
        //if (saved.action) lines.push("Next right action:\n" + saved.action + "\n");
        //if (saved.sponsorNote) lines.push("Sponsor / mentor note:\n" + saved.sponsorNote + "\n");
        //lines.push("----------------------------------------");
        //lines.push("");
      //});

     // const blob = new Blob([lines.join("\n")], { type: "text/plain" });
      //const url = URL.createObjectURL(blob);
      //const a = document.createElement("a");
      //a.href = url;
      //a.download = "step-work-export.txt";
      //a.click();
      //URL.revokeObjectURL(url);
    //}

    document.getElementById("dashboardBtn").onclick = () => switchView("dashboard");
    document.getElementById("workspaceBtn").onclick = () => switchView("workspace");
    document.getElementById("exportBtn").onclick = () => exportWriting();
    document.getElementById("importBtn").onclick = () => {
    importFile.click();
    };

    importFile.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    const text = e.target.result;
    importData(text);

    importFile.value = "";
  };

  reader.readAsText(file);

    });

    document.getElementById("searchInput").oninput = () => renderStepList();
    document.getElementById("resetStepBtn").onclick = resetCurrentStep;
    document.getElementById("markDoneBtn").onclick = () => {
      const entry = getEntry(selectedStep);
      setEntry(selectedStep, { completed: !entry.completed });
    };
    document.getElementById("cravingRange").oninput = (event) => {
        const value = Number(event.target.value);
        setEntry(selectedStep, { cravingLevel: value });
        document.getElementById("cravingScore").textContent = value;
        document.getElementById("cravingWarning").classList.toggle("hidden", value < 7);
    };

    ["freeWrite", "feelings", "action", "sponsorNote"].forEach(id => {
      document.getElementById(id).oninput = event => {
        setEntry(selectedStep, { [id]: event.target.value });
      };
    });

    render();