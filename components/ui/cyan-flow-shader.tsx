'use client';

export function CyanFlowShader({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Base cyan gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 via-black to-black" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-cyan-400/15 blur-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-cyan-600/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Flowing gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-flow-slow" />
    </div>
  );
}