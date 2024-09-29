"use client";
import { motion, AnimatePresence } from "framer-motion";
export const PageWrapper = ({children})=>(
    <>
    <AnimatePresence>
        <div>
            {children}
        </div>
    </AnimatePresence>
    </>
)