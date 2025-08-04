import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './public/styles/**/*.css', // 모든 CSS 파일이 Tailwind에 의해 처리되도록
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // add required value here
          }
        }
      },
      colors: {
        'purple-light': '#f3e8ff', // 실제 사용할 색상 코드
        'black': '#1a1a1a', // 실제 사용할 색상 코드
        'white': '#ffffff', // 실제 사용할 색상 코드
        'gray-2': '#eee', // 실제 사용할 색상 코드
        'gray-3': '#ccc', // 실제 사용할 색상 코드
        'yalloo-primary': '#0081C9',
        'yalloo-secondary': '#00A2FD',
        'yalloo-gray': '#D9D9D9',
        purple: {
          100: '#f3e8ff', // var(--purple-light) 대체
          // 필요하다면 다른 보라색 계열도 추가
        },
        gray: {
          200: '#e5e7eb', // bg-gray-200
          300: '#d1d5db', // border-gray-300
          400: '#9ca3af', // border-gray-400
          800: '#1f2937', // text-gray-800
          900: '#111827', // bg-gray-900 (거의 black에 가까움)
        },
        blue: {
          500: '#3b82f6', // bg-blue-500
        },
        // 공식 문서에서 사용된 var(--black), var(--white)를 명시적으로 정의 (선택 사항)
        'black-custom': '#1a1a1a', // var(--black) 대체
        'white-custom': '#ffffff', // var(--white) 대체
        custom: {
          secondary: "#00A2FD", "secondary-gray": "#5F5F5F",
          primary: "#0081C9", "primary-gray": "#AAA",
          "light-gray": "#D9D9D9", "chat-gray": "#F6F6F6",
          "chat-green": "#E9FFE8", "post-blue": "#01A9DB",
          'primary-green':"#5CAB7D", "primary-red": "#FF8686"
        }
      },
      fontFamily: {
        'IntelliJ-ExtraLight': ['IntelliJ-ExtraLight'],
        'ZCOOLKuaiLe-Regular': ['ZCOOLKuaiLe-Regular'],
        zcool: ["'ZCOOL KuaiLe'", "sans-serif"], // 사용자 정의 폰트 추가
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        'yalloo-10': '10px',
      },
      height: {
        'yalloo-1/2-minus-46': 'calc(50vh - 32px)',
        'yalloo-1/2-minus-120': 'calc(50vh - 120px)',
        'yalloo-full-minus-46': 'calc(100vh - 32px)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
