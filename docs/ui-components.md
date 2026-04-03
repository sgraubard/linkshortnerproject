# UI Components Standards

## Overview

All UI elements in this application are built exclusively with **shadcn/ui**. No custom UI components should be created from scratch.

## Core Requirements

### 1. shadcn/ui Only

- **Use shadcn/ui components exclusively** for all UI elements
- DO NOT create custom components that replicate shadcn/ui functionality
- All UI components are located in `/components/ui`
- Components are already styled with Tailwind CSS and follow design system standards

### 2. Available Components

shadcn/ui provides a comprehensive set of components including:

- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch, Label
- **Layout**: Card, Dialog, Sheet, Separator, Tabs, Accordion
- **Feedback**: Alert, Toast, Progress, Skeleton
- **Navigation**: Button, Dropdown Menu, Command, Navigation Menu
- **Data Display**: Table, Badge, Avatar, Tooltip
- **And many more**: See [shadcn/ui documentation](https://ui.shadcn.com)

### 3. Installing New Components

When a required component is not yet in `/components/ui`:

```bash
npx shadcn@latest add [component-name]
```

Examples:

```bash
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add card
```

### 4. Component Composition

- **Compose existing shadcn/ui components** to build complex UI patterns
- Combine multiple shadcn/ui primitives rather than building custom alternatives
- Use Tailwind CSS for layout and styling customization
- Leverage the `cn()` utility from `/lib/utils.ts` for conditional styling

## Implementation Patterns

### Using shadcn/ui Components

```typescript
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function MyForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Form Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter text" />
        <Button>Submit</Button>
      </CardContent>
    </Card>
  );
}
```

### Composing Complex UI

```typescript
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function CreateLinkDialog() {
  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Short Link</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="url">Original URL</Label>
            <Input id="url" placeholder="https://example.com" />
          </div>
          <Button>Create Link</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
```

### Custom Styling with Tailwind

```typescript
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function StyledButton({ isActive }: { isActive: boolean }) {
  return (
    <Button
      className={cn(
        "w-full justify-start",
        isActive && "bg-primary text-primary-foreground"
      )}
    >
      Click Me
    </Button>
  );
}
```

## Best Practices

1. **Check existing components first** - Before creating any UI, verify if a shadcn/ui component exists
2. **Install before using** - Ensure the component is installed via CLI before importing
3. **Read component docs** - Reference [shadcn/ui docs](https://ui.shadcn.com) for proper usage and props
4. **Leverage composition** - Build complex UIs by composing simple components
5. **Use variants** - Many shadcn/ui components support variants for different styles

---

_Last Updated: April 2026_
