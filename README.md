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
