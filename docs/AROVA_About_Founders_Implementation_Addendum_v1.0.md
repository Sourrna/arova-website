# AROVA — Founders, About & Credibility Narrative
## Implementation Addendum for Kilo
**Version:** 1.0  
**Project:** AROVA  
**Target repository:** `C:\Users\Asus\arova`  
**Language priority:** Persian-first, fully RTL  
**Status:** Implementation instruction — founder facts and public claims require evidence

---

## 1. Purpose

Extend the AROVA website and CMS with a high-quality **About AROVA / درباره آرووا** experience that communicates the founders' complementary academic, scientific, business, and execution capabilities.

This must not become a generic company introduction or two disconnected CV pages. It must tell a coherent business-and-scientific story:

- Why AROVA exists.
- Who founded it and what complementary capabilities they bring.
- How academic knowledge, research-informed thinking, technology, business understanding, and practical execution work together.
- What value this combination creates for learners, organizations, and clients.
- Why a prospective client, institutional partner, or learner should trust AROVA.

The About experience is a core trust and positioning asset, not a decorative page.

## 2. Brand positioning to preserve

Use the established AROVA positioning:

- **Brand:** AROVA / آرووا
- **Tagline:** «از دانستن تا ساختن.»
- **Supporting statement:** «دانش را به تصمیم و فناوری را به راهکار تبدیل می‌کنیم.»
- **Brand architecture:**
  1. AROVA Education
  2. AROVA Advisory
  3. AROVA Digital Solutions
- **Initial market:** Iran
- **Primary language:** Persian
- **Visual direction:** Premium Editorial × Technical Precision × Restrained Futurism
- **Visual palette:** Obsidian `#141414`, Graphite `#202124`, Burgundy `#5B1E2D`, Wine `#35131D`, Ivory `#F2EFE9`, Silver `#BFC1C5`, Muted Gray `#92949A`. Violet may be used only as a restrained accent.

Do not invent a new brand strategy or change the established architecture while implementing this addendum.

## 3. Required About page information architecture

Create a carefully paced, editorial-quality page. Use the following sections as the content model; the final page may combine sections where that improves narrative flow.

### 3.1 Hero — The AROVA proposition

A concise, distinctive introduction that communicates the relationship between knowledge and execution.

The hero should:
- Explain AROVA in one clear, memorable statement.
- Present the tagline and supporting statement naturally.
- Establish AROVA as a serious, capable, evidence-conscious brand spanning education, advisory, and digital solutions.
- Avoid empty superlatives such as “leading”, “number one”, “world-class”, or “revolutionary” unless independently substantiated.

### 3.2 Our Story — Why AROVA exists

Explain:
- The problem or gap that motivated the founders to create AROVA.
- The belief that knowledge should lead to better decisions and practical outcomes.
- Why education, advisory, and digital solutions belong within one coherent brand.
- The intended value for individuals, teams, and organizations.

Do not fabricate a founding date, origin story, client history, or achievements. If verified source material is not available, create an editable draft with clearly marked content gaps rather than writing fictional history.

### 3.3 The Founders — Two complementary profiles

Create two distinct founder profiles with consistent structure and equal editorial quality:

**Founder A: Sourena**
- Present his actual role in AROVA only after confirming it from project context or asking for approval if unclear.
- Reflect his genuine interests, current capabilities, projects, and areas of development accurately.
- Potentially relevant areas from the project context include computer engineering, applied AI and data literacy, technology/product thinking, digital systems, and building practical solutions. These are not automatically verified professional credentials.
- Distinguish clearly between education, hands-on projects, demonstrated skills, interests, and future ambitions.
- Do not turn self-assessed or developing skills into claims of senior-level professional expertise.

**Founder B: Dr. Mohammad-Hossein Roozbahani**
- Use the exact preferred public name, academic title, role, qualifications, specialties, research, teaching experience, and professional history only when supported by supplied CVs or approved source material.
- Preserve the distinction between academic credentials, research, teaching, consulting, and commercial experience.
- Do not infer degrees, institutional affiliations, publications, awards, client engagements, or years of experience.
- If the source CV is available in the project, extract facts accurately and preserve dates, titles, and institutional names.

For both profiles, provide editable fields for:
- Full public name
- Preferred title / role at AROVA
- Short positioning statement
- Biography (short and full)
- Education and qualifications
- Research and academic interests
- Professional and business experience
- Practical projects / selected work
- Areas of expertise (with evidence level or category)
- Publications, talks, teaching, and certifications (only when verified)
- Profile image
- LinkedIn / professional links (optional)
- Featured quote (optional; never fabricate a quote)

The two profiles must form one complementary founder narrative, not a competition or an artificial hierarchy.

### 3.4 Academic & Scientific Foundation

Show how AROVA's work is informed by disciplined learning, research, analytical thinking, and subject-matter expertise.

Possible content types:
- Academic backgrounds and relevant qualifications.
- Research interests and methods.
- Teaching and knowledge-transfer experience.
- Evidence-informed problem solving.
- Selected publications, presentations, courses, or research outputs where verified.

Do not imply that every AROVA service is academic research or that a scientific claim has been validated when it has not. Use precise language and link to supporting evidence where available.

### 3.5 Business & Practical Execution

Demonstrate that AROVA is oriented toward useful outcomes, not theory alone.

Explain the practical approach to:
- Understanding client and organizational needs.
- Diagnosing problems and defining requirements.
- Designing education, advisory, or digital interventions.
- Prototyping, implementation, evaluation, and iteration.
- Translating technical and scientific concepts into understandable decisions and usable solutions.

Use real case studies, project examples, deliverables, and measurable outcomes only when evidence is available and permission to publish exists.

If public case studies are not yet available, create a clearly labeled “Selected capabilities” or “How we work” section rather than inventing client logos, testimonials, metrics, or success stories.

### 3.6 Our Philosophy & Method

Communicate the principles that guide AROVA:
- Evidence before claims.
- Clarity before complexity.
- Strategy connected to execution.
- Technology in service of real problems.
- Learning that produces usable capability.
- Responsible, transparent, iterative work.

Translate these principles into a short, understandable working method, for example:
1. Understand
2. Define
3. Design
4. Build / Teach
5. Evaluate
6. Improve

Adapt the labels to the actual service workflows; do not imply a certified methodology.

### 3.7 Why AROVA

Explain the credible differentiators:
- Complementary founder capabilities.
- Connection between scientific/academic thinking and practical delivery.
- One coherent structure across Education, Advisory, and Digital Solutions.
- Persian-first communication and contextual understanding of the Iranian market.
- A focus on useful, understandable, and implementable outcomes.

Avoid unsupported comparisons with competitors or claims of unique market leadership.

### 3.8 Closing CTA

Provide context-sensitive calls to action:
- Explore educational programs.
- Discuss an advisory need.
- Submit a digital solution/project inquiry.
- Contact the team.

Each CTA must link to a real, implemented destination or a working form. Do not create dead buttons.

---

## 4. CMS / AROVA Studio requirements

The About page and founder content must be fully manageable through the existing CMS architecture and AROVA Studio.

Create or extend structured content models for:

### Founder
- `name`
- `slug`
- `public_title`
- `role`
- `short_positioning`
- `bio_short`
- `bio_full`
- `education[]`
- `academic_interests[]`
- `research_experience[]`
- `professional_experience[]`
- `business_experience[]`
- `selected_projects[]`
- `expertise[]`
- `publications[]`
- `teaching_and_talks[]`
- `certifications[]`
- `portrait`
- `social_links[]`
- `featured_quote`
- `display_order`
- `is_published`
- `seo_title`
- `seo_description`

Use relational or repeatable structures where appropriate; do not store complex lists as one unstructured text blob if the CMS supports relational collections.

### About Page
Manage:
- Hero content
- Brand story
- Founding rationale
- Founder ordering and visibility
- Academic/scientific foundation
- Business/practical approach
- Philosophy and working method
- Differentiators
- CTA labels and destinations
- SEO metadata
- Page-level media and layout options

### Evidence and publication controls

Where practical, add editorial fields such as:
- `claim_status`: `draft`, `needs_review`, `verified`, `approved_for_publication`
- `evidence_note` or internal source reference
- `approved_by`
- `approved_at`

These are editorial controls, not public-facing labels. Never expose private CVs, internal evidence notes, or unpublished material through public API responses.

Support the established content lifecycle:
`Draft → Review → Approved → Published → Archived`

Only approved content can be published. Preserve revision history if supported by the chosen CMS.

---

## 5. UX and visual direction

The page must feel premium, credible, human, and intellectually confident.

Use:
- Strong Persian typography and excellent RTL composition.
- Editorial hierarchy, generous whitespace, deliberate grid, and restrained visual detail.
- High-quality founder portraits when supplied and approved.
- Subtle diagrams that explain the relationship between knowledge, decisions, and execution.
- A clear distinction between founder profiles, academic evidence, and practical capabilities.
- Responsive layouts tested at desktop, tablet, and mobile widths.

Avoid:
- Generic corporate stock photography.
- Fake office/team imagery.
- Generic AI brain/circuit icons.
- Excessive animation, glow, neon, glassmorphism, or decorative gradients.
- Dense CV walls and oversized blocks of self-praise.
- Fabricated logos, awards, testimonials, statistics, or client names.

The page should not resemble a university department page, a generic consulting template, or a personal portfolio. It should communicate the integrated AROVA brand.

## 6. Content integrity — non-negotiable

This section is critical.

1. Never invent qualifications, degrees, titles, employment, clients, projects, publications, awards, certifications, revenue, impact metrics, or testimonials.
2. Do not present aspirations, learning goals, or self-assessments as proven professional achievements.
3. Do not publish personal details from private conversations unless they are relevant, explicitly intended for public use, and approved.
4. Treat CVs and source documents as evidence to extract from, not as permission to publish every detail.
5. Keep public-facing copy persuasive through clarity and specificity, not exaggeration.
6. Where evidence is missing, create a visible internal content gap in the implementation report and leave the corresponding CMS field as a draft/placeholder. Do not display raw placeholders on the live site.
7. Do not publish founder bios or sensitive professional claims without founder approval.

## 7. Implementation instructions

1. Inspect the existing repository and the current AROVA blueprint/task ledger before making changes.
2. Integrate this addendum into the existing implementation plan; do not create a disconnected second About system.
3. Reuse the current framework, design system, CMS decision, and routing conventions unless a concrete technical reason requires change.
4. Build the About page and its CMS models as real, connected functionality.
5. Ensure all content is editable without code changes.
6. Ensure Persian is the default and RTL is correct across the page and admin interface.
7. Add sensible empty states and draft handling in the CMS; do not expose empty or unapproved content publicly.
8. Add metadata, canonical URL, Open Graph data, structured data where appropriate, and internal links.
9. Add automated tests for content rendering, publication visibility, RTL-sensitive layouts where feasible, and CMS data relationships.
10. Run the production build and browser-based visual QA at desktop, tablet, and mobile sizes. Capture screenshots and report actual results.

## 8. Acceptance criteria

The work is complete only when:

- [ ] A polished Persian-first About AROVA page exists and is connected to the site's navigation.
- [ ] The narrative explains AROVA's purpose and the relationship between Education, Advisory, and Digital Solutions.
- [ ] Both founders have distinct, structured, editable profiles.
- [ ] Academic/scientific credibility and business/practical execution are both represented.
- [ ] The founders are presented as complementary contributors to one coherent brand.
- [ ] All claims are evidence-based; no invented credentials, achievements, metrics, clients, or testimonials appear.
- [ ] About page sections and founder profiles are manageable in AROVA Studio/CMS.
- [ ] Draft/review/approval/publication controls prevent unapproved content from appearing publicly.
- [ ] CTAs point to real destinations and working forms.
- [ ] RTL, typography, responsiveness, accessibility, and visual hierarchy are tested.
- [ ] Production build passes and browser screenshots are included in the QA report.
- [ ] Any missing founder information is listed explicitly as a content dependency for founder review.

## 9. Required Kilo report

After implementation, report:

1. Files and routes created or changed.
2. CMS collections/relations/fields added or modified.
3. Which content is populated from verified source material.
4. Which claims or founder details still require approval or evidence.
5. Tests and build results.
6. Browser QA screenshots and viewport sizes.
7. Any limitations or blocked dependencies.
8. Confirmation that no unapproved content was published and no deployment or paid service was initiated.

**Execution principle:** Implement the structure and functionality now. Do not block all development while waiting for final founder copy. Use unpublished draft records for missing information and request approval only for facts and public claims that genuinely require founder confirmation.
