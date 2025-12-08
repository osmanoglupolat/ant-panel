# Performance Optimization Guide

This document outlines the performance optimizations implemented in Ant Panel.

## Code Splitting

### Dynamic Imports

Large components are lazy-loaded using Next.js dynamic imports to reduce initial bundle size:

- **Kanban Board**: `app/(dashboard)/kanban/page.tsx`
- **Calendar**: `app/(dashboard)/calendar/page.tsx`
- **Charts**: `components/features/dashboard/index.tsx`
  - RevenueChart
  - RevenueLineChart
  - ChannelBarChart
  - SegmentPieChart
  - NotificationsPanel

These components are only loaded when the user navigates to their respective pages, significantly reducing the initial JavaScript bundle size.

### Loading States

Loading states are provided for dynamically imported components:
- `app/(dashboard)/kanban/loading.tsx`
- `app/(dashboard)/calendar/loading.tsx`

## Image Optimization

All images use Next.js `Image` component which provides:
- Automatic image optimization
- Lazy loading
- Responsive images
- Modern format support (AVIF, WebP)

### Configuration

Images are configured in `next.config.ts`:
- AVIF and WebP format support
- Responsive device sizes
- Minimum cache TTL of 60 seconds

## Bundle Optimization

### Package Imports Optimization

The following packages are optimized for tree-shaking:
- `@radix-ui/*` components
- `lucide-react` icons
- `recharts` charting library
- `date-fns` date utilities

### Compression

- Gzip/Brotli compression enabled
- SWC minification enabled
- `poweredByHeader` disabled for security

## Performance Best Practices

### 1. Component Memoization

Use `React.memo()` and `useMemo()` for expensive computations:
- Widget controller props memoization
- Dashboard data processing

### 2. Efficient Re-renders

- Avoid unnecessary re-renders with proper dependency arrays
- Use callback functions sparingly in JSX

### 3. Font Loading

Fonts are optimized using Next.js font optimization:
- Variable fonts for better performance
- Preloaded for faster initial render

## Bundle Size Analysis

To analyze bundle size:

```bash
# Install analyzer (if not already installed)
pnpm add -D @next/bundle-analyzer

# Add to next.config.ts:
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true pnpm build
```

## Performance Metrics Targets

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Total Blocking Time (TBT)**: < 200ms
- **Cumulative Layout Shift (CLS)**: < 0.1

## Monitoring

For production deployments, consider integrating:
- **Web Vitals**: Core Web Vitals reporting
- **Lighthouse CI**: Automated performance testing
- **Real User Monitoring (RUM)**: Track actual user performance

## Additional Optimizations

### Future Improvements

1. **Service Worker**: Implement offline support and caching
2. **Route Prefetching**: Prefetch routes on hover
3. **Image CDN**: Use a CDN for optimized image delivery
4. **API Response Caching**: Implement response caching for API calls
5. **Database Query Optimization**: Optimize data fetching patterns

