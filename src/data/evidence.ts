export interface EvidenceImage {
  src: string;
  alt: string;
  caption: string;
}

export const evidenceImages: Record<string, EvidenceImage[]> = {
  "lifeos": [
  ],
  "family-archive": [
    { src: "/evidence/family-archive/01.jpg", alt: "Family Archive project screenshot 1", caption: "Family Archive — verified project evidence from fa-review-3107-3107.jpg" },
    { src: "/evidence/family-archive/02.jpg", alt: "Family Archive project screenshot 2", caption: "Family Archive — verified project evidence from fa-review-2687-2687.jpg" },
    { src: "/evidence/family-archive/03.jpg", alt: "Family Archive project screenshot 3", caption: "Family Archive — verified project evidence from fa-review-2645-2645.jpg" },
    { src: "/evidence/family-archive/04.jpg", alt: "Family Archive project screenshot 4", caption: "Family Archive — verified project evidence from fa-review-13964-13967.jpg" },
    { src: "/evidence/family-archive/05.jpg", alt: "Family Archive project screenshot 5", caption: "Family Archive — verified project evidence from fa-review-13959-13963.jpg" },
    { src: "/evidence/family-archive/06.jpg", alt: "Family Archive project screenshot 6", caption: "Family Archive — verified project evidence from fa-review-13954-13958.jpg" },
  ],
  "operationsflow": [
  ],
  "media-manager": [
  ],
  "tokyo-nights-racing": [
    { src: "/evidence/tokyo-nights-racing/01.png", alt: "Tokyo Nights Racing project screenshot 1", caption: "Tokyo Nights Racing — verified project evidence from 11-race-results-screen.png" },
    { src: "/evidence/tokyo-nights-racing/02.png", alt: "Tokyo Nights Racing project screenshot 2", caption: "Tokyo Nights Racing — verified project evidence from 10-mission-marker-race-start.png" },
    { src: "/evidence/tokyo-nights-racing/03.png", alt: "Tokyo Nights Racing project screenshot 3", caption: "Tokyo Nights Racing — verified project evidence from 09-freeroam-city-traffic.png" },
    { src: "/evidence/tokyo-nights-racing/04.png", alt: "Tokyo Nights Racing project screenshot 4", caption: "Tokyo Nights Racing — verified project evidence from 08-ai-racing-monster-truck.png" },
    { src: "/evidence/tokyo-nights-racing/05.png", alt: "Tokyo Nights Racing project screenshot 5", caption: "Tokyo Nights Racing — verified project evidence from 07-ai-racing-road.png" },
    { src: "/evidence/tokyo-nights-racing/06.png", alt: "Tokyo Nights Racing project screenshot 6", caption: "Tokyo Nights Racing — verified project evidence from 06-race-grid-start.png" },
  ],
};
