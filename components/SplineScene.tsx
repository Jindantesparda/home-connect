import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
        <Spline scene="https://prod.spline.design/i5FP-w-TR3q5Y5H9/scene.splinecode" />
    </div>
  );
};

export default SplineScene;
