import React from 'react';

function UnauthenticatedLayout({ children }) {
  return (
    <div className="container mt-4">
      {children}
    </div>
  );
}

export default UnauthenticatedLayout;
