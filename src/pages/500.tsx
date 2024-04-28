import { initializePageProps2 } from '@/config/nextConfigs';
import { ErrorFeature } from '@/features';
import type { NextPage } from 'next';

const ServerError: NextPage = () => <ErrorFeature code={500} message="SERVER ERROR" />;
export default ServerError;

export const getStaticProps = initializePageProps2({ namespaces: [] });
