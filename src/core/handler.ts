import { errorPage, indexPage } from '../pages/index.ts'
import { generateSubscription } from '../services/subscription.ts'
import { processWebSocket } from '../network/websocket.ts'
import { splitAndFilter } from '../utils/array.ts'

import type { Env } from './types.ts'

/**
 * Main request handler for the FoxCloud application
 * Handles both HTTP requests and WebSocket upgrade requests
 */
export async function handleRequest(
  request: Request,
  env: Env,
  ctx: ExecutionContext
): Promise<Response> {
  try {
    const upgradeHeader = request.headers.get('Upgrade')
    
    // Handle WebSocket upgrade requests
    if (upgradeHeader && upgradeHeader === 'websocket') {
      return processWebSocket(request, env)
    }
    
    // Handle regular HTTP requests
    const url = new URL(request.url)
    
    // Check for subscription requests with /sub path
    if (url.pathname === '/sub') {
      // Import the subscription page dynamically
      const { subscriptionPage } = await import('../pages/index.ts')
      return await subscriptionPage(env, request)
    }
    
    // Check for subscription requests with UUID in path
    const uuids = splitAndFilter(env.UUID, ',')
    for (const uuid of uuids) {
      if (url.pathname.includes(uuid)) {
        return new Response(generateSubscription(uuid, url), {
          status: 200,
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
          },
        })
      }
    }
    
    // Serve main index page
    return await indexPage()
  } catch (err) {
    console.error('Handler error:', err)
    return await errorPage()
  }
}