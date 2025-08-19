import { agentPlaygroundFlagFrontend } from '@/flags';
import { isFlagEnabled } from '@/lib/feature-flags';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Agent Conversation | ApnaAI Suna',
  description: 'Interactive agent conversation powered by ApnaAI Suna',
  openGraph: {
    title: 'Agent Conversation | ApnaAI Suna',
    description: 'Interactive agent conversation powered by ApnaAI Suna',
    type: 'website',
  },
};

export default async function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
