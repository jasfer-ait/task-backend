// src/app/layout.tsx
import ThemeRegistry from '../theme/ThemeRegistry';
import './globals.css'; // if you have global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
