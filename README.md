# Flappy Bird Clone

A faithful recreation of the classic Flappy Bird game built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎮 Classic Flappy Bird gameplay mechanics
- 🎨 Beautiful pixel-perfect graphics with CSS
- 🔊 Sound effects for jumps, scoring, and game over
- 📱 Mobile-friendly with touch controls
- ⚡ Smooth 60fps gameplay
- 🏆 High score tracking
- 🎯 Responsive design

## How to Play

- **Desktop**: Press `SPACE` or click to make the bird jump
- **Mobile**: Tap the screen to make the bird jump
- Avoid hitting the pipes or the ground
- Try to get the highest score possible!

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Game Controls

- **Space Bar**: Jump (Desktop)
- **Mouse Click**: Jump (Desktop)
- **Touch**: Jump (Mobile)

## Game Mechanics

- **Gravity**: The bird falls continuously due to gravity
- **Jump Force**: Each jump gives the bird upward velocity
- **Pipe Generation**: Pipes spawn at random heights
- **Collision Detection**: Precise collision detection with pipes and boundaries
- **Scoring**: Score increases when passing through pipes
- **High Score**: Best score is saved during the session

## Technical Details

- Built with Next.js 14 and TypeScript
- Styled with Tailwind CSS
- Uses React hooks for state management
- Web Audio API for sound effects
- RequestAnimationFrame for smooth gameplay
- Responsive design for all screen sizes

## Project Structure

```
src/
├── components/
│   ├── game/
│   │   ├── Bird.tsx          # Bird component
│   │   ├── Pipe.tsx          # Pipe component
│   │   ├── Background.tsx    # Background with clouds
│   │   ├── Game.tsx          # Main game component
│   │   └── GameUI.tsx        # UI overlays
│   └── ui/
│       └── Button.tsx        # Reusable button component
├── hooks/
│   ├── useGame.ts            # Game logic and state
│   └── useSound.ts           # Sound effects
├── types/
│   └── game.ts               # TypeScript interfaces
└── lib/
    └── utils.ts              # Utility functions
```

## Contributing

Feel free to contribute to this project by:

- Adding new features
- Improving the graphics
- Adding more sound effects
- Optimizing performance
- Fixing bugs

## License

This project is open source and available under the MIT License.
