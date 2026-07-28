import React from 'react'

const PostAndUpdateDate = ({ createdAt, updatedAt }) => {
  const published = new Date(createdAt);
  const updated = new Date(updatedAt);
  
  // চেক করা হচ্ছে পোস্টটি কি আপডেট করা হয়েছে কি না
  const isUpdated = updated.getTime() !== published.getTime();

  // তারিখ ফরম্যাট করার অপশন (উদা: ৯ মার্চ, ২০২৬)
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div className="flex flex-wrap gap-2 text-sm text-gray-600 font-sans">
      <span className="bg-blue-50 px-2 py-1 rounded">
        <span className="font-semibold text-blue-700">প্রকাশিত: </span>
        {published.toLocaleDateString('bn-BD', dateOptions)}
      </span>

      {isUpdated && (
        <span className="bg-green-50 px-2 py-1 rounded border-l-2 border-green-500">
          <span className="font-semibold text-green-700">আপডেট: </span>
          {updated.toLocaleDateString('bn-BD', dateOptions)}
        </span>
      )}
    </div>
  );
}

export default PostAndUpdateDate;