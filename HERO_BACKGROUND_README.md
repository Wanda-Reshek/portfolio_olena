# Responsive SVG Background Implementation

## Overview
This implementation provides a responsive SVG background that gradually reveals more content as the viewport grows, while maintaining consistent blur and proportional scaling.

## Component Structure

### `HeroBackground.jsx`
A React component that wraps content and provides the blurred SVG background.

```jsx
import HeroBackground from './components/HeroBackground';

function MyComponent() {
  return (
    <HeroBackground>
      <div className="your-content">
        {/* Your content here */}
      </div>
    </HeroBackground>
  );
}
```

## Key Features

### 1. Oversized SVG (180% height)
- The SVG is intentionally larger than the viewport
- Only part of it is visible on small screens
- More reveals naturally as screen size increases

### 2. Consistent Blur
- `filter: blur(40px)` applied to the background div
- Blur remains visually consistent at all screen sizes
- No performance issues with backdrop-filter

### 3. Proportional Scaling
- Uses `background-size: auto 180%` as base
- Responsive breakpoints adjust the percentage
- No distortion or stretching

### 4. Responsive Breakpoints

| Screen Size | Background Size | Purpose |
|-------------|----------------|---------|
| ≤480px | `auto 200%` | More zoom for mobile |
| 481px-768px | `auto 185%` | Tablet adjustment |
| 769px-1024px | `auto 180%` | Default scaling |
| 1025px-1440px | `auto 175%` | Desktop optimization |
| ≥1441px | `auto 170%` | Large desktop |
| ≥1920px | `auto 165%` | Ultra-wide screens |
| Height ≥900px | `auto 160%` | Tall screens |
| Height ≥1200px | `auto 150%` | Very tall screens |

## CSS Implementation

### Parent Container
```css
.hero-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
```

### Background Element
```css
.hero-background {
  background-image: url('/bg.svg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: auto 180%;
  filter: blur(40px);
  position: absolute;
  inset: 0;
  z-index: -1;
}
```

## Usage Guidelines

1. **SVG Requirements**: Ensure your SVG is tall enough to work with 180%+ scaling
2. **Content Positioning**: Use `position: relative` and `z-index: 1` for content that should appear above the background
3. **Performance**: The implementation uses CSS `filter: blur()` instead of `backdrop-filter` for better performance
4. **Customization**: Adjust blur amount, scaling percentages, and breakpoints as needed

## Technical Benefits

- ✅ True responsive design that adapts to any screen size
- ✅ Consistent visual density across devices
- ✅ No JavaScript required for responsive behavior
- ✅ Smooth transitions between breakpoints
- ✅ Optimal performance with CSS-only implementation
- ✅ Gradual reveal effect as intended
