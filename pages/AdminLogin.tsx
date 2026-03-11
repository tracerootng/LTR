import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, Shield, AlertCircle } from 'lucide-react';
import { authStore } from '../lib/mediaStore';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    await new Promise(r => setTimeout(r, 800)); // Simulate auth delay
    if (authStore.login(username, password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#00200E] via-[#002E15] to-[#00411D] flex items-center justify-center p-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#008753]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E67E22]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#008753]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Top bar accent */}
          <div className="h-1 bg-gradient-to-r from-[#008753] via-emerald-400 to-[#E67E22]" />

          <div className="p-10">
            {/* Logo & header */}
            <div className="text-center mb-10">
              <img
                src="https://www.ltrnigeria.org/images/ltr-logo.png"
                alt="LTR Nigeria"
                className="h-16 object-contain mx-auto mb-5"
              />
              <h1 className="text-2xl font-extrabold text-white">Admin Portal</h1>
              <p className="text-gray-400 text-sm mt-2">Restricted access — authorized personnel only</p>
            </div>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 bg-red-500/15 border border-red-500/20 text-red-300 text-sm px-4 py-3 rounded-xl mb-6"
              >
                <AlertCircle size={16} className="flex-shrink-0" />
                {error}
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Username</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                    autoComplete="username"
                    placeholder="Enter username"
                    className="w-full bg-white/8 border border-white/15 text-white placeholder-gray-500 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-[#008753] focus:bg-white/12 transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    placeholder="Enter password"
                    className="w-full bg-white/8 border border-white/15 text-white placeholder-gray-500 rounded-xl pl-11 pr-12 py-3.5 text-sm focus:outline-none focus:border-[#008753] focus:bg-white/12 transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#008753] to-[#006B42] hover:from-[#009960] hover:to-[#008753] text-white font-bold py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-green-900/30 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Authenticating...
                  </>
                ) : (
                  <>
                    <Shield size={18} />
                    Sign In to Dashboard
                  </>
                )}
              </button>
            </form>

            {/* Footer note */}
            <p className="text-center text-gray-500 text-xs mt-8">
              Contact your system administrator if you've lost access.
            </p>
          </div>
        </div>

        {/* Bottom brand */}
        <p className="text-center text-gray-500 text-xs mt-5">
          © {new Date().getFullYear()} LTR Nigeria · Admin Portal v1.0
        </p>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
