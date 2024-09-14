import { useState } from "react";
import {ArrowDown, ArrowUp} from "lucide-react";
import './style.css';

export default function Accordion() {
    
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="accordion-container">
            <div className="accordion-title">
                <p>Novidade</p>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <ArrowUp/> : <ArrowDown/>}
                </button>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <p>Sei fazer um accordion jsx com hook</p>
                </div>
            )}
        </div>
    )
}