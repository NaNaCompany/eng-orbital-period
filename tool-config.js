export const tool={
  "id": "E052",
  "slug": "eng-orbital-period",
  "title": "원궤도 공전주기 계산기",
  "title_en": "Circular Orbit Period Calculator",
  "category": "우주",
  "category_en": "Space",
  "fields": [
    {
      "key": "m",
      "label": "중심 천체 질량 M",
      "label_en": "Central body mass M",
      "dimension": "mass",
      "example": 5.9722e+24,
      "constraint": "positive",
      "display_unit": "kg",
      "display_value": "5.9722e+24"
    },
    {
      "key": "r",
      "label": "궤도 중심거리 r",
      "label_en": "Orbital radius from the center r",
      "dimension": "length",
      "example": 7000000.0,
      "constraint": "positive",
      "display_unit": "km",
      "display_value": "7000"
    }
  ],
  "result_label": "원궤도 주기 T",
  "result_label_en": "Circular orbital period T",
  "result_dimension": "time",
  "formula": "T = 2π √(r³/(GM))",
  "purpose": "중심 천체 주위를 도는 이상 원궤도 공전시간 계산",
  "purpose_en": "Calculate the period of an ideal circular orbit.",
  "assumptions": "M,r>0. 위성 질량이 중심체에 비해 작고 궤도가 천체 밖에 있는 뉴턴 원궤도 모델이다. 항력·섭동·상대론 보정은 제외한다. 궤도 속력이 광속 이상인 입력은 거부한다.",
  "assumptions_en": "Required: M,r>0, a satellite much lighter than the central body, and an exterior circular Newtonian orbit. Excluded: drag, perturbations and relativistic corrections. Orbital speeds at or above light speed are rejected.",
  "sources": [
    {
      "label": "OpenStax · 13 4 satellite orbits and energy",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/13-4-satellite-orbits-and-energy"
    }
  ],
  "condition": "",
  "condition_en": "",
  "site": "https://nanalab.kr/eng-orbital-period/",
  "repository": "https://github.com/NaNaCompany/eng-orbital-period",
  "output_unit": "s"
};
