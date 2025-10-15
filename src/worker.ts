import { handleRequest } from './core/handler'
import type { Env } from './core/types'

/**
 * FoxCloud Worker - Main entry point
 * VLESS proxy server running on Cloudflare Workers
 */
export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    return handleRequest(request, env, ctx)
  },
} satisfies ExportedHandler<Env>