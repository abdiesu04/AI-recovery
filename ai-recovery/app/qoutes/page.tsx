// import React, { useState, useEffect } from 'react';
// import { Button } from '@mui/material';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
// import Link from 'next/link';

// const InspirationalQuotesCard: React.FC = () => {
//   const [quotes, setQuotes] = useState<{ quote: string, author: string }[]>([]);

//   useEffect(() => {
//     // Fetch quotes from quotes.json on component mount
//     fetch('/quotes.json')
//       .then(response => response.json())
//       .then(data => setQuotes(data))
//       .catch(error => console.error('Error fetching quotes:', error));
//   }, []);

//   const getRandomQuote = () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     return quotes[randomIndex];
//   };

//   const handleRandomQuote = () => {
//     const randomQuote = getRandomQuote();
//     alert(`"${randomQuote.quote}" - ${randomQuote.author}`);
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
//       <div className="flex items-center mb-4">
//         <FormatQuoteIcon style={{ fontSize: 40, color: '#4A90E2' }} />
//         <h2 className="text-2xl font-bold ml-2 text-gray-900">Inspirational Quotes</h2>
//       </div>
//       {quotes.length > 0 ? (
//         <>
//           <p className="mt-2 text-gray-700 italic">
//             "{quotes[0].quote}"
//           </p>
//           <p className="mt-2 text-lg text-gray-900 font-semibold">
//             - {quotes[0].author}
//           </p>
//           <div className="flex items-center mt-4">
//             <EmojiObjectsIcon style={{ fontSize: 30, color: '#FF9800' }} />
//             <p className="ml-2 text-gray-600">
//               Find motivation and encouragement to stay strong on your journey to recovery.
//             </p>
//           </div>
//           <div className="flex mt-4 space-x-4">
//             <Button variant="contained" color="primary" onClick={handleRandomQuote}>
//               Random Quote
//             </Button>
//             <Link href="/quotes" passHref>
//               <Button component="a" variant="outlined">
//                 View All Quotes
//               </Button>
//             </Link>
//           </div>
//         </>
//       ) : (
//         <p>Loading quotes...</p>
//       )}
//     </div>
//   );
// };

// export default InspirationalQuotesCard;
