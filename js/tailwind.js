
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        primary: {
                            light: '#3b82f6',
                            dark: '#2563eb'
                        },
                        secondary: {
                            light: '#1e40af',
                            dark: '#1e3a8a'
                        },
                        dark: '#0f172a',
                        light: '#f8fafc',
                        darkblue: '#0a1124',
                        techblue: '#0ea5e9',
                        techpurple: '#8b5cf6'
                    },
                    animation: {
                        'float': 'float 3s ease-in-out infinite',
                        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'button-pulse': 'buttonPulse 2s ease-in-out infinite',
                        'text-gradient': 'textGradient 8s ease infinite',
                        'glow': 'glow 2s ease-in-out infinite alternate',
                        'fade-in': 'fadeIn 0.5s ease-out forwards',
                        'border-pulse': 'borderPulse 3s ease infinite'
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        buttonPulse: {
                            '0%, 100%': { transform: 'scale(1)', 'box-shadow': '0 0 0 0 rgba(59, 130, 246, 0.7)' },
                            '50%': { transform: 'scale(1.02)', 'box-shadow': '0 0 0 10px rgba(59, 130, 246, 0)' }
                        },
                        textGradient: {
                            '0%, 100%': { 'background-position': '0% 50%' },
                            '50%': { 'background-position': '100% 50%' }
                        },
                        glow: {
                            '0%': { 'box-shadow': '0 0 5px rgba(14, 165, 233, 0.5)' },
                            '100%': { 'box-shadow': '0 0 20px rgba(14, 165, 233, 0.8)' }
                        },
                        fadeIn: {
                            '0%': { opacity: '0', transform: 'translateY(20px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' }
                        },
                        borderPulse: {
                            '0%, 100%': { 'border-color': 'rgba(139, 92, 246, 0.5)' },
                            '50%': { 'border-color': 'rgba(139, 92, 246, 0.2)' }
                        }
                    }
                }
            }
        }