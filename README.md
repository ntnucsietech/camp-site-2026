# 操作步驟與真正的檔案資料在上方的資料夾的README裡

開始做之前請詳細參閱2025年的code，不清楚就問AI或whyhugo

可以做成單純靜態網頁或框架(svelte)的形式，時間可能會差個5~6倍吧我猜，反正我是只做靜態但2025的比較完整。

資料夾外的檔案只有些要些微調整，那些大多是為了整合部署好放一起而必須的檔案。

## Cloudflare連結GitHub

你要在Cloudflare上找到 Compute -> Worker&Pages -> Create Application，注意要點下方的Create Pages。

Build command:pnpm build

Build output:.svelte-kit/cloudflare

另外我的root有在Advance那邊調整過

## 這邊放上hugo的指引

目前還可考的 2023、2024、2025 資工營網頁已經全數完成整合部署
也順手更新了一下 2025 的 RW:D

全數以 camp 子網域、/year 路徑方式部署於系學會 cloudflare：

https://camp.ntnucsie.info/2025/  https://github.com/CSIE-Camp/camp-site-2025

https://camp.ntnucsie.info/2024/  https://github.com/CSIE-Camp/Camp_website_2024

https://camp.ntnucsie.info/2023/  https://github.com/CSIE-Camp/website-frontend

各網站獨立 repo 獨立 cloudflare pages，最後再透過 cloudflare workers 對使用者造訪的路徑分到對應 pages；https://camp.ntnucsie.info/ 目前會自動導向 2026 網站也是透過 系學會Cloudflare裡的workers 設定。

/year 路徑部署方式是直接在各年度網頁專案中直接寫入，例如 base: "/2024"；開發環境 pnpm dev 測試時也有設置會自動導向 localhost:port/year。

2027 網站可以依循相同邏輯來部署。

# 好用的網頁開發工具

Figma, tailwind css
