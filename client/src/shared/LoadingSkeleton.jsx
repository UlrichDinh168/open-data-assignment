import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
export default function LoadingSkeleton() {
  return (
    <div className="loading-skeleton">
      {/* <div className='row'>
                 <Skeleton variant='circle' width={40} height={40} />
                 <Skeleton variant='text' />
             </div> */}
      <Skeleton variant="rect" />
      <Skeleton variant="rect" />
      <Skeleton variant="rect" />
      <Skeleton variant="rect" />
      <Skeleton variant="rect" />
      <Skeleton variant="rect" />
    </div>
  );
}
