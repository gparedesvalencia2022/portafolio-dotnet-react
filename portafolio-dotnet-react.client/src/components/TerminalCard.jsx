import { useEffect, useState } from "react";
import TerminalLine from "./TerminalLine";

const commands = [
    "gpv@fullstack:~$ npm install nodejs",
    "gpv@fullstack:~$ dotnet new webapi",
    "gpv@fullstack:~$ dotnet run",
    "gpv@fullstack:~$ code .",    
    "gpv@fullstack:~$ echo 'to contact me, visit my GitHub repository:'",
    "gpv@fullstack:~$ https://github.com/gparedesvalencia2022"

];


function TerminalCard() {    
    const [lines, setLines] = useState([]);

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            if (i < commands.length) {
                setLines(prev => [...prev, commands[i]]);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="terminal-container">

            {/* ✅ HEADER TIPO TERMINAL */}
            <div className="terminal-header">
                <div className="terminal-buttons">
                    <span className="terminal-btn red"></span>
                    <span className="terminal-btn yellow"></span>
                    <span className="terminal-btn green"></span>
                </div>
                <div className="terminal-title">
                    gpv@fullstack:~$
                </div>
            </div>

            {/* ✅ BODY */}
            <div className="terminal-body">
                {lines.map((line, index) => (
                    <TerminalLine key={index} text={line} />
                ))}
            </div>

        </div>
    );
}

export default TerminalCard;