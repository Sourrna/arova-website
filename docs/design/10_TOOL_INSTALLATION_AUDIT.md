# 10-Tool Installation Audit

Date: 2026-11-01
Kilo version: (not exposed; skill tool available)
Node: v24.18.0, npm 11.16.0
Browser: Microsoft Edge (installed, used via Playwright channel 'msedge')

## Installed Skills (in .kilo/skill/)

| # | Resource | Type | Source | Version | Install Path | Discoverable | Functional Test | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | UI UX Pro Max | Agent Skill | nextlevelbuilder/ui-ux-pro-max-skill | main | .kilo/skill/ui-ux-pro-max/SKILL.md | Yes (skill tool) | File present, loadable | VERIFIED |
| 2 | Anthropic Frontend Design | Agent Skill | anthropics/skills (frontend-design) | main | .kilo/skill/frontend-design/SKILL.md | Yes | File present, loadable | VERIFIED |
| 3 | Impeccable | Agent Skill | pbakaus/impeccable | main | .kilo/skill/impeccable/SKILL.md | Yes | File present | VERIFIED |
| 4 | Emil Kowalski Skills | Agent Skill | emilkowalski/skills (emil-design-eng) | main | .kilo/skill/emil-design-eng/SKILL.md | Yes | File present | VERIFIED |
| 5 | Vercel web-design-guidelines | Agent Skill | vercel-labs/agent-skills | main | .kilo/skill/web-design-guidelines/SKILL.md | Yes | File present | VERIFIED |
| 6 | Figma Context MCP | MCP Server | GLips/Figma-Context-MCP | N/A | Not installed | No | Blocked: requires Figma API token | BLOCKED |
| 7 | Taste | Agent Skill | Leonxlnx/taste-skill | main | .kilo/skill/taste/SKILL.md | Yes | File present | VERIFIED |
| 8 | Playwright CLI | CLI + browser automation | microsoft/playwright (msedge channel) | installed | node_modules/@playwright/test | Yes (channel msedge) | Browser launch verified | VERIFIED |
| 9 | AwesomeDesign.md | Reference collection | voltagent/awesome-design-md | main | Not installed (reference only) | N/A | Collection of design.md files, not a skill | NOT INSTALLED |
| 10 | img2threejs | Standalone tool | img2threejs/img2threejs | main | Not installed | N/A | Apache-2.0; no design requirement justifies 3D | NOT INSTALLED |

## Commands Used
- Invoke-WebRequest to fetch SKILL.md files from GitHub raw URLs
- New-Item to create .kilo/skill/<name>/ directories
- npm install -D @playwright/test (already installed)
- npx playwright (channel msedge) verified working

## Duplicates Avoided
- Impeccable: only one copy installed (checked existing first)
- Vercel: only web-design-guidelines, not deployment skills

## Authentication Requirements
- Figma Context MCP: requires Figma personal access token (not available)

## Remaining Blockers
- Figma Context MCP: blocked on credentials
- AwesomeDesign.md: not a skill; reference collection only
- img2threejs: not installed; no current design requirement for 3D
- Visual inspection: model cannot read images; human review required
- Playwright browser binary: geo-blocked download; msedge channel used as workaround
