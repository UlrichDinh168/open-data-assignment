// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import LoadingSkeleton from "./LoadingSkeleton";
// import ChartNoteItem from "./ChartNoteItem";
// const ChartCard = ({
//   title,
//   chartData,
//   data,
//   centerText,
//   centerNumber,
//   loading,
//   chartIndex,
// }) => {
//   const getOptions = () => ({
//     legend: {
//       display: false,
//     },
//     segmentShowStroke: false,
//     elements: {
//       arc: {
//         borderWidth: 0,
//       },
//     },
//     responsive: false,
//     maintainAspectRatio: true,
//     tooltips: {
//       callbacks: {
//         title: function (tooltipItem, data) {
//           const { datasets } = data;
//           const { datasetIndex, index } = tooltipItem[0];
//           return datasets[datasetIndex].labels[index];
//         },
//         label: function (tooltipItem, data) {
//           return "";
//         },
//         afterLabel: function (tooltipItem, data) {
//           const { datasetIndex } = tooltipItem;
//           var dataset = data["datasets"][datasetIndex];
//           let total = 0;
//           if (dataset.data && dataset.data.length > 0) {
//             dataset.data.forEach((item) => (total += item));
//           }
//           var percent = Math.round(
//             (dataset["data"][tooltipItem["index"]] / total) * 100
//           );
//           return percent + "%";
//         },
//       },
//     },
//   });
//   const datasetKeyProvider = () => {
//     return btoa(Math.random()).substring(0, 12);
//   };
//   const renderLabels = () => {
//     const { datasets } = data;
//     const normalizedSets = datasets.map((set) => {
//       const { labels, backgroundColor } = set;

//       return {
//         title: set.title,
//         labels: labels.map((label, key) => ({
//           label,
//           color: backgroundColor[key],
//           className: backgroundColor[key],
//         })),
//       };
//     });
//     return normalizedSets.map((set, key) => {
//       return <LabelGroup labels={set.labels} title={set.title} key={key} />;
//     });
//   };
//   const renderContent = () => {
//     if (!data || data.length == 0) {
//       return null;
//     }
//     return (
//       <div className="chart-card__chart">
//         <div className="chart-card__chart-content">
//           {centerText ? (
//             <div className="label">
//               <span className="number">{centerNumber}</span>
//               <span className="text">{centerText}</span>
//             </div>
//           ) : null}
//           <div className="chart">
//             <Doughnut
//               data={chartData}
//               options={getOptions()}
//               width={200}
//               height={200}
//               datasetKeyProvider={datasetKeyProvider}
//             />
//           </div>
//         </div>
//         <div className="chart-card__chart-labels">{renderLabels()}</div>
//       </div>
//     );
//   };
//   return (
//     <div className="chart-card">
//       {title ? <h2 className="chart-card__chart-title">{title}</h2> : null}
//       {loading ? <LoadingSkeleton /> : renderContent()}
//     </div>
//   );
// };
// const LabelGroup = ({ labels, title }) => {
//   return (
//     <div className="chart-label__group">
//       <h3>{title}</h3>
//       {labels.map((label, key) => (
//         <ChartNoteItem note={label} key={key} />
//       ))}
//     </div>
//   );
// };

// export default ChartCard;
