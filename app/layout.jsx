import './globals.css';

export const metadata = {
  title: 'Voxel Boy',
  description: 'Pixel 3D boy model rendered in the browser',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
