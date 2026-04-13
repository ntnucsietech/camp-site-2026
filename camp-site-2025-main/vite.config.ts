import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
	// 這裡設定 base 路徑，讓瀏覽器知道要去 /2026/ 找檔案
	base: '/2025/', 
	
	plugins: [
		tailwindcss(),
		sveltekit(),
		{
			name: 'fix-cloudflare-enoent',
			closeBundle() {
				// 將這裡的 2025 改成 2026
				const dir = '.svelte-kit/cloudflare/2025';
				if (!fs.existsSync(dir)) {
					fs.mkdirSync(dir, { recursive: true });
				}
			}
		}
	]
});
