'use client';

import useActiveChannel from '../hooks/useActiveChannel';

// @ts-ignore
const ActiveStatus = () => {
  useActiveChannel();

  return null;
};

export default ActiveStatus;
