// dashboard/subscribers/page.jsx
export default async function SubsNews() {
  return <p>Comming Soooooon....</p>;
  // console.log(process.env.NEXT_PUBLIC_API_URL);

  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/subscribers`);
  // const data = await res.json();
  // console.log(data);

  // if (!data || data.length === 0)
  //   return (
  //     <p className="text-light-gray text-center text-sm">No data available</p>
  //   );

  // return (
  //   <table className="mx-auto border-collapse text-secondary-primary-color bg-main-primary-color text-xs font-sans">
  //     <thead className="bg-main-color text-main-primary-color">
  //       <tr>
  //         {[
  //           "Email",
  //           "IP",
  //           "Hostname",
  //           "City",
  //           "Region",
  //           "Country",
  //           "Location",
  //           "Organization",
  //           "Postal",
  //           "Timezone",
  //           "Created At",
  //           "Updated At",
  //         ].map((heading) => (
  //           <th
  //             key={heading}
  //             className="py-1 px-2 text-left font-semibold border-b border-main-secondary-color"
  //           >
  //             {heading}
  //           </th>
  //         ))}
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {data.map(
  //         ({
  //           _id,
  //           email,
  //           ip,
  //           hostname,
  //           city,
  //           region,
  //           country,
  //           loc,
  //           org,
  //           postal,
  //           timezone,
  //           createdAt,
  //           updatedAt,
  //         }) => (
  //           <tr
  //             key={_id}
  //             className="border-b border-main-secondary-color hover:bg-main-secondary-color transition-colors"
  //           >
  //             <td className="py-1 px-2 text-main-color">{email}</td>
  //             <td className="py-1 px-2 text-main-color">{ip}</td>
  //             <td className="py-1 px-2 text-main-color">{hostname}</td>
  //             <td className="py-1 px-2 text-main-color">{city}</td>
  //             <td className="py-1 px-2 text-main-color">{region}</td>
  //             <td className="py-1 px-2 text-main-color">{country}</td>
  //             <td className="py-1 px-2 text-main-color">{loc}</td>
  //             <td className="py-1 px-2 text-main-color">{org}</td>
  //             <td className="py-1 px-2 text-main-color">{postal}</td>
  //             <td className="py-1 px-2 text-main-color">{timezone}</td>

  //             <td className="py-1 px-2 text-main-color">
  //               {new Date(createdAt).toLocaleString()}
  //             </td>
  //             <td className="py-1 px-2 text-main-color">
  //               {new Date(updatedAt).toLocaleString()}
  //             </td>
  //           </tr>
  //         )
  //       )}
  //     </tbody>
  //   </table>
  // );
}
