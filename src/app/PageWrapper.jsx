"use client";
import { motion, AnimatePresence } from "framer-motion";
export const PageWrapper = ({children})=>(
    <>
        <AnimatePresence>
            <motion.div>
                {children}
            </motion.div>
        </AnimatePresence>
    </>
)