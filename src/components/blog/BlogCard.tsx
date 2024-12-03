import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export function BlogCard({ title, excerpt, date, readTime, image, slug }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a
          href={`/blog/${slug}`}
          className="text-blue-900 font-semibold hover:text-blue-700"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}