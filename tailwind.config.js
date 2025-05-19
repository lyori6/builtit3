export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        // Primary colors from PRD V1.3
        background: '#0D0E11',    // Primary Background (Deep Charcoal)
        surface: '#1A1B20',       // Secondary Background/Card Surface (Dark Slate)
        primary: '#7000FF',       // Primary Accent (Vibrant Electric Purple)
        accent: '#B2FF59',        // Secondary Accent (Vibrant Acid Lime)
        text: {
          primary: '#E0E0E0',     // Primary Text (Off-White)
          secondary: '#A0A0A0',   // Secondary Text (Medium Gray)
        },
        border: '#2D2D2D',        // Subtle Borders/Dividers (Charcoal Gray)
        
        // Project memory colors - keeping for reference
        turquoise: '#00C9B7',     // Project accent color (from memory)
        purple: '#4F46E5',        // Secondary color (from memory)
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.35)',
        glow: '0 0 15px rgba(112, 0, 255, 0.2)',  // Electric Purple glow
      },
      borderRadius: {
        lg: '16px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 15s ease infinite alternate',
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 0.9 },
        },
      },
    },
  },
}