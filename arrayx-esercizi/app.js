(function () {
  "use strict";
  const course = window.COURSE;
  if (!course || !Array.isArray(course.lessons)) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const escapeHTML = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  const progressKey = `officina-progress-${course.slug || "corso"}`;
  let completed = new Set();
  let baseFont = 100;

  try {
    const saved = JSON.parse(localStorage.getItem(progressKey) || "[]");
    if (Array.isArray(saved)) completed = new Set(saved.filter(id => course.lessons.some(lesson => lesson.id === id)));
  } catch (_) { /* Il sito funziona anche se lo storage non è disponibile. */ }

  document.title = `${course.title} — Officina digitale`;
  $("#course-title").innerHTML = `${escapeHTML(course.title).replace(/, passo dopo passo/i, ", <span>passo dopo passo</span>")}`;
  $("#course-kicker").textContent = course.kicker || "PERCORSO GUIDATO";
  $("#course-intro").textContent = course.intro || "Un percorso di apprendimento con esempi progressivi.";
  $("#lesson-count").textContent = `${course.lessons.length} lezioni`;

  const nav = $("#lesson-nav");
  const lessonsContainer = $("#lessons");

  function renderNav(filter = "") {
    const filtered = course.lessons.filter(lesson => `${lesson.title} ${lesson.summary} ${lesson.level} ${lesson.explanation} ${lesson.goals.join(" ")}`.toLocaleLowerCase("it").includes(filter));
    nav.innerHTML = filtered.map((lesson) => {
      const index = course.lessons.findIndex(item => item.id === lesson.id) + 1;
      return `<a href="#${escapeHTML(lesson.id)}" class="${completed.has(lesson.id) ? "is-done" : ""}" ${completed.has(lesson.id) ? 'aria-label="Lezione ' + index + ': ' + escapeHTML(lesson.title) + ', completata"' : 'aria-label="Lezione ' + index + ': ' + escapeHTML(lesson.title) + '"'}><span class="nav-number" aria-hidden="true">${completed.has(lesson.id) ? "✓" : index}</span><span>${escapeHTML(lesson.title)}</span></a>`;
    }).join("");
  }

  function renderLesson(lesson, index) {
    const isDone = completed.has(lesson.id);
    const goals = lesson.goals.map(goal => `<li>${escapeHTML(goal)}</li>`).join("");
    const options = lesson.quiz.options.map((option, i) => `<button class="quiz-option" type="button" data-option="${i}" aria-label="Risposta ${i + 1}: ${escapeHTML(option)}">${escapeHTML(option)}</button>`).join("");
    return `<article class="lesson-card" id="${escapeHTML(lesson.id)}" data-lesson="${escapeHTML(lesson.id)}">
      <header class="lesson-header">
        <span class="lesson-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
        <div class="lesson-header-main"><p class="lesson-kicker">${escapeHTML(lesson.level)}</p><h2>${escapeHTML(lesson.title)}</h2><p class="lesson-summary">${escapeHTML(lesson.summary)}</p></div>
        <span class="lesson-status ${isDone ? "done" : ""}" data-status>${isDone ? "✓ Completata" : "Da studiare"}</span>
      </header>
      <div class="lesson-body">
        <h3>Idea chiave</h3><p>${escapeHTML(lesson.explanation)}</p>
        <ul class="learning-goals" aria-label="Obiettivi della lezione">${goals}</ul>
        <div class="example-panel"><div class="example-top"><span>${escapeHTML(lesson.codeLabel || "Esempio di codice")}</span><button type="button" class="copy-button" data-copy>Copia codice</button></div><pre><code>${escapeHTML(lesson.code)}</code></pre></div>
        ${lesson.output ? `<div class="output-box"><span class="output-label">Risultato atteso (esempio)</span><code>${escapeHTML(lesson.output)}</code></div>` : ""}
        ${lesson.note ? `<aside class="tip-box"><strong>${escapeHTML(lesson.noteTitle || "Da ricordare")}</strong><p>${escapeHTML(lesson.note)}</p></aside>` : ""}
        <section class="quiz" aria-labelledby="quiz-title-${escapeHTML(lesson.id)}"><h3 class="quiz-title" id="quiz-title-${escapeHTML(lesson.id)}"><span aria-hidden="true">?</span> Verifica rapida</h3><p class="quiz-question">${escapeHTML(lesson.quiz.question)}</p><div class="quiz-options" data-quiz-options>${options}</div><p class="quiz-feedback" data-feedback role="status" aria-live="polite">Scegli una risposta. Puoi riprovare se sbagli.</p></section>
        <div class="lesson-footer"><p class="lesson-footnote">Obiettivi: ${escapeHTML(lesson.goals.join(" · "))}</p><button class="complete-button ${isDone ? "is-done" : ""}" type="button" data-complete>${isDone ? "✓ Lezione completata" : "Segna come completata →"}</button></div>
      </div>
    </article>`;
  }

  function updateProgress() {
    const total = course.lessons.length;
    const count = completed.size;
    const percent = total ? Math.round(count / total * 100) : 0;
    $("#progress-label").textContent = `${count} di ${total}`;
    $("#progress-fill").style.width = `${percent}%`;
    $("#progress-track").setAttribute("aria-valuenow", String(percent));
    try { localStorage.setItem(progressKey, JSON.stringify(Array.from(completed))); } catch (_) { /* Salvataggio non disponibile: la sessione corrente resta utilizzabile. */ }
  }

  function render(filter = "") {
    const normalized = filter.trim().toLocaleLowerCase("it");
    const matching = course.lessons.filter(lesson => `${lesson.title} ${lesson.summary} ${lesson.level} ${lesson.explanation} ${lesson.goals.join(" ")} ${lesson.code} ${lesson.note || ""}`.toLocaleLowerCase("it").includes(normalized));
    renderNav(normalized);
    lessonsContainer.innerHTML = matching.length ? matching.map(lesson => renderLesson(lesson, course.lessons.findIndex(item => item.id === lesson.id))).join("") : `<div class="empty-state"><h2>Nessuna lezione trovata</h2><p>Prova una parola più breve oppure rimuovi la ricerca.</p></div>`;
    $("#search-status").textContent = normalized ? `${matching.length} ${matching.length === 1 ? "lezione trovata" : "lezioni trovate"}.` : "Tutte le lezioni sono visibili.";
    $("#clear-search").hidden = !normalized;
    updateProgress();
  }

  function renderSources() {
    $("#source-links").innerHTML = (course.sources || []).map(source => `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(source.label)} ↗</a>`).join("");
  }

  lessonsContainer.addEventListener("click", async (event) => {
    const copyButton = event.target.closest("[data-copy]");
    const completeButton = event.target.closest("[data-complete]");
    const answerButton = event.target.closest("[data-option]");
    const card = event.target.closest("[data-lesson]");
    if (!card) return;
    const lessonId = card.dataset.lesson;
    const lesson = course.lessons.find(item => item.id === lessonId);
    if (!lesson) return;

    if (copyButton) {
      const code = lesson.code;
      try {
        await navigator.clipboard.writeText(code);
        copyButton.textContent = "Copiato ✓";
      } catch (_) {
        const range = document.createRange();
        const codeElement = $("pre code", card);
        const selection = window.getSelection();
        range.selectNodeContents(codeElement);
        selection.removeAllRanges();
        selection.addRange(range);
        copyButton.textContent = "Selezionato: Ctrl/Cmd+C";
      }
      window.setTimeout(() => { if (copyButton.isConnected) copyButton.textContent = "Copia codice"; }, 2200);
      return;
    }

    if (completeButton) {
      if (completed.has(lessonId)) completed.delete(lessonId); else completed.add(lessonId);
      const done = completed.has(lessonId);
      completeButton.classList.toggle("is-done", done);
      completeButton.textContent = done ? "✓ Lezione completata" : "Segna come completata →";
      const status = $("[data-status]", card);
      status.classList.toggle("done", done);
      status.textContent = done ? "✓ Completata" : "Da studiare";
      renderNav($("#lesson-search").value.trim().toLocaleLowerCase("it"));
      updateProgress();
      return;
    }

    if (answerButton) {
      const chosen = Number(answerButton.dataset.option);
      const options = $$("[data-option]", card);
      const feedback = $("[data-feedback]", card);
      const right = chosen === lesson.quiz.answer;
      options.forEach((button, i) => {
        button.disabled = true;
        if (i === lesson.quiz.answer) button.classList.add("correct");
        else if (i === chosen) button.classList.add("incorrect");
        button.setAttribute("aria-pressed", String(i === chosen));
      });
      feedback.className = `quiz-feedback ${right ? "good" : "try-again"}`;
      feedback.textContent = `${right ? "Esatto! " : "Non ancora. "}${lesson.quiz.explanation}`;
      if (!right) {
        const retry = document.createElement("button");
        retry.type = "button";
        retry.className = "copy-button";
        retry.style.marginTop = ".5rem";
        retry.textContent = "Riprova";
        retry.addEventListener("click", () => {
          options.forEach(button => { button.disabled = false; button.classList.remove("correct", "incorrect"); button.removeAttribute("aria-pressed"); });
          feedback.className = "quiz-feedback";
          feedback.textContent = "Scegli una risposta. Puoi riprovare se sbagli.";
          retry.remove();
          options[0]?.focus();
        });
        feedback.insertAdjacentElement("afterend", retry);
      }
    }
  });

  $("#lesson-search").addEventListener("input", (event) => render(event.target.value));
  $("#clear-search").addEventListener("click", () => { $("#lesson-search").value = ""; render(""); $("#lesson-search").focus(); });
  $("#font-smaller").addEventListener("click", () => { baseFont = Math.max(90, baseFont - 5); document.documentElement.style.setProperty("--base-font-size", `${baseFont}%`); });
  $("#font-larger").addEventListener("click", () => { baseFont = Math.min(125, baseFont + 5); document.documentElement.style.setProperty("--base-font-size", `${baseFont}%`); });
  $("#contrast-toggle").addEventListener("click", (event) => { const active = document.body.classList.toggle("high-contrast"); event.currentTarget.setAttribute("aria-pressed", String(active)); event.currentTarget.textContent = active ? "Contrasto standard" : "Contrasto alto"; });
  $("#reading-toggle").addEventListener("click", (event) => { const active = document.body.classList.toggle("reading-mode"); event.currentTarget.setAttribute("aria-pressed", String(active)); event.currentTarget.textContent = active ? "Esci modalità lettura" : "Modalità lettura"; });

  renderSources();
  render("");
})();
