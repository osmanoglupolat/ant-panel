# Accessibility Guide

This document outlines accessibility features and best practices in Ant Panel.

## WCAG Compliance

Ant Panel aims to meet **WCAG 2.1 Level AA** standards for accessibility.

## Key Features

### 1. Semantic HTML

- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements (`<nav>`, `<main>`, `<section>`, `<article>`)
- Proper form labels and associations

### 2. Keyboard Navigation

- Full keyboard navigation support
- Visible focus indicators
- Tab order follows logical flow
- Escape key closes modals and dropdowns

### 3. Screen Reader Support

- ARIA labels and roles where needed
- Descriptive alt text for images
- Live regions for dynamic content updates
- Proper landmark regions

### 4. Color Contrast

- Text meets WCAG AA contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Color is not the only means of conveying information
- Focus indicators are clearly visible

### 5. Form Accessibility

- All form inputs have associated labels
- Error messages are associated with inputs
- Required fields are clearly indicated
- Validation feedback is accessible

## Component Accessibility

### Button Components

- Proper button semantics
- Descriptive text or aria-label
- Loading states communicated

### Form Components

- Labels properly associated with inputs
- Error states with aria-invalid
- Help text with aria-describedby
- Required fields marked

### Modal/Dialog Components

- Focus trap when open
- Escape key closes
- Focus returns to trigger on close
- Proper ARIA roles and labels

### Navigation

- Skip links for main content
- Breadcrumb navigation
- Active state indicators
- Keyboard navigation support

### Data Tables

- Proper table markup
- Sortable columns announced
- Row actions accessible
- Pagination controls accessible

## Testing Accessibility

### Automated Testing

Use tools like:
- **axe DevTools**: Browser extension for accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Includes accessibility audit

### Manual Testing

1. **Keyboard Navigation**
   - Navigate entire app using only keyboard
   - Test all interactive elements
   - Verify focus indicators

2. **Screen Reader Testing**
   - Test with NVDA (Windows) or VoiceOver (macOS)
   - Verify all content is announced
   - Check form labels and errors

3. **Color Blindness**
   - Use color blindness simulators
   - Verify information isn't color-dependent
   - Test all color schemes

### Testing Checklist

- [ ] All images have alt text
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Form labels are properly associated
- [ ] Error messages are announced
- [ ] Color contrast meets WCAG AA
- [ ] Heading hierarchy is logical
- [ ] ARIA labels used appropriately
- [ ] Skip links present (if needed)
- [ ] Modal focus management works

## Common Issues and Solutions

### Missing Alt Text

```tsx
// ❌ Bad
<img src="/avatar.jpg" />

// ✅ Good
<img src="/avatar.jpg" alt="User avatar" />
<Image src="/avatar.jpg" alt="User avatar" />
```

### Missing Labels

```tsx
// ❌ Bad
<input type="text" />

// ✅ Good
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />
```

### Keyboard Navigation

```tsx
// ✅ Good - Focus management
useEffect(() => {
  if (isOpen) {
    // Focus first element
    firstInputRef.current?.focus();
  }
}, [isOpen]);
```

### ARIA Labels

```tsx
// ✅ Good - Descriptive labels
<button aria-label="Close notification" onClick={handleClose}>
  <X className="h-4 w-4" />
</button>
```

## Radix UI Components

Ant Panel uses Radix UI components which provide:
- Built-in keyboard navigation
- Focus management
- ARIA attributes
- Screen reader support

All Radix components are accessible by default, but ensure:
- Labels are provided where needed
- Descriptive text is added
- Custom styling doesn't break accessibility

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

## Continuous Improvement

Accessibility is an ongoing effort. When adding new features:

1. Consider accessibility from the start
2. Test with keyboard and screen readers
3. Verify color contrast
4. Add ARIA labels where needed
5. Test with different assistive technologies

