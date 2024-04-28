import { initializePageProps2 } from '@/config/nextConfigs';
import { ErrorFeature } from '@/features';
import type { NextPage } from 'next';

const NotFound: NextPage = () => <ErrorFeature code={404} message="PAGE NOT FOUND" />;
export default NotFound;

export const getStaticProps = initializePageProps2({ namespaces: [] });
