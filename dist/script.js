"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  navigation.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 640) closeMenu();
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  stopDemo();
  tabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute("aria-selected", String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.querySelector("#scene-" + item.dataset.scene).hidden = !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft")
      next = (index + tabs.length - 1) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectTab(tabs[next]);
      tabs[next].focus();
    }
  });
});

const playButton = document.querySelector("#demo-play");
const timeLabel = document.querySelector("#demo-time");
let demoTime = 12 * 60 + 43,
  demoTimer = null;
function stopDemo() {
  if (demoTimer !== null) window.clearInterval(demoTimer);
  demoTimer = null;
  playButton.setAttribute("aria-label", "イメージの再生を開始");
  playButton.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7z"/></svg>';
}
playButton.addEventListener("click", () => {
  if (demoTimer !== null) {
    stopDemo();
    return;
  }
  playButton.setAttribute("aria-label", "イメージの再生を停止");
  playButton.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
  demoTimer = window.setInterval(() => {
    demoTime = demoTime >= 24 * 60 ? 12 * 60 + 43 : demoTime + 1;
    timeLabel.textContent = `${Math.floor(demoTime / 60)}:${String(demoTime % 60).padStart(2, "0")}`;
    const progress = (demoTime / (24 * 60)) * 100;
    document.querySelector(".demo-scrubber i").style.width = progress + "%";
    document.querySelector(".demo-scrubber b").style.left = progress + "%";
  }, 1000);
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopDemo();
});
window.addEventListener("pagehide", stopDemo);

const answerButton = document.querySelector("#demo-answer-button");
const answer = document.querySelector("#demo-answer");
answerButton.addEventListener("click", () => {
  const open = answer.hidden;
  answer.hidden = !open;
  answerButton.setAttribute("aria-expanded", String(open));
  answerButton.innerHTML = open
    ? 'もう一度、表に戻る <span aria-hidden="true">↻</span>'
    : '答えをめくる <span aria-hidden="true">↻</span>';
});

const screenDialog = document.querySelector("#screen-dialog");
const openScreenButton = document.querySelector("#open-screen");
openScreenButton.addEventListener("click", () => screenDialog.showModal());
document
  .querySelector("#close-screen")
  .addEventListener("click", () => screenDialog.close());
screenDialog.addEventListener("click", (event) => {
  if (event.target !== screenDialog) return;
  const rect = screenDialog.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  )
    screenDialog.close();
});
screenDialog.addEventListener("close", () =>
  openScreenButton.focus({ preventScroll: true }),
);
