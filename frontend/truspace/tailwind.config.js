import withMT from "@material-tailwind/react/utils/withMT";
import { colors } from 'tailwindcss/colors';
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: { 
    
    },
  },
  plugins: [],
});