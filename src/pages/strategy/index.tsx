import React from 'react';
import type { FC } from 'react';
import { useRequest } from 'alita';
import { query } from './service';
import styles from './index.less';

interface StrategyPageProps {}

const StrategyPage: FC<StrategyPageProps> = () => {
  const { data } = useRequest(query);
  return <div className={styles.center}>Hello {data?.text}</div>;
};

export default StrategyPage;
