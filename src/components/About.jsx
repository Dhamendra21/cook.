import React from 'react';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
    <div className="container w-8/12 mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Welcome to <strong>Cook</strong>, your ultimate destination for discovering a wide variety of delicious recipes from all around the world! Our mission is to simplify the process of finding and preparing the perfect meal for any occasion. Whether you're a seasoned chef or just starting out, RecipeFinder provides easy access to step-by-step instructions, ingredients, and cooking tips to help you create mouth-watering dishes.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        At RecipeFinder, we believe that cooking should be fun, enjoyable, and accessible to everyone. Our curated collection of recipes covers everything from quick weeknight dinners to special gourmet meals. You can search for recipes based on categories, ingredients, or even specific dietary preferences, ensuring there's something for every taste and lifestyle.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Our community of passionate food lovers also shares their favorite dishes, offering inspiration and new flavors to try. So whether you're looking for a hearty meal, a light snack, or something in between, we’ve got you covered.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Join us on this culinary journey and transform your kitchen into a place of creativity, fun, and delicious aromas. We hope RecipeFinder helps you discover new favorite recipes and makes cooking an adventure to look forward to every day!
      </p>
 
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
