import React from "react";
import { REVIEWS } from "../lib/index.js";

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/*  Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Reviews
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {REVIEWS.text}
          </p>
        </div>

        {/* 💬 Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              {/* 🖼️ User Image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-neutral-200"
              />
              {/* 💬 Review Text */}
              <p className="text-neutral-700 italic mb-4">“{review.review}”</p>
              {/* 👤 User Info */}
              <h4 className="font-semibold text-neutral-800">{review.name}</h4>
              <span className="text-sm text-neutral-500">{review.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
