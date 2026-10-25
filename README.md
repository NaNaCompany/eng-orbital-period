# 원궤도 공전주기 계산기

중심 천체 주위를 도는 이상 원궤도 공전시간 계산

- Plan ID: E052
- App: https://nanalab.kr/eng-orbital-period/
- Repository: https://github.com/NaNaCompany/eng-orbital-period
- Formula: `T = 2π √(r³/(GM))`
- Output: 원궤도 주기 T

## Model

M,r>0. 위성 질량이 중심체에 비해 작고 궤도가 천체 밖에 있는 뉴턴 원궤도 모델이다. 항력·섭동·상대론 보정은 제외한다. 궤도 속력이 광속 이상인 입력은 거부한다.

Inputs are normalized to SI. Only one scalar is returned. Model conditions, finite numbers, physical boundaries, overflow and underflow are checked. External solver APIs and property databases are not used.

## Verification

Run `node --test tests/*.test.mjs` with Node.js 22 or later. Independent 70-digit Decimal example result: `5828.50126369867`. Source and license notices are in [SOURCES.md](SOURCES.md) and [LICENSE](LICENSE).

## Hosting

GitHub Pages uses `main` and `/`, with the NaNaCompany domain inherited. Google GTM, GA4, AdSense, Cloudflare analytics and the gray More Apps link are included. All code, descriptions and graphics are original.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
