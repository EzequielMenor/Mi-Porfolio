/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
		extend: {
			colors: {
				// Dark palette (primary design)
				'dark-bg': '#0f0f1a',
				'dark-surface': '#181825',
				'dark-surface-2': '#1e1e2e',
				'dark-text': '#cdd6f4',
				'dark-muted': '#6c7086',

				// Accent colors (shared across themes)
				'mint': '#94e2d5',
				'peach': '#fab387',
				'code-blue': '#89b4fa',

				// Light palette
				'light-bg': '#f8f9fa',
				'light-surface': '#ffffff',
				'light-text': '#1a1a2e',

				// UI colors
				'overlay': '#313244',
				'border-color': '#45475a',
			},
			fontFamily: {
				heading: ["'JetBrains Mono'", "'Fira Code'", 'monospace'],
				body: ["'Inter'", 'system-ui', 'sans-serif'],
				code: ["'JetBrains Mono'", 'monospace'],
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'104': '26rem',
			},
			boxShadow: {
				'card': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.06)',
				'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.08)',
				'card-elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
			},
			borderRadius: {
				'xl': '0.75rem',
			},
			keyframes: {
				fadeInUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
			},
		},
	},
	plugins: [],
};
