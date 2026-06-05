export interface LayoutTemplate {
  id: string;
  name: string;
  description: string;
  /** Visual ASCII-art representation for preview */
  preview: string[];
}

export const LAYOUT_TEMPLATES: LayoutTemplate[] = [
  {
    id: "grid-left-phone-right",
    name: "Grid + Celular (derecha)",
    description: "Cuadrícula de posts a la izquierda, celular a la derecha",
    preview: [
      "┌──┬──┬──┐ ┌────┐",
      "│  │  │  │ │    │",
      "├──┼──┼──┤ │ 📱 │",
      "│  │  │  │ │    │",
      "└──┴──┴──┘ └────┘",
    ],
  },
  {
    id: "phone-left-grid-right",
    name: "Celular + Grid (derecha)",
    description: "Celular a la izquierda, cuadrícula de posts a la derecha",
    preview: [
      "┌────┐ ┌──┬──┬──┐",
      "│    │ │  │  │  │",
      "│ 📱 │ ├──┼──┼──┤",
      "│    │ │  │  │  │",
      "└────┘ └──┴──┴──┘",
    ],
  },
  {
    id: "phone-left-row-right",
    name: "Celular + Fila",
    description: "Celular a la izquierda, imágenes en fila horizontal a la derecha",
    preview: [
      "┌────┐ ┌──┬──┬──┐",
      "│    │ │  │  │  │",
      "│ 📱 │ │  │  │  │",
      "│    │ │  │  │  │",
      "└────┘ └──┴──┴──┘",
    ],
  },
  {
    id: "phone-center-images-sides",
    name: "Celular centrado",
    description: "Celular en el centro, imágenes a ambos lados",
    preview: [
      "┌──┬──┐ ┌────┐ ┌──┬──┐",
      "│  │  │ │    │ │  │  │",
      "│  │  │ │ 📱 │ │  │  │",
      "│  │  │ │    │ │  │  │",
      "└──┴──┘ └────┘ └──┴──┘",
    ],
  },
  {
    id: "grid-only",
    name: "Solo cuadrícula",
    description: "Solo la cuadrícula de imágenes, sin celular",
    preview: [
      "┌──┬──┬──┐",
      "│  │  │  │",
      "├──┼──┼──┤",
      "│  │  │  │",
      "└──┴──┴──┘",
    ],
  },
  {
    id: "phone-only",
    name: "Solo celular",
    description: "Solo el mockup del celular, sin cuadrícula",
    preview: [
      "    ┌────┐",
      "    │    │",
      "    │ 📱 │",
      "    │    │",
      "    └────┘",
    ],
  },
];

export type AspectRatio = "square" | "story" | "landscape" | "portrait";

export const ASPECT_RATIOS: { id: AspectRatio; name: string; cssClass: string; ratio: string }[] = [
  { id: "square", name: "Post Cuadrado (1:1)", cssClass: "aspect-square", ratio: "1/1" },
  { id: "portrait", name: "Post Vertical (4:5)", cssClass: "aspect-[4/5]", ratio: "4/5" },
  { id: "story", name: "Historia (9:16)", cssClass: "aspect-[9/16]", ratio: "9/16" },
  { id: "landscape", name: "Horizontal (16:9)", cssClass: "aspect-video", ratio: "16/9" },
];
