import React, { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const LuPlusIcon = LuPlus as any
const LuMunisIcon = LuMinus as any

export const FAQItem: React.FC<FAQItemProps> = ({ number, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="faq-item"
            style={{
                border: '1px solid #eee',
                marginBottom: '15px',
                backgroundColor: 'white',
                borderRadius: '4px',
                overflow: 'hidden'
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '25px 30px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#333',
                        fontFamily: 'serif' // Pour le style "01."
                    }}>
                        {number}
                    </span>
                    <span style={{
                        fontSize: '18px',
                        fontWeight: '500',
                        color: '#001A3F'
                    }}>
                        {question}
                    </span>
                </div>
                <div style={{ color: '#333' }}>
                    {isOpen ? <LuMunisIcon size={24} /> : <LuPlusIcon size={24} />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div style={{
                            padding: '0 30px 25px 75px', // Aligné sous la question
                            color: '#666',
                            lineHeight: '1.6'
                        }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};