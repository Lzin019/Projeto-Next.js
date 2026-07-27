import './globals.css';

export const metadata = {
    title: 'FrontEnd - Next.js',
    description: 'Template do Next',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
