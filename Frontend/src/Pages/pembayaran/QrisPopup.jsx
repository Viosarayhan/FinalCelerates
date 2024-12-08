import React from 'react';

export default function QrisPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Scan QRIS</h2>
        <img src="/public/assetsvivit/Qris.svg" alt="QRIS Barcode" className="mx-auto mb-4" />
        <p className="text-sm text-gray-600 mb-4">Silakan scan barcode untuk menyelesaikan pembayaran.</p>
        <button
          onClick={onClose}
          className="bg-[#FB6816] text-white py-2 px-4 rounded-full shadow-lg active:scale-95 transition-transform duration-150"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}
