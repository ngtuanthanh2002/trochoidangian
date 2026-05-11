# Trò Chơi Dân Gian

Website tĩnh giới thiệu các trò chơi dân gian Việt Nam — phong cách truyền thống kết hợp hiện đại tối giản, tông màu be · nâu · trắng.

> "Một hành trình trở về với ký ức tuổi thơ, nơi tiếng cười rộn rã sân làng…"

## Cấu trúc thư mục

```
.
├── index.html          # Entry point
├── css/
│   └── styles.css      # Toàn bộ stylesheet
├── js/
│   └── main.js         # Tương tác: header scroll, reveal, mobile menu
├── assets/
│   ├── favicon.svg
│   ├── hero-banner.png
│   ├── nhay-sap.jpg
│   ├── danh-du.jpg
│   ├── nem-con.jpg
│   ├── dap-nieu.jpg
│   ├── cau-kieu.jpg
│   ├── bat-vit.jpg
│   └── bap-benh.jpg
├── vercel.json         # Cấu hình deploy (cache + clean URLs)
├── .gitignore
└── README.md
```

## Chạy tại máy

Là một website tĩnh thuần (HTML + CSS + JS), không cần build. Có thể mở `index.html` trực tiếp, hoặc dùng một local server bất kỳ:

```bash
# Python
python -m http.server 5173

# Node (npx)
npx serve .

# VS Code
# Cài extension "Live Server" → bấm "Go Live"
```

Sau đó mở `http://localhost:5173`.

## Deploy lên Vercel

### Cách 1 — Vercel CLI (nhanh nhất)

```bash
npm i -g vercel
vercel        # lần đầu, login + cấu hình
vercel --prod # deploy production
```

### Cách 2 — Qua GitHub (khuyên dùng)

1. Push repo lên GitHub.
2. Truy cập [vercel.com/new](https://vercel.com/new) → **Import** repo.
3. Để các trường mặc định (không cần build command, output directory). Vercel sẽ tự nhận diện đây là static site.
4. Bấm **Deploy**.

Mỗi commit push lên `main` sẽ tự deploy production; các nhánh khác nhận URL **preview**.

### Cấu hình đã có sẵn (`vercel.json`)

- `cleanUrls: true` — `/index.html` → `/`, không có đuôi `.html` dư.
- Cache trường thọ cho `assets/`, `css/`, `js/` (1 năm, `immutable`).
- Headers bảo mật: `X-Content-Type-Options`, `Referrer-Policy`.

## SEO & Social Preview — sau khi deploy

`index.html` đã có đầy đủ metadata để hiển thị logo + ảnh preview khi share lên Google / Facebook / Zalo / Twitter, bao gồm:

- **Open Graph** (`og:title`, `og:description`, `og:image`, …)
- **Twitter Card** (`summary_large_image`)
- **Schema.org JSON-LD** (`Organization` + `WebSite` + `WebPage`) — Google dùng để hiển thị logo trong Knowledge Graph.
- **Favicon SVG** đa dạng `rel` (icon, apple-touch-icon, mask-icon).

### Cần làm sau lần deploy đầu tiên

1. **Đổi domain placeholder** trong `index.html`:
   - Tìm `https://trochoidangian.vercel.app/` → thay bằng domain thật Vercel cấp (ví dụ `https://my-site.vercel.app/`) **hoặc** custom domain của bạn.
   - Có 11 chỗ cần đổi — bạn có thể Find & Replace toàn file.

2. **Yêu cầu Google crawl lại** (tuỳ chọn):
   - Vào [Google Search Console](https://search.google.com/search-console) → Add Property → verify domain.
   - Submit URL `https://your-domain.com/` qua tab "URL Inspection".

3. **Refresh cache OG khi đã chỉnh metadata**:
   - Facebook / Messenger / Zalo: [Sharing Debugger](https://developers.facebook.com/tools/debug/) → nhập URL → bấm "Scrape Again".
   - Twitter: [Card Validator](https://cards-dev.twitter.com/validator).
   - LinkedIn: [Post Inspector](https://www.linkedin.com/post-inspector/).

### Lưu ý ảnh og:image

Hiện tại dùng `assets/hero-banner.png` (bức tranh dân gian gốc). Để tối ưu hơn, có thể chuẩn bị một ảnh **1200 × 630 px** chuyên dụng cho social share (logo + tiêu đề), bỏ vào `assets/` rồi đổi `og:image` thành ảnh đó. Hiện tại ảnh gốc vẫn hiển thị tốt trên hầu hết nền tảng.

## Tính năng

- Header trong suốt khi ở đầu trang, có nền khi cuộn xuống.
- Hero phủ trọn viewport, ảnh nền minh họa các trò chơi dân gian.
- Grid 7 trò chơi với hover ảnh zoom mượt.
- 3 đánh giá người dùng phong cách hiện đại.
- Menu hamburger mobile có panel full-width.
- Reveal-on-scroll bằng `IntersectionObserver`.
- Responsive 3 mức: ≤720px, ≤992px, desktop.
- Tôn trọng `prefers-reduced-motion`.

## Tông màu & font

| Vai trò | Giá trị |
|---|---|
| Be chính | `#eaded2` |
| Be nhạt (nền) | `#f5efe6` |
| Nâu chính | `#974b00` |
| Nâu đậm | `#5a2e00` |
| Tiêu đề | Playfair Display |
| Body | Be Vietnam Pro |

## Giấy phép

© 2026 Trò Chơi Dân Gian. Tài liệu phi thương mại phục vụ mục đích học tập và lan tỏa văn hóa Việt.
