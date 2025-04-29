import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: "-50%" },
    visible: { opacity: 1, scale: 1, y: "0" },
};

export default function Modal({ isOpen, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-stone-800/75 flex items-center justify-center z-50"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className="bg-white rounded-lg w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 p-6 shadow-lg"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-xl font-semibold text-stone-800">Sign In</h1>
                                <p className="text-sm text-stone-500">Enter your email and password to continue</p>
                            </div>
                            <button onClick={onClose} className="text-stone-500 hover:text-stone-800 text-2xl font-bold">&times;</button>
                        </div>

                        <form className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-stone-800">Email</label>
                                <input
                                    type="email"
                                    placeholder="someone@example.com"
                                    className="mt-1 w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-stone-800">Password</label>
                                <input
                                    type="password"
                                    placeholder="*******"
                                    className="mt-1 w-full px-3 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input type="checkbox" defaultChecked id="remember" className="w-4 h-4" />
                                <label htmlFor="remember" className="text-sm text-stone-700">Remember Me</label>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium py-2 rounded-lg transition"
                            >
                                Sign In
                            </button>

                            <p className="text-sm text-center text-stone-500 mt-3">
                                Don't have an account? <a href="#" className="text-stone-800 font-semibold">Sign up</a>
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
