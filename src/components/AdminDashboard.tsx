import React, { useState } from 'react';
import { X, Shield, Lock, Search, Filter, CheckCircle, Clock, Ban, DollarSign, Download, RefreshCw, Mail, MessageCircle, FileText } from 'lucide-react';
import { Appointment, AppointmentStatus, NotificationLog } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onUpdateStatus: (id: string, status: AppointmentStatus, paymentStatus?: 'Paid' | 'Pending') => void;
  notificationLogs: NotificationLog[];
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  appointments,
  onUpdateStatus,
  notificationLogs,
}) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'bookings' | 'logs' | 'stats'>('bookings');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123' || passcode === 'admin' || passcode === '1234') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect passcode! Hint: Use "admin123" or click Quick Bypass.');
    }
  };

  const filteredAppointments = appointments.filter((app) => {
    const matchStatus = statusFilter === 'All' || app.status === statusFilter;
    const matchSearch =
      !searchQuery ||
      app.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.bookingRef.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phone.includes(searchQuery);
    return matchStatus && matchSearch;
  });

  const totalRevenuePKR = appointments
    .filter((a) => a.status !== 'Cancelled')
    .reduce((sum, a) => sum + a.totalAmountPKR, 0);

  const exportCSV = () => {
    const headers = ['Booking Ref', 'Client Name', 'Phone', 'Date', 'Time', 'Service', 'Beautician', 'Status', 'Payment', 'Amount (PKR)'];
    const rows = appointments.map((a) => [
      a.bookingRef,
      a.fullName,
      a.phone,
      a.date,
      a.time,
      a.serviceName,
      a.beauticianName,
      a.status,
      a.paymentStatus,
      a.totalAmountPKR,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `eves_salon_bookings_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative max-w-5xl w-full bg-[#FFF8F5] rounded-3xl overflow-hidden border border-[#F8C8DC] shadow-2xl my-6 min-h-[600px] flex flex-col">
        {/* Header */}
        <div className="bg-[#5A2D3C] text-white p-6 flex justify-between items-center border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold">Salon Management Portal</h3>
              <p className="text-xs text-pink-100/70">Eve's Beauty Salon • Staff & Owner Admin</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[#B76E79] text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isAuthenticated ? (
          /* Login Screen */
          <div className="p-10 flex-1 flex flex-col items-center justify-center max-w-md mx-auto space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#5A2D3C] text-[#D4AF37] flex items-center justify-center shadow-lg">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="font-playfair text-2xl font-bold text-[#5A2D3C]">Admin Security Lock</h4>
              <p className="text-xs text-slate-500">
                Enter your administrative passcode to manage client appointments, view revenue metrics, and send notification reminders.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Passcode (e.g. admin123)"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-center text-sm focus:outline-none focus:border-[#B76E79]"
              />

              <button
                type="submit"
                className="w-full py-3 bg-[#5A2D3C] hover:bg-[#B76E79] text-white font-bold rounded-xl text-xs shadow-md"
              >
                Unlock Dashboard
              </button>

              <button
                type="button"
                onClick={() => setIsAuthenticated(true)}
                className="text-xs text-[#B76E79] underline font-medium cursor-pointer block mx-auto pt-2"
              >
                ⚡ Quick Bypass Login for Demo
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard Body */
          <div className="p-6 sm:p-8 flex-1 flex flex-col space-y-6">
            {/* Top Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-[#F8C8DC] shadow-sm space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Bookings</span>
                <span className="text-2xl font-extrabold text-[#5A2D3C]">{appointments.length}</span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#F8C8DC] shadow-sm space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Estimated Revenue</span>
                <span className="text-2xl font-extrabold text-emerald-700">
                  Rs. {totalRevenuePKR.toLocaleString()}
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#F8C8DC] shadow-sm space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Confirmed</span>
                <span className="text-2xl font-extrabold text-blue-600">
                  {appointments.filter((a) => a.status === 'Confirmed').length}
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#F8C8DC] shadow-sm space-y-1">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Pending Approval</span>
                <span className="text-2xl font-extrabold text-amber-600">
                  {appointments.filter((a) => a.status === 'Pending').length}
                </span>
              </div>
            </div>

            {/* Navigation Tabs & Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'bookings'
                      ? 'bg-[#5A2D3C] text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-[#F8C8DC]/30'
                  }`}
                >
                  Appointments List
                </button>

                <button
                  onClick={() => setActiveTab('logs')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'logs'
                      ? 'bg-[#5A2D3C] text-white shadow-sm'
                      : 'bg-white text-slate-600 hover:bg-[#F8C8DC]/30'
                  }`}
                >
                  Notification Logs ({notificationLogs.length})
                </button>
              </div>

              <button
                onClick={exportCSV}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" /> Export Bookings CSV
              </button>
            </div>

            {activeTab === 'bookings' && (
              <>
                {/* Search & Status Filters */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative flex-1 w-full">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search client name, ref, or phone..."
                      className="w-full bg-white text-xs text-slate-800 pl-9 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-1 w-full sm:w-auto overflow-x-auto pb-1">
                    {['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled'].map((st) => (
                      <button
                        key={st}
                        onClick={() => setStatusFilter(st)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer shrink-0 ${
                          statusFilter === st
                            ? 'bg-[#B76E79] text-white'
                            : 'bg-white text-slate-600 border border-slate-200'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Appointments Table */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto flex-1">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="bg-[#FFF8F5] border-b border-slate-200 text-[#5A2D3C] font-bold">
                        <th className="py-3 px-4">Ref</th>
                        <th className="py-3 px-4">Client</th>
                        <th className="py-3 px-4">Date & Time</th>
                        <th className="py-3 px-4">Service</th>
                        <th className="py-3 px-4">Beautician</th>
                        <th className="py-3 px-4">Amount</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredAppointments.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="py-8 text-center text-slate-400">
                            No appointments found matching filters.
                          </td>
                        </tr>
                      ) : (
                        filteredAppointments.map((app) => (
                          <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                            <td className="py-3 px-4 font-mono font-bold text-[#5A2D3C]">
                              {app.bookingRef}
                            </td>
                            <td className="py-3 px-4">
                              <span className="font-bold block text-slate-800">{app.fullName}</span>
                              <span className="text-[10px] text-slate-500">{app.phone}</span>
                            </td>
                            <td className="py-3 px-4 whitespace-nowrap">
                              {app.date} <br />
                              <span className="text-[10px] text-slate-500">{app.time}</span>
                            </td>
                            <td className="py-3 px-4 font-medium">{app.serviceName}</td>
                            <td className="py-3 px-4 text-slate-600">{app.beauticianName}</td>
                            <td className="py-3 px-4 font-bold text-[#B76E79]">
                              Rs. {app.totalAmountPKR.toLocaleString()} <br />
                              <span
                                className={`text-[9px] uppercase px-1.5 py-0.5 rounded ${
                                  app.paymentStatus === 'Paid'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {app.paymentStatus} ({app.paymentMethod})
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                                  app.status === 'Confirmed'
                                    ? 'bg-blue-100 text-blue-800'
                                    : app.status === 'Completed'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : app.status === 'Pending'
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {app.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right space-x-1 whitespace-nowrap">
                              {app.status === 'Pending' && (
                                <button
                                  onClick={() => onUpdateStatus(app.id, 'Confirmed', 'Paid')}
                                  className="bg-emerald-600 text-white text-[10px] px-2 py-1 rounded font-medium"
                                >
                                  Approve
                                </button>
                              )}
                              {app.status === 'Confirmed' && (
                                <button
                                  onClick={() => onUpdateStatus(app.id, 'Completed', 'Paid')}
                                  className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded font-medium"
                                >
                                  Complete
                                </button>
                              )}
                              {app.status !== 'Cancelled' && (
                                <button
                                  onClick={() => onUpdateStatus(app.id, 'Cancelled')}
                                  className="bg-red-50 text-red-600 border border-red-200 text-[10px] px-2 py-1 rounded font-medium"
                                >
                                  Cancel
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {activeTab === 'logs' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-3 flex-1 overflow-y-auto max-h-[350px]">
                <h4 className="font-bold text-slate-800 text-xs">Automated Client Notifications Log</h4>
                <div className="space-y-2">
                  {notificationLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs flex justify-between items-center"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#5A2D3C]">{log.type}</span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                            {log.channel}
                          </span>
                        </div>
                        <p className="text-slate-600 text-[11px]">{log.content}</p>
                        <span className="text-[10px] text-slate-400">To: {log.recipientPhone}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 shrink-0">{log.sentAt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
