# 📦 Angular Widget Card Component

A reusable, standalone Angular component that replicates a modern widget card UI based on the provided Figma design.

## ✨ Highlights

This component supports:

- ✅ Header with title and actions
- ✅ Optional compact mode (minimal header)
- ✅ Dynamic body content via `<ng-content>`
- ✅ Optional footer with pagination
- ✅ Flyout menu (action dropdown)

---

## 🧱 Features

- Responsive layout
- Clean, customizable SCSS
- Compact and full variants
- Works with image or text content
- No external libraries

## 🔗 Live Preview

You can view the live demo here:  
👉 https://stackblitz.com/~/github.com/faridullah1/widget-card-component

> Note: You can clone or fork this project to try the component with your own content.



## 🚀 Usage

```html
  <app-widget-card [title]="'Team Update'" [showFooter]="true">
    <p><strong>Update:</strong> Feature deployment on Friday</p>
  </app-widget-card>
  
  <app-widget-card [isCompactView]="true">
    <p>Compact card without footer</p>
  </app-widget-card>
