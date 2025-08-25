'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    localStorage.setItem('zkturbo-waitlist', email);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo/Brand */}
            <div className="mb-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold">ZK</span>
                </div>
                <span className="text-3xl font-bold">Turbo</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Zero-Knowledge Proofs
              <br />
              <span className="text-white">43x Faster</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              GPU-accelerated proof generation that transforms weeks into minutes. 
              The future of scalable privacy is here.
            </p>

            {/* Waitlist Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-400">
                  Get early access to the fastest ZK proof engine. No spam, ever.
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">You're on the list!</h3>
                <p className="text-gray-300">
                  We'll notify you at <span className="font-semibold">{email}</span> when ZK Turbo launches.
                </p>
              </div>
            )}

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400">43x</div>
                <div className="text-gray-400 mt-2">Faster Proving</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">90%</div>
                <div className="text-gray-400 mt-2">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">1M+</div>
                <div className="text-gray-400 mt-2">Proofs/Second</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Teams Choose ZK Turbo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-400">
                GPU-accelerated MSM and NTT operations deliver unprecedented speed for Groth16 and PLONK proofs.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Drop-in Compatible</h3>
              <p className="text-gray-400">
                Works seamlessly with existing Arkworks and Circom circuits. No need to rewrite your code.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
              <p className="text-gray-400">
                Reduce infrastructure costs by 90% while scaling to millions of proofs per day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Built for Scale
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center space-x-4 bg-white/5 border border-white/10 rounded-lg p-6">
              <span className="text-3xl">🏦</span>
              <div>
                <h3 className="font-semibold text-lg">DeFi Protocols</h3>
                <p className="text-gray-400">Enable private transactions at L1 speeds</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/5 border border-white/10 rounded-lg p-6">
              <span className="text-3xl">🔐</span>
              <div>
                <h3 className="font-semibold text-lg">Identity Systems</h3>
                <p className="text-gray-400">Verify credentials without revealing data</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/5 border border-white/10 rounded-lg p-6">
              <span className="text-3xl">⛓️</span>
              <div>
                <h3 className="font-semibold text-lg">Layer 2 Rollups</h3>
                <p className="text-gray-400">Generate validity proofs in seconds, not hours</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 bg-white/5 border border-white/10 rounded-lg p-6">
              <span className="text-3xl">🎮</span>
              <div>
                <h3 className="font-semibold text-lg">Gaming</h3>
                <p className="text-gray-400">Real-time proof generation for on-chain games</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Accelerate?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading protocols already using ZK Turbo to scale privacy-preserving applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/zkturbo/zkturbo-core"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              View on GitHub
            </a>
            <a
              href="https://docs.zkturbo.io"
              className="px-8 py-4 border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold">ZK</span>
              </div>
              <span className="text-xl font-bold">Turbo</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="https://github.com/zkturbo" className="hover:text-white transition">GitHub</a>
              <a href="https://twitter.com/zkturbo" className="hover:text-white transition">Twitter</a>
              <a href="mailto:team@zkturbo.io" className="hover:text-white transition">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2024 ZK Turbo. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}