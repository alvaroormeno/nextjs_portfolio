import React from 'react'

function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; 2024 Alvaro Ormeno. All rights reserved.
            </small>
            <p className="text-xs">
                Built with
                React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
                Framer Motion, React Email & Resend, Vercel hosting.
            </p>
        </footer>
    )
}

export default Footer