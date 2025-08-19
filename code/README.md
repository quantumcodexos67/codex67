# Codex Gate Minimal (Demo)

This is a tiny, conceptual demo of a **resonance gate** around any agent/action.

- Input: synthetic "coherence" score (0–1)
- Gate: if coherence ≥ τ, execute; else hold/log
- Output: printed trace showing what executed vs. held

Run:
```bash
python code/codex_gate.py
