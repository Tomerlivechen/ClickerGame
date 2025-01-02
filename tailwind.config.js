export default {
    darkMode: "class",
    important: true,
    blackAndWhiteMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 5s linear infinite',
          'spin-fast': 'spin 0.5s linear infinite',
        },
        boxShadow: {
          'yelloGlow': '0 0 30px rgba(255, 223, 0, 0.5), 0 0 40px rgba(255, 223, 0, 0.3)',
          'glow-0': '0 0 1px rgba(59, 130, 246, 0.5), 0 0 2px rgba(59, 130, 246, 0.3)',
          'glow-1': '0 0 2px rgba(59, 130, 246, 0.5), 0 0 3px rgba(59, 130, 246, 0.3)',
          'glow-2': '0 0 3px rgba(59, 130, 246, 0.5), 0 0 4px rgba(59, 130, 246, 0.3)',
          'glow-3': '0 0 4px rgba(59, 130, 246, 0.5), 0 0 5px rgba(59, 130, 246, 0.3)',
          'glow-4': '0 0 5px rgba(59, 130, 246, 0.5), 0 0 6px rgba(59, 130, 246, 0.3)',
          'glow-5': '0 0 6px rgba(59, 130, 246, 0.5), 0 0 7px rgba(59, 130, 246, 0.3)',
          'glow-6': '0 0 7px rgba(59, 130, 246, 0.5), 0 0 8px rgba(59, 130, 246, 0.3)',
          'glow-7': '0 0 8px rgba(59, 130, 246, 0.5), 0 0 9px rgba(59, 130, 246, 0.3)',
          'glow-8': '0 0 9px rgba(59, 130, 246, 0.5), 0 0 10px rgba(59, 130, 246, 0.3)',
          'glow-9': '0 0 10px rgba(59, 130, 246, 0.5), 0 0 11px rgba(59, 130, 246, 0.3)',
          'glow-10': '0 0 11px rgba(59, 130, 246, 0.5), 0 0 12px rgba(59, 130, 246, 0.3)',
          'glow-11': '0 0 12px rgba(59, 130, 246, 0.5), 0 0 13px rgba(59, 130, 246, 0.3)',
          'glow-12': '0 0 13px rgba(59, 130, 246, 0.5), 0 0 14px rgba(59, 130, 246, 0.3)',
          'glow-13': '0 0 14px rgba(59, 130, 246, 0.5), 0 0 15px rgba(59, 130, 246, 0.3)',
          'glow-14': '0 0 15px rgba(59, 130, 246, 0.5), 0 0 16px rgba(59, 130, 246, 0.3)',
          'glow-15': '0 0 16px rgba(59, 130, 246, 0.5), 0 0 17px rgba(59, 130, 246, 0.3)',
          'glow-16': '0 0 17px rgba(59, 130, 246, 0.5), 0 0 18px rgba(59, 130, 246, 0.3)',
          'glow-17': '0 0 18px rgba(59, 130, 246, 0.5), 0 0 19px rgba(59, 130, 246, 0.3)',
          'glow-18': '0 0 19px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
          'glow-19': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 21px rgba(59, 130, 246, 0.3)',
          'glow-20': '0 0 21px rgba(59, 130, 246, 0.5), 0 0 22px rgba(59, 130, 246, 0.3)',
        },
      
      },
      variants: {
        extend: {
        },
      },
    },
    plugins: [
      function ({addUtilities}) {
        const newUtilities = {
          ".scrollbar-dark" : {
            scrollbarWidth : "thin",
            scrollbarColor : "rgb(00 80 80) black",
          },
          ".scrollbar-light" : {
            scrollbarWidth : "thin",
            scrollbarColor : "rgb(3 105 161) rgb(224 242 254)",
          },
          ".scrollbar-webkit-dark" : {
            "&::-webkit-scrollbar-dark" : {
              width : "8px"
            },
            "&::-webkit-scrollbar-dark-track" : {
              background : "black"
            },
            "&::-webkit-scrollbar-dark-thumb" : {
              backgroundColor : "rgb(00 80 80)",
              borderRadius: "20px",
              border: "1px solid rgb(00 B0 B0)"
            },},
  
            ".scrollbar-webkit-light" : {
              "&::-webkit-scrollbar" : {
                width : "8px"
              },
              "&::-webkit-scrollbar-light-track" : {
                background : "rgb(224 242 254)"
              },
              "&::-webkit-scrollbar-light-thumb" : {
                backgroundColor : "rgb(3 105 161)",
                borderRadius: "20px",
                border: "1px solid rgb(224 242 254)"
              },
        }
      }
      addUtilities(newUtilities,["responsive", "hover"])
      },
    ],
  };