import { useState } from 'react';
import { Button } from './ui/Button';
import { Mail, Linkedin } from 'lucide-react';
import { useMode } from '../contexts/ModeContext';

export function Contact({ theme = 'dark' }: { theme?: 'light' | 'dark' }) {
  const { isHiringMode } = useMode();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // POST to Google Apps Script endpoint
      await fetch('https://script.google.com/macros/s/AKfycbz57qjGROxPPUHR9muXI4ZDlE-zJ0NrGzf3f-CRXTkVsItQzuDH1EFFPzOmqbvJh7pb/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors', // Required to avoid CORS errors from Google Script redirect
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          notes: formData.notes
        }),
      });

      // With no-cors, we can't read the response, but if we get here without error, assume success
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        role: '',
        notes: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className={`relative py-32 px-6 lg:px-12 ${
      theme === 'light' ? 'bg-gradient-to-b from-transparent to-[#F9FAFB]' : 'bg-gradient-to-b from-transparent to-[#0B0B10]'
    }`}>
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <p className={`text-xs uppercase tracking-[0.2em] ${theme === 'light' ? 'text-[#DC2626]' : 'text-[#B91C1C]'}`}>
            Contact
          </p>
          <h2 className={`text-4xl lg:text-5xl ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>
            {isHiringMode ? 'Ready to hire differently?' : 'Ready to make your next move?'}
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${theme === 'light' ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
            {isHiringMode
              ? 'Whether you\'re building your first defense tech team or scaling an existing portfolio of programs, Waymaker helps you secure the talent that moves the mission forward.'
              : 'Whether you\'re looking for your next executive role or a mission-critical technical position, Waymaker connects you with curated opportunities that align with your clearances and experience.'}
          </p>
        </div>

        {/* Main Panel */}
        <div className={`rounded-2xl p-8 lg:p-12 ${
          theme === 'light' 
            ? 'bg-white border border-[#E5E7EB] shadow-lg' 
            : 'bg-[#151518] border border-[#2A2A32] shadow-[0_8px_64px_rgba(0,0,0,0.4)]'
        }`}>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-6">
              <h3 className={`text-xl mb-6 ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-xs uppercase tracking-wider mb-2 ${
                    theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
                  }`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      theme === 'light'
                        ? 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#111827] focus:border-[#DC2626] focus:ring-[#DC2626]/20'
                        : 'bg-[#0B0B10] border border-[#2A2A32] text-[#F9FAFB] focus:border-[#B91C1C] focus:ring-[#B91C1C]/20'
                    }`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className={`block text-xs uppercase tracking-wider mb-2 ${
                    theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
                  }`}>
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      theme === 'light'
                        ? 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#111827] focus:border-[#DC2626] focus:ring-[#DC2626]/20'
                        : 'bg-[#0B0B10] border border-[#2A2A32] text-[#F9FAFB] focus:border-[#B91C1C] focus:ring-[#B91C1C]/20'
                    }`}
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-xs uppercase tracking-wider mb-2 ${
                    theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      theme === 'light'
                        ? 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#111827] focus:border-[#DC2626] focus:ring-[#DC2626]/20'
                        : 'bg-[#0B0B10] border border-[#2A2A32] text-[#F9FAFB] focus:border-[#B91C1C] focus:ring-[#B91C1C]/20'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="role" className={`block text-xs uppercase tracking-wider mb-2 ${
                    theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
                  }`}>
                    Role type
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      theme === 'light'
                        ? 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#111827] focus:border-[#DC2626] focus:ring-[#DC2626]/20'
                        : 'bg-[#0B0B10] border border-[#2A2A32] text-[#F9FAFB] focus:border-[#B91C1C] focus:ring-[#B91C1C]/20'
                    }`}
                  >
                    <option value="">Select role type</option>
                    <option value="executive">Executive</option>
                    <option value="engineering">Engineering</option>
                    <option value="aiml">AI/ML & Data</option>
                    <option value="product">Product</option>
                    <option value="defense">Defense tech specialist</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className={`block text-xs uppercase tracking-wider mb-2 ${
                    theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
                  }`}>
                    Message
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      theme === 'light'
                        ? 'bg-[#F9FAFB] border border-[#E5E7EB] text-[#111827] focus:border-[#DC2626] focus:ring-[#DC2626]/20'
                        : 'bg-[#0B0B10] border border-[#2A2A32] text-[#F9FAFB] focus:border-[#B91C1C] focus:ring-[#B91C1C]/20'
                    }`}
                    placeholder={isHiringMode ? 'Tell us about your hiring needs...' : 'Tell us about your background and what you\'re looking for...'}
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </Button>

                {submitStatus === 'success' && (
                  <p className={`text-sm ${theme === 'light' ? 'text-[#16A34A]' : 'text-[#16A34A]'}`}>
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className={`text-sm ${theme === 'light' ? 'text-[#DC2626]' : 'text-[#B91C1C]'}`}>
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className={`text-xl mb-6 ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>Or reach out directly</h3>

              {/* Conditional ordering based on theme - Defense has Matt first, Search Group has Ben first */}
              {theme === 'dark' ? (
                <>
                  {/* Matt Robinson - First for Defense */}
                  <div className={`rounded-xl p-6 transition-colors duration-300 ${
                    theme === 'light'
                      ? 'bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#DC2626]/30'
                      : 'bg-[#0B0B10] border border-[#2A2A32] hover:border-[#4B4B55]'
                  }`}>
                    <div className="space-y-4">
                      <div>
                        <p className={`text-lg ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>Matt Robinson</p>
                        <p className={`text-xs uppercase tracking-wider ${theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>Co-Founder</p>
                      </div>
                      
                      <div className="space-y-3">
                        <a
                          href="https://www.linkedin.com/in/matt-j-robinson2/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 transition-colors duration-300 group ${
                            theme === 'light' 
                              ? 'text-[#6B7280] hover:text-[#DC2626]'
                              : 'text-[#9CA3AF] hover:text-[#B91C1C]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            theme === 'light'
                              ? 'bg-white group-hover:bg-[#FEE2E2]'
                              : 'bg-[#1C1C22] group-hover:bg-[#B91C1C]/20'
                          }`}>
                            <Linkedin size={16} />
                          </div>
                          <span>LinkedIn</span>
                        </a>
                        
                        <a
                          href="mailto:info@waymakerstaffing.com"
                          className={`flex items-center gap-3 transition-colors duration-300 group ${
                            theme === 'light' 
                              ? 'text-[#6B7280] hover:text-[#DC2626]'
                              : 'text-[#9CA3AF] hover:text-[#B91C1C]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            theme === 'light'
                              ? 'bg-white group-hover:bg-[#FEE2E2]'
                              : 'bg-[#1C1C22] group-hover:bg-[#B91C1C]/20'
                          }`}>
                            <Mail size={16} />
                          </div>
                          <span>info@waymakerstaffing.com</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Ben Robinson - Second for Defense */}
                  <div className={`rounded-xl p-6 transition-colors duration-300 ${
                    theme === 'light'
                      ? 'bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#DC2626]/30'
                      : 'bg-[#0B0B10] border border-[#2A2A32] hover:border-[#4B4B55]'
                  }`}>
                    <div className="space-y-4">
                      <div>
                        <p className={`text-lg ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>Ben Robinson</p>
                        <p className={`text-xs uppercase tracking-wider ${theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>Co-Founder</p>
                      </div>
                      
                      <div className="space-y-3">
                        <a
                          href="https://www.linkedin.com/in/benrobinson3/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 transition-colors duration-300 group ${
                            theme === 'light' 
                              ? 'text-[#6B7280] hover:text-[#DC2626]'
                              : 'text-[#9CA3AF] hover:text-[#B91C1C]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            theme === 'light'
                              ? 'bg-white group-hover:bg-[#FEE2E2]'
                              : 'bg-[#1C1C22] group-hover:bg-[#B91C1C]/20'
                          }`}>
                            <Linkedin size={16} />
                          </div>
                          <span>LinkedIn</span>
                        </a>
                        
                        <a
                          href="mailto:info@waymakerstaffing.com"
                          className={`flex items-center gap-3 transition-colors duration-300 group ${
                            theme === 'light' 
                              ? 'text-[#6B7280] hover:text-[#DC2626]'
                              : 'text-[#9CA3AF] hover:text-[#B91C1C]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            theme === 'light'
                              ? 'bg-white group-hover:bg-[#FEE2E2]'
                              : 'bg-[#1C1C22] group-hover:bg-[#B91C1C]/20'
                          }`}>
                            <Mail size={16} />
                          </div>
                          <span>info@waymakerstaffing.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Ben Robinson - First for Search Group */}
                  <div className={`rounded-xl p-6 transition-colors duration-300 ${
                    theme === 'light'
                      ? 'bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#DC2626]/30'
                      : 'bg-[#0B0B10] border border-[#2A2A32] hover:border-[#4B4B55]'
                  }`}>
                    <div className="space-y-4">
                      <div>
                        <p className={`text-lg ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>Ben Robinson</p>
                        <p className={`text-xs uppercase tracking-wider ${theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>Co-Founder</p>
                      </div>
                      
                      <div className="space-y-3">
                        <a
                          href="https://www.linkedin.com/in/benrobinson3/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 transition-colors duration-300 group ${
                            theme === 'light' 
                              ? 'text-[#6B7280] hover:text-[#DC2626]'
                              : 'text-[#9CA3AF] hover:text-[#B91C1C]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            theme === 'light'
                              ? 'bg-white group-hover:bg-[#FEE2E2]'
                              : 'bg-[#1C1C22] group-hover:bg-[#B91C1C]/20'
                          }`}>
                            <Linkedin size={16} />
                          </div>
                          <span>LinkedIn</span>
                        </a>
                        
                        <a
                          href="mailto:info@waymakerstaffing.com"
                          className={`flex items-center gap-3 transition-colors duration-300 group ${
                            theme === 'light' 
                              ? 'text-[#6B7280] hover:text-[#DC2626]'
                              : 'text-[#9CA3AF] hover:text-[#B91C1C]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            theme === 'light'
                              ? 'bg-white group-hover:bg-[#FEE2E2]'
                              : 'bg-[#1C1C22] group-hover:bg-[#B91C1C]/20'
                          }`}>
                            <Mail size={16} />
                          </div>
                          <span>info@waymakerstaffing.com</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Matt Robinson - Second for Search Group */}
                  <div className={`rounded-xl p-6 transition-colors duration-300 ${
                    theme === 'light'
                      ? 'bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#DC2626]/30'
                      : 'bg-[#0B0B10] border border-[#2A2A32] hover:border-[#4B4B55]'
                  }`}>
                    <div className="space-y-4">
                      <div>
                        <p className={`text-lg ${theme === 'light' ? 'text-[#111827]' : 'text-[#F9FAFB]'}`}>Matt Robinson</p>
                        <p className={`text-xs uppercase tracking-wider ${theme === 'light' ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>Co-Founder</p>
                      </div>
                      
                      <div className="space-y-3">
                        <a
                          href="https://www.linkedin.com/in/matt-j-robinson2/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 transition-colors duration-300 group ${
                            theme === 'light' 
                              ? 'text-[#6B7280] hover:text-[#DC2626]'
                              : 'text-[#9CA3AF] hover:text-[#B91C1C]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            theme === 'light'
                              ? 'bg-white group-hover:bg-[#FEE2E2]'
                              : 'bg-[#1C1C22] group-hover:bg-[#B91C1C]/20'
                          }`}>
                            <Linkedin size={16} />
                          </div>
                          <span>LinkedIn</span>
                        </a>
                        
                        <a
                          href="mailto:info@waymakerstaffing.com"
                          className={`flex items-center gap-3 transition-colors duration-300 group ${
                            theme === 'light' 
                              ? 'text-[#6B7280] hover:text-[#DC2626]'
                              : 'text-[#9CA3AF] hover:text-[#B91C1C]'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                            theme === 'light'
                              ? 'bg-white group-hover:bg-[#FEE2E2]'
                              : 'bg-[#1C1C22] group-hover:bg-[#B91C1C]/20'
                          }`}>
                            <Mail size={16} />
                          </div>
                          <span>info@waymakerstaffing.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}