import { ReactNode } from 'react';

import getConversations from '../actions/getConversations';
import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationList from './components/ConversationList';

export default async function ConversationsLayout({ children }: { children: ReactNode }) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full bg-gradient-to-r from-cyan-300 to-blue-300">
        <ConversationList users={users} title="Messages" initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  );
}
