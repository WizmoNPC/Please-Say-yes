# Please Say Yes - Valentine's Day Interactive Webpage

A charming and interactive Valentine's Day webpage that asks "Will you be my Valentine?" with dynamic Yes and No buttons that change based on user interaction.

## Features
✨ **Interactive Button Mechanics**  
- Yes button grows larger with each "No" click  
- No button shrinks and moves randomly across the screen  
- Progressive messages encourage clicking Yes  
- Smooth animations and transitions  

💖 **Visual Design**  
- Soft pink and rose gradient backgrounds  
- Animated floating hearts with random positioning  
- Pulsing decorative hearts at the top  
- Success screen with celebration effects  
- Responsive design for all screen sizes  

🎉 **Success Screen**  
- Vibrant celebration view when "Yes" is clicked  
- Displays click counter if "No" was clicked multiple times  
- Bouncing emojis and heart animations  
- Celebratory messages  

## Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Technologies Used
- **React** - UI component framework  
- **Vite** - Lightning-fast build tool  
- **Tailwind CSS** - Utility-first CSS framework  
- **Lucide React** - Beautiful SVG icon library  

## Project Structure
```  
src/  
├── components/  
│   └── ValentinesPage.jsx    # Main component  
├── App.jsx                    # App wrapper  
├── main.jsx                   # React DOM entry point  
└── index.css                  # Global styles  
```  

## How It Works
1. **Initial Screen**: Shows "Will you be my Valentine?" with Yes and No buttons  
2. **First "No" Click**:  
   - Changes heading to show understanding  
   - No button starts moving randomly  
   - Yes button begins growing  
   - Progress messages appear  
3. **Subsequent Clicks**:  
   - No button continues shrinking  
   - Yes button continues growing  
   - Messages evolve based on click count  
   - Button text changes (Not sure? → Really? → But why? → etc.)  
4. **Click "Yes"**:  
   - Success screen appears with celebration  
   - Shows count of "No" clicks if applicable  
   - Displays celebratory messages and animations  

## Customization
You can customize:  
- Colors by modifying Tailwind color classes  
- Button sizes and growth rates by adjusting the calculation formulas  
- Messages by editing the text content  
- Animations by modifying Tailwind animation classes  
- Heart count and sizes in the state initialization  

## Browser Compatibility
Works on all modern browsers that support:  
- CSS Grid and Flexbox  
- CSS Gradients  
- SVG  
- ES6+ JavaScript  

## License
MIT - Feel free to use this for your own Valentine's Day!