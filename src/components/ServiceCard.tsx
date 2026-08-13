import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="card p-6 border border-gray-100">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-sage-100">
              <span className="text-sage-600 text-lg">{icon}</span>
            </div>
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
