| **Institution** | UFRPE                                           |
| --------------- | ----------------------------------------------- |
| **Department**  | Department of Computing                         |
| **Course**      | Bachelor in Computer Science                    |
| **Author(s)**   | Alison Ferreira, Aildson Ferreira, Rayane Alves |
| **Instructor**  | George Valença                                  |

---

# Tarot Cards of Tech, an interactive demonstration

This repository contains a **web application that demonstrates the [Tarot Cards of Tech](https://www.artefactgroup.com/resources/the-tarot-cards-of-tech/)** method: a structured way for teams to reflect on how a product or technology might affect people, communities, and systems before and during design. The project is intended for **academic use** (coursework, workshops, or supervised exercises in HCI, design ethics, or product thinking).

## What are the Tarot Cards of Tech?

The **Tarot Cards of Tech** are not fortune-telling; they are a set of **twelve scenario-style “cards,”** each naming an archetype (for example, unintended harm, scale, community dynamics, or environmental impact) and offering **open-ended prompts**. Teams draw or choose cards and discuss implications—trust, inclusion, misuse, engagement, headlines-at-scale, and similar themes—so that ethical and systemic consequences become explicit early in the process.

The practice is widely cited as a **lightweight ethics and futures-thinking exercise** for designers, engineers, and product owners.

## Who created and maintains it?

The methodology and official materials are associated with **[Artefact](https://www.artefactgroup.com/)** (also referenced as Artefact Group), a design and innovation consultancy. The canonical introduction and resources live on their site, including **[The Tarot Cards of Tech](https://www.artefactgroup.com/resources/the-tarot-cards-of-tech/)** and the companion experience at **[tarotcardsoftech.artefactgroup.com](https://tarotcardsoftech.artefactgroup.com/)**. This academic demo **implements the idea in a standalone app**; it does not replace Artefact’s official deck or licensing terms for commercial reuse—consult their materials if you redistribute or adapt their assets beyond this classroom context.

## About this implementation

- **Stack:** React, Vite, and Tailwind-oriented UI (see `package.json` for dependencies).
- **Content:** Card titles and reflection prompts in this build are stored in `src/app/data/cards.ts` (Portuguese labels and questions). Images live under `public/assets/`.
- **UX:** Users can browse all cards, follow a selection flow, and read prompts in context—suitable for live facilitation or self-paced study.

## Running the code

Install dependencies:

```bash
npm i
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```
