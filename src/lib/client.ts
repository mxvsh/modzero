import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '~server/index';

export const trpc = createTRPCReact<AppRouter>({});
