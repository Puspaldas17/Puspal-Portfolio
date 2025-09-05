import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		screens: {
			'xs': '480px',
			'sm': '640px', 
			'md': '768px',
			'lg': '1024px',
			'xl': '1440px',
			'2xl': '1920px',
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['var(--font-sans)'],
				'mono': ['var(--font-mono)'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					light: 'hsl(var(--accent-light))',
					dark: 'hsl(var(--accent-dark))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundColor: {
				'subtle': 'hsl(var(--bg-subtle))',
				'surface': 'hsl(var(--bg-surface))',
				'elevated': 'hsl(var(--bg-elevated))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-surface': 'var(--gradient-surface)',
				'gradient-hero': 'var(--gradient-hero)',
			},
			boxShadow: {
				'sm': 'var(--shadow-sm)',
				'md': 'var(--shadow-md)',
				'lg': 'var(--shadow-lg)',
				'xl': 'var(--shadow-xl)',
				'card': 'var(--shadow-card)',
				'accent': 'var(--shadow-accent)'
			},
		keyframes: {
			'accordion-down': {
				from: { height: '0' },
				to: { height: 'var(--radix-accordion-content-height)' }
			},
			'accordion-up': {
				from: { height: 'var(--radix-accordion-content-height)' },
				to: { height: '0' }
			},
			'float': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-10px)' }
			},
			'fade-in-up': {
				'0%': { opacity: '0', transform: 'translateY(30px)' },
				'100%': { opacity: '1', transform: 'translateY(0)' }
			},
			'fade-in-left': {
				'0%': { opacity: '0', transform: 'translateX(-30px)' },
				'100%': { opacity: '1', transform: 'translateX(0)' }
			},
			'fade-in-right': {
				'0%': { opacity: '0', transform: 'translateX(30px)' },
				'100%': { opacity: '1', transform: 'translateX(0)' }
			},
			'scale-up': {
				'0%': { transform: 'scale(0.95)', opacity: '0' },
				'100%': { transform: 'scale(1)', opacity: '1' }
			},
			'slide-up': {
				'0%': { transform: 'translateY(100%)', opacity: '0' },
				'100%': { transform: 'translateY(0)', opacity: '1' }
			},
			'blur-in': {
				'0%': { filter: 'blur(10px)', opacity: '0' },
				'100%': { filter: 'blur(0px)', opacity: '1' }
			},
			'glow': {
				'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
				'50%': { boxShadow: '0 0 30px hsl(var(--primary) / 0.6), 0 0 40px hsl(var(--accent) / 0.4)' }
			},
			'shimmer': {
				'0%': { backgroundPosition: '-200% 0' },
				'100%': { backgroundPosition: '200% 0' }
			},
			'bounce-gentle': {
				'0%, 100%': { transform: 'translateY(0px)' },
				'50%': { transform: 'translateY(-5px)' }
			},
			'slide-in-bottom': {
				'0%': { transform: 'translateY(50px)', opacity: '0' },
				'100%': { transform: 'translateY(0)', opacity: '1' }
			},
			'zoom-in': {
				'0%': { transform: 'scale(0.8)', opacity: '0' },
				'50%': { opacity: '0.5' },
				'100%': { transform: 'scale(1)', opacity: '1' }
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'float': 'float 6s ease-in-out infinite',
			'fade-in-up': 'fade-in-up 0.8s ease-out',
			'fade-in-left': 'fade-in-left 0.8s ease-out',
			'fade-in-right': 'fade-in-right 0.8s ease-out',
			'scale-up': 'scale-up 0.6s ease-out',
			'slide-up': 'slide-up 0.8s ease-out',
			'blur-in': 'blur-in 1s ease-out',
			'glow': 'glow 2s ease-in-out infinite',
			'shimmer': 'shimmer 2s linear infinite',
			'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
			'slide-in-bottom': 'slide-in-bottom 0.7s ease-out',
			'zoom-in': 'zoom-in 0.6s ease-out'
		}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
