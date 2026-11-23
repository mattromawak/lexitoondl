
import {
    Download as DownloadIcon,
    Star,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const APK_URL = "https://github.com/mattromawak/lexitoondl/releases/download/v1.0.0/lexitoon.apk";

export default function DownloadPage() {

    const handleDownload = () => {
        window.location.href = APK_URL;
    };
    return (
        <main className="min-h-screen bg-[#FFF5F7] text-[#30252A] overflow-hidden">

            {/* Hero */}
            <section className="relative overflow-hidden px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">

                {/* Background Decorations */}
                <div className="absolute -top-32 -right-24 w-96 h-96 bg-[#FFE0E9] rounded-full blur-3xl opacity-80" />
                <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#FCE8F0] rounded-full blur-3xl opacity-80" />

                <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight text-[#30252A]">
                            Read.
                            <span className="text-[#E8799A]"> Play.</span>
                            <br />
                            <span className="relative inline-block">
                                Learn!
                                <svg
                                    className="absolute -bottom-3 left-0 w-full"
                                    viewBox="0 0 260 16"
                                    fill="none"
                                >
                                    <path
                                        d="M4 10C65 2 180 2 256 9"
                                        stroke="#F4A6B8"
                                        strokeWidth="7"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </h1>

                        <p className="mt-9 text-lg sm:text-xl text-[#8E7B82] leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Turn vocabulary practice into an adventure! Explore comic
                            stories, discover new words, and challenge yourself as
                            you learn with LexiToon.
                        </p>

                        {/* Download Button */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10">
                            <button
                                onClick={handleDownload}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#E8799A] hover:bg-[#D96588] text-white px-8 py-4 rounded-2xl font-black text-lg shadow-[0_6px_0_#B94D70] active:translate-y-1 active:shadow-none transition"
                            >
                                <DownloadIcon size={21} />
                                Download APK
                            </button>
                        </div>

                        {/* Download Information */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mt-9 text-sm font-semibold text-[#A18D94]">
                            <span className="flex items-center gap-2">
                                <ShieldCheck size={18} className="text-[#D96588]" />
                                Android compatible
                            </span>

                            <span className="w-1 h-1 rounded-full bg-[#E8B9C8]" />

                            <span>Free APK download</span>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="relative flex justify-center items-center min-h-115 sm:min-h-135">

                        {/* Soft Pink Background Shape */}
                        <div className="absolute w-82.5 h-95 sm:w-107.5 sm:h-120 rounded-[45%] bg-[#FAD6E1] rotate-[-8deg]" />

                        <div className="absolute w-72.5 h-85 sm:w-95 sm:h-105 rounded-[45%] border-2 border-dashed border-[#EBA8BB] rotate-[8deg]" />

                        {/* Halftone Pattern */}
                        <div
                            className="absolute top-8 right-5 sm:right-12 w-24 h-24 opacity-40"
                            style={{
                                backgroundImage: "radial-gradient(#E8799A 1.5px, transparent 1.5px)",
                                backgroundSize: "10px 10px",
                            }}
                        />

                        {/* Vocabulary Sticker */}
                        <div className="absolute top-8 left-2 sm:left-6 z-20 rotate-[-10deg]">
                            <div className="relative bg-white border-2 border-[#30252A] rounded-xl px-4 py-3 shadow-[4px_5px_0_#30252A]">
                                <p className="text-[9px] font-black tracking-[0.2em] text-[#E8799A]">
                                    COMIC LEARNING
                                </p>
                                <p className="text-xl font-black text-[#30252A]">
                                    LET'S READ!
                                </p>

                                <div className="absolute -top-3 -right-3 bg-[#FFE4EC] border-2 border-[#30252A] rounded-full w-8 h-8 flex items-center justify-center">
                                    <Star
                                        size={15}
                                        className="text-[#D96588]"
                                        fill="currentColor"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Comic Burst */}
                        <div className="absolute top-20 right-1 sm:right-8 z-20 rotate-12">
                            <div className="relative w-19 h-19 flex items-center justify-center">
                                <svg
                                    viewBox="0 0 100 100"
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <path
                                        d="M50 2 L61 25 L85 12 L78 38 L99 50 L76 62 L88 87 L61 76 L50 99 L39 76 L13 88 L24 62 L1 50 L24 38 L12 13 L39 25 Z"
                                        fill="#E8799A"
                                        stroke="#30252A"
                                        strokeWidth="3"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <Sparkles
                                    size={29}
                                    className="relative text-white"
                                    strokeWidth={2.5}
                                />
                            </div>
                        </div>

                        {/* Mini Speech Bubble */}
                        <div className="absolute bottom-20 left-0 sm:left-5 z-20 -rotate-6">
                            <div className="relative bg-[#E8DDF2] border-2 border-[#30252A] rounded-[50%] px-5 py-3 shadow-[3px_4px_0_#30252A]">
                                <p className="text-xs font-black text-[#30252A] tracking-wide">
                                    LET'S PLAY!
                                </p>

                                <div className="absolute -bottom-2 left-5 w-4 h-4 bg-[#E8DDF2] border-r-2 border-b-2 border-[#30252A] rotate-45" />
                            </div>
                        </div>

                        {/* Small Decorative Star */}
                        <div className="absolute bottom-8 right-5 sm:right-12 z-20 rotate-12">
                            <div className="w-12 h-12 rounded-full bg-[#FFE4EC] border-2 border-[#30252A] flex items-center justify-center shadow-[3px_3px_0_#30252A]">
                                <Star
                                    size={22}
                                    className="text-[#D96588]"
                                    fill="currentColor"
                                />
                            </div>
                        </div>

                        {/* App Preview */}
                        <div className="relative z-10 w-65 sm:w-72.5 bg-[#30252A] p-3 rounded-[2.8rem] shadow-2xl -rotate-3">
                            <div className="rounded-[2.2rem] overflow-hidden bg-white">
                                <img
                                    src="/app-photo.jpe"
                                    alt="LexiToon mobile app preview"
                                    className="block w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Floating Learning Badge */}
                        <div className="absolute z-20 -right-1 sm:right-0 top-1/2 -translate-y-1/2 bg-white border border-[#F4D5DF] px-4 py-3 rounded-2xl shadow-xl rotate-6">
                            <p className="text-xs text-[#A18D94] font-semibold">
                                KEEP LEARNING!
                            </p>

                            <p className="font-black text-[#E8799A] flex items-center gap-1.5">
                                One word at a time
                                <Star size={14} fill="currentColor" />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
