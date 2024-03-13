import React from 'react';
import { Briefcase, ThumbsUp, Medal } from 'lucide-react';

const KylieGrassApplication = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      {/* Experience Section */}
      <div className="flex flex-col items-center justify-center mb-8">
        <Briefcase className="text-blue-500 w-24 h-24" />
        <h2 className="mt-2 text-xl font-semibold">Proven Professional Experience</h2>
        <p>Kylie has extensive experience in her field, contributing to successful projects and companies.</p>
      </div>

      {/* Skills & Endorsement Section */}
      <div className="flex flex-col items-center justify-center mb-8">
        <ThumbsUp className="text-green-500 w-24 h-24" />
        <h2 className="mt-2 text-xl font-semibold">Highly Endorsed Skills</h2>
        <p>Widely recognized for her skills and professionalism with numerous endorsements from colleagues and industry leaders.</p>
      </div>

      {/* Achievement Section */}
      <div className="flex flex-col items-center justify-center">
        <Medal className="text-yellow-400 w-24 h-24" />
        <h2 className="mt-2 text-xl font-semibold">Remarkable Achievements</h2>
        <p>Received awards and recognition, showcasing her dedication and exceptional contributions to her field.</p>
      </div>
    </div>
  );
};

export default KylieGrassApplication;
