import {useTypingEffect } from "@/hooks/useTypingEffect";

export default function TerminalLine({ text }) {
    const typed = useTypingEffect(text || "");

    const isLink = text?.includes("http");

    return (
        <div className="terminal-line">
            {isLink ? (
                <a
                    href={text.replace("gpv@fullstack:~$ ", "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-link"
                >
                    {typed}
                </a>
            ) : (
                <>
                    {typed} <span className="cursor"></span>
                </>
            )}
        </div>
    );
}