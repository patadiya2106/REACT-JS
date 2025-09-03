import React, { useEffect, useState, useCallback } from "react";

const PALETTE = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#9B5DE5",
  "#F15BB5",
  "#00C2A8",
  "#FF7F50",
];

export default function App() {
  const [colorA, setColorA] = useState(
    () => localStorage.getItem("bg.colorA") || "#4D96FF"
  );
  const [colorB, setColorB] = useState(
    () => localStorage.getItem("bg.colorB") || ""
  );
  const [isGradient, setIsGradient] = useState(
    () => localStorage.getItem("bg.isGradient") === "true"
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => localStorage.setItem("bg.colorA", colorA), [colorA]);
  useEffect(() => localStorage.setItem("bg.colorB", colorB), [colorB]);
  useEffect(() => localStorage.setItem("bg.isGradient", isGradient), [isGradient]);

  useEffect(() => {
    const body = document.body;
    body.style.transition = "background 500ms ease";
    if (isGradient && colorB) {
      body.style.background = `linear-gradient(135deg, ${colorA}, ${colorB})`;
    } else {
      body.style.background = colorA;
    }
  }, [colorA, colorB, isGradient]);

  const pickRandom = useCallback(() => {
    const a = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    const b = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    setColorA(a);
    setColorB(b);
  }, []);

  const copyHex = async () => {
    try {
      const text = isGradient && colorB ? `${colorA} → ${colorB}` : colorA;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (err) {
      console.warn("Clipboard failed", err);
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === "r") pickRandom();
      if (e.key.toLowerCase() === "g") setIsGradient((s) => !s);
      if (e.key.toLowerCase() === "c") copyHex();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pickRandom]);

  return (
    <div className="app">
      <div className="card">
        <h1>BG Color Changer</h1>
        <p className="muted">
          Pick a color, use presets, or press <strong>R</strong> for random,{" "}
          <strong>G</strong> for gradient, <strong>C</strong> to copy.
        </p>

        <div className="control-row">
          <label className="color-picker">
            <span>A</span>
            <input
              value={colorA}
              onChange={(e) => setColorA(e.target.value)}
              type="color"
            />
            <input
              className="hex-input"
              value={colorA}
              onChange={(e) => setColorA(e.target.value)}
            />
          </label>

          <label className={"color-picker " + (isGradient ? "" : "disabled")}>
            <span>B</span>
            <input
              value={colorB}
              onChange={(e) => setColorB(e.target.value)}
              type="color"
              disabled={!isGradient}
            />
            <input
              className="hex-input"
              value={colorB}
              onChange={(e) => setColorB(e.target.value)}
              disabled={!isGradient}
            />
          </label>
        </div>

        <div className="row">
          <button onClick={() => setIsGradient((s) => !s)} className="btn">
            {isGradient ? "Disable Gradient" : "Enable Gradient"}
          </button>
          <button onClick={pickRandom} className="btn outline">
            Random
          </button>
          <button onClick={copyHex} className="btn primary">
            {copied ? "Copied!" : "Copy Hex"}
          </button>
        </div>

        <h3>Presets</h3>
        <div className="palette">
          {PALETTE.map((p) => (
            <button
              key={p}
              className="swatch"
              title={p}
              onClick={() => {
                setColorA(p);
                if (isGradient) setColorB(p);
              }}
              style={{ background: p }}
            />
          ))}
        </div>

        <footer className="foot">Made with ❤️ — press R / G / C</footer>
      </div>
    </div>
  );
}
