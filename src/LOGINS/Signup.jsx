import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auths from '../appwrite/appwrite';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react'; // For back icon

function Signup() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const signup = async (data) => {
    setError("");
    setLoading(true);

    try {
      const userAccount = await auths.register({
        name: data.name,
        email: data.email,
        pass: data.password,
      });

      if (userAccount) {

        const done = await auths.login({
          email: data.email,
          pass: data.password
        });

        if (done) {
          navigate('/');
        }
      }

    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };

  const password = watch("password");

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
        {/* Back to Home Button - Top Left Corner */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-8 z-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm hover:bg-white px-6 py-3 rounded-full shadow-xl text-gray-800 font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:text-red-700"
          >
            <ArrowLeft className="w-6 h-6" />
            Back to Home
          </Link>
        </motion.div>

        <div className="w-full max-w-6xl grid lg:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden">
          
          {/* Left Side */}
          <div className="hidden lg:block relative h-full min-h-screen">
            <img
              src="https://images.unsplash.com/photo-1618609252884-c29e29b32205?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmlyZSUyMGZpZ2h0ZXJ8ZW58MHx8MHx8fDA%3D"
              alt="Firefighter in action - Safety First"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-extrabold mb-4 drop-shadow-2xl"
              >
                Protecting Lives,<br />
                Every Single Day
              </motion.h1>
              <p className="text-xl opacity-90 drop-shadow-lg">
                SS.SAFETY SOLUTIONS – Your trusted partner in fire and safety equipment.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center bg-white p-10 lg:p-20">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-md"
            >
              {/* Logo */}
              <div className="text-center mb-10">
                <img 
                  src="https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-bright-orange-flame-icon-illustration-with-vibrant-yellow-and-red-tones-png-image_15160948.png" 
                  alt="Flame Icon"
                  className="h-20 w-20 mx-auto mb-4 drop-shadow-lg"
                />
                <h2 className="text-4xl font-extrabold text-red-800">Create Account</h2>
                <p className="text-gray-600 mt-2 text-lg">Join SS.SAFETY SOLUTIONS</p>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-700 rounded-xl text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit(signup)} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-600 transition text-lg"
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 3, message: "Name must be at least 3 characters" }
                    })}
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-2">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-600 transition text-lg"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Password</label>
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-600 transition text-lg"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "Password must be at least 8 characters" }
                    })}
                  />
                  {errors.password && <p className="text-red-600 text-sm mt-2">{errors.password.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 focus:border-orange-600 transition text-lg"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: value => value === password || "Passwords do not match"
                    })}
                  />
                  {errors.confirmPassword && <p className="text-red-600 text-sm mt-2">{errors.confirmPassword.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-gradient-to-r from-red-700 to-orange-600 hover:from-red-800 hover:to-orange-700 text-white font-extrabold text-xl rounded-xl shadow-xl transition transform hover:scale-105 disabled:opacity-70"
                >
                  {loading ? "Creating Account..." : "Sign Up"}
                </button>
              </form>

              <div className="text-center mt-10">
                <p className="text-gray-600 text-lg">
                  Already have an account?{" "}
                  <Link to="/login" className="text-orange-600 font-bold hover:text-red-700 underline">
                    Log In
                  </Link>
                </p>
              </div>

              <div className="lg:hidden text-center mt-12">
                <img 
                  src="https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-bright-orange-flame-icon-illustration-with-vibrant-yellow-and-red-tones-png-image_15160948.png"
                  alt="Flame Icon"
                  className="h-24 w-24 mx-auto opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;