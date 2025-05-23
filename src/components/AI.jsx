import React from "react";

export default function Machine_Learning() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 sm:p-10 border-t-4 border-purple-600 transition-all duration-500 hover:shadow-2xl relative">
        {/* Subtle decorative line */}
        <div className="absolute top-0 left-0 w-16 h-1 bg-purple-300 rounded-full -translate-y-4"></div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
          Machine Learning for Traffic Accident Severity Prediction
        </h1>
        <p className="text-gray-800 text-base sm:text-xl leading-relaxed font-poppins tracking-wide mb-6 sm:mb-8">
          This project leverages machine learning to predict road traffic accident severity, integrating models such as Logistic Regression, 
          Random Forest, k-Nearest Neighbors, and Naive Bayes. Using the RTA Dataset, it classifies accidents into Slight, Serious, and Fatal 
          Injury categories through meticulous data preprocessing and SMOTE for class balancing. The effort combines analytical precision with 
          practical application, offering a robust solution to real-world classification challenges with clarity and elegance.
        </p>

        {/* GitHub Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="https://github.com/foziamohammed/DH-AES.git"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 sm:py-4 px-8 sm:px-10 rounded-lg shadow-md text-lg sm:text-xl font-poppins tracking-wide hover:bg-purple-700 transition-all duration-300 ease-in-out"
          >
            View GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
