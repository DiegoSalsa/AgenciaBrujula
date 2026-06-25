export interface LayoutTemplate {
  id: string;
  name: string;
  description: string;
  /** Visual ASCII-art representation for preview */
  preview: string[];
}

export const LAYOUT_TEMPLATES: LayoutTemplate[] = [
  {
    id: "reels-grid",
    name: "Reels verticales",
    description: "Para videos 9:16. Muestra reels grandes en una grilla protagonista, sin celular.",
    preview: [
      "+--+ +--+ +--+ +--+",
      "|V | |V | |V | |V |",
      "|  | |  | |  | |  |",
      "|  | |  | |  | |  |",
      "+--+ +--+ +--+ +--+",
    ],
  },
  {
    id: "mixed-media-grid",
    name: "Grid mixto imagen/video",
    description: "Para mezclar fotos, posts y reels. Ideal cuando no hay mockup de celular.",
    preview: [
      "+--+ +--+ +--+",
      "|I | |V | |I |",
      "+--+ +--+ +--+",
      "+--+ +--+ +--+",
      "|V | |I | |V |",
      "+--+ +--+ +--+",
    ],
  },
  {
    id: "grid-left-phone-right",
    name: "Grid + celular derecha",
    description: "Posts o reels a la izquierda y mockup de celular a la derecha. Requiere imagen de celular.",
    preview: [
      "+--+ +--+ +--+   +----+",
      "|I | |I | |V |   |    |",
      "+--+ +--+ +--+   |CEL |",
      "|I | |V | |I |   |    |",
      "+--+ +--+ +--+   +----+",
    ],
  },
  {
    id: "phone-left-grid-right",
    name: "Celular + grid derecha",
    description: "Mockup de celular a la izquierda y posts/reels a la derecha. Requiere imagen de celular.",
    preview: [
      "+----+   +--+ +--+ +--+",
      "|    |   |I | |V | |I |",
      "|CEL |   +--+ +--+ +--+",
      "|    |   |V | |I | |V |",
      "+----+   +--+ +--+ +--+",
    ],
  },
  {
    id: "phone-left-row-right",
    name: "Celular + fila",
    description: "Mockup de celular a la izquierda y una fila corta de piezas a la derecha. Requiere imagen de celular.",
    preview: [
      "+----+   +--+ +--+ +--+",
      "|    |   |I | |V | |I |",
      "|CEL |   |  | |  | |  |",
      "|    |   |  | |  | |  |",
      "+----+   +--+ +--+ +--+",
    ],
  },
  {
    id: "phone-center-images-sides",
    name: "Celular centrado",
    description: "Mockup al centro con imagenes o reels a ambos lados. Requiere imagen de celular.",
    preview: [
      "+--+   +----+   +--+",
      "|I |   |    |   |V |",
      "+--+   |CEL |   +--+",
      "+--+   |    |   +--+",
      "|V |   +----+   |I |",
    ],
  },
  {
    id: "grid-only",
    name: "Solo cuadricula",
    description: "Solo imagenes en cuadricula. Tambien acepta videos, pero para reels usa mejor 'Reels verticales'.",
    preview: [
      "+--+ +--+ +--+",
      "|I | |I | |I |",
      "+--+ +--+ +--+",
      "|I | |I | |I |",
      "+--+ +--+ +--+",
    ],
  },
  {
    id: "phone-only",
    name: "Solo celular",
    description: "Solo el mockup del celular, sin grid. No es recomendable para reels sueltos.",
    preview: [
      "    +----+",
      "    |    |",
      "    |CEL |",
      "    |    |",
      "    +----+",
    ],
  },
];

export type AspectRatio = "square" | "story" | "landscape" | "portrait";

export const ASPECT_RATIOS: { id: AspectRatio; name: string; cssClass: string; ratio: string }[] = [
  { id: "square", name: "Post cuadrado (1:1)", cssClass: "aspect-square", ratio: "1/1" },
  { id: "portrait", name: "Post vertical (4:5)", cssClass: "aspect-[4/5]", ratio: "4/5" },
  { id: "story", name: "Reel / historia (9:16)", cssClass: "aspect-[9/16]", ratio: "9/16" },
  { id: "landscape", name: "Horizontal (16:9)", cssClass: "aspect-video", ratio: "16/9" },
];
