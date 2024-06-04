'use client'
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Modal = ({
    children
}: { children: React.ReactNode }) => {
    const [showModal, setShowModal] = useState(true);
    const router = useRouter()
    const modalRef = useRef(null)

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onkeydown])

    const handelOnClose = useCallback(() => {
        setShowModal(false)
        router.back()
    }, [router])

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") handelOnClose();
        },
        [handelOnClose]
    );


    return (
        <div>
            {/* Button to open the modal */}
            {/* <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Open Modal
            </button> */}

            {/* The modal itself */}

            <div className={`fixed inset-0 flex items-center justify-center z-50 ${!showModal && 'hidden'}`} ref={modalRef}>
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Modal Content</h2>
                    {children}
                    <button
                        onClick={handelOnClose}
                        className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 px-2 py-1 rounded-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
