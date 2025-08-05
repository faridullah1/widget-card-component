# Angular Widget Card Component

This is a reusable, standalone Angular component that replicates a modern widget card UI. It closely matches the Figma design and supports:

- Header with title and actions
- Optional compact mode (minimal header)
- Dynamic body content via `<ng-content>`
- Optional footer with pagination
- Flyout menu (action dropdown)

## 🧱 Features

- Responsive layout
- Clean, customizable SCSS
- Compact and full variants
- Works with image or text content
- No external libraries

## 🛠️ Usage

```html
<app-widget-card [title]="'Team Update'" [showFooter]="true">
  <p><strong>Update:</strong> Feature deployment on Friday</p>
</app-widget-card>

<app-widget-card [isCompactView]="true">
  <p>Compact card without footer</p>
</app-widget-card>
